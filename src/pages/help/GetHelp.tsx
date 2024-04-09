import { ActionButton } from "@/components/ActionButton";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { sections } from "./data";

export const GetHelp = () => {
  return (
    <VStack p={8} spacing={8}>
      <Text fontSize="5xl" color="#2631c3" mr="auto">
        Get Help
      </Text>
      <Flex mr="auto" w="100%" flexFlow="wrap">
        {sections.map((item, index) => (
          <ActionButton
            key={index}
            icon={item.icon}
            name={item.name}
            link={item.link}
            color={item.color}
          />
        ))}
      </Flex>
    </VStack>
  );
};
