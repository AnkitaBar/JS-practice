document.getElementById('save-data').addEventListener('click', async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products.map(product => ({
            id: product.id,
            title: product.title,
            description: product.description,
            dimensions: {
                width: product.width,
                height: product.height
            },
            review: product.reviews && product.reviews.length > 0 ? product.reviews[0] : null
        }));
        localStorage.setItem('products', JSON.stringify(products));
        alert('Data saved to local storage!');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

document.getElementById('show-data').addEventListener('click', () => {
    const products = JSON.parse(localStorage.getItem('products'));
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    if (products && products.length > 0) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <p>${product.id}</p>
            
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Dimensions: ${dimensions.product.width} X ${dimensions.product.height} </p>
                <p>Review: ${product.reviews ? product.review : 'No reviews available'}</p>
            
            `;
            container.appendChild(productDiv);
        });
    } else {
        container.innerHTML = '<p>No data available.</p>';
    }
});