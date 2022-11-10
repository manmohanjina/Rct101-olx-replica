import { Button, Container, Grid,GridItem, useConst,Skeleton } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useEffect } from "react"
import CardMapping from "./Cardmapping"

import { Appcontext } from "../Statemange"


export default function MainPage(){

const {state,dispatch}=useContext(Appcontext)


  const [data,setdata]=useState([])
const [page,setPage]=useState(1)
async function FetchRandom(p){
  console.log(p);
  return  fetch(`http://localhost:3001/random?_page=${p.page}&_limit=10`).then((res)=>{
   return res.json()
  })
 }
 

    useEffect(()=>{
dispatch({type:"start"})
FetchRandom({page:page}).then((res)=>{
  
dispatch({type:"finish",payload:res})
}).catch((error)=>{
  dispatch({type:"loginfail"})
})
    },[page])
    console.log(state);
 

    return(<>

{ state.isloading?<Skeleton startColor='pink.500' endColor='orange.500' height='20px' />: <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1}>


  </GridItem>
 
  <GridItem colSpan={4} bg='gray.100' >
   <CardMapping  page={page} data={state.data} fn={setPage} />
  </GridItem>
</Grid>}


    </>)

}