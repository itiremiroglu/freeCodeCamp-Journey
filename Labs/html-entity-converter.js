function convertHTML(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === "&") {
            result += "&amp;";
        } else if (char === "<") {
            result += "&lt;";
        } else if (char === ">") {
            result += "&gt;";
        } else if (char === '"') {
            result += "&quot;";
        } else if (char === "'") {
            result += "&apos;";
        } else {
            result += char;
        }
    }
    return result;
}