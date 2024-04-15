import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const FormPasswordInput = ({
  name,
  prefix
}: {
  name: "password" | "confirm";
  prefix?: string;
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">
        {name === "password"
          ? prefix
            ? `${prefix} Password`
            : "Password"
          : "Confirm Password"}
      </FormLabel>
      <InputGroup size="md">
        <Input
          name={name}
          placeholder={
            name === "password"
              ? prefix
                ? `${prefix} Password`
                : "Password"
              : "Confirm Password"
          }
          type={show ? "text" : "password"}
          border="1px solid"
          required
        />
        <InputRightElement mr="5px">
          <Button variant="ghost" size="sm" onClick={handleClick}>
            {show ? <Eye /> : <EyeOff />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
