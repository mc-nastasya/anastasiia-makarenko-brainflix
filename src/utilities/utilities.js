import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "api_key=ec10a7de-e444-40d0-ae2a-1be90906ea69"

export function formatDate(date) {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = ( "0" + (formattedDate.getMonth() + 1)).slice(-2);
    const day = ( "0" + formattedDate.getDate()).slice(-2);
    return `${month}/${day}/${year}`;
}

export function getVideos () {
    return axios.get(`${BASE_URL}/videos?${API_KEY}`)
}

export function getSingleVideo (videoId) {
    return axios.get(`${BASE_URL}/videos/${videoId}?${API_KEY}`)
}

export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };