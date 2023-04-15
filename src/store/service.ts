import axios from 'axios';
import useSWR from 'swr';

export const apiKey = 'https://httpbin.org/get';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useHttpBin = () => {
  const { data } = useSWR(apiKey, fetcher);

  return {
    httpBin: data
  };
};
