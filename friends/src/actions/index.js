import axios from "axios";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ERROR_FETCHING_FRIENDS = "ERROR_FETCHING_FRIENDS";
export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const FRIENDS_SAVED = "FRIENDS_SAVED";
export const ERROR_SAVING_FRIENDS = "ERROR_SAVING_FRIENDS";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const ERROR_UPDATING_FRIEND = "ERROR_UPDATING_FRIEND";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";
export const ERROR_DELETING_FRIEND = "ERROR_DELETING_FRIEND";

export const fetchFriends = () => {
  const friends = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(response => {
        dispatch({
          type: FRIENDS_FETCHED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR_FETCHING_FRIENDS,
          payload: 'Error fetching your friends'
        });
      });
  };
};
