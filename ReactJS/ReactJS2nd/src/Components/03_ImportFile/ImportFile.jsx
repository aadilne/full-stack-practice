
import data from './data.json';
import { add } from './Utilites';
import { Data1, Data2 } from './Dtata1';

function   ImportFile(){

let result = add(4, 5);
console.log(result);
console.log(data)


    return(
        <div>
            <data/>

            <Data1 />
            <Data2 />



        </div>
    )
}

export default ImportFile