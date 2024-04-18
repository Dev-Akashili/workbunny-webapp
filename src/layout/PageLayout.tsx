import { Navbar } from "../components/navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth";
import { SidebarDesktop } from "@/components/sidebar/SidebarDesktop";

export const PageLayout = () => {
  const { user } = useContext(AuthContext);

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
