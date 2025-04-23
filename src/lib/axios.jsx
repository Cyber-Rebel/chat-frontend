import axios from "axios";
export const axiosInstanes=axios.create({ // axiosinstanc --- is veariable that value is cont
    baseURL:"http://localhost:5001/api",
    withCredentials:true
})