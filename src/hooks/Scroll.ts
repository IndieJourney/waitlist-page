import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function useIsScrolled(){
    const [isScrolled , setScrolled] = useState<boolean>(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY,"change", (latest) => {
        if(latest >= 100){
            setScrolled(true);
        }
        if(latest < 100){
            setScrolled(false);
        }
        console.log(isScrolled);
    })
    return isScrolled
}

export {
    useIsScrolled
}