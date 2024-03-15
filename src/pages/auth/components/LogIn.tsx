import { HStack, Text } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { FormButton, FormInput, FormLink, FormPasswordInput } from "./Index";

export const LogIn = () => {
  return (
    <FormLayout title="Login to your account">
      <FormInput
        name="email"
        type="email"
        label="Email"
        placeholder="Email"
        isRequired
      />
      <FormPasswordInput name="password" />
      <FormLink link="Forgot Password?" to="/auth?page=forgot-password" />
      <FormButton name="Submit" />
      <HStack spacing={3}>
        <Text color="gray" size="lg">
          Don't have an account?
        </Text>
        <FormLink link="Register" to="/auth?page=register" />
      </HStack>
    </FormLayout>
  );
};