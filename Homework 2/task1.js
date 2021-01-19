function processData(input) {
    let inputLowerCase = input.toLowerCase();
    let alphabetCounters = getCountOfEachLetter(inputLowerCase);
    let mapOfValueOccurrences = getNumberOfDisctinctCounters(alphabetCounters);
    printStringStatus(mapOfValueOccurrences);
}

function getCountOfEachLetter(inputString) {
    var alphabetCounters = new Map();
    for (let i = 0; i < inputString.length; i++) {
        var letter = inputString.charAt(i);

        if (alphabetCounters.has(letter)) {
            alphabetCounters.set(letter, alphabetCounters.get(letter) + 1);
        } else {
            alphabetCounters.set(letter, 1);
        }
    }

    return Array.from(alphabetCounters.values());
}

function getNumberOfDisctinctCounters(counterArray) {
    var mapOfValueOccurrences = new Map();
    for (let i = 0; i < counterArray.length; i++) {
        if (mapOfValueOccurrences.has(counterArray[i])) {
            mapOfValueOccurrences.set(
                counterArray[i],
                mapOfValueOccurrences.get(counterArray[i]) + 1
            );
        } else {
            mapOfValueOccurrences.set(counterArray[i], 1);
        }
    }

    return mapOfValueOccurrences;
}

function printStringStatus(mapOfValueOccurrences) {
    if (mapOfValueOccurrences.size == 1) {
        console.log("GOOD");
    } else if (mapOfValueOccurrences.size == 2) {
        let uniqueCounterOccurrences = Array.from(mapOfValueOccurrences.values());
        
        if (uniqueCounterOccurrences[0] == 1 || uniqueCounterOccurrences[1] == 1) {
            console.log("BAD");
        } else {
            console.log("UGLY");
        }
    } else {
        console.log("UGLY");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
