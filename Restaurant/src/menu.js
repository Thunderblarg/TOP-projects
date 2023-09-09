function generateMenu(){
    let dishes = [
        {
            name: "Special Noodz",
            price: "6.99",
            description: "They got that real good stuff you're looking for"
        },
        {
            name: "BilbLo Mein",
            price: "8.99",
            description: "It's got the sauce"
        },
        {
            name: "Tonkatsu Ramen",
            price: "9.99",
            description: "Like all good things in life, it's beefy"
        },
        {
            name: "Chicken Noodle",
            price: "8.99",
            description: "A true classic. Not at all like your mother made, but far superior"
        },
        {
            name: "Butter Noodles",
            price: "3.99",
            description: "It's got butter. It's got noodles. You know what else it's got? NOT A THING"
        },
        {
            name: "Spaghetti",
            price: "8.99",
            description: "Spaghetti of the day. You get what you get"
        },
    ]
    
    let menu = document.createElement('div');
    menu.classList.add("menu");

    let shoveOver = false;
    dishes.forEach((dish) =>{
        let newDish = document.createElement('div');
        newDish.classList.add("menuDish");
        newDish.classList.add(shoveOver ? "menuDishOffset" : "menuDish");
        
        let upper = document.createElement('div');
        
        let dishName = document.createElement('div');
        dishName.innerHTML = dish.name;

        let dishPrice = document.createElement('div');
        dishPrice.innerHTML = dish.price;
        
        if (!shoveOver){
            upper.appendChild(dishName);
            upper.appendChild(dishPrice);            
        } else {
            upper.appendChild(dishPrice);
            upper.appendChild(dishName);   
        }

        newDish.appendChild(upper);

        let lower = document.createElement('div');
        lower.classList.add(shoveOver ? "menuDishDescriptionOffset"
                                      : "menuDishDescription");
        lower.innerHTML = dish.description;
        newDish.appendChild(lower);
        
        shoveOver = shoveOver ? false : true;

        menu.appendChild(newDish);
    });

    return menu;
}

export default generateMenu;