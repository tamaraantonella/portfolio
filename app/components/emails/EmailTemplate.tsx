import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  message: string;
}

const EmailTemplate = ({ message }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>This is an automatic email.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`../public/images/me-logo.png`}
          width="170"
          height="50"
          alt="Tamara Frazzetta"
          style={logo}
        />
        <Text style={paragraph}>Hi,</Text>
        <Text style={paragraph}>This is a copy of your message:</Text>
        <Section>
          <Text>{message}</Text>
        </Section>
        <Text style={paragraph}>
          I will get back to you as soon as possible,
          <br />
          Tamara
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  message: "Hola quisiera ponerme en contacto",
} as EmailTemplateProps;

export default EmailTemplate;

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
