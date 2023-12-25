window.onload = function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const submenus = document.querySelectorAll(".sub-menu");

  function closeSubmenus() {
    submenus.forEach(function (submenu) {
      submenu.classList.remove("open");
    });
  }

  menuItems.forEach(function (menuItem) {
    const submenu = menuItem.querySelector(".sub-menu");

    menuItem.addEventListener("click", function (e) {
      if (!submenu.classList.contains("open")) {
        closeSubmenus();
      }

      submenu.classList.toggle("open");
    });
  });

  // Mobile actions

  const mobileButton = document.getElementById("mobile-button");

  mobileButton.addEventListener("click", function () {
    document.querySelector("header").classList.toggle("mobile");
  });
};
