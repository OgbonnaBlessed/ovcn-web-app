type BaseEmailTemplateProps = {
  title: string;
  subtitle: string;
  children: string;
  footerText?: string;
};

export const baseEmailTemplate = ({
  title,
  subtitle,
  children,
  footerText = "OVCN Media",
}: BaseEmailTemplateProps) => `
  <div style="margin:0;padding:0;background:#f6f8fc;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
      <div style="background:#ffffff;border:1px solid #e5eaf5;border-radius:22px;overflow:hidden;">
        <div style="padding:34px 32px 22px;text-align:center;">
          <img 
            src="https://omegavisionchristiannetwork.com/apple-touch-icon.png"
            alt="Omega Vision Christian Network"
            width="64"
            height="64"
            style="display:block;margin:0 auto 18px;"
          />

          <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#0b2f8f;font-weight:700;">
            Omega Vision Christian Network
          </p>

          <h1 style="margin:14px 0 0;font-size:24px;line-height:1.35;color:#111827;">
            ${title}
          </h1>

          <p style="margin:12px auto 0;max-width:500px;font-size:14px;line-height:1.7;color:#6b7280;">
            ${subtitle}
          </p>
        </div>

        <div style="padding:24px 32px 34px;">
          <div style="border-top:1px solid #eef2f7;padding-top:24px;">
            ${children}
          </div>

          <div style="margin-top:28px;padding-top:20px;border-top:1px solid #eef2f7;">
            <p style="margin:0;font-size:13px;line-height:1.7;color:#6b7280;text-align:center;">
              You can reply directly to this email.
            </p>
          </div>
        </div>
      </div>

      <p style="margin:18px 0 0;text-align:center;font-size:12px;line-height:1.6;color:#9ca3af;">
        ${footerText}
      </p>
    </div>
  </div>
`;
