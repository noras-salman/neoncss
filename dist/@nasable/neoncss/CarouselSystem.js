export class CarouselElement {
  static DefaultConfig = { delay: 3500, auto: true };

  static init(id, config = null) {
    new CarouselElement(id, config);
  }

  constructor(id, config) {
    this.element = null;
    if (id) this.element = document.getElementById(id);
    else throw new Error("Can't initialize without id");
    this.config = { ...CarouselElement.DefaultConfig, ...config };
    this.current = 0;
    this.circleIndicators = [];
    this.items = this.element.querySelectorAll(".item");
    this.indicator = this.element.querySelectorAll(".carousel-indicator");
    if (this.circleIndicators.length > 0) {
      /**only take first indicator */
      this.indicator = this.indicator[0];
      for (let i = 0; i < this.items.length; i++) {
        const circle = document.createElement("div");
        circle.classList.add("carousel-indicator-circle");
        this.indicator.appendChild(circle);
        this.circleIndicators.push(circle);
      }
    } else {
      this.indicator = null;
      this.circleIndicators = null;
    }

    this.slideIn(this.current, 0);
  }

  slideOut(order) {
    this.items[order].classList.remove("slide-in");
    this.items[order].classList.add("slide-out");
    if (this.circleIndicators != null && this.circleIndicators.length)
      this.circleIndicators[order].classList.remove("selected");

    if (!this.config.auto) return;
    if (order == this.items.length - 1) {
      this.slideIn(0);
    } else {
      this.slideIn(order + 1);
    }
  }

  slideIn(order) {
    this.current = order;
    this.items[order].classList.remove("slide-out");
    this.items[order].classList.add("slide-in");
    if (this.circleIndicators != null && this.circleIndicators.length)
      this.circleIndicators[order].classList.add("selected");
    if (!this.config.auto) return;
    this._prepareNext(order);
  }

  _prepareNext(order) {
    setTimeout(() => {
      this.slideOut(order);
    }, this.config.delay);
  }
}

export class CarouselManager {
  /**
 Usage :  
 -  CarouselManager.init()
 -  CarouselManager.init({config:{ delay: 3500, auto: true }})
 -  CarouselManager.init({ id:'carousel1' })
 -  CarouselManager.init({ id:'carousel1' ,config:{ delay: 3500, auto: true }})
 */
  static DefaultConfig = {
    id: null,
    config: CarouselElement.DefaultConfig,
  };
  constructor(config) {
    this.globalElements = document.querySelectorAll(".carousel");

    this.config = { ...CarouselManager.DefaultConfig, ...config };
    this.elements = [];
    if (this.config.id) {
      this.elements.push(
        new CarouselElement(this.config.id, this.config.config)
      );
    } else {
      for (let element of this.globalElements) {
        if (!element.id) {
          element.id = `carousel-${Math.random().toString(36).substring(2)}`;
        }
        this.elements.push(new CarouselElement(element.id, this.config.config));
      }
    }
  }

  static init(config = CarouselManager.DefaultConfig) {
    const carouselManager = new CarouselManager(config);
  }
}
