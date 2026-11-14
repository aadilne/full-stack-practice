import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProductP from "./ProductP";
import Mobile_nested from "./Mobile_nested";
import Laptop_nested from "./Laptop_nested";

function APP_React_Router() {
  function User() {
    //This is a nested component to get the user id from the url using useParams hook
    console.log(useParams()); // useParams link ka hook hai jo url se parameters ko get karne ke liye use hota hai.
    const { id } = useParams();
    return (
      <div>
        <h1>User Id: {id} </h1>
      </div>
    );
  }

  function NotFound() {
    // <Route path="*" element={ <NotFound /> } />  universal route hai jo ki agar koi bhi route match nahi hota hai to ye component render hota hai.

    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-100 h-70 mx-35 mt-12 flex flex-col items-center justify-center rounded-2xl border border-green-300 bg-gray-700">
     
     < h1 className="text-3xl font-bold text-center text-red-200">React Router</h1>
      
      <BrowserRouter>
        <nav>
          <Link to="/" className="text-blue-500">Home |</Link>
          <Link to="/about" className="text-blue-500">About |</Link>
          <Link to="/contact" className="text-blue-500">Contact |</Link>
          <Link to="/user/5" className="text-blue-500">User |</Link>
          {/* yha pr user / 5 valu Route ko de rha hai  */}

          <Link to="/ProductP" className="text-blue-500">ProductP </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />

          <Route path="/ProductP" element={<ProductP />}>
            <Route path="Mobile_nested" element={<Mobile_nested />} />
            <Route path="Laptop_nested" element={<Laptop_nested />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default APP_React_Router;
