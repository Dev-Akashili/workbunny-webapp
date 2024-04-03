import { Button, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  name: string;
  color: string;
}

export const ActionButton = ({ icon, name, color }: ActionButtonProps) => {
  return (
    <Button
      h="100px"
      w={{ base: "100%", md: "45%", lg: "30%" }}
      m={3}
      color="white"
      colorScheme={color}
    >
      <HStack spacing={5} mr="auto" ml={3}>
        {icon}
        <Text>{name}</Text>
      </HStack>
    </Button>
  );
};
