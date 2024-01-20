"use client"
import { useIsScrolledHero } from "@/hooks/Scroll";
import { motion } from "framer-motion";
import Image from "next/image"

export default function Z() {
    const isScrolled = useIsScrolledHero();
    return (
        <motion.div animate={isScrolled ? {y : 400 , rotate : 20} : {y : 0 , rotate : 20}} initial={isScrolled ? {y : 0} : {y : 400}} transition={{ type: "spring" , stiffness: 80, damping: 12 }} className="fixed bottom-0 md:left-10 left-0  rotate-12 z-10">
            <div className="relative">
                <Image
                    src="/images/share-with-globe.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto md:w-[150px] sm:w-[120px] w-[110px] absolute -top-20 sm:left-24 left-12"
                />
                <Image
                    src="/images/z.svg"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto lg:w-[400px] md:w-[330px] sm:w-[290px] w-[250px]"
                />
            </div>
        </motion.div>
    )
}