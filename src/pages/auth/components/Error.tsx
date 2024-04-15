import { Box, VStack } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { FormLink } from "./form";

export const Error = () => {
  return (
    <FormLayout title="OOPS! SOMETHING WENT WRONG">
      <Box></Box>
      <VStack>
        <FormLink link=" Return back to Login" to="/auth?page=login" />
      </VStack>
      <Box></Box>
    </FormLayout>
  );
};
