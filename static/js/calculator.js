const screen_calculator = document.querySelector(".screen");

// adjuntar numero
function addNumber(value) {
  if (screen_calculator.textContent === "0") {
    screen_calculator.textContent = value;
  } else {
    screen_calculator.textContent += value;
  }
}

// nos permite eliminar el numero/expresion de la pantalla
function deleteInfoScreen() {
  screen_calculator.textContent = "0";
}

function evaluateInfoScreen() {
  try {
    screen_calculator.textContent = eval(
      screen_calculator.textContent.replace("X", "*")
    );
  } catch (error) {
    screen_calculator.textContent = "SINTAX ERROR";
  }
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      deleteInfoScreen();
    } else if (value === "=") {
      evaluateInfoScreen();
    } else {
      addNumber(value);
    }
  });
});
