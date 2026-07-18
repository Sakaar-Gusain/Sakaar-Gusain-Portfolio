const Experience = () => {
    const steps = [
        {
            company: "Digital 360",
            title: "Data Analyst intern",
            subtitle: "8 June 2026 - Ongoing; Dehradun, Uttarakhand",
            content: "Python, Numpy, Pandas, Seaborn, Excel, NextJs, ReactJs, TailwindCSS, FastApi,"
        },
        {
            company: "Microsoft Elevate-AICTE Internship",
            title: "PowerBi-Business Intelligence",
            subtitle: "16 February 2026 - 18 March 2026; Remote",
            content: "PowerBi, DAX, Data visualization, Excel, Data Cleaning, Dashboard Building",
        },
        {
            company: "Labmentix",
            title: "Data Science Intern",
            subtitle: "15 May 2025-24 July 2025; Remote",
            content: "Python, Numpy, Pandas, Seaborn,Scikit-Learn, Supervised Learning, Unsupervised Learning, Data Cleaning, Excel, Machine Learning",
        },
        {
            company: "M/s Jio Digital Fibre Pvt Ltd",
            title: "Data Science Intern",
            subtitle: "17 February 2025 - 28 March 2025; Bhopal, Madhya Pradesh",
            content: "Python, Numpy, Pandas, Seaborn, Data Cleaning, Data Visualization, Matplotlib, MySQL",
        },

    ];

    return (
        <div id="experience" className="scroll-mt-45  py-3">
            <section className="flex flex-col items-center justify-center px-6  text-center font-sans">
                <h1 className="text-5xl font-bold text-center bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent py-2 mb-8">Work Experience</h1>
            </section>
            <div className="relative max-w-6xl mx-auto mt-10">

                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-red-600/50 -translate-x-1/2"></div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center mb-16 ${index % 2 === 0
                            ? "justify-start"
                            : "justify-end"
                            }`}
                    >


                        <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-conic-360 from-orange-500 via-red-600 to-orange-400 text-white flex items-center justify-center font-bold z-10">
                            {index + 1}
                        </div>



                        <div className="group w-107.5 bg-[#0f0f0f] p-8 rounded-3xl shadow-md transition-all duration-300 hover:cursor-pointer shadow-red-600">

                            <h1 className="text-2xl font-bold bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                                {step.company}
                            </h1>

                            <h3 className="text-2xl font-bold text-orange-400 mb-4">
                                {step.title}
                            </h3>

                            <div className=" max-h-0
                                    overflow-hidden
                                    opacity-0
                                    transition-all
                                    duration-300
                                    group-hover:max-h-32
                                    group-hover:opacity-100">

                                <p className="italic text-white mb-2">
                                    {step.subtitle}
                                </p>

                                <p className="text-white leading-relaxed">
                                    {step.content}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;