import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";

export const Auth = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <form>
        <VStack spacing={5}>
          <Text fontSize="25px" fontWeight="bold">
            Log In
          </Text>
          <Input />
          <Input />
          <Button w="100%" bgColor="#2631c3" color="white">
            Submit
          </Button>
        </VStack>
      </form>
    </Flex>
  );
};
