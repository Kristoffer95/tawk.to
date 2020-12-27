import axios from "axios";
const baseURL = "http://localhost:9000/api/";

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true
});


httpClient.interceptors.response.use(
  // SUCCESS
  response => {
    return response;
  },
  // ERROR response interceptors
  error => {
    try {
      if (error.response) {
        // console.error('aw');
        if (process.env.NODE_ENV === 'production') {
          console.clear()
        }
        console.log(error.response.data)
        // return Promise.reject(error);
      }
    } catch (error) {
      return
    }
  }
);

export default httpClient