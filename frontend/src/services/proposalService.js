import https from "./httpService";

export function changeProposalStatusApi({ id, data }) {
  return https.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}
