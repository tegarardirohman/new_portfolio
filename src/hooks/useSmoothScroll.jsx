import { useEffect, useRef } from "react";
import gsap from "gsap";

const useSmoothScroll = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let ease = 0.005; // Kecepatan scroll (semakin kecil, semakin lambat)

        let pos = window.scrollY;
        let targetPos = pos;

        const smoothScroll = () => {
            pos += (targetPos - pos) * ease;
            if (scrollContainer) {
                gsap.set(scrollContainer, { y: -pos });
            }
            requestAnimationFrame(smoothScroll);
        };

        const handleScroll = () => {
            targetPos = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        requestAnimationFrame(smoothScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollContainerRef;
};

export default useSmoothScroll;

