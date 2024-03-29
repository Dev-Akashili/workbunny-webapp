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
import { Home, LayoutDashboard, Menu, ShieldAlert } from "lucide-react";
import { useRef } from "react";
import { Helmet } from "@/components/Helmet";
import { SidebarItem } from "./components/SidebarItem";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { ROUTES } from "@/pages/routes";
import { Roles } from "@/constants";

export const SidebarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { user } = useAuthentication();

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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
