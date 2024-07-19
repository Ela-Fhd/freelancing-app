export default function truncateText(str, length) {
  if (str.length < length) return str;
  return str.splice(0, length) + "...";
}
