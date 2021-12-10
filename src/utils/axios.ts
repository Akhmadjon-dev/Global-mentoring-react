import Axios from "axios";
import keys from '../configs';
import store from "../store";
// import store from "../store";
// import { loading } from "../store/Auth/actions";
// import { SIGN_OUT_SUCCESS } from "../store/Auth/actionTypes";
// import { useSelector } from 'react-redux';



const baseURL =
  process.env.NODE_ENV === "development"
    ? keys.BASE_URL.development
    : keys.BASE_URL.production;

const axios = Axios.create({ baseURL, withCredentials: false });

// axios.interceptors.request.use((configs) => {
//   store.dispatch(loading(true));
//   const token = store.getState().auth.token || "";
//   configs.headers.authorization = token ? `Berear ${token}` : "";

//   return configs;
// });

// axios.interceptors.response.use(
//   (res) => {
//     store.dispatch(loading(false))
//     return res;
//   },
//   (error) => {
//     store.dispatch(loading(false))
//     console.log(error.response);
//     if (error?.response?.status === 401) {
//       return store.dispatch({ type: SIGN_OUT_SUCCESS });
//     }
//     return Promise.reject(error);
//   }
// );

export default axios; 