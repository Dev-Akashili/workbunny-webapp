export const getFormData = (
  e: React.FormEvent<HTMLFormElement>,
  params: string[]
) => {
  const data: Record<string, string> = {};

  for (let i = 0; i < params.length; i++) {
    const val = new FormData(e.currentTarget).get(params[i]);
    data[params[i]] = val !== null ? String(val) : "";
  }

  return data;
};
