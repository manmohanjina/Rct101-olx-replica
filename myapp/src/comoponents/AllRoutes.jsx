import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
import Buypage from "./pages/buypage"
import Login from "./pages/login"
import Cars from "./pages/cars"
import DetailsPage from "./pages/DetailsPage"
export default function Allroutes(){

    return <Routes>
        <Route path='/' element={<Navbar/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/buy' element={<Buypage/>} ></Route>
        <Route path='/cars' element={<Cars/>} ></Route>
        <Route path='cars/:id' element={<DetailsPage/>} ></Route>
    </Routes>
}