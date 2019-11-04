import axios from "axios";

export const addUserItem = (user, history) => async dispatch => {
    await axios.post("http://localhost:8080/api/board", user);
    history.push("/");
}