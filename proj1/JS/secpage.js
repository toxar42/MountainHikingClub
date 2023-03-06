let catalog_img = ['../RESOURSES/Mask group.png','../RESOURSES/Mask group1.png','../RESOURSES/Mask group2.png'];
let catalog_text = ['Gokyo','Camping','River','Mountain','Beach','Drive','Rafting'];
let catalog_text_description = ['Night','Moonlight','Miraculous','Excitous'];
let catalog_city = ['Los Angeles','New York','Los Santos','Washington','Richmond','Detroit','Midland','Boston','Chicago','Denver','Las Vegas','New Orlean']
let maincont = document.querySelector('.column_catalog');
function arrayRandElement(element)
{
    var rand = Math.floor(Math.random() * element.length);
    return element[rand];
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function Generate()
{
    maincont.insertAdjacentHTML('beforeend',
    `<div class="catalogpage">
        <div class="page">
        <img alt="sdfvsd" class="page" src="${arrayRandElement(catalog_img)}">
        <div class="blockheart"><img class="smallph" src="../RESOURSES/heart.png" onclick="rotate(this)"></div>
        <p class="name">${arrayRandElement(catalog_text_description)} ${arrayRandElement(catalog_text)}</p><p class="name">
        <img alt="sdfvsd" class="smallph" src="../RESOURSES/Tag.png">${arrayRandElement(catalog_city)}<img alt="sdfvsd" src="../RESOURSES/star.png">${Math.round(getRandomNumber(3,5)*100)/100}</p>
        </div>
        <div class="page">
        <img alt="sdfvsd" class="page" src="${arrayRandElement(catalog_img)}">
        <div class="blockheart"><img class="smallph" src="../RESOURSES/heart.png" onclick="rotate(this)"></div>
        <p class="name">${arrayRandElement(catalog_text_description)} ${arrayRandElement(catalog_text)}</p><p class="name">
        <img alt="sdfvsd" class="smallph" src="../RESOURSES/Tag.png">${arrayRandElement(catalog_city)}<img alt="sdfvsd" src="../RESOURSES/star.png">${Math.round(getRandomNumber(3,5)*100)/100}</p>
        </div>
        <div class="page">
        <img alt="sdfvsd" class="page" src="${arrayRandElement(catalog_img)}">
        <div class="blockheart"><img class="smallph" src="../RESOURSES/heart.png" onclick="rotate(this)"></div>
        <p class="name">${arrayRandElement(catalog_text_description)} ${arrayRandElement(catalog_text)}</p><p class="name">
        <img alt="sdfvsd" class="smallph" src="../RESOURSES/Tag.png">${arrayRandElement(catalog_city)}<img alt="sdfvsd" src="../RESOURSES/star.png">${Math.round(getRandomNumber(3,5)*100)/100}</p>
        </div>
        <div class="page">
        <img alt="sdfvsd" class="page" src="${arrayRandElement(catalog_img)}">
        <div class="blockheart"><img class="smallph" src="../RESOURSES/heart.png" onclick="rotate(this)"></div>
        <p class="name">${arrayRandElement(catalog_text_description)} ${arrayRandElement(catalog_text)}</p><p class="name">
        <img alt="sdfvsd" class="smallph" src="../RESOURSES/Tag.png">${arrayRandElement(catalog_city)}<img alt="sdfvsd" src="../RESOURSES/star.png">${Math.round(getRandomNumber(3,5)*100)/100}</p>
        </div>
        <div class="page">
        <img alt="sdfvsd" class="page" src="${arrayRandElement(catalog_img)}">
        <div class="blockheart"><img class="smallph" src="../RESOURSES/heart.png" onclick="rotate(this)"></div>
        <p class="name">${arrayRandElement(catalog_text_description)} ${arrayRandElement(catalog_text)}</p><p class="name">
        <img alt="sdfvsd" class="smallph" src="../RESOURSES/Tag.png">${arrayRandElement(catalog_city)}<img alt="sdfvsd" src="../RESOURSES/star.png">${Math.round(getRandomNumber(3,5)*100)/100}</p>
        </div>
    </div>`); 
}
function firstblock(){
    Generate();
    Generate();
}
document.addEventListener('scroll',function(e){
    Generate();
    })