export const filterProduct = ({ products, filter, category }) => {
    if (!filter) return products;

    let { price } = filter;

    return products.filter((el) => {
        let atAPrice = (price.min <= el.price) && (el.price <= price.max);
        let atACategoru = category?.length > 0 ? el.category == category : true;
        return atAPrice && atACategoru;
    });
}