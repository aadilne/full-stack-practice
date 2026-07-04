

import UserProfile from './UserProfile'
import ErrorBoundary from './ErrorBoundary'

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

            <ErrorBoundary>
                <UserProfile userData={userData} />
            </ErrorBoundary>

            <ErrorBoundary>
                <UserProfile userData={userData1} />
            </ErrorBoundary>
            

        </div>
    )
}


export default AppErrorBoundary