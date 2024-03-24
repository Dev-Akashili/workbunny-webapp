import { Box, Flex } from "@chakra-ui/react";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { ProfileMenu } from "./components/ProfileMenu";

export const Navbar = () => {
  const { user } = useAuthentication();
  return (
    <Flex height="100px" alignItems="center">
      <Flex justifyContent="space-between" w="100%" p={8}>
        <Box></Box>
        <ProfileMenu username={user?.userName} />
      </Flex>
    </Flex>
  );
};
