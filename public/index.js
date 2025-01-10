const screen = document.getElementById("screen");

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      screen.value = "";
      previous.value = "";
    } else if (value === "DEL") {
      screen.value = screen.value.slice(0, -1);
    }
    if (value === "=") {
      //screen.value = eval(screen.value.replace(/÷/g, "/").replace(/X/g, "*"));
      screen.value = "Kupal kaba boss? Magcode kana"
    } else {
      screen.value += value;
    }
  });
});
