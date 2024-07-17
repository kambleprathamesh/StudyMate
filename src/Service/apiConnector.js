import axios from "axios";
export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};


// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: method,  // No need for string interpolation
//     url: url,        // No need for string interpolation
//     data: bodyData || null,
//     headers: headers || null,
//     params: params || null,
//   });
// };