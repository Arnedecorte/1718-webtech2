var books = [

    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false

    },

    {
        title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true

    },
    {
        
    title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true

    }
    ];

    let divBooks = document.getElementById('books');

     
    for(let i = 0; i < books.length; i++) {
        let content = '';

        content = '<p>' + books [i].title + 'by ' + books[i].author

        if(books[i].alreadyRead) {
            //al gelezen
            content += '<p> You have already read this book </p>'
        }

        else {
            //niet gelezen
            content += '<p> It\'s time to read this novel!</p>'
        }

        content
    }

    
    console.log(books[2].author);
    // 2 want arrays beginnen bij index 0

    //let op de haakjes

console.log(myFavouriteBook.output());