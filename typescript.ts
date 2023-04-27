interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
}

let books: Book[] = [{id: 1, title: 'Harry Potter', author: 'J.K Rowliing', published: new Date(1997, 6, 26), available: true}, {id: 2, title: 'Hunger Games', author: 'Suzanne Collins', published: new Date(2008, 9, 14), available: true}]

function addBook(book: Book): void {
    books.push(book)
}

function findBookById(id: number): Book | undefined {
    let q = true;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            let y = books.findIndex(x => x.id == id);
            q = false;
            return books[y];
        }
    }
    if (q = true) {
        return undefined;
    }
}

function updateBook(book: Book): Boolean {
    let t = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === book.id) {
            removeBook(book.id);
            addBook(book); 
            t = true; 
        } 
    }
    if (t = true) {
        return true;
    } else {
        return false;
    }
}


function removeBook(id: number): Boolean {
    let d = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            let y = books.findIndex(x => x.id == id);
            books.splice(y, 1);
            d = true;
        }
    }
    if (d = true) {
        return true;
    } else {
        return false;
    }
}

console.log(books);
addBook({ id: 3, title: 'The Maze Runner', author: 'James Dashner', published: new Date(2009, 10, 6), available: true });
console.log(books);
updateBook({ id: 3, title: 'The Maze Runner', author: 'James Dashner', published: new Date(2009, 10, 6), available: false });
console.log(books);
removeBook(3);
console.log(books);
console.log(findBookById(2));

