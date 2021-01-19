var container = document.createElement("div");
container.id = "btns";
document.body.appendChild(container);

for (let i = 1; i <= 9; i++) {
    var button = document.createElement("button");
    button.id = "btn" + i;
    button.innerHTML = i;
    document.getElementById("btns").appendChild(button);
}

document.getElementById("btn5").addEventListener("click", function () {
    let valueOfButtonNine = document.getElementById("btn9").innerHTML;
    document.getElementById("btn9").innerHTML = document.getElementById("btn6").innerHTML;
    document.getElementById("btn6").innerHTML = document.getElementById("btn3").innerHTML;
    document.getElementById("btn3").innerHTML = document.getElementById("btn2").innerHTML;
    document.getElementById("btn2").innerHTML = document.getElementById("btn1").innerHTML;
    document.getElementById("btn1").innerHTML = document.getElementById("btn4").innerHTML;
    document.getElementById("btn4").innerHTML = document.getElementById("btn7").innerHTML;
    document.getElementById("btn7").innerHTML = document.getElementById("btn8").innerHTML;
    document.getElementById("btn8").innerHTML = valueOfButtonNine;
});
