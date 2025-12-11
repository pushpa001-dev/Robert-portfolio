"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => {
    return useContext(LenisContext);
};

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis();
        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
};

export default SmoothScroll;
