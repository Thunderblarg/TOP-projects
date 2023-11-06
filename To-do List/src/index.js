
import uiController from "./uiController";
import "./style.css";

document.addEventListener('DOMContentLoaded', function (){
    // let createdDate = new Date();
    // let newDueDate = new Date(createdDate);
    let controller = uiController();
    // newDueDate.setDate(newDueDate.getDate() + 1);

    
    //console.log(body);

    

    // let thisIsAList = toDoList("Garage stuff");

    // thisIsAList.newToDo("get into garage",
    //                     "walk your stupid ass into the garage",
    //                     createdDate,
    //                     newDueDate,
    //                     "High");

    // thisIsAList.newToDo("load truck",
    //                     "load up the truck with as much shit as possible and run it to the dump",
    //                     createdDate,
    //                     newDueDate,
    //                     "High"
    // );

    // thisIsAList.newToDo("sand chair",
    //                     "get alia's chair sanded so she can refinish it",
    //                     createdDate,
    //                     newDueDate,
    //                     "Medium");

    // categoryList.push(thisIsAList);

    
    // let anotherList = toDoList("Crafting shit");

    // anotherList.newToDo("work on harness",
    //                     "start working on the titty harness for jack",
    //                     createdDate,
    //                     newDueDate,
    //                     "High");

    // anotherList.newToDo("finish staining chair",
    //                     "get the stain put on the chair so it's done being blackened",
    //                     createdDate,
    //                     newDueDate,
    //                     "Medium");

    // anotherList.newToDo("finish viking chairs",
    //                     "finish viking chairs so they're ready to sell",
    //                     createdDate,
    //                     newDueDate,
    //                     "Medium");

    // categoryList.push(anotherList);

    

    controller.initializeBoard();
    // let noteTitles = document.getElementsByClassName("itemTitle"); 
    // console.log(noteTitles);

    // noteTitles.item(0).addEventListener('click', function(event){
    //     console.log("bar")
    // });
    // for (let idx = 0; idx < noteTitles.length; idx++){
    //     let foo = noteTitles[idx]
    //     console.log(foo);
    //     foo.addEventListener("click", function(event){console.log("bar")});
    // }
    // controller.generateToDoCategories(categoryList);

    // controller.generateToDoItems(categoryList[0]);
});