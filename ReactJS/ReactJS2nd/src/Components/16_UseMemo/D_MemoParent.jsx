
import React , {useState , useMemo} from "react"
// React ka extra library use krne ke liye import krege React


function D_MemoParent() {

    const [count , setCount] = useState(0);

    
    const user = useMemo(() => ({name : "Aadil Nezam" , age : 24}) , []);

    console.log(" D Memo Parent");

  return (
    <div>
        <h1>useMemo with Parent and chlid</h1>

        <h1>Parent Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>Parent inc</button>

        <D_MemoChild user={user} />

    </div>
  )
}

// yaha pr React.memo wala component tb chlega jb user wala memo me chang hoga warna nhi chlega
const D_MemoChild =  React.memo(({user}) => {

    console.log("D Memo Child render")

    return(
        <div>
         <p> D Memo Child {user.name}</p>
        </div>
    )
})

export default D_MemoParent