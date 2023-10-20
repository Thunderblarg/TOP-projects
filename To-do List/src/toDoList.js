import toDoItem from "./toDoItem";

export default function(projectName){
    let listName = projectName;
    let toDoList = [];
    const newToDo = function(newTitle,
                             newDetails,
                             newCreatedDate, 
                             newDueDate, 
                             newPriority){
        
        let newDate = newCreatedDate;
        let dueDate = newDueDate;

        toDoList.push(toDoItem(newTitle,
                               newDetails,
                               newDate, 
                               dueDate, 
                               newPriority));
    }

    const allToDos = () => toDoList;

    const getToDo = (idx) => toDoList[idx];

    const deleteToDo = function(idx){
        toDoList[idx].deleteItem(toDoList);
    }

    const updateTitle = function(idx, newTitle){
        toDoList[idx].updateTitle(newTitle);
    }

    const updateDetails = function(idx, newDetails){
        toDoList[idx].updateDetails(newDetails);
    }

    const updateTaskDate = function(idx, newDate){
        toDoList[idx].updateDueDate(newDate);
    }

    const toggleComplete = function(idx){
        toDoList[idx].toggleCompleted();
    }

    return {
        listName,
        newToDo,
        allToDos,
        getToDo,
        deleteToDo,
        updateTitle,
        updateDetails,
        updateTaskDate,
        toggleComplete
    }
}