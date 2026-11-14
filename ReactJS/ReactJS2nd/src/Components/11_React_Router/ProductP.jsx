
import {Link , Outlet} from 'react-router-dom'
// <Outlet /> ek jagah ka marker hai. Ye React Router ko batata hai: “mere child routes ka content yahan dikhao.”

function ProductP() {
  return (
    <div>
        <div> Products Laptop and Mobile</div>

        <nav>
            <Link to="Mobile_nested" className="text-blue-500">Mobile | </Link>
            <Link to="Laptop_nested" className="text-blue-500"> Laptop | </Link>
        </nav>

        <Outlet />   {/* yahan Mobile ya Laptop aayega */}

    </div>
  )
}

export default ProductP