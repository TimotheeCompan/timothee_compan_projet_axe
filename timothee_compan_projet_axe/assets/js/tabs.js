let tab1 = document.querySelector(".tab1");
let tab2 = document.querySelector(".tab2");
let tab3 = document.querySelector(".tab3");
let div = document.querySelector(".content1");
let div2 = document.querySelector(".content2");
let div3 = document.querySelector(".content3");
tab1.classList.add("tab-active");
div.classList.add("active");
tab1.addEventListener("click", function () {
  tab1.classList.add("tab-active");
  div.classList.add("active");
  tab2.classList.remove("tab-active");
  div2.classList.remove("active");
  tab3.classList.remove("tab-active");
  div3.classList.remove("active");
});
tab2.addEventListener("click", function () {
  tab2.classList.add("tab-active");
  div2.classList.add("active");
  tab1.classList.remove("tab-active");
  div.classList.remove("active");
  tab3.classList.remove("tab-active");
  div3.classList.remove("active");
});
tab3.addEventListener("click", function () {
  tab3.classList.add("tab-active");
  div3.classList.add("active");
  tab1.classList.remove("tab-active");
  div.classList.remove("active");
  tab2.classList.remove("tab-active");
  div2.classList.remove("active");
});
