const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satarday",
];

//unix time converter
export const unixToDatetime = (unix) => {
  const date = new Date(parseInt(unix) * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dayNight = "AM";
  if (hours === 0) {
    hours = hours + 12;
    dayNight = "AM";
  } else if (hours > 12) {
    hours = hours - 12;
    dayNight = "PM";
  } else if (hours === 12) {
    dayNight = "PM";
  }
  if (minutes < 10) {
    const formattedTime = hours + ":0" + minutes + " " + dayNight;
    return formattedTime;
  }
  const formattedTime = hours + ":" + minutes + " " + dayNight;
  return formattedTime;
};

export const todaysDate = () => {
  const date = new Date();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  const formattedDate = day + ", " + date.getDate() + " " + month;
  return formattedDate;
};
//weekday
export const unixToWeekday = (unix) => {
  const date = new Date(parseInt(unix) * 1000);
  let day = daysFull[date.getDay()];
  return day;
};

//temp converter
export const farenheitToCelcius = (temp) => {
  const celcius = ((temp - 32) * 5) / 9;
  return celcius;
};

//Country Name
export const searchedCountry = (country, codes) => {
  const countryName = codes.filter((code) => code.countryCode === country);
  return countryName;
};

//meter/s to km/h
export const msToKmh = (ms) => {
  return parseInt((ms * (60 * 60)) / 1000);
};

//parsing file
export const encodingImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
