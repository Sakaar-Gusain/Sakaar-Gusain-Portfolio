import { FaGithub,FaLinkedin  } from "react-icons/fa";
const Taskbar =() =>{
    const id="#main";
    return(
        <nav className="flex fixed top-0 z-50 w-full bg-[#1e1e1f]/40 justify-between items-center backdrop-blur-md py-5 px-6">
            <div className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold text-3xl mt-3 mb-1">Sakaar Gusain</div>
        
            <div className="flex gap-5">
                <a className="text-md text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5" href={id}>Home</a>
                
                <a href="#experience" className="text-md text-orange-500 hover:text-orange-700  inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">Experience</a>
                <a href="#skills" className="text-md text-orange-500 hover:text-orange-700  inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">Skills</a>
                <a href="#proj" className="text-md text-orange-500 hover:text-orange-700  inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">Projects</a>
                <a href="#edu"className="text-md text-orange-500 hover:text-orange-700  inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">Education</a>
                <a href="#social" className="text-md text-orange-500 hover:text-orange-700 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">Socials</a>
            </div>
            
            <div className=" flex items-center  rounded-full mr-6 gap-10">
                <a href="https://github.com/Sakaar-Gusain" className="flex h-10 w-10 items-center justify-center rounded-full text-3xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                   <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sakaar-gusain-545241252/" className="flex h-10 w-10 items-center justify-center rounded-full text-3xl text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                    <FaLinkedin/>
                </a>
            </div>
        </nav>
    );
}

export default Taskbar;