export const validateProducts = (product, fileRequired=true) => {
    const errors = {};
    if (!product.name.trim()) {
        errors.name = "El nombre es requerido";
    }
    if (!product.description.trim()) {
        errors.description = "La descripción es requerida";
    }
    if (!product.price || product.price <= 0) {
        errors.price = "El precio es requerido";
    }
    if (!product.category.trim()) {
        errors.category = "La categoría es requerida";
    }
    if (fileRequired && !product.file) {
        errors.file = "Debes seleccionar una imagen";
    }
    return errors;
}