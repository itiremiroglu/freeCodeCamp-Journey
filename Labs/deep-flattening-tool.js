function steamrollArray(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(steamrollArray(curr));
        }
        return acc.concat(curr);
    }, []);
}