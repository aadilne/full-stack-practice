

import AppProps from "./01_Props/AppProps"
import CounterApp from "./CounterApp/01_CounterApp/CounterApp"
import ImportFile from "./03_ImportFile/ImportFile"
import JsxPractice from "./04_JsxPractice/JsxPractice"



function    Main_Component(){


    return(
        <div>
            <AppProps />

            <CounterApp />

            <ImportFile />

            <JsxPractice />

        </div>
    )
}

export default Main_Component