import { useState } from 'react'
import Demo from './component/Demo'
import InlineStyle from './component/InlineStyle'
import FunctionComponent from './component/FunctionComponent'
import Array_and_Obj from './component/Array_and_Obj'
import ConditionRendering from './component/ConditionRendering'
import Props from './component/Props'
import StateManagement from './component/StateManagement'
import FormHandling from './component/FormHandling'
import Todo from './component/Todo'
import UseEffectHook from './component/UseEffectHook'
import Timer from './component/Timer'

import RouterHome from './component/RouterHome'
import RouterAbout from './component/RouterAbout'
import RouterContact from './component/RouterContact'

import { BrowserRouter, Routes, Route , Link , useParams } from "react-router-dom";
import RouterProdect from './component/RouterProdect'
import RouterNestedPhone from './component/RouterNestedPhone'
import RouterNestedLaptop from './component/RouterNestedLaptop'

import UseEffectEvent from './component/UseEffectEvent'
import UEFAutoSaveForm from './component/UEFAutoSaveForm'
import PropDrilingStateLiftingSharedState from './component/PropDrilingStateLiftingSharedState'
import UseContext from './component/UseContext'

import UseReducerHook from './component/UseReducerHook'
import UseMemoHook from './component/UseMemoHook'
import UseMemoPractice from './component/UseMemoPractice'
import UseCallbackHook from './component/UseCallbackHook'
import UseCallbackParent from './component/UseCallbackParent'
import UseLayoutEffect from './component/UseLayoutEffect'
import UseLayoutEffectPractice from './component/UseLayoutEffectPractice'
import UseLayoutEffectPractice2 from './component/UseLayoutEffectPractice2'
import ToggleText from './component/CustomHook/ToggleText'
import Users from './component/CustomHook/Users'

import AppHOC from './component/HigherOrderComponent/AppHOC'

import AppLazyLodingAndSuspenseConponent from './component/LazyLodingAndSuspenseConponent/AppLazyLodingAndSuspenseConponent'

//it's direct cretePortal component in App.jsx file and render in body tag
import {createPortal} from 'react-dom'

import PortalTest from './component/CreatePortal/PortalTest'

// import AppCreatePortal from './component/CreatePortal/AppCreatePortal'

import AppErrorBoundary from './component/ErrorBoundary/AppErrorBoundary'

import AppForm from './component/ReactHookForm/AppForm'

import AppYup from './component/YupReact/AppYup'

import AppTailwind from './component/TailwindCss/AppTailwind'

import AppCreatePortal from './component/CreatePortal/AppCreatePortal'

import AppSelectDropdown from './component/SelectDropdownLibrary/AppSelectDropdown'

import AppCurd from './component/CURD/AppCurd'


function App() {

  function  User(){
    console.log(useParams())
    const {id}=useParams()
    return <h2>User Profile for Id: {id}</h2>
  }

  function NotFound(){

    return <h1>404 page ot found</h1>
  }
  
 //  const propHobbies = ["Art" , "Singing" , "Swiming" , "Cooking"]

  return (
    <>
      
      <h1>react</h1>
      
      <Demo />
      <InlineStyle />
      <FunctionComponent />
      <Array_and_Obj />
      <ConditionRendering />

      {/* we Can send single prop also */}
      {/*<Props Name =" Nezam" /> */}
    {/*   <Props Name =" AAdil" Age ={24} City = "Ara" propHobbies = {propHobbies} /> */}

    <Props Name =" Nezam" Age ={22} City = "Patna" />

    <StateManagement />

    <FormHandling />

    <Todo/>

    < UseEffectHook/>
    <Timer/>

   
    <BrowserRouter>
    <h1>React Router Practice</h1>
   {/*  <a href="/">Home</a> | 
    <a href="/RouterAbout">About</a> |
    <a href="/RouterContact">Contact</a> | */}

    <nav>
      <Link to='/'>Home</Link>|
      <Link to='RouterAbout'>About</Link>|
      <Link to="RouterContact">Contace</Link>|
      <Link to="/User/10">User</Link>|
      <Link to="RouterProdect">Produce</Link>
      
    </nav>

    <Routes>
      <Route path='/' element={<RouterHome />}/>
      <Route path='/RouterAbout' element={<RouterAbout />}/>
      <Route path='/RouterContact' element={<RouterContact />}/>
      <Route path='/User/:id' element={<User />}/>
      <Route path='*' element={<NotFound />}/>
     
      <Route   path='/RouterProdect'  element={<RouterProdect />}>
        <Route path='RouterNestedPhone' element={<RouterNestedPhone />}/>
        <Route path='RouterNestedLaptop' element={<RouterNestedLaptop />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    <UseEffectEvent />
    <UEFAutoSaveForm/>

    <PropDrilingStateLiftingSharedState />

    <UseContext />
    <UseReducerHook />
    <UseMemoHook />
    <UseMemoPractice />

    <UseCallbackHook/>
    <UseCallbackParent />

    <UseLayoutEffect />
    <UseLayoutEffectPractice/>
    < UseLayoutEffectPractice2/>
    <ToggleText />
    <Users />

    <AppHOC />

    <AppLazyLodingAndSuspenseConponent />

    <h1>Create Portal Component</h1>
    {createPortal(<h1>Portal </h1> , document.body)}

    <PortalTest />

    <AppCreatePortal />

    <AppErrorBoundary />

    <AppForm />

    <AppYup />

    <AppTailwind />

    <AppSelectDropdown />

    <AppCurd />

    </>
  )
}


export default App
