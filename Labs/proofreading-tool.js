function isPalindrome(word) {
    const lower = word.toLowerCase();
    const reversed = lower.split("").reverse().join("");
    return lower === reversed;
}

function findPalindromeBreaks(words) {
    if (!words || words.length === 0) {
        return [];
    }
    const breaks = [];
    for (let i = 0; i < words.length; i++) {
        if (!isPalindrome(words[i])) {
            breaks.push(i)
        }
    }
    return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
    if (!words || phraseLength >= words.length || phraseLength <= 0) {
        return [];
    }
    const phraseCounts = {};
    const totalSubstrings = words.length - phraseLength + 1;

    for (let i = 0; i < totalSubstrings; i++) {
        const phrase = words.slice(i, i + phraseLength).join(" ");
        phraseCounts[phrase] = (phraseCounts[phrase] || 0) + 1;
    }
    const result = [];
    for (let i = 0; i < totalSubstrings; i++) {
        const phrase = words.slice(i, i + phraseLength).join(" ");
        if (phraseCounts[phrase] > 1) {
            result.push(i);
        }
    }
    return result;
}

function analyzeTexts(texts, phraseLength) {
    if (!texts || texts.length === 0) {
        return [];
    }
    const results = [];
    for (const words of texts) {
        results.push({
            repeatedPhrases: findRepeatedPhrases(words, phraseLength),
            palindromeBreaks: findPalindromeBreaks(words)
        });
    }
    return results;
}