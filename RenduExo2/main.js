let DarkMode=document.getElementById("DarkMode")
let bloc = document.querySelector(".Chat")
let back = document.querySelector(".back")
let img = document.getElementById("CatImg")

DarkMode.addEventListener('click',function(){
    bloc.classList.toggle('dark');
    back.classList.toggle('darkBack');
    img.src = "BlackCat.jpg"
})