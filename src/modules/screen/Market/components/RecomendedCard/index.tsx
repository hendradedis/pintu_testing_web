/* eslint-disable jsx-a11y/anchor-is-valid */
import { formatToRupiah } from "../../../../../Utils/common";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface RecomendedCardProps {
  title: string;
  logos: string;
  price: string;
  percentage: string;
  Arraydata: any;
}

export const RecomendedCard = ({
  title,
  logos,
  price,
  percentage,
  Arraydata,
}: RecomendedCardProps) => {
  let subStringTitle: string = title;
  if (subStringTitle != null && subStringTitle.length > 10) {
    subStringTitle = subStringTitle.substring(0, 8) + "...";
  }

  return (
    <div className="px-4 white h-36 w-52 py-1 hover:bg-gray-100 pt-4 mr-8 rounded cursor-pointer">
      <div className="flex justify-self-center">
        <img src={logos} alt={""} className="mr-4" />
        <a className="font-bold text-[18px]">{subStringTitle}</a>
      </div>
      <div className="py-2">
        <a className="text-[12px] font-semibold font-sans text-gray-500">{`Rp ${formatToRupiah(
          parseInt(price, 10)
        )}`}</a>
      </div>
      <div className="justify-start">
        {Arraydata?.length === 1 ? (
          <div className="flex">
            <AiFillCaretUp color="green" className="my-auto mr-2" />
            <a className="font-bold text-[20px] text-green-500">
              {percentage}%
            </a>
          </div>
        ) : (
          <div className="flex">
            <AiFillCaretDown color="red" className="my-auto mr-2" />
            <a className="font-bold text-[20px] text-red-500">{percentage}%</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecomendedCard;
