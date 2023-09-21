const letters = document.querySelectorAll(".letters .card");

function flipLetter(index) {
  if (index < letters.length) {
    setTimeout(function () {
      letters[index].classList.add("flip");
      flipLetter(index + 1);
    }, 500); // Adjust the delay as needed (1 second in this example)
  }
}

// Start the animation sequence
flipLetter(0);
