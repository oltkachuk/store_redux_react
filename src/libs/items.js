import API from './index'

export async function getItemsByCategory( categoryId ) {
    const result = await API.get(`product/category/${categoryId}`)

    return result.data
}

export async function getItems() {
    const result = await (await fetch("https://fakestoreapi.com/products")).json()

    return result
}

// export async function getItems() {
//     const result = await API.get('/products')

//     return result.data
// }

export async function getItemById(itemId) {
    const result = await (await fetch(`https://fakestoreapi.com/products/${itemId}`)).json()

    return result
}



