import { getCookie } from "../../Helpers/cookies";
import { get, patch, post } from "../../utils/request";

// Register a new user
export const registerUser = async (options) => {
  const result = await post("api/users/register", options);
  return result;
};

// Login user
export const loginUser = async (options) => {
  const result = await post("api/users/login", options);
  return result;
};
// ProfileUser
export const profileUser = async () => {
  const result = await get("api/users/detail");
  return result;
};

export const updateProfile = async (formData) => {
  const token = getCookie("token");
  const result = await patch("api/users/updateProfile", formData);
  return result;
};
