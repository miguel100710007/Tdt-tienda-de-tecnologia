$(document).ready(function() {
    // Inicializa el carrusel al cargar la página
    $('.carousel-container').slick({
        autoplay: true, // Activa el autoplay
        autoplaySpeed: 10000, // Tiempo entre cada cambio de imagen (3 segundos)
        dots: false, // No muestra los puntos de navegación
        arrows: false, // No muestra las flechas de navegación
    });

    let cartCount = 0; // Inicializa el contador del carrito en 0

    // Evento al hacer clic en el botón "Añadir al carrito"
    $('.add-to-cart').click(function() {
        cartCount++; // Incrementa el contador del carrito
        $('#cart-count').text(cartCount); // Actualiza el contador en la interfaz
        updateCartItems($(this).data('product'), $(this).data('price')); // Llama a la función para actualizar los productos en el carrito
    });

    // Función para actualizar los productos en el carrito
    function updateCartItems(product, price) {
        const cartItems = $('#cart-items');
        cartItems.append(`<p>${product} - $${price}</p>`); // Añade el producto y su precio al carrito
    }

    // Evento para la barra de búsqueda
    $('#search').on('input', function() {
        const query = $(this).val().toLowerCase(); // Obtiene el texto ingresado en la barra de búsqueda
        $('.product').each(function() {
            const productName = $(this).find('h3').text().toLowerCase(); // Obtiene el nombre del producto
            // Comprueba si el nombre del producto incluye la consulta de búsqueda
            if (productName.includes(query)) {
                $(this).show(); // Muestra el producto si coincide
            } else {
                $(this).hide(); // Oculta el producto si no coincide
            }
        });
    });
});
