import { NextRequest, NextResponse } from "next/server";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  SERVICE_TYPES,
  SERVICE_FREQUENCIES,
  ADDONS,
  type ServiceTypeValue,
  type ServiceFrequencyValue,
  type AddonValue,
  getServiceTypeLabel,
  getServiceFrequencyLabel,
  getAddonLabel,
} from "@/lib/form-labels";

const BREVO_API = "https://api.brevo.com/v3";
const LIDIA_EMAIL = "hello@cozynestbylidia.com";
const LIDIA_NAME = "Lidia @ Cozy Nest";
const SENDER = { name: "Cozy Nest by Lidia", email: "hello@cozynestbylidia.com" };
const LIST_ID = 3;

const VALID_SERVICE_TYPES = Object.keys(SERVICE_TYPES) as ServiceTypeValue[];
const VALID_FREQUENCIES = Object.keys(SERVICE_FREQUENCIES) as ServiceFrequencyValue[];
const VALID_ADDONS = Object.keys(ADDONS) as AddonValue[];

interface ContactPayload {
  email: string;
  firstName: string;
  phone?: string; // E.164 format, e.g. "+12485551234"
  neighborhood?: string;
  serviceType: ServiceTypeValue;
  serviceFrequency: ServiceFrequencyValue;
  addons?: AddonValue[];
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

