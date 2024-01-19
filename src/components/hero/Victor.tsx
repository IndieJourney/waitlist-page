"use client"
import { motion } from "framer-motion";
import Image from "next/image"

export default function Victor() {
    return (
        <motion.div animate={{y : 0 , rotate : -20}} initial={{y : 400}} transition={{ type: "spring" }} className="absolute bottom-8 md:right-10 right-0 -rotate-12">
            <Image
                src="/images/victor.svg"
                alt="The Logo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto lg:w-[400px] md:w-[330px] sm:w-[290px] w-[250px]"
            />
        </motion.div>
    )
}