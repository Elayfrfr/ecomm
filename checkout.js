document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const payment = document.getElementById('payment').value;

    if (name && number && address && email && payment) {
        alert(`Order Submitted!\nName: ${name}\nPhone: ${number}\nAddress: ${address}\nEmail: ${email}\nPayment Method: ${payment}`);
    } else {
        alert('Please fill in all fields!');
    }
});
