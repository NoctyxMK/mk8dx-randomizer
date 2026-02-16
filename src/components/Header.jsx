import { Link } from "react-router-dom";
import { useEffect } from "react";
import mk8dx_logo from "../assets/mk8dx_logo.png"
import '../components/Header.css'



function Header({opacityHeader = 1}){
    return(
      <header style={{ backgroundColor: `rgba(10,15,62, ${opacityHeader})`}}>
        <nav>

            <ul>

                <li>
                    <img src={mk8dx_logo} alt="mk8dx logo"></img>
                </li>

                <li><Link to="../"><span>Home</span></Link></li>
                <li><Link to="/items"><span>Item Randomizer</span></Link></li>
                <li><Link to="/combos"><span>Combo Randomizer</span></Link></li>
                <li><Link to="/tracks"><span>Track Randomizer</span></Link></li>
            
            </ul>

        </nav>
      </header>
    )
}

export default Header;


/*
<div className="header">
          <h1>Item Randomizer</h1>
          <img src={mk8dx_logo} alt="mk8dx logo"/>


        </div>

        <div className="bar"></div>

*/