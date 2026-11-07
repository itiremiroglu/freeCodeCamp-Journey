const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const trimmedValue = userInput.value.trim();
    if (trimmedValue === "") {
        alert("Please input a value");
        return;
    }
    const cleanStr = trimmedValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    if (cleanStr === reversedStr) {
        resultDiv.textContent = `${userInput.value} is a palindrome.`;
    } else {
        resultDiv.textContent = `${userInput.value} is not a palindrome.`;
    }
});