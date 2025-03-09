const myLibrary = [];
const dialog=document.querySelector("#openForm");
const library=document.querySelector(".library");
function book(Name,Author,Pages,ID){
   this.bookName = Name;
   this.bookAuthor = Author;
   this.bookPages = Pages;
   this.bookID = ID;
}
function addBook(){
   event.preventDefault();
   const Name=document.querySelector("#bookName");
   const Author=document.querySelector("#bookAuthor");
   const Pages=document.querySelector("#bookPages");
   const ID=crypto.randomUUID();
   const newBook=new book(Name.value,Author.value,Pages.value,ID);
   myLibrary.push(newBook);
   Name.value="";
   Author.value="";
   Pages.value="";
   closeForm();
   display();
}
function openForm(){
   dialog.showModal();
}
function closeForm(){
   event.preventDefault();
   dialog.close();
}
function display(){
   library.innerHTML="";
   myLibrary.forEach(books=>{
      const row=document.createElement("div");
      row.style.backgroundColor="pink";
      row.style.padding="1vh";
      const heading=document.createElement("h2");
      heading.innerText=`${books.bookName} by ${books.bookAuthor} - ${books.bookPages}`;
      row.appendChild(heading);
      library.appendChild(row);
   })
}