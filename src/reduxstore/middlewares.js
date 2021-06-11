import axios from "axios"
export function loginmiddleware(data){
//    alert(JSON.stringify(data))
    return function(dispatch){
        // console.log(process.env);
        dispatch({
            type:"LOGIN_STARTED"
        })
        axios({
            url: process.env.REACT_APP_BASE_URL+"login",
            method: 'post',
            data:data
        }).then(res => {
            if (res.data.email) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', res.data.name)
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {
                        token: res.data.token,
                        username: res.data.name
                    }
                })
            }
        }, err => {
            dispatch({
                type: "LOGIN_FAIL"
            })
        })
    }
// login hit main yahan se maar raha hu agar toh woh bhi toh yahan mujhe
}