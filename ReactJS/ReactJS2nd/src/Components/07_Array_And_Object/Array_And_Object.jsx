

function   Array_And_Object(){

    let Avrengers = ["HawadStack" , "Tonny Stack" , "spider Man" ,"Halk" ,"Captan America"];

    let  Student = {
        name : "Aadil",
        lastName : "Nezam",
        age : 24,
        add : "Ara"
    };

    function  FullName(){
        return  Student.name + " " + Student.lastName
    }

    const heroUsers = [
                    {firstName : "Salman" , last_Name : "Khan" , uAge : 52},
                    {firstName : "Amir" , last_Name : "Kuraisi" , uAge : 60},
                    {firstName : "Ajay" , last_Name : "Deygon" , uAge : 55},
                    {firstName : "Warun" , last_Name : "Dhawan" , uAge : 45}
    ]


    return(
        <div>
            <div className="mt-2">
            <h1>Array And Object</h1>
            <ul>
                {Avrengers.map((value , index) => (
                    <li>{index} - {value}</li>
                ))}
            </ul>
            </div>

            <div className="mt-2">
                <h1>Personal Deatils</h1>
                <p> Student Name:- {Student.name} </p>
                <p>Student Full Name :- {FullName()}</p>
                <p>Stude Age:- {Student.age}</p>
                <p>Student Add:- {Student.add}</p>
            </div>

            <div className="mt-2">
                <h1>Heros Presona Details</h1>
                <ul>
                    {heroUsers.map((value , Index) => (
                        <li key={Index}>{value.firstName} , {value.last_Name} , {value.uAge}</li>
                     )) }
                </ul>
            </div>

        </div>
    )
}

export  default  Array_And_Object