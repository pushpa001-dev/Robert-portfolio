"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef(null);

    useGSAP(() => {
        // Image Animation
        gsap.from(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            rotate: -10,
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        // Text Animation
        const textElements = (textRef.current as any).children;
        gsap.from(textElements, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Stats Animation
        const statElements = (statsRef.current as any).children;
        gsap.from(statElements, {
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            scale: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });

    }, { scope: container });

    return (
        <section ref={container} id="about" className="py-20 px-6 md:px-16 lg:px-24 bg-white text-black overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
                    <div ref={imageRef} className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-500">
                        <Image
                            src="/robert-about.jpg"
                            alt="About Robert"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay/Tint if needed, keeping it clean for now */}
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -z-10 top-10 -left-10 w-[300px] h-[400px] md:w-[400px] md:h-[500px] border-2 border-orange-400 rounded-2xl rotate-3"></div>
                </div>

                {/* Text Side */}
                <div ref={textRef} className="w-full md:w-1/2 flex flex-col space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="w-12 h-0.5 bg-orange-500"></span>
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bebas-neue leading-tight">
                        Transforming visions into <br /> <span className="text-gray-400">digital reality</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        I am a passionate Frontend Developer with a keen eye for design and a drive for creating seamless user experiences. With a strong foundation in modern web technologies, I specialize in building responsive, accessible, and performant web applications.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        My journey in tech is fueled by curiosity and a commitment to continuous learning. Whether it's mastering the latest framework or optimizing code for speed, I'm always looking for ways to improve and innovate.
                    </p>

                    <div ref={statsRef} className="pt-4 flex gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-black">3+</h3>
                            <p className="text-gray-500 text-sm mt-1">Years of Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-black">50+</h3>
                            <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-black">20+</h3>
                            <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
