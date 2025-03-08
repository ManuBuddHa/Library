const myLibrary = [];
const dialog=document.querySelector("#openForm")
function book(bookName,bookAuthor,bookPages,bookID){
   this.bookName = bookName;
   this.bookAuthor = bookAuthor;
   this.bookPages = bookPages;
   this.bookID = bookID;
}
function addBook(){
   preventDefault();
   const bookName=document.querySelector("#bookName");
   const bookAuthor=document.querySelector("#bookAuthor");
   const bookPages=document.querySelector("#bookPages");
   const bookID=crypto.randomUUID();
   const newBook=new book(bookName.value,bookAuthor.value,bookPages.value,bookID);
   myLibrary.push(newBook);
   bookName.innerHTML='';
   bookAuthor.innerHTML='';
   bookPages.innerHTML='';
}
function openForm(){
   dialog.showModal();
}
function closeForm(){
   dialog.close();
   console.log(myLibrary)
}