const btn = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-menu");
const closeNav = document.querySelector(".close-nav");
const role = document.querySelector("#tag-role");

closeNav.addEventListener("click", () => {
  menu.classList.add("hidden");
});
btn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("load-nav");
});

// var TxtType = function (el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = "";
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function () {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//   var that = this;
//   var delta = 200 - Math.random() * 100;

//   if (this.isDeleting) {
//     delta /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function () {
//     that.tick();
//   }, delta);
// };

// window.onload = function () {
//   var elements = document.querySelectorAll("#tag-role");
//   for (var i = 0; i < elements.length; i++) {
//     var toRotate = [
//       "Hi, Im Si.",
//       "I am Creative.",
//       "I Love Design.",
//       "I Love to Develop.",
//     ];
//     var period = 2000;
//     if (toRotate) {
//       new TxtType(elements[i], toRotate, period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//   document.body.appendChild(css);
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let tmp = arr.forEach((elem, index) => {
//   return (arr[index] = elem * elem);
// });
// let tmp2 = arr.filter((elem) => {
//   return elem;
// });

// console.log(tmp2);
