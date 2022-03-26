import * as catagories from "../variables/inputsCatagories";
export const validateUserLogin = (data) => {
  if (data.username.length === 0)
    return {
      catagory: catagories.username,
      message: "username can't be empty.",
    };
  else if (data.username.length < 10)
    return {
      catagory: catagories.username,
      message: "username must me 10 digits long.",
    };
  else if (!/^\d+$/.test(data.username))
    return {
      catagory: catagories.username,
      message: "username must contain only digits.",
    };
  else if (data.password.length === 0)
    return {
      catagory: catagories.password,
      message: "password can't be empty.",
    };
  else if (data.password.length < 6)
    return {
      catagory: catagories.password,
      message: "password must me 6 digits long.",
    };
  else return true;
};

export const validateUserSignup = (data) => {
  if (data.fname.length === 0 || data.lname.length === 0)
    return {
      catagory: catagories.name,
      message: "Name can't be empty.",
    };
  else if (/\d/.test(data.fname) || /\d/.test(data.lname))
    return {
      catagory: catagories.name,
      message: "Name can't contain any digits.",
    };
  else if (data.username.length === 0)
    return {
      catagory: catagories.username,
      message: "username can't be empty.",
    };
  else if (data.username.length < 10 || data.username.length > 10)
    return {
      catagory: catagories.username,
      message: "username must me 10 digits long.",
    };
  else if (!/^\d+$/.test(data.username))
    return {
      catagory: catagories.username,
      message: "username must contain only digits.",
    };
  else if (data.password.length === 0)
    return {
      catagory: catagories.password,
      message: "password can't be empty.",
    };
  else if (data.password.length < 6)
    return {
      catagory: catagories.password,
      message: "password must me 6 digits long.",
    };
  else if (data.email.length === 0)
    return {
      catagory: catagories.email,
      message: "password can't be empty.",
    };
  else if (data.email.split("@")[0] === data.email)
    return {
      catagory: catagories.email,
      message: "Invalid email.",
    };
  else if (data.email.split("@")[1] !== "northsouth.edu")
    return {
      catagory: catagories.email,
      message: "You must use NSU email.",
    };
  else return true;
};
