import axios, { AxiosResponse } from 'axios';

export const readTokens = async (params?: any): Promise<AxiosResponse<any>> => {
  return await axios.get('https://api.1inch.exchange/v3.0/1/tokens', params);
};
