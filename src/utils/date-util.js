const getFormattedDate = (value, type, inMS) => {
  if (!type) return value;

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);
  let Options;

  if (type === "date") {
    Options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    Options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", Options).format(date);
};

export { getFormattedDate };
