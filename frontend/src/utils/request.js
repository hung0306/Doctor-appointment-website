import { getCookie } from "../Helpers/cookies";

const API_DOMAIN = "http://localhost:3001/";
export const get = async (path) => {
  const token = getCookie("token");

  const res = await fetch(API_DOMAIN + path, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!res.ok) throw new Error(`Error ${res.status}`);

  return res.json();
};
export const post = async (path, options) => {
  const token = getCookie("token");
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};

export const del = async (path) => {
  const token = getCookie("token");
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  const result = await response.json();
  return result;
};

// bắt buộc phải viết thế này để upload ảnh
export const patch = async (path, body, extraOptions = {}) => {
  const token = getCookie("token");
  const isFormData = body instanceof FormData;

  const headers = {
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(!isFormData ? { "Content-Type": "application/json" } : {}),
    ...(extraOptions.headers || {}),
  };

  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers,
    body: isFormData ? body : JSON.stringify(body),
    ...extraOptions,
  });

  return response.json();
};

// export const patch = async (path, options) => {
//   const response = await fetch(API_DOMAIN + path, {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options),
//   });

//   const result = await response.json();
//   return result;
// };
