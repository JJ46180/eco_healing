// const header_btnHandler = () => {
//   var header_btnEl = document.querySelector(".header_btn>img");
//   var menu_pageEl = document.querySelector(".menu_page");

//   let i = 0;
//   if (i == 0) {
//     header_btnEl.src = "img/close.png";
//     menu_pageEl.style.display = "block";
//     i++;
//     console.log(i);
//   } else if (i == 1) {
//     header_btnEl.src = "img/header_btn.png";
//     menu_pageEl.style.display = "none";
//     i = 0;
//   }
// };

// addEventListener("click", header_btnHandler);

$(document).ready(function () {
  var header_btnEl = document.querySelector(".header_btn>img");
  var menu_pageEl = document.querySelector(".menu_page");
  var i = 0;
  $(".header_btn").click(function () {
    if (i == 0) {
      header_btnEl.src = "img/close.png";
      menu_pageEl.style.display = "block";
      i++;
    } else if (i == 1) {
      header_btnEl.src = "img/header_btn.png";
      menu_pageEl.style.display = "none";
      i = 0;
    }
  });
});
