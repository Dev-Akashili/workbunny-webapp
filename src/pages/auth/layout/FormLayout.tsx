import { Image, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormLayoutProps {
  title: string;
  description?: string;
  children: ReactNode | ReactNode[];
}

export const FormLayout = ({
  title,
  description,
  children,
}: FormLayoutProps) => {
  return (
    <VStack spacing={5} w="450px">
      <Image
        src="https://img.icons8.com/glyph-neue/68/2631c3/year-of-rabbit.png"
        alt="bunny-logo"
        w="55px"
        h="55px"
      />
      <VStack
        spacing={4}
        p={5}
        borderRadius="20px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        bgColor="#fff"
        w="100%"
      >
        <Text fontSize="2xl" fontWeight="extrabold" color="#2631c3">
          {title}
        </Text>
        {description && (
          <Text fontSize="md" fontWeight="extrabold" color="gray">
            {description}
          </Text>
        )}
        {children}
      </VStack>
    </VStack>
  );
};
