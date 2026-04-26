let cart = 0;

// SƏBƏTƏ ƏLAVƏ ET
function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

// AXTARIŞ SİSTEMİ
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
