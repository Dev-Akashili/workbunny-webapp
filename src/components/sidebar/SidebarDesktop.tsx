import { Helmet } from "../Helmet";
import { UserModel } from "@/types";
import { sidebarItems } from "./data";
import { Box, VStack } from "@chakra-ui/react";
import { SidebarItem } from "./components/SidebarItem";

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
        {sidebarItems.map((item, index) =>
          item.condition && !item.condition(user) ? null : (
            <SidebarItem
              key={index}
              name={item.name}
              link={item.link}
              path={item.path}
              icon={item.icon}
            />
          )
        )}
      </Box>
    </VStack>
  );
};
