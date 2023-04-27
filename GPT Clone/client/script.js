import bot from './assets/assets/bot.svg'
import user from './assets/assets/user.svg'

const form = document.querySelector('form');
const chatContainer = document.querySelector('.chat-container');

let loadInterval;

// Initial loading of the chat

function loader(element){
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if(element.textContent.length > 3){
      element.textContent = '';
    }

  }, 300);
}

function typeText(element, text){
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    }else{
      clearInterval(interval);
    }
  }, 20);
}

function generateUniqueID(){
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexaDecimalString = randomNumber.toString(16);
  return `id-${timestamp}-${hexaDecimalString}`;
}