
const Boxes = ({image,title,skills,link, inline}) => {
    return (
        <div className="mx-5 my-4 px-4 py-4  w-90 rounded-2xl
              bg-black/40
                backdrop-blur-lg
                border border-orange-400/20
                shadow-xl shadow-red-500/10 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">
            <img src={image} alt={title} className="w-auto h-60 px-2 py-2 object-cover flex items-center"/>
            <h3 className =" flex align-center font-bold  text-orange-500 mt-3 mb-3">{title}</h3>
            <p className="text-white text-sm mt-3 mb-3">{skills}</p>
            <a href={link} target="_blank" className="px-2 py-2 my-3  text-white rounded-md inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5 hover:shadow-md hover:shadow-red-600/0 bg-linear-to-r from-orange-400 via-orange-500 to-red-500">{inline}</a>
        </div>
    );
}

export default Boxes;