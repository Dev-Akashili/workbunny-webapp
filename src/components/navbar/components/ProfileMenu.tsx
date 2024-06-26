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
import { LogOut, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logout } from "@/api/identity";
import { AUTH_ROUTES } from "@/pages/routes";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth";

export const ProfileMenu = ({ username }: { username: string | undefined }) => {
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);
  const toast = useToast({ duration: 5000, isClosable: true, position: "top" });

  const handleSignOut = async () => {
    try {
      const request = await logout();

      if (request.status === 200) {
        setAuthState({ isAuthenticated: false, user: null });
        navigate(AUTH_ROUTES.login);
        toast({
          title: "Signed out!",
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
          <Avatar
            name={username?.slice(0, 1) + " " + username?.slice(1)}
            border="3px solid #2631c3"
            size="sm"
            color="#ffff"
          />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuGroup title="My Account" fontSize="sm">
          <MenuDivider />
          <MenuItem
            icon={<UserCog />}
            onClick={handleSignOut}
            fontSize="sm"
            h="100%"
            _hover={{ color: "#2631C3" }}
          >
            Profile Settings
          </MenuItem>
          <MenuDivider />
          <MenuItem
            icon={<LogOut />}
            onClick={handleSignOut}
            fontSize="sm"
            _hover={{ color: "#2631C3" }}
          >
            Sign out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
