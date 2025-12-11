"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenis } from './SmoothScroll';

export default function Navbar() {
    const navRef = useRef(null);
    const lenis = useLenis();
    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -1000,
            opacity: 0,
            scaleX: 0,
            duration: 1.5,
            ease: "power3.out",
        });
    }, { scope: navRef });
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(targetId);
        }
    };
    return (
        <div ref={navRef} className="fixed top-0 w-full flex items-center justify-center transform z-50 drop-shadow-2xl/20 hover:scale-105 transition-all duration-300">
            <nav className="flex items-center w-[90%] md:w-[70%] lg:w-[50%] justify-center px-6 md:px-12 py-3 md:py-4 bg-orange-200 border-b-2 border-orange-300" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}>
                <div className="flex items-center space-x-6 md:space-x-12">
                    <Link href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="text-sm md:text-lg xl:text-2xl font-bebas-neue tracking-widest text-black hover:text-neutral-600 hover:scale-120 transition-all uppercase">Robert</Link>
                    <Link href="#footer" onClick={(e) => handleScroll(e, '#footer')} className="text-sm md:text-lg xl:text-2xl font-bebas-neue tracking-widest text-black hover:text-neutral-600 hover:scale-120 transition-all uppercase">Contact</Link>
                    <Link href="#my-work" onClick={(e) => handleScroll(e, '#my-work')} className="text-sm md:text-lg xl:text-2xl font-bebas-neue tracking-widest text-black hover:text-neutral-600 hover:scale-120 transition-all uppercase">Works</Link>
                </div>
            </nav>
        </div>
    )
}
