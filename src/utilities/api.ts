interface FetchResponse<T> {
  data: T | null;
  error: Error | null;
}

export const fetchData = async <T>(
  apiUrl: string,
): Promise<FetchResponse<T>> => {
  const result: FetchResponse<T> = {
    data: null,
    error: null,
  };

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData: T = await response.json();
    result.data = jsonData;
  } catch (error) {
    result.error = error as Error;
  }

  return result;
};
