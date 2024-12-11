let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    cartTotal += price;
    updateCartButton();
}

function updateCartButton() {
    const cartButton = document.querySelector(".cart-button");
    cartButton.textContent = `Cart (${cart.length})`;
}

function openCartPopup() {
    const cartPopup = document.getElementById("cart-popup");
    const cartItems = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItems.innerHTML = cart
        .map(
            (item, index) =>
                `<p>${item.productName} - ₱${item.price.toLocaleString()} 
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></p>`
        )
        .join("");

    cartTotalElement.textContent = `Total: ₱${cartTotal.toLocaleString()}`;
    cartPopup.style.display = "block";
}

function closeCartPopup() {
    document.getElementById("cart-popup").style.display = "none";
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    cartTotal -= removedItem.price;
    updateCartButton();
    openCartPopup(); // Refresh the cart popup
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        cartTotal = 0;
        updateCartButton();
        closeCartPopup();
    }
}
