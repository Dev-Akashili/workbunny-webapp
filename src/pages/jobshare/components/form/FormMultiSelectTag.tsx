import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { FormProps } from "@/types/form";

interface FormMultiSelectTagProps extends FormProps {
  options: { value: string; label: string }[];
}

export const FormMultiSelectTag = ({
  name,
  label,
  options,
}: FormMultiSelectTagProps) => {
  const animatedComponents = makeAnimated();

  return (
    <FormControl>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <Select
        name={name}
        options={options}
        placeholder="Select options"
        components={animatedComponents}
        closeMenuOnSelect={false}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "black",
            height: "45px",
          }),
          multiValue: (baseStyles) => ({
            ...baseStyles,
            color: "#ffff",
            backgroundColor: "#2631c3",
          }),
          multiValueLabel: (baseStyles) => ({ ...baseStyles, color: "#ffff" }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "black",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "#black",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            color: "#black",
            border: "2px",
          }),
        }}
        isMulti
        required
      />
    </FormControl>
  );
};
