import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Appcontext } from "../Statemange";
export default function DetailsPage(){
const {state,dispatch}=useContext(Appcontext)
    const params=useParams()
     
    const getdata=async()=>{
       return fetch(`http://localhost:3001/random/${params.id}`).then((res)=>res.json())
    }

    useEffect(()=>{
getdata().then((res)=>{
dispatch({type:"singleuserdata",payload:res})
})
    },[])

    return<h1>single data Page</h1>
}