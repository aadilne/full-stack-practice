
import UserProfile from './UserProfile'

function  AppErrorBoundary(){

    const userData ={
        name :"Aadil Nezam",
        age : 24,
        city : "Ara",
    }

    const userData1 = null;

        return (
            <div>
            <h1>Practice Error Boundary</h1>
            <h2>User Data</h2>

            <UserProfile userData={userData} />
            {/* <UserProfile userData={userData1} /> */}
        </div>
    )
}


export default AppErrorBoundary