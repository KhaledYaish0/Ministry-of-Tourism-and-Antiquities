var item=document.querySelectorAll(".item img");
var slider = document.getElementById("slider");
var closeBtn =document.getElementById("close");
var sliderImg=document.getElementById("sliderImg");
var prevBtn=document.getElementById("prev");
var nextBtn=document.getElementById("next");
var curentIndex;
var number=document.getElementById("number");
var itemsList=document.getElementById("itemsList");
let info = document.querySelector('.home .info');
console.log(info)
var url;
let information=[
    {
        name:'Mohammad',
        phone:'0595432210',
        email:'Mohammad_1999@gmail.com',
        city:'Hebron'
    },
    {
        name:'Yazan',
        phone:'0592250451',
        email:'yazan_guide@gmail.com',
        city:'Aka'
    },
    {
        name:'Emad',
        phone:'+79261041061',
        email:'Emad_guide@gmail.com',
        city:'Bethlehem'
    },
    {
        name:'Bashar',
        phone:'0599874060',
        email:'bashar_guide@gmail.com',
        city:'Jerusalem'
    },
    {
        name:'khaled',
        phone:'0597728233',
        email:'khaled@gmail.com',
        city:'Jericho'
    },
    {
        name:'ahmad',
        phone:'059554545',
        email:'ahmad@gmail.com',
        city:'Nablus'
    },
];
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click",function(e){
        slider.style.display="flex";
        sliderImg.src=item[i].src;
        curentIndex=i;
        number.innerHTML=`${curentIndex+1}/${item.length}`;
        console.log(e.target)
        info.innerHTML=`
        <div class="infoItem"><i class="fa-solid fa-user"></i> <span>${information[i].name}</span></div>
        <div class="infoItem"><i class="fa-solid fa-phone"></i> <span>${information[i].phone}</span></div>
        <div class="infoItem"><i class="fa-solid fa-envelope"></i> <span>${information[i].email}</span></div>
        <div class="infoItem"><i class="fa-solid fa-location-dot"></i> <span>${information[i].city}</span></div>
        `;
    })
}
closeBtn.addEventListener("click",function(){
    slider.style.display="none";
})
prevBtn.addEventListener("click",function(){
    curentIndex--;
    changeImg();
})
nextBtn.addEventListener("click",function(){
    curentIndex++;
    changeImg();
})
function changeImg(){
    if(curentIndex>item.length-1){
        curentIndex=0;
    }
    else if (curentIndex<0){
        curentIndex=item.length-1;
    }
    sliderImg.src=item[curentIndex].src;
    number.innerHTML=`${curentIndex+1}/${item.length}`;
    info.innerHTML=`
        <div class="infoItem"><i class="fa-solid fa-user"></i> <span>${information[curentIndex].name}</span></div>
        <div class="infoItem"><i class="fa-solid fa-phone"></i> <span>${information[curentIndex].phone}</span></div>
        <div class="infoItem"><i class="fa-solid fa-envelope"></i> <span>${information[curentIndex].email}</span></div>
        <div class="infoItem"><i class="fa-solid fa-location-dot"></i> <span>${information[curentIndex].city}</span></div>
        `;
}
//key
document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight"){
        curentIndex++;
        changeImg();
    }
    else if (e.key=="ArrowLeft"){
        curentIndex--;
        changeImg();
    }
    else if(e.key=="Escape"){
        slider.style.display="none";
    }
});
