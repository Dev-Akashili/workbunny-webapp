import { FormProps } from "@/types/form";
import { FormControl, Input, Stack, Text } from "@chakra-ui/react";

interface FormTextInputProps extends FormProps {}

export const FormTextInput = ({
  name,
  desc,
  isRequired,
}: FormTextInputProps) => {
  return (
    <FormControl>
      <Stack>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          {desc}
        </Text>
        <Input
          name={name}
          type="text"
          border="1px solid"
          isRequired={isRequired}
        />
      </Stack>
    </FormControl>
  );
};
