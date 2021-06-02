import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cakelist from "./components/Cakelist";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        {/* <Signup></Signup> */}
        <Carousel></Carousel>
        <Cakelist></Cakelist>
        {/* <Login></Login> */}
    </div>
  );
}

export default App;
