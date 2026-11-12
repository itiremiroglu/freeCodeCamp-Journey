function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    if (str.match(/^[aeiou]/)) {
        return str + "way";
    }
    let consonantCluster = str.match(consonantRegex)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}