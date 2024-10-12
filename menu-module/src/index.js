import "./style.css";
import logo from './img/logo.webp';

document.addEventListener('DOMContentLoaded', function(){
    document.getElementsByTagName('body')[0].classList.add('bodyOverride');
    
    let content = document.getElementsByClassName('content')[0];
    content.classList.add('content');

    let horizontalContainer = createElement("horizontalContainer");
    content.appendChild(horizontalContainer);

    let companyLogo = new Image();
    companyLogo.src = logo;
    
    horizontalContainer.appendChild(companyLogo);

    ////////////////////////////////////////
    // Make the container
    ////////////////////////////////////////

    let xMenuContainer = createElement('xMenuContainer');
    horizontalContainer.appendChild(xMenuContainer);

    ////////////////////////////////////////
    // Add the menu options to the container
    ////////////////////////////////////////

    let menuItems = [
        "Home",
        "Shop",
        "Feed",
        "News",
        "Contact"
    ]

    addToMenu(xMenuContainer, menuItems, "xMenuItem");

    ////////////////////////////////////////
    // Create the dropdown, add the dropdown items to it, and add the event handler
    ////////////////////////////////////////

    let xHomeDropdown = createElement('dropdown');

    let homeRooms = [
        "Living Room",
        "Kitchen",
        "Master Bedroom",
        "Second Bedroom",
        "Garage"
    ];
    
    // Todo: Refactor this so we use a for-each loop to add the event handler to all menu container items
    xMenuContainer.children[0].addEventListener('mouseover', showDropDown);
    
    addToMenu(xHomeDropdown, homeRooms, "xMenuItem");
    
    xMenuContainer.children[0].appendChild(xHomeDropdown);    

    ////////////////////////////////////////
    // Make the dropdown for Shop
    ////////////////////////////////////////

    let xShopDropdown = createElement('dropdown');

    let shopCategories = [
        "Food",
        "Office Supplies",
        "Chemistry Supplies",
        "Pottery"
    ]

    xMenuContainer.children[1].addEventListener('mouseover', showDropDown);

    addToMenu(xShopDropdown, shopCategories, "xMenuItem");

    xMenuContainer.children[1].appendChild(xShopDropdown);

    ////////////////////////////////////////
    // Make the dropdown for Feed
    ////////////////////////////////////////

    let xFeedDropdown = createElement('dropdown');

    let feedCategories = [
        "Chicken Feed",
        "Pig Feed",
        "Bird Feed",
        "Catgirl Feed",
        "Spongrle Feed"
    ]

    xMenuContainer.children[2].addEventListener('mouseover', showDropDown);

    addToMenu(xFeedDropdown, feedCategories, "xMenuItem");

    xMenuContainer.children[2].appendChild(xFeedDropdown);

    ////////////////////////////////////////
    // Make the dropdown for News
    ////////////////////////////////////////

    let xNewsDropdown = createElement('dropdown');

    let newsCategories = [
        "Local News",
        "International News",
        "Old News",
        "Bad News",
        "Huey Lewis and The News"
    ]

    xMenuContainer.children[3].addEventListener('mouseover', showDropDown);

    addToMenu(xNewsDropdown, newsCategories, "xMenuItem");

    xMenuContainer.children[3].appendChild(xNewsDropdown);

    ////////////////////////////////////////
    // Make the dropdown for Contact
    ////////////////////////////////////////

    let xContactDropdown = createElement('dropdown');

    let contactCategories = [
        "Fax",
        "Telegraph",
        "Neuralink PSiGate",
        "Myspace"
    ]

    xMenuContainer.children[4].addEventListener('mouseover', showDropDown);

    addToMenu(xContactDropdown, contactCategories, "xMenuItem");

    xMenuContainer.children[4].appendChild(xContactDropdown);
    
});

let addToMenu = function(node, itemNames, className) {
    itemNames.forEach((itemName) => {
        let newItem = createElement(className);
        node.appendChild(newItem);
        newItem.innerHTML = itemName;
    });
}


let createElement = function(name){
    let newElement = document.createElement('div');
    newElement.classList.add(name);
    return newElement;
}

let showDropDown = function() {
    this.children[0].animate(
        [
            {
                transform: 'translateY(30px)',
                opacity: '100%',
                userSelect: 'auto'
            }
        ],
        {
            duration: 250,
            fill: 'forwards'
        }
    );

    this.addEventListener("mouseleave", function(node){
            
        this.children[0].animate(
            [
                {
                    transform: 'translateY(20px)',
                    opacity: '0%',
                    userSelect: 'none'
                }
            ],
            {
                duration: 250,
                fill: 'forwards'
            }
        );    
    });
}