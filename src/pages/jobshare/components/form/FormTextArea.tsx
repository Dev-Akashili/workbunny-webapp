import { FormProps } from "@/types/form";
import {
  FormControl,
  FormLabel,
  VStack,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

interface FormTextAreaProps extends FormProps {}

export const FormTextArea = ({
  name,
  desc,
  label,
  isRequired,
}: FormTextAreaProps) => {
  const [wordCount, setWordCount] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    setWordCount(countWords(text));
  };

  const countWords = (text: string) => {
    if (text.trim() === "") return 0;
    const words = text.split(/\s+/);
    return words.length;
  };

  useEffect(() => {}, [wordCount]);

  return (
    <VStack>
      <FormControl>
        <Text color="#2631c3" fontSize="xl" fontWeight="bold">
          {desc}
        </Text>
        <FormLabel>{label}</FormLabel>
        <Textarea
          name={name}
          rows={8}
          border="1px solid"
          placeholder="Leave a tip here"
          onChange={handleChange}
          isInvalid={wordCount >= 100}
          isRequired={isRequired}
        />
      </FormControl>
      <Tag
        mr="auto"
        fontWeight="bold"
        color={wordCount < 100 ? "#2631c3" : undefined}
        colorScheme={wordCount >= 100 ? "red" : "blue"}
      >
        {`Word Count: ${wordCount}/100`}
      </Tag>
    </VStack>
  );
};
