import "./style.css";
import toDoList from "./toDoList";
import checkboxChecked from "./img/checkbox-check.svg";
import checkboxUnchecked from "./img/checkbox-unchecked.svg";
import trashCan from "./img/trashcan.svg";

export default function(){
    let parentList;
    let categoryList = [];

    function loadDefaultData(){
        let createdDate = new Date();
        let newDueDate = new Date(createdDate);
        newDueDate.setDate(newDueDate.getDate() + 1);

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
    };

    function initializeBoard(){
        loadDefaultData();

        let body = document.getElementsByTagName("body")[0];
        body.classList.add("body");
        
        let pageContainer = document.createElement('div');
        pageContainer.classList.add("pageContainer");
        body.appendChild(pageContainer);
        
        let contentContainer = document.createElement('div');
        contentContainer.classList.add("contentContainer");
        pageContainer.appendChild(contentContainer);
        
        let container = document.getElementsByClassName("contentContainer")[0];

        // i'm so fucking mad about this
        // let contentControls = document.createElement('div');
        // contentControls.classList.add("contentControls");
        // container.appendChild(contentControls);

        // generateAddButtons(contentControls);

        let listContainer = document.createElement('div');
        listContainer.classList.add("toDoPanel");
        container.appendChild(listContainer);

        let projectPanel = document.createElement('div');
        projectPanel.classList.add("projectPanel");
        listContainer.appendChild(projectPanel);

        let projectDetails = document.createElement('div');
        projectDetails.classList.add("projectDetails");
        listContainer.appendChild(projectDetails);

        generateToDoCategories();

        generateToDoItems(categoryList[0]);

        attachClickHandlers();


    }

    function generateAddButtons(contentControls){    
        let newToDoList = document.createElement('div');
        newToDoList.classList.add("addButton");
        newToDoList.innerHTML = "+";
        contentControls.appendChild(newToDoList);
    
        let newToDoItem = document.createElement('div');
        newToDoItem.classList.add("addButton");
        newToDoItem.innerHTML = "+";
        contentControls.appendChild(newToDoItem);

        attachAddButtonClickHandlers();

    }

    function generateToDoCategories(){
        let container = document.getElementsByClassName("projectPanel")[0];

        container.innerHTML = "";

        categoryList.forEach(element => {
            let newCat = document.createElement('div');
            newCat.classList.add('toDoCategory');
            newCat.innerHTML = element.listName;
            container.appendChild(newCat);
        });

        attachCatClickHandlers(Array.from(container.children), categoryList);

    }

    function attachCatClickHandlers(elementList, catList){
        elementList.forEach((cat) => {

            // console.log(cat);
            cat.addEventListener('click', function(event){
                let categories = Array.from(cat.parentElement.children);
                let catIndex = categories.indexOf(cat);                
                generateToDoItems(catList[catIndex]);
            });
        });
    }

    function generateSingleToDoItem(item){
        let container = document.getElementsByClassName("projectDetails")[0];

        let newItem = document.createElement('div');
        newItem.classList.add('itemContainer');

        let itemContent = document.createElement('div');
        itemContent.classList.add('itemContent');

        let title = document.createElement('div');
        title.classList.add('itemTitle');
        title.innerHTML = item.title;
        itemContent.appendChild(title);
        // attachTitleClickHandlers(title);

        let details = document.createElement('div');
        details.classList.add('itemDetails');
        details.innerHTML = item.details;
        // attachDetailsClickHandlers(details);
        itemContent.appendChild(details);

        newItem.appendChild(itemContent);

        let itemControls = document.createElement('div');
        itemControls.classList.add('itemControls');

        let controls = document.createElement('div');
        
        let checkbox = new Image();
        checkbox.src = checkboxUnchecked;
        // attachCheckboxClickHandlers(checkbox);
        controls.appendChild(checkbox);

        let deleteButton = new Image();
        deleteButton.src = trashCan;
        // attachDeleteClickHandlers(deleteButton);
        controls.appendChild(deleteButton);

        itemControls.appendChild(checkbox);
        itemControls.appendChild(deleteButton);


        newItem.appendChild(itemControls);        
        
        // container.appendChild(newItem);
        return newItem;
    }

    function generateToDoItems(category){
        parentList = category;
        let container = document.getElementsByClassName("projectDetails")[0];

        container.innerHTML = "";

        category.allToDos().forEach(item => {
            container.appendChild(generateSingleToDoItem(item));        
        });
    }

    function attachClickHandlers(){
        let noteTitles = document.getElementsByClassName("itemTitle"); 

        for (let idx = 0; idx < noteTitles.length; idx++){
            let foo = noteTitles[idx];
            attachTitleClickHandlers(foo);
        }
    }
        // for (let idx = 0; idx < noteTitles.length; idx++){
        //     console.log(noteTitles[idx]);
        //     // attachTitleClickHandlers(noteTitles[idx]);
        // }
        
        // noteTitles.forEach((title) => {
        //     console.log(title);
        //     attachTitleClickHandlers(title);
        // });


        
    
    
    function attachTitleClickHandlers(element){
        // let noteTitles = document.getElementsByClassName("itemTitle"); 

        // for (let idx = 0; idx < noteTitles.length; idx++){
        //     let foo = noteTitles[idx];
        //     attachTitleClickHandlers(foo);
        // }

        // console.log(element);
        // console.log(noteTitles);
        // let idx;
        // for (idx = 0; idx < noteTitles.length; idx++){
            // console.log(idx);
            // let element = noteTitles[idx];
            element.addEventListener("click", function(event){
                //event.stopPropagation();     
                console.log("inner event");

                let itemIndex = getElementIndex(element);
                if(!(parentList.getToDo(itemIndex).completed)){
                    let itemText = element.innerHTML;
                    // element.innerHTML = "";
                    let parent = element.parentElement;
                    

                    let textField = document.createElement('input');
                    textField.classList.add("itemTitle--editing");
                    textField.type = "text";
                    textField.value = itemText;            
                    
                    parent.removeChild(this);
                    parent.prepend(textField);
                    textField.focus();

                    textField.addEventListener("blur", function(event){
                        event.stopPropagation();

                        let newTitle = this.value;
                        parentList.updateTitle(itemIndex, newTitle);

                        let title = document.createElement('div');
                        title.classList.add('itemTitle');
                        title.innerHTML = parentList.getToDo(itemIndex).title;
                        attachTitleClickHandlers(title);

                        parent.removeChild(parent.children[0]);

                        parent.prepend(title);
                    });
                }
            });
        // }
    }

    function attachDetailsClickHandlers(element){
        element.addEventListener("click", function(event){
            event.stopPropagation();

            let itemIndex = getElementIndex(this);
            let parent = element.parentElement;
            
            if(!(parentList.getToDo(itemIndex).completed)){
                let itemText = element.innerHTML;
                let textField = document.createElement('input');
                textField.classList.add("itemDetails--editing");
                textField.type = "text";
                textField.value = itemText;            
                
                parent.removeChild(this);
                parent.appendChild(textField);
                textField.focus();

                textField.addEventListener("blur", function(event){
                    event.stopPropagation();         
                    let newDetails = this.value;
                    parentList.updateDetails(itemIndex, newDetails);

                    let details = document.createElement('div');
                    details.classList.add('itemDetails');
                    details.innerHTML = parentList.getToDo(itemIndex).details;
                    attachDetailsClickHandlers(details);

                    parent.removeChild(parent.children[1]);

                    parent.appendChild(details);
                });
            }
        });
    }

    function attachCheckboxClickHandlers(element){
        element.addEventListener("click", function(event){
            let parent = element.parentElement;
            let itemIndex = getElementIndex(element);
            let checkedBox = new Image();
            checkedBox.src = checkboxChecked;

            this.parentElement.parentElement.children[0].children[0].classList.add('completed');
            this.parentElement.parentElement.children[0].children[1].classList.add('completed');
            
            parentList.toggleComplete(itemIndex);
            
            checkedBox.addEventListener('click', function(event){
                let uncheckedBox = new Image();
                uncheckedBox.src = checkboxUnchecked;
                attachCheckboxClickHandlers(uncheckedBox);

                this.parentElement.parentElement.children[0].children[0].classList.remove('completed');
                this.parentElement.parentElement.children[0].children[1].classList.remove('completed');

                parentList.toggleComplete(itemIndex);

                parent.removeChild(checkedBox);
                parent.prepend(uncheckedBox);                
            });
            parent.removeChild(this);
            parent.prepend(checkedBox);

        });
    }

    function attachDeleteClickHandlers(element){
        element.addEventListener('click', function(event){
            let parent = element.parentElement;
            let itemIndex = getElementIndex(element);

            parentList.deleteToDo(itemIndex);
            parent.parentElement.parentElement.removeChild(parent.parentElement);

        });
        
        
        
       // 
       // parent.parentElement.parentElement.removeChild(element);

    }

    function getElementIndex(element){
        let parent = element.parentElement;
        console.log(parent.parentElement);
        let labelContainer = parent.parentElement;
        let siblingList = Array.from(labelContainer.parentElement.children);
        let itemIndex = siblingList.indexOf(labelContainer);
        console.log(itemIndex);
        
        return itemIndex;
    }

    function attachAddButtonClickHandlers(){
        let buttons = document.getElementsByClassName("addButton");
        buttons[0].addEventListener('click', function(){

        });
    }

    return {
        initializeBoard,
        generateToDoCategories,
        generateToDoItems,
        attachCatClickHandlers
    }

};