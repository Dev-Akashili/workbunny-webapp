import { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { SidebarDesktop } from "@/components/sidebar/SidebarDesktop";

export const PageLayout = ({
  children
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <Flex minH="100vh">
      <SidebarDesktop />
      <Box w={{ base: "100%", md: "100%", lg: "80%" }} ml="auto">
        <Navbar />
        <Box mt="80px" overflow="auto">
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
