import { TriangleAlert } from "lucide-react";
import { ErrorPage } from "./components/ErrorPage";

export const ErrorFallback = () => {
  return (
    <ErrorPage
      icon={<TriangleAlert size="200px" color="#2631C3" />}
      title="Something went wrong!"
      description="OOPS! It seems like there is something wrong with this page"
      button={false}
    />
  );
};
