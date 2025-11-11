const BASE_URL = "https://6900bba7ff8d792314bb32e9.mockapi.io";

export const createProduct = async (product) => {
    const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!res.ok) {
        throw new Error("Error al crear el producto");
    }

    const result = await res.json();
    return result;
}

export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        url += `?category=${category}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al cargar los productos");
    }
    const result = await res.json();
    return result;
}

export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
        throw new Error("Error al cargar el producto");
    }
    const result = await res.json();
    return result;
}