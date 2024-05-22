const tabMenuContainerTag = document.querySelector(".tabMenuContainer");
const tabMenuTag = document.querySelectorAll(".tabMenu");
const sliderTag = document.querySelector(".slider")
const pageTag = document.querySelectorAll(".page");

const handleTabMenu = (event)=>{
   const clickedtabMenuOffestWidth =  event.target.offsetWidth;
   sliderTag.style.width = clickedtabMenuOffestWidth + "px";

   const clickedtabMenuOffsetLeft = event.target.offsetLeft;
   sliderTag.style.transform = `translateX( ${clickedtabMenuOffsetLeft}px)`;

   for(let i=0; i<pageTag.length; i++){
    pageTag[i].classList.remove("pageShower"); // click တစ်ခါနှိပ်တိုင်း ရှိနေတဲ့classList တွေတစ်ခါဖယ်မယ်။ဒါမှအသစ်ဝင်လာတဲ့ကောင်နေရာရမယ်။
   }

   pageIndextoSelect = event.target.id;
   const currentPageTag = pageTag[pageIndextoSelect];
   currentPageTag.classList.add("pageShower");
   currentPageTag.style.width = tabMenuContainerTag.offsetWidth + "px";
} 

for(let i=0; i<tabMenuTag.length; i++){
    const marginLeft = tabMenuContainerTag.offsetLeft
    pageTag[i].style.marginLeft = marginLeft + "px"; 
    /* currentPageTag တွေကို css မှာ position absolute, left:0 ပေးထားလို့ 
    အပေါ်က tabMenu နဲ့ နေရာပြန်တူသွားအောင် margin left ပြန်ပေး ။ သူတို့က ဘိုးဘေးချင်းတူတော့ tabMenu ရဲ့ offsetLeftနဲ့ ရှာပြီး margin left ပေးလိုက်တာ*/
 
    if(i===0){
        sliderTag.style.width = tabMenuTag[i].offsetWidth + "px";
        pageTag[i].classList.add("pageShower");
        pageTag[i].style.width = tabMenuContainerTag.offsetWidth + "px";
    };

    tabMenuTag[i].id = i;
    tabMenuTag[i].addEventListener("click", handleTabMenu);
}
