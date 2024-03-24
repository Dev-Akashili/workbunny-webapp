import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AlertObject, FormLayout } from "../layout/FormLayout";
import { useEffect, useState } from "react";
import { FormButton, FormLink, FormPasswordInput } from "./Index";
import { useSearchParams } from "react-router-dom";
import { Busy } from "@/components/Busy";
import { resetPassword, sendEmail, verifyEmail } from "@/api/auth";
import { Error } from "./Error";
import { getFormData } from "@/utils";
import { AUTH_ROUTES } from "@/pages/routes";

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

const EmailVerified = ({ name }: { name: string }) => {
  return (
    <FormLayout
      title={
        name === "register"
          ? "Email successfully verified!"
          : "Password successfully reset!"
      }
      description={
        name === "register" ? "You can now log in to your account." : undefined
      }
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

const LinkExpired = ({ email, name }: { email: string; name: string }) => {
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
          href={
            name === "register"
              ? AUTH_ROUTES.verifyEmail.regiser(email)
              : AUTH_ROUTES.forgotPasword
          }
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertObject | undefined>(undefined);

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(undefined);
    const { password, confirm } = getFormData(e, ["password", "confirm"]);

    // Make sure passwords are the same
    if (password !== confirm) {
      setAlert({
        status: "error",
        title: "Passwords do not match!",
      });
      setIsLoading(false);
      return;
    }

    try {
      const request = await resetPassword({
        codeId: codeId,
        code: code,
        email: email,
        newPassword: password,
      });
      if (request.status === 200) {
        setSuccess(true);
        return;
      } else if (request.status === 400) {
        const errors = await request.json();
        if (errors.errors === "expired") {
          setIsExpired(true);
          return;
        } else {
          setAlert({
            status: "error",
            title: "One or more validation errors occured",
            errors: errors.errors,
          });
        }
      }
    } catch (error) {
      console.warn("Password reset failed");
      setAlert({
        status: "error",
        title: "Something went wrong! Please try again later.",
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      {isExpired ? (
        <LinkExpired email={email} name="reset" />
      ) : success ? (
        <EmailVerified name="reset" />
      ) : (
        <form onSubmit={handleReset}>
          <FormLayout title="Reset your password" alert={alert}>
            <FormPasswordInput prefix="New" name="password" />
            <FormPasswordInput prefix="New" name="confirm" />
            <Box></Box>
            <FormButton name="Submit" isLoading={isLoading} />
            <HStack spacing={2}>
              <Text color="gray" size="lg">
                Return back to
              </Text>
              <FormLink link="Login" to="/auth?page=login" />
            </HStack>
          </FormLayout>
        </form>
      )}
    </>
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
        return <EmailVerified name="register" />;
        break;
      case "expired":
        return <LinkExpired name="register" email={email} />;
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
