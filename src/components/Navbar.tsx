import {
  Avatar,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export const ProfileTile = ({ username }: { username: string }) => {
  return (
    <Button variant="ghost">
      <HStack spacing={3}>
        <Text>{username}</Text>
        <Avatar name={username} border="2px solid #2631c3" size="sm" />
      </HStack>
    </Button>
  );
};

export const Navbar = () => {
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
        <ProfileTile username="emksakashili@gmail.com" />
      </Flex>
    </Flex>
  );
};
