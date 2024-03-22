import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";

export interface AlertObject {
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
  title: string;
  errors?: string[];
  description?: ReactNode | ReactNode[];
}

interface FormLayoutProps {
  title: string;
  description?: string;
  children: ReactNode | ReactNode[];
  alert?: AlertObject | undefined;
}

export const FormLayout = ({
  title,
  description,
  children,
  alert,
}: FormLayoutProps) => {
  const showAlert =
    alert !== null &&
    alert !== undefined &&
    alert &&
    Object.keys(alert).length > 0;

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
        {showAlert && (
          <FormAlert
            status={alert.status}
            title={alert.title}
            description={alert.description}
            errors={alert.errors}
          />
        )}
        {children}
      </VStack>
    </VStack>
  );
};

interface FormAlertProps {
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
  title: string;
  errors?: string[];
  description?: string | ReactNode | ReactNode[];
}
const FormAlert = ({ status, title, errors, description }: FormAlertProps) => {
  const {
    isOpen: isVisible,
    onOpen,
    onClose,
  } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    onOpen();
  }, [status, title, onOpen]);

  return isVisible ? (
    <Alert status={status}>
      {description ? (
        <>
          <AlertIcon mb="auto" />
          <VStack alignItems="left">
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
          </VStack>
        </>
      ) : errors ? (
        <>
          <AlertIcon mb="auto" />
          <VStack alignItems="left">
            <AlertTitle>{title}</AlertTitle>
            {errors.length > 1 ? (
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            ) : (
              <AlertDescription>{errors[0]}</AlertDescription>
            )}
          </VStack>
        </>
      ) : (
        <>
          <AlertIcon />
          <AlertTitle>{title}</AlertTitle>
        </>
      )}
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        ml="auto"
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : null;
};
