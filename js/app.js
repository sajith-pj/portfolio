const btn = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-menu");
const closeNav = document.querySelector(".close-nav");
const role = document.querySelector("#tag-role");
const contactFormSubmitBtn = document.querySelector("#submit-contact-form");

// CONTACT FORM

const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const emal = document.querySelector("#emal");
const message = document.querySelector("#message");

const generateError = (
  tag = "span",
  id,
  className = "error-msg",
  message = "Required"
) => {
  let errorTag = document.createElement(tag);
  errorTag.className = className;
  errorTag.id = id;
  errorTag.innerText = message;
  return errorTag;
};

const removeError = (event, inputId) => {
  let isErrorExist = document.querySelector(`#${inputId}-error`);
  console.log(inputId, "dfsdfds");
  console.log(isErrorExist, "dfsdfds");
  if (isErrorExist) {
    event.target.classList.remove("error-border");
    isErrorExist.remove();
  }
};

const valdiateForm = (inputs) => {
  let error = false;
  inputs.forEach((input) => {
    let targetInput = input.input;
    let value = targetInput.value;
    if (value == "") {
      // targetInput
      let isErrorExist = document.querySelector(`#${targetInput.id}-error`);
      if (!isErrorExist) {
        error = true;
        let errorTag = generateError(
          "span",
          `${targetInput.id}-error`,
          "error-msg",
          input.errorMsg
        );

        targetInput.classList.add("error-border");
        targetInput.addEventListener("keydown", (event) => {
          removeError(event, targetInput.id);
        });
        targetInput.parentElement.appendChild(errorTag);
      }
    }
  });
  return error;
};

contactFormSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let isValid = valdiateForm([
    { input: name, errorMsg: "Name is required" },
    { input: phone, errorMsg: "Phone number is required" },
    { input: email, errorMsg: "Email is required" },
    { input: message, errorMsg: "Message is required" },
  ]);
  if (isValid) return;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyrE68xKk2IWcnQgtEb84ur2C2QLNISA9MEbg1KPWqzu8FEw5yedDJHMNzqMDcgemXW/exec",
    data: $("#contact-form").serialize(),
    method: "post",
    success: function (response) {
      console.log(response);
      Toastify({
        text: "🙌  Got your message! I will get back to you soon!",
        position: "right",
        gravity: "bottom",
        style: {
          background: "#f6083a",
        },
      }).showToast();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});

closeNav.addEventListener("click", () => {
  menu.classList.add("hidden");
});

btn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("load-nav");
});
