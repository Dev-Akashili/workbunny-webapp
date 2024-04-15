import {
  FormControl,
  FormLabel,
  HStack,
  Select,
  Text,
  Tag,
  TagLabel,
  TagCloseButton
} from "@chakra-ui/react";
import { FormMultiSelectProps } from "./FormMultiSelect";
import { useEffect, useState } from "react";

interface TileProps {
  name: string;
  onClick: () => void;
}

const Tile = ({ name, onClick }: TileProps) => {
  return (
    <Tag
      size="lg"
      variant="subtle"
      colorScheme="blue"
      color="#2631c3"
      fontWeight="bold"
    >
      <TagLabel>{name}</TagLabel>
      <TagCloseButton onClick={onClick} />
    </Tag>
  );
};

interface FormMultiSelectTagProps extends FormMultiSelectProps {}

export const FormMultiSelectTag = ({
  name,
  desc,
  label,
  list,
  isRequired
}: FormMultiSelectTagProps) => {
  const [value, setValue] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setOptions([...list]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.currentTarget.value;
    if (val) {
      setValue((prev) => [...prev, val]);
      setSelected((prev) => [...prev, val]);
      setOptions((prev) => prev.filter((option) => option !== val));
    }
  };

  const handleClick = (item: string) => {
    setSelected((prev) => prev.filter((option) => option !== item));
    setOptions((prev) => [...prev, item]);
    console.log(value, value.toString());
  };

  return (
    <FormControl>
      <Text color="#2631c3" fontSize="xl" fontWeight="bold">
        {desc}
      </Text>
      <FormLabel>{label}</FormLabel>
      <HStack mb={selected.length > 0 ? 3 : 0}>
        {selected.map((item, index) => (
          <Tile key={index} name={item} onClick={() => handleClick(item)} />
        ))}
      </HStack>
      <Select
        name={name}
        value={value.toString()}
        placeholder="Select an option"
        border="1px solid"
        isRequired={isRequired}
        onChange={handleChange}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
