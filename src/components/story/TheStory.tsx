"use client"
import { useState, useRef, useEffect } from "react";
import { useIsScrolledHero } from "@/hooks/Scroll";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image"

export default function TheStory(){
    const isScrolled = useIsScrolledHero();
    return(
        <div className="filter drop-shadow-md backdrop-blur-2 translate-y-1 rounded-xl border border-[#F0F0F0] w-full bg-white p-7 relative">
            <div className="flex flex-row space-x-2">
                <h1 className="font-bold text-lg">Hi, here is the story!</h1>
                <div className='relative h-7 w-7'>
                    <Image
                    src="/images/grinning_face_3d.png"
                    alt="The Logo"
                    fill
                    />
                </div>
            </div>
            <p className="text-[#76777B] pt-3">I've encountered challenges connecting with fellow enthusiasts and garnering support for my indie projects without resorting to overt promotion. In response, I aim to establish a platform where like-minded individuals can showcase their profiles, emphasizing the daily dedication we invest in our projects. This space will enable us to highlight our commitments organically, without the need for excessive promotional efforts, allowing us to navigate our creative journeys at our own pace.</p>
            <AnimatePresence>
                {isScrolled ? <StoryTellingIcon /> : null}
            </AnimatePresence>
        </div>
    )
}

function StoryTellingIcon(){
    const isScrolled = useIsScrolledHero();
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
        if (!isPresent) {
          gsap.to(ref.current, {
            opacity: 0,
            onComplete: () => safeToRemove?.()
          });
        }
      }, [isPresent, safeToRemove]);

    return(
        <motion.div ref={ref} animate={isScrolled ? {rotate : -20} : {rotate : 150}} initial={isScrolled ? {rotate : 150} : {rotate : -20}} transition={{ type: "spring" , stiffness: 200, damping: 20, delay : 0 }} className="absolute sm:-top-9 sm:-right-8 -top-7 -right-6 -rotate-12">
            <div className="relative">
                <Image
                    src="/images/my-profile.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto sm:w-14 w-12 rounded-full"
                />
                <Image
                    src="/images/thought_balloon_3d.png"
                    alt="The Logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-auto sm:w-11 w-10 rounded-full absolute sm:-top-10 -top-8 -right-10"
                />
            </div>
        </motion.div>
    )
}