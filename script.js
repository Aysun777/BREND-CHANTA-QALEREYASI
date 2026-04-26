let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(p => {
        let name = p.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            p.style.display = "";
        } else {
            p.style.display = "none";
        }
    });
}
