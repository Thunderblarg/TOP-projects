import {
    generateOpening,
    generateBanner,
    generateHours
} from "./homecontent";

function generateHome(){
    let home = document.createElement('div');
    home.classList.add("homePadding");
    //add class later
    home.appendChild(generateBanner());
    home.appendChild(generateOpening());
    home.appendChild(generateHours());
    
    return home;
}

export default generateHome;