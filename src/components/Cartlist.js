
import { connect } from 'react-redux';

function Cartlist(props){
    var emptycart = ()=>{
        props.dispatch({
            type:"EMPTYCART",
            payload:{cakeid:props.carts.cakeid}
        })
    }

    var addtocart = ()=>{
        props.dispatch({
            type:"ADDTOCART",
            payload:{
                cakeid:props.carts.cakeid,
                name:props.carts.name,
                image:props.carts.image,
                price:props.carts.price,
                weight:props.carts.weight
            }
        })
    }

    var rmquantity =()=>{
        // alert("hello");
        props.dispatch({
            type:"REMOVEFROMCART",
            payload:{cakeid:props.carts.cakeid}
        })
    }
  if(props.carts){
      //console.warn("cartlist>>>>>>",props.carts)
    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={props.carts.image} alt="" style={{width:"80px",height:"80px"}}/></div>
                        <div className="col">
                            <div className="row text-muted text-uppercase">{props.carts.name}</div>
                            <div className="row">{props.carts.weight} kg</div>
                        </div>
                        <div className="col"><i className="fa fa-minus-circle text-danger" onClick={rmquantity} style={{fontSize:"1.2rem"}}>&nbsp;</i>{props.carts.quantity} <i className="fa fa-plus-circle text-success" onClick={addtocart} style={{fontSize:"1.2rem"}}>&nbsp;</i></div>
                        <div className="col">INR {props.carts.price}</div>
                        <div className="col"><button className="btn btn-sm btn-danger" onClick={emptycart}><i className="fa fa-times"></i></button></div>
                    </div>
                </div>
            </div>
        </>
    )

  }
  else{
    return null
  }
}
export default connect()(Cartlist)