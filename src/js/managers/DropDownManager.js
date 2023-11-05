class DropDownManager {
  constructor() {
    this.dropDowns = document.querySelectorAll(".dropdown-menu");
    this.triggers = document.querySelectorAll(
      '*[action="dropdown-menu-toggle"]'
    );
  }

  static init() {
    const instance = new DropDownManager();
    const bodyRect = document.body.getBoundingClientRect();
    for (let i = 0; i < instance.triggers.length; i++) {
      instance.triggers[i].addEventListener("click", (e) => {
        const target = e.target.getAttribute("data");
        //show
        document.getElementById(target).classList.add("visible");
        //calc position
        const triggerRect = instance.triggers[i].getBoundingClientRect();
        const targetRect = document
          .getElementById(target)
          .getBoundingClientRect();

        let y = triggerRect.top + triggerRect.height;
        let x = triggerRect.left;
        const xEdgeDistance = bodyRect.width - (x + targetRect.width);
        if (xEdgeDistance < 0) {
          x = x - xEdgeDistance;
        }
        document.getElementById(target).style.top = y + "px";

        document.getElementById(target).style.left = x + "px";
      });
    }
    document.addEventListener("click", (documentEvent) => {
      const action = documentEvent.target.getAttribute("action");
      if (!action || action != "dropdown-menu-toggle") {
        DropDownManager.close();
      }
    });
  }

  static close() {
    const instance = new DropDownManager();
    for (let i = 0; i < instance.dropDowns.length; i++) {
      instance.dropDowns[i].classList.remove("visible");
    }
  }
}
