export const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const emailField = (label: string, value: string) => `
  <div style="margin-bottom:22px;">
    <p style="margin:0 0 6px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;">
      ${label}
    </p>
    <p style="margin:0;font-size:15px;line-height:1.7;color:#111827;">
      ${value}
    </p>
  </div>
`;
