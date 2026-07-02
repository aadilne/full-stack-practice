

function UserProfile({userData}) {

    const userName = userData.name;
    const userAge = userData.age;
    const userCity = userData.city;

    return(
        <div style ={{border : "2px solid red" , margin : "10px" , padding : "10px"}}>
            <h4>User Profile</h4>
            <p>Name:{userName} </p>
            <p>Age:{userAge} </p>
            <p>City:{userCity} </p>

            
        </div>
    )
}

export default UserProfile