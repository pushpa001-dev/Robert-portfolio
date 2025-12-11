"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loader() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [show, setShow] = useState(true);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setShow(false);
            }
        });

        // Initial text animation
        tl.from(textRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.2,
            ease: "power3.out"
        })
            .to(textRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in",
            })
            // Slide up the container
            .to(containerRef.current, {
                yPercent: -100,
                duration: 0.5,
                ease: "power4.inOut"
            });

    }, { scope: containerRef });

    if (!show) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[99999] flex items-center justify-center bg-zinc-900 border-b-2 border-orange-300">
            <div className="overflow-hidden">
                <h1 ref={textRef} className="text-6xl md:text-9xl font-bebas-neue text-orange-200 tracking-widest uppercase">
                    Robert
                </h1>
            </div>
        </div>
    );
}
