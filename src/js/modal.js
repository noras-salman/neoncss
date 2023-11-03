class Dismissible {
  constructor(names) {
    this.names = names;

    this.modals = [];
    this.triggers = [];
    this.closeTriggers = [];

    for (let name of names) {
      console.log(name);
      this.modals = [...this.modals, ...document.querySelectorAll(`.${name}`)];
      this.triggers = [
        ...this.triggers,
        ...document.querySelectorAll(`*[action="${name}"]`),
      ];
      this.closeTriggers = [
        ...this.closeTriggers,
        ...document.querySelectorAll(`*[action="dismiss-${name}"]`),
      ];
    }
  }

  static init(names) {
    const instance = new Dismissible(names);
    for (i = 0; i < instance.triggers.length; i++) {
      instance.triggers[i].addEventListener("click", (e) => {
        const target = e.target.getAttribute("data");
        document.getElementById(target).classList.add("visible");
      });
    }

    for (i = 0; i < instance.closeTriggers.length; i++) {
      instance.closeTriggers[i].addEventListener("click", (e) => {
        Dismissible.closeAll(names);
      });
    }

    for (i = 0; i < instance.modals.length; i++) {
      instance.modals[i].addEventListener("click", (e) => {
        const dismissable = e.target.getAttribute("dismissable");

        if (e.target.classList.contains(instance.name) && dismissable) {
          /** Clicked outside the box */
          Dismissible.closeAll(names);
        }
      });
    }
  }

  static closeAll(names) {
    const instance = new Dismissible(names);
    for (i = 0; i < instance.modals.length; i++) {
      instance.modals[i].classList.remove("visible");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Dismissible.init(["modal", "settings-bar"]);
});
