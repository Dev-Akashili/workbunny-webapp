import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useRef } from "react";
import { Helmet } from "@/components/Helmet";

export const MobileDrawer = () => {
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
          <DrawerHeader>
            <Helmet />
          </DrawerHeader>

          <DrawerBody>
            <></>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
