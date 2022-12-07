import React from "react";
import upperCase from "lodash/upperCase";
import {
  useFetchTradePriceChanges,
  useFetchWalletSupportedCurrencies,
} from "../../../../../hooks";
import lowerCase from "lodash/lowerCase";
import { formatToRupiah } from "../../../../../Utils/common";


export const TableCard = () => {
  const { data: results = [] } = useFetchWalletSupportedCurrencies();
  const { data: prices = [] } = useFetchTradePriceChanges();

  const getPriceObject = (coinCode: string) => {
    return (
      prices.find((x: any) => x?.pair === `${lowerCase(coinCode)}/idr`) || {}
    );
  };

  return (
    <div className="overflow-x-auto relative mt-10 rounded mx-22 ">
      <table className="w-full text-sm text-left border py-24">
        <thead className="text-xs text-gray-700 border-b">
          <tr>
            <th scope="col" className="py-3 px-16 font-bold text-[18px]">
              CRYPTO
            </th>
            <th scope="col" className="py-3 px-6"></th>
            <th scope="col" className="py-6 px-6 font-bold text-[18px]">
              Harga
            </th>
            <th scope="col" className="py-3 px-6 font-bold text-[18px]">
              24JAM
            </th>
            <th scope="col" className="py-3 px-6 font-bold text-[18px]">
              1MGG
            </th>
            <th scope="col" className="py-3 px-6 font-bold text-[18px]">
              1BLN
            </th>
            <th scope="col" className="py-3 px-6 font-bold text-[18px]">
              1THN
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((item: any, index: number) => {
            const objectPrice = getPriceObject(item?.currencyGroup);
            const splitDay = objectPrice?.day?.split("-");
            const splitWeek = objectPrice?.week?.split("-");
            const splitMonth = objectPrice?.month?.split("-");
            const splitYears = objectPrice?.year?.split("-");
            return (
              <tr className="bg-white border-b" key={index}>
                <div className="flex">
                  <img src={item.logo} alt={item?.name} className="ml-3" />
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap"
                  >
                    {upperCase(item?.name)}
                  </th>
                </div>
                <td className="py-4 px-6 font-bold text-gray-400">
                  {upperCase(item?.currencySymbol)}
                </td>
                <td className="py-4 px-6 font-bold text-[16px] text-green-500">
                  {`Rp ${formatToRupiah(
                    parseInt(objectPrice?.latestPrice, 10)
                  )}`}
                </td>
                {splitDay?.length === 2 ? (
                  <td className="py-4 px-6 font-bold text-[16px] text-red-500">
                    {objectPrice?.day || 0}%
                  </td>
                ) : (
                  <td className="py-4 px-6 font-bold text-[16px] text-green-500">
                    {objectPrice?.day || 0}%
                  </td>
                )}
                  {splitWeek?.length === 2 ? (
                  <td className="py-4 px-6 font-bold text-[16px] text-red-500">
                    {objectPrice?.day || 0}%
                  </td>
                ) : (
                  <td className="py-4 px-6 font-bold text-[16px] text-green-500">
                    {objectPrice?.day || 0}%
                  </td>
                )}
                   {splitMonth?.length === 2 ? (
                  <td className="py-4 px-6 font-bold text-[16px] text-red-500">
                    {objectPrice?.day || 0}%
                  </td>
                ) : (
                  <td className="py-4 px-6 font-bold text-[16px] text-green-500">
                    {objectPrice?.day || 0}%
                  </td>
                )}
                   {splitYears?.length === 2 ? (
                  <td className="py-4 px-6 font-bold text-[16px] text-red-500">
                    {objectPrice?.day || 0}%
                  </td>
                ) : (
                  <td className="py-4 px-6 font-bold text-[16px] text-green-500">
                    {objectPrice?.day || 0}%
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCard;
