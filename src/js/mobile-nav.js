class MobileNav {
  constructor() {
    this.navMenu = document.querySelectorAll(".nav-mobile-menu");
    this.triggers = document.querySelectorAll('*[action="mobile-toggle"]');
  }

  static init() {
    const instance = new MobileNav();
    for (let i = 0; i < instance.triggers.length; i++) {
      instance.triggers[i].addEventListener("click", (e) => {
        const target = e.target.getAttribute("data");
        document.getElementById(target).classList.add("visible");
      });
    }

    for (let i = 0; i < instance.navMenu.length; i++) {
      instance.navMenu[i].addEventListener("click", (e) => {
        const dismissable = e.target.getAttribute("dismissable");
        if (e.target.classList.contains("nav-mobile-menu") && dismissable) {
          /** Clicked outside the box */
          MobileNav.close();
        }
      });
    }
  }

  static close() {
    const instance = new MobileNav();
    for (let i = 0; i < instance.navMenu.length; i++) {
      instance.navMenu[i].classList.remove("visible");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  MobileNav.init();
});