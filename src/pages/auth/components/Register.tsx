import { Box, HStack, Text } from "@chakra-ui/react";
import { AlertObject, FormLayout } from "../layout/FormLayout";
import { AUTH_ROUTES } from "@/pages/routes";
import { getFormData, getResponseErrors } from "@/utils";
import { useState } from "react";
import { register as custom } from "@/api/auth";
import { register } from "@/api/identity";
import { useNavigate } from "react-router-dom";
import { FormButton, FormInput, FormLink, FormPasswordInput } from "./form";

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertObject | undefined>(undefined);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(undefined);
    const { email, username, password, confirm } = getFormData(e, [
      "email",
      "username",
      "password",
      "confirm"
    ]);

    // Make sure passwords are the same
    if (password !== confirm) {
      setAlert({
        status: "error",
        title: "Passwords do not match!"
      });
      setIsLoading(false);
      return;
    }

    // Make sure username has no whitespace
    if (/\s/g.test(username)) {
      setAlert({
        status: "error",
        title: "Username should not have any space!"
      });
      setIsLoading(false);
      return;
    }

    // Make sure username is more than 2 characters
    if (username.length < 2) {
      setAlert({
        status: "error",
        title: "Username should be more than 2 characters!"
      });
      setIsLoading(false);
      return;
    }

    try {
      const request = await register({ email: email, password: password });

      if (request.status === 200) {
        const result = await custom({ email: email, username: username });
        if (result.status === 200) {
          navigate(AUTH_ROUTES.verifyEmail.regiser(email));
        } else if (result.status === 400) {
          const message = await result.text();
          setAlert({
            status: "error",
            title: message
          });
        } else {
          setAlert({
            status: "error",
            title: "Something went wrong! Please try again later."
          });
        }
      } else if (request.status === 400) {
        const response = await request.json();
        const errors = getResponseErrors(response.errors);
        setAlert({ status: "error", title: response.title, errors: errors });
      } else {
        setAlert({
          status: "error",
          title: "Something went wrong! Please try again later."
        });
      }
    } catch (error) {
      console.warn("Registration failed!");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleRegister}>
      <FormLayout title="Create a new account" alert={alert}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          isRequired
        />
        <FormInput
          name="username"
          type="text"
          label="Username"
          placeholder="Username"
          isRequired
        />
        <FormPasswordInput name="password" />
        <FormPasswordInput name="confirm" />
        <Box></Box>
        <FormButton name="Submit" isLoading={isLoading} />
        <HStack spacing={3}>
          <Text color="gray" size="lg">
            Already have an account?
          </Text>
          <FormLink link="Login" to={AUTH_ROUTES.login} />
        </HStack>
      </FormLayout>
    </form>
  );
};
