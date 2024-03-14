import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export const NotFound = () => {
  return (
      <Flex h="100%" justifyContent="center" alignItems="center">
        <VStack spacing="50px">
          <Image />
          <Text fontSize="100px" fontWeight="bold" color="#2631c3">
            404
          </Text>
          <Text fontSize="25px" fontWeight="bold" color="#2631c3">
            Page Not Found
          </Text>
          <Text fontSize="18px" color="gray.400">
            Oops! It seems like you've stumbled a page that doesn't exist.
          </Text>
        </VStack>
      </Flex>
  );
};
