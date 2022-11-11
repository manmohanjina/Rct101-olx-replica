import { Container,Box } from "@chakra-ui/react";
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
        dispatch({typr:"start"})
getdata().then((res)=>{
dispatch({type:"singleuserdata",payload:res})
dispatch({type:"finish"})
}).catch((error)=>{

    dispatch({type:"loginfail"})
})
    },[])

    

   return <Container mt='30px' h='400px' bg='#E6FFFA' >
<Box></Box>
   </Container>
}