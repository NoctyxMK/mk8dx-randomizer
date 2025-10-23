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
    
    
  };

  const handleReset = () => {
    const indices = selectItem(22);
    setFadedIndices(indices);
   
  };


  const handleTheme  = (theme) => {
      const indices = items_theme(theme)
      setFadedIndices(indices);
  }


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

      <div className="themes_selection">

      <button className="theme_button" onClick={() => handleTheme("Shlag-Master")}>
        Shlag-Master
      </button>

      <button className="theme_button" onClick={() => handleTheme("Japan-Lounge")}>
        Japan-Lounge
      </button>

      <button className="theme_button" onClick={() => handleTheme("Bomberman")}>
        Bomberman
      </button>

      <button className="theme_button" onClick={() => handleTheme("Monkey-Monkey")}>
        Monkey-Monkey
      </button>

      <button className="theme_button" onClick={() => handleTheme("Steroids")}>
        Steroids
      </button>

      <button className="theme_button" onClick={() => handleTheme("Boo-Kkake")}>
        Boo-Kkake
      </button>

      <button className="theme_button" onClick={() => handleTheme("Crazy-Blue")}>
        Crazy-Blue
      </button>

    </div>


      </>
  )

}



function items_theme(theme) {

  switch (theme){
    case "Shlag-Master":
      return [0,2,4,7,8,9,10,11,12,13,14,18,20,21] 
    
    case "Japan-Lounge":
      return [0,1,2,4,8,9,10,11,14,20] 

    case "Bomberman":
      return [0,1,2,3,4,5,8,9,12,15,16,17,18,19,20,21] 

    case "Monkey-Monkey":
      return [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21]

    case "Steroids":
      return [0,1,2,3,4,7,8,10,12,15,16,17,18,20]

    case "Boo-Kkake":
      return [0,1,2,3,4,5,7,8,9,10,11,13,14,15,16,18,20]

    case "Crazy-Blue":
      return [0,1,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,20,21] 

  }


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
