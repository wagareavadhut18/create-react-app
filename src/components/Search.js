import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react";
import querystring from "query-string";

function Search(props) {

    var [cakelist,setCakes] = useState([]);
    var query = querystring.parse(props.location.search);
    var apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q="+query.q;
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"get",
        }).then((response)=>{
            // console.log("response from cakes api" , response , response.data) 
            setCakes(response.data.data)
        },(error)=>{
            console.log("error from cakes api" , error)
        })
     }, [query.q]);

     if (cakelist.length === 0) {
            return (<div className="row">
                        <img src="/images/no_data.png"/>
                </div>
            );
     }

     return (
            <div className="row px-2">
                { cakelist.map((each,index)=>{
                    return (<Cake cake={each} key={index}></Cake>)
                })}
            </div>   
     )
}

export default Search;