"use server";
import prisma from '../lib/prisma';

export const joinWaitlist = async (email : any) : Promise<{status : boolean , message : string}> => {
    try{
        const waitlist = await prisma.waitlist.findUnique({
            where : { email }
        })
        if(waitlist != null){
            return {
                status : true,
                message : "You've already joined the waitlist! 🥳"
            }
        }
        const newWaitlist = await prisma.waitlist.create({
            data: {
              email
            },
        })
        return {
            status : true,
            message : "You've joined the waitlist! 🥳"
        }
    }catch(err : any){
        console.log(err)
        return {
            status : false,
            message : err.message
        }
    }    
}