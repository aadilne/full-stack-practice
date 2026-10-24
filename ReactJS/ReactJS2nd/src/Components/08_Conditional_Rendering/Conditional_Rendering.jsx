
function  Conditional_Rendering(){

    let age = 19;

    const message = true;

    return(
        <div>
            <h1>Conditional Rendering</h1>
            { age > 18 ? <p> Access Allowed </p> : <p>Access not Allowed</p> }

            {message && <p>You have new message</p>}

        </div>
    )
}

export default Conditional_Rendering