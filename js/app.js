let deviceWidth = window.screen.width;
// swiper

var swiper = new Swiper(".swiper-1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Count Down

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minuts = document.getElementById("minuts");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let day_dot = document.querySelector(".day_dot");
let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let endDate = "03/22/2023 00:00:00";

let x = setInterval(() => {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let Distance = now - countDown;

  // time calculate for days , hours , minutus and seconds

  let d = Math.floor(Distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((Distance % (1000 * 60)) / 1000);

  // ouput result in elements with id
  days.innerHTML = d + "<br><span>روز</span>";
  hours.innerHTML = h + "<br><span>ساعت</span>";
  minuts.innerHTML = m + "<br><span>دقیقه</span>";
  seconds.innerHTML = s + "<br><span>ثانیه</span>";

  // Animation
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  //Animate Circle dot
  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
  // 360 days / 360 deg == .986
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
  // 360deg  / 24 hrs = 15
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  // 360deg  / 60 min = 6
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
  // 360deg  / 60 sec = 6

  if (Distance < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = "none";
  }
}, 1000);

// Toast !

const alert_msg = Toastify({
  text: "با کلیک بر روی آیکون یوزر عملیات ثبت نام را انجام دهید ",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", 
  position: "center", 
  stopOnFocus: true, 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  //onClick: function(){} 
});
const alert_msg2 = Toastify({
  text: "خوش آمدید",

  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top",
  position: "center",
  stopOnFocus: true, 
  style: {
    background: "linear-gradient(to right, #FF706E, #F1F2FD);",
  },
  //onClick: function(){} 
});
setTimeout(function () {
  alert_msg.showToast();
  alert_msg2.showToast();
}, 10000);

//

document.addEventListener("DOMContentLoaded", function () {
  class Product {
    constructor(name, price, image, productCode) {
      this.name = name;
      this.price = price;
      this.image = image;
      this.productCode = productCode;
    }
  }

  const products = [];
  products.push(new Product("مبل راحتی 2 نفره چشمه نور کد MA-404/2-CR-T-RE  ", 10900500, "../images/mobl-1", 123456885));
  products.push(new Product("مبل راحتی سه نفره چشمه نور کد MA-405/3-BR-N  ", 25000300, "../images/mobl-2", 123456886));
  products.push(new Product("مبل تخت خواب شو دو نفره چشمه نور کد MA-512/2-T  ", 18950000, "../images/mobl-3", 123456887));
  products.push(new Product("مبل راحتی سه نفره مدل ملینا  ", 400008000, "../images/mobl-4", 123456888));
  products.push(new Product("مبل تختخوابشو یک نفره مدل ساپتا  ", 5280000, "../images/mobl-5", 123456889));
  products.push(new Product("میز جلومبلی میز چوب مدل لاکچری مجموعه 4 عددی  ", 6000, "../images/mbol-6", 123456890));

  const productsHolder = document.querySelector("#productsHolder");

  products.forEach((product) => {
    let productName = product.name;
    let price = product.price
    let image = product.image;
    let productCode = product.productCode;
    let output = `<div class="col-12 col-lg-4 card my-3 text-center bg-white ">
                        <img src="images/${image}.jpg" class="card-img-top img-fluid " alt="NotFound">
                      <div class="card-body">
                      <p class="card-text">
                            <strong>${productName}</strong><br>
                          قیمت ${price} تومان<br>
                          کد محصول : ${productCode}<br>
                      </p>
                      <div class="btn text-white">اطلاعات بیشتر<i class="fa-solid fa-cart-shopping mx-2"></i></div>
                      </div>
                  </div>
              `;
    productsHolder.innerHTML += output;
  });
});

// swiper image src replace in mobile view

if(deviceWidth < 992){
  let img1 = document.getElementById('swiper-image-1');
  let img2 = document.getElementById('swiper-image-2');
  let img3 = document.getElementById('swiper-image-3');
  let img4 = document.getElementById('swiper-image-4');
  img1.src='../images/mobl-5.jpg';
  img2.src='../images/mobl-2.jpg';
  img3.src='../images/mobl-3.jpg';
  img4.src='../images/mobl-4.jpg';
}


// tab bar navigation js codes
const navigationOptions = [
  {
    name: 'home',
    color: '#5B37B7'
  },
  {
    name: 'likes',
    color: '#C9379D'
  },
  {
    name: 'search',
    color: '#E6A919'
  },
  {
    name: 'profile',
    color: '#1892A6'
  }
];

// target all anchor link elements
const links = document.querySelectorAll('nav a');

// function called in response to a click event on the anchor link
function handleClick(e) {
  // prevent the default behavior, but most importantly remove the class of .active from those elements with it
  e.preventDefault();
  links.forEach(link => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });

  // retrieve the option described the link element
  const name = this.textContent.trim().toLowerCase();
  // find in the array the object with the matching name
  // store a reference to its color
  const { color } = navigationOptions.find(item => item.name === name);

  const style = window.getComputedStyle(this);
  const hoverColor = style.getPropertyValue('--hover-c');
  // if the two don't match, update the custom property to show the hue with the text and the semi transparent background
  if (color !== hoverColor) {
    this.style.setProperty('--hover-bg', `${color}20`);
    this.style.setProperty('--hover-c', color);
  }

  // apply the class of active to animate the svg an show the span element
  this.classList.add('active');
  // change the color of the background of the application to match
  document.querySelector('body').style.background = color;
}

// listen for a click event on each and every anchor link
links.forEach(link => link.addEventListener('click', handleClick));