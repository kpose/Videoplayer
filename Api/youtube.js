import axios from 'axios';

const KEY = 'AIzaSyBKgJvEgKRGJb8vvJ6zVJoBy6RUIlTp8PM';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});