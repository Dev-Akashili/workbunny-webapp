import { Link, Text } from "@chakra-ui/react";

export const FormLink = ({ link, to }: { link: string; to: string }) => {
  return (
    <Link href={to} mr="auto">
      <Text as="u" fontSize="md" color="#2631c3" fontWeight="500">
        {link}
      </Text>
    </Link>
  );
};
