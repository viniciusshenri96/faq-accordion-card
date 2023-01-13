"use strict";

const faqQuestionContainer = document.querySelector(".faq__question-box");
const questionAll = document.querySelectorAll(".faq__question");
const faqDescAll = document.querySelectorAll(".faq__desc");

faqQuestionContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq__btn");
  console.log(clicked);
});
