"use strict";

const modalWindow = document.querySelector(".modal-window"),
  modalContent = document.querySelector(".modal-content"),
  signUpBtn = document.querySelector(".register-btn"),
  closeBtn = document.querySelector(".close-btn"),
  introProduct = document.querySelector(".intro__product--info");

signUpBtn.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("modal-window"));
  if (e.target.classList.contains("modal-window")) {
    // modalContent.classList.toggle("shaker");
    modalWindow.classList.toggle("hidden");
  }
});

// DYNAMIC ELEMENTS

let cards = [
  {
    id: 1,
    img: "./images/user 1.png",
    title: "30K",
    description: "User Order",
  },
  {
    id: 2,
    img: "./images/star 1.svg",
    title: "20K",
    description: "Reviews(4.8)",
  },
  {
    id: 3,
    img: "./images/harvest 1.svg",
    title: "300",
    description: "Items",
  },
];

const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(className);
  }
  if (content) {
    element.innerHTML = content;
  }

  return element;
};

cards.forEach((items) => {
  const newElement = createElement(
    "div",
    "",
    `<div
  class="card hover:shadow-lg bg-white flex justify-between items-center py-6 pr-11 pl-8 mb-[30px] rounded-sm"
>
  <span class="p-4 bg-green-100 rounded-full" alt="user" />
  <img src="${items.img}" alt="user" />
  </span>
  <div class="flex flex-col items-center justify-center ml-3">
    <h2 class="text-5xl font-normal">${items.title}</h2>
    <p>${items.description}</p>
  </div>
</div>`
  );
  introProduct.append(newElement);
});
