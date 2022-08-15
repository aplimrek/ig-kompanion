import {useState, useCallback} from 'react';
import axios, {AxiosRequestConfig, AxiosError} from 'axios';

const useApi = <T>() => {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(async (params: AxiosRequestConfig<any>) => {
    try {
      setLoading(true);
      const result = await axios.request<T>({
        ...params,
      });
      setResponse(result.data);
    } catch (err) {
      const errors = err as Error | AxiosError;
      setError(errors.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {response, error, loading, fetchData};
};

export default useApi;
