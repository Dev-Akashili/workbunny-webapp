import { ErrorPage } from "./components/ErrorPage";

export const NotFound = () => {
  return (
    <ErrorPage
      status="404"
      title="Page Not Found"
      description="Oops! It seems like you've stumbled on a page that doesn't exist."
    />
  );
};
