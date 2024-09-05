import http from "./httpService";

export default function getCategoriesApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
