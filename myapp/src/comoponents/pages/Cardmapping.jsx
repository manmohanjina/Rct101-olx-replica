
import {Text,Box,Image,Flex,Grid,GridItem,Container,Button,Skeleton} from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import {Link} from "react-router-dom"

import { Appcontext } from "../Statemange"
export default function CardMapping({data,fn,page}){


  const {state,dispatch}=useContext(Appcontext)

 
if(state.cardatastatus){
  return   <Grid templateColumns='repeat(5, 1fr)' gap={6} bg='gray.100'  >

  {
  
  state.cardata.map((elm)=><Box key={elm.id} > 
  <Image src={elm.image} width='300px' h='300px' ></Image>
  <Text>{elm.category}</Text>
  <Text>{elm.price}</Text>
  <Link to={`/cars/${elm.id}`} >More Details</Link></Box>)
 
  
 }
 
 </Grid>
}

if(state.singledatastatus){
 return<Container> <Box width='500px' h='500px' bg='cyan.100'>
<Image m='auto' w='300px' h='300px' src={state.singledata.img4} ></Image>
<Text> Camera:- {state.singledata.camera}</Text>
<Text >Chipset- {state.singledata.chipset}</Text>
<Text>Cash on Delivery-{state.singledata.cod}</Text>
<Text>Display:{state.singledata.display}</Text>
<Text>Company Name {state.singledata.companyname}</Text>

  </Box></Container>
}

    return <>
    
  <Grid templateColumns='repeat(5, 1fr)' gap={6} bg='gray.100'  >

 {
 
 data&&data.map((elm)=><Box key={elm.id} > 
 <Image src={elm.image} width='300px' h='300px' ></Image>
 <Text>{elm.category}</Text>
 <Text>{elm.price}</Text>
 <Link to={`/${elm.id}`} >More Details</Link></Box>)

 
}

</Grid>



 <Container bg='gray.100'  w='full'  display={"flex"}  mt='10px' p='100px' >
  <Button disabled={page==1} onClick={()=>fn(page-1)} colorScheme='yellow' width='500px' >prev</Button>
  <Button  colorScheme='telegram' w='100px' >{page}</Button>
  <Button onClick={()=>fn(page+1)} colorScheme='yellow' width='500px' >Next</Button>
</Container> 



    </>

}

