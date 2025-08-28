import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic header injection guard
function sanitize(input: string): string {
  return input.replace(/[\r\n]/g, " ").slice(0, 5000);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    // Honeypot
    const company = (data.get("company") as string) || "";
    if (company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = sanitize(String(data.get("name") || ""));
    const email = sanitize(String(data.get("email") || ""));
    const phone = sanitize(String(data.get("phone") || ""));
    const service = sanitize(String(data.get("service") || ""));
    const message = sanitize(String(data.get("message") || ""));

    // Collect uploaded files
    const files: File[] = [];
    for (const [key, value] of data.entries()) {
      if (key.startsWith("file-") && value instanceof File) {
        files.push(value);
      }
    }

    if (!name || (!email && !phone) || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Transport placeholder: configure via env for Google Workspace later
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
    });

    const to = process.env.LEADS_TO || "info@northglassnc.com";
    const from = process.env.LEADS_FROM || "info@northglassnc.com";

    const subject = `New Quote Request: ${service} — ${name}`;

    // Enhanced body with file information
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
      files.length > 0 ? `\nAttached Files (${files.length}):` : "",
      ...files.map(
        (file, index) =>
          `${index + 1}. ${file.name} (${(file.size / 1024 / 1024).toFixed(
            2
          )}MB)`
      ),
    ]
      .filter(Boolean)
      .join("\n");

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Prepare attachments for files
      const attachments = await Promise.all(
        files.map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          return {
            filename: file.name,
            content: Buffer.from(arrayBuffer),
            contentType: file.type,
          };
        })
      );

      // Send lead email with attachments
      await transport.sendMail({
        to,
        from,
        subject,
        text: body,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

      // Send confirmation email to customer (without attachments for privacy)
      if (email) {
        await transport.sendMail({
          to: email,
          from,
          subject: "We received your quote request — North Glass",
          text: `Thanks ${name}, we have your request and will respond within 1 business day.\n\n${body}`,
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
