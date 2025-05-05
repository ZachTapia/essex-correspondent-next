"use server";

import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function submitContactUs(
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  message: string
) {
  try {
    const msg = {
      to: "correspondent-marketing@essexmortgage.com",
      from: "noreply@essexmortgage.com",
      subject: "New Contact Us Form Submission",
      text: `A new form submission has been submitted:\n\n${message}\n\nEmail: ${email}\nPhone Number: ${phoneNumber}\nName: ${firstName} ${lastName}`,
      html: `<p>A new form submission has been submitted:</p><p>${message}</p><p>Email: ${email}</p><p>Phone Number: ${phoneNumber}</p><p>Name: ${firstName} ${lastName}</p>`,
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
