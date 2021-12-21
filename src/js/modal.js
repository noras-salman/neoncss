class Modal {
  constructor() {
    this.modals = document.querySelectorAll(".modal");
    this.triggers = document.querySelectorAll('*[action="modal"]');
    this.closeTriggers = document.querySelectorAll('*[action="dismiss-modal"]');
  }

  static init() {
    const instance = new Modal();
    for (i = 0; i < instance.triggers.length; i++) {
      instance.triggers[i].addEventListener("click", (e) => {
        const target = e.target.getAttribute("data");
        document.getElementById(target).classList.add("visible");
      });
    }

    for (i = 0; i < instance.closeTriggers.length; i++) {
      instance.closeTriggers[i].addEventListener("click", (e) => {
        Modal.closeAll();
      });
    }

    for (i = 0; i < instance.modals.length; i++) {
      instance.modals[i].addEventListener("click", (e) => {
        const dismissable = e.target.getAttribute("dismissable");

        if (e.target.classList.contains("modal") && dismissable) {
          /** Clicked outside the box */
          Modal.closeAll();
        }
      });
    }
  }

  static closeAll() {
    const instance = new Modal();
    for (i = 0; i < instance.modals.length; i++) {
      instance.modals[i].classList.remove("visible");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Modal.init();
});
