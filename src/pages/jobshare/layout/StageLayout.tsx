import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface StageLayoutProps {
  name: string;
  children: ReactNode | ReactNode[];
}

export const StageLayout = ({ name, children }: StageLayoutProps) => {
  return (
    <TableContainer border="2px solid #2631c3" mt={5}>
      <Table>
        <Thead bgColor="blue.100">
          <Tr>
            <Th borderBottom="2px solid #2631c3">
              <Text fontSize="lg" fontWeight="bold" color="#2631c3">
                {name}
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Box>{children}</Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
