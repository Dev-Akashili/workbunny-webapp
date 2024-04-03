import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const DefaultLayout = ({
  children
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      bgImage="linear-gradient(to bottom right, #fff, #dce1fc, #fff,  #fff)"
    >
      {children}
    </Flex>
  );
};
