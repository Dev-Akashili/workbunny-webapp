import {
  FormControl,
  FormLabel,
  VStack,
  Tag,
  Textarea,
} from "@chakra-ui/react";
import { FormProps } from "@/types/form";
import { ChangeEvent, useEffect, useState } from "react";

interface FormTextAreaProps extends FormProps {}

export const FormTextArea = ({
  name,
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
        <FormLabel>{label}</FormLabel>
        <Textarea
          name={name}
          rows={8}
          border="1px solid"
          placeholder="Please leave a tip here in 100 words or less"
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
