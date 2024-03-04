import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
  userEmail: string;
  userMessage: string;
}

export const KoalaWelcomeEmail = ({
  userFirstname = "Oussama",
  userEmail = "oussama@gmail.com",
  userMessage = "message..",
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Description preview</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://i.ibb.co/3rYPC4k/logo.png`}
          width="160"
          height="160"
          alt="Logo"
          style={logo}
        />
        <Text style={paragraph}>From: {userFirstname},</Text>
        <Text style={paragraph}>{userMessage}</Text>

        <Text style={paragraph}>
          Best,
          <br />
          {userEmail}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          4 Allée Georges peretti 13100, Aix-en-Provence
        </Text>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
