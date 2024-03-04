import { render } from "@react-email/render";
import { Resend } from "resend";

import EmailTemplate from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, response: Response) {
  const { userEmail, userFirstname, userMessage } = await request.json();

  const { error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["siriusproprete@gmail.com"],
    subject: "Appointment",
    html: render(EmailTemplate({ userEmail, userFirstname, userMessage })),
  });
  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}
