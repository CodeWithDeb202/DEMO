import dotenv from 'dotenv';
dotenv.config({ quiet: true });

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
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

export const sendResetPasswordOTP = async (email, otp) => {

  try {

    await transporter.sendMail({

      from: `"Tech Monster" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "Reset Your Password - Tech Monster",

      html: `

                <div style="font-family:Arial,sans-serif;padding:20px">

                    <h2>Password Reset Request</h2>

                    <p>Your password reset OTP is:</p>

                    <h1 style="color:#2563eb;letter-spacing:5px">

                        ${otp}

                    </h1>

                    <p>This OTP will expire in <strong>10 minutes</strong>.</p>

                    <p>If you did not request a password reset, please ignore this email.</p>

                    <br>

                    <p><strong>Tech Monster Pvt. Ltd.</strong></p>

                </div>

            `

    });

    console.log("✅ Reset Password OTP Sent");

  } catch (error) {

    console.log("❌ Reset Password Email Error:", error.message);

    throw error;

  }

};


export const sendApplicationStatusEmail = async (email, status) => {

  try {

    await transporter.sendMail({

      from: `"Tech Monster" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "Application Status Updated",

      html: `
                <h2>Application Status</h2>

                <p>Your application status has been updated.</p>

                <h3>Status: ${status}</h3>

                <p>Thank you for using Tech Monster.</p>
            `

    });

  } catch (error) {

    console.log(error);

  }

};

export const sendInterviewEmail = async (email, interview) => {

  try {

    await transporter.sendMail({

      from: `"Tech Monster" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "Interview Scheduled - Tech Monster",

      html: `

                <div style="font-family:Arial,sans-serif;padding:20px">

                    <h2>Interview Scheduled</h2>

                    <p>Your interview has been scheduled successfully.</p>

                    <p><strong>Date:</strong> ${new Date(interview.interviewDate).toLocaleString()}</p>

                    <p><strong>Mode:</strong> ${interview.interviewMode}</p>

                    ${interview.interviewMode === "Online"
          ? `<p><strong>Meeting Link:</strong> <a href="${interview.meetingLink}">${interview.meetingLink}</a></p>`
          : `<p><strong>Location:</strong> ${interview.location}</p>`
        }

                    <br>

                    <p>Best of Luck!</p>

                    <p><strong>Tech Monster Pvt. Ltd.</strong></p>

                </div>

            `

    });

    console.log("✅ Interview Email Sent");

  } catch (error) {

    console.log("❌ Interview Email Error:", error.message);

    throw error;

  }

};

export const sendOfferEmail = async (email, offer) => {

  try {

    await transporter.sendMail({

      from: `"Tech Monster" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "🎉 Congratulations! Internship Offer - Tech Monster",

      html: `

                <div style="font-family:Arial,sans-serif;padding:20px">

                    <h2>Congratulations 🎉</h2>

                    <p>We are pleased to offer you an internship at <strong>Tech Monster Pvt. Ltd.</strong></p>

                    <hr>

                    <p><strong>Joining Date:</strong> ${new Date(offer.joiningDate).toLocaleDateString()}</p>

                    <p><strong>Duration:</strong> ${offer.duration}</p>

                    <p><strong>Stipend:</strong> ₹${offer.stipend}/month</p>

                    <p><strong>Status:</strong> ${offer.status}</p>

                    <br>

                    <p>${offer.message || ""}</p>

                    <br>

                    <p>Please login to your Tech Monster account to accept or reject this offer.</p>

                    <br>

                    <p>Best Regards,</p>

                    <p><strong>Tech Monster Pvt. Ltd.</strong></p>

                </div>

            `

    });

    console.log("✅ Offer Email Sent");

  } catch (error) {

    console.log("❌ Offer Email Error:", error.message);

    throw error;

  }

};


export const sendCertificateEmail = async (

  email,

  pdfPath

) => {

  try {

    await transporter.sendMail({

      from: `"Tech Monster" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "🎉 Internship Completion Certificate",

      html: `

                <div style="font-family:Arial,sans-serif">

                    <h2>Congratulations 🎉</h2>

                    <p>

                        Your internship has been successfully completed.

                    </p>

                    <p>

                        Your Internship Completion Certificate is attached with this email.

                    </p>

                    <br>

                    <p>

                        Best Wishes,

                    </p>

                    <strong>

                        Tech Monster Pvt. Ltd.

                    </strong>

                </div>

            `,

      attachments: [

        {

          filename: "Internship-Certificate.pdf",

          path: pdfPath

        }

      ]

    });

    console.log(

      "✅ Certificate Email Sent"

    );

  } catch (error) {

    console.log(

      "❌ Certificate Email Error:",

      error.message

    );

    throw error;

  }

};


// ==========================================================
// Send Interview Cancelled Email
// ==========================================================

export const sendInterviewCancelledEmail = async (

    email,

    interview

) => {

    try {

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: email,

            subject: "Interview Cancelled | Tech Monster",

            html: `

            <div style="font-family:Arial,sans-serif;padding:30px;background:#f8f9fa;">

                <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:10px;padding:30px;box-shadow:0 5px 15px rgba(0,0,0,0.08);">

                    <h2 style="color:#dc3545;text-align:center;">

                        Interview Cancelled

                    </h2>

                    <p>

                        Hello,

                    </p>

                    <p>

                        We regret to inform you that your scheduled interview has been cancelled by the employer.

                    </p>

                    <table style="width:100%;border-collapse:collapse;margin-top:20px;">

                        <tr>

                            <td style="padding:8px;font-weight:bold;">

                                Interview Date

                            </td>

                            <td>

                                ${new Date(

                                    interview.interviewDate

                                ).toLocaleString()}

                            </td>

                        </tr>

                        <tr>

                            <td style="padding:8px;font-weight:bold;">

                                Interview Mode

                            </td>

                            <td>

                                ${interview.interviewMode}

                            </td>

                        </tr>

                        <tr>

                            <td style="padding:8px;font-weight:bold;">

                                Status

                            </td>

                            <td style="color:red;font-weight:bold;">

                                Cancelled

                            </td>

                        </tr>

                    </table>

                    <p style="margin-top:25px;">

                        You may receive another interview invitation if the employer decides to reschedule.

                    </p>

                    <hr>

                    <p style="font-size:12px;color:#777;text-align:center;">

                        © ${new Date().getFullYear()} Tech Monster Pvt. Ltd.

                    </p>

                </div>

            </div>

            `

        });

    } catch (error) {

        console.log(

            "Interview Cancel Email Error:",

            error

        );

    }

};