const showMenu = () => {
  const menuBtn = document.querySelector(".header-nav__burger");
  const menuContainer = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");
  const body = document.querySelector("body");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menuContainer.style.transform = "translateX(0)";
      menuContainer.style.visibility = "visible";
      body.classList.add("lock");
    });
    closeBtn.addEventListener("click", () => {
      menuContainer.style.transform = "translateX(100%)";
      menuContainer.style.visibility = "hidden";
      body.classList.remove("lock");
    });
  }
};

window.addEventListener("DOMContentLoaded", showMenu);
