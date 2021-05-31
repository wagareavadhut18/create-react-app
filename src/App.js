import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
// import Login from "./components/Signup";
import Cakelist from "./components/Cakelist";

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        {/* <Login></Login> */}
        <Cakelist></Cakelist>
    </div>
  );
}

export default App;
