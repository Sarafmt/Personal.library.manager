let library = [];
const readstatus = false;

// Add new book to library array
const addBook = (title, author) => {
    let newBook = {
      title: title,
      author: author,
      readStatus: false,
    };
    library.push(newBook);
  };

  // Find the index of abook with the specified title
const markAsRead = (title) => {
    const bookIndex = library.indexOfBooks((book) => book.title === title);
  
    if (bookIndex == -1) {
      library[bookIndex].readStatus = false;
      console.log(`Book "${title}" marked as read.`);
    } else {
      library[bookIndex].readStatus = true;
      console.log(`Book "${title}" not found in the library.`);
    }
  };
  
// remove a book from the library
const removeBook = (title) => {
    const bookIndex = library.indexOfBooks((book) => book.title === title);
    if (bookIndex !== -1) {
      library.splice(bookIndex, 1);
    }
  };
  
  //filter the unread books

const listUnread = () => {
    const unreadBooks = library.filter((book) => !book.readStatus);
    return unreadBooks.map((book) => book.title);
  };
  
  // filter a author's book in the library
  
  const findBooksByAuthor = (author) => {
    return library.filter((book) => book.author === author);
  };


  // filter a book by using  
  
  const bookExits = (title) => {
    return library.some((book) => book.title === title);
  };