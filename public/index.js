const screen = document.getElementById("screen");

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      screen.value = "";
    } else if (value === "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else if (value === "=") {
      screen.value = "Kupal kaba boss?";
      //screen.value = eval(screen.value.replace(/÷/g, "/").replace(/X/g, "*"));
    } else {
      screen.value += value;
    }
  });
});
