import Api from "./api";

const fetchWithError = async (url: string, options: any) => {
  const res = await Api().get(url, options);

  if (res.status === 200) {
    const result = await res.data;

    if (result.error) {
      throw new Error(result.error);
    }

    return result;
  }

  throw new Error(`Error ${res.status}: ${res.statusText}`);
};

export default fetchWithError;
