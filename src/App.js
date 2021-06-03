import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./Home";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
            <Navbar></Navbar>
            <Route exact path="/"> <Home/></Route>
            <Route exact path="/register"> <Signup/></Route>
            <Route exact path="/login"> <Login/></Route>

            {/* <Signup></Signup> */}

            {/* <Login></Login> */}
    </Router>
   
  );
}

export default App;
