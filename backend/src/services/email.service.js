import dotenv from 'dotenv';
dotenv.config({quiet: true});

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log("VERIFY ERROR:", err);
  } else {
    console.log("SMTP Server Ready");
  }
});

export const sendOTPEmail = async (email, otp) => {

  try {
    const info = await transporter.sendMail({
      from: `"Tech Monster" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email - Tech Monster",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>Email Verification</h2>

          <p>Your verification code is:</p>

          <h1 style="color:#2563eb">${otp}</h1>

          <p>This OTP will expire in <b>10 minutes</b>.</p>

          <p>If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    console.log("✅ Email Sent:", info.messageId);

  } catch (error) {

    console.log("❌ Email Error:", error.message);

    throw error;

  }
};