import { HStack, Link, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SidebarItemProps {
  name: string;
  link: string;
  path: string;
  icon: ReactNode;
}

export const SidebarItem = ({ name, link, path, icon }: SidebarItemProps) => {
  const location = useLocation();
  const [isCurrentPath, setIsCurrentPath] = useState<boolean>(false);

  useEffect(() => {
    setIsCurrentPath(path === location.pathname);
  }, [isCurrentPath]);

  return (
    <HStack
      as={Link}
      href={link}
      _hover={{ textDecor: "none", bg: isCurrentPath ? "" : "gray.200" }}
      spacing={5}
      p={3}
      my={1}
      color={isCurrentPath ? "#2631C3" : "gray.800"}
      borderLeft={isCurrentPath ? "5px solid #2631C3" : ""}
      bg={isCurrentPath ? "#e8f0fc" : ""}
    >
      {icon}
      <Text>{name}</Text>
    </HStack>
  );
};
