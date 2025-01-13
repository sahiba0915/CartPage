document.addEventListener('DOMContentLoaded' , () => {
    const products = [
        {id: 1, name: "Product 1" , price: 20},
        {id: 2, name: "Product 2" , price: 40},
        {id: 3, name: "Product 3" , price: 60},
    ]

    const cart = [];
    const productList = document.getElementById('product-list');
    const emptyCart = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-button');

    products.forEach((product) => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span>${product.name} - Rs.${product.price}</span>
        <button data-id=${product.id}>Add to cart</button>
        `
        productList.appendChild(productDiv)
    })
})