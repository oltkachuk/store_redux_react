const setUniqCategory = (arrayObjectsResponse) => {
        let arr = []
        arrayObjectsResponse
            .map(c => {
                if (c.categories) {
                    return c.categories
                } else {
                    return ""
                }
            })
            .forEach(e => arr.push(...e))
        let uniqCategory = new Set(arr)   
    return uniqCategory
}

export default setUniqCategory