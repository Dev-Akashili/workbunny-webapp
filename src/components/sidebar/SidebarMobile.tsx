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
import { Menu } from "lucide-react";
import { useRef } from "react";
import { UserModel } from "@/types";
import { sidebarItems } from "./data";
import { Helmet } from "@/components/Helmet";
import { SidebarItem } from "./components/SidebarItem";

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
              {sidebarItems.map((item, index) =>
                item.condition && !item.condition(user) ? null : (
                  <SidebarItem
                    key={index}
                    name={item.name}
                    link={item.link}
                    path={item.path}
                    icon={item.icon}
                    onClick={onClose}
                    mobile
                  />
                )
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
