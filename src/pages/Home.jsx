import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const background_array = Object.values(import.meta.glob("../assets/background/*.png", {as: "url", eager: true}));

function Home() {

    const opacityHeader = useBackground();

    return (
      <>
      <Header opacityHeader={opacityHeader}/>
      <div className="main">
        <Nav_select />
        
      </div>

      </>
    );
}

function useBackground(){

  const [opacityHeader, setOpacityHeader] = useState(1);

  useEffect(() => {
        document.title = "MK8DX Randomizer - Home";
      
        const randomIndex = Math.floor(Math.random() * background_array.length);
        const bg = background_array[randomIndex];

        document.documentElement.style.backgroundImage = `url(${bg})`;
        document.documentElement.style.backgroundSize = "cover";
        document.documentElement.style.backgroundPosition = "center";
        document.documentElement.style.backgroundRepeat = "no-repeat";
        document.documentElement.style.backgroundAttachment = "fixed";
        document.documentElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`;
        
        setOpacityHeader(0.8);

        return () => {
          document.documentElement.style.backgroundImage = "";
          
        };
    
      }, []);

      return opacityHeader;
      
     

}



function Nav_select(){

  return (
      <div className="nav_page_select">
        <Link to="/items"><button><span>➜ Item Randomizer</span></button></Link>
        <Link to="/combos"><button><span>➜ Combo Randomizer</span></button></Link>
        <Link to="/tracks"><button><span>➜ Track Randomizer</span></button></Link>

      </div>
  )

}

export default Home;


//<Link to="/combos">Combo Randomizer</Link>
//<br />
//<Link to="/items">Item Randomizer</Link>
