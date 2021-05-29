import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/becathey/sf-cons",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
