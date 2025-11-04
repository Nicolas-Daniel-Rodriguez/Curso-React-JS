import { useState } from "react";
import { uploadToImgbb } from "../../../services/uploadImage";
import { validateProducts } from "../../../utils/validateProducts";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { createProduct } from "../../../services/products";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({ 
        name: "",
        price: "",
        category: "",
        description: "",
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProducts(...product, file);
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
    }

    try {
        const imageUrl = await uploadToImgbb();
        const productData = { 
            ...product, 
            price: Number(productprice), 
            imageUrl 
        };

        await createProduct(productData);
        
        alert("Producto creado correctamente");

        setProduct({ name: "", price: "", category: "", description: "" });
        setFile(null);
        

    } catch (error) {
        console.error("Error al crear el producto:", error);
        setErrors({ file: "Error al crear el producto" });
    } finally {
        setLoading(false);
    }
}

const handleFileChange = (file) => {
    setFile(file);
}

return (
    <div className="product-form-container">
        <ProductFormUI
        product={product} 
        errors={errors} 
        loading={loading} 
        onChange={handleChange} 
        OnFileChange={handleFileChange} 
        onSubmit={handleSubmit} />
    </div>
)
}