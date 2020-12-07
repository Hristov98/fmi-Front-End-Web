function vowelsAndConsonants(string) {
    for (let letter of string) {
        if (letter == "a" || letter == "i" || letter == "o" || letter == "e" || letter == "u") {
            console.log(letter);
        }
    }

    for (let letter of string) {
        if (letter != "a" && letter != "i" && letter != "o" && letter != "e" && letter != "u") {
            console.log(letter);
        }
    }
}
