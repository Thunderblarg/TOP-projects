import anime from 'animejs';
import generateHome from './home';
import generateMenu from './menu';
import generateContact from './contact';

export default class menuController{
    constructor(){
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

        let menuItems = [
            {
                name: "Home",
                method: generateHome()
            },
            {
                name: "Menu",
                method: generateMenu()
            },
            {
                name: "Contact",
                method: generateContact()
            },
        ];

        // clicks
        menuItems.forEach((item) =>{
            document.getElementById(item.name).addEventListener("click", function(event){
                let homePage = document.getElementsByClassName("pageContainer")[0];
                if (homePage.firstChild.id != item.name) {
                    homePage.innerHTML = "";
                    homePage.appendChild(item.method);
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
        });

        // hovers
        menuItems.forEach((item) => {
            let theItem = document.getElementById(item.name);

            theItem.addEventListener("mouseover", function(event){
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