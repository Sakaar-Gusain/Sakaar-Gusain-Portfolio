"use client"
import { TypeAnimation } from "react-type-animation";
const Main = () => {


    return (
        <div className=" mt-40 mb-45 scroll-mt-45" id="main">
            <section className="flex flex-1 flex-col items-center justify-center px-6 text-center font-sans" >

                <TypeAnimation
                    sequence={[
                        "SAKAAR GUSAIN",
                        1500,
                        "",
                        1500,
                    ]}
                    wrapper="h1"
                    speed={40}
                    repeat={Infinity}

                    className="bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 text-7xl font-bold " />

                <h2 className="mb-6 text-2xl max-w-5xl  text-justify bg-linear-to-r from-red-200 via-orange-300 to-red-400 bg-clip-text text-transparent">
                    B.Tech Graduate | Data Analyst | Data Science Enthusiast
                </h2>

                <p className="max-w-5xl text-lg text-justify bg-linear-to-r from-red-200 via-orange-300 to-red-500 bg-clip-text text-transparent">
                    Recent Graduate in Bachelor of Technology in Computer Science and Engineering from VIT Bhopal University with
                    experience in Data Analytics, Data Science, and Machine Learning.
                    Passionate about analyzing real-world datasets, building predictive
                    models, and uncovering patterns that support data-driven decisions.<br></br>
                    I’m currently looking for opportunities where I can collaborate with forward-thinking teams, tackle complex analytical challenges, and build intelligent systems that solve meaningful business or societal problems.
                </p>

            </section>

            <div className="items-center justify-center px-2 text-center font-sans mt-8 gap-8">
                <button className="rounded-lg bg-linear-to-r from-orange-400 via-orange-500 to-red-500 mr-5 px-6 py-3 font-semibold text-white inline-block hover:border-white shadow-md shadow-red-400 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5" onClick={() => {
                    document.getElementById("proj")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}>
                    View Projects
                </button>

                <button className="rounded-lg border border-white px-6 py-3 mr-5 font-semibold text-white hover:bg-white hover:text-black inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5" onClick={() => {
                    document.getElementById("social")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}>
                    Socials
                </button>

                <button className="rounded-lg bg-linear-to-r from-orange-400 via-orange-500 to-red-500 mr-5 px-6 py-3 font-semibold text-white  hover:border-white shadow-md shadow-red-400 inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5" onClick={() => window.open("/Sakaar_Gusain_resume.pdf", "_blank")}>
                    Download Resume
                </button>

            </div>
        </div>
    );
}

export default Main;