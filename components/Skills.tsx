"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const container = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);
    const skillsRef = useRef(null);
    const starRef = useRef(null);

    useGSAP(() => {
        // Title Animation
        const titleElements = (titleRef.current as unknown as HTMLDivElement).children;
        gsap.from(titleElements, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });

        // Timeline Line Growth
        gsap.from(timelineRef.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "bottom 80%",
                scrub: 1
            },
            scaleY: 0,
            transformOrigin: "top center",
            ease: "none"
        });

        // Skill Items Animation
        // We need to select the skill items. Since they are direct children of the container inside map or static
        // In the previous static version, they were just divs. I will add a ref to the wrapper div.
        const skillItems = (skillsRef.current as unknown as HTMLDivElement).children;
        Array.from(skillItems).forEach((item: Element, index) => {
            const direction = index % 2 === 0 ? -100 : 100; // Alternating directions

            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                x: direction,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Star Rotation
        gsap.to(starRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });

    }, { scope: container });

    return (
        <section ref={container} id="skills" className="relative min-h-screen bg-white overflow-hidden py-12 md:py-24">
            {/* Top Decoration - Dashed Lines */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-2 md:px-12 opacity-30">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-2 md:w-3 h-12 md:h-16 border-l-4 border-dashed border-gray-300"></div>
                ))}
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
                {/* Title */}
                <div ref={titleRef} className="flex items-start w-full space-x-2 md:space-x-4 mb-16 md:mb-24 mt-12">
                    <h2 className="text-6xl md:text-8xl lg:text-[120px] xl:text-[200px] font-bebas-neue font-bold text-black leading-none">MY</h2>
                    <h2 className="text-6xl md:text-8xl lg:text-[120px] xl:text-[200px] font-bebas-neue font-light text-orange-200 leading-none">SKILLS</h2>
                </div>

                {/* Timeline */}
                <div className="relative w-full max-w-4xl flex flex-col items-center">
                    {/* Central Line */}
                    <div ref={timelineRef} className="absolute top-0 bottom-0 w-1 md:w-1.5 bg-neutral-800 left-1/2 transform -translate-x-1/2"></div>

                    {/* Skill Items */}
                    <div ref={skillsRef} className="w-full h-full flex flex-col space-y-12 md:space-y-24 py-12">
                        {/* NEXT.JS - Left */}
                        <div className="flex w-full items-center">
                            <div className="w-1/2 flex justify-end pr-0 md:pr-0 relative">
                                <span className="text-2xl hover:scale-150 hover:-translate-x-10 transition-all duration-300 md:text-4xl lg:text-5xl font-bebas-neue font-bold text-black mr-4 md:mr-8 text-right">NEXT.JS</span>
                                {/* Horizontal Connector */}
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 md:w-8 h-1 bg-neutral-800"></div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>

                        {/* REACT - Right */}
                        <div className="flex w-full items-center">
                            <div className="w-1/2"></div>
                            <div className="w-1/2 flex justify-start pl-0 md:pl-0 relative">
                                {/* Horizontal Connector */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 md:w-8 h-1 bg-neutral-800"></div>
                                <span className="text-2xl hover:scale-150 hover:translate-x-10 transition-all duration-300 md:text-4xl lg:text-5xl font-bebas-neue font-bold text-black ml-4 md:ml-8">REACT</span>
                            </div>
                        </div>

                        {/* TAILWIND - Left */}
                        <div className="flex w-full items-center">
                            <div className="w-1/2 flex justify-end pr-0 md:pr-0 relative">
                                <span className="text-2xl hover:scale-150 hover:-translate-x-10 transition-all duration-300 md:text-4xl lg:text-5xl font-bebas-neue font-bold text-black mr-4 md:mr-8 text-right">TAILWIND</span>
                                {/* Horizontal Connector */}
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 md:w-8 h-1 bg-neutral-800"></div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>

                        {/* GSAP - Right */}
                        <div className="flex w-full items-center">
                            <div className="w-1/2"></div>
                            <div className="w-1/2 flex justify-start pl-0 md:pl-0 relative">
                                {/* Horizontal Connector */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 md:w-8 h-1 bg-neutral-800"></div>
                                <span className="text-2xl hover:scale-150 hover:translate-x-10 transition-all duration-300 md:text-4xl lg:text-5xl font-bebas-neue font-bold text-black ml-4 md:ml-8">GSAP</span>
                            </div>
                        </div>

                        {/* FRAMER - Left */}
                        <div className="flex w-full items-center">
                            <div className="w-1/2 flex justify-end pr-0 md:pr-0 relative">
                                <span className="text-2xl md:text-4xl hover:scale-150 hover:-translate-x-10 transition-all duration-300 lg:text-5xl font-bebas-neue font-bold text-black mr-4 md:mr-8 text-right">FRAMER</span>
                                {/* Horizontal Connector */}
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 md:w-8 h-1 bg-neutral-800"></div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Right Decoration - Star */}
            <div ref={starRef} className="absolute -bottom-24 -right-12 w-64 h-64 md:w-96 md:h-96 bg-gray-300 opacity-50 transform origin-center" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        </section>
    )
}

export default Skills
