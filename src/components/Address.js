import { useState } from 'react';
import { Route,Link, Redirect} from "react-router-dom";
function Address(props){
    const [username, setUsername] = useState(props.username);
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [address, setAddress] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [cityError, setCityError] = useState('');
    const [pincodeError, setPincodeError] = useState('');
    const [addressError, setAddressError] = useState('');

    var submit = (event) => {
        event.preventDefault();
        var usernameError="";
        var phoneError="";
        var cityError="";
        var pincodeError="";
        var addressError="";
		var isValid=true;
		// alert(email);
		if(!username){
			isValid=false;
			usernameError ="Name is required";
		}
		if(!phone){
			isValid=false;
			phoneError ="Phone is required";
		}
		if(!city){
			isValid=false;
			cityError = "City is required";
		}
		if(!pincode){
			isValid=false;
			pincodeError="Pincode is required";
		}
        if(!address){
			isValid=false;
			addressError="Address is required";
		}
        setUsernameError(usernameError)
        setPhoneError(phoneError)
        setCityError(cityError)
        setPincodeError(pincodeError)
        setAddressError(addressError)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form id="form" className="form">
                        <h3>DELIVERY ADDRESS</h3>
                        <hr/>
                        <div className="form-group">
                            <label htmlFor="username">Name<span className="text-danger">*</span></label>
                            <input className="form-control" name="username" type="text" id="username" placeholder="Enter name" value={username} onChange={e => setUsername(e.target.value)}/>
                            <div className="errors"><span className="text-danger">{usernameError}</span></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number<span className="text-danger">*</span></label><input className="form-control" name="phone" type="number" id="phone" placeholder="Enter Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                            <div className="errors"><span className="text-danger">{phoneError}</span></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City<span className="text-danger">*</span></label><input className="form-control" name="city" type="text" id="city" placeholder="Enter City" value={city} onChange={e => setCity(e.target.value)} />
                            <div className="errors"><span className="text-danger">{cityError}</span></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pincode">Pincode<span className="text-danger">*</span></label><input className="form-control" type="number" name="pincode" id="pincode" placeholder="Enter Pincode" value={pincode} onChange={e => setPincode(e.target.value)} />
                            <div className="errors"><span className="text-danger">{pincodeError}</span></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address<span className="text-danger">*</span></label>
                            <textarea className="form-control" type="number" name="address" id="address" placeholder="Enter Address" rows="3" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                            <div className="errors"><span className="text-danger">{addressError}</span></div>
                        </div>
                        <div className="shopping-cart-footer pt-2 pb-3">
                            <div className="column float-right"><button className="btn btn-outline-success" onClick={submit}>Continue</button></div>
                            <div className="column"><Link className="btn btn-outline-secondary" to="/checkout/summary"><i className="fas fa-arrow-left"></i>&nbsp;Back</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Address