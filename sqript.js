let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');
let barsBtn = document.querySelector('#bars-btn');
let navBar = document.querySelector('.navbar');


searchBtn.addEventListener('click' , () =>{
    searchBtn.classList.toggle('fa-times');
    searchBox.classList.toggle('active');
})


barsBtn.addEventListener('click' , () =>{
    barsBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})
