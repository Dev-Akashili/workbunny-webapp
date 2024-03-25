import { ErrorPage } from "./components/ErrorPage";

export const Forbidden = () => {
  return (
    <ErrorPage
      status="403"
      title="Access Denied/Forbiden"
      description="You are not authorized to visit this page."
    />
  );
};
