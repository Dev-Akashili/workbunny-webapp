import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { useEffect, useState } from "react";
import { FormButton, FormLink, FormPasswordInput } from "./Index";
import { useSearchParams } from "react-router-dom";
import { Busy } from "@/components/Busy";
import { sendEmail, verifyEmail } from "@/api/auth";
import { Error } from "./Error";

const EmailSent = ({ name }: { name: string | null }) => {
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

const LinkExpired = ({ email }: { email: string }) => {
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
        <Button
          w="100%"
          color="white"
          backgroundColor="#2631c3"
          _hover={{
            bgColor: "#3c47e5",
            textDecor: "none",
          }}
          as={Link}
          size="md"
          href={`auth?page=verify-email&name=register&email=${email}`}
        >
          Send new verification link
        </Button>
      </Stack>
    </FormLayout>
  );
};

interface ResetPasswordProps {
  resetObj: { codeId: number; code: string; email: string };
}

const ResetPassword = ({ resetObj }: ResetPasswordProps) => {
  const { codeId, code, email } = resetObj;
  return (
    <FormLayout title="Reset your password">
      <FormPasswordInput prefix="New" name="password" />
      <FormPasswordInput prefix="New" name="confirm" />
      <Box></Box>
      <FormButton name="Submit" />
      <HStack spacing={2}>
        <Text color="gray" size="lg">
          Return back to
        </Text>
        <FormLink link="Login" to="/auth?page=login" />
      </HStack>
    </FormLayout>
  );
};

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<string | null>("");
  const [display, setDisplay] = useState<string | null>("");
  const [email, setEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resetObj, setResetObj] = useState<any>({});

  useEffect(() => {
    const verify = async () => {
      setDisplay("busy");
      setName(searchParams.get("name"));

      if (name === "register" || name === "reset") {
        const email = searchParams.get("email");
        if (email) {
          try {
            const response = await sendEmail(email, name);
            response.status === 200
              ? setDisplay("emailSent")
              : setDisplay("error");
          } catch (error) {
            console.warn("Sending email verification link failed!");
            setDisplay("error");
          }
        } else {
          setDisplay("error");
        }
      }

      // When the page loads, the verification should happen
      if (name === "verify") {
        const codeId = searchParams.get("codeId");
        const code = searchParams.get("code");
        const email = searchParams.get("email");

        if (codeId && code && email) {
          try {
            const response = await verifyEmail({
              codeId: parseInt(codeId, 10),
              code: code,
              email: email,
            });
            if (response.status === 200) {
              setDisplay("verified");
            } else {
              const result = await response.text();
              if (result === "expired") {
                setDisplay("expired");
              } else {
                setDisplay("error");
              }
            }
            setEmail(email);
          } catch (error) {
            console.warn("Email verification failed!");
            setDisplay("error");
          }
        } else {
          setDisplay("error");
        }
      }

      if (name === "reset-form") {
        const codeId = searchParams.get("codeId");
        const code = searchParams.get("code");
        const email = searchParams.get("email");
        if (codeId && code && email) {
          setResetObj({
            codeId: parseInt(codeId, 10),
            code: code,
            email: email,
          });
          setDisplay("reset-form");
        }
      }

      if (
        name !== "register" &&
        name !== "reset" &&
        name !== "verify" &&
        name !== "reset-form"
      ) {
        setDisplay("error");
      }
    };
    verify();
  }, [name, searchParams]);

  const getPage = () => {
    switch (display) {
      case "busy":
        return <Busy />;
        break;
      case "emailSent":
        return <EmailSent name={name} />;
        break;
      case "verified":
        return <EmailVerified />;
        break;
      case "expired":
        return <LinkExpired email={email} />;
        break;
      case "reset-form":
        return <ResetPassword resetObj={resetObj} />;
        break;
      case "error":
        return <Error />;
        break;
      default:
        return <Busy />;
        break;
    }
  };

  return <>{getPage()}</>;
};
