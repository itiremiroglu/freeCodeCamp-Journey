function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    localArray.splice(n, 0, ...arr1);
    return localArray;
}