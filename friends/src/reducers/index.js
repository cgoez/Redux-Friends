import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  ERROR_FETCHING_FRIENDS,
  SAVING_FRIENDS,
  FRIENDS_SAVED,
  ERROR_SAVING_FRIENDS,
  UPDATING_FRIEND,
  FRIEND_UPDATED,
  ERROR_UPDATING_FRIEND,
  DELETING_FRIEND,
  FRIEND_DELETED,
  ERROR_DELETING_FRIEND
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

// Check if all these cases are needed...
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      };
    case FRIENDS_FETCHED:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      };
    case ERROR_FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case SAVING_FRIENDS:
      return {
        ...state,
        savingFriends: true
      };
    case FRIENDS_SAVED:
      return {
        ...state,
        friendsSaved: true,
        savingFriends: false,
        friends: action.payload
      };
    case ERROR_SAVING_FRIENDS:
      return {
        ...state,
        savingFriends: false,
        error: action.payload
      };
    case UPDATING_FRIEND:
      return {
        ...state,
        updatingFriend: true
      };
    case FRIEND_UPDATED:
      return {
        ...state,
        updatingFriend: false,
        friendUpdated: true,
        friends: action.payload
      };
    case ERROR_UPDATING_FRIEND:
      return {
        ...state,
        updatingFriend: false,
        error: action.payload
      };
    case DELETING_FRIEND:
      return {
        ...state,
        deletingFriend: true
      };
    case FRIEND_DELETED:
      return {
        ...state,
        deletingFriend: false,
        friendDeleted: true,
        friends: action.payload
      };
    case ERROR_DELETING_FRIEND:
      return {
        ...state,
        deletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
