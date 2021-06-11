
//import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cartlist from "./Cartlist";
function Cart(){
    var apiurl=process.env.REACT_APP_BASE_URL+"cakecart"
    var [carts, setcartCakes] = useState([])
    // alert(JSON.stringify(carts.length));
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"post",
            headers:{authtoken:localStorage.token},
            data:{}
        }).then((response)=>{
            // console.log("Cart Cakes from api",response,response.data)
            setcartCakes(response.data.data)
        },(error)=>{
            console.log("Error from api",error)
        }

        )
    },[]

    )
    if (carts.length == 0) {
        return (
            <div className="container p-5">
                <img className="img-responsive w-100" height="400" src="https://www.clipartkey.com/mpngs/m/195-1953936_cart-empty-image-your-cart-is-empty.png" alt="" />
            </div>
        )
    }

    return (
        <div className="container pt-3 pb-3">
             { carts.map((each,index)=>{
                        return (<Cartlist carts={each} key={index}></Cartlist>)
                        })}
            
        </div>
        
    )
}
export default Cart