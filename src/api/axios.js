import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "1eac1b7b17989597b861c9f36a149a77",
    language: "ko-KR",
  },
});

export default instance;
