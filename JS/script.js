const smart = document.querySelector('.smart');

smart.addEventListener('click',() => {
    location = 'Products/smartphones/smartphones.html';
})
/*const smart = document.querySelector('.smart');
This line selects an HTML element with a class name of "smart" using the document.querySelector() method. It looks for the first element in the document that has the class "smart" and assigns it to the variable smart.

smart.addEventListener('click', () => { ... });
This part adds an event listener to the selected element (smart). The event listener is waiting for a 'click' event to occur on the selected element. When the element with the class "smart" is clicked, the function provided (the arrow function) will be executed.

location = 'Products/smartphones/smartphones.html';
Inside the arrow function triggered by the click event, this line changes the location of the current web page to 'Products/smartphones/smartphones.html'. This means that when the element with the class "smart" is clicked, it will redirect the browser to the 'smartphones.html' file located in the 'Products/smartphones' directory relative to the current URL.
In summary, this code allows for a specific action to occur when an element with the class "smart" is clicked. In this case, it navigates the browser to a new URL, which presumably leads to a smartphones page when clicked.*/

const elec = document.querySelector('.elec');

elec.addEventListener('click',() => {
    location = 'Products/electronics/elec.html';
})

const books = document.querySelector('.books');

books.addEventListener('click',() => {
    location = 'Products/Books/books.html';
});

const toys = document.querySelector('.toys');

toys.addEventListener('click',() => {
    location = 'Products/New Arrivals in Toys/toys.html';
});

const login = document.querySelector('.ddt');

login.addEventListener('click',() => {
    location = './Login Page/login.html';
});

const care = document.querySelector('.care');

care.addEventListener('click',() => {
    location = 'Product/Health Personal Care/care.html';
});



