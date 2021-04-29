const subNavList = document.querySelectorAll("nav ul li a:not(:only-child)");

subNavList.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".nav-dropdown").forEach((item2) => {
      item2.classList.remove("show");
    });

    this.closest(".nav-item").querySelector("ul").classList.toggle("show");
    e.stopPropagation();
    console.log(this);
  });
});

document.querySelector("html").addEventListener("click", function (e) {
  document.querySelectorAll(".nav-dropdown").forEach((item2) => {
    item2.classList.remove("show");
  });
});
