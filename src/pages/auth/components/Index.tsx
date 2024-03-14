import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
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
      <FormLabel>{label}</FormLabel>
      <InputGroup size="lg">
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

export const FormPasswordInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel>Password</FormLabel>
      <InputGroup size="lg">
        <Input
          name="password"
          placeholder="Password"
          type={show ? "text" : "password"}
          border="1px solid"
          required
        />
        <InputRightElement>
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
      backgroundColor="#2631c3"
      _hover={{
        bgColor: "#3c47e5",
      }}
      type="submit"
      isLoading={isLoading}
      size="lg"
      {...p}
    >
      {name}
    </Button>
  );
};

interface FormAlertProps {
  message: string;
  description: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
}

export const FormAlert = ({
  status,
  message,
  description,
  ...p
}: FormAlertProps) => {
  return (
    <Alert status={status} variant="left-accent" {...p}>
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <CloseButton />
    </Alert>
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
