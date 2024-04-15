import { Box, HStack, Text } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { getFormData } from "@/utils";
import { useNavigate } from "react-router-dom";
import { FormButton, FormInput, FormLink } from "./form";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = getFormData(e, ["email"]);
    navigate(`/auth?page=verify-email&name=reset&email=${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout
        title="Reset your password"
        description="Verify the email you used to open your account to reset your password "
      >
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Your Email"
          isRequired
        />
        <Box></Box>
        <FormButton name="Verify email" />
        <HStack spacing={2}>
          <Text color="gray" size="lg">
            Return back to
          </Text>
          <FormLink link="Login" to="/auth?page=login" />
        </HStack>
      </FormLayout>
    </form>
  );
};
