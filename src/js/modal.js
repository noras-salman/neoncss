class Dismissible {
  static MODAL = "modal";
  static SETTINGS_BAR = "settings-bar";
  constructor(names) {
    this.names = names;

    this.modals = [];
    this.triggers = [];
    this.closeTriggers = [];

    for (let name of names) {
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

        if (
          document
            .getElementById(target)
            .classList.contains(Dismissible.SETTINGS_BAR)
        ) {
          for (let node of document.getElementById(target).childNodes) {
            if (node?.classList?.contains("settings-bar-box"))
              node.classList.add("slide-in");
          }
        }

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
        const dismissible = e.target.getAttribute("dismissible");

        for (let name of instance.names) {
          if (e.target.classList.contains(name) && dismissible) {
            /** Clicked outside the box */
            Dismissible.closeAll(names);
          }
        }
      });
    }
  }

  static closeAll(names) {
    const instance = new Dismissible(names);
    for (i = 0; i < instance.modals.length; i++) {
      for (let name of instance.names) {
        instance.modals[i].classList.remove("visible");
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Dismissible.init(["modal", "settings-bar"]);
});
