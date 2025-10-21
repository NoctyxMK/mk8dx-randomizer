import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mk8dx_logo from "../assets/mk8dx_logo.png";


const items_array = [
  "Banana", "TripleBanana", "GreenShell", "TripleGreenShells", "RedShell", "TripleRedShells", 
  "SpinyShell", "Bob-omb", "Mushroom", "TripleMushroom", "GoldenMushroom", "BulletBill", 
  "Blooper", "Lightning", "Star", "FireFlower", "BoomerangFlower", "PiranhaPlant", 
  "SuperHorn", "Crazy_8", "Coin", "Boo"
];


const images = import.meta.glob("../assets/items/*.webp", { as: "url", eager:true});


//const bg_item = Object.values(import.meta.glob("../assets/bg_items.png", {as: "url", eager:true}));

const imageMap = {};
for (const path in images) {
  const name = path.split("/").pop().replace(".webp", "");
  imageMap[name] = images[path];
}



function ItemRandomizer() {
  
  useBackground();

  return (
    <div className="main">
      
      
      <Header />
      <Nav_select />
      <Items_selection />

    </div>
  );
}



function useBackground(){

   useEffect(() => {
        document.title = "MK8DX Item Randomizer";

    
    }, []);  


}



function Header(){
    return(
      <>
        <div className="header">
          <h1>Item Randomizer</h1>
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
        <Link to="/combos"><button><span>➜ Combo Randomizer</span></button></Link>

      </div>
  )

}


function Items_selection(){

  const handleRandomize = () => {
    const indices = selectItem(count);
    setFadedIndices(indices);
    //document.documentElement.style.backgroundImage = "";
    
  };

  const handleReset = () => {
    const indices = selectItem(22);
    setFadedIndices(indices);
    //document.documentElement.style.backgroundImage = `url(${bg_item})`;
  };


  const [count, setCount] = useState(1);
  const [fadedIndices, setFadedIndices] = useState([]);

  return (
    <>
    
    <div className="item">
        {items_array.map((itemName, index) => (
          <div className="item_square" key={itemName} style={{
            opacity: fadedIndices.includes(index) ? 0.1 : 1
          }}>
            <img src={imageMap[itemName]} alt={itemName}/>
          </div>
        ))}
      </div>

      <div className="item_random">

        <button className="random_button" onClick={handleRandomize}>
          Randomize
        </button>

        <div className="counter">
          <label>
            
            <input className="counter_label" type="number" min="1" max="22" defaultValue="1" value={count} 
              onChange={(e) => setCount(Number(e.target.value))}/>
          </label>
        </div>

        <button className="reset_button" onClick={handleReset}>
          Reset
        </button>

      </div>

      </>
  )

}


/*
input: n
output: Array de int
genere k nombres correspondant aux indices des objets du tableau items_array
*/
function selectItem(n) {
  const k = items_array.length - n

  const indices = new Set();

  while (indices.size < k){
    const rand = Math.floor(Math.random() * items_array.length);
    indices.add(rand);
  }

  return Array.from(indices);


}


export default ItemRandomizer;
