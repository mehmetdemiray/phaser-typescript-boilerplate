import './scss/styles.scss';
import img from './test.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = "Selamlarr 1234";
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = img;
  element.appendChild(myIcon)
  return element; 
}

document.body.appendChild(component());