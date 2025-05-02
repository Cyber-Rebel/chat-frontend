import axios from "axios"
import {create} from "zustand"
import { axiosInstanes } from "../lib/axios";
// import Singup from "../page/Singup";

export const useAuthstore= create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIng:false,
    isUpadtingProfile:false,
    isCheakingAuth:true,


    cheakAuth:async()=>{
            try{
                    const res =await axios.get('http://localhost:5001/api/auth/check');
                    set({authUser:res.data})

            }
            catch(err){
                console.log("The error occur"+err)
                set({authUser:null})
            }finally{
                set({authUser:false})
            }
    },

    singup:async(data)=>{
        set({ isSigningUp: true });
        try{

        }catch(error){
            
        }finally{

        }
    }
}))