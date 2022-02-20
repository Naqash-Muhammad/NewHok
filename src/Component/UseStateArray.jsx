import React, {useState} from "react";

const UseStateArray = () =>{

    const data =[
        {
            id : 0,
            Name : "Naqash",
            Age : 22,
        },

        {
            id : 1,
            Name : "Naqash M.Ali",
            Age : 19,
        }
    ]

    const [bioData, setbioData] = useState(data);
    const clear = () =>{
        setbioData([ ]);
    }
                 
    return(
    <>
    {
        
        bioData.map( (currt)=>{
            return <h1>Name {currt.Name} and my Age {currt.Age}</h1>
        })
    }

    <button type="button" onClick={clear}>Clear</button>
    </>
);
}

export default UseStateArray;