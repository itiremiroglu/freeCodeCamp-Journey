const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
    let flags = "";
    if (caseInsensitiveFlag.checked) {
        flags += "i";
    }
    if (globalFlag.checked) {
        flags += "g";
    }
    return flags;
}

testButton.addEventListener("click", () => {
    const pattern = regexPattern.value;
    const string = stringToTest.value;
    const flags = getFlags();
    try {
        const regex = new RegExp(pattern, flags);
        if (regex.test(text)) {
            const matches = text.match(regex);
            stringToTest.innerHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
            testResult.textContent = matches ? matches.join(", ") : "No match";
        } else {
            stringToTest.innerHTML = text;
            testResult.textContent = "no match";
        }
    } catch (e) {
        testResult.textContent = "Invalid regular expression";
    }
});