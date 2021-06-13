function Cartreducer(state={
        cart:[],
        totalQuantity:0,
        totalprice:0,
        totalorders:0,
        isLoading:true,
        orders:[],
        status:false,
        ordersuccess:false
    },action){
    switch(action.type){
        case "ADDTOCART":
            state ={...state};
            state["cart"]=[];
            state["totalprice"]=0;
            state["cart"] =[...state.cart, ...action.payload.cakedata];
            console.log(state["cart"]);
            state["status"] =false;
            if( state["cart"].length>0){
                state["cart"].forEach(function(x, index, arry){
                    state["totalprice"] += x.price * x.quantity;
                    // state["totalprice"] += x.price;
                });
            }
            else{
                state["totalprice"]=-1;
            }
            // console.log("sum is,",state["totalprice"]);
            state["isLoading"] =false;
            return state;
    
        case "EMPTYCART":
                state={...state};
                state["cart"]=[];
                state["status"]=true;
                state["totalprice"] =0;
                return state;
    
        case "REMOVESPECIC":
            state={...state}
            const filteredCart = state["cart"].filter((item) => item.cakeid !== action.payload.cakeid);
            // for(let i=0;i<state["cart"].length;i++){
            //     // console.log("array cakeid",state["cart"][i].cakeid,"<<<payload cakeid",action.payload.cakeid);
            //     if(state["cart"][i].cakeid === action.payload.cakeid){
            //         state["cart"].slice(i);
            //     }
            //     console.log(state["cart"]);
            // }
            // console.log(filteredCart);
            state["cart"]=filteredCart;
            state["status"]=action.payload.status;
            return state;
        
        case "REMOVECAKEQTY":
                state={...state}
                state["totalQantity"] = 0
                const objIndex = state["cart"].findIndex((obj => obj.cakeid == action.payload.cakeid));
                state["cart"][objIndex].quantity = state["cart"][objIndex].quantity -1;
                let totalqt = 0;
                state["cart"].forEach(function (item) {
                    totalqt += item.quantity;
                });
                state["totalQuantity"] = totalqt;
                console.log("cake is>>>>>>",state["cart"]);
                console.log("cake index is>>>>>>",objIndex,"total>>>>",totalqt);
                return state;

        case "ALLORDERS":
            state["orders"]=[];
        // console.log('orders', action.payload.orders)
            if(action.payload.orders.length>0){
                state["orders"] =[...state.orders, ...action.payload.orders];
            }
            state["totalorders"] =state["orders"].length;
            state["isLoading"] =false;
            return state;

        case "PLACEORDER":
                state={...state}
                state["ordersuccess"]=action.payload.status;
                return state;
    
        default:return state;
    }
}
export default Cartreducer