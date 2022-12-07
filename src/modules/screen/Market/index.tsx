import RecomendedCard from "./components/RecomendedCard";
import { RECOMENDEDCHAIN } from "./../../../constants/tradingData";
import TableCard from "./components/TableCard";
import lowerCase from "lodash/lowerCase";
import BandgeBuble from "./components/BadgeBuble";
import {
  useFetchWalletSupportedCurrencies,
  useFetchTradePriceChanges,
} from "../../../hooks";
import { DUMMYBADGETREDING } from "../../../constants/badgeBuble";

export const Market = () => {
  const { data: results = [] } = useFetchWalletSupportedCurrencies();
  const { data: prices = [] } = useFetchTradePriceChanges();

  const getPriceObject = (coinCode: string) => {
    return (
      prices.find((x: any) => x.pair === `${lowerCase(coinCode)}/idr`) || {}
    );
  };

  const dataBubble = DUMMYBADGETREDING;
  return (
    <div className="px-24">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-3xl font-sans font-bold text-[20px]">
            Harga Crypto dalam Rupiah Hari Ini{" "}
          </h2>
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <label className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
      </div>
      <div className="py-6">
        <h1 className="text-3xl font-sans font-bold text-[20px]">
          &#128293; Top Movers (24 Jam)
        </h1>
      </div>
      <div className="flex">
        {results
          .slice(0, 8)
          .map(
            (
              {
                name,
                logo,
                currencyGroup,
              }: { name: string; logo: string; currencyGroup: string },
              index: number
            ) => {
              const priceObject = getPriceObject(currencyGroup);
              const items = priceObject?.week?.split("-");
              return (
                <RecomendedCard
                  title={name}
                  logos={logo}
                  key={index}
                  Arraydata={items}
                  price={priceObject.latestPrice || 0}
                  percentage={priceObject.week || 0}
                />
              );
            }
          )}
      </div>
      <div className="flex">
        {dataBubble.map((item) => (
          <BandgeBuble data={item} />
        ))}
      </div>
      <div>
        <TableCard />
      </div>
    </div>
  );
};

export default Market;
