import anime from 'animejs';
import generateHome from './home';
import generateMenu from './menu';
import generateContact from './contact';

export default class menuController{
    constructor(){
        this.currentPage = "Home";
        this.menuItems = [
            "Home",
            "Menu",
            "Contact",
        ];
    }

    generateMenuBar(){
        let menuBar = document.createElement("div");
        menuBar.classList.add("menuBar");
        
        let menuItems = [
            "Home",
            "Menu",
            "Contact",
        ];
        
        menuItems.forEach((item) => {
            let newElement = document.createElement("div");
            newElement.innerHTML = item;
            newElement.classList.add("menuItem");
            newElement.classList.add("no-highlight");
            newElement.id = item;
            menuBar.appendChild(newElement);
        });

        return menuBar;
    }

    attachEventHandlers(){        
        // clicks
        document.getElementById("Home").addEventListener("click", function(event){
            let homePage = document.getElementsByClassName("pageContainer")[0];
            if (homePage.firstChild.id != "Home") {
                homePage.innerHTML = "";
                homePage.appendChild(generateHome());
                anime({
                    targets: homePage.firstChild,
                    opacity: 1,
                    translateX: [-600, 0],
                    duration: 325,
                });
            } else {
                anime({
                    targets: event.currentTarget,
                    fontSize: ['44px', "36px"],
                    color: ["rgb(195, 40, 40)", "rgb(168, 149, 3)"],
                    easing: "spring"
                });
            }
        });

        document.getElementById("Menu").addEventListener("click", function(event){
            let menuPage = document.getElementsByClassName("pageContainer")[0];
            if (menuPage.firstChild.id != "Menu") {                
                menuPage.innerHTML = "";
                menuPage.appendChild(generateMenu());
                anime({
                    targets: menuPage.firstChild,
                    opacity: 1,
                    translateX: [-600, 0],
                    duration: 325,
                });
            } else {
                anime({
                    targets: event.currentTarget,
                    fontSize: ['44px', "36px"],
                    color: ["rgb(195, 40, 40)", "rgb(168, 149, 3)"],
                    easing: "spring"
                });
            }
        });

        document.getElementById("Contact").addEventListener("click", function(event){
            let contactPage = document.getElementsByClassName("pageContainer")[0];
            if (contactPage.firstChild.id != "Contact") {                
                contactPage.innerHTML = "";
                contactPage.appendChild(generateContact());
                anime({
                    targets: contactPage.firstChild,
                    opacity: 1,
                    translateX: [-600, 0],
                    duration: 325,
                });
            } else {
                anime({
                    targets: event.currentTarget,
                    fontSize: ['44px', "36px"],
                    color: ["rgb(195, 40, 40)", "rgb(168, 149, 3)"],
                    easing: "spring"
                });
            }
        });

        this.menuItems.forEach((item) => {
            console.log("65 " + item);
            let theItem = document.getElementById(item);

            theItem.addEventListener("mouseover", function(event){
                console.log("mouseOver " + item);
                anime({
                    targets: theItem,
                    color: "rgb(168, 149, 3)",
                    easing: "easeInQuad",
                    fontSize: '40px',
                    easing: 'spring(1, 80, 10, 0)',
                    duration: 600
                });
            });

            theItem.addEventListener("mouseout", function(){
                console.log("mouseOver " + item);
                anime({
                    targets: theItem,
                    color: "rgb(255, 255, 255)",                    
                    easing: "easeInOutQuad",
                    fontSize: '36px',
                    easing: 'spring(1, 80, 10, 0)',
                    duration: 600
                });
            });
        });
    }
}