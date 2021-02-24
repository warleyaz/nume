import { apiGoogle } from ".";


//const API_KEY = "AIzaSyAE3WueCHYERNVW9UC9aSefMiAYIi9TtIk";

const API_KEY = "AIzaSyAh6Hf_-RISe-ibmvmaq2joSTt4dPPgHEs"

export const getAddress = (address) => {
  return apiGoogle.get(
    `/maps/api/place/autocomplete/json?input=${address}&types=(cities)&language=pt_BR&key=${API_KEY}`
  );
};
