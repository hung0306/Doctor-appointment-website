import { get } from "../../utils/request";

export const getDepartments = async () => {
  const result = await get("api/departments");
  return result;
};
