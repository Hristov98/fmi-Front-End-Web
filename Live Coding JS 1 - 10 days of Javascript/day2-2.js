function getLetter(string) {
    let letter;

    switch (string.charAt(0)) {
        case "a":
        case "i":
        case "e":
        case "o":
        case "u": {
            letter = "A";
            break;
        }
        case "b":
        case "c":
        case "d":
        case "f":
        case "g": {
            letter = "B";
            break;
        }
        case "h":
        case "j":
        case "k":
        case "l":
        case "m": {
            letter = "C";
            break;
        }
        default: {
            letter = "D";
        }
    }

    return letter;
}
