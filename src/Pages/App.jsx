import Navbar from "./Components/Navbar";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <div className="container px-5 pt-3">
        <h1 className="mt-3">Hello People</h1>
        <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          soluta consectetur delectus quod reprehenderit? Earum consequuntur
        </p>
        <div className="container-fluid d-flex gap-3">
          <NavLink to='/' className="btn btn-sm btn-primary">Login</NavLink>
          <NavLink to="/register" className="btn btn-sm btn-secondary">Register</NavLink>
        </div>
      </div>
    </>
  );
}

export default App;
