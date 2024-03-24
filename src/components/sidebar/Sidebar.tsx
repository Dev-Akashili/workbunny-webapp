import { VStack } from "@chakra-ui/react";
import { Helmet } from "./components/Helmet";

export const Sidebar = () => {
  return (
    <VStack w="20%" borderRight="2px solid #2631c3" spacing={8}>
      <Helmet />
    </VStack>
  );
};
