const popupFormJoin=document.querySelector('.popup_type_join-us');
const joinInLink=document.querySelector('.menu_type_join-in');
const pageWrapper=document.querySelector('.page-wrapper');
const partnersButton=document.querySelector('.partners__button');
const contactPopup= document.querySelector('.popup_type_contact-us');
const contactLink=document.querySelector('.menu_link_type_contact');
const messagePopup=document.querySelector('.popup_type_message');
const popupMessageBtn=document.querySelector('.popup__submit-button_type_message');
const closeJoinPopupBtn=document.querySelector('.popup__close-button');
const closeMessageBtn=document.querySelector('.popup__close-button_type_message');
const closeContactPopupBtn=document.querySelector(".popup__close-button_type_contact");
const openMenuBtn=document.querySelector('.menu__button');
const menuPopup=document.querySelector('.menu');
const menuLinks=document.querySelectorAll('.menu__link');
const menuLogo=document.querySelector('.menu__logo');
function openPopup(popup){
    popup.classList.add(`popup_is-opened`);
}
function closePopup(popup){
  popup.classList.remove(`popup_is-opened`);
  [...document.querySelectorAll(".popup__form")].forEach((form)=>form.reset());
}

joinInLink.addEventListener('click',()=> {openPopup(popupFormJoin); closePopup(contactPopup)} );
contactLink.addEventListener('click',()=> {openPopup(contactPopup);closePopup(popupFormJoin) });
contactPopup.addEventListener('submit',(evt)=>{
  evt.preventDefault();
   openPopup(messagePopup); 
   contactPopup.querySelector('.popup__form').reset();});


const allPopups= [...document.querySelectorAll('.popup')];
allPopups.forEach((popup)=>popup.addEventListener("mousedown", (evt)=>{
  if (evt.target.classList.contains('popup_is-opened')){
    console.log(evt.target);

  closePopup(evt.target);
  }
  
  }));
openMenuBtn.addEventListener('click', (evt)=>{
  if (evt.target.classList.contains(`menu__is-open`)){
    closePopup(menuPopup);
    openMenuBtn.classList.remove(`menu__is-open`);
  }
  else{
    openMenuBtn.classList.add(`menu__is-open`);
    openPopup(menuPopup); 
    closePopup(contactPopup);
    closePopup(popupFormJoin);
  }
} );
[...menuLinks].forEach((link)=>link.addEventListener('click', ()=>{closePopup(menuPopup); openMenuBtn.classList.remove(`menu__is-open`);}));
let prevScrollpos = window.pageYOffset;
document.addEventListener('scroll',()=>{
 let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menuPopup.classList.remove(`menu__hidden`);
    menuLogo.classList.remove(`menu__hidden`);
  } else {
    menuPopup.classList.add(`menu__hidden`);
    menuLogo.classList.add(`menu__hidden`);
  }
  prevScrollpos = currentScrollPos;
}
);
