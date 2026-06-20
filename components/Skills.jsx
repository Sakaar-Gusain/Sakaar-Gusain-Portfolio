const Skills = () => {
    const s = [
        "Python","C++","Data Structure and Algorithms","MySQL","Database Management Systems","Numpy","Pandas","Matplotlib","Seaborn",
        "Scikit-learn","PowerBi","Excel", "Data Analytics","Data Science","Data Cleaning","Exploratory Data analytics","Statistcal analysis",
        "Probability functions","Machine Learning Techniques","FastApi","HTML","CSS","Javascript","React-JS","Node-JS","TailwindCSS"
    ];
    return (
        <div className="w-full py-10 scroll-mt-45" id="skills">
            <section className="flex flex-1 flex-col items-center justify-center px-6 text-center font-sans" >

                <h1 className="bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-10 text-5xl font-bold ">Technical Skills</h1>
            </section>

            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 ">

                {s.map((s, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 text-white border border-orange-600 rounded-full inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5 shadow-md shadow-red-400"
                    >
                        {s}
                    </div>
                ))}

            </div>
        </div>
    );
}
export default Skills;