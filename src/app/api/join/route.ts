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

    const type = String(body.type || "").trim();
    const fullName = String(body.fullName || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const address = String(body.address || "").trim();
    const age = String(body.age || "").trim();
    const status = String(body.status || "").trim();
    const department = String(body.department || "").trim();
    const reason = String(body.reason || "").trim();
    const programTitle = String(body.programTitle || "").trim();

    if (!type || !fullName || !phone || !email) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 },
      );
    }

    const safe = {
      type: escapeHtml(type),
      fullName: escapeHtml(fullName),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      address: escapeHtml(address || "Not provided"),
      age: escapeHtml(age || "Not provided"),
      status: escapeHtml(status || "Not provided"),
      department: escapeHtml(department || "Not provided"),
      reason: escapeHtml(reason || "Not provided").replaceAll("\n", "<br />"),
      programTitle: escapeHtml(programTitle || "Not applicable"),
    };

    await resend.emails.send({
      from: "OVCN Join Form <omegavision.reach@omegavisionchristiannetwork.com>",
      to: "omegavision.reach@gmail.com",
      replyTo: email,
      subject: `New Join Request - ${fullName}`,
      html: `
        <div style="margin:0;padding:0;background:#f6f8fc;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
            <div style="background:#ffffff;border:1px solid #e5eaf5;border-radius:20px;overflow:hidden;">
              <div style="padding:32px;text-align:center;">
                <img 
                  src="https://omegavisionchristiannetwork.com/apple-touch-icon.png" 
                  alt="OVCN" 
                  width="64" 
                  height="64" 
                  style="display:block;margin:0 auto 18px auto;"
                />

                <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#0b2f8f;font-weight:700;">
                  Omega Vision Christian Network
                </p>

                <h1 style="margin:14px 0 0 0;font-size:24px;line-height:1.3;color:#111827;">
                  New Join Request
                </h1>

                <p style="margin:12px auto 0 auto;max-width:480px;font-size:14px;line-height:1.7;color:#6b7280;">
                  A new request was submitted from the Join page.
                </p>
              </div>

              <div style="padding:0 32px 32px 32px;">
                <div style="border-top:1px solid #eef2f7;padding-top:24px;">

                  ${[
                    ["Request Type", safe.type],
                    ["Program", safe.programTitle],
                    ["Full Name", safe.fullName],
                    ["Phone", safe.phone],
                    ["Email", safe.email],
                    ["Address", safe.address],
                    ["Age", safe.age],
                    ["Status", safe.status],
                    ["Department", safe.department],
                  ]
                    .map(
                      ([label, value]) => `
                        <div style="margin-bottom:18px;">
                          <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
                            ${label}
                          </p>
                          <p style="margin:0;font-size:15px;line-height:1.6;color:#111827;">
                            ${value}
                          </p>
                        </div>
                      `,
                    )
                    .join("")}

                  <div>
                    <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
                      Reason / Message
                    </p>

                    <div style="background:#f9fafb;border:1px solid #eef2f7;border-left:3px solid #0b2f8f;border-radius:12px;padding:18px;font-size:15px;line-height:1.8;color:#374151;">
                      ${safe.reason}
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
              OVCN Join Notification
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Join request submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to submit request" },
      { status: 500 },
    );
  }
}
