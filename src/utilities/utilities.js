import axios from "axios";

export function formatDate(date) {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = ( "0" + (formattedDate.getMonth() + 1)).slice(-2);
    const day = ( "0" + formattedDate.getDate()).slice(-2);
    return `${month}/${day}/${year}`;
}

export function getVideos () {
    return axios.get(`${process.env.REACT_APP_API_URL}/videos`)
}

export function getSingleVideo (videoId) {
    return axios.get(`${process.env.REACT_APP_API_URL}/videos/${videoId}`)
}

export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
};



