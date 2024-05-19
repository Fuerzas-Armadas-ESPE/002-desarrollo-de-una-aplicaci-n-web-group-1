document.getElementById('buy-button').addEventListener('click', function() {
    alert("Viva Cristo Rey! 2 uwu");
    const productTitle = document.querySelector('[name="product-title"]').value;
    const productPrice = document.querySelector('[name="product-price"]').value;
    const productImage = document.querySelector('[name="product-image"]').value;

    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems.push({
        title: productTitle,
        price: parseFloat(productPrice),
        image: productImage
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    window.location.href = '../carrito.html';
});

document.getElementById('add-to-cart-button').addEventListener('click', function() {
    alert("VIVA CRISTO REY!");
    const productTitle = document.querySelector('[name="product-title"]').value;
    const productPrice = document.querySelector('[name="product-price"]').value;
    const productImage = document.querySelector('[name="product-image"]').value;
    const productSize = document.querySelector('[name="product-size"]').value;

    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems.push({
        title: productTitle,
        price: parseFloat(productPrice),
        image: productImage,
        size: productSize,
        quantity: parseInt(productQuantity)
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Producto añadido al carrito');
});

document.querySelectorAll('.btn-size').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('product-size').value = this.innerText;
        document.querySelectorAll('.btn-size').forEach(btn => btn.classList.remove('btn-dark'));
        this.classList.add('btn-dark');
    });
});
