'use strict'

let btn = document.getElementById('change');
let div=document.querySelector('.wrapper');

btn.addEventListener('click', function () {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor="#"+color;
    div.style.backgroundColor="#"+color;
    btn.style.color="#"+color;


});