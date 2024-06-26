import https from "./httpService";

export function getOwnerProjectsApi() {
  return https.get("/project/owner-projects").then(({ data }) => data.data);
}
