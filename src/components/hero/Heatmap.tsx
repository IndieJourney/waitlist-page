"use client"
import { motion } from "framer-motion";
import Image from "next/image"

export default function Heatmap(){

    return (
        <motion.div className="absolute top-32 lg:left-0 md:-left-10 -left-14 -rotate-12" animate={{ x : 0, rotate : -20 }} initial={{x : -280}} transition={{ type: "spring" }}>
            <div>
                <Image
                    src="/images/your-commitments.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto md:w-[140px] md:rotate-12 rotate-45 sm:w-[120px] w-[100px] absolute lg:right-11 md:right-5 sm:-right-4 right-2 md:-bottom-16 sm:-bottom-20 -bottom-14"
                />
                <Image
                    src="/images/heatmap.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto lg:w-[260px] md:w-[210px] sm:w-[180px] w-[150px]"
                />
            </div>
        </motion.div>
    )
}