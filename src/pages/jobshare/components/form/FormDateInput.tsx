import { FormProps } from "@/types/form";
import { FormControl, Input, Stack, Text } from "@chakra-ui/react";

interface FormDateInputProps extends FormProps {}

export const FormDateInput = ({
  name,
  desc,
  isRequired,
}: FormDateInputProps) => {
  return (
    <FormControl>
      <Stack>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          {desc}
        </Text>
        <Input
          name={name}
          type="date"
          border="1px solid"
          isRequired={isRequired}
        />
      </Stack>
    </FormControl>
  );
};
