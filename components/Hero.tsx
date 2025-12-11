"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenis } from './SmoothScroll';

const Hero = () => {
    const container = useRef(null);
    const textContainer = useRef(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const decorativeDiv = useRef(null);
    const decorativeLines = useRef(null);
    const lenis = useLenis();

    const handleScroll = (targetId: string) => {
        if (lenis) {
            lenis.scrollTo(targetId);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline();

        // Staggered Text Entrance
        // Use a more specific selector to avoid targeting unwanted elements
        const textElements = textContainer.current ? (textContainer.current as HTMLElement).querySelectorAll('h1, h2, p, button') : [];

        tl.from(textElements, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.2
        })

            // Ensure buttons are visible if for some reason opacity stays 0
            .to(textElements, { opacity: 1, duration: 0 })

            // Image Entrance
            .from(imageContainer.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=1")

        // Decorative Elements Entrance & Loop
        gsap.from(decorativeDiv.current, {
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5
        });

        gsap.to(decorativeDiv.current, {
            y: 20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.from(decorativeLines.current, {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5
        });

        gsap.to(decorativeLines.current, {
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: container });

    return (
        <section ref={container} id="hero" className=" border-t-2 border-orange-200 relative flex flex-col-reverse xl:flex-row items-center justify-between min-h-screen px-6 py-12 md:px-16 lg:px-24 bg-white text-black overflow-hidden pt-24 md:pt-0">
            {/* Text Content */}
            <div ref={textContainer} className="w-full  md:w-1/2  flex flex-col items-start md:items-end space-y-8 z-10 mt-10 md:mt-0">
                <div className="space-y-2 w-full text-start md:text-start text-shadow">
                    <h1 className="text-6xl md:text-9xl lg:text-[150px] font-bebas-neue  text-black">
                        HI,I'm <span className="text-black">Robert</span>
                    </h1>
                    <h2 className="text-4xl md:text-4xl 2xl:text-6xl font-bebas-neue w-full text-black">
                        Frontend Developer
                    </h2>
                    <p className="text-xl md:text-2xl xl:text-5xl text-neutral-500 w-full text-start font-bebas-neue ">
                        i build responsive , <br />interactive landing pages
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button onClick={() => handleScroll('#my-work')} className="px-10 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-neutral-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            View My Work
                        </button>
                        <button onClick={() => handleScroll('#footer')} className="px-10 py-4 bg-transparent border-2 border-gray-200 text-black text-lg font-medium rounded-full hover:bg-neutral-50 transition-all duration-300 hover:border-black hover:-translate-y-1">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10 px-4 md:px-0">
                <div ref={imageContainer} className="relative w-full max-w-[350px] md:max-w-[550px] lg:max-w-[650px] aspect-square flex items-center justify-center">
                    {/* Circle Background */}
                    <div className="relative overflow-hidden w-[85%] h-[85%] bg-orange-200  rounded-full top-10 bottom-0 right-0">

                        <Image
                            src="/robert-hero.png"
                            alt="Robert"
                            fill
                            className=" absolute object-cover  z-10"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div ref={decorativeDiv} className='absolute top-[-20%] left-[-5%]'>
                <p className='text-[200px] xl:text-[400px] -rotate-45 font-bebas-neue font-bold opacity-20'>DIV</p>
            </div>
            <div ref={decorativeLines} className='absolute bottom-[-30%] right-[-5%]'>
                <p className='text-[200px] xl:text-[400px]  font-bebas-neue font-bold opacity-20'>IIIIIIIIIII</p>
            </div>
        </section>
    )
}

export default Hero
