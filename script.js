var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        product_description: "It is made of fabric and it has all the necessary stiches to make it perfect.",
        inStock: true,
        details: ["80% cotton", "20% neutral", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        cart: 0
    }
})