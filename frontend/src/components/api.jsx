import Axios from "axios";

const axios = Axios.create({
  headers: {
    "content-type": "application/json",
  },
});

const signUpUser = (payload) => {
  console.log({ payload });
  return axios.post("http://localhost:3033/user/new", payload);
};

const login = (payload) => {
  return axios.post("http://localhost:3033/user/login", payload);
};

const teachers = () => {
  return axios.get("http://localhost:3033/teachers");
};

const getTeacherByGender = (query) => {
  axios.get("http://localhost:3033/teachers", {
    params: {
      g: query,
    },
  });
};

const sortTeacherByAge = (query) => {
  axios.get("http://localhost:3033/teachers", {
    params: {
      query,
    },
  });
};

export { signUpUser, login, teachers, getTeacherByGender, sortTeacherByAge };
