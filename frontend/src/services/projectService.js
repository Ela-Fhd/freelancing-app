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

export function editNewProjectApi({ uuid, newProject }) {
  return https
    .patch(`/project/update/${uuid}`, newProject)
    .then(({ data }) => data.data);
}

export function toggleProjectStatusApi({ uuid, data }) {
  return https.patch(`/project/${uuid}`, data).then(({ data }) => data.data);
}
