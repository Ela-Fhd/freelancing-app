import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// resquests => have error
// responses = > have error
// if error === 401 => get new refresh token and access token with request to /user/refresh-token
//then send request again to last request that return 401 error
// for send 1 request for each error and avoid to falling in loop , we use error.response.config for get url request and _retry for setting send 1 request

app.interceptors.request.use(
  (res) => res,
  (error) => Promise.reject(error)
);

app.interceptors.response.use(
  (res) => res,
  async (error) => {
    // Promise.reject(error);
    const originalConfig = error.config;
    if (error.response.status === 404 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
