import { Route,Link, Redirect} from "react-router-dom";
import Address from "./Address";
import Confirm from "./Confirm";
import Summary from "./Summary";
function Checkout(){
    return (
        <>
        <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <div className="card checkout-card">
                    <ul className="list-group">
                        <Link to="/checkout/summary"><li className="list-group-item">Summary</li></Link>
                        <Link to="/checkout/address"><li className="list-group-item">Address</li></Link>
                        <Link to="/checkout/confirm"><li className="list-group-item">Confirm</li></Link>
                    </ul>
                </div>
            </div>
            <div className="col-md-7">
                <Route exact path="/checkout"><Redirect to="/checkout/summary"></Redirect></Route>
                <Route exact path="/checkout/summary" component={Summary}></Route>
                <Route exact path="/checkout/address" component={Address}></Route>
                <Route exact path="/checkout/confirm" component={Confirm}></Route>
            </div>
            <div className="col-md-1"></div>
        </div>
        </>
    )
}
export default Checkout