// Animation on Scroll lib init
new WOW(
  {
    offset: 0,
    mobile: true,
    resetAnimation: false,
  }
).init();


// Slider settings
const siemaOne = new Siema({
  selector: '.siemaOne',
  duration: 200,
  easing: 'ease-out',
  perPage: {
    100: 1.2,
    640: 2.2,
    768: 2.3,
    1024: 3,
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const siemaTwo = new Siema({
  selector: '.siemaTwo',
  duration: 200,
  easing: 'ease-out',
  perPage: {
    100: 1.2,
    640: 2.2,
    768: 2.3,
    1024: 3,
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

