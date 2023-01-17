alert("Привет! Здесь вы найдете самые крутые тачки: 🚘 🚚 🚜");

document.getElementsByClassName("main-title")[0].style.color = "crimson";

// document.getElementById("main-action").onclick = function () {
//    alert("Наши крутые тачки: 🚘 🚚 🚜");
// }

document.getElementById("main-action").onclick = function () {
   document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

let buttons = document.getElementsByClassName("button--car");
for (let i = 0; i < buttons.length; i++) {
   buttons[i].onclick = function () {
      document.getElementById("price").scrollIntoView({behavior: "smooth"});
   }
}

document.getElementById("price-action").onclick = function () {
   if (document.getElementById("name").value === ""){
      alert('Заполните поле "Ваше имя"!');
   }
   else if (document.getElementById("phone").value === ""){
      alert('Заполните поле "Ваш телефон"!');
   }
   else if (document.getElementById("car").value === ""){
      alert('Заполните поле "Автомобиль, который вас интересует"!');
   }
   else{
      alert('Спасибо за заявку! Мы свяжемся с вами с ближайшее время 😊')
   }
}

document.addEventListener("DOMContentLoaded", function () {
   let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
       layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 20) + 'px,' + ((event.clientY * 0.5) / 8) + 'px,0px)';
});

   const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
       elem.style.backgroundPositionX = '0' + (1 * window.pageYOffset) + 'px';
})
});