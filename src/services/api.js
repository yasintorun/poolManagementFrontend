import axios from "axios";

export default () => {
  //const token = localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.REACT_APP_ROOT_API,
    // headers: {
    //   Authorization: token,
    // },
  });
};