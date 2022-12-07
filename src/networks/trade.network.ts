import request from "../configs/request";

export const getTradePriceChanges = () => {
  return request.get("/trade/price-changes").then(({ data }) => data?.payload || []);
};

export default getTradePriceChanges;
