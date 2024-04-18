import { ROUTES } from "@/pages/routes";
import { Link, Text, VStack } from "@chakra-ui/react";
import { FormDate } from "./components/form/FormDate";
import { FormMultiSelect } from "./components/form/FormMultiSelect";
import { FormMultiSelectTag } from "./components/form/FormMultiSelectTag";

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
      <form>
        <FormDate
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
            { value: "United Kingdom", label: "United Kingdom" }
          ]}
          isRequired
        />
        <FormDate
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
      </form>
    </VStack>
  );
};
