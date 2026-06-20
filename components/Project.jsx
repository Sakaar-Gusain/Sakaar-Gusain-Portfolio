import Boxes from "./Boxes";

const Project =()=>{
    return(
        <div className="h-full mt-35 scroll-mt-45 mb-30" id="proj">
            <section className="flex flex-1 flex-col items-center justify-center px-6 text-center font-sans" >
                <h1 className="bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 text-5xl py-2 font-bold ">Featured Projects</h1>
            </section>

            <div className='flex flex-wrap justify-center gap-5'>
                <Boxes
                    image="/houseprice.jpg"
                    title= "Dubai Property Price Prediction"
                    skills="Python, Numpy, Pandas, Matplotlib, Data Visualization, Seaborn, Scikit-learn,FastAPI"
                    link="https://2xsafpee3brbhsczccjg2c.streamlit.app/"
                    inline="Demo link"
                />
                <Boxes
                    image="/dash.jpg"
                    title= "SuperStore Sales Analysis PowerBi Dashboard"
                    skills="PowerBI, Data Cleaning, EDA, DAX, Data Modeling, Dashboard Visualization"
                    link="https://drive.google.com/file/d/1hRwCzvUwSLMvHNxQzUmfMheRvRmRoE4j/view?usp=sharing"
                    inline="PDF File"

                />
                <Boxes
                    image="/pp.jpg"
                    title= "PhonePe Transaction Analysis project"
                    skills="Python, Numpy, Pandas, Matplotlib, Data Visualization, Seaborn, Scikit-learn, MySQL"
                    link="https://github.com/Sakaar-Gusain/PhonePe-transaction-analysis"
                    inline="Github"
                />
                <Boxes
                    image="/ml.jpg"
                    title= "Plant Disease Detectin using ML"
                    skills="Python, Pandas, Matplotlib, Machine Learning, Deep Learning, Computer Vision"
                    link=""
                    inline="Github"
                />
            </div>
        </div>
    );
}

export default Project;