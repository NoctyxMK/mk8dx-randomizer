import { Link } from "react-router-dom";

import { useEffect } from "react";
import mk8dx_logo from "../assets/mk8dx_logo.png"


function Home() {


    useEffect(() => {
        document.title = "MK8DX Randomizer - Home";
    }, []);  

    return (
      <div className="main">
        
        <div className="header">
          <h1>MK8DX Randomizer</h1>
          <img src={mk8dx_logo} alt="mk8dx logo"/>

        </div>
        
        

        <div className="bar"></div>
        
        <div className="random_select">
          <Link to="/combos">➜ Combo Randomizer</Link>
          <Link to="/items">➜ Item Randomizer</Link>
        </div>

        
        
      </div>
    );
}

export default Home;


//<Link to="/combos">Combo Randomizer</Link>
//<br />
//<Link to="/items">Item Randomizer</Link>