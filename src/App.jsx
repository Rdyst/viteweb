import React, { useState } from 'react'

import sass from "./images/sass.svg"
import vite from "./images/vite.svg"
import react from "./images/react.svg"
import audacity from "./images/audacity.svg"
import fl from "./images/fl.svg"
import ue from "./images/ue.svg"
import blender from "./images/blender.svg"
import vsc from "./images/vsc.svg";
import Carousel from './Carousel/Carousel'
import bobr from "./images/bobr-removebg.webp"
import kebab from "./images/kebab.png"
import tunki from "./images/tunki.webp"
import sasa from "./images/dev/sasa.webp"
import pepa from "./images/dev/PP.webp"
import chujbob from "./images/dev/chujbob.webp"
import miguel from "./images/dev/Miguel.webp"
import gulag from "./images/dev/gulagpfp.png"
import toast from "./images/dev/toast.png"
import arrowback from "./images/back-arrow.svg"
import projectsbg from "./images/projectbg.png"
import './App.css';


// HTML CAST PRO NAVIGACI/NAZEV

const negr = <div class="navigacebg">
<div class="navigace">
<h1 id='news'>Napicu™</h1>
</div>
</div>

// HTML CAST KEBAB MENU

const burger = <>
<div class="menucontainer" >
  <img class="kebab" src={kebab} onClick={dropkebab} />
  <div id='kebab'>

  </div>
  </div>
</>

let cislo = 1
let oc = 1

// FUNKCE PRO KEBAB MENU
function dropkebab(){




  if (oc % 2 !== 0){

  document.getElementById("kebab").setAttribute("class","")

  const news = document.createElement('a');
 
  news.textContent = "News";
  news.setAttribute("id","kebabtext");
  news.setAttribute("href","#news");


  document.getElementById("kebab").appendChild(news);

  const about = document.createElement('a');
  about.textContent = "About Us";
  about.setAttribute("id","kebabtext");
  about.setAttribute("href","#about");
  document.getElementById("kebab").appendChild(about);

  const tools = document.createElement('a');
  tools.textContent = "Tools";
  tools.setAttribute("id","kebabtext");
  tools.setAttribute("href","#tools");
  document.getElementById("kebab").appendChild(tools);

  const dev = document.createElement('a');
  dev.textContent = "Dev Team";
  dev.setAttribute("id","kebabtext");
  dev.setAttribute("href","#dev");
  document.getElementById("kebab").appendChild(dev);

  const projects = document.createElement('a');
  projects.textContent = "Projects";
  projects.setAttribute("id","kebabtext");
  projects.setAttribute("href","#projects");
  document.getElementById("kebab").appendChild(projects);






  cislo++
  oc++
  } else {
    oc--
    document.getElementById("kebab").setAttribute("class","kebaback")
    const smazat = document.getElementById("kebab")
    smazat.innerHTML = "";
  }





}
// KONEC FUNKCI PRO KEBAB MENU

// ABOUT US HTML CAST
const about = <div class="about" >
  <h1 id="about">About Us</h1>
  <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam id dolor. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed convallis magna eu sem. Ut tempus purus at lorem. Aliquam ornare wisi eu metus. Duis pulvinar. Curabitur sagittis hendrerit ante. Praesent dapibus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aliquam id dolor. Mauris metus. Nam sed tellus id magna elementum tincidunt. Sed ac dolor sit amet purus malesuada congue. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Maecenas aliquet accumsan leo. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Integer tempor.</p>
</div>


