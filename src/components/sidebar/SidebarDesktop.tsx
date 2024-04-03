import {
  BarChart,
  HelpCircle,
  Home,
  LayoutDashboard,
  Mail,
  ShieldAlert
} from "lucide-react";
import { Roles } from "@/constants";
import { ROUTES } from "@/pages/routes";
import { Box, VStack } from "@chakra-ui/react";
import { Helmet } from "../Helmet";
import { SidebarItem } from "./components/SidebarItem";
import { UserModel } from "@/types";

export const SidebarDesktop = ({ user }: { user: UserModel | null }) => {
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
          name="Dashboard"
          link={ROUTES.dashboard}
          path={ROUTES.dashboard}
          icon={<LayoutDashboard />}
        />
        <SidebarItem
          name="Analytics"
          link={ROUTES.dashboard}
          path={ROUTES.admin}
          icon={<BarChart />}
        />
        <SidebarItem
          name="Messages"
          link={ROUTES.dashboard}
          path={ROUTES.admin}
          icon={<Mail />}
        />
        <SidebarItem
          name="Get Help"
          link={ROUTES.help}
          path={ROUTES.help}
          icon={<HelpCircle />}
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
