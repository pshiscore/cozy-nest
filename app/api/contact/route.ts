import { NextRequest, NextResponse } from "next/server";

const BREVO_API = "https://api.brevo.com/v3";
const LIDIA_EMAIL = "hello@cozynestbylidia.com";
const LIDIA_NAME = "Lidia @ Cozy Nest";
const SENDER = { name: "Cozy Nest by Lidia", email: "hello@cozynestbylidia.com" };
const LIST_ID = 3;

const ALLOWED_SERVICE_TYPES = [
  "Free Walkthrough · 20 min",
  "Home Reset · 60 min",
  "Home Reset · 90 min",
  "Mommy Reset · 1 hr",
  "Not sure — help me decide",
] as const;

const ALLOWED_FREQUENCIES = [
  "2× / week",
  "1× / week",
  "One-time visit",
  "Not sure — help me decide",
] as const;

const ALLOWED_ADDONS = [
  "Fridge Cleaning",
  "Pantry Reset",
  "Organization Projects",
  "Deep Clean",
  "Toy Purge",
] as const;

type ServiceType = (typeof ALLOWED_SERVICE_TYPES)[number];
type ServiceFrequency = (typeof ALLOWED_FREQUENCIES)[number];
type Addon = (typeof ALLOWED_ADDONS)[number];

interface ContactPayload {
  email: string;
  firstName: string;
  neighborhood?: string;
  serviceType: ServiceType;
  serviceFrequency: ServiceFrequency;
  addons?: Addon[];
  message?: string;
}

