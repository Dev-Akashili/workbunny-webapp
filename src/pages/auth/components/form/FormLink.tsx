import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const FormLink = ({ link, to }: { link: string; to: string }) => {
  return (
    <Box mr="auto">
      <Link to={to}>
        <Text as="u" fontSize="md" color="#2631c3" fontWeight="500">
          {link}
        </Text>
      </Link>
    </Box>
  );
};
