

import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Appcontext } from "../Statemange"
import CardMapping from "./Cardmapping"


export default function Cars(){

    const {state,dispatch}=useContext(Appcontext)
   
    async function GetCars(){
        return fetch(`http://localhost:3001/random?category=Mobile`).then((res)=>res.json())
    }

    useEffect(()=>{
GetCars().then((res)=>{
    
    dispatch({type:"cardata",payload:res})
})

    },[])
console.log(state);

    return <h1>Cars Page</h1>
}