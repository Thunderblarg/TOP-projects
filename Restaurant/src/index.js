
import './style.css';
import MenuBarController from './menubar';
import { generatePageContainer } from './homecontent';
import generateHome from './home';
import anime from 'animejs';


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
    anime({
        targets: container.firstChild,
        opacity: 1,
        translateX: [-600, 0],
        easing: 'spring',
    });
});