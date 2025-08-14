import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function sanitize(input: string): string {
  return input.replace(/[\r\n]/g, " ").slice(0, 5000)
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData()

    const company = (data.get("company") as string) || ""
    if (company.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    const name = sanitize(String(data.get("name") || ""))
    const email = sanitize(String(data.get("email") || ""))
    const phone = sanitize(String(data.get("phone") || ""))
    const message = sanitize(String(data.get("message") || ""))

    if (!name || (!email && !phone)) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
    })

    const to = process.env.LEADS_TO || "info@northglassnc.com"
    const from = process.env.LEADS_FROM || "info@northglassnc.com"

    const subject = `New Contact Message — ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Message: ${message}`,
    ].join("\n")

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transport.sendMail({ to, from, subject, text: body })
      if (email) {
        await transport.sendMail({
          to: email,
          from,
          subject: "Thanks for contacting North Glass",
          text: `Thanks ${name}, we received your message and will respond within 1 business day.\n\n${body}`,
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
