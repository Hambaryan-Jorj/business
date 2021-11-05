'use strict';
// PROLOADER

document.body.onload = async function(){

  setTimeout(function(){
    const preloder = document.querySelector('.preloader');
     if (!preloder.classList.contains('done')) {
      preloder.classList.add('done');

     }
  } , 1000);
}

document.addEventListener('DOMContentLoaded' , () => { 


// ANIMATIONS

  const animItems = document.querySelectorAll('._anim-items');
  
  if (animItems.length > 0){
  	window.addEventListener('scroll', animOnScroll);
  	function animOnScroll() {
  		for (let index = 0; index < animItems.length; index++) {
  			const animItem = animItems[index];
  			const animItemHeigh = animItem.offsetHeight;
  			const animItemOffset = offset(animItem).top;
  			const animStart = 4;

  			let animItemPoint = window.innerHeight - animItemHeigh / animStart;
        if (innerHeight > window.innerHeight) {
  				animItemPoint = window.innerHeight - window.innerHeight / animStart;
  			}

  			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigh)){
  				animItem.classList.add('_active');			
  			} 
     //    else {
  			// 	if (!animItems.classList.contains('_anim-no-hide')) {
  			// 		animItem.classList.remove('_active');
  			// 	}
  			// }
  		}
  	} 
  
  function offset(el) {
  	const rect = el.getBoundingClientRect(),
	  	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	  	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft}	
  }
  
  let header = document.querySelector('.header');

  header.onmousemove = function() {  animOnScroll();}


  }

  // SCROLL



  function getBodyScrollTop(){
  return (self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop));
  }
  
  window.addEventListener('scroll', scrollHeight);
  function scrollHeight () {
   let scrolldarWidh = (getBodyScrollTop() * 100) / (4660.080 - document.documentElement.clientHeight);
   let scrollbar = document.querySelector('.scrollbar'); 
   scrollbar.style.cssText = `width: ${scrolldarWidh}%;`;
  }
  scrollHeight ();
  
});
