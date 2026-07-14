import Select from 'react-select'
import { useState } from 'react'

function    SelectDropdown(){
    const [fruit , setFruit] = useState(null)

    const options = [
        {value : "chocolate" , label : "chocolate"},
        {value : "straberry" , label : "straberry"},
        {value : "vanila" , label : "vanila"},
    ]

    const customStyles ={
        control : (base) => ({
            ...base ,
            borderColor : "red",
            borderWidth : "4px",
            padding : "5px",
        }),

        option : (base) => ({
            ...base,
            color : "blue",
            backgoundColor : "white",
            fontWeight : "bold"
        })
    };


    return(
        <div style={{width : "300px"}}>
            
            <h1>Select Dropdown</h1>

            < Select options = {options} value={fruit} 

            onChange ={(selected) =>  { setFruit(selected)
                console.log(selected)
            }} 
            //isMulti
            placeholder="Select Your Fruit"
            isClearable
            isDisabled={false}
            defaultValue={options[1]}
            isSearchable={true}
            styles={customStyles}/>

            <p>{fruit?.label}</p>

        </div>
    )
}

export default SelectDropdown