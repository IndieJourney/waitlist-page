"use client"
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { joinWaitlist } from "@/actions/join-waitlist";
import { EmailSchema } from "@/lib/type";
import { motion } from "framer-motion"


export default function EmailSubmit(){
    const [key, setKey] = useState(0);

    const makeValidation = async (FormData : FormData) => {
        const newEmail = FormData.get("email");
        const result = EmailSchema.safeParse({email : newEmail});
        if(!result.success){ 
            setKey((prevKey) => prevKey + 1);
            let errorMessage = "";
            result.error.issues.forEach(issue => {
                errorMessage = errorMessage + issue.message ;
            })
            //console.log(errorMessage);
            return;
        }
        const submitResult = await joinWaitlist(newEmail);
    }

    return (
        <form action={makeValidation} className="sm:w-96 w-8/12 mx-auto mt-10 border border-[#D0D7DE] h-11 rounded-xl flex flex-col justify-center">
            <div className="flex flex-row h-auto w-[97%] mx-auto">
                <motion.input key={key} initial={{x : -6}} animate={{x : 0}} transition={{ type : "spring" , stiffness: 80, damping: 12  }} type="email" name="email" className="focus:outline-none h-full w-full placeholder-[#76777B] font-semibold px-2 rounded-full" placeholder="Enter your email"/>
                <Button type="submit" className="bg-[#6867F9] h-8 w-52 rounded-lg text-white focus:outline-none">Join waitlist</Button>
            </div>
        </form>
    )
}