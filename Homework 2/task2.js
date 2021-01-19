function processData(input) {
    input = eval(input);
    var resultArray = getResultArray(input);
    console.log(JSON.stringify(resultArray));
}

function getResultArray(inputArray) {
    let resultArray = [];

    let numberCounter = countNumbersInInput(inputArray);
    if (numberCounter > 0) {
        resultArray.push(numberCounter);
    }

    for (let i = 0; i < inputArray.length; i++) {
        switch (typeof inputArray[i]) {
            case "string": {
                let reversedString = inputArray[i].split("").reverse().join("");
                resultArray.push(reversedString);
                break;
            }
            case "function": {
                let functionResult = inputArray[i](42);
                resultArray.push(functionResult);
                break;
            }
            case "object": {
                if (Array.isArray(inputArray[i])) {
                    let modifiedArray = getModifiedArray(inputArray[i]);
                    resultArray.push(modifiedArray);
                } else {
                    for (const [key, value] of Object.entries(inputArray[i])) {
                        let objectString = `${key}: ${value}`;
                        resultArray.push(objectString);
                    }
                }
            }
        }
    }

    return resultArray;
}

function countNumbersInInput(inputArray) {
    let numberCounter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] != "string" && !isNaN(inputArray[i])) {
            numberCounter++;
        }
    }

    return numberCounter;
}

function getModifiedArray(array) {
    let containsNestedArray = false;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            containsNestedArray = true;
            break;
        }
    }

    let modifiedArray = new Array();
    if (containsNestedArray) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                let nestedArray = getNestedArrayElements(array[i]);
                for (let j = 0; j < nestedArray.length; j++) {
                    modifiedArray.push(nestedArray[j]);
                }
            } else {
                modifiedArray.push(array[i]);
            }
        }
    } else {
        modifiedArray = array.sort().slice();
    }

    return modifiedArray;
}

function getNestedArrayElements(array) {
    let modifiedArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            let nestedArray = getNestedArrayElements(array[i]);
            for (let j = 0; j < nestedArray.length; j++) {
                modifiedArray.push(nestedArray[j]);
            }
        } else {
            modifiedArray.push(array[i]);
        }
    }

    return modifiedArray;
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
