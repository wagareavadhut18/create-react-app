import React, { useState, useEffect } from 'react';
import { Route,Link, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import moment from "moment";

function Myorders(props){
  let [orders,setOrders] = useState([]);
  const [ordertotal,setTotalOrders] = useState(0);
    useEffect(()=>{
        setOrders(props.orderlist);
        setTotalOrders(props.totalorders);
    },[props.totalorders])
    // console.log(props);
    return (
        <div className="container">
              <div className="row mt-3">
                  <div className="col-md-12">
                    <h4 className="float-right">Total Orders: {props.totalorders}</h4>
                    <h4>My Orders</h4>
                    <hr/>
                    {orders.length > 0 && orders.map((x,index)=>
                      <div id={`accordion${index}`}>
                        <div className="card">
                          <div className="card-header" id={`headingOne${index}`}>
                            <h5 className="mb-0">
                              <button className="btn btn-link" data-toggle="collapse" data-target={`#collapseOne${index}`} aria-expanded="true" aria-controls={`collapseOne${index}`}>
                                  <label>Order Id: {x.orderid}</label>
                              </button>
                              <label className="btn btn-link float-right">Order Placed:{moment(x.orderdate).format('D-MM-YYYY')}</label>
                            </h5>
                          </div>
                      
                          <div id={`collapseOne${index}`} className={`${index=== 0?"collapse show":"collapse"}`} aria-labelledby={`headingOne${index}`} data-parent={`#accordion${index}`}>
                            <div className="card-body">
                              <div class="table-responsive shopping-cart">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th class="text-center">Payment Mode</th>
                                            <th class="text-center">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            <div class="product-item">
                                                {x.cakes.map(i=>{
                                                return    <>                                                 
                                                <a class="product-thumb1" href={'/cake/'+i.cakeid}><img src={i.image} style={{width:'80px'}} alt="Product" /></a>
                                                <div class="product-info">
                                                    <h6 class="product-title"><a href="#">cake id:{i.cakeid}</a></h6>
                                                    <span><em>name:</em> {i.name}</span><span><em>Quantity:</em> {i.quantity}</span>
                                                </div>
                                                </>
                                                })}        
                                                <div class="product-info">
                                                    <h4 class="product-title">Contact Details</h4>
                                                    <span><em>Phone:</em> {x.phone}</span><span><em>Email:</em> {x.email}</span><span><em>Address:</em> {x.address}</span>
                                                </div>
                                            </div>
                                            </td>
                                            <td class="text-center text-lg text-medium"> {x.mode}</td>
                                            <td class="text-center text-lg text-medium">&#8377;{x.price}</td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    )}
                  </div>
              </div>
        </div>
    )
}



function mapStateToProp(state,props){
  console.log("state>>>",state,"props>>>>",props)
  // console.log("totalprice>>",state.CartReducer.orders);
  return {
      orderlist:state.CartReducer.orders,
      totalorders:state.CartReducer.totalorders,
      // ordercount:state.CartReducer.totalorders
  }
}

export default connect(mapStateToProp)(withRouter (Myorders))