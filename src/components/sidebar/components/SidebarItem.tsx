import { ROUTES } from "@/pages/routes";
import { HStack, Link, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SidebarItemProps {
  name: string;
  link: string;
  path: string;
  icon: ReactNode;
  collapsed: boolean;
  mobile?: boolean;
}

export const SidebarItem = ({
  name,
  link,
  path,
  icon,
  collapsed,
  mobile = false,
}: SidebarItemProps) => {
  const location = useLocation();
  const [isCurrentPath, setIsCurrentPath] = useState<boolean>(false);

  useEffect(() => {
    const isPathMatch = location.pathname.includes(path);
    const isJobShareIndex = location.pathname.includes(ROUTES.jobshare.index);

    if (isPathMatch || (isJobShareIndex && path === ROUTES.dashboard)) {
      setIsCurrentPath(true);
    } else {
      setIsCurrentPath(false);
    }
  }, [location.pathname, path, setIsCurrentPath]);

  return (
    <HStack
      p={3}
      my={1}
      spacing={5}
      as={Link}
      href={link}
      justifyContent={collapsed?"center":""}
      _hover={{
        textDecor: "none",
        bg: isCurrentPath ? "" : "gray.200",
        borderRadius: mobile ? "8px" : "",
      }}
      color={isCurrentPath ? "#2631C3" : "gray.800"}
      borderLeft={isCurrentPath ? (!mobile ? "5px solid #2631C3" : "") : ""}
      bg={isCurrentPath ? "#e8f0fc" : ""}
      borderRadius={isCurrentPath ? (mobile ? "8px" : "") : ""}
    >
      {icon}
      <Text display={collapsed ? "none" : "inline"}>{name}</Text>
    </HStack>
  );
};
