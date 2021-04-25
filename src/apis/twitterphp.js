import axios from 'axios';
// import homepage from '../data/homepage.js';

export default axios.create({
    baseURL: 'twitterSearch.php',
    params: {
        maxResults: 50
    }
});