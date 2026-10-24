
export default  function Button({lable , handelClick}){

    return (
        <div className="mx-30">

            <button onClick={handelClick}>{lable}</button>
            
        </div>
    )
}