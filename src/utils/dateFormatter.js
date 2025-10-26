export function formatToWestAfricanTime(dateObj) {
  const options = {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  };

  const formatter = new Intl.DateTimeFormat("en-us", options);

  return formatter.format(dateObj);
}
