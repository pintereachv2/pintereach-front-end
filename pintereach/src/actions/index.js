import axios from "axios";

export const LOGIN_START = "LOGIN_START";


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post("https://pintereacher.herokuapp.com/api/register", creds).then(res => {
    localStorage.setItem("jwt", res.data.token);
  });
};