
import { BrowserRouter, Routes, Route , Link , useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function APP_React_Router() {

    function User() {
        console.log(useParams());
        const {id} = useParams();

        return (
            <div>
                <h1>User Id {id} </h1>
            </div>
        )
    }


  return (
    
      <BrowserRouter>

    <nav>
      <Link to="/">Home |</Link>
      <Link to="/about">About |</Link>
      <Link to="/contact">Contact |</Link>
      <Link to="/user/:id">User |</Link>
    </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    
  );
}
export default APP_React_Router;
