import { FormProps } from "@/types/form";
import {
  FormControl,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/react";

interface FormNumberInputProps extends FormProps {}

export const FormNumberInput = ({
  name,
  desc,
  isRequired,
}: FormNumberInputProps) => {
  return (
    <FormControl>
      <Stack>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          {desc}
        </Text>
        <NumberInput name={name} isRequired={isRequired} defaultValue={0}>
          <NumberInputField border="1px solid" />
        </NumberInput>
      </Stack>
    </FormControl>
  );
};
