import { FormProps } from "@/types/form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface FormTextInputProps extends FormProps {
  placeholder: string;
}

export const FormTextInput = ({
  name,
  label,
  placeholder,
  isRequired,
}: FormTextInputProps) => {
  return (
    <FormControl>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <Input
        name={name}
        type="text"
        border="1px solid"
        placeholder={placeholder}
        isRequired={isRequired}
        mt={-1}
      />
    </FormControl>
  );
};
