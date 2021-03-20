import { useState, useEffect } from 'react';

const useGetData = () => {
  const API = process.env.API;

  const [info, setInfo] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(async () => {
    try {
      setInfo({ loading: true, error: null });

      const response = await fetch(API);
      const { results } = await response.json();
      setInfo({ loading: false, data: results[0] });
    } catch (error) {
      setInfo({ loading: false, error: error.message });
    }
  }, []);

  return info;
};

export default useGetData;