// TOOLS HTML CAST
const tools =      <>
<div class="tools" id='tools'>
<a href="https://code.visualstudio.com" target="_blank"><img class="svg" id="vsc" src={vsc} /></a>
<a href="https://www.blender.org" target="_blank"><img class="svg" id="blender" src={blender} /></a>
<a href="https://www.unrealengine.com/en-US/unreal-engine-5" target="_blank"><img class="svg" id="ue" src={ue} /></a>
<a href="https://www.image-line.com" target="_blank"><img class="svg" id="fl" src={fl} /></a>
<a href="https://www.audacityteam.org" target="_blank"><img class="svg" id="audacity" src={audacity} /></a>
</div>
<div class="tools2" id='tools2'>
<a href="https://react.dev" target="_blank"><img class="svg" id="react" src={react} /></a>
<a href="https://vitejs.dev/guide/" target="_blank"><img class="svg" id="vite" src={vite} /></a>
<a href="https://sass-lang.com" target="_blank"><img class="svg" id="sass" src={sass} /></a>
</div>
</>





// TUNKI SPONSOR HTML CAST

const sponsor = <div class="sponsorkon">
<p>Sponsored By</p>
<a href="https://tunki.pages.dev" target="_blank"><img class="tunki" src={tunki} /></a>
</div>



// DEV TEAM HTML CAST
const devteam = <div class="devkon">

  <h2 id="dev">Dev Team</h2>
  <span id="zavrittlacitko" class="negr" onClick={zpet}><img class="arrowback" src={arrowback} /></span>
  <div className="devteam" id="devteam">
    {/* onclick veci jsou = sasastav,pepastav,chujbobstav,miguelstav,gulagstav,toaststav,backgroundclass,dlouhytext,kratkytext...  */}
    <img class="sasadev pfp" id="sasa" src={sasa} onClick={() => popiszmena("zobrazenapfp","negr","negr","negr","negr","negr","devcss sasabg anim",'" Neni to prd ,je to sračka" - sasa',"Rdyst A.K.A sasa<br><br>- Web Creator <br><br> - Main Web Programmer <br><br> - Vite <br><br><br> <a href=https://github.com/Rdyst target=_blank ><img class=githubicon src=https://pngimg.com/uploads/github/github_PNG58.png><a href=https://steamcommunity.com/id/Rdyst target=_blank ><img class=steamicon src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png /> </a>","sasap","sasabgcolor","sasapopis") } />
    <img class="pepadev pfp" id="pepa" src={pepa} onClick={() => popiszmena("negr","zobrazenapfp pepazobrazena","negr","negr","negr","negr","devcss pepabg anim",'"I hate life" *keeps living* - Pepa Floydsky',"AshMane <br> A.K.A Pepa Floydsky <br><br> - CEO of Napicu <br><br> - Main Programmer <br><br> - Unreal Engine 5 <br><a href=https://steamcommunity.com/id/XXXMETANIGHT target=_blank ><img class=steamicon src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png /> <a>","pepap","pepabgcolor","pepapopis")}  />
    <img class="chujbobdev pfp" id="chujbob" src={chujbob} onClick={() => popiszmena("negr","negr","zobrazenapfp chujbobzobrazena","negr","negr","negr","devcss chujbobbg anim","Bobři jsou dobří","ChujBob<br><br> - Web Developer <br><br> - Blender <br><br> - Main CSS Programmer <br><br> - SASS <br><br>","chujbobp","chujbobbgcolor","chujbobpopis")} />
    <img class="miguel pfp" id="miguel" src={miguel} onClick={() => popiszmena("negr","negr","negr","zobrazenapfp","negr","negr","devcss miguelbg anim",""," <span class=italg>Michal</span> A.K.A <span class=italr>Miguel</span><br><br><span class=italg> - OST Creator </span><br> - Main Sound Producer <br><span class=italr> - FL Studio <br></span>","michalp","michalbgcolor")}  />
    <img class="gulagdev pfp" id="gulag" src={gulag} onClick={() => popiszmena("negr","negr","negr","negr","zobrazenapfp","negr","devcss adambg anim","","Gulag A.K.A Adam<br><br>- Goblin <br><br> - Interface <br><br> - Lazy <br><br><br><br><br><br><br> <a href=https://github.com/AdamBalcarCZ target=_blank ><img class=githubicon src=https://pngimg.com/uploads/github/github_PNG58.png></a>","adamp","adambgcolor")}  />
    <img class="toastdev pfp" id="toast" src={toast} onClick={() => popiszmena("negr","negr","negr","negr","negr","zobrazenapfp","devcss toastbg anim","","Toasty<br><br> - Potential Drug Dealer <br><br> - 2nd Unreal Programmer <br><br> - Cartel Member <br>","toastyp","toastybgcolor")}  />
    <div class="abouttext" id="abouttext">

    </div>
  </div>

