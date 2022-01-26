import { useState, useEffect } from 'react';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from '../services/api';

const useApi= (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(axiosParams.method === "GET" || axiosParams.method === "get");

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await api.request(params);
      setResponse(result);
    } catch( err ) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  }

  useEffect(() => {
    if(axiosParams.method === "GET" || axiosParams.method === "get"){
      fetchData(axiosParams);
    }
  },[]);

  return { response, error, loading, sendData };
}

export default useApi;