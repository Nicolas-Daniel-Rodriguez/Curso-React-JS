import "./ProductFormUI.css";

export const ProductFormUI = ({
    product, 
    errors, 
    loading, 
    onChange, 
    OnFileChange, 
    onSubmit
}) => {
    return (
    <section>
    <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>
        <div>
            <label htmlFor="name">Nombre:</label>
            <input 
            type="text" 
            name="name" 
            value={product.name} 
            onChange={onChange} 
            required/>
            {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
            <label htmlFor="price">Precio:</label>
            <input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={onChange} 
            min="1" 
            required/>
            {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div>
            <label htmlFor="category">Categoría:</label>
            <input 
            type="text" 
            name="category" 
            value={product.category} 
            onChange={onChange} 
            required/>
            {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
            <label htmlFor="description">Descripción:</label>
            <textarea 
            name="description" 
            value={product.description} 
            onChange={onChange} 
            required/>
            {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
            <label htmlFor="file">Imagen:</label>
            <input 
            type="file" 
            accept="image/*"
            name="file"
            onChange={(e) => OnFileChange(e.target.files?.[0] ?? null)} 
            required/>
            {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button type="submit" disabled={loading}>{loading ? "Guardando..." : "Guardar"}</button>

    </form>
    </section>
)
}
