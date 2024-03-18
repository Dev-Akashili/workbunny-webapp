import { Box, Image, Stack } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { useEffect, useState } from "react";
import { FormButton, FormLink } from "./Index";
import { useSearchParams } from "react-router-dom";
import { Busy } from "@/components/Busy";

const EmailSent = ({ name }: { name: string }) => {
  return (
    <FormLayout
      title={
        name === "register"
          ? "Almost there! Verify your email to login"
          : "Password reset link sent"
      }
      description={
        name === "register"
          ? "We have sent you an email with a link. Follow the link to confirm your email."
          : "If there is an account associated with the email you will recieve a link to reset your password"
      }
    >
      <Image
        src="https://img.icons8.com/carbon-copy/200/2631C3/paper-plane.png"
        alt="paper-plane"
      />
    </FormLayout>
  );
};

const EmailVerified = () => {
  return (
    <FormLayout
      title="Email successfully verified!"
      description="You can now log in to your account."
    >
      <Stack gap={5} alignItems="center">
        <Image
          src="https://img.icons8.com/ios/250/7AC509/checked--v1.png"
          alt="success"
        />
        <Box>
          <FormLink link="Back to login" to="/auth?page=login" />
        </Box>
      </Stack>
    </FormLayout>
  );
};

const LinkExpired = () => {
  return (
    <FormLayout
      title="This link has expired"
      description="Click on the button to send a new verification link."
    >
      <Stack gap={5} alignItems="center">
        <Image
          src="https://img.icons8.com/ios/250/F34831/circled-x.png"
          alt="error"
        />
        <form style={{ width: "100%" }}>
          <FormButton name="Send new verification link" />
        </form>
      </Stack>
    </FormLayout>
  );
};

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<string | null>("");
  const [busy, setBusy] = useState<boolean>(true);

  useEffect(() => {
    setName(searchParams.get("name"));

    if (name === "register") {
      const email = searchParams.get("email");
    }
  }, [name, searchParams]);

  return <>{busy ? <Busy /> : <EmailSent name="register" />}</>;
};
