"use server";

import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(
  "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"
);

export async function DpaFormAccess(
companyName: string,
nmls: string,
name: string,
email: string,
) {
  try {
    const msg = {
      to: "correspondent-marketing@essexmortgage.com",
      from: "noreply@essexmortgage.com",
      subject: "New DPA Form Submission to Access Webinar",
      text: `A new DPA access form submission has been submitted:\n\nCompany Name: ${companyName}\nCompany NMLS: ${nmls}\nEmail: ${email}\nName: ${name}`,
      html: `<p>A new DPA access form submission has been submitted:</p><p>Company Name: ${companyName}</p><p>Company NMLS: ${nmls}</p><p>Email: ${email}</p><p>Name: ${name}</p>`,
    };

    await sgMail.send(msg);

    return {
      success: true,
      message: "Form submitted successfully.",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message: "Failed to submit.",
    };
  }
}