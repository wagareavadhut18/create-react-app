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

export function CartListMiddleware(token){
    //alert(1)
    // alert(data)
    return function(dispatch){
        axios({
                method:"post",
                url:process.env.REACT_APP_BASE_URL+'cakecart',
                headers:{
                    authtoken:token
                },
                data:{}}
        ).then(res => {
            const Data = res.data.data;
            console.log("data from cart to reducer add to cart>>>>>>>>>>",Data);
            dispatch({
                type:'ADDTOCART',
                payload:{
                    cakedata:Data
                }
            });
            //setcartList(Data);
            //setLoading(false)
            //setLoading(false)
            //console.log('result is',res.data.data)
        });
    }
}


export function EmptyCartMiddleware(token){
    // alert(data)
    return function(dispatch){
        let  apiurl =process.env.REACT_APP_BASE_URL+"clearcart";
        axios({
            method:"post",
            url:apiurl,
            headers:{
                authtoken:token
            },
            data:{}}).then((res)=>{
                dispatch({
                    type:'EMPTYCART',
                });
            } ,(error)=>{
                    console.log(error)
            }
        );
    }
}


export function RemoveSpecificakeMiddleware(token,id,URI){
    // alert("pid="+id+"uri"+URI)
     return function(dispatch){
      let  apiurl =process.env.REACT_APP_BASE_URL+URI;
             axios({
             method:"post",
             url:apiurl,
             headers:{
                authtoken:token
             },
             data:{
               cakeid:id
             }}).then((res)=>{
            const cakeobj =JSON.parse(res.config.data);
            // console.log("response data",res,"response cakeobj>>",cakeobj,"response cakeid>>",cakeobj.cakeid);
              dispatch({
                type:'REMOVESPECIC',
                payload:{
                  status:true,
                  cakeid:cakeobj.cakeid
                }
             });
             
            // CartListMiddleware(token)
           } ,(error)=>{
                   console.log(error)
           });
     }
}

export function RemoveCakeByQuantityMiddleware(token,id,URI){
    alert("token"+token+"id"+id+"uri="+URI)
     return function(dispatch){
      let  apiurl =process.env.REACT_APP_BASE_URL+URI;
             axios({
             method:"post",
             url:apiurl,
             headers:{
                authtoken:token
             },
             data:{
               cakeid:id
             }}).then((res)=>{
            const cakeobj =JSON.parse(res.config.data);
            console.log("response data",res,"response cakeobj>>",cakeobj,"response cakeid>>",cakeobj.cakeid);
              dispatch({
                type:'REMOVECAKEQTY',
                payload:{
                  status:true,
                  cakeid:cakeobj.cakeid
                }
             });
             
            // CartListMiddleware(token)
           } ,(error)=>{
                   console.log(error)
           });
     }
}
  
export function OrderMiddleware(data){
     return function(dispatch){
         axios(
             {
                 method:"post",
                 url:process.env.REACT_APP_BASE_URL+'cakeorders',
                 headers:{
                    authtoken:data
                 },
                 data:{}})
                     .then(res => {
                       console.log('orders',res.data.cakeorders)
                         const Data = res.data.error!=null?[]:res.data.cakeorders;
                         //console.log('result is',res)
                         dispatch({
                             type:'ALLORDERS',
                             payload:{
                              orders:Data
                             }
                         });
                     });
     }
}
  
  
export function PlaceOrderMiddleware(token,data,cart,price){
    return function(dispatch){
        axios(
            {
                method:"post",
                url:process.env.REACT_APP_BASE_URL+'addcakeorder',
                headers:{
                   authtoken:token
                },
                data:{
                  city:data.city,
                  name:data.username,
                  address:data.address,
                  pincode:data.pincode,
                  phone:data.phone,
                  cakes:cart,
                  price:price
                }})
                    .then(res => {
                        const Data = res.data.error!=null?[]:res.data.data;
                        dispatch({
                            type:'PLACEORDER',
                            payload:{
                             success:true
                            }
                        });
                    });
    }
}