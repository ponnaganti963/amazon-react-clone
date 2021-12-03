import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://calm-gorge-68820.herokuapp.com/', //API Url from heroku deploy
   // 'http://localhost:5001/clone-c97c7/us-central1/api' // the API UrL from firebase functions
});

export default instance;
