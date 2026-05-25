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
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
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
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await resend.emails.send({
      from: `${safeFullName} <omegavision.reach@omegavisionchristiannetwork.com>`,
      to: "omegavision.reach@gmail.com",
      replyTo: email,
      subject: `New Message From ${fullName}`,

      html: `
        <div style="margin:0;padding:0;background:#f4f7ff;font-family:Arial,Helvetica,sans-serif;color:#10215f;">
          <div style="max-width:720px;margin:0 auto;padding:40px 20px;">

            <div style="background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid #dbe4ff;box-shadow:0 20px 50px rgba(16,33,95,0.12);">

              <div style="background:linear-gradient(135deg,#07145f 0%,#1238b5 60%,#f6b900 100%);padding:36px 40px;color:#ffffff;">
                <div style="display:flex;align-items:center;gap:14px;">
                  <img 
                    src="https://omegavisionchristiannetwork.com/apple-touch-icon.png" 
                    alt="Omega Vision Christian Network" 
                    width="56" 
                    height="56" 
                    style="display:block;border-radius:14px;background:#ffffff;padding:6px;"
                  />
                  <div>
                    <p style="margin:0;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#f8d45c;">
                      Omega Vision Christian Network
                    </p>
                  </div>
                </div>

                <p style="margin:24px 0 0 0;font-size:15px;line-height:1.8;color:#eef3ff;">
                  Someone just reached out through the contact form on the OVCN website.
                </p>
              </div>

              <div style="padding:36px 40px;">
                <div style="background:#f8faff;border:1px solid #dbe4ff;border-radius:22px;padding:28px;">

                  <div style="margin-bottom:24px;">
                    <p style="margin:0 0 8px 0;font-size:11px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">
                      Full Name
                    </p>
                    <p style="margin:0;font-size:18px;color:#07145f;font-weight:700;">
                      ${safeFullName}
                    </p>
                  </div>

                  <div style="margin-bottom:24px;">
                    <p style="margin:0 0 8px 0;font-size:11px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">
                      Email Address
                    </p>
                    <p style="margin:0;font-size:16px;color:#1238b5;">
                      ${safeEmail}
                    </p>
                  </div>

                  <div>
                    <p style="margin:0 0 8px 0;font-size:11px;color:#f97316;text-transform:uppercase;letter-spacing:2px;font-weight:700;">
                      Message
                    </p>

                    <div style="margin-top:10px;padding:20px;background:#ffffff;border-left:4px solid #f6b900;border-radius:14px;color:#26345f;font-size:15px;line-height:1.8;">
                      ${safeMessage}
                    </div>
                  </div>
                </div>
              </div>

              <div style="padding:22px 40px;background:#07145f;text-align:center;">
                <p style="margin:0;color:#dbe4ff;font-size:12px;line-height:1.6;">
                  Omega Vision Christian Network<br />
                  EPIKAIZO, atmosphere of worship, deep sound and light.
                </p>
              </div>

            </div>
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
