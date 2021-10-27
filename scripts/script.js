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
function openPopup(popup){
    popup.classList.add(`popup_is-opened`);
}
function closePopup(popup){
  popup.classList.remove(`popup_is-opened`);
}
joinInLink.addEventListener('click', ()=>{openPopup(popupFormJoin)});
partnersButton.addEventListener('click',()=> {openPopup(popupFormJoin)});

contactLink.addEventListener('click',()=>{ openPopup(contactPopup)});

contactPopup.addEventListener('submit' , (evt)=> {evt.preventDefault(); openPopup(messagePopup)});
closeJoinPopupBtn.addEventListener('click', ()=> closePopup(popupFormJoin));
contactPopup.addEventListener('submit', ()=>{closePopup(messagePopup)} );
closeContactPopupBtn.addEventListener("click", ()=> {closePopup(contactPopup)});

