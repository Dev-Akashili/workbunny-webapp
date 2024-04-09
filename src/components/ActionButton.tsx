import { Button, HStack, Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  name: string;
  link: string;
  color: string;
}

export const ActionButton = ({
  icon,
  name,
  link,
  color
}: ActionButtonProps) => {
  return (
    <Link
      href={link}
      _hover={{ textDecoration: "none" }}
      h="100px"
      w={{ base: "100%", md: "45%", lg: "30%" }}
      m={3}
    >
      <Button
        h="100%"
        w="100%"
        color="white"
        colorScheme={color}
      >
        <HStack spacing={5} mr="auto" ml={3}>
          {icon}
          <Text>{name}</Text>
        </HStack>
      </Button>
    </Link>
  );
};
