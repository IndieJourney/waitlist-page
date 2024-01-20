"use client"
import { useIsScrolledHero } from "@/hooks/Scroll";
import { motion } from "framer-motion";
import Image from "next/image"

export default function Victor() {
    const isScrolled = useIsScrolledHero();
    return (
        <motion.div animate={isScrolled ? {y : 400 , rotate : -20} : {y : 0 , rotate : -20}} initial={isScrolled ? {y : 0} : {y : 400}} transition={{ type: "spring", stiffness: 80, damping: 12 }} className="fixed bottom-8 md:right-10 right-0 -rotate-12">
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