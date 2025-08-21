import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...data }) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}

export function getProposalsApi() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}

export function createProposalApi(payload) {
  return http.post("/proposal/add", payload).then(({ data }) => data.data);
}
