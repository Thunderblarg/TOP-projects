import "./style.css";
import checkboxChecked from "./img/checkbox-check.svg";
import checkboxUnchecked from "./img/checkbox-unchecked.svg";
import trashCan from "./img/trashcan.svg";

export default function(){
    let parentList;

    function initializeBoard(){
        let container = document.getElementsByClassName("pageContainer")[0];

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

    function generateToDoCategories(categoryList){
        let container = document.getElementsByClassName("projectPanel")[0];

        container.innerHTML = "";

        categoryList.forEach(element => {
            let newCat = document.createElement('div');
            newCat.classList.add('toDoCategory');
            newCat.innerHTML = element.listName;
            container.appendChild(newCat);
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
        //container.classList.add()

        container.innerHTML = "";

        category.allToDos().forEach(item => {

            container.appendChild(generateSingleToDoItem(item));
        
        });
    }
    
    function attachTitleClickHandlers(element){
        element.addEventListener("click", function(event){
            event.stopPropagation();

            let itemText = element.innerHTML;
            // element.innerHTML = "";
            let parent = element.parentElement;
            

            let textField = document.createElement('input');
            textField.classList.add("itemTitle--editing");
            textField.type = "text";
            textField.value = itemText;            
            
            parent.removeChild(parent.children[0]);
            parent.prepend(textField);
            textField.focus();

            textField.addEventListener("blur", function(event){
                event.stopPropagation();                    

                // honestly i'm just going to consolidate these
                let labelContainer = parent.parentElement;
                let siblingList = Array.from(labelContainer.parentElement.children);
                let itemIndex = siblingList.indexOf(labelContainer);

                let newTitle = this.value;
                parentList.updateTitle(itemIndex, newTitle);

                let title = document.createElement('div');
                title.classList.add('itemTitle');
                title.innerHTML = parentList.getToDo(itemIndex).title;
                attachTitleClickHandlers(title);

                parent.removeChild(parent.children[0]);

                parent.prepend(title);
            });
        });
    }

    function attachDetailsClickHandlers(element){
        element.addEventListener("click", function(event){
            event.stopPropagation();

            let itemText = element.innerHTML;
            // element.innerHTML = "";
            let parent = element.parentElement;
            

            let textField = document.createElement('input');
            textField.classList.add("itemDetails--editing");
            textField.type = "text";
            textField.value = itemText;            
            
            parent.removeChild(parent.children[1]);
            parent.appendChild(textField);
            textField.focus();

            textField.addEventListener("blur", function(event){
                event.stopPropagation();                    

                // honestly i'm just going to consolidate these
                let labelContainer = parent.parentElement;
                let siblingList = Array.from(labelContainer.parentElement.children);
                let itemIndex = siblingList.indexOf(labelContainer);

                let newDetails = this.value;
                parentList.updateDetails(itemIndex, newDetails);

                let details = document.createElement('div');
                details.classList.add('itemDetails');
                details.innerHTML = parentList.getToDo(itemIndex).details;
                attachDetailsClickHandlers(details);

                parent.removeChild(parent.children[1]);

                parent.appendChild(details);
            });
        });
    }

    function attachCheckboxClickHandlers(element){
        element.addEventListener("click", function(event){
            // console.log(this.parentElement.parentElement.children[0].children[0]);
            // console.log(this.parentElement.parentElement.children[0].children[1]);
            this.parentElement.parentElement.children[0].children[0].classList.add('completed');
            this.parentElement.parentElement.children[0].children[1].classList.add('completed');
        });
    }

    return {
        initializeBoard,
        generateToDoCategories,
        generateToDoItems
    }

};