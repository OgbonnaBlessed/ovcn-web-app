import { NextResponse } from "next/server";
import { Resend } from "resend";
import { baseEmailTemplate } from "@/lib/email/base-template";
import { emailField, escapeHtml } from "@/lib/email/helpers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullname = String(body.fullname || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const address = String(body.address || "").trim();
    const bornAgain = String(body.bornAgain || "").trim();
    const message = String(body.message || "").trim();

    if (!fullname || !email || !phone || !address || !bornAgain) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const phoneRegex = /^\+[1-9]\d{7,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "Please provide a valid phone number with country code." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const safeFullName = escapeHtml(fullname);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeAddress = escapeHtml(address);
    const safeBornAgain = escapeHtml(
      bornAgain === "yes"
        ? "Yes, already born again"
        : "No, prayed salvation prayer",
    );
    const safeMessage = escapeHtml(
      message || "No additional message provided.",
    ).replaceAll("\n", "<br />");

    await resend.emails.send({
      from: `OVCN Membership <omegavision.reach@omegavisionchristiannetwork.com>`,
      to: "omegavision.reach@gmail.com",
      replyTo: email,
      subject: `New Membership Request From ${fullname}`,
      html: baseEmailTemplate({
        title: "New Membership Request",
        subtitle:
          "A new person has indicated interest in becoming a member of Omega Vision Christian Network.",
        children: `
          ${emailField("Full Name", safeFullName)}
          ${emailField("Email Address", safeEmail)}
          ${emailField("Phone Number", safePhone)}
          ${emailField("Home Address", safeAddress)}
          ${emailField("Born Again Status", safeBornAgain)}

          <div>
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
              Message
            </p>
            <div style="background:#f9fafb;border:1px solid #eef2f7;border-left:3px solid #1447e6;border-radius:14px;padding:18px;font-size:15px;line-height:1.8;color:#374151;">
              ${safeMessage}
            </div>
          </div>
        `,
      }),
    });

    return NextResponse.json(
      { message: "Membership request sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to send membership request." },
      { status: 500 },
    );
  }
}
