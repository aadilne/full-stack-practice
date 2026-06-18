
function Array_and_Obj() {

    const fruitName = ["Apple", "Banana", "Mango", "Lichi"]

    const student_Details = { 
        name:"Aadil",
        lastName:"Nezam",
        add:"Ara", 
        mob:7782899686, 
        status:"singal" }

        function fullName(user){
            return user.name + " " + user.lastName
        }
        

    return (
        <>
            <h1>Array practice</h1>
            <h2>Fruit Name</h2>
            <ul>
                {fruitName.map((fruit, index) => (
                    <li>{index} - {fruit}</li>
                ))}
            </ul>

            <h1>Object Practice</h1>
            <p>Student Name:- {student_Details.name}</p>
            <p>Student Address:- {student_Details.add}</p>
            <p>Student mobile Number :-{student_Details.mob}</p>
            <p>Student Status:- {student_Details.status}</p>

            <p>Full Name:- {fullName(student_Details) }</p>

        </>
    )
}
export default Array_and_Obj