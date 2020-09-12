import axios from "axios";

const baseURLGoogle = "https://maps.googleapis.com";
const baseURLUvan = "https://uvan-empresa.herokuapp.com/api/v1";

export const apiGoogle = axios.create({
  baseURL: baseURLGoogle,
});

export const apiUvan = axios.create({
  baseURL: baseURLUvan,
});
