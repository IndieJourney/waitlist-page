import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function useIsScrolled(){
    const [isScrolled , setScrolled] = useState<boolean>(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY,"change", (latest) => {
        if(latest >= 300){
            setScrolled(true);
        }
        if(latest < 300){
            setScrolled(false);
        }
        console.log(isScrolled);
    })
    return isScrolled
}

export {
    useIsScrolled
}