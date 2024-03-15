import { Box, HStack, Text } from "@chakra-ui/react";
import { FormLayout } from "../layout/FormLayout";
import { FormButton, FormInput, FormLink } from "./Index";

export const CornfirmEmail = ({ name }: { name: "register" | "reset" }) => {
  return (
    <FormLayout
      title="Confirm your email"
      description={
        name === "register"
          ? "Almost there! Confirm your email with the verification code."
          : "You will recieve a code to use to reset your password"
      }
    >
      {name === "register" ? (
        <FormInput
          name="code"
          type="text"
          label="Code"
          placeholder="Your verification code"
          isRequired
        />
      ) : (
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          isRequired
        />
      )}
      <Box></Box>
      <FormButton
        name={
          name === "register" ? "Confirm your email" : "Send verification code"
        }
      />
      <HStack spacing={2}>
        <Text color="gray" size="lg">
          Return back to
        </Text>
        <FormLink link="Login" to="/auth?page=login" />
      </HStack>
    </FormLayout>
  );
};
