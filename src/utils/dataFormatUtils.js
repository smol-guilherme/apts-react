export function formatDate(date) {
  const info = date.split("T");
  info[0] = info[0].replaceAll("-", "/").substring(info[0].indexOf("22"));
  info[1] = info[1].substring(0, info[1].indexOf(".") - 3);
  return `${info[1]} - ${info[0].split("/").reverse().join("/")}`;
}
