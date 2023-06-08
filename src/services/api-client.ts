import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1a659b450be6408591e4c3cae6ef6314",
    },
});
