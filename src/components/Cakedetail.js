import querystring from "query-string";
import cakelist from './Data';
import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Cakedetail(props){
    var id = props.match.params.cakeid;
    //console.log('????',id)
    var apiurl="https://apibyashu.herokuapp.com/api/cake/"+id;
    var [cakedetails, setCakesdetail] = useState([])
    //console.log('details',cakedetails)
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"get",
        }).then((response)=>{
            console.log("Respose from api",response,response.data)
            setCakesdetail(response.data.data)
            //console.log('details 2',cakedetails)
        },(error)=>{
            console.log("Error from api",error)
        }

        )
    },[]

    )
    return  (
        <>
            <div className="container">
                <div className="card p-5 mt-2" style={{background:"#eee"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={cakedetails.image} style={{height:"100%"}}/>
                        </div>
                        <div className="col-md-6">
                            <h3>{cakedetails.name}</h3>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span><br/>
                            <span>{cakedetails.reviews} reviews</span><br/>
                            <label>Price: &#8377;</label>{cakedetails.price}<br/>
                            <label>Weight:</label> {cakedetails.weight} kg
                            <p>{cakedetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cakedetail;