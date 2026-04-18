import { NextRequest, NextResponse } from "next/server";

const BREVO_API = "https://api.brevo.com/v3";
const LIDIA_EMAIL = "hello@cozynestbylidia.com";
const LIDIA_NAME = "Lidia @ Cozy Nest";
const SENDER = { name: "Cozy Nest by Lidia", email: "hello@cozynestbylidia.com" };
const LIST_ID = 3; // CozyNest — Your First Folder

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

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, email, neighborhood, homeSize, whichReset, rhythm, notes } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // 1. Upsert contact — critical
  const contactRes = await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers: brevoHeaders(),
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName || "",
        NEIGHBORHOOD: neighborhood || "",
        HOME_SIZE: homeSize || "",
        SERVICE: whichReset || "",
        RHYTHM: rhythm || "",
      },
      listIds: [LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!contactRes.ok && contactRes.status !== 204) {
    const err = await contactRes.text();
    console.error("Brevo contact upsert failed:", contactRes.status, err);
    return NextResponse.json({ error: "Could not save your details. Please try again." }, { status: 502 });
  }

  // 2 & 3. Notification to Lidia + confirmation to user — best-effort
  const summaryLines = [
    firstName && `Name: ${firstName}`,
    `Email: ${email}`,
    neighborhood && `Neighborhood: ${neighborhood}`,
    homeSize && `Home size: ${homeSize}`,
    whichReset && `Service: ${whichReset}`,
    rhythm && `Rhythm: ${rhythm}`,
    notes && `Notes: ${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  await Promise.allSettled([
    // Notification to Lidia
    fetch(`${BREVO_API}/smtp/email`, {
      method: "POST",
      headers: brevoHeaders(),
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email: LIDIA_EMAIL, name: LIDIA_NAME }],
        replyTo: { email, name: firstName || email },
        subject: `New booking request from ${firstName || email}`,
        textContent: `You have a new booking request via cozynestbylidia.com:\n\n${summaryLines}\n\n— Reply directly to this email to reach them.`,
        htmlContent: `<p>You have a new booking request via <strong>cozynestbylidia.com</strong>:</p><pre style="font-family:sans-serif;line-height:1.7">${summaryLines}</pre><p style="color:#7a9478;font-style:italic">Reply directly to this email to reach them.</p>`,
      }),
    }).then(async (r) => {
      if (!r.ok) console.error("Lidia notification email failed:", r.status, await r.text());
    }),

    // Confirmation to submitter
    fetch(`${BREVO_API}/smtp/email`, {
      method: "POST",
      headers: brevoHeaders(),
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email, name: firstName || email }],
        subject: "We got your message — come home to calm.",
        textContent: `Hi ${firstName || "there"},\n\nThank you for reaching out to Cozy Nest by Lidia. I received your request and will be in touch personally within a day — usually sooner.\n\nLooking forward to helping your home feel like itself again.\n\n— Lidia\nhello@cozynestbylidia.com`,
        htmlContent: `<p style="font-family:sans-serif">Hi ${firstName || "there"},</p><p style="font-family:sans-serif;line-height:1.7">Thank you for reaching out to <strong>Cozy Nest by Lidia</strong>. I received your request and will be in touch personally within a day — usually sooner.</p><p style="font-family:sans-serif;line-height:1.7;font-style:italic;color:#3d5c44">Looking forward to helping your home feel like itself again.</p><p style="font-family:sans-serif">— Lidia<br><a href="mailto:hello@cozynestbylidia.com" style="color:#7a9478">hello@cozynestbylidia.com</a></p>`,
      }),
    }).then(async (r) => {
      if (!r.ok) console.error("Confirmation email failed:", r.status, await r.text());
    }),
  ]);

  return NextResponse.json({ success: true });
}
