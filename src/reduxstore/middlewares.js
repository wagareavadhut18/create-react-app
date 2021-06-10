import axios from "axios"
export function loginmiddleware(data){
//    alert(JSON.stringify(data))
    return function(dispatch){
        dispatch({
            type:"LOGIN_STARTED"
        })
        axios({
            url: "https://apibyashu.herokuapp.com/api"+'/login',
            method: 'post',
            data:data
        }).then(res => {
            if (res.data.email) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userData', JSON.stringify(res.data))
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