window.onload = () => {
    const expressionElement = document.getElementById("expression");
    let expression: string = "";

    const handleButtonClick = (value: string) => {
        if (value == "=") {
            try {
                expression = eval(expression).toString();
            }
            catch (error) {
                expression = "Ошибка";
            }
        }
        else if (value == "C"){
            expression = '';
        }
        else {
            expression += value;
        }
    
        expressionElement!.textContent = expression;
    };
    
    const numberButtons = document.querySelectorAll(".number-button");
        numberButtons.forEach(button => {
            button.addEventListener("click", () => {
                handleButtonClick(button.textContent!);
        });
    });
  
    const operationButtons = document.querySelectorAll(".operation-button");
        operationButtons.forEach(button => {
            button.addEventListener("click", () => {
                handleButtonClick(button.textContent!);
        });
    });
  
    const equalsButton = document.querySelector(".equals-button");
        equalsButton?.addEventListener("click", () => {
            handleButtonClick("=");
    });

    const cleanButton = document.querySelector(".clean-button");
        cleanButton?.addEventListener("click", () => {
            handleButtonClick("C");
    });
};
  