import { useState } from "react";
import { getFormData } from "@/utils";
import { resetPassword } from "@/api/auth";
import { Box, HStack, Text } from "@chakra-ui/react";
import { AlertObject, FormLayout } from "../layout/FormLayout";
import { EmailVerified } from "./verifyEmail/components/EmailVerified";
import { LinkExpired } from "./verifyEmail/components/LinkExpired";
import { FormButton, FormLink, FormPasswordInput } from "./form";

interface ResetPasswordProps {
  resetObj: { codeId: number; code: string; email: string };
}

export const ResetPassword = ({ resetObj }: ResetPasswordProps) => {
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
        title: "Passwords do not match!"
      });
      setIsLoading(false);
      return;
    }

    try {
      const request = await resetPassword({
        codeId: codeId,
        code: code,
        email: email,
        newPassword: password
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
            errors: errors.errors
          });
        }
      }
    } catch (error) {
      console.warn("Password reset failed");
      setAlert({
        status: "error",
        title: "Something went wrong! Please try again later."
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
