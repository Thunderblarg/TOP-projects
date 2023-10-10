import toDoList from "./toDoList";
import uiController from "./uiController";
import "./style.css";

document.addEventListener('DOMContentLoaded', function (){
    let createdDate = new Date();
    let newDueDate = new Date(createdDate);
    let controller = uiController();
    newDueDate.setDate(newDueDate.getDate() + 1);

    let categoryList = [];

    let thisIsAList = toDoList("Garage stuff");

    thisIsAList.newToDo("get into garage",
                        "walk your stupid ass into the garage",
                        createdDate,
                        newDueDate,
                        "High");

    thisIsAList.newToDo("load truck",
                        "load up the truck with as much shit as possible and run it to the dump",
                        createdDate,
                        newDueDate,
                        "High"
    );

    thisIsAList.newToDo("sand chair",
                        "get alia's chair sanded so she can refinish it",
                        createdDate,
                        newDueDate,
                        "Medium");

    categoryList.push(thisIsAList);

    
    let anotherList = toDoList("Crafting shit");

    anotherList.newToDo("work on harness",
                        "start working on the titty harness for jack",
                        createdDate,
                        newDueDate,
                        "High");

    anotherList.newToDo("finish staining chair",
                        "get the stain put on the chair so it's done being blackened",
                        createdDate,
                        newDueDate,
                        "Medium");

    anotherList.newToDo("finish viking chairs",
                        "finish viking chairs so they're ready to sell",
                        createdDate,
                        newDueDate,
                        "Medium");

    categoryList.push(anotherList);



    let body = document.getElementsByTagName("body")[0];
    body.classList.add("body");
    //console.log(body);

    let container = document.createElement('div');
    container.classList.add("pageContainer");
    body.appendChild(container);

    controller.initializeBoard();

    controller.generateToDoCategories(categoryList);

    controller.generateToDoItems(categoryList[0]);
});

console.log("Hello wrrld");