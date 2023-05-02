export const toDate = (unixTime: number): string => {
  let month = new Date(unixTime).toLocaleDateString("default", {
    month: "short",
  });
  let day = new Date(unixTime).toLocaleDateString("default", {
    day: "numeric",
  });
  let year = new Date(unixTime).toLocaleDateString("default", {
    year: "numeric",
  });
  return `${month} ${day}, ${year}`;
};
