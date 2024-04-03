import { Navbar } from "../components/navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { SidebarDesktop } from "@/components/sidebar/SidebarDesktop";
import { Outlet } from "react-router-dom";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";

export const PageLayout = () => {
  const { user } = useAuthentication();

  return (
    <Flex minH="100vh">
      <SidebarDesktop user={user} />
      <Box w={{ base: "100%", md: "100%", lg: "80%" }} ml="auto">
        <Navbar user={user} />
        <Box mt="80px" overflow="auto">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};
