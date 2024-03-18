import { Box, HStack, Text } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { FormButton, FormLink, FormPasswordInput } from "./Index";

export const ResetPassword = () => {
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
