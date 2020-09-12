import { apiGoogle } from ".";

const API_KEY = "AIzaSyAE3WueCHYERNVW9UC9aSefMiAYIi9TtIk";

export const getAddress = (address) => {
  return apiGoogle.get(
    `/maps/api/place/autocomplete/json?input=${address}&types=(cities)&language=pt_BR&key=${API_KEY}`
  );
};
