import { React } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Redirect } from 'react-router';

function Login() {

    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setpasswordError] = useState('');

    var login = (event) => {
        event.preventDefault();
        var emailErr="";
        var passwordErr="";
		var isValid=true;
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		// alert(email);
		if(!email){
			isValid=false;
			emailErr ="Email is required Field";
		}else if(!pattern.test(email)){
			isValid=false;
			emailErr = "Invalid Email Syntax";
		}
		if(!pwd){
			isValid=false;
			passwordErr = "Password is required Field";
		}
        setemailError(emailErr)
        setpasswordError(passwordErr)

		if(isValid){
            axios({
                url:"https://apibyashu.herokuapp.com/api/login",
                method:"post",
                data:{email:email,password:pwd},
            }).then((response)=>{
                  console.log("response from cakes api" , response , response.data);
    
                  if(response.data.email){
                    localStorage.setItem("cltoken", response.data.token);
                    alert("Login successful");
                    <Redirect to="/"></Redirect>
                        // console.log(this.props.parentprop)
                        // this.props.parentprop.parentfun()
                        // this.props.history.push("/")
                   }
                   if(response.data.message){
                        alert(response.data.message)
                   }
            },(error)=>{
                console.log("error from cakes api" , error)
            })
		}
        // console.log(name,email,pwd);
       
        // alert("hello");
    }

    return (
        <div className="container" style={{"marginTop":"10px"}}>
            <div className="row">
                <div className="col-md-12">
                <form>
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                        <label>Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="text-danger">{emailError}</span><br/>
                            <label>Password</label>
                            <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password" value={pwd} onChange={e => setPassword(e.target.value)}/>
                            <span className="text-danger">{passwordError}</span><br/>
                            <br></br>
                            <button onClick={login}  className="btn btn-success" type="button">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login;