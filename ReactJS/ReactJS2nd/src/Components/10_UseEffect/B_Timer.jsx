

import { useEffect  , useState} from 'react'


function B_Timer() {

    let [count , setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect called in B Timer");

        const Interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        } , 1000);


// yaha pr return clearInterval likhna jruri hai kyu ki useEffet automatice do bar chla jata hai
        return () =>{  
            clearInterval(Interval);
            console.log("Timer clear");
        }

    }, []);

  return (
    <div className="w-100 h-30 mx-35 pl-7  bg-gray-700">
        <h1>useEffect Practice</h1>
        <div>B Timer</div>

        <p>CountTime:- {count}</p>

        <button onClick={() => setCount(count +1)} >TimeC</button>
    </div>
    
    
  )
}

export default B_Timer