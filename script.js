const myLibrary = [];//array
const dialog=document.querySelector("#openForm");//dialog
const library=document.querySelector(".library");//section library


function openForm(){ //Opens Dialog
   dialog.showModal();
}
function book(Name,Author,Pages,ID,read=false){ //for constructor 
   this.bookName = Name;
   this.bookAuthor = Author;
   this.bookPages = Pages;
   this.bookID = ID;
   this.read=read;
}
function addBook(){ //adding book details
   event.preventDefault();
   const Name=document.querySelector("#bookName");
   const Author=document.querySelector("#bookAuthor");
   const Pages=document.querySelector("#bookPages");
   const ID=crypto.randomUUID();
   const newBook=new book(Name.value,Author.value,Pages.value,ID);//constructor
   myLibrary.push(newBook);//adds data to array
   Name.value=""; //resets fields
   Author.value="";//resets fields
   Pages.value="";//resets fields
   closeForm();//Closes Dialog after 1 input
   display();//shows books in Section Library
}
function closeForm(){//for Close button on dialog
   event.preventDefault();
   dialog.close();
}
function display(){
   library.innerHTML="";
   myLibrary.forEach(book=>{
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("bookDiv");
      const title = document.createElement("h3");
      const button = document.createElement("button");
      button.classList.add("read")
      button.innerText="Read";
      button.innerText = book.read ? "Mark as Unread" : "Mark as Read";
      button.addEventListener("click",x=>readStatus(book.bookID));
      const del = document.createElement("button");
      del.classList.add("delete")
      del.innerText="Delete";
      del.value=book.bookID;
      del.addEventListener("click", () => deleteBook(del.value));
      title.innerText=`${book.bookName} by ${book.bookAuthor} has ${book.bookPages} Pages`;
      library.appendChild(bookDiv);
      bookDiv.style.backgroundColor = book.read ? "green" : "red";
      bookDiv.appendChild(title);
      bookDiv.appendChild(button);
      bookDiv.appendChild(del);
   })
}
function deleteBook(val){
   const index = myLibrary.findIndex(book => book.bookID === val);
   myLibrary.splice(index,1);
   display();
}
function readStatus(rd){
   const book=myLibrary.find(book=>book.bookID===rd);
   book.read=!book.read;
   display();
}