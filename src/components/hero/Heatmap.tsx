"use client"
import { useIsScrolled } from "@/hooks/Scroll";
import { motion } from "framer-motion";
import Image from "next/image"

export default function Heatmap(){
    const isScrolled = useIsScrolled();
    return (
        <motion.div className="fixed top-32 lg:left-0 md:-left-10 -left-14 -rotate-12" animate={isScrolled ? { x : -280, rotate : -20 } : { x : 0, rotate : -20 }} initial={isScrolled ? {x : 0} : {x : -280}} transition={{ type: "spring", stiffness: 80, damping: 12 }}>
            <div>
                <Image
                    src="/images/your-commitments.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto md:w-[140px] rotate-12 sm:w-[120px] w-[100px] absolute lg:right-11 md:right-5 -right-6 md:-bottom-16 sm:-bottom-12 -bottom-8"
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