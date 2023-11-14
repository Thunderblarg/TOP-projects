import toDoItem from "./toDoItem";

export default function(projectName){
    let listName = projectName;
    let toDoList = [];
    const newToDo = function(newTitle,
                             newDetails){        
        // let newDate = newCreatedDate;
        // let dueDate = newDueDate;

        console.log(toDoList.push(toDoItem(newTitle,
                               newDetails)));
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

    // const updateTaskDate = function(idx, newDate){
    //     toDoList[idx].updateDueDate(newDate);
    // }

    const toggleComplete = function(idx){
        toDoList[idx].toggleCompleted();
    }

    const length = () => toDoList.length;

    return {
        listName,
        newToDo,
        allToDos,
        getToDo,
        deleteToDo,
        updateTitle,
        updateDetails,
        // updateTaskDate,
        toggleComplete,
        length
    }
}