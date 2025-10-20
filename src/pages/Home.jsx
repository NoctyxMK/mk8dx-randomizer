
import { Link } from "react-router-dom";

import { useEffect } from "react";
import mk8dx_logo from "../assets/mk8dx_logo.png"

const background_array = Object.values(import.meta.glob("../assets/background/*.png", {as: "url", eager: true}));

function Home() {


    useBackground();

    return (
      <div className="main">
        
        <Header />
        <Nav_select />

      </div>
    );
}

function useBackground(){

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

        return () => {
          document.documentElement.style.backgroundImage = "";
        };
    
      }, []);  

}


function Header(){

  return (
    <>
    <div className="header">
          <h1>MK8DX Randomizer</h1>
          <img src={mk8dx_logo} alt="mk8dx logo"/>

    </div>
        
    <div className="bar"></div>
    </>
  )

}


function Nav_select(){

  return (
      <div className="nav_page_select">
        <Link to="/items"><button><span>➜ Item Randomizer</span></button></Link>
        <Link to="/combos"><button><span>➜ Combo Randomizer</span></button></Link>

      </div>
  )

}

export default Home;


//<Link to="/combos">Combo Randomizer</Link>
//<br />
//<Link to="/items">Item Randomizer</Link>
