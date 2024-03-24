import { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "@/components/sidebar/Sidebar";

export const PageLayout = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box w="80%">
        <Navbar />
        {children}
      </Box>
    </Flex>
  );
};
