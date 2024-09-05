import https from "./httpService";

export function getOwnerProjectsApi() {
  return https.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeOwnerProjectApi(id) {
  return https.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function createNewProjectApi(data) {
  return https.post("/project/add", data).then(({ data }) => data.data);
}
