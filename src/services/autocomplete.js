import api from '.';

const API_KEY = 'AIzaSyAE3WueCHYERNVW9UC9aSefMiAYIi9TtIk';

const getAddress = (address) => {
  return api.get(`/maps/api/place/autocomplete/json?input=${address}&types=(cities)&language=pt_BR&key=${API_KEY}`);
}

export default getAddress;