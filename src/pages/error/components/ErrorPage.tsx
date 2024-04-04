import { Button, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ErrorPageProps {
  icon?: ReactNode;
  status?: string;
  title: string;
  description: string;
  button?: boolean;
}

export const ErrorPage = ({
  icon,
  status,
  title,
  description,
  button = true
}: ErrorPageProps) => {
  return (
    <Flex height="65vh" justifyContent="center" alignItems="center">
      <VStack spacing="25px">
        {icon && icon}
        {status && (
          <Text fontSize="100px" fontWeight="bold" color="#2631c3">
            {status}
          </Text>
        )}
        <Text fontSize="25px" fontWeight="bold" color="#2631c3">
          {title}
        </Text>
        <Text fontSize="18px" color="gray.400">
          {description}
        </Text>
        {button && (
          <Button
            as={Link}
            href="/home"
            color="#fff"
            bgColor="#2631c3"
            _hover={{ textDecoration: "none", bgColor: "#3c47e5" }}
          >
            Back To Home
          </Button>
        )}
      </VStack>
    </Flex>
  );
};
