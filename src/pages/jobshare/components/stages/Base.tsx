/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import { countriesAndCities } from "@/data/countries";
import { FormDateInput, FormMultiSelect, FormTextInput } from "../form";
import { Box, HStack, Stack, Text, Radio, RadioGroup } from "@chakra-ui/react";

interface BaseProps {
  stage: string | undefined;
  setStage: any;
}

export const Base = ({ stage, setStage }: BaseProps) => {
  const [cities, setCities] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const countries = countriesAndCities.map((data) => data.country);

  // Update cities based on country selected
  const handleCityUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const country = e.currentTarget.value;
    if (country) {
      setIsDisabled(false);
      const data =
        countriesAndCities.find((data) => data.country === country)?.cities ||
        [];
      setCities(data);
    } else {
      setIsDisabled(true);
      setCities([]);
    }
  };

  return (
    <Stack spacing={6} px={5}>
      <Box>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          When did you start searching for a job?
        </Text>
        <FormDateInput name="started" isRequired />
      </Box>
      <Box>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          Where are you searching?
        </Text>
        <HStack>
          <FormMultiSelect
            name="country"
            label="Country"
            list={countries}
            onChange={handleCityUpdate}
            isRequired
          />
          <FormMultiSelect
            name="city"
            label="City"
            isDisabled={isDisabled}
            list={cities}
            isRequired
          />
        </HStack>
      </Box>
      <Box>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          What is your target job title and experience level?
        </Text>
        <HStack>
          <FormMultiSelect
            name="job"
            label="Job Title"
            list={countries}
            isRequired
          />
          <FormMultiSelect
            name="level"
            label="Experience Level"
            list={cities}
            isRequired
          />
        </HStack>
      </Box>
      <Box>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          What CV/Resume are you using for this job search?
        </Text>
        <FormTextInput
          name="resume"
          placeholder="Please provide a link to the cv/resume"
        />
      </Box>
      <Box>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          What stage are you currently at in your job search journey?
        </Text>
        <RadioGroup onChange={setStage} value={stage}>
          <Stack fontWeight="bold" mt={2}>
            <Radio border="2px solid #2631c3" value="searching">
              Currently Searching
            </Radio>
            <Radio border="2px solid #2631c3" value="interviewing">
              Interviewing with some companies
            </Radio>
            <Radio border="2px solid #2631c3" value="hired">
              Hired/Recently accepted an offer
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
};
