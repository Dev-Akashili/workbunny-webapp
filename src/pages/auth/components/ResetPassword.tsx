import { Box, HStack, Text } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { FormButton, FormInput, FormLink, FormPasswordInput } from "./Index";
import { useState } from "react";
import { CornfirmEmail } from "./ConfirmEmail";

export const ResetPassword = () => {
  const [isCodeSent] = useState<boolean>(false);

  return (
    <>
      {isCodeSent ? (
        <CornfirmEmail name="reset" />
      ) : (
        <FormLayout
          title="Reset your password"
          description="Use the verification code sent to your email"
        >
          <FormInput
            name="code"
            type="text"
            label="Code"
            placeholder="Your verification code"
            isRequired
          />
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
      )}
    </>
  );
};
