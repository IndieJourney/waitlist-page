"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function MyFoundingPartner(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    
    useEffect(()=>{
        console.log("Am i in view? : " + isInView);
    },[isInView])

    return (
        <div ref={ref} className="filter drop-shadow-md backdrop-blur-2 translate-y-1 rounded-xl border border-[#F0F0F0] w-full bg-white p-7 relative">
            <div className="flex flex-row space-x-2">
                <h1 className="font-bold text-lg">My founding partner's said</h1>
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/fire_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
            </div>
            <p className="text-[#76777B] pt-3">I simply want a dedicated place where I can share my progress and devlogs on the project I do, and connect with like-minded people. Excited to try our product myself.</p>
            <motion.div animate={isInView ? { rotate : -20 } : { rotate : -250 }} initial={isInView ? { rotate : -250 } : {rotate : -20 }} transition={{ type: "spring" , stiffness: 100, damping: 14 }} className="absolute sm:-top-9 sm:-right-8 -top-7 -right-6 -rotate-12">
                <Image
                    src="/images/Victor.jpg"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto sm:w-14 w-12 rounded-full"
                />
            </motion.div>
        </div>
    )
}