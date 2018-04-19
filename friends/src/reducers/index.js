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
