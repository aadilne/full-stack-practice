import { createPortal } from "react-dom"



function   Modal({isOpen , onClose , children}) {

    if(!isOpen) return null

    return( createPortal(
       <div style={ModalStyle.overlay}  onClick={onClose}> 
            <div style={ModalStyle.modal} onClick={onClose} onClick={(e) => e.stopPropagation()}> 

               
            
             {children }

             <button style={ModalStyle.btn} onClick={onClose}>Close</button>
            </div>
            
        </div>
       , document.querySelector("#modal-root")))
}



const ModalStyle ={
    overlay:{
        position:"fixed",
        inset:0,
        backgroundColor:"rgba(0,0,0,0.5)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    },
    modal:{
        backgroundColor:"#fff",
        padding:"20px",
        borderRadius:"20px",
        minWidth:"300px"
    },

    btn:{
        marginTop:"20px",
    }
}

export default Modal