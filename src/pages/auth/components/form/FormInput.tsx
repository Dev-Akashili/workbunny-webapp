import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";

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
  isRequired
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
