import { ActionButton } from "@/components/ActionButton";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { buttons } from "./data";

export const Dashboard = () => {
  return (
    <VStack p={8} spacing={8}>
      <Text fontSize="5xl" color="#2631c3" mr="auto">
        Dashboard
      </Text>
      <Flex mr="auto" w="100%" flexFlow="wrap">
        {buttons.map((item, index) => (
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
