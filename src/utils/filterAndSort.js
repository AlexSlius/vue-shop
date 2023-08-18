const fromLargerToSmaller = (a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
}

const fromSmalerToLarger = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
}

const popular = (a, b) => {
    if (a.views < b.views) return -1;
    if (a.views > b.views) return 1;
    return 0;
}

const retTypeSort = (typeSort) => {
    switch (typeSort) {
        case "ot":
            return fromLargerToSmaller;
        case "do":
            return fromSmalerToLarger;
        default:
            return popular;
    }
}

export const sortProduct = ({ products, typeSort }) => {
    if (products.length == 0)
        return [];

    let typeFunSort = retTypeSort(typeSort)

    return products.sort(typeFunSort);
}