import "./style.css";
import checkboxChecked from "./img/checkbox-check.svg";
import checkboxUnchecked from "./img/checkbox-unchecked.svg";
import trashCan from "./img/trashcan.svg";

export default function(){
    let parentList;

    function initializeBoard(){
        let container = document.getElementsByClassName("contentContainer")[0];

        let contentControls = document.createElement('div');
        contentControls.classList.add("contentControls");
        container.appendChild(contentControls);

        generateAddButtons(contentControls);

        let listContainer = document.createElement('div');
        listContainer.classList.add("toDoPanel");
        container.appendChild(listContainer);

        let projectPanel = document.createElement('div');
        projectPanel.classList.add("projectPanel");
        listContainer.appendChild(projectPanel);

        let projectDetails = document.createElement('div');
        projectDetails.classList.add("projectDetails");
        listContainer.appendChild(projectDetails);
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

    }

    function generateToDoCategories(categoryList){
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
        attachTitleClickHandlers(title);
        itemContent.appendChild(title);

        let details = document.createElement('div');
        details.classList.add('itemDetails');
        details.innerHTML = item.details;
        attachDetailsClickHandlers(details);
        itemContent.appendChild(details);

        newItem.appendChild(itemContent);

        let itemControls = document.createElement('div');
        itemControls.classList.add('itemControls');

        let controls = document.createElement('div');
        
        let checkbox = new Image();
        checkbox.src = checkboxUnchecked;
        attachCheckboxClickHandlers(checkbox);
        controls.appendChild(checkbox);

        let deleteButton = new Image();
        deleteButton.src = trashCan;
        attachDeleteClickHandlers(deleteButton);
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
    
    function attachTitleClickHandlers(element){
        element.addEventListener("click", function(event){
            event.stopPropagation();                   

            let itemIndex = getElementIndex(this);


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

        let labelContainer = parent.parentElement;
        let siblingList = Array.from(labelContainer.parentElement.children);
        let itemIndex = siblingList.indexOf(labelContainer);

        return itemIndex;
    }

    return {
        initializeBoard,
        generateToDoCategories,
        generateToDoItems,
        attachCatClickHandlers
    }

};