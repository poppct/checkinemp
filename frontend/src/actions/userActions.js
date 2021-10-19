import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/UserConstants";

export const login = (employee_id, password) => async (dispatch) => {

    try {

        dispatch({ type: USER_LOGIN_REQUEST })

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        // setLoading(true)

        const { data } = await axios.post(
            "/api/users/login",
            { employee_id, password },
            config
        );
        console.log("data :", data);

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data))
        // setLoading(false)
        // window.location.href = '/attendance'

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGIN_LOGOUT });
  };