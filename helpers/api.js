import axios from "axios";

export const api = () => {
  return (
    process.env.REACT_APP_URL || "https://api.reflekta.croonus.com/api/v1/"
  );
};
export const checkUrl = (imageUrl) => {
  return axios
    .get(imageUrl)
    .then(() => {
      true;
    })
    .catch(() => false);
};
