import { createContext } from "react";
import { useReducer } from "react";

export  const Appcontext=createContext()

export default function Statemangement({children}){

    const intobj={
        isloading:false,
        wrong:true,
        isAuth:false,
        isError:false
    }
    const reducer=(state,action)=>{

        switch(action.type){
           case "loginfail":
            return {...state,isAuth:false,isloading:false,wrong:false}

            case "loading":
                return {...state,isAuth:false,isloading:true,wrong:true}
                
                case "success":
                    return {...state,isAuth:true,isloading:false,wrong:false}

                    case "finish":
                        return {...state,isloading:false,wrong:false}
        }
    }

    const [state,dispatch]=useReducer(reducer,intobj)

    return <Appcontext.Provider value={{state,dispatch}} >{children}</Appcontext.Provider>
}