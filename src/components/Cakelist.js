// import cakelist from './Data';
import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react";

function Cakelist(){
    var [cakelist,setCakes] = useState([]);
    useEffect(()=>{
        axios({
            url:"https://apibyashu.herokuapp.com/api/allcakes",
            method:"get",
        }).then((response)=>{
            //   console.log("response from cakes api" , response , response.data) 
              setCakes(response.data.data)
        },(error)=>{
            console.log("error from cakes api" , error)
        })
     }, []);
    
    return (
        <div className="row pl-4">
            { cakelist.map((each,index)=>{
                return (<Cake cake={each} key={index}></Cake>)
            })}
        </div>
        
    )
}
export default Cakelist