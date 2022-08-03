let menuIcon = document.querySelector(`.fa-bars`);

menuIcon.addEventListener(`click`, () => {
  let ul = document.querySelector(`header nav ul`);
  ul.style.left = 0;
  ul.addEventListener(`click`, () => {
    ul.style.left = `-100rem`;
  })
})