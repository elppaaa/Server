import client from "../client"
import logger from "../logger";

export const refreshTokenDelete= async()=>{
    var date = new Date();
    date.setMonth(date.getMonth()-3)
    var today = new Date(date.toString().split('GMT')[0]+' UTC').toISOString();
    
    await client.token.deleteMany({
        where:{
            createdAt:{
                lte:today
            }
        }
    })
    logger.info(`${__dirname}|RefreshToken Delete`)
}