interface FetchOptions {
  method: string;
  body: string;
  headers: Record<string, string>;
}

interface AuthResponse {
  message: string;
}

interface FetchResponse {
  status: number;
  json: () => Promise<AuthResponse>;
}

export const mockAuthRequest = async (
  url: string,
  options: FetchOptions
): Promise<FetchResponse> =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        message: 'Success',
        url,
        options,
      }),
  });
