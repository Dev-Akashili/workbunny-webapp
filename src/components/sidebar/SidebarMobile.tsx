import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure
} from "@chakra-ui/react";
import {
  BarChart,
  HelpCircle,
  Home,
  LayoutDashboard,
  Mail,
  Menu,
  ShieldAlert
} from "lucide-react";
import { useRef } from "react";
import { Helmet } from "@/components/Helmet";
import { SidebarItem } from "./components/SidebarItem";
import { ROUTES } from "@/pages/routes";
import { Roles } from "@/constants";
import { UserModel } from "@/types";

export const SidebarMobile = ({ user }: { user: UserModel | null }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box display={{ base: "inline", md: "inline", lg: "none" }}>
      <Button ref={btnRef} onClick={onOpen} variant="ghost">
        <Menu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Helmet />
            <Box overflow="auto" w="100%">
              <SidebarItem
                name="Home"
                link={ROUTES.home}
                path={ROUTES.home}
                icon={<Home />}
                mobile
              />
              <SidebarItem
                name="Dashboard"
                link={ROUTES.dashboard}
                path={ROUTES.dashboard}
                icon={<LayoutDashboard />}
                mobile
              />
              <SidebarItem
                name="Analytics"
                link={ROUTES.dashboard}
                path={ROUTES.admin}
                icon={<BarChart />}
                mobile
              />
              <SidebarItem
                name="Messages"
                link={ROUTES.dashboard}
                path={ROUTES.admin}
                icon={<Mail />}
                mobile
              />
              <SidebarItem
                name="Get Help"
                link={ROUTES.help}
                path={ROUTES.help}
                icon={<HelpCircle />}
                mobile
              />
              {user?.roles.includes(Roles.Admin) && (
                <SidebarItem
                  name="Admin Panel"
                  link={ROUTES.admin}
                  path={ROUTES.admin}
                  icon={<ShieldAlert />}
                  mobile
                />
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
