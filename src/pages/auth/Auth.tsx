import { LogIn } from "./components/LogIn";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Register } from "./components/Register";
import { ForgotPassword } from "./components/ForgotPassword";
import { VerifyEmail } from "./components/verifyEmail/VerifyEmail";
import { DefaultLayout } from "@/layout/DefaultLayout";

export const Auth = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<string | null>("");

  useEffect(() => {
    setPage(searchParams.get("page"));
  }, [page, searchParams]);

  const getPage = () => {
    switch (page) {
      case "login":
        return <LogIn />;
        break;
      case "register":
        return <Register />;
        break;
      case "forgot-password":
        return <ForgotPassword />;
        break;
      case "verify-email":
        return <VerifyEmail />;
        break;
      default:
        return <LogIn />;
        break;
    }
  };

  return <DefaultLayout>{getPage()}</DefaultLayout>;
};
