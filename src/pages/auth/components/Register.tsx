import { Box, HStack, Text } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { FormButton, FormInput, FormLink, FormPasswordInput } from "./Index";
import { useState } from "react";
import { CornfirmEmail } from "./ConfirmEmail";

export const Register = () => {
  const [isCodeSent] = useState<boolean>(false);

  return (
    <>
      {isCodeSent ? (
        <CornfirmEmail name="register" />
      ) : (
        <FormLayout title="Create a new account">
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            isRequired
          />
          <FormPasswordInput name="password" />
          <FormPasswordInput name="confirm" />
          <Box></Box>
          <FormButton name="Submit" />
          <HStack spacing={3}>
            <Text color="gray" size="lg">
              Already have an account?
            </Text>
            <FormLink link="Login" to="/auth?page=login" />
          </HStack>
        </FormLayout>
      )}
    </>
  );
};
