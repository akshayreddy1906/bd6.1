
let {getBooks, getBookById, addBook} = require('../book');
describe("Books Functions",()=>{
  it("should get all books",()=>{
    let books = getBooks();
    expect(books.length).toBe(4);
    expect(books).toEqual([
      { id: 1, title: "1984", author: "George Orwell" },
      { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }, 
      { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
      { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" },
    ]);
  });
  it("should get a book by id",()=>{
    let book = getBookById(1);
    expect(book).toEqual({ id: 1, title: "1984", author: "George Orwell"});
  });
    it("should return undefined for a non-existent book",()=>{
    let book = getBookById(5);
    expect(book).toBeUndefined();
    });
  it ("should add a new book",()=>{
    let newBook = {id:5, title: "The Hobbit", author: "J.R.R. Tolkien"}
    let addedBook = addBook(newBook);
    expect(addedBook).toEqual({ id: 5, title: "The Hobbit", author: "J.R.R. Tolkien"});
  const books = getBooks();
  expect(books.length).toBe(5)
    });
  });
