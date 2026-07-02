
import Modal from './Modal'
import {useState} from 'react'

function    AppCreatePortal(){

    const[open , setOpen] = useState(false)

    return(
        <div style={{padding:"30px"}}>
            <h1>Create Portal</h1>

            <button onClick={()=> setOpen(true)}>Open Modal</button>

            <Modal isOpen={open} onClose={() => setOpen(false)}> 
                <h2>Hello, I'm in the modal!</h2>
                <p>This is simple Modal without context.</p>
            </Modal>
        </div> 
    )
}

export default AppCreatePortal