function reverseString(string) {
    try {
        var stringArray = string.split("");
        stringArray.reverse();
        var reversed = stringArray.join("");
        console.log(reversed);
    } catch (e) {
        console.log(e.message);
        console.log(string);
    }
}
