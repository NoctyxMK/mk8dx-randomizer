import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import mk8dx_logo from "../assets/mk8dx_logo.png";
import qm from "../assets/item_box.png"

const characters = import.meta.glob("../assets/characters/*.png", {as: "url", eager:true});
const karts = import.meta.glob("../assets/karts/*.png", {as: "url", eager:true});
const tires = import.meta.glob("../assets/tires/*.png", {as: "url", eager:true});
const gliders = import.meta.glob("../assets/gliders/*.png", {as: "url", eager:true});

const charactersArray = Object.values(characters);
const kartsArray = Object.values(karts);
const tiresArray = Object.values(tires);
const glidersArray = Object.values(gliders);




function randomCombo() {
  const char_random = Math.floor(Math.random() * charactersArray.length);
  const kart_random = Math.floor(Math.random() * kartsArray.length);
  const tire_random = Math.floor(Math.random() * tiresArray.length);
  const glider_random = Math.floor(Math.random() * glidersArray.length);
  return [char_random, kart_random, tire_random, glider_random];
};


function ComboRandomizer() {

  const [combo, setCombo] = useState([null, null, null, null]);
  
  const handleRandomize = () => {
    const newCombo = randomCombo();
    setCombo(newCombo);
  };

  useEffect(() => {
        document.title = "MK8DX Combo Randomizer";
    }, []);  

  return (

    <div className="main">
      <div className="header">
        <h1>Combo Randomizer</h1>
        <img src={mk8dx_logo} alt="mk8dx logo"/>
        

      </div>

      <div className="bar"></div>

      <div className="random_select">
        <Link to="/items">➜ Item Randomizer</Link>
      </div>

      <div className="combo">
        <div className="perso">
          <img src={combo[0] !== null ? charactersArray[combo[0]] : qm} alt="character"/>
        </div>

        <div className="vehicules">
          <div className="vehicules_parts">
            <img src={combo[1] !== null ? kartsArray[combo[1]] : qm} alt="kart"/>
          </div>

          <div className="vehicules_parts">
            <img src={combo[2] !== null ? tiresArray[combo[2]] : qm} alt="tire" />
          </div>

          <div className="vehicules_parts">
            <img src={combo[3] !== null ? glidersArray[combo[3]] : qm} alt="glider" />
          </div>

        </div>


      </div>

      <div className="combo_random">
        <button className="random_button" onClick={handleRandomize}>
          Randomize
        </button>
      </div>

      

    </div>

  );
}

export default ComboRandomizer;
