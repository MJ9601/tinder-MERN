import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-test-999.herokuapp.com/",
});

export default instance;
