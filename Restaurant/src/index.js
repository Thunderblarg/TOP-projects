
import './style.css';
import MenuBarController from './menubar';
import { generatePageContainer } from './homecontent';
import generateHome from './home';


document.addEventListener('DOMContentLoaded', function(){
    let menuController = new MenuBarController();
    
    // remove default body margin
    document.getElementsByTagName("body")[0].style.margin = "0";
    
    // generate the menu bar and attach click handlers
    let content = document.getElementById("content");
    content.classList.add("content");
    content.appendChild(menuController.generateMenuBar());
    menuController.attachEventHandlers();
    
    // generate content container and start page on home page
    let container = generatePageContainer();
    container.classList.add("pageContainer");
    content.appendChild(container);
    container.appendChild(generateHome());
});