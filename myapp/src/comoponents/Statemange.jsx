import { createContext } from "react";
import { useReducer } from "react";

export  const Appcontext=createContext()

export default function Statemangement({children}){

    const intobj={
        isloading:false,
        wrong:null,
        isAuth:false,
        isError:false,
        data:[],
        cardata:[],
        singledata:[]
    }
    const reducer=(state,action)=>{

        switch(action.type){
          case "loginfail":
          return  {...state,isloading:0 ,wrong:true,isAuth:0,isError:true}
        
          case "loginsuccess"
          :return {...state,isloading:false,wrong:true,isAuth:true,isError:false,data:action.payload}

          case "start":
            return {...state,isloading:true,wrong:true,isAuth:false,isError:false}

            case "finish":
                return {...state, isloading:false,isError:false,data:action.payload }

                case "reset":
                    return {...state ,isError:false, wrong:false}

                    case "cardata":
                        return {...state,cardata:action.payload,cardatastatus:true}

                        case "singleuserdata":
                            return {...state,singledata:action.payload,singledatastatus:true}
        }
        
    }

    const [state,dispatch]=useReducer(reducer,intobj)

    return <Appcontext.Provider value={{state,dispatch}} >{children}</Appcontext.Provider>
}