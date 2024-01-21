import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function useIsScrolledHero(){
    const [isScrolled , setScrolled] = useState<boolean>(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY,"change", (latest) => {
        if(latest >= 80){
            setScrolled(true);
        }
        if(latest < 80){
            setScrolled(false);
        }
    })
    return isScrolled
}

export {
    useIsScrolledHero
}