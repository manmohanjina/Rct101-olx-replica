import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
import Buypage from "./pages/buypage"
import Login from "./pages/login"
export default function Allroutes(){

    return <Routes>
        <Route path='/' element={<Navbar/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/buy' element={<Buypage/>} ></Route>
    </Routes>
}