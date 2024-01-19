"use client"
import { useIsScrolled } from "@/hooks/Scroll";
import { motion } from "framer-motion";
import Image from "next/image"

export default function Z() {
    const isScrolled = useIsScrolled();
    return (
        <motion.div animate={isScrolled ? {y : 400 , rotate : 20} : {y : 0 , rotate : 20}} initial={isScrolled ? {y : 0} : {y : 400}} transition={{ type: "spring" , stiffness: 80, damping: 12 }} className="fixed bottom-0 md:left-10 left-0  rotate-12 z-10">
            <Image
                src="/images/z.svg"
                alt="The Logo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto lg:w-[400px] md:w-[330px] sm:w-[290px] w-[250px]"
            />
        </motion.div>
    )
}