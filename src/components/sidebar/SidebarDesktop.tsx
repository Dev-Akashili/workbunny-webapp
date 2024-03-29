import { Box, VStack } from "@chakra-ui/react";
import { Helmet } from "../Helmet";
import { SidebarItem } from "./components/SidebarItem";
import { Home, LayoutDashboard, ShieldAlert } from "lucide-react";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { Roles } from "@/constants";
import { ROUTES } from "@/pages/routes";

export const SidebarDesktop = () => {
  const { user } = useAuthentication();

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
        <SidebarItem
          name="Home"
          link={ROUTES.home}
          path={ROUTES.home}
          icon={<Home />}
        />
        <SidebarItem
          name="Personal Dashboard"
          link={ROUTES.dashboard}
          path={ROUTES.dashboard}
          icon={<LayoutDashboard />}
        />
        {user?.roles.includes(Roles.Admin) && (
          <SidebarItem
            name="Admin Panel"
            link={ROUTES.admin}
            path={ROUTES.admin}
            icon={<ShieldAlert />}
          />
        )}
      </Box>
    </VStack>
  );
};
