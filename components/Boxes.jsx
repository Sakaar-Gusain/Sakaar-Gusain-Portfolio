const Boxes = ({image,title,skills,link, inline}) => {
    return (
        <div className="mx-10 my-4 px-4 rounded-lg w-100 bg-[#29292a] shadow-md border-orange-300 shadow-orange-500 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5">
            <img src={image} alt={title} className="w-auto h-auto px-2 py-2 object-cover"/>
            <h3 className =" flex align-center font-bold text-white mt-3 mb-3">{title}</h3>
            <p className="text-white mt-3 mb-3">{skills}</p>
            <a href={link} target="_blank" className="px-3 py-3 m-3  text-white rounded-full inline-block transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5 bg-linear-to-r from-orange-400 via-orange-500 to-red-500">{inline}</a>
        </div>
    );
}

export default Boxes;