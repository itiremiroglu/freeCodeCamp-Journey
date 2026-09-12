function largestOfAll(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push(Math.max(...arr[i]));
    }
    return results;
}