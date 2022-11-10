import {Text,Divider,Button,Container, Input,Box, useEditable, useConst} from "@chakra-ui/react"
import { useContext, useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import {Navigate} from "react-router-dom"
import { Appcontext } from "../Statemange"
export default function Login(){
 
    const {state,dispatch}=useContext(Appcontext)
    
    const timerref=useRef()
    const [count,setCount]=useState(5)
 
    const [logindet,setlogindet]=useState({
        email:"",
        password:""
    })
    const handelChange=(e)=>{
        const{name,value}=e.target
  setlogindet({...logindet,[name]:value})
    }
    const handleSubmit=()=>{
        dispatch({type:"start"})
        GetRes().then((res)=>{
            
           
             if(res.token) dispatch({type:"loginsuccess"})
             else {
               dispatch({type:"loginfail"})
                
             }
           dispatch({type:"finish"})
        }).catch((error)=>{
            dispatch({type:"finish"})
        })
      
      

    }


   async function GetRes(){
    
       return fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body: JSON.stringify({email:logindet.email,password:logindet.password}),
    
         headers:{
            "content-type":"application/json"
         }
       }).then((res)=>res.json())
       
    }
//wrong Password




    if(state.isAuth){
        return <Navigate to='/' />
    }

 
   

    return <>
    <Container>
        <Box  p={3} m={4} mt="100px" display={"flex"} flexDirection="column" bg="red.100" borderRadius={40} >
            <Text p="20px"  as='b' >{state.wrong==true?"Login to continue":"wrong Password"}</Text>
<Box mt={4} ><Input name='email' value={logindet.email} onChange={handelChange} bg='white' placeholder="Enter Email"  ></Input></Box>
<Box mt={4} ><Input name='password' value={logindet.password} onChange={handelChange}  bg='white' placeholder="Enter PassWord"  ></Input></Box>
<Button disabled={state.isloading==true} borderRadius={40} mt="20px" onClick={handleSubmit} >Login</Button>
<Divider/>
        </Box>
    </Container>
    
    </>
}