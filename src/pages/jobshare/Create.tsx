import { useState } from "react";
import { ROUTES } from "@/pages/routes";
import { Base, Searching } from "./components/stages";
import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CreateJobShare = () => {
  const [stage, setStage] = useState<string | undefined>(undefined);

  return (
    <VStack p={3}>
      <Box mr="auto">
        <Link to={ROUTES.dashboard}>
          <Text fontSize="md" fontWeight="bold" color="#2631c3">
            {"< Go Back"}
          </Text>
        </Link>
      </Box>
      <Text fontSize="3xl" fontWeight="bold" color="#2631c3" mx="auto">
        Create a New Job Share
      </Text>
      <Box mt={3} maxW="500px">
        <form>
          <Base stage={stage} setStage={setStage} />
          {stage && (
            <Box mt={5}>
              <Text
                color="#2631c3"
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
              >
                Stages
              </Text>
              <Searching />
            </Box>
          )}
          {stage && (
            <Stack spacing={3} mt={5}>
              {(stage === "interviewing" || stage === "hired") && (
                <Button colorScheme="red" w="40%">
                  Remove Stage
                </Button>
              )}
              <Button
                bgColor="#2631c3"
                _hover={{ bgColor: "blue" }}
                color="white"
                w="40%"
              >
                Add Next Stage
              </Button>
              <Button type="submit" colorScheme="green" w="30%">
                Submit
              </Button>
            </Stack>
          )}
        </form>
      </Box>
    </VStack>
  );
};
