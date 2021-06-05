import querystring from "query-string";
import Cake from './Cake';
import {Link} from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
function Cakedetail(props){
    var id = props.match.params.cakeid;
    //console.log('????',id)
    var apiurl="https://apibyashu.herokuapp.com/api/cake/"+id;
    var [cakedetails, setCakesdetail] = useState([])
    var [ratingWidth, setRatingWidth]=useState(0);
    let starWidth=(value)=>{
		
		let ratingString=(Math.max(0, (Math.min(5, parseFloat(value)))) * 16)+"px";
		setRatingWidth(ratingString)
	}
    //console.log('details',cakedetails)
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"get",
        }).then((response)=>{
            console.log("Respose from api",response,response.data)
            setCakesdetail(response.data.data)
            starWidth(response.data.data.ratings)
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
                <div className="row hedding m-0 pl-3 pt-0 pb-3">
                    <nav>
                        <ol className="breadcrumb" style={{backgroundColor:"transparent"}}>
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active"><Link to="#">Cakes</Link></li>
                            <li className="breadcrumb-item active">{cakedetails.name}</li>
                        </ol>
                    </nav>
                </div>
                {!cakedetails.name && <div className="m-0 pl-3 pt-0 pb-3">Loading .....</div>}
                {cakedetails.name && 
                    <div className="row m-0">
                        <div className="col-lg-4 left-side-product-box pb-3">
                            <img src={cakedetails.image} className="border p-3" alt={cakedetails.name}/>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-side-pro-detail border p-3 m-0">
                                <div className="row">
                                    <div className="col-lg-12">						
                                        <h2 className="m-0 p-0">{cakedetails.name}</h2>
                                        <span>By {cakedetails.owner.name}</span>
                                    </div>
                                    <div className="content mt-2 mb-2 col-lg-12">
                                        <div className="ratings"><strong>Ratings: </strong> <span className="product-rating">{cakedetails.ratings}</span><span>/5</span>
                                            <span className="stars"><span style={{width:ratingWidth}}></span></span>
                                            <span>({cakedetails.reviews} reviews)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="m-0  pb-2 price-pro">&#8377;{cakedetails.price}</p>
                                        <hr className="p-0 m-0"/>
                                    </div>
                                    <div className="col-lg-12 pt-2">
                                        <h5>Cake Detail</h5>
                                        <span>{cakedetails.description}</span>
                                        <hr className="m-0 pt-2 mt-2"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-more-details-tab" data-toggle="tab" href="#nav-more-details" role="tab" aria-controls="nav-more-details" aria-selected="true">More Details</a>
                                                <a className="nav-item nav-link" id="nav-ingredients-tab" data-toggle="tab" href="#nav-ingredients" role="tab" aria-controls="nav-ingredients" aria-selected="false">Ingredients</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active p-4 bg-white" id="nav-more-details" role="tabpanel" aria-labelledby="nav-more-details-tab">
                                                <p className="tag-section"><strong>Weight : </strong> {cakedetails.weight} Kg</p>
                                                <p className="tag-section"><strong>Flavour : </strong> {cakedetails.flavour}</p>
                                                <p className="tag-section"><strong>Occasion : </strong>{cakedetails.type}</p>
                                            </div>
                                            <div className="tab-pane p-4 fade bg-white" id="nav-ingredients" role="tabpanel" aria-labelledby="nav-ingredients-tab">
                                                <ol className="pl-3">
                                                    {cakedetails.ingredients.map((value,index)=>{
                                                        return(
                                                        <li key={index}>{value}</li>
                                                        )   
                                                    })}
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <h6>Quantity :</h6>
                                    <input type="number" name="quntity" className="form-control text-center w-100"/>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <div className="row">
                                        <div className="col-lg-12 pb-2">
                                            <a href="/cart" className="btn btn-warning w-100">Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default Cakedetail;