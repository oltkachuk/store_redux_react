// import API from './index'


export async function getItems() {
    const result = await (await fetch("https://fakestoreapi.com/products")).json()

    return result
}

// export async function getItems() {
//     const result = await API.get('/')

//     return result.data
// }

export async function getItemById(itemId) {
    const result = await (await fetch(`https://fakestoreapi.com/products/${itemId}`)).json()

    return result
}



