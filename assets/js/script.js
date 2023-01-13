"use strict";

const faqQuestionContainer = document.querySelector(
  "[data-question-container]"
);

faqQuestionContainer.addEventListener("click", function (e) {
  let clickedBtn;
  let faqQuestionBox;
  const classActive = "active";

  clickedBtn = e.target.closest("[data-faq-btn]");

  if (!clickedBtn) return;
  faqQuestionBox = clickedBtn.closest("[data-question]");

  clickedBtn.classList.toggle(classActive);
  faqQuestionBox.nextElementSibling.classList.toggle(classActive);

  if (!faqQuestionBox.nextElementSibling.classList.contains(classActive))
    return clickedBtn.setAttribute("aria-expanded", "false");
  clickedBtn.setAttribute("aria-expanded", "true");

  document.querySelectorAll("[data-faq-btn].active").forEach((faqBtn) => {
    if (faqBtn === clickedBtn) return;
    faqBtn.classList.remove(classActive);
    faqBtn.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll("[data-desc].active").forEach((desc) => {
    if (desc === faqQuestionBox.nextElementSibling) return;
    desc.classList.remove(classActive);
  });
});
