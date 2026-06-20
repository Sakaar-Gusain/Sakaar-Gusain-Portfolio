import Taskbar from "@/components/Taskbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Social from "@/components/Social";

export default function Home() {
  return (
    <div className=" min-h-screen dark:bg-black">

      <Taskbar/>
      <Main/>
      <Experience/>
      
      <Skills/>
      <Project/>
      <Education/>
      <Social/>
      <Footer />  
    </div>
  );
}
