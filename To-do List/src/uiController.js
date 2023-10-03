import "./style.css";

export default function(){
    
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

    function generateToDoItems(category){
        let container = document.getElementsByClassName("projectDetails")[0];
        container.classList.add()

        container.innerHTML = "";

        category.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('itemContainer');

            let itemContent = document.createElement('div');
            itemContent.classList.add('itemContent');

            let title = document.createElement('div');
            title.classList.add('itemTitle');
            title.innerHTML = item.title;
            itemContent.appendChild(title);

            let description = document.createElement('div');
            description.classList.add('itemDescription');
            description.innerHTML = item.description;
            itemContent.appendChild(description);

            newItem.appendChild(itemContent);

            let itemControls = document.createElement('div');
            itemControls.classList.add('itemControls');

            let completed = document.createElement('input');
            completed.setAttribute("type", "checkbox");
            completed.checked = item.completed;
            itemControls.appendChild(completed);


            newItem.appendChild(itemControls);
            
            container.appendChild(newItem);
        });
    }
    
    return {
        initializeBoard,
        generateToDoCategories,
        generateToDoItems
    }

};