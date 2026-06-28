
import useToggle from "./useToggle";

function ToggleText(){

    const  [isOpen , toggleOpen] = useToggle()
    const [isTest , toggleTest] = useToggle()



    return (
    <div>
        <div>
            <button onClick={toggleOpen}>custom Toggle</button>
            {isOpen  && <p>Hello ! This is visiable</p>}
        </div>
        <div>
            <button onClick={toggleTest}>2nd custom Toggle</button>
            {isTest  && <p>Hello ! Aadil</p>}
        </div>
    </div>
    )
}

export default ToggleText