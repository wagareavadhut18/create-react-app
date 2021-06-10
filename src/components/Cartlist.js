import { Link } from "react-router-dom"

function Cartlist(props){
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
                    <div className="col"> {props.carts.quantity}</div>
                    <div className="col">INR {props.carts.price}</div>
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
export default Cartlist