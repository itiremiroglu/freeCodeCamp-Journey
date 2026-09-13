function pairElement(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let base = str[i];
        if (base === "A") {
            result.push(["A", "T"]);
        } else if (base === "T") {
            result.push(["T", "A"]);
        } else if (base === "C") {
            result.push(["C", "G"]);
        } else if (base === "G") {
            result.push(["G", "C"]);
        }
    }
    return result;
}