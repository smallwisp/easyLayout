'use strict'

const heroAbout = document.querySelector('.hero__about');
const mainTitle = document.querySelector('.main__title');
const mainText = document.querySelector('.main__text');
const btn = document.querySelector('.btn');

let voidMargin = heroAbout.clientHeight - mainTitle.clientHeight - mainText.clientHeight - btn.clientHeight;
console.log('voidMargin: ', voidMargin);

btn.style.marginTop = voidMargin + 'px';
console.log(btn.style.marginTop);