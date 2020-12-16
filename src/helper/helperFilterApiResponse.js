const helperFeilterApiResponse = (data) => {
    if (data.hasOwnProperty('items')) { 
        let newItems = data.items.map(o => {
            return {
                id: o.id,
                price: o.saleInfo.listPrice.amount,
                currency: o.saleInfo.listPrice.currencyCode,
                title: o.volumeInfo.title,
                subtitle: o.volumeInfo.subtitle,
                description: o.volumeInfo.description,
                smImage: o.volumeInfo.imageLinks.thumbnail,
                bgImage: o.volumeInfo.imageLinks.thumbnail,
                autors: o.volumeInfo.authors.join(', '),
                categories: o.volumeInfo.categories,
                isAddedToCart: false,
                currentQuantity: 1,
                publishDate: o.volumeInfo.publishedDate
            }
        })
        return {
            ...data,
            items: [...newItems]
        }
    } else {
        return {
            id: data.id,
            price: data.saleInfo.listPrice.amount,
            currency: data.saleInfo.listPrice.currencyCode,
            title: data.volumeInfo.title,
            subtitle: data.volumeInfo.subtitle,
            smImage: data.volumeInfo.imageLinks.thumbnail,
            bgImage: data.volumeInfo.imageLinks.thumbnail,
            autors: data.volumeInfo.authors,
            categories: data.volumeInfo.categories,
            isAddedToCart: false,
            description: data.volumeInfo.description,
            currentQuantity: 1,
            publishDate: data.volumeInfo.publishedDate           
        }
    }
    
}

export default helperFeilterApiResponse

 