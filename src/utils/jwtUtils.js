import jwtDecode from "jwt-decode";
import tokenUtil from "./tokenUtils";

export function getCurrentUser() {
  try {
    const jwt = tokenUtil.getToken();
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function isAdminUser() {
  const user = getCurrentUser();
  if (user && user.role === "Admin") return true;

  return false;
}

export function getUserId() {
  const user = getCurrentUser();
  if (user && user.user_id) return user.user_id;

  return 0;
}

export function getUserName() {
  const user = getCurrentUser();
  if (user && user.unique_name) return user.unique_name;

  return null;
}

export default {
  getCurrentUser,
  isAdminUser,
  getUserName,
  getUserId
};
