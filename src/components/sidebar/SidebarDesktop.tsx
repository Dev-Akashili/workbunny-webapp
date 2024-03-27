import { Box, VStack } from "@chakra-ui/react";
import { Helmet } from "../Helmet";
import { SidebarItem } from "./components/SidebarItem";
import { Home, UserCog } from "lucide-react";

export const SidebarDesktop = () => {
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
      <Box overflow="auto" w="100%">
        <SidebarItem name="Home" link="/home" path="/home" icon={<Home />} />
        <SidebarItem
          name="Admin Panel"
          link="/admin"
          path="/admin"
          icon={<UserCog />}
        />
      </Box>
    </VStack>
  );
};
