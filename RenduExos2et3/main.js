let DarkMode=document.getElementById("DarkMode")
let bloc = document.querySelector(".Chat")
let back = document.querySelector(".back")
let img = document.getElementById("CatImg")
let uni = document.getElementById("Uni")
let tiger = document.getElementById("Tiger")
let calico = document.getElementById("Calico")
let changingText = document.getElementById("textTab")
let tab = document.querySelector(".Tab")


DarkMode.addEventListener('click',function(){
    bloc.classList.toggle('dark');
    back.classList.toggle('darkBack');
})


//Event listener pour le tab des chats uniformes
uni.addEventListener('click', function(){
    tab.classList.toggle('TabAnim')
    changingText.innerHTML = "Certains chats ont une robe uniforme, ou unie, composée d'une seule couleur."
    img.src = "Cat.jpg"
})
//Event listener pour le tab des chats rayés
tiger.addEventListener('click', function(){
    tab.classList.toggle('TabAnim')
    changingText.innerHTML = "Certains chats possèdent une robe rayée, donc d'une couleur striée de rayures d'une autre. On les appelle des chats tigrés"
    img.src = "tigré.jpg"
})
//Event listener pour le tab des chats tricolores
calico.addEventListener('click', function(){
    tab.classList.toggle('TabAnim')
    changingText.innerHTML = "Certains chats ont une robe composée de trois couleurs. Ces chats sont appelés chats tricolores ou Calicos."
    img.src = 'Calico.jpg'
})