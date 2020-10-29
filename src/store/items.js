import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import * as actions from "./api";

// let lastId=0;

// Action Types
const slice = createSlice({
  name: "items",
  initialState: {
    List: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    itemsRequested: (items, actions) => {
      items.loading = true;
    },
    itemsReceived: (items, action) => {
      items.List = action.payload;
      items.loading = false;
      items.lastFetch = Date.now();
    },
    itemAdded: (items, action) => {
      items.push(action.payload);
    },
    itemAssignToUser: (items, action) => {
      const { id: itemId, userId } = action.payload;
      const index = items.List.findIndex(e => e.id === itemId);
      items.List[index].userId = userId;
    },
    itemResolving: (items, action) => {
      const index = items.List.findIndex(e => e.id === action.payload.id);
      items.List[index].resolved = true;
    },
    itemsRequestFailed: (items, actions) => {
      items.loading = false;
    }
  }
});
const {
  itemAdded,
  itemAssignToUser,
  itemsReceived,
  itemsRequested,
  itemsRequestFailed
} = slice.actions;
export default slice.reducer;
const url = "";
export const loaditems = () => (dispatch, getState) => {
  const { lastFetch } = getState().entites.items;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) {
    return;
  }
  dispatch(
    actions.apiCallBegan({
      url: `${url}/Orders`,
      onStart: itemsRequested.type,
      onSuccess: itemsReceived.type,
      onError: itemsRequestFailed.type
    })
  );
};
export const additem = item =>
  actions.apiCallBegan({
    url: `${url}/Create`,
    method: "post",
    data: item,
    onSuccess: itemAdded.type
  });
export const itemAssign = (itemId, userId) =>
  actions.apiCallBegan({
    url: `${url}/${itemId}`,
    method: "patch",
    data: { userId },
    onSuccess: itemAssignToUser.type
  });
export const resolveitem = id =>
  actions.apiCallBegan({
    url: `${url}/${id}`,
    method: "patch",
    data: { resolved: true },
    onSuccess: itemAssignToUser.type
  });
export const getUnresolveditems = createSelector(
  state => state.entites.items,
  items => items.filter(item => !item.resolved)
);

export const getAssignedUser = userId =>
  createSelector(
    state => state.entites.items,
    items => items.filter(item => item.userId === userId)
  );
