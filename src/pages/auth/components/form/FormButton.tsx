import { Button } from "@chakra-ui/react";

interface FormButtonProps {
  name: string;
  isLoading?: boolean;
}

export const FormButton = ({ name, isLoading, ...p }: FormButtonProps) => {
  return (
    <Button
      w="100%"
      color="white"
      bgColor="#2631c3"
      _hover={{
        bgColor: "#3c47e5"
      }}
      type="submit"
      isLoading={isLoading}
      size="md"
      {...p}
    >
      {name}
    </Button>
  );
};
