let themeOfCards = localStorage.getItem("themeofcards");

if (themeOfCards == null) {
  setTheme("light");
} else {
  setTheme(themeOfCards);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "dark") {
    document.getElementById("theme-style").href = "dark.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "brown") {
    document.getElementById("theme-style").href = "brown.css";
  }

  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  localStorage.setItem("themeofcards", mode);
}
