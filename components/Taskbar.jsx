"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa";
const Taskbar = () => {
    
    const handleNavClick = (id) => {
        document.getElementById(id)?.scrollIntoView({
            block: "start",
        });
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#1e1e1f]/40 backdrop-blur-md
                flex flex-wrap items-center justify-between
                px-4 md:px-6 py-3 md:py-5">
            
            <div className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold sm:text-2xl md:text-3xl mt-3 mb-1">Sakaar Gusain</div>

            <div className="order-3 md:order-0
                w-full md:w-auto
                flex flex-wrap justify-center
                gap-3 sm:gap-4 md:gap-5
                mt-3 md:mt-0">

                <button onClick={() => handleNavClick("main")}
                    className="text-mx sm:text-base  text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"
                >Home</button>

                <button onClick={() => handleNavClick("experience")}
                    className="text-md sm:text-base text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"
                >Experience</button>

                <button onClick={() => handleNavClick("skills")}
                    className="text-md sm:text-base text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"
                >Skills</button>

                <button onClick={() => handleNavClick("proj")}
                    className="text-md sm:text-base text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"
                >Projects</button>

                <button onClick={() => handleNavClick("edu")}
                    className="text-md sm:text-base text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"
                >Education</button>

                <button
                    onClick={() => handleNavClick("social")}
                    className="text-md sm:text-base text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"
                >Socials</button>
            </div>

            <div className=" flex items-center rounded-full mr-6 gap-4 md:gap-8">
                <a href="https://github.com/Sakaar-Gusain" className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full text-3xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/sakaar-gusain-545241252/" className="flex h-10 w-10 items-center justify-center rounded-md text-3xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                    <FaLinkedin />
                </a>
                
            </div>
        </nav>
    );
}

export default Taskbar;