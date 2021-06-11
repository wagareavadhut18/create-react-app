import { BrowserRouter as React,Link,withRouter } from 'react-router-dom';
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
        props.history.push("/");
    }      

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <Link to="/" className="navbar-brand"><img src="/images/ideaa.png" alt="" height="35"/>&nbsp;Ideaa</Link>
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
                {props.isloggedin && 
                    <>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {/* <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" alt="" width="40" height="40" className="rounded-circle"/> */}
                                {props.username}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {/* <a className="dropdown-item" href="#">Dashboard</a> */}
                                {/* <a className="dropdown-item" href="#">Edit Profile</a> */}
                                <a className="dropdown-item" href="#" onClick={logout}>Log Out</a>
                                </div>
                            </li>
                        </ul>
                        <button className="btn"><i className="fas fa-shopping-cart"></i><span className="badge badge-pill badge-success t-n1 l-n1">4</span></button>
                    </>
                }
            </div>
        </nav>
    )
}

function mapStateToProp(state,props){
    // console.log("state>>>",state,"props>>>>",props)
    return {
        username:state.AuthReducer.username,
        isloggedin:state.AuthReducer.isloggedin
    }
}
  
export default connect(mapStateToProp)(withRouter (Navbar));