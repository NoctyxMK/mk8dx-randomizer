import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../styles/Track.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'



const tracks_array = [
    "bad", "batd", "bbb","bbc3","bbl","bc","bcma","bcmo","bdc","bdct","bdd",
    "bdkm","bkc","bkd","blal","bll","bmc","bmc3","bmd","bmg","bmh","bmm","bmt",
    "bnh","bnym","bpg","bpp","bppc","bra","briw","brr7","brrm","brrw","bscs",
    "bsg","bshs","bsl","bsr","bss","bssy","bsw","btb","btc","bvv","bwp","bws",
    "cc","dac","dbb","dbp","dcl","ddd","dea","dhc","diio","dmc","dnbc","drir",
    "drr","rddd","ds","dsbs","dwgm","dww","ed","mc","mks","mw","rccb","rdkj",
    "rdp3","rgv","rmc","rmmm","rmp","rpps","rr","rrrd","rrry","rsl","rtt",
    "rttc","rws","ryc","ryv","sa","sgf","ssc","th","tm","tr","wp", "brp", "bdks",
    "byi", "bbr"
];

const trackImages = import.meta.glob("../assets/tracks/*.{png,webp}", { 
  as: "url", 
  eager: true 
});

const trackImageMap = {};
for (const path in trackImages) {
  const filename = path.split("/").pop();
  const name = filename.split(".")[0]; 
  trackImageMap[name] = trackImages[path];
}

function TrackRandomizer(){

    useBackground();

    return (
        <>
        <Header />
        <div className="main">
            
            <Nav_select />
            <Track_selection />
            
        </div>
        <Footer />
        </>
    )

}



function useBackground(){

  useEffect(() => {
          document.title = "MK8DX Track Randomizer";
          Object.values(trackImageMap).forEach((src) => {
            const img = new Image()
            img.src = src
          })
  
      }, []);  

}


function Nav_select(){

  return (
      <div className="nav_page_select">
        <Link to="../"><button><span>➜ Home Page</span></button></Link>
        <Link to="/items"><button><span>➜ Item Randomizer</span></button></Link>
        <Link to="/combos"><button><span>➜ Combo Randomizer</span></button></Link>

      </div>
  )

}

function Track_selection() {
    const ANIMATION_DURATION = 350;

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const [count, setCount] = useState(4);
    const [selectedTracks, setSelectedTracks] = useState([])

    const handleRandomize = async () => {
        
        setSelectedTracks([])
        const newTracks = selectTracks(count)
        
        for(let i=0; i<newTracks.length; i++){
            setSelectedTracks(prev => [...prev, newTracks[i]])
            await sleep(ANIMATION_DURATION)
        }
        

    }



    return(
        <>

        <div className="track">

        <div className="tracks_selection">
            
            <button className="button_random_track" onClick={handleRandomize}>
                Randomize
            </button>
            <select className="button_choose_num_track" value={count} onChange={(e) => setCount(Number(e.target.value))}>
                
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="48">48</option>
            </select>


        </div>

        <div className="display_tracks">
            
            {selectedTracks.map((index) => {

                return(
                
                <div className="map" key={index}>

                    <img src={trackImageMap[tracks_array[index]]} alt={tracks_array[index]} loading="lazy">
                    </img>

                </div>
                )
            })}

        </div>

        </div>
        
        </>
    )

}


function selectTracks(n){

    let indices = new Set();

    while (indices.size < n){
        const rand = Math.floor(Math.random() * tracks_array.length);
    
        indices.add(rand)
    
  }

    return Array.from(indices);
}


export default TrackRandomizer;