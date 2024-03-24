import { FormLayout } from "@/pages/auth/layout/FormLayout";
import { Image } from "@chakra-ui/react";

export const EmailSent = ({ name }: { name: string | null }) => {
  return (
    <FormLayout
      title={
        name === "register"
          ? "Almost there! Verify your email to login"
          : "Password reset link sent"
      }
      description={
        name === "register"
          ? "We have sent you an email with a link. Follow the link to confirm your email."
          : "If there is an account associated with the email you will recieve a link to reset your password"
      }
    >
      <Image
        src="https://img.icons8.com/carbon-copy/200/2631C3/paper-plane.png"
        alt="paper-plane"
      />
    </FormLayout>
  );
};
