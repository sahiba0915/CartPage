document.addEventListener('DOMContentLoaded' , () => {
    const products = [
        {id: 1, name: "Product 1" , price: 20},
        {id: 2, name: "Product 2" , price: 40},
        {id: 3, name: "Product 3" , price: 60},
    ]

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productList = document.getElementById('product-list');
    const emptyCart = document.getElementById('empty-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    products.forEach((product) => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span>${product.name} - Rs.${product.price}</span>
        <button data-id=${product.id}>Add to cart</button>
        `
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click', (e) => {
        if(e.target.tagName === "BUTTON"){
         const productId = parseInt(e.target.getAttribute('data-id'))
         const product = products.find(p => p.id === productId)
         addToCart(product)
        }
    })

    function addToCart(product) {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart()
    }
    
    function renderCart(){
        cartItems.innerText = ""
        let total = 0;

        if(cart.length>0){
            cartTotal.classList.remove('hidden');
            cart.forEach((item, index) => {
              total += item.price;
              const cartItem = document.createElement('div');
              cartItem.classList.add("item")
              cartItem.innerHTML = `
              <span>${item.name} - Rs.${item.price}</span>
              <button data-id=${item.id}>Remove</button>
              `
              cartItems.appendChild(cartItem)
              totalPrice.textContent = `Rs.${total}`
            })
        }else{
            cartTotal.classList.add('hidden');
        }
    }

    cartItems.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    checkoutBtn.addEventListener('click', () => {
         cart.length = 0;
         alert("Checkout Successfull")
         renderCart()
    })

    renderCart()
})