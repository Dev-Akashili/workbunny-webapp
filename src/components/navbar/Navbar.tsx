import {
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { ProfileMenu } from "./components/ProfileMenu";

export const Navbar = () => {
  const { user } = useAuthentication();
  return (
    <Flex height="100px" alignItems="center">
      <Flex justifyContent="space-between" w="100%" p={8}>
        <Link href="/home" _hover={{ textDecoration: "none" }}>
          <HStack spacing={3}>
            <Image
              src="https://img.icons8.com/glyph-neue/68/2631c3/year-of-rabbit.png"
              alt="bunny-logo"
              h="50px"
              w="50px"
            />
            <Text fontSize="xl" fontWeight="bold" color="#2631c3">
              Work Bunny
            </Text>
          </HStack>
        </Link>
        <ProfileMenu username={user?.userName} />
      </Flex>
    </Flex>
  );
};
