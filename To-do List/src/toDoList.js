import toDoItem from "./toDoItem";

export default function(projectName){
    let listName = projectName;
    let toDoList = [];
    const newToDo = function(newTitle,
                             newDescription,
                             newCreatedDate, 
                             newDueDate, 
                             newPriority){
        
        let newDate = newCreatedDate;
        let dueDate = newDueDate;

        toDoList.push(toDoItem(newTitle,
                               newDescription,
                               newDate, 
                               dueDate, 
                               newPriority));
    }

    const allToDos = () => toDoList;

    const deleteToDo = function(idx){
        toDoList[idx].deleteItem(toDoList);
    }

    const updateTitle = function(idx, newTitle){
        toDoList[idx].updateTitle(newTitle);
    }

    const updateDescription = function(idx, newDescription){
        toDoList[idx].updateDescription(newDescription);
    }

    const updateTaskDate = function(idx, newDate){
        toDoList[idx].updateDueDate(newDate);
    }

    return {
        listName,
        toDoList,
        newToDo,
        allToDos,
        deleteToDo,
        updateTitle,
        updateDescription,
        updateTaskDate
    }
}