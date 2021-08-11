import React, { useState, useEffect } from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Orderlist from "./Orderlist";
import { OrderMiddleware } from '../reduxstore/middlewares';

function Myorders(props){
    useEffect(()=>{
        const token = localStorage.token;
        props.dispatch(OrderMiddleware(token));
    },[props.totalorders])
    return (
        <div className="container">
              <div className="row mt-3">
                  <div className="col-md-12">
                    <h4 className="float-right">Total Orders: {props.orderlist.length}</h4>
                    <h4>My Orders</h4>
                    <hr/>
                    {props.orderlist.map((each,index)=>{
                            return (<Orderlist orders={each} key={index} index={index}></Orderlist>)
                    })}
                  </div>
              </div>
        </div>
    )
}



function mapStateToProp(state,props){
  // console.log("state>>>",state,"props>>>>",props)
  // console.log("totalprice>>",state.CartReducer.orders);
  return {
      orderlist:state.CartReducer.orders,
      totalorders:state.CartReducer.totalorders,
  }
}

export default connect(mapStateToProp)(withRouter (Myorders))