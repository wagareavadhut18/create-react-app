function Authreducer(state={
isloggedin:localStorage.token?true:false,
token:localStorage.token
},action){
    switch(action.type){
        case "LOGIN":{
            state={...state}
            state["token"]=action.payload?.token
            state["username"]=action.payload?.username
            state["isloggedin"] = true
            alert(state.token)
            return state
        }
        case "LOGOUT":{
            state={...state}
            localStorage.clear()
            state.isloggedin=false
            state.username = undefined
            return state
        }
        default:return state
    }
}
export default Authreducer