// Get all the buttons with the class 'add-to-cart'
const buttons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the product name from the data attribute
        const productName = this.getAttribute('data-product');
        addToCart(productName);
    });
});

// Function to add an item to local storage
function addToCart(productName) {
    // Get existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new product to the cart items
    cartItems.push(productName);

    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}