import { Flex } from "@chakra-ui/react";
import { LogIn } from "./components/LogIn";

export const Auth = () => {
  return (
    <Flex
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgImage="linear-gradient(to bottom right, #fff, #dce1fc, #fff,  #fff)"
    >
      <form>
        <LogIn />
      </form>
    </Flex>
  );
};
