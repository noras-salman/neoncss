class AutocompleteManager {
  constructor(triggerId) {
    this.globalResults = document.querySelectorAll(".autocomplete-results");

    this.items = [];
    this.triggerId = triggerId;
    this.onChange = null;
    this.onSelect = null;
  }

  setOnChange(callback) {
    this.onChange = callback;
  }

  setOnSelect(callback) {
    this.onSelect = callback;
  }

  getTriggerElement() {
    return document.getElementById(this.triggerId);
  }

  addUi(item, index) {
    const instance = this;
    const element = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = `${item}`;
    element.addEventListener("click", function (e) {
      instance.getTriggerElement().value = item;
      e.preventDefault();
      instance.onSelect(item, index, instance);
      instance.results.classList.remove("visible");
    });
    element.appendChild(a);
    this.list.appendChild(element);
  }

  setItems(items) {
    if (this.results) this.results.remove();
    this.results = document.createElement("div");

    this.results.classList.add("autocomplete-results");

    this.list = document.createElement("ul");
    this.list.classList.add("list");

    this.items = items;
    let index = 0;
    for (let item of this.items) {
      this.addUi(item, index);
      index++;
    }
    if (items?.length) {
      this.results.classList.add("visible");
    }
    this.results.appendChild(this.list);
    this.getTriggerElement().parentNode.appendChild(this.results);
  }

  setup() {
    const instance = this;
    this.getTriggerElement().addEventListener("input", function (e) {
      instance.onChange(e.target.value || "", instance);
    });
  }

  static init(triggerId, onChange, onSelect) {
    const instance = new AutocompleteManager(triggerId);
    instance.setOnChange(onChange);
    instance.setOnSelect(onSelect);
    instance.setup();

    return instance;
  }

  static closeAll() {
    const instance = new AutocompleteManager();
    for (let i = 0; i < instance.globalResults.length; i++) {
      instance.globalResults[i].classList.remove("visible");
    }
  }
}
