

//導覽列---切換導覽列
const navbar =document.querySelector(".nav__bar");
const heading = document.querySelector(".header__heading");

const toggleHamburger = document.querySelector(".navbar__toggle");

toggleHamburger.addEventListener("click",(e)=>{
    navbar.classList.toggle("nav__bar--hide");
    heading.classList.toggle("header__heading--hide");
})

//--------電腦版換圖片--------


//取得要更換圖片的dom
//----about-----
const transformImg =document.querySelector(".about__intro__image--transform");
const standImg =document.querySelector(".about__intro__image--stand");  
//----project------
const projectImgs =document.querySelectorAll(".projects__img");
const headtitle = document.querySelector(".header__heading__title");




function changeImg(){
    const  windowWidth = screen.width;//取得當前螢幕寬度
//是電腦螢幕時,更換圖片
if(windowWidth>900){
    transformImg.innerHTML  ='<img src="./images/desktop/image-transform.jpg" alt="transform">'; 
    standImg.innerHTML ='<img src="./images/desktop/image-stand-out.jpg" alt="">';
    projectImgs[0].innerHTML='<img src="./images/desktop/image-gallery-milkbottles.jpg" alt="">';
    projectImgs[1].innerHTML='<img src="./images/desktop/image-gallery-orange.jpg" alt="">';
    projectImgs[2].innerHTML='<img src="./images/desktop/image-gallery-cone.jpg" alt="">';
    projectImgs[3].innerHTML='<img src="./images/desktop/image-gallery-sugarcubes.jpg" alt="">';
    //變更heading的文字排版
    headtitle.textContent ="WE ARE CREATIVES";
    //永遠顯示nav__list與heading :去除hide的class
    navbar.classList.remove("nav__bar--hide");
    heading.classList.remove("header__heading--hide");
}

}

//打開網頁時執行
changeImg()

//當銀幕大小變化時執行
window.addEventListener("resize",changeImg);