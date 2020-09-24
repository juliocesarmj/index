
$(function(){ 
  var navMain = $("#navbarSupportedContent");
  navMain.on("click", "a", null, function () {
      navMain.collapse('hide');
  });
}); 

//trocar cor do texto de introdução

const colorIntro = document.querySelector('.font-sans');
let counter = 0;

const colorArr = ['white', 'tomato'];

setInterval(
	()=> {
		counter++
		
		if (counter == colorArr.length) {
			counter = 0
		}
		
		colorIntro.style.color = colorArr[counter];
	}, 3000
);
//menu hamburguer

const menuMobile = document.querySelector('.mobile-btn');
menuMobile.addEventListener('click', openMenu);

function openMenu() {
     menuMobile.classList.toggle('active');
    
}
  // Recolher menu no modo mobile
   // scroll suave interno
   const menuItems = document.querySelectorAll('#navbarSupportedContent a[href^="#"]');
   const buttonService = document.querySelector("#buttonService");
   //funcao para adicionar e remover classe ativo dos elementos do menu.
   buttonService.addEventListener('click', scrollToIdOnclick);
   menuItems.forEach((item) => {
     item.addEventListener('click', scrollToIdOnclick);
   })
   function scrollToIdOnclick(event) {
     event.preventDefault()
     menuMobile.classList.remove('active');
     const element = event.target;
     const id = element.getAttribute('href')
     const to = document.querySelector(id).offsetTop;
     window.scroll({
       top: to - 90,
       behavior: 'smooth',
     });
   }
   //scroll voltar ao topo da pagina.
   const topPage = document.querySelector('#home')
   topPage.addEventListener('click', setaPraCima);
   function setaPraCima(event) {
     event.preventDefault();
     const setaPosicao = event.target;
     const classe = setaPosicao.getAttribute('class');
     const toTop = document.querySelector(classe);
     window.scroll({
       top: 0,
       behavior: 'smooth'
     })
   }
//animar ao scroll
const sections = document.querySelectorAll('.js-scroll');
const sections2 = document.querySelectorAll('.js-scroll2');

const windowMetade = window.innerHeight * 0.7;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if(isSectionVisible) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  })
}

function animaScroll2() {
  sections2.forEach((section2) => {
    const sectionTop2 = section2.getBoundingClientRect().top;
    const isSectionVisible2 = sectionTop2 - windowMetade < 0;
    if(isSectionVisible2) {
      section2.classList.add('active');
    } else {
      section2.classList.remove('active');
    }
  })
}

animaScroll();
animaScroll2();
window.addEventListener('scroll', animaScroll);
window.addEventListener('scroll', animaScroll2);

