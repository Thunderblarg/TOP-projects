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
            newElement.classList.add("menuItem:hover");
            newElement.id = item;
            menuBar.appendChild(newElement);
        });

        return menuBar;
    }

    attachEventHandlers(){        
        // clicks
        document.getElementById("Home").addEventListener("click", function(){
            if (this.currentPage != "Home") {
                document.getElementsByClassName("pageContainer")[0].innerHTML = "";
                document.getElementsByClassName("pageContainer")[0].appendChild(generateHome());
            }
        });

        document.getElementById("Menu").addEventListener("click", function(){
            if (this.currentPage != "Menu") {
                document.getElementsByClassName("pageContainer")[0].innerHTML = "";
                document.getElementsByClassName("pageContainer")[0].appendChild(generateMenu());
            }
        });

        document.getElementById("Contact").addEventListener("click", function(){
            if (this.currentPage != "Contact") {
                document.getElementsByClassName("pageContainer")[0].innerHTML = "";
                document.getElementsByClassName("pageContainer")[0].appendChild(generateContact());
            }
        });

        // hovers
        

        this.menuItems.forEach((item) => {
            console.log("65 " + item);
            let theItem = document.getElementById(item);
            // let hoverAnimation = anime({
            //     autoplay: false,
            //     targets: theItem,
            //     background: ['radial-gradient(circle, rgba(2,37,219,0.4) 0%, rgba(9,9,121,0)   0%',
            //                  'radial-gradient(circle, rgba(2,37,219,0.4) 0%, rgba(9,9,121,0)  50%',
            //                  'radial-gradient(circle, rgba(2,37,219,0.4) 0%, rgba(9,9,121,0)   0%'],
            //     easing: "easeInOutQuad",
            //     duration: 1.5,
            //     loop: true
            // });

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