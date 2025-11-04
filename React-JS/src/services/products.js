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