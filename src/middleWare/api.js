import Axios from "axios";
import * as actions from "../store/api";

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  if (onStart) dispatch({ type: onStart });
  try {
    const responce = await Axios.request({
      baseURL: "http://localhost:53621/wapi/Order",
      url,
      method,
      data
    });
    // General
    dispatch(actions.apiCallSuccess(responce.data));
    // specific
    if (onSuccess) dispatch({ type: onSuccess, payload: responce.data });
  } catch (ex) {
    // general
    dispatch(actions.apiCallFailed(ex.message));
    // specific
    if (onError) dispatch({ type: onError, payload: ex.message });
  }
};

export default api;
