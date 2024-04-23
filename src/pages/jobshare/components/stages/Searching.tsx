import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { StageLayout } from "../../layout/StageLayout";
import {
  FormMultiSelect,
  FormMultiSelectTag,
  FormNumberInput,
  FormTextArea,
} from "../form";

export const Searching = () => {
  return (
    <StageLayout name="Searching">
      <Stack spacing={6}>
        <Stack>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            What platforms are you actively using to search?
          </Text>
          <FormMultiSelectTag
            name="primaryPlatforms"
            label="Select one or multiple"
            options={[]}
          />
        </Stack>
        <Stack>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            What other platforms do you use?
          </Text>
          <FormMultiSelectTag
            name="secondaryPlatforms"
            label="Select one or multiple"
            options={[]}
            isRequired
          />
        </Stack>
        <Box>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            How often are you making applications?
          </Text>
          <HStack mt={2}>
            <FormMultiSelect
              name="frequency"
              label="Frequency"
              list={[]}
              isRequired
            />
            <FormMultiSelect name="range" label="Number" list={[]} isRequired />
          </HStack>
        </Box>
        <Box>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            How many callbacks have you gotten?
          </Text>
          <Box w="50%">
            <FormNumberInput
              name="callbacks"
              label="Number of callbacks"
              isRequired
            />
          </Box>
        </Box>
        <Stack>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            What platforms did you get them?
          </Text>
          <FormMultiSelectTag
            name="callbackPlatforms"
            label="Select one or multiple"
            options={[]}
            isRequired
          />
        </Stack>
        <Stack>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            What was the next stage?
          </Text>
          <FormMultiSelectTag
            name="callbackPlatforms"
            label="Select one or multiple"
            options={[]}
            isRequired
          />
        </Stack>
        <Stack>
          <Text color="#2631c3" fontSize="xl" fontWeight="bold">
            Please leave a tip for this stage
          </Text>
          <FormTextArea name="searchingTip" />
        </Stack>
      </Stack>
    </StageLayout>
  );
};
