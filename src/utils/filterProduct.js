export const filterProduct = ({ products, filter, category, functions, styles }) => {
    if (!filter) return products;

    let { price } = filter;

    return products.filter((el) => {
        let atAPrice = (price.min <= el.price) && (el.price <= price.max);
        let atACategoru = category?.length > 0 ? el.category == category : true;
        let isfunction = functions?.length > 0 ? !!el.functions.find(item => functions.includes(item)) : true;
        let isStyle = styles?.length > 0 ? !!el.styles.find(item => styles.includes(item)) : true;

        return atAPrice && atACategoru && isfunction && isStyle;
    });
}