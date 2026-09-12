function pyramid(char, count, inverted) {
    let rows = [];
    for (let i = 1; i <= count; i++) {
        let spaces = " ".repeat(count - i);
        let pattern = char.repeat(2 * i - 1);
        if (inverted) {
            rows.unshift(spaces + pattern);
        } else {
            rows.push(spaces + pattern);
        }
    }
    return "\n" + rows.join("\n") + "\n";
}