function brevoHeaders() {
  return {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": process.env.BREVO_API_KEY!,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const body: Partial<ContactPayload> = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, firstName, neighborhood, serviceType, serviceFrequency, addons, message } = body;

  // Required field validation
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!firstName?.trim()) {
    return NextResponse.json({ error: "First name is required." }, { status: 400 });
  }
  if (!serviceType || !(ALLOWED_SERVICE_TYPES as readonly string[]).includes(serviceType)) {
    return NextResponse.json({ error: "Please select a valid service type." }, { status: 400 });
  }
  if (!serviceFrequency || !(ALLOWED_FREQUENCIES as readonly string[]).includes(serviceFrequency)) {
    return NextResponse.json({ error: "Please select a valid rhythm." }, { status: 400 });
  }
  if (addons) {
    const invalidAddon = addons.find(
      (a) => !(ALLOWED_ADDONS as readonly string[]).includes(a)
    );
    if (invalidAddon) {
      return NextResponse.json({ error: `Invalid add-on: ${invalidAddon}` }, { status: 400 });
    }
  }

  // Build attributes object — only include keys with real values
  const attributes: Record<string, string> = {
    FIRSTNAME: firstName.trim(),
    SERVICE_TYPE: serviceType,
    SERVICE_FREQUENCY: serviceFrequency,
    LEAD_SOURCE: "Contact Form",
  };
  if (neighborhood?.trim()) attributes.NEIGHBORHOOD = neighborhood.trim();
  if (addons && addons.length > 0) attributes.ADDONS = addons.join(", ");
  if (message?.trim()) attributes.MESSAGE = message.trim();

  // 1. Upsert contact — critical
  const contactRes = await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers: brevoHeaders(),
    body: JSON.stringify({
      email,
      attributes,
      listIds: [LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!contactRes.ok && contactRes.status !== 204) {
    const err = await contactRes.text();
    console.error("Brevo contact upsert failed:", contactRes.status, err);
    return NextResponse.json(
      { error: "Could not save your details. Please try again." },
      { status: 502 }
    );
  }

  // Build Lidia's notification HTML — only render sections with values
  const notificationHtml = `
    <h2 style="font-family:sans-serif;color:#3d5c44;margin-bottom:4px">
      🌿 New inquiry from ${firstName.trim()}
    </h2>

    <h3 style="font-family:sans-serif;color:#7a9478;margin-top:24px;margin-bottom:8px;text-transform:uppercase;font-size:11px;letter-spacing:1px">Contact</h3>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Name:</strong> ${firstName.trim()}</p>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Email:</strong> ${email}</p>
    ${neighborhood?.trim() ? `<p style="font-family:sans-serif;margin:4px 0"><strong>Neighborhood:</strong> ${neighborhood.trim()}</p>` : ""}

    <h3 style="font-family:sans-serif;color:#7a9478;margin-top:24px;margin-bottom:8px;text-transform:uppercase;font-size:11px;letter-spacing:1px">Service</h3>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Which Reset:</strong> ${serviceType}</p>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Rhythm:</strong> ${serviceFrequency}</p>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Add-ons:</strong> ${addons && addons.length > 0 ? addons.join(", ") : "None selected"}</p>

    ${
      message?.trim()
        ? `<h3 style="font-family:sans-serif;color:#7a9478;margin-top:24px;margin-bottom:8px;text-transform:uppercase;font-size:11px;letter-spacing:1px">Message</h3>
           <p style="font-family:sans-serif;margin:4px 0">${message.trim()}</p>`
        : ""
    }

    <p style="font-family:sans-serif;color:#7a9478;font-style:italic;margin-top:24px">
      Reply directly to this email to reach them.
    </p>
  `.trim();

  // Confirmation email body — swap middle line for "not sure" case
  const isUndecided = serviceType === "Not sure — help me decide";
  const confirmationMiddleLine = isUndecided
    ? "Lidia got your note and will reply within 24 hours to help you figure out the right fit."
    : `Lidia got your note about a <strong>${serviceType}</strong> and will reply within 24 hours with next steps.`;

  const confirmationHtml = `
    <p style="font-family:sans-serif">Hi ${firstName.trim()},</p>
    <p style="font-family:sans-serif;line-height:1.7">${confirmationMiddleLine}</p>
    ${
      addons && addons.length > 0
        ? `<p style="font-family:sans-serif;line-height:1.7">If you mentioned add-ons or anything special, she'll factor those in.</p>`
        : ""
    }
    <p style="font-family:sans-serif">— The Cozy Nest team<br>
    <a href="mailto:hello@cozynestbylidia.com" style="color:#7a9478">hello@cozynestbylidia.com</a></p>
  `.trim();

  const confirmationText = isUndecided
    ? `Hi ${firstName.trim()},\n\nLidia got your note and will reply within 24 hours to help you figure out the right fit.\n\n— The Cozy Nest team\nhello@cozynestbylidia.com`
    : `Hi ${firstName.trim()},\n\nLidia got your note about a ${serviceType} and will reply within 24 hours with next steps.${addons && addons.length > 0 ? "\n\nIf you mentioned add-ons or anything special, she'll factor those in." : ""}\n\n— The Cozy Nest team\nhello@cozynestbylidia.com`;

  // 2 & 3. Emails — best-effort
  await Promise.allSettled([
    fetch(`${BREVO_API}/smtp/email`, {
      method: "POST",
      headers: brevoHeaders(),
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email: LIDIA_EMAIL, name: LIDIA_NAME }],
        replyTo: { email, name: firstName.trim() },
        subject: `New booking request from ${firstName.trim()}`,
        htmlContent: notificationHtml,
        textContent: `New inquiry from ${firstName.trim()}\n\nCONTACT\nName: ${firstName.trim()}\nEmail: ${email}${neighborhood?.trim() ? `\nNeighborhood: ${neighborhood.trim()}` : ""}\n\nSERVICE\nWhich Reset: ${serviceType}\nRhythm: ${serviceFrequency}\nAdd-ons: ${addons && addons.length > 0 ? addons.join(", ") : "None selected"}${message?.trim() ? `\n\nMESSAGE\n${message.trim()}` : ""}`,
      }),
    }).then(async (r) => {
      if (!r.ok) console.error("Lidia notification email failed:", r.status, await r.text());
    }),

    fetch(`${BREVO_API}/smtp/email`, {
      method: "POST",
      headers: brevoHeaders(),
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email, name: firstName.trim() }],
        subject: "We got your message — come home to calm.",
        htmlContent: confirmationHtml,
        textContent: confirmationText,
      }),
    }).then(async (r) => {
      if (!r.ok) console.error("Confirmation email failed:", r.status, await r.text());
    }),
  ]);

  return NextResponse.json({ success: true });
}
