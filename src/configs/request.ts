import axios from "axios";

const request = axios.create({
  baseURL: "https://api.pintu.co.id/v2",
});

export default request;
