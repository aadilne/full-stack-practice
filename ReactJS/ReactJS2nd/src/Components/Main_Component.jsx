

import AppProps from "./01_Props/AppProps"
import CounterApp from "./CounterApp/01_CounterApp/CounterApp"
import UseState from "./02_UseState/UseState"
import ImportFile from "./03_ImportFile/ImportFile"
import JsxPractice from "./04_JsxPractice/JsxPractice"
import React_Icons from "./05_React_Icons/React_Icons"
import Function_And_Events from "./06_Function_And_Events/Function_And_Events"
import Array_And_Object from "./07_Array_And_Object/Array_And_Object"
//import Conditional_Rendering from "./08_Conditional_Rendering/Conditional_Rendering"
import LminCompo from "./08_Conditional_Rendering/LminCompo"
import App_UseRef from "./09_UseRef/App_UseRef"
import App_UseEffect from "./10_UseEffect/App_UseEffect"
import APP_React_Router from "./11_React_Router/App_React_Router"
import App_useEffectEvent from "./12_UseEffectEvent/App_useEffectEvent"
import App_Data_Flow from "./13_Data_Flow/App_Data_Flow"
import App_UseContext from "./14_UseContext/APP_UseContext"
import App_UseReducer from "./15_UseReducer/App_UseReducer"
import App_UseMemo from "./16_UseMemo/App_UseMemo"
import App_UseCallback from "./17_UseCallback/App_UseCallback"




function    Main_Component(){


    return(
        <div className=" mx-15 px-5 bg-gray-800 text-white">
            
            <AppProps />

            <CounterApp />

            <UseState />

            <ImportFile />

            <JsxPractice />

            <React_Icons />

            <Function_And_Events/>

            <Array_And_Object />

            {/* <Conditional_Rendering /> */}
            <LminCompo />

            <App_UseRef />

            <App_UseEffect />

            <APP_React_Router />

            <App_useEffectEvent />

            <App_Data_Flow />

            <App_UseContext />

            <App_UseReducer />

            <App_UseMemo />

            <App_UseCallback />



        </div>
    )
}

export default Main_Component