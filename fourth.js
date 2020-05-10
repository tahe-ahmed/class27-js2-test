const books = [
    {
          bookName: "The Nature of Software Development",
          author: "Ron Jeffries",
          coverURL:
                "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
          bookName: "Clean Code",
          author: "Robert Cecil Martin",
          coverURL:
                "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
    }
];

function injectBooksToDOM(arrOfObjects){
    let div = document.getElementById("root");
    let ul = document.createElement("ul");
    
    arrOfObjects.forEach(function(item) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${item.bookName}`));
        ul.appendChild(li);
    });
    div.appendChild(ul);
    
}
injectBooksToDOM(books);
