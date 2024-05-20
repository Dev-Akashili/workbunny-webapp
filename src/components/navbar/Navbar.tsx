import { Box, Flex } from "@chakra-ui/react";
import { ProfileMenu } from "./components/ProfileMenu";
import { SidebarMobile } from "../sidebar/SidebarMobile";
import { UserModel } from "@/types";
import { useSidebar } from "@/context/Index";

export const Navbar = ({ user }: { user: UserModel | null }) => {
  const { isCollapsed } = useSidebar();

  return (
    <Flex
      h="65px"
      bg="#fff"
      zIndex={1}
      boxShadow="md"
      position="fixed"
      alignItems="center"
      w={{ base: "100%", md: "100%", lg: isCollapsed ? "95%" : "80%" }}
    >
      <Flex justifyContent="space-between" w="100%" p={8}>
        <SidebarMobile user={user} />
        <Box display={{ base: "none", md: "none", lg: "inline" }}></Box>
        <ProfileMenu username={user?.userName} />
      </Flex>
    </Flex>
  );
};
