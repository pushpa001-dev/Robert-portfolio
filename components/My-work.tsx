"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        image: '/project-1.png',
        description: 'Clean animated landing page for a crypto SaaS brand — hero animation, features, pricing, and CTA.'
    },
    {
        id: 2,
        image: '/project-2.png',
        description: 'A personal portfolio for freelance creatives — clean layout, smooth scroll experiences'
    },
    {
        id: 3,
        image: '/project-3.png',
        description: 'Responsive restaurant landing page with menu showcase, CTA buttons, and scroll-based food animations.'
    },
    {
        id: 4,
        image: '/project-4.png',
        description: 'Futuristic agency website — animations, service cards, logo showcase, and contact call-to-action.'
    },
    {
        id: 5,
        image: '/project-5.png',
        description: 'Travel booking landing page with interactive destination cards and a modern UI experience.'
    },
    {
        id: 6,
        image: '/project-6.png',
        description: 'Clean product page UI with gallery slider, variant selection, and call-to-action focus.'
    }
];

const MyWork = () => {
    const container = useRef(null);
    const titleRef = useRef(null);
    const cardContainerRef = useRef(null);
    const gridRef = useRef(null);

    useGSAP(() => {
        // Title Animation
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        // Card Container Animation
        gsap.from(cardContainerRef.current, {
            scrollTrigger: {
                trigger: cardContainerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.2
        });

        // Projects Staggered Reveal
        if (gridRef.current) {
            const cards = Array.from((gridRef.current as HTMLElement).children);
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }

    }, { scope: container });

    return (
        <section ref={container} id="my-work" className="relative bg-gray-100 py-24 overflow-hidden">


            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Title */}
                <h2 ref={titleRef} className="text-[100px] md:text-[150px] font-bebas-neue font-bold text-black leading-none mb-12 text-center">
                    MY WORK
                </h2>

                {/* Card Container */}
                <div ref={cardContainerRef} className="bg-[#FFF8F0] rounded-[3rem] p-8 md:p-12 shadow-xl w-full max-w-7xl">
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white group hover:scale-102  rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                                {/* Image Container */}
                                <div className="relative w-full aspect-4/3 bg-gray-200">
                                    <Image
                                        src={project.image}
                                        alt={`Project ${project.id}`}
                                        fill
                                        className=" group-hover:scale-110 object-cover transition-all duration-300"
                                    />
                                </div>
                                {/* Description */}
                                <div className="p-6 grow flex items-center">
                                    <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Triangle Decoration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            {/* Large White background behind for shape effect if needed, but styling suggests main bg is light gray */}
        </section>
    )
}

export default MyWork
