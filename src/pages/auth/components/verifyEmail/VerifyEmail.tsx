import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Busy } from "@/components/Busy";
import { sendEmail, verifyEmail } from "@/api/auth";
import { Error } from "../Error";
import { EmailSent } from "./components/EmailSent";
import { EmailVerified } from "./components/EmailVerified";
import { LinkExpired } from "./components/LinkExpired";
import { ResetPassword } from "../ResetPassword";

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<string | null>("");
  const [display, setDisplay] = useState<string | null>("");
  const [email, setEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resetObj, setResetObj] = useState<any>({});

  useEffect(() => {
    const verify = async () => {
      setDisplay("busy");
      setName(searchParams.get("name"));

      if (name === "register" || name === "reset") {
        const email = searchParams.get("email");
        if (email) {
          try {
            const response = await sendEmail(email, name);
            response.status === 200
              ? setDisplay("emailSent")
              : setDisplay("error");
          } catch (error) {
            console.warn("Sending email verification link failed!");
            setDisplay("error");
          }
        } else {
          setDisplay("error");
        }
      }

      // When the page loads, the verification should happen
      if (name === "verify") {
        const codeId = searchParams.get("codeId");
        const code = searchParams.get("code");
        const email = searchParams.get("email");

        if (codeId && code && email) {
          try {
            const response = await verifyEmail({
              codeId: parseInt(codeId, 10),
              code: code,
              email: email,
            });
            if (response.status === 200) {
              setDisplay("verified");
            } else {
              const result = await response.text();
              if (result === "expired") {
                setDisplay("expired");
              } else {
                setDisplay("error");
              }
            }
            setEmail(email);
          } catch (error) {
            console.warn("Email verification failed!");
            setDisplay("error");
          }
        } else {
          setDisplay("error");
        }
      }

      if (name === "reset-form") {
        const codeId = searchParams.get("codeId");
        const code = searchParams.get("code");
        const email = searchParams.get("email");
        if (codeId && code && email) {
          setResetObj({
            codeId: parseInt(codeId, 10),
            code: code,
            email: email,
          });
          setDisplay("reset-form");
        }
      }

      if (
        name !== "register" &&
        name !== "reset" &&
        name !== "verify" &&
        name !== "reset-form"
      ) {
        setDisplay("error");
      }
    };
    verify();
  }, [name, searchParams]);

  const getPage = () => {
    switch (display) {
      case "busy":
        return <Busy />;
        break;
      case "emailSent":
        return <EmailSent name={name} />;
        break;
      case "verified":
        return <EmailVerified name="register" />;
        break;
      case "expired":
        return <LinkExpired name="register" email={email} />;
        break;
      case "reset-form":
        return <ResetPassword resetObj={resetObj} />;
        break;
      case "error":
        return <Error />;
        break;
      default:
        return <Busy />;
        break;
    }
  };

  return <>{getPage()}</>;
};
