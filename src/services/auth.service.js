import axios from "axios";

const API_URL = "http://localhost:8810/api/";

const register = (email, password) => {
    return axios.post(API_URL + "register", {
      email,
      password
    })
  };

  const login = (email, password) => {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then((response) => {
        if (response.data.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        // console.log(response.data);
        return response.data;
        
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };
  