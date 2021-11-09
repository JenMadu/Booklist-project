//Book constructor
 function Book(title, author, isbn) {
   this.title = title;
   this.author = author;
   this.isbn = isbn;
 }


//UI constructor
function UI() {}

//Add Book to list
UI.prototype.addBookToList = function(book){
  
  
}


//show alert
UI.prototype.showAlert = function(message,className) {
  

}

//Delete book
UI.prototype.deleteBook = function(target) {
  
}

// clear fields
UI.prototype.clearFields = function(){
  
}


//Event listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e) { 
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

  //Instantiate book
  const book = new Book(title, author, isbn);


  //Instantiate UI
  const ui = new UI();

  //Validate
  if(title === '' || author === '' || isbn === ''){
    //Error alert
    ui.showAlert('Please fill in all fields', 'error');

  } else {

    //Add book to list
    ui.addBookToList(book);

    //show success
    ui.showAlert('Book Added!', 'success')


    //clear fields
    ui.clearFields();
  
  }

  e.preventDefault();

});
 //Event listener for delete
 document.getElementById('book-list').addEventListener('click', function(e){

  //Instantiate UI
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);

  //Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
    
})

