import { createContext } from "react";
import { useReducer } from "react";

export  const Appcontext=createContext()

export default function Statemangement({children}){

    const intobj={
        isloading:false,
        wrong:null,
        wrong1:null,
        isAuth:false,
        iserror:false,
        data:[],
        cardata:[],
        singledata:[],
        bikedata:[],
        mobiledata:[]
    }
    const reducer=(state,action)=>{

        switch(action.type){
          case "loginfail":
          return  {...state,isloading:false ,wrong:true,wrong1:true,isAuth:false,iserror:true}
        
          case "loginsuccess"
          :return {...state,isloading:false,wrong:false,isAuth:true,isError:false,data:action.payload}

          case "start":
            return {...state,isloading:true,isAuth:false,isError:false}

            case "finish":
                return {...state, isloading:false,iserror:false,data:action.payload }

                case "reset":
                    return {...state ,isError:false, wrong:false}

                    case "cardata":
                        return {...state,cardata:action.payload,cardatastatus:true}

                        case "singleuserdata":
                            return {...state,singledata:action.payload,singledatastatus:true}

                            case "bikedata":
                                return {...state,bikedata:action.payload,bikedatastatus:true}

                                case "mobiledata":
                                    return {...state,mobiledata:action.payload,mobiledatastatus:true}

                                    case "reset":
                                        return{...state, wrong:false,wrong1:true}
        }
        
    }

    const [state,dispatch]=useReducer(reducer,intobj)

    return <Appcontext.Provider value={{state,dispatch}} >{children}</Appcontext.Provider>
}