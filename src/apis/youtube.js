import axios from "axios";

const KEY = "AIzaSyAQPzNe_-_k3MIYC3Rh6ld26W9PME40mBE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
