import request from "../configs/request";

export const getWalletSupportedCurrencies = () => {
  return request.get("/wallet/supportedCurrencies").then(({ data }) => data?.payload || []);
};

export default getWalletSupportedCurrencies;