</div>

// ZACATEK FUNKCI PRO DEVTEAM
let zavrit = 0

function zpet(){
  if (zavrit == 1){
  
  
  document.getElementById("zavrittlacitko").className = "negr";
  document.getElementById("miguel").className = "miguel pfp";
  document.getElementById("chujbob").className = "chujbobdev pfp";
  document.getElementById("sasa").className = "sasadev pfp";
  document.getElementById("pepa").className = "pepadev pfp";
  document.getElementById("gulag").className = "gulagdev pfp";
  document.getElementById("toast").className = "toastdev pfp";

  document.getElementById("devteam").className = "devteam devback";
  document.getElementById("abouttext").innerHTML = "";
  document.getElementById("other").remove()
  zavrit--
 }
}

// ZMENA FUNKCE
function popiszmena(sasastav,pepastav,chujbobstav,miguelstav,gulagstav,toaststav,backgroundclass,dlouhytext,kratkytext,classp,classother,classpopis) {
  
  if (zavrit == 0){
  zavrit++
  
  document.getElementById("zavrittlacitko").className = "zavrittlacitko";
  console.log("prdel");
  // KDO BUDE ZOBRAZEN
  document.getElementById("miguel").className = miguelstav;
  document.getElementById("chujbob").className = chujbobstav;
  document.getElementById("sasa").className = sasastav;
  document.getElementById("pepa").className = pepastav;
  document.getElementById("gulag").className = gulagstav;
  document.getElementById("toast").className = toaststav;
  
  // POZADI
  document.getElementById("devteam").className = backgroundclass;

  // VYTVOR KONTEJNERU PRO KRATKY POPIS
  const other = document.createElement("div");
  other.setAttribute("id","other");
  other.setAttribute("class",classother);
  var othertext = document.createTextNode("")
  other.appendChild(othertext)
  document.getElementById("devteam").appendChild(other)
 
  //  DLOUHY POPIS PARAGRAF
  const abouttext = document.createElement("p");
  var text = document.createTextNode(dlouhytext);
  abouttext.setAttribute("class",classpopis)
  abouttext.appendChild(text);
  document.getElementById("abouttext").appendChild(abouttext);

  // KRATKY POPIS V BODECH
  const othercontent = document.createElement("p");
  othercontent.innerHTML = kratkytext;
  othercontent.setAttribute("id",classp);
  // document.getElementById("other").setAttribute("class",classp)
  document.getElementById("other").appendChild(othercontent);
  }
}

// KONEC FUNKCI PRO DEV TEAM

// PROJECTS

const projects = <div class="projects" >
  <h5 id="projects">Projects</h5><br></br>
  <div class="movementproject">
  <img class="projectbg" src={projectsbg} />
  <div class="movementpopis">
    <h4><br></br>Project Libuše</h4>
    <p><br></br>- FPS<br></br>- High Speed Movement<br></br>- W.I.P</p>
    <a target="_blank" class="projecta" href="#" ><button class="projectbutton">Check Out</button></a>
  </div>

  
  </div>
</div>




const footer = <div class="footer">
<p>© 2024 Napicu</p>
</div>


function App() {

  return (
    <div>
      
      {negr}
      
      <div class="news">
      <Carousel />
      <img class="bobr" src={bobr} />
      </div>
      {burger}
      {about}
      {tools}
      {sponsor}
      {devteam}
      {projects}
      {footer}
      
      
    </div>
  )
}

export default App
