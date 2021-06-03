import {Component, React} from 'react';
import { useState } from 'react';
import axios from "axios";

function Signup() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [pwd, setPassword] = useState([]);

    var register = (event) => {
        event.preventDefault();
        // console.log(name,email,pwd);
        axios({
            url:"https://apibyashu.herokuapp.com/api/register",
            method:"post",
            data:{name:name,email:email,password:pwd},
        }).then((response)=>{
              console.log("response from cakes api" , response , response.data);
              alert("Registered successfully.");
        },(error)=>{
            console.log("error from cakes api" , error)
        })
        // alert("hello");
    }
    return (
        <div className="container" style={{"marginTop":"10px"}}>
            <div className="row">
                <div className="col-md-12">
                <form>
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter Your name" value={name} onChange={e => setName(e.target.value)}/>
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="text-danger"></span>
                            <label>Password</label>
                            <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password" value={pwd} onChange={e => setPassword(e.target.value)}/>
                            <br></br>
                            <button onClick={register} className="btn btn-success" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;