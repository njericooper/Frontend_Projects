class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }
    
     printFavoriteBooks() {
        console.log(`Favorite Books: ${this.favoriteBooks.length}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
 
}


function loadBooks(mybookshelf) { //an instance of the general Bookshelf calss
fakeAjax(BOOK_API, function onBooks(bookTitles) {
    //inline name function expression
    for (let bookName of bookTitles ) {
        mybookshelf.addFavoriteBook(bookName)
    }
    mybookshelf.printFavoriteBooks(); 
       
}); //lexical scope is able to reach BOOK_API


}

var BOOK_API = "https://some.url/api";


myBooks = new Bookshelf();
loadBooks(myBooks);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
