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




function App() {
  
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

    </>
  )
}

export default App
