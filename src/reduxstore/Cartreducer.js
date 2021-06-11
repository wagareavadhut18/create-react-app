import axios from 'axios';

function Cartreducer(state={
    cartstatus:localStorage.cartstatus?true:false,
    totalprice:0
    },action){
        switch(action.type){
            case "ADDTOCART":{
                state={...state}
                axios({
                    url:process.env.REACT_APP_BASE_URL+"addcaketocart",
                    headers:{authtoken:localStorage.token},
                    data:action.payload,
                    method:"post",
                }).then((response)=>{
                    // console.log("Respose from api",response,response.data)
                    alert(response.data.message);                   
                },(error)=>{
                    console.log("Error from api",error)
                }

                )
                // alert(JSON.stringify(state))
                return state
            }
            case "EMPTYCART":{
                state.cart=[]
                axios({
                    url:process.env.REACT_APP_BASE_URL+"removecakefromcart",
                    headers:{authtoken:localStorage.token},
                    data:action.payload,
                    method:"post",
                }).then((response)=>{
                    // console.log("Respose from api",response,response.data)
                    alert(response.data.message);                   
                },(error)=>{
                    console.log("Error from api",error)
                }

                )
                return state
            }
            case "REMOVEFROMCART":{
                state.cart=[]
                axios({
                    url:process.env.REACT_APP_BASE_URL+"removeonecakefromcart",
                    headers:{authtoken:localStorage.token},
                    data:action.payload,
                    method:"post",
                }).then((response)=>{
                    // console.log("Respose from api",response,response.data)
                    alert(response.data.message);                   
                },(error)=>{
                    console.log("Error from api",error)
                }

                )
                return state
            }
            default:return state
        }
    }
    export default Cartreducer