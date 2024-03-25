import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
}

export const FormInput = ({
  name,
  label,
  type,
  placeholder,
  isRequired,
}: FormInputProps) => {
  return (
    <FormControl>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <InputGroup size="md">
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          border="1px solid"
          isRequired={isRequired}
        />
      </InputGroup>
    </FormControl>
  );
};

export const FormPasswordInput = ({
  name,
  prefix,
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

interface FormButtonProps {
  name: string;
  isLoading?: boolean;
}

export const FormButton = ({ name, isLoading, ...p }: FormButtonProps) => {
  return (
    <Button
      w="100%"
      color="white"
      bgColor="#2631c3"
      _hover={{
        bgColor: "#3c47e5",
      }}
      type="submit"
      isLoading={isLoading}
      size="md"
      {...p}
    >
      {name}
    </Button>
  );
};

export const FormLink = ({ link, to }: { link: string; to: string }) => {
  return (
    <Link href={to} mr="auto">
      <Text as="u" fontSize="md" color="#2631c3" fontWeight="500">
        {link}
      </Text>
    </Link>
  );
};
