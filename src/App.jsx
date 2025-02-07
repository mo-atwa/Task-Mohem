import { useState, useEffect } from "react";
import './App.css'
import LoadingScreen from "./LoadingScreen";
import Content from "./Content";

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000); // Change the delay to 9000ms

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          // Add your logic here
        }
      });
    };
    //test comment

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return <LoadingScreen />;
  
  return (
    <>
    <Content />
    </>
  );
}

export default App
