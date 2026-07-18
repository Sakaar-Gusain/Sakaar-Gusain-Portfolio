"use client";
import { FaGithub,FaLinkedin } from "react-icons/fa";
const Social =  () => {
    const sendMessage = async (e) => {

  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(formData),
  });

  if (res.ok) {

    alert("Message sent!");

    e.target.reset();

  } else {

    alert("Failed to send message");
  }
};
    return (
        
        <div id="social" className="scroll-mt-40 flex flex-col items-center justify-center px-6 mb-20 gap-6 text-center">
            <div className="font-sans">
                <h1 className="text-5xl font-bold text-center bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent py-2 mb-8">Socials</h1>
            </div>

            <div className=" mt-4 border-2 border-orange-300 w-120 rounded-lg flex flex-auto p-6 shadow-md shadow-orange-500 justify-center gap-12 transition-transform duration-300 ease-in-out hover:-translate-y-1.5">
                <a href="https://github.com/Sakaar-Gusain" className="flex items-center gap-2 px-6 py-3 w-auto rounded-lg bg-linear-to-r from-orange-400 via-orange-500 to-red-500 font-semibold text-white  hover:border-white shadow-md shadow-red-400  transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"><FaGithub className="h-8 w-8"/>Github</a>
                <a href="https://www.linkedin.com/in/sakaar-gusain-545241252/" className=" flex items-center gap-2 px-6 py-3  w-auto rounded-lg bg-linear-to-r from-orange-400 via-orange-500 to-red-500 font-semibold text-white  hover:border-white shadow-md shadow-red-400 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5"><FaLinkedin className="h-8 w-8"/>LinkedIn</a>

            </div>

            <form onSubmit={sendMessage} className="w-150 bg-[#0f0f0f] border-2 border-orange-300 shadow-md shadow-orange-500 rounded-lg p-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out hover:-translate-y-1.5">

            
                <div className="flex flex-col gap-4 flex-1">
                    <h1 className="text-2xl text-orange-300 font-serif">Send me a Message!</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="text-white border border-white p-3 rounded bg-translucent"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Gmail"
                        className="text-white border border-white p-3 rounded bg-translucent"
                        required
                    />
                </div>

            
                <div className="flex flex-col gap-4 flex-1">

                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={6}
                        className="text-white border border-white p-3 rounded bg-translucent resize-none"
                        required
                    />

                    <button
                        type="submit"
                        className="self-center bg-linear-to-r from-orange-400 via-orange-500 to-red-500 text-white px-6 py-3 rounded hover:bg-orange-600 hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
                    >
                        Send
                    </button>

                </div>

            </form>


        </div>
    );
}

export default Social;