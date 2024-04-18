import { FormControl, Input, Stack, Text } from "@chakra-ui/react";

interface FormDateProps {
  name: string;
  desc: string;
  isRequired?: boolean;
}

export const FormDate = ({ name, desc, isRequired }: FormDateProps) => {
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
