// Some style manupulation for card using js
const items = document.querySelectorAll('.items');
const hItem=document.querySelectorAll('.h-item');


items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('bg-yellow-300', 'transition', 'duration-200','scale-105');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('bg-yellow-300','scale-105');
    });
});

hItem.forEach(hItem=>{

    hItem.addEventListener('mouseenter', () => {
        hItem.classList.add('bg-lime-400', 'transition', 'duration-200','scale-110');
    });
    hItem.addEventListener('mouseleave', () => {
        hItem.classList.remove('bg-lime-400','scale-110');
    });

})



// Home page re direction

const home=document.getElementById("home");

home.addEventListener("click",function(){

    window.location.href = 'index.html';


})
