import axios from "axios";

const instance = axios.create({
  baseURL: `https://hotels-ef570-default-rtdb.europe-west1.firebasedatabase.app/`,
});

export default instance;
