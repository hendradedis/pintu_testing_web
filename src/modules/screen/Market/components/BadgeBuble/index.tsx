/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaGamepad } from "react-icons/fa";
import {
  AiFillSignal,
  AiFillStar,
  AiFillShop,
  AiFillBank,
  AiTwotoneTablet,
} from "react-icons/ai";
import { IBadgeBuble } from "../../../../../appTypes/badgeBubble";

interface IBadgeBubles {
  data: IBadgeBuble;
}
export const BandgeBuble = ({ data }: IBadgeBubles) => {
  const getIcons = ({ data }: any) => {
    switch (data?.nameTrade) {
      case "Trending":
        return <AiFillSignal color="blue" className="my-auto mr-2" />;
      case "All":
        return <AiFillShop color="blue" className="my-auto mr-2" />;
      case "NFT/Gaming":
        return <AiFillSignal color="blue" className="my-auto mr-2" />;
      case "Cexs":
        return <AiTwotoneTablet color="blue" className="my-auto mr-2" />;
      case "Hot":
        return <AiFillStar color="blue" className="my-auto mr-2" />;
      case "Plus":
        return <AiFillBank color="blue" className="my-auto mr-2" />;
    }
  };
  return (
    <div className="flex w- h-auto bg-blue-100 px-4 py-2 ml-4 mt-3 rounded cursor-pointer">
      {/* {getIcons(data)} */}
      <AiTwotoneTablet color="blue" className="my-auto mr-2" />
      <a className="font-sans font-semibold text-[12px] text-blue-700">
        {data?.nameTrade}
      </a>
    </div>
  );
};

export default BandgeBuble;
