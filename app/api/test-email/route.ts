import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  try {
    // Test email configuration without actually sending
    const config = {
      smtp_configured: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
      smtp_host: process.env.SMTP_HOST || "smtp.gmail.com",
      smtp_port: process.env.SMTP_PORT || "465",
      leads_to: process.env.LEADS_TO || "info@northglassnc.com",
      leads_from: process.env.LEADS_FROM || "info@northglassnc.com",
      environment: process.env.NODE_ENV || "development",
    };

    if (!config.smtp_configured) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "SMTP not configured. Please set SMTP_USER and SMTP_PASS environment variables.",
          config,
        },
        { status: 400 }
      );
    }

    // If configured, test the connection
    const transport = nodemailer.createTransport({
      host: config.smtp_host,
      port: Number(config.smtp_port),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test connection
    await transport.verify();

    return NextResponse.json({
      ok: true,
      message: "Email configuration is valid and connection successful",
      config: {
        ...config,
        smtp_user: process.env.SMTP_USER?.replace(/(.{3}).*(@.*)/, "$1***$2"),
        smtp_pass: "***configured***",
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Connection failed",
        details: "Check SMTP credentials and network connectivity",
      },
      { status: 500 }
    );
  }
}
