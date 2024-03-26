import { HStack, Image, Link, Text } from "@chakra-ui/react";

export const Helmet = () => {
  return (
    <Link
      href="/home"
      _hover={{ textDecoration: "none" }}
      m="25px auto 0px 20px"
    >
      <HStack spacing={3}>
        <Image
          src="https://img.icons8.com/glyph-neue/68/2631c3/year-of-rabbit.png"
          alt="bunny-logo"
          h="35px"
          w="35px"
        />
        <Text fontSize="lg" fontWeight="bold" color="#2631c3">
          Work Bunny
        </Text>
      </HStack>
    </Link>
  );
};
