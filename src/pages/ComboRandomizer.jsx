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

const bg_item = Object.values(import.meta.glob("../assets/bg_items.png", {as: "url", eager:true}));



/*
Page ComboRandomizer
*/

function ComboRandomizer() {

  
  useBackground();

  return (

    <div className="main">
      
      <Header />
      <Nav_select />
      <Combo />

    
    </div>

  );
}

function useBackground(){

  useEffect(() => {
          document.title = "MK8DX Combo Randomizer";
  
          document.documentElement.style.backgroundImage = `url(${bg_item})`;
          document.documentElement.style.backgroundSize = "cover";
          document.documentElement.style.backgroundPosition = "left";
          document.documentElement.style.backgroundRepeat = "repeat";
          document.documentElement.style.backgroundAttachment = "fixed";
          document.documentElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg_item})`;
  
  
          return () => {
            document.documentElement.style.backgroundImage = "";
          }
  
  
  
      }, []);  

}


/*
Composants
*/
function Header(){
  return (
    <>
    <div className="header">
        <h1>Combo Randomizer</h1>
        <img src={mk8dx_logo} alt="mk8dx logo"/>
        

    </div>
    <div className="bar"></div>
    </>
  )
}

function Nav_select(){

  return (
      <div className="nav_page_select">
        <Link to="../"><button><span>➜ Home Page</span></button></Link>
        <Link to="/items"><button><span>➜ Item Randomizer</span></button></Link>

      </div>
  )

}

function Combo(){
  
  const [combo, setCombo] = useState([null, null, null, null]);
  
  const handleRandomize = (index) => {

    setCombo((prevCombo) => {
      const newCombo = [...prevCombo];
      let randomIndex;

      switch (index) {
        case 0:
          randomIndex = Math.floor(Math.random() * charactersArray.length)
          newCombo[0] = randomIndex
          break;
        
        case 1:
          randomIndex = Math.floor(Math.random() * kartsArray.length)
          newCombo[1] = randomIndex
          break;
        
        case 2:
          randomIndex = Math.floor(Math.random() * tiresArray.length)
          newCombo[2] = randomIndex
          break;
        
        case 3:
          randomIndex = Math.floor(Math.random() * glidersArray.length)
          newCombo[3] = randomIndex
          break;
        
        default:
          newCombo[0] = Math.floor(Math.random() * charactersArray.length)
          newCombo[1] = Math.floor(Math.random() * kartsArray.length)
          newCombo[2] = Math.floor(Math.random() * tiresArray.length)
          newCombo[3] = Math.floor(Math.random() * glidersArray.length)
      }
      return newCombo

    });

  }
  
  
  return (
    <>
    <div className="combo">
        <button className="perso" onClick={() => handleRandomize(0)}>
          <img src={combo[0] !== null ? charactersArray[combo[0]] : qm} alt="character"/>
        </button>

        <div className="vehicules">
          <button className="vehicules_parts" onClick={() => handleRandomize(1)}>
            <img src={combo[1] !== null ? kartsArray[combo[1]] : qm} alt="kart"/>
          </button>

          <button className="vehicules_parts" onClick={() => handleRandomize(2)}>
            <img src={combo[2] !== null ? tiresArray[combo[2]] : qm} alt="tire" />
          </button>

          <button className="vehicules_parts" onClick={() => handleRandomize(3)}>
            <img src={combo[3] !== null ? glidersArray[combo[3]] : qm} alt="glider" />
          </button>

        </div>


      </div>

      <div className="combo_random">
        <button className="random_button" onClick={() => handleRandomize(4)}>
          Randomize
        </button>
      </div>
      </>

  )

}



export default ComboRandomizer;

