import { HStack, Text, useToast } from "@chakra-ui/react";
import { AlertObject, FormLayout } from "../layout/FormLayout";
import { useContext, useState } from "react";
import { getFormData } from "@/utils";
import { login } from "@/api/identity";
import { login as custom } from "@/api/auth";
import { AUTH_ROUTES, ROUTES } from "@/pages/routes";
import { useNavigate } from "react-router-dom";
import { FormButton, FormInput, FormLink, FormPasswordInput } from "./form";
import { getUser } from "@/api/user";
import { AuthContext } from "@/context/Auth";

export const LogIn = () => {
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertObject | undefined>(undefined);
  const toast = useToast({ duration: 5000, isClosable: true, position: "top" });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(undefined);
    const { email, password } = getFormData(e, ["email", "password"]);

    try {
      const result = await login({ email, password });
      if (result.status === 200) {
        const response = await getUser();
        const user = await response.json();
        if (user) {
          setAuthState({ isAuthenticated: true, user: user });
          setIsLoading(false);
          navigate(ROUTES.home);
          toast({
            title: "Login successful",
            status: "success"
          });
        } else {
        }
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
                href={AUTH_ROUTES.verifyEmail.regiser(email)}
                target="_blank"
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer"
                }}
              >
                {" "}
                here{" "}
              </a>
              to send a new link.
            </>
          )
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.warn("Login failed!");
      toast({
        title: "Network error!",
        status: "error"
      });
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <FormLayout title="Login to your account" alert={alert}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          isRequired
        />
        <FormPasswordInput name="password" />
        <FormLink link="Forgot Password?" to={AUTH_ROUTES.forgotPasword} />
        <FormButton name="Submit" isLoading={isLoading} />
        <HStack spacing={3}>
          <Text color="gray" size="lg">
            Don't have an account?
          </Text>
          <FormLink link="Register" to={AUTH_ROUTES.register} />
        </HStack>
      </FormLayout>
    </form>
  );
};
