import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { ProfileMenu } from "./components/ProfileMenu";
import { SidebarMobile } from "../sidebar/SidebarMobile";
import { UserModel } from "@/types";
import { useSidebar } from "@/context/Index";
import { AUTH_ROUTES } from "@/pages/routes";
import { Link } from "react-router-dom";

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
        {user ? (
          <ProfileMenu username={user?.userName} />
        ) : (
          <HStack>
            <Link to={AUTH_ROUTES.login}>
              <Button
                variant="outline"
                border="2px solid #2631c3"
                color="#2631c3"
                _hover={{ bgColor: "gray.200" }}
              >
                Log In
              </Button>
            </Link>
            <Link to={AUTH_ROUTES.register}>
              <Button
                bgColor="#2631c3"
                color="#fff"
                _hover={{ bgColor: "#404bdd" }}
              >
                Create an Account
              </Button>
            </Link>
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};
