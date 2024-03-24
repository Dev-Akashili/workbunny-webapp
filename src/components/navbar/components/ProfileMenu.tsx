import { logout } from "@/api/identity";
import { AUTH_ROUTES } from "@/pages/routes";
import {
  Avatar,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ProfileMenu = ({ username }: { username: string | undefined }) => {
  const navigate = useNavigate();
  const toast = useToast({ duration: 5000, isClosable: true, position: "top" });

  const handleSignOut = async () => {
    try {
      const request = await logout();

      if (request.status === 200) {
        navigate(AUTH_ROUTES.login);
        toast({
          title: "Signed Out!",
          status: "success",
        });
      } else {
        toast({
          title: "Something went wrong!",
          status: "error",
        });
      }
    } catch (error) {
      console.warn("Sign Out failed!");
      toast({
        title: "Network error!",
        status: "error",
      });
    }
  };

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost">
        <HStack spacing={3}>
          <Text>{username}</Text>
          <Avatar name={username} border="2px solid #2631c3" size="sm" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuGroup title="My Account" fontSize="md">
          <MenuDivider />
          <MenuItem icon={<LogOut />} onClick={handleSignOut}>
            Sign Out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};