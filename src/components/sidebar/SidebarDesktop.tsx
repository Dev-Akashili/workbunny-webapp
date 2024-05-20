import { Helmet } from "../Helmet";
import { UserModel } from "@/types";
import { sidebarItems } from "./data";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { SidebarItem } from "./components/SidebarItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/context/Index";

export const SidebarDesktop = ({ user }: { user: UserModel | null }) => {
  const { isCollapsed, setCollapsed } = useSidebar();

  return (
    <VStack
      w={isCollapsed ? "5%" : "20%"}
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
      {isCollapsed ? (
        <Flex
          w="70%"
          m="15px auto"
          color="#2631c3"
          borderRadius={5}
          border="1.5px solid #2631c3"
          justifyContent="center"
          _hover={{ cursor: "pointer", bgColor: "gray.200" }}
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <ChevronRight size="40px" />
        </Flex>
      ) : (
        <Flex justifyContent="space-between" alignItems="center" mt={3}>
          <Helmet />
          <Box
            mr="10px"
            color="#2631c3"
            borderRadius={5}
            border="1.5px solid #2631c3"
            _hover={{ cursor: "pointer", bgColor: "gray.200" }}
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <ChevronLeft size="40px" />
          </Box>
        </Flex>
      )}

      <Box overflow="auto" w="100%" mt={isCollapsed?"20px":"10px"}>
        {sidebarItems.map((item, index) =>
          item.condition && !item.condition(user) ? null : (
            <SidebarItem
              key={index}
              name={item.name}
              link={item.link}
              path={item.path}
              icon={item.icon}
              collapsed={isCollapsed}
            />
          )
        )}
      </Box>
    </VStack>
  );
};
