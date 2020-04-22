import axios from "axios";

const KEY = "AIzaSyCC7bwkzuh99sdgc-e4oftQiOSTggxne8Y";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`,
  },
});
