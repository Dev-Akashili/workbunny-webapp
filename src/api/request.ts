interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

const apiUrl = import.meta.env.VITE_API_LOCAL_URL;

export const request = async <T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> => {
  const response = await fetch(`${apiUrl}/api/v1/${url}`, {
    method: options.method,
    headers: options.headers,
    body: options.body,
  });

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
};
