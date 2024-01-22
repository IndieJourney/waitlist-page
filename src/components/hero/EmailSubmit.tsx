"use client"
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { joinWaitlist } from "@/actions/join-waitlist";
import { EmailSchema } from "@/lib/type";
import { motion } from "framer-motion"
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import toast from 'react-hot-toast';

export default function EmailSubmit(){
    const [loading, setLoading] = useState<boolean>(false);
    const [submited , setSubmit] = useState<boolean>(false);
    const [submitMessage , setSubmitMessage] = useState<string>("");
    const [animate, setAnimate] = useState(0);

    const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
        conductor?.shoot();
    };

    const makeValidation = async (FormData : FormData) => {
        setLoading(true);
        const newEmail = FormData.get("email");
        const result = EmailSchema.safeParse({email : newEmail});
        if(!result.success){ 
            setAnimate((prevKey) => prevKey + 1);
            let errorMessage = "";
            result.error.issues.forEach(issue => {
                errorMessage = errorMessage + issue.message ;
            })
            setLoading(false);
            console.log(errorMessage);
            return;
        }
        const submitResult = await joinWaitlist(newEmail);
        if(!submitResult.status){
            toast.error(submitResult.message);
            setLoading(false);
            return;
        }
        setSubmitMessage(submitResult.message);
        setSubmit(true);
        return;
    }
    if(submited){
        return (
            <div className="sm:w-96 w-8/12 mx-auto mt-10 border border-[#D0D7DE] h-11 rounded-xl flex flex-col justify-center border-dashed">
                <Realistic onInit={onInit} />
                <motion.h1 initial={{x : -15}} animate={{x : 0}} transition={{ type : "spring" , stiffness: 80, damping: 12  }} className="text-center md:text-base sm:text-sm text-xs">{submitMessage}</motion.h1>
            </div>
        )
    }

    return (
        <form action={makeValidation} className="sm:w-96 w-8/12 mx-auto mt-10 border border-[#D0D7DE] h-11 rounded-xl flex flex-col justify-center">
            <div className="flex flex-row h-auto w-[97%] mx-auto">
                <motion.input key={animate} initial={{x : -6}} animate={{x : 0}} transition={{ type : "spring" , stiffness: 80, damping: 12  }} type="email" name="email" className="focus:outline-none h-full w-full placeholder-[#76777B] font-semibold px-2 rounded-full" placeholder="Enter your email"/>
                <Button disabled={loading} type="submit" className={`bg-[#6867F9] h-8 w-52 rounded-lg text-white focus:outline-none ${loading ? "opacity-75" : ""}`}>
                    {
                        !loading ? "Join waitlist" : (
                            <>
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                <span>
                                    Joining...
                                </span>
                            </>
                        )
                    }
                </Button>
            </div>
        </form>
    )
}