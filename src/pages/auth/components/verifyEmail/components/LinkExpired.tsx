import { AUTH_ROUTES } from "@/pages/routes";
import { FormLayout } from "@/pages/auth/layout/FormLayout";
import { Button, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LinkExpired = ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
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
        <Link
          to={
            name === "register"
              ? AUTH_ROUTES.verifyEmail.regiser(email)
              : AUTH_ROUTES.forgotPasword
          }
        >
          <Button
            w="100%"
            color="white"
            backgroundColor="#2631c3"
            _hover={{
              bgColor: "#3c47e5",
            }}
            size="md"
          >
            Send new verification link
          </Button>
        </Link>
      </Stack>
    </FormLayout>
  );
};
