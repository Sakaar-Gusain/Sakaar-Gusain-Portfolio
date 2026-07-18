
const Box = ({ title, skills }) => {
    return (
        <div className="px-3 py-3 rounded-2xl
              bg-black/40
                backdrop-blur-lg
                border border-orange-400/20
                shadow-xl shadow-red-500/10 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">
            <h1 className="flex align-center text-2xl font-bold  text-orange-500 mb-3">{title}</h1>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-white space-y-2">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}


const Skills = () => {
    
    return (
        <div className="w-full py-10 scroll-mt-45 " id="skills">
            <section className="flex flex-1 flex-col items-center justify-center px-6 text-center font-sans" >
                <h2 className="bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-10 text-5xl font-bold ">Technical Skills</h2>
            </section>
            <div className="grid grid-cols-4 gap-4 px-6">
                <Box
                    title="💻 Programming Languages"
                    skills={[
                        "Python",
                        "C++",
                        "JavaScript",
                        "R",
                        "HTML",
                        "CSS",
                    ]}
                />
                 <Box
                    title="🧠 Core CSE concepts"
                    skills={[
                        "DBMS",
                        "MySQL",
                        "Operating System",
                        "DSA"
                        
                    ]}
                />

                <Box
                    title="🌐 Web Development"
                    skills={[
                        "React.js",
                        "Node.js",
                        "FastAPI",
                        "Tailwind CSS",
                    ]}
                />

                <Box
                    title="📊 Data Science & Analytics"
                    skills={[
                        "NumPy",
                        "Pandas",
                        "Scikit-learn",
                        "Matplotlib",
                        "Seaborn",
                        "Power BI",
                        "Statistics"
                        
                        
                    ]}
                />
            </div>
        </div>
    );
}
export default Skills;