import { FormProps } from "@/types/form";
import { FormControl, Input } from "@chakra-ui/react";

interface FormDateInputProps extends FormProps {}

export const FormDateInput = ({ name, isRequired }: FormDateInputProps) => {
  return (
    <FormControl>
      <Input
        name={name}
        type="date"
        border="1px solid"
        isRequired={isRequired}
      />
    </FormControl>
  );
};
