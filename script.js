let small_cards = document.getElementsByClassName("card");
let big_cards = document.getElementsByClassName("tops");
let theme;

let one = document.getElementById("one-card");
let two = document.getElementById("two-card");
let three = document.getElementById("three-card");
let four = document.getElementById("four-card");

for (var i = 0; small_cards.length > i; i++) {
  small_cards[i].addEventListener("click", function (event) {
    let mode = this.dataset.mode;
    theme = mode;
    let big = document.getElementById(`${mode}-card`);
    big.classList.add("visible");
    one.classList.add("hidden");
    two.classList.add("hidden");
    three.classList.add("hidden");
    four.classList.add("hidden");
  });
}

for (var i = 0; big_cards.length > i; i++) {
  big_cards[i].addEventListener("click", function () {
    let big = document.getElementById(`${theme}-card`);
    let small = document.getElementById("one-card");
    big.classList.remove("visible");
    one.classList.remove("hidden");
    two.classList.remove("hidden");
    three.classList.remove("hidden");
    four.classList.remove("hidden");
  });
}
