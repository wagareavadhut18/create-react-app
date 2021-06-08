import {useState,useEffect,Component} from "react";
import { BrowserRouter as Router,Route,Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


function Navbar(props){
    let searchString = ""
    let search = (event)=>{
        event.preventDefault()
      //   searchString = "searhc kar liya "
      // console.log("we have to earch for " , searchString)
      if(searchString){
        // console.log("??????",searchString)
        var url = "/search?q="+searchString
        // console.warn('url....',url)
         props.history.push(url)
        
      }
    }

    let getSearchText = function(event){
        searchString = event.target.value
    //    console.log("event value" , event.target.value)
    }

    let logout = ()=>{
        props.dispatch({
          type:"LOGOUT"
        })
    }      

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"><img src="/images/ideaa.png" height="35"/>&nbsp;Ideaa</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input onChange={getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <Link to="/search"><button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button></Link>
                </form>
                {!props.isloggedin && <Link to="/login"><button className="nav-link" style={{border:"none",background:"none"}}>Login</button></Link>}
                {!props.isloggedin && <Link to="/register"><button className="nav-link" style={{border:"none",background:"none"}}>Register</button></Link>}
                {props.isloggedin && <button onClick={logout} className="nav-link text-danger" style={{border:"none",background:"none"}}>Logout</button>}
            </div>
        </nav>
    )
}

function mapStateToProp(state,props){
    return {
        username:state["username"],
        isloggedin:state["isloggedin"]
    }
}
  
export default connect(mapStateToProp)(withRouter (Navbar));