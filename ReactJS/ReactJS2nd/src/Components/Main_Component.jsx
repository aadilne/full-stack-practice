

import AppProps from "./01_Props/AppProps"
import CounterApp from "./CounterApp/01_CounterApp/CounterApp"
import ImportFile from "./03_ImportFile/ImportFile"
import JsxPractice from "./04_JsxPractice/JsxPractice"
import React_Icons from "./05_React_Icons/React_Icons"
import Function_And_Events from "./06_Function_And_Events/Function_And_Events"




function    Main_Component(){


    return(
        <div className=" mx-15 px-5 bg-gray-800 text-white">
            
            <AppProps />

            <CounterApp />

            <ImportFile />

            <JsxPractice />

            <React_Icons />

            <Function_And_Events/>

        </div>
    )
}

export default Main_Component