"use client"
import { motion } from "framer-motion";
import Image from "next/image"

export default function Cli(){
    return(
        <motion.div animate={{x : 0 , rotate : -20}} initial={{x : 500 }} transition={{ type: "spring" }} className="absolute top-11 lg:-right-28 md:-right-36 -right-36 -rotate-12">
            <div className="relative">
                <Image
                    src="/images/git-style-cli.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto md:w-[100px] sm:w-[90px] w-[80px] absolute md:-left-24 -left-20"
                />
                <Image
                    src="/images/cli.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto lg:w-[420px] md:w-[350px] sm:w-[270px] w-[250px] rounded-full"
                />
            </div>
        </motion.div>
    )
}