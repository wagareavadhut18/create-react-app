function Cartreducer(state={
    cart:[],
    totalprice:0
    },action){
        switch(action.type){
            case "ADDTOCART":{
                state={...state}
                alert(JSON.stringify(state))
                return state
            }
            case "EMPTYCART":{
                state={...state}
                return state
            }
            case "REMOVEFROMCART":{
                state.cart=[]
                return state
            }
            default:return state
        }
    }
    export default Cartreducer