import { Box, VStack } from "@chakra-ui/react";
import { Helmet } from "../Helmet";

export const Sidebar = () => {
  return (
    <VStack
      w="20%"
      h="100vh"
      borderRight="2px solid #2631c3"
      position="fixed"
      top={0}
      left={0}
      overflowY="auto"
      bg="#fff"
      spacing={5}
      display={{ base: "none", md: "none", lg: "inline" }}
    >
      <Helmet />
      <Box overflow="auto" w="100%"></Box>
    </VStack>
  );
};
