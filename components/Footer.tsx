import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer id='footer' className="flex flex-col md:flex-row w-full ">
            {/* Left Column - Brand */}
            <div className="w-full md:w-[40%] bg-orange-200 p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="z-10 mt-12">
                    <h2 className="text-4xl font-bold font-bebas-neue text-black mb-2 tracking-wide">ROBERT</h2>
                    <p className="text-sm font-medium text-neutral-600 tracking-wider">I AM A FRONT-END DEVELOPER</p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6 z-10 mb-12">
                    {/* Instagram */}
                    <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    {/* X (Twitter) */}
                    <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                </div>

                {/* Decorative Diagonal Lines */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-[120%] h-4 bg-[#dcbca0] -rotate-45 transform origin-bottom-left translate-y-12 opacity-50"></div>
                    <div className="absolute bottom-16 left-0 w-[120%] h-4 bg-[#dcbca0] -rotate-45 transform origin-bottom-left translate-y-12 opacity-50"></div>
                    <div className="absolute bottom-32 left-0 w-[120%] h-4 bg-[#dcbca0] -rotate-45 transform origin-bottom-left translate-y-12 opacity-50"></div>
                </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="w-full md:w-[60%] bg-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 z-10">
                    {/* Features */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-black mb-2">Features</h3>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Core features</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Pro experience</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Integrations</Link>
                    </div>

                    {/* Learn more */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-black mb-2">Learn more</h3>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Blog</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Case studies</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Customer stories</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Best practices</Link>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold text-black mb-2">Support</h3>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Contact</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Support</Link>
                        <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Legal</Link>
                    </div>
                </div>

                {/* Large Background Text */}
                <div className="absolute bottom-[-10%] right-0 w-full pointer-events-none select-none overflow-hidden">
                    <h1 className="text-[120px] md:text-[200px] font-bebas-neue font-bold text-gray-100 leading-none tracking-widest text-right pr-4">
                        DEVELOPER
                    </h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer
