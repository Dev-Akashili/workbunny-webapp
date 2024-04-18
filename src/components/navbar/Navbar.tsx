import { Box, Flex } from "@chakra-ui/react";
import { ProfileMenu } from "./components/ProfileMenu";
import { SidebarMobile } from "../sidebar/SidebarMobile";
import { UserModel } from "@/types";

export const Navbar = ({ user }: { user: UserModel | null }) => {
  return (
    <Flex
      alignItems="center"
      bg="#fff"
      position="fixed"
      boxShadow="md"
      w={{ base: "100%", md: "100%", lg: "80%" }}
      h="65px"
      zIndex={1}
    >
      <Flex justifyContent="space-between" w="100%" p={8}>
        <SidebarMobile user={user} />
        <Box display={{ base: "none", md: "none", lg: "inline" }}></Box>
        <ProfileMenu username={user?.userName} />
      </Flex>
    </Flex>
  );
};
