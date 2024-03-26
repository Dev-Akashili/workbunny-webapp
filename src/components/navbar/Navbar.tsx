import { Box, Flex } from "@chakra-ui/react";
import { ProfileMenu } from "./components/ProfileMenu";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { MobileDrawer } from "./components/MobileDrawer";

export const Navbar = () => {
  const { user } = useAuthentication();
  return (
    <Flex
      alignItems="center"
      bg="#fff"
      position="fixed"
      w={{ base: "100%", md: "100%", lg: "80%" }}
      h="80px"
    >
      <Flex justifyContent="space-between" w="100%" p={8}>
        <MobileDrawer />
        <Box display={{ base: "none", md: "none", lg: "inline" }}></Box>
        <ProfileMenu username={user?.userName} />
      </Flex>
    </Flex>
  );
};
