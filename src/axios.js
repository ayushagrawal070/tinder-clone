import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-mern01.herokuapp.com",
});

export default instance;