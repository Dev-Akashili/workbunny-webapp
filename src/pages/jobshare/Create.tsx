import {
  FormDateInput,
  FormNumberInput,
  FormTextInput,
  FormMultiSelect,
  FormMultiSelectTag,
  FormTextArea,
} from "./components/form";
import { ROUTES } from "@/pages/routes";
import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { StageLayout } from "./layout/StageLayout";

export const CreateJobShare = () => {
  return (
    <VStack p={3} spacing={3}>
      <Text
        as={Link}
        _hover={{ textDecor: "none" }}
        href={ROUTES.dashboard}
        fontSize="md"
        fontWeight="bold"
        color="#2631c3"
        mr="auto"
      >
        {"< Go Back"}
      </Text>
      <Text fontSize="4xl" fontWeight="bold" color="#2631c3" mx="auto">
        Create a New Job Share
      </Text>
      <Box>
        <form>
          <FormDateInput
            name="start"
            desc="When did you start searching for this job?"
            isRequired
          />
          <FormMultiSelect
            name="country"
            desc="Where are you searching?"
            label="Country"
            list={["Japan", "China", "Nigeria", "United Kingdom"]}
            isRequired
          />
          <FormMultiSelectTag
            name="country"
            desc="What platforms are you actively using to search?"
            label="Select one or multiple"
            options={[
              { value: "Japan", label: "Japan" },
              { value: "China", label: "China" },
              { value: "Nigeria", label: "Nigeria" },
              { value: "United Kingdom", label: "United Kingdom" },
            ]}
            isRequired
          />
          <FormTextInput
            name="start"
            desc="When did you start searching for this job?"
            isRequired
          />
          <StageLayout stageName="Searching">
            <FormNumberInput
              name="start"
              desc="When did you start searching for this job?"
              isRequired
            />
            <FormMultiSelect
              name="country"
              desc="Where are you searching?"
              label="Country"
              list={["Japan", "China", "Nigeria", "United Kingdom"]}
              isRequired
            />
            <FormTextArea
              name="tip"
              desc="Please leave some tips that have helped you"
            />
          </StageLayout>
        </form>
      </Box>
    </VStack>
  );
};
