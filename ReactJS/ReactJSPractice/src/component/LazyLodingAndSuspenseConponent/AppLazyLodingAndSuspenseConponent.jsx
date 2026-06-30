

// import LazyLodingAndSuspenseConponent from "./LazyLodingAndSuspenseConponent"

import { useState , Suspense , lazy} from "react"
import LazyLodingAndSuspenseConponent from "./LazyLodingAndSuspenseConponent"

// component aise import krege lazy and component call Suspense me fallback attrebut le kr es tag me component ko call krege
const Post = lazy(() => import("./LazyLodingAndSuspenseConponent"))

function  AppLazyLodingAndSuspenseConponent(){
    const [showPost , setShowPost] = useState(false)



    return(
        <div>

        <button onClick={() => setShowPost(true)}>Show Post</button>
        {showPost && (<Suspense fallback={<p>Loding Page....</p>}> <LazyLodingAndSuspenseConponent /> </Suspense>) }

        </div>
    )
}
export default AppLazyLodingAndSuspenseConponent