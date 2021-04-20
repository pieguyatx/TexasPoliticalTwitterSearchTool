import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost/test/twitterSearch.php',
    params: {
        maxResults: 10
    }
});