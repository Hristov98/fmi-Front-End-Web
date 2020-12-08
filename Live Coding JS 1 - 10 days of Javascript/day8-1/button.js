var clickButton = document.createElement("button");
clickButton.id = "btn";
clickButton.innerHTML = "0";
document.body.appendChild(clickButton);

clickButton.addEventListener("click", function () {
    clickButton.innerHTML++;
});
