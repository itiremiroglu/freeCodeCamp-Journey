function uniteUnique(...arrays) {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        let currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            let item = currentArray[j];
            if (!result.includes(item)) {
                result.push(item);
            }
        }
    }
    return result;
}