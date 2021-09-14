import axios from "axios";

const instance = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1`,
  params: {
    key: "AIzaSyC6ssyZrajHFanrLU9qZ-frc0TB9nH-9es",
  },
});

export default instance;
