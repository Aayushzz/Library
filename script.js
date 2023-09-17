const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function bringcard(){
    let libraryEl = document.querySelector('.grid-container');
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.classList.add('card');
        libraryEl.appendChild(bookEl);
        //bookEl.innerHTML = `
        //<div class="card">
            
       //</div>`
    }
}

function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#title').value;
    let pages = document.querySelector('#title').value;
    let read = document.querySelector('#title').checked;
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    bringcard();
}

let addBtn = document.querySelector('.add-btn');
let askCard = document.querySelector('.ask-card');
addBtn.addEventListener('click', () => {
    askCard.classList.add("active");
})

document.querySelector(".ask-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    askCard.classList.remove("active");
});