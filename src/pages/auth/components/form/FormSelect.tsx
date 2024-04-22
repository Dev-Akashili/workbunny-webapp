import { FormControl, FormLabel, InputGroup, Select } from "@chakra-ui/react";

interface FormSelectProps {
  name: string;
  label: string;
  options: string[];
  isRequired?: boolean;
}

export const FormSelect = ({
  name,
  label,
  options,
  isRequired,
}: FormSelectProps) => {
  return (
    <FormControl>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <InputGroup size="md">
        <Select
          name={name}
          placeholder="Select an option"
          border="1px solid"
          _hover={{ cursor: "pointer" }}
          isRequired={isRequired}
        >
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </Select>
      </InputGroup>
    </FormControl>
  );
};
