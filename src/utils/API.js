import axios from "axios";

const API = {
  getUsers: function () {
    return axios.get(
      "https://randomuser.me/api/?results=100&nat=us&inc=name,location,email,phone,id,picture"
    );
  },
};

export default API;
