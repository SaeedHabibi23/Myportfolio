const humburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header .container');

humburger.addEventListener('click', ()=>{
    humburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
 var scroll_postion = window.scrollY;
  if(scroll_postion > 250){
    header.style.backgroundColor = '#29323c';
  }
  else{
    header.style.backgroundColor = 'transparent';

  }
});
menu_item.forEach(item=>{
    item.addEventListener('click', ()=>{
        humburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});