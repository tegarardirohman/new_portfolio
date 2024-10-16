import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ubah ini


const useLocomotiveScroll = (options) => {
    const scrollRef = useRef(null);
    const locomotiveInstance = useRef(null);

    useEffect(() => {
        if (scrollRef.current && !locomotiveInstance.current) {
            locomotiveInstance.current = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                ...options,
            });

            // Rebuild locomotive scroll on window resize
            const handleResize = () => {
                locomotiveInstance.current.update();
            };
            window.addEventListener("resize", handleResize);

            // Cleanup on unmount
            return () => {
                if (locomotiveInstance.current) {
                    locomotiveInstance.current.destroy();
                }
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [options]);

    return scrollRef;
};

export default useLocomotiveScroll;
