
//import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cartlist from "./Cartlist";
function Cart(){
    var apiurl="https://apibyashu.herokuapp.com/api/cakecart"
    var [carts, setcartCakes] = useState([])
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"post",
            headers:{authtoken:localStorage.token},
            data:{}
        }).then((response)=>{
            console.log("Cart Cakes from api",response,response.data)
            setcartCakes(response.data.data)
        },(error)=>{
            console.log("Error from api",error)
        }

        )
    },[]

    )
    
    return (
        <div className="container">
             { carts.map((each,index)=>{
                        return (<Cartlist carts={each} key={index}></Cartlist>)
                        })}
            
        </div>
        
    )
}
export default Cart