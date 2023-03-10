let a = false;
let flag = false; 
let numdate = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let mondate = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let monlength = [31,31,30,30,31,30,30,29,30,31,30,31];
function rotate(fyfy)
{
    if(!flag)
    {
    fyfy.src = '../RESOURSES/rheart.png';
    push_up();
    point();
    flag = true;
    }
    else{
    fyfy.src = '../RESOURSES/heart.png';
    flag = false;
    }
} 
function point()
{
    document.querySelector('.push').insertAdjacentHTML('afterbegin',`<div class="point">`);
} 
function push_up()
{
    document.querySelector('.pushups').insertAdjacentHTML('afterbegin',`<div class="pushelements"><img class="smallph" src="../RESOURSES/heart.png">You liked popular trip</div>`);
    let pushlength = document.querySelectorAll('.pushelements');
    if (pushlength.length >= 6)
        {
            pushlength[6].remove();
        }
}
function todayData()
{
    let Data = new Date();
    let Day = Data.getDate();
    let Month = Data.getMonth();
    let fMonth;
    switch (Month)
{
  case 0: fMonth="Janyary"; break;
  case 1: fMonth="February"; break;
  case 2: fMonth="March"; break;
  case 3: fMonth="April"; break;
  case 4: fMonth="May"; break;
  case 5: fMonth="June"; break;
  case 6: fMonth="July"; break;
  case 7: fMonth="August"; break;
  case 8: fMonth="September"; break;
  case 9: fMonth="October"; break;
  case 10: fMonth="November"; break;
  case 11: fMonth="December"; break;
}
    Year = Data.getFullYear();
    document.querySelector('.today').textContent = (Day + " - " + fMonth + " - " + Year);
}
function daterotate(dat)
{
    frt = document.querySelectorAll('.checkedbd');
    for (i = 0;i < frt.length;i++)
    {
        frt[i].classList.remove("checkedbd");
        frt[i].classList.add("bookdate");
    }
    dat.classList.remove("bookdate");
    dat.classList.add("checkedbd");
}
function clickdatemin()
{
    let dateNumberElements = document.querySelectorAll('.numberdate');  
    let DateNameMonth = document.querySelector('.month');
    for (let i = 0; i < dateNumberElements.length;i++)
    {
        dateNumberElements[i].textContent = parseInt(dateNumberElements[i].textContent, 10) - 7;
        if ( parseInt(dateNumberElements[i].textContent, 10) < 1)
        {
            dateNumberElements[i].textContent = parseInt(dateNumberElements[i].textContent, 10) + 31;
        }
    }
}
let j = 0;
function clickdateplus()
{    
    let dateNumberElements = document.querySelectorAll('.numberdate');  
    let DateNameMonth = document.querySelector('.month');
    for (let i = 0; i < dateNumberElements.length;i++)
    {
        dateNumberElements[i].textContent = parseInt(dateNumberElements[i].textContent, 10) + 7;
        if ( parseInt(dateNumberElements[i].textContent, 10) > 31)
        {   
            dateNumberElements[i].textContent = parseInt(dateNumberElements[i].textContent, 10) - 31;
            DateNameMonth.textContent = mondate[j];
        }
    }
                
}
let ele = document.querySelector('.push');
ele.addEventListener('mouseover',(e)=>
{
    let psh = document.querySelector('.pushups');
    psh.classList.remove('pushups');
    psh.classList.add('pushupsapp');
    document.querySelector('.point').remove();  
})
ele.addEventListener('mouseout',(e)=>
{
    let psh = document.querySelector('.pushupsapp');
    psh.classList.remove('pushupsapp');
    psh.classList.add('pushups');
})
function animation(content)
{
    let txtswap = document.querySelector('.pop')
    let swap = document.querySelector('.popup');
    if (content.classList.contains('popup'))
    {   
        let txtcontent = content.querySelector('.pop')
        content.classList.remove('popup');
        content.classList.add('null');
        txtcontent.classList.remove('pop');
        txtcontent.classList.add('popnull');
    }
    else
    {
        let txtcontent = content.querySelector('.popnull');
        txtcontent.classList.remove('popnull');
        txtcontent.classList.add('pop');
        content.classList.remove('null');
        content.classList.add('popup');
        swap.classList.remove('popup');
        swap.classList.add('null');
        txtswap.classList.remove('pop');
        txtswap.classList.add('popnull');
    }
}
let block_swap = document.getElementById('theme');
let swap = false;
block_swap.onclick = function()
{
    if(!swap){
        document.querySelector('.white').classList.add('black');
        document.querySelector('.white').classList.remove('white');
        localStorage.setItem('theme',JSON.stringify(1));
        swap = true;
    }
    else{
        document.querySelector('.black').classList.add('white');
        document.querySelector('.black').classList.remove('black');
        swap = false;
        localStorage.setItem('theme',JSON.stringify(0));
    }
}
function ch_theme(){
    let chek_b = localStorage.getItem('theme');
    console.log(chek_b);
    if (chek_b == '1')
    {
        document.querySelector('.white').classList.add('black');
        document.querySelector('.white').classList.remove('white');
    }
    else
    {
        document.querySelector('.black').classList.add('white');
        document.querySelector('.black').classList.remove('black');
    }
}