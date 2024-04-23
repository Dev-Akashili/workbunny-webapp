/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProps } from "@/types/form";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export interface FormMultiSelectProps extends FormProps {
  list?: string[];
  isDisabled?: boolean;
  onChange?: any;
}

export const FormMultiSelect = ({
  name,
  label,
  list,
  isRequired,
  isDisabled,
  onChange,
}: FormMultiSelectProps) => {
  return (
    <FormControl>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <Select
        name={name}
        border="1px solid"
        isRequired={isRequired}
        placeholder="Select an option"
        disabled={isDisabled}
        onChange={onChange}
        mt={-1}
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
