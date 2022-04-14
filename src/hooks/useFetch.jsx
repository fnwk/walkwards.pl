import { useState } from 'react';

const useFetch = (url, requestConfig) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url, requestConfig);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, sendRequest, isLoading };
};

export default useFetch;