  const { email, firstName, phone, neighborhood, serviceType, serviceFrequency, addons, message } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!firstName?.trim()) {
    return NextResponse.json({ error: "First name is required." }, { status: 400 });
  }
  if (!serviceType || !VALID_SERVICE_TYPES.includes(serviceType)) {
    return NextResponse.json({ error: "Please select a valid service type." }, { status: 400 });
  }
  if (!serviceFrequency || !VALID_FREQUENCIES.includes(serviceFrequency)) {
    return NextResponse.json({ error: "Please select a valid rhythm." }, { status: 400 });
  }
  if (addons) {
    const invalid = addons.find((a) => !VALID_ADDONS.includes(a));
    if (invalid) {
      return NextResponse.json({ error: `Invalid add-on: ${invalid}` }, { status: 400 });
    }
  }
  if (phone) {
    const parsed = parsePhoneNumberFromString(phone, "US");
    if (!parsed?.isValid()) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }
  }

  // Build Brevo attributes — only include keys with real values
  const attributes: Record<string, string> = {
    FIRSTNAME: firstName.trim(),
    SERVICE_TYPE: serviceType,
    SERVICE_FREQUENCY: serviceFrequency,
    LEAD_SOURCE: "contact_form",
  };
  if (phone) attributes.SMS = phone;
  if (neighborhood?.trim()) attributes.NEIGHBORHOOD = neighborhood.trim();
  if (addons && addons.length > 0) attributes.ADDONS = addons.join(",");
  if (message?.trim()) attributes.MESSAGE = message.trim();

  // 1. Upsert contact — critical
  const contactRes = await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers: brevoHeaders(),
    body: JSON.stringify({ email, attributes, listIds: [LIST_ID], updateEnabled: true }),
  });

  if (!contactRes.ok && contactRes.status !== 204) {
    const err = await contactRes.text();
    console.error("Brevo contact upsert failed:", contactRes.status, err);
    return NextResponse.json(
      { error: "Could not save your details. Please try again." },
      { status: 502 }
    );
  }

  // Translate phone to national display format for emails
  const phoneDisplay = phone
    ? (parsePhoneNumberFromString(phone, "US")?.formatNational() ?? phone)
    : null;

  // Translate identifiers to human-readable labels for emails
  const serviceLabel = getServiceTypeLabel(serviceType);
  const frequencyLabel = getServiceFrequencyLabel(serviceFrequency);
  const addonLabels = addons && addons.length > 0
    ? addons.map(getAddonLabel).join(", ")
    : "None selected";

  const notificationHtml = `
    <h2 style="font-family:sans-serif;color:#3d5c44;margin-bottom:4px">
      🌿 New inquiry from ${firstName.trim()}
    </h2>

    <h3 style="font-family:sans-serif;color:#7a9478;margin-top:24px;margin-bottom:8px;text-transform:uppercase;font-size:11px;letter-spacing:1px">Contact</h3>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Name:</strong> ${firstName.trim()}</p>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Email:</strong> ${email}</p>
    ${phoneDisplay ? `<p style="font-family:sans-serif;margin:4px 0"><strong>Phone:</strong> ${phoneDisplay}</p>` : ""}
    ${neighborhood?.trim() ? `<p style="font-family:sans-serif;margin:4px 0"><strong>Neighborhood:</strong> ${neighborhood.trim()}</p>` : ""}

    <h3 style="font-family:sans-serif;color:#7a9478;margin-top:24px;margin-bottom:8px;text-transform:uppercase;font-size:11px;letter-spacing:1px">Service</h3>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Which Reset:</strong> ${serviceLabel}</p>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Rhythm:</strong> ${frequencyLabel}</p>
    <p style="font-family:sans-serif;margin:4px 0"><strong>Add-ons:</strong> ${addonLabels}</p>

    ${message?.trim() ? `
    <h3 style="font-family:sans-serif;color:#7a9478;margin-top:24px;margin-bottom:8px;text-transform:uppercase;font-size:11px;letter-spacing:1px">Message</h3>
    <p style="font-family:sans-serif;margin:4px 0">${message.trim()}</p>` : ""}

    <p style="font-family:sans-serif;color:#7a9478;font-style:italic;margin-top:24px">
      Reply directly to this email to reach them.
    </p>
  `.trim();

  const notificationText =
    `New inquiry from ${firstName.trim()}\n\n` +
    `CONTACT\nName: ${firstName.trim()}\nEmail: ${email}` +
    (phoneDisplay ? `\nPhone: ${phoneDisplay}` : "") +
    (neighborhood?.trim() ? `\nNeighborhood: ${neighborhood.trim()}` : "") +
    `\n\nSERVICE\nWhich Reset: ${serviceLabel}\nRhythm: ${frequencyLabel}\nAdd-ons: ${addonLabels}` +
    (message?.trim() ? `\n\nMESSAGE\n${message.trim()}` : "");

  const isUndecided = serviceType === "not_sure";
  const confirmationMiddleLine = isUndecided
    ? "Lidia got your note and will reply within 24 hours to help you figure out the right fit."
    : `Lidia got your note about a <strong>${serviceLabel}</strong> and will reply within 24 hours with next steps.`;
  const confirmationMiddleText = isUndecided
    ? "Lidia got your note and will reply within 24 hours to help you figure out the right fit."
    : `Lidia got your note about a ${serviceLabel} and will reply within 24 hours with next steps.`;
  const addonsLine = addons && addons.length > 0
    ? `<p style="font-family:sans-serif;line-height:1.7">If you mentioned add-ons or anything special, she'll factor those in.</p>`
    : "";
  const addonsTextLine = addons && addons.length > 0
    ? "\n\nIf you mentioned add-ons or anything special, she'll factor those in."
    : "";

  const confirmationHtml = `
    <p style="font-family:sans-serif">Hi ${firstName.trim()},</p>
    <p style="font-family:sans-serif;line-height:1.7">${confirmationMiddleLine}</p>
    ${addonsLine}
    <p style="font-family:sans-serif">— The Cozy Nest team<br>
    <a href="mailto:hello@cozynestbylidia.com" style="color:#7a9478">hello@cozynestbylidia.com</a></p>
  `.trim();

  const confirmationText =
    `Hi ${firstName.trim()},\n\n${confirmationMiddleText}${addonsTextLine}\n\n— The Cozy Nest team\nhello@cozynestbylidia.com`;

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
        textContent: notificationText,
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
