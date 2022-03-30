const cardRating = document.querySelector(".card-rating");
const cardResult = document.querySelector(".card-result");
const buttonRatings = document.querySelectorAll(".card-rating__item");
const cardSubmitButton = document.querySelector(".card-rating__button");
const ratingText = document.getElementById("rating");

const removebuttonRatingClass = function () {
  buttonRatings.forEach((btn) => btn.classList.remove("active"));
};

buttonRatings.forEach((btnRating) => {
  btnRating.addEventListener("click", function (e) {
    removebuttonRatingClass();
    const clicked = e.target;
    clicked.classList.add("active");
    ratingValue = clicked.dataset.rating;
    ratingText.textContent = `You selected ${ratingValue} out of 5`;
  });
});

cardSubmitButton.addEventListener("click", function () {
  cardRating.classList.remove("visible");
  cardResult.classList.add("visible");
});
