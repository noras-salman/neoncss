class MobileNavigationManager {
  constructor() {
    this.navMenu = document.querySelectorAll(".nav-mobile-menu");
    this.triggers = document.querySelectorAll('*[action="mobile-toggle"]');
  }

  static init() {
    const instance = new MobileNavigationManager();
    for (let i = 0; i < instance.triggers.length; i++) {
      instance.triggers[i].addEventListener("click", (e) => {
        const target = e.target.getAttribute("data");
        document.getElementById(target).classList.add("visible");
      });
    }

    for (let i = 0; i < instance.navMenu.length; i++) {
      instance.navMenu[i].addEventListener("click", (e) => {
        const dismissible = e.target.getAttribute("dismissible");
        if (e.target.classList.contains("nav-mobile-menu") && dismissible) {
          /** Clicked outside the box */
          MobileNavigationManager.close();
        }
      });
    }
  }

  static close() {
    const instance = new MobileNavigationManager();
    for (let i = 0; i < instance.navMenu.length; i++) {
      instance.navMenu[i].classList.remove("visible");
    }
  }
}
