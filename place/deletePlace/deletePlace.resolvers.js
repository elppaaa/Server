import client from "../../client";
import { protectedResolver } from "../../user/users.utils";

const deletePlaceFN= async(_,{id},{loggedInUser,logger})=>{
    if(loggedInUser===process.env.AccessTokenExpiredError){
        return{
            ok:false,
            error:process.env.AccessTokenExpiredError
        }

    }
    else if(loggedInUser===process.env.Invaild_Token){
        return{
            ok:false,
            error:process.env.Invaild_Token
        }
    }
    else if(!loggedInUser){
        return{
            ok:false,
            error:process.env.CheckLogin
        }
    }
    try{
        const result = await client.place.delete({
            where:{
                id
            }
        })
        logger.info(`${__dirname}| %o`,result)
        
        
    }catch(e){
        logger.error(`${__dirname}|${e}`)
        return {
            ok:false,
            error:process.env.DeleteFail_Place
        }
    }
    return{
        ok:true
    }
}
export default{
    Mutation:{
        deletePlace:protectedResolver(deletePlaceFN)
    }
}