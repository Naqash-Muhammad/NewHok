import React, { useState } from "react";

const Spreat = () =>{

    const [Spreet, setSpreet] = useState({
        name : "Naqash",
        age :33,
        degree :"BsCs",
    });

    const Change = ()=>{
        setSpreet({...Spreet, name : "Naqash M.Ali"})
    }
    return(
    <div style={{backgroundColor:"red", padding:"3rem"}}>
    <h3 style={{background:"white", padding:"1rem", borderRadius:"4rem"}}>Name : {Spreet.name}, Age : {Spreet.age}, Degree : {Spreet.degree}</h3>
    <button type="button" onClick={Change}>Change</button>
    </div>
)

}

export default Spreat;