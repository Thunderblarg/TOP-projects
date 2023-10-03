export default function(newTitle, newDescription, newCreatedDate, newDueDate, newPriority){    
    function deleteItem(containerList){
        const delIdx = containerList.indexOf(this);

        containerList.splice(delIdx, 1);
    }

    function toggleCompleted(){
        this.completed = this.completed ? false : true;
    }

    function updateTitle(updatedTitle){
        this.title = updatedTitle;
    }

    function updateDescription(updatedDescription){
        this.description = updatedDescription;
    }

    function updateDueDate(newDate){
        this.dueDate = newDate;
    }
    
    return {
        title : newTitle,
        description : newDescription,
        createdDate : newCreatedDate,
        dueDate : newDueDate,
        priority : newPriority,
        completed : false,
        deleteItem,
        toggleCompleted,
        updateTitle,
        updateDescription,
        updateDueDate
    }
}