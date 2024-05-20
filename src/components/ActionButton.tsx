import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

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
  color,
}: ActionButtonProps) => {
  return (
    <Box h="100px" w={{ base: "100%", md: "45%", lg: "30%" }} m={3}>
      <Link to={link}>
        <Button h="100px" w="100%" color="white" colorScheme={color}>
          <HStack spacing={5} mr="auto" ml={3}>
            {icon}
            <Text>{name}</Text>
          </HStack>
        </Button>
      </Link>
    </Box>
  );
};
