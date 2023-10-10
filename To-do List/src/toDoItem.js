export default function(newTitle, newDetails, newCreatedDate, newDueDate, newPriority){    
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

    function updateDetails(updatedDetails){
        this.details = updatedDetails;
    }

    function updateDueDate(newDate){
        this.dueDate = newDate;
    }
    
    return {
        title : newTitle,
        details : newDetails,
        createdDate : newCreatedDate,
        dueDate : newDueDate,
        priority : newPriority,
        completed : false,
        deleteItem,
        toggleCompleted,
        updateTitle,
        updateDetails,
        updateDueDate
    }
}