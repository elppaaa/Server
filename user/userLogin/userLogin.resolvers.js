import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { tokenIssuance } from "../users.utils"
export default {
    Mutation:{
        userLogin:async(_,{userName,password})=>{
            const user = await client.user.findFirst({
                where:{userName},
                select:{id:true,password:true}
            })
            if(!user){
                return{
                    ok:false,
                    error:process.env.NotFound_User
                }
            }
            const passwordOk = await bcrypt.compare(password,user.password)
            if(!passwordOk){
                return{
                    ok:false,
                    error:process.env.Incorrect_Password
                };
            }
            //우선은 userId만 전달 추후 필요하면 수정
            
            const token=tokenIssuance(user.id)
            
            return {
                ok:true,
                token,
            }
        }
    }
}