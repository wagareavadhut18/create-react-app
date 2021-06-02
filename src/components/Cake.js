function Cake(props){
    if(props.cake){
            return (
                <div className="card mt-3 mr-3" style={{width:"15rem"}}>
                    {props.cake.image && <img className="card-img-top" src={props.cake.image} alt="Card image cap" style={{height:"200px"}}/> }
                    <div className="card-body">
                        <h5 className="card-title">{props.cake.name}</h5>
                        <label className="card-text">&#8377;{props.cake.price}</label>
                    </div>
                </div>
            )
    }
    else{
      return null
    }
  }
  export default Cake