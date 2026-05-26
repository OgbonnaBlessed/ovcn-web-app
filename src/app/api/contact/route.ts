import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstname = String(body.firstname || "").trim();
    const lastname = String(body.lastname || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!firstname || !lastname || !phone || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const phoneRegex = /^\+[1-9]\d{7,14}$/;

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "Please provide a valid phone number" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    const fullName = `${firstname} ${lastname}`;

    const safeFullName = escapeHtml(fullName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await resend.emails.send({
      from: `${safeFullName} <omegavision.reach@omegavisionchristiannetwork.com>`,
      to: "omegavision.reach@gmail.com",
      replyTo: email,
      subject: `New Message From ${fullName}`,
      html: `
        <div style="margin:0;padding:0;background:#f6f8fc;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
          <div style="max-width:680px;margin:0 auto;padding:32px 16px;">

            <div style="background:#ffffff;border:1px solid #e5eaf5;border-radius:20px;overflow:hidden;">

              <div style="padding:32px 32px 20px 32px;text-align:center;">
                <img 
                  src="https://omegavisionchristiannetwork.com/apple-touch-icon.png" 
                  alt="Omega Vision Christian Network" 
                  width="64" 
                  height="64" 
                  style="display:block;margin:0 auto 18px auto;"
                />

                <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#0b2f8f;font-weight:700;">
                  Omega Vision Christian Network
                </p>

                <h1 style="margin:14px 0 0 0;font-size:24px;line-height:1.3;color:#111827;">
                  New Contact Message
                </h1>

                <p style="margin:12px auto 0 auto;max-width:480px;font-size:14px;line-height:1.7;color:#6b7280;">
                  A new message was submitted through the contact form on the OVCN website.
                </p>
              </div>

              <div style="padding:24px 32px 32px 32px;">
                <div style="border-top:1px solid #eef2f7;padding-top:24px;">

                  <div style="margin-bottom:22px;">
                    <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
                      Full Name
                    </p>
                    <p style="margin:0;font-size:16px;line-height:1.6;color:#111827;font-weight:600;">
                      ${safeFullName}
                    </p>
                  </div>

                  <div style="margin-bottom:22px;">
                    <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
                      Phone Number
                    </p>
                    <p style="margin:0;font-size:15px;line-height:1.6;color:#111827;">
                      ${safePhone}
                    </p>
                  </div>

                  <div style="margin-bottom:22px;">
                    <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
                      Email Address
                    </p>
                    <p style="margin:0;font-size:15px;line-height:1.6;color:#0b2f8f;">
                      ${safeEmail}
                    </p>
                  </div>

                  <div>
                    <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
                      Message
                    </p>

                    <div style="background:#f9fafb;border:1px solid #eef2f7;border-left:3px solid #f59e0b;border-radius:12px;padding:18px;font-size:15px;line-height:1.8;color:#374151;">
                      ${safeMessage}
                    </div>
                  </div>

                </div>

                <div style="margin-top:28px;padding-top:20px;border-top:1px solid #eef2f7;">
                  <p style="margin:0;font-size:13px;line-height:1.7;color:#6b7280;text-align:center;">
                    You can reply directly to this email or reach us at
                    <strong style="color:#0b2f8f;"> omegavision.reach@gmail.com</strong>.
                  </p>
                </div>
              </div>

            </div>

            <p style="margin:18px 0 0 0;text-align:center;font-size:12px;line-height:1.6;color:#9ca3af;">
              OVCN Media
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 },
    );
  }
}
