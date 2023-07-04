let myLibrary = [];

document.addEventListener('DOMContentLoaded', function(){
    addDebugBooks();
    printLibrary();


    

    // Form toggle logic

    let toggle = document.getElementById("formToggle");
    let container = document.getElementById("formContainer");
    let formHtml = "";
    formHtml += `<form action="" class="addBook" id="addBook">
                 <button id="addButton">Add</button><br>
                 <label for="Book Title">Book Title</label>
                 <input id=newTitle type="text">
                 <label for="Book Author">Book Author</label>
                 <input type="text" id="newAuthor"><br>
                 <label for="Number of Pages">Page Count</label>
                 <input type="text" id="newPageCount">
                 <label for="Times Read">Times Read</label>
                 <input type="text" id="newReadCount">
                 </form>`
    
    toggle.addEventListener('click', function(){
        if(this.innerHTML == "Add Book"){
            this.innerHTML = "Close Form";
            container.innerHTML = formHtml;

            
            // Book adding logic
            let addBook = document.getElementById("addButton");
            addBook.addEventListener("click", function(event){
                event.preventDefault();

                // Get our fields
                let newTitle = document.getElementById("newTitle");
                let newAuthor = document.getElementById("newAuthor");
                let newPageCount = document.getElementById("newPageCount");
                let newReadCount = document.getElementById("newReadCount");

                // Check that none of our fields are empty
                if ( newTitle.value     == ""
                  || newAuthor.value    == ""
                  || newPageCount.value == ""
                  || newReadCount.value == "" ){
                    console.log("One of the fields is empty, don't do that");
                } else {
                    let theNewBook = new Book(newTitle.value,
                                              newAuthor.value, 
                                              newPageCount.value, 
                                              newReadCount.value);
                    addBookToLibrary(theNewBook);
                    printLibrary();
                }

                //let theNewBook = document.getElementById("")
            });
        } else {
            this.innerHTML = "Add Book";
            container.innerHTML = "";
        }
    });

    // Book adding logic


});

function Book(title, author, pages, read){
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
}

function addBookToLibrary(book){
    if (validateBook(book)) {
        console.log("Book successfully added to Library array");
        myLibrary.push(normalizeBook(book));
    } else {
        console.log("Something went wrong adding the book to the Library Array");
    }
}

function addDebugBooks(){
    let mobyDick = new Book("Moby Dick", "Herman Melville", "378", false);
    let theStand = new Book("The Stand", "Stephen King", "1152", true);
    let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, 6);
    addBookToLibrary(mobyDick);
    addBookToLibrary(theStand);
    addBookToLibrary(theHobbit);
    if(myLibrary.length == 3){
        console.log("Successfully added the following default books to the myLibrary array");
        myLibrary.forEach(book => {
            console.log(book.title);
        })
    }
}

function validateBook(book){

           if (typeof(book.title)  != 'string'){console.log("Book title is invalid")
    } else if (typeof(book.author) != 'string'){console.log("Book author is invalid")
    } else if (typeof(book.pages)  != 'number'
            && typeof(book.pages)  != 'string'){console.log("Number of pages is invalid")
    } else if (typeof(book.read)   != 'number'
            && typeof(book.read)   != 'boolean'
            && typeof(book.read)   != 'string'){console.log("Book author is invalid")
    } else {return book}
    return null;
}


function normalizeBook(book){
    let normalizedBook = new Book(book.title, book.author, book.pages, book.read);
    // Normalize number of pages
    if (typeof(book.pages) == "string"){
        if(Number(book.pages)){
            normalizedBook.pages = Number(book.pages);
        }
    }

    // Normalize read status
    if (typeof(book.read) == "string") {
        if(Number(book.read)){
            normalizedBook.read = Number(book.read);
        }
    } else if (typeof(book.read) == "boolean") {
        if (book.read) {
            normalizedBook.read = 1;
        } else {
            normalizedBook.read = 0;
        }
    }

    return normalizedBook;
}

function printLibrary(){
    let outputString = "";
    let bookshelf = document.getElementById("Bookshelf");

    // Clear the existing list of books
    bookshelf.innerHTML = "";

    // Start listing out each book and adding it to the output html string
    myLibrary.forEach(book => {        
        let readStatus = "";
        if(book.read > 1){
            readStatus = "read this book " + book.read + " times";
        } else if (book.read == 1){
            readStatus = "read this book once before";
        } else {
            readStatus = "not read this book before"
        }
        outputString += 
        `<div class="book">
            <div class="bookHead"><p>${book.title}</p><div class="removeBook"><img src="./img/close-box-outline.svg" alt="Delete Book"></div></div>
            <p>This book was written by ${book.author}. It has ${book.pages} pages, and I have ${readStatus}</p>
            <div class="readToggle"><button class="readIncrement">Read this book</button><button class="readReset">Never read this</button></div>
        </div>`
    });

    // add the html
    bookshelf.innerHTML = outputString;

    // Add the event handlers after they're all rendered
    addEventHandlers();
}

function addEventHandlers() {
    // Book removal button logic
    let closeButtons = document.querySelectorAll(".removeBook");    
    
    closeButtons.forEach(function (currentValue, currentIndex, listObj){
        currentValue.addEventListener("click", function(){
            let parentBook = this.parentElement.parentElement;
            let parentTitle = this.previousElementSibling;
            console.log(parentTitle.innerHTML);
            parentBook.remove();
            myLibrary = myLibrary.filter(book => book.title != parentTitle.innerHTML);
        });        
    });

    // Read status button logic

    // Increment read count
    let readIncrement = document.querySelectorAll(".readIncrement");
    readIncrement.forEach(function (currentValue, currentIndex, listObj){
        currentValue.addEventListener("click", function(){
            // update the number of times the book  
            let bookToUpdate = this.parentElement.previousElementSibling.previousElementSibling.firstChild.innerHTML;
            let updateIndex = myLibrary.findIndex(book => book.title == bookToUpdate);
            myLibrary[updateIndex].read += 1;

            // print the new library
            console.log("asdfasd");
            printLibrary();
        });
    });

    // Reset read count
    let readReset = document.querySelectorAll(".readReset");
    readReset.forEach(function (currentValue, currentIndex, listObj){
        currentValue.addEventListener("click", function(){
            // update the number of times the book  
            let bookToReset = this.parentElement.previousElementSibling.previousElementSibling.firstChild.innerHTML;
            let updateIndex = myLibrary.findIndex(book => book.title == bookToReset);
            myLibrary[updateIndex].read = 0;

            // print the new library
            console.log("asdfasd");
            printLibrary();
        });
    });
}