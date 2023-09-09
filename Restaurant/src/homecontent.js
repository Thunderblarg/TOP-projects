export {
    generateOpening,
    generateBanner,
    generateHours
};

export function generatePageContainer(){
    let container = document.createElement('div');
    container.classList.add("pageContainer");
    return container;
}

function generateBanner() {
    let welcomeBanner = document.createElement('div');
    welcomeBanner.classList.add("welcomeBanner");

    let welcome = document.createElement("div");
    welcome.classList.add("welcome");

    let welcomeHead = document.createElement('div');
    welcomeHead.classList.add("welcomeHead");
    welcomeHead.innerHTML = "Welcome to";

    let welcomeBody = document.createElement('div');
    welcomeBody.classList.add("welcomeBody");
    welcomeBody.innerHTML = "Bilbo's Noodle House";

    welcome.appendChild(welcomeHead);
    welcome.appendChild(welcomeBody);

    let subTitle = document.createElement('div');
    subTitle.classList.add("subtitle");
    subTitle.innerHTML = "We'll always send you noods";


    welcomeBanner.appendChild(welcome);
    welcomeBanner.appendChild(subTitle);
    
    return welcomeBanner;
}

function generateOpening() {
    let opening = document.createElement('div');
    opening.classList.add("opening");


    let openingP = document.createElement('p');
    openingP.innerHTML = "Look at these noodles. You've never seen noodles like this before. When you get a taste of Bilbo's noodles, every other noodle experience afterwards will pale in comparison.";

    let anotherOpeningP = document.createElement('p');
    anotherOpeningP.innerHTML = "We know noodles. Bilbo's has been in the Noodle House business since 1893. And we've been the best ever since; When Bilbo Costanza I first set out ten years earlier, on a journey to find, and kill every noodle cook with a recipe better than his, he started a decade long journey across all reaches around the world, and when he came back, he had spilled not a single drop of blood.";

    let theLastOpeningP = document.createElement('p');
    theLastOpeningP.innerHTML = "When he opened his noodle house, a landmark was born. When you walk through our doors, every noodle you ever eat anywhere else will remind you that it's not Bilbo's. Come home and get a bite, at Bilbo's Noodle House.";

    opening.appendChild(openingP);
    opening.appendChild(anotherOpeningP);
    opening.appendChild(theLastOpeningP);
    
    return opening;
}

function generateHours(){
    const timeTable = [
        {
            day: "Mon - Thurs",
            hours: "9AM - 6PM"
        },
        {
            day: "Fri",
            hours: "9AM - 7PM"
        },
        {
            day: "Sat",
            hours: "11AM - 4PM"
        },
        {
            day: "Sun",
            hours: "Closed"
        }
    ]

    let hours = document.createElement('div');
    hours.classList.add("hours");

    let title = document.createElement('div');
    title.innerHTML = "Hours";
    hours.appendChild(title);

    let theList = document.createElement('ul');

    timeTable.forEach((day) => {
        let li = document.createElement('li');
        li.innerHTML = `${day.day} - ${day.hours}`;
        theList.appendChild(li);
    });

    hours.appendChild(theList);

    return hours;

}

