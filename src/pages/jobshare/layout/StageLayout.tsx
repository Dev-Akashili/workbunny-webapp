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
  stageName: string;
  children: ReactNode | ReactNode[];
}

export const StageLayout = ({ stageName, children }: StageLayoutProps) => {
  return (
    <TableContainer border="2px solid #2631c3" mt={8}>
      <Table>
        <Thead bgColor="blue.100">
          <Tr>
            <Th borderBottom="2px solid #2631c3">
              <Text fontSize="lg" fontWeight="bold" color="#2631c3">
                {stageName}
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody p={3}>
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
