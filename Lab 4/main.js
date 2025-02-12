window.onload = function () {
    var expressionElement = document.getElementById("expression");
    var expression = "";
    var handleButtonClick = function (value) {
        if (value == "=") {
            try {
                expression = eval(expression).toString();
            }
            catch (error) {
                expression = "Ошибка";
            }
        }
        else if (value == "C") {
            expression = '';
        }
        else {
            expression += value;
        }
        expressionElement.textContent = expression;
    };
    var numberButtons = document.querySelectorAll(".number-button");
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.textContent);
        });
    });
    var operationButtons = document.querySelectorAll(".operation-button");
    operationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.textContent);
        });
    });
    var equalsButton = document.querySelector(".equals-button");
    equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener("click", function () {
        handleButtonClick("=");
    });
    var cleanButton = document.querySelector(".clean-button");
    cleanButton === null || cleanButton === void 0 ? void 0 : cleanButton.addEventListener("click", function () {
        handleButtonClick("C");
    });
};
