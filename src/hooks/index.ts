import { useQuery } from "@tanstack/react-query";
import { getWalletSupportedCurrencies } from "../networks/market.network";
import { getTradePriceChanges } from "../networks/trade.network";

export const useFetchWalletSupportedCurrencies = () => {
  return useQuery(["wallet-supported-currencies"], getWalletSupportedCurrencies);
};

export const useFetchTradePriceChanges = () => {
  return useQuery(["trade-price-changes"], getTradePriceChanges);
};
