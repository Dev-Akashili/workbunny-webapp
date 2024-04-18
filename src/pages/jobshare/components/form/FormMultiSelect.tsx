import { FormControl, FormLabel, Select, Text } from "@chakra-ui/react";

export interface FormMultiSelectProps {
  name: string;
  desc: string;
  label: string;
  list?: string[];
  isRequired?: boolean;
}

export const FormMultiSelect = ({
  name,
  desc,
  label,
  list,
  isRequired
}: FormMultiSelectProps) => {
  return (
    <FormControl>
      <Text color="#2631c3" fontSize="xl" fontWeight="bold">
        {desc}
      </Text>
      <FormLabel>{label}</FormLabel>
      <Select
        name={name}
        border="1px solid"
        isRequired={isRequired}
        placeholder="Select an option"
      >
        {list?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
