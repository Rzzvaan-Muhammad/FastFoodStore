import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import * as actions from "./api";

// let lastId=0;

// Action Types
const slice = createSlice({
  name: "bugs",
  initialState: {
    List: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugsRequested: (bugs, actions) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.List = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugAdded: (bugs, action) => {
      bugs.push(action.payload);
    },
    bugAssignToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.List.findIndex(e => e.id === bugId);
      bugs.List[index].userId = userId;
    },
    bugResolving: (bugs, action) => {
      const index = bugs.List.findIndex(e => e.id === action.payload.id);
      bugs.List[index].resolved = true;
    },
    bugsRequestFailed: (bugs, actions) => {
      bugs.loading = false;
    }
  }
});
const {
  bugAdded,
  bugAssignToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed
} = slice.actions;
export default slice.reducer;
const url = "/bugs";
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entites.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) {
    return;
  }
  dispatch(
    actions.apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type
    })
  );
};
export const addBug = bug =>
  actions.apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type
  });
export const bugAssign = (bugId, userId) =>
  actions.apiCallBegan({
    url: `${url}/${bugId}`,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignToUser.type
  });
export const resolveBug = id =>
  actions.apiCallBegan({
    url: `${url}/${id}`,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugAssignToUser.type
  });
export const getUnresolvedBugs = createSelector(
  state => state.entites.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
);

export const getAssignedUser = userId =>
  createSelector(
    state => state.entites.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
  );
