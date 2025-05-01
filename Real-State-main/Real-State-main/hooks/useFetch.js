import { useState, useEffect, useCallback } from 'react';

const useFetch = (
  endpoint = '/', // El endpoint por defecto
  method = 'GET',
  body = null,
  headers = {}
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const url = `http://localhost:5000${endpoint}`; //<------ aqui se le pega la ruta a la que vamos a requestear

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      if (body && (method === 'POST' || method === 'PUT')) { //<------------ Si el metodo es post o put formatea el body
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, method, body, headers]);

  useEffect(() => {
    if (method === 'GET') {
      fetchData();
    }
  }, [fetchData]);

  const doFetch = async () => {
    await fetchData();
  };

  return { data, loading, error, doFetch };
};

export default useFetch;
