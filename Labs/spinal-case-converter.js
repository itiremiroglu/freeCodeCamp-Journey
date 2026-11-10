function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[\s_]+/).join("-");
}