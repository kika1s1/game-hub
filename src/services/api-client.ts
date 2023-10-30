import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "254f80bcf6ad47a0b74b0e930b19fdb2",
  },
});
