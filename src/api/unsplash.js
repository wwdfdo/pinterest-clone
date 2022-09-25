import axios from "axios";

export default axios.create({
  baseURL: "https.api.unsplash.com/",
  headers: {
    Authorization: " Client-ID KC27GSHUdjFT192ZStzTudw-oS36-AQIP3oE_qD9YGg",
  },
});
