const Education = () => {
    const steps = [
        {
            company: "B.Tech in Computer Science and Engineering",
            title: "VIT Bhopal",
            loc: "Bhopal, Madhya Pradesh, India",
            subtitle: "September 2021 - October 2025",
            content: "8.19/10 (CGPA Scale)"
        },
        {
            company: "12th Graduation (CBSE)",
            title: "International Public School",
            loc: "Bhopal, Madhya Pradesh, India",
            subtitle: "February 2020 - July 2021",
            content: "90.50%",
        },
        {
            company: "10th Graduation (CBSE)",
            title: "International Public School",
            loc: "Bhopal, Madhya Pradesh, India",
            subtitle: "March 2018 - April 2019",
            content: "93.83%",
        },

    ];

    return (
        <div id="edu" className="h-full scroll-mt-45 mb-20">
            <section className="flex flex-1 flex-col items-center justify-center px-6 text-center font-sans">
                <h1 className="text-5xl font-bold text-center bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent py-2 mb-8">Education Background</h1>
            </section>
            <div className="relative max-w-6xl mt-10 mx-auto">

                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-orange-300 hover:-translate-x-1/2"></div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center mb-16 ${index % 2 === 0
                            ? "justify-end"
                            : "justify-start"
                            }`}
                    >


                        <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-conic-360 from-orange-300 via-orange-600 to-orange-300 text-white flex items-center justify-center font-bold z-10">
                            {index + 1}
                        </div>



                        <div className="group w-107.5 bg-[#29292a] p-8 rounded-3xl shadow-md transition-all duration-300 hover:cursor-pointer shadow-red-600">



                            <h1 className="text-2xl font-bold bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                                {step.company}
                            </h1>

                            <h3 className="text-2xl font-bold text-orange-400 mb-4">
                                {step.title}
                            </h3>
                            <div className=" max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
                                <p className="text-white leading-relaxed mb-2">
                                    {step.loc}
                                </p>



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

export default Education;