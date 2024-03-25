import { PageLayout } from "@/layout/PageLayout";
import { Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";

interface ErrorPageProps {
  status: string;
  title: string;
  description: string;
}

export const ErrorPage = ({ status, title, description }: ErrorPageProps) => {
  return (
    <PageLayout>
      <Flex height="65vh" justifyContent="center" alignItems="center">
        <VStack spacing="25px">
          <Image />
          <Text fontSize="100px" fontWeight="bold" color="#2631c3">
            {status}
          </Text>
          <Text fontSize="25px" fontWeight="bold" color="#2631c3">
            {title}
          </Text>
          <Text fontSize="18px" color="gray.400">
            {description}
          </Text>
          <Button
            as={Link}
            href="/home"
            color="#fff"
            bgColor="#2631c3"
            _hover={{ textDecoration: "none", bgColor: "#3c47e5" }}
          >
            Back To Home
          </Button>
        </VStack>
      </Flex>
    </PageLayout>
  );
};
