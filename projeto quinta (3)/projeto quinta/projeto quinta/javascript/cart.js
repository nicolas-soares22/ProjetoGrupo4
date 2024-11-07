function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('selectedPizzas')) || [];
    const cartContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalPriceElement = document.getElementById('total-price');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    let subtotal = 0;
    cartContainer.innerHTML = cartItems.map(pizza => {
        subtotal += parseFloat(pizza.price.replace(',', '.')); 
        return `
            <div class="pizza-item">
                <span>${pizza.name}</span>
                <span class="price">R$ ${pizza.price}</span>
            </div>
        `;
    }).join('');

    subtotalElement.innerText = subtotal.toFixed(2);
    const total = subtotal + 9.90; 
    totalPriceElement.innerText = total.toFixed(2);
    
    
    localStorage.setItem('subtotal', subtotal.toFixed(2));
    localStorage.setItem('totalPrice', total.toFixed(2));
}

function proceedToPayment() {
    window.location.href = 'payment.html'; 
}

window.onload = displayCart;