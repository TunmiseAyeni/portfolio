// ─── app/api/contact/route.js ───────────────────────────────────────────────
// Contact form handler. The form POSTs { name, email, message, company } here;
// this validates it and sends you the message through Resend.
//
// SETUP
//   1. npm install resend
//   2. Add env vars (see .env.local.example):
//        RESEND_API_KEY   — from https://resend.com/api-keys  (required)
//        CONTACT_TO       — where messages are delivered (defaults to your inbox)
//        CONTACT_FROM     — the "from" address (defaults to Resend's shared domain)
//   3. Set the same vars in Vercel → Project → Settings → Environment Variables.
//
// Until you verify your own domain in Resend, keep CONTACT_FROM on the shared
// "onboarding@resend.dev" sender. Once tunmise.dev is verified, switch it to
// something like "Tunmise <contact@tunmise.dev>".
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO || "tunmiseayeni13@gmail.com";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function escapeHtml(str = "") {
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name = "", email = "", message = "", company = "" } = body;

    // Honeypot: `company` is a hidden field real users never see. If it's
    // filled, it's a bot — pretend success and send nothing.
    if (company) return Response.json({ ok: true });

    // Validation
    if (!name.trim() || !email.trim() || !message.trim() || !isEmail(email)) {
      return Response.json(
        {
          ok: false,
          error: "Please fill in every field with a valid email address.",
        },
        { status: 400 },
      );
    }
    if (name.length > 100 || email.length > 150 || message.length > 5000) {
      return Response.json(
        { ok: false, error: "One of your fields is a little too long." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "The email service isn't configured yet." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email, // replying to the email goes straight back to the sender
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>`,
    });

    if (error) {
      return Response.json(
        {
          ok: false,
          error: "Couldn't send your message. Please email me directly.",
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
