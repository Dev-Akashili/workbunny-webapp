import { ROUTES } from "@/pages/routes";
import { Link, Text, VStack } from "@chakra-ui/react";

export const CreateJobShare = () => {
  return (
    <VStack p={3} spacing={8}>
      <Text
        as={Link}
        _hover={{ textDecor: "none" }}
        href={ROUTES.dashboard.base}
        fontSize="md"
        fontWeight="bold"
        color="#2631c3"
        mr="auto"
      >
        {"< Go Back"}
      </Text>
      <Text fontSize="4xl" fontWeight="bold" color="#2631c3" mx="auto">
        Create a New Job Share
      </Text>
      <form>
        
      </form>
    </VStack>
  );
};
