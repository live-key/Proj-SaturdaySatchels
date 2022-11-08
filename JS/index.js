const reviews = document.querySelectorAll(".review");

const delay = 8000;
let count = 0;

reviews[count].style.opacity = 1;

setInterval(nextRev, delay);

function nextRev() {
  reviews[count].style.opacity = 0;

  count = (count+1) % reviews.length;

  reviews[count].style.opacity = 1;
}
