import { HStack, Text, useToast } from "@chakra-ui/react";
import { AlertObject, FormLayout } from "../layout/FormLayout";
import { FormButton, FormInput, FormLink, FormPasswordInput } from "./Index";
import { useRef, useState } from "react";
import { getFormData } from "@/utils";
import { login } from "@/api/identity";
import * as reactRouterDom from "react-router-dom";
import { login as custom } from "@/api/auth";

export const LogIn = () => {
  const toast = useToast();
  const navigate = reactRouterDom.useNavigate();
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertObject | undefined>(undefined);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(undefined);
    const { email, password } = getFormData(e, ["email", "password"]);

    try {
      const result = await login({ email, password });
      if (result.status === 200) {
        setIsLoading(false);
        navigate("/home");
        toast({
          title: "Login successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        const request = await custom({ email: email, password: password });
        const result = await request.json();
        setAlert({
          status: result.name,
          title: result.message,
          description: result.name === "info" && (
            <>
              Follow the link sent to your email or click
              <a
                href={`http://localhost:5173/auth?page=verify-email&name=register&email=${email}`}
                target="_blank"
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                {" "}
                here{" "}
              </a>
              to send a new link.
            </>
          ),
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.warn("Login failed!");
      toast({
        title: "Network error!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} ref={form}>
      <FormLayout title="Login to your account" alert={alert}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          isRequired
        />
        <FormPasswordInput name="password" />
        <FormLink link="Forgot Password?" to="/auth?page=forgot-password" />
        <FormButton name="Submit" isLoading={isLoading} />
        <HStack spacing={3}>
          <Text color="gray" size="lg">
            Don't have an account?
          </Text>
          <FormLink link="Register" to="/auth?page=register" />
        </HStack>
      </FormLayout>
    </form>
  );
};
