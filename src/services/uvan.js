import { apiUvan } from ".";

export const getPrice = ({
  origLat,
  origLng,
  destLat,
  destLng,
  serviceType,
  passengers,
  startDate,
  arrivalDate,
}) => {
  return apiUvan.post(`/withouttoken/price`, {
    ride: {
      destLat: destLat,
      destLng: destLng,
      origLat: origLat,
      origLng: origLng,
      passengers: passengers,
      serviceType: serviceType,
      date: startDate,
      returnDate: arrivalDate,
      vanType: "required",
    },
  });
};
