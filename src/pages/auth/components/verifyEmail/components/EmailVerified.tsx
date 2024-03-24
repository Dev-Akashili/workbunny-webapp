import { FormLayout } from "@/pages/auth/layout/FormLayout";
import { Box, Image, Stack } from "@chakra-ui/react";
import { FormLink } from "../../Index";

export const EmailVerified = ({ name }: { name: string }) => {
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
