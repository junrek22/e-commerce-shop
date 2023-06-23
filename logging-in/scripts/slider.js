function Load(){
    const widthImage = document.getElementById('firstnode');
    const catchsize = widthImage.clientWidth;
    car_slide.style.transform = 'translateX('+(-catchsize * counter) + 'px)';
}
const widthImage = document.getElementById('firstnode');
let size = widthImage.clientWidth;
const car_slide = document.getElementById('slide-image');
const car_image = document.getElementsByClassName('slider');
let counter = 1;
let pics = ['slider1.png', 'slider2.png', 'slider3.png']
let bg = document.getElementsByClassName("background");

bg[0].style.background = `url(./slider/`+pics[counter-1]+`)`;
bg[0].style.backgroundSize = `100% 100%`;
setInterval(rightButton, 3000);
function leftButton() {
    size = widthImage.clientWidth;
    if(counter<=0)return;
    car_slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    if(counter==0){
        bg[0].style.background = `url(./slider/`+pics[2]+`)`;
       bg[0].style.backgroundSize = `100% 100%`;
    }else{
        bg[0].style.background = `url(./slider/`+pics[counter-1]+`)`;
        bg[0].style.backgroundSize = `100% 100%`;
    }
    car_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
    console.log(counter) 
}
function rightButton() {
    size = widthImage.clientWidth;
    if(counter>=car_image.length-1)return;
    car_slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    if(counter==car_image.length-1){
        bg[0].style.background = `url(./slider/`+pics[0]+`)`;
        bg[0].style.backgroundSize = `100% 100%`;
    }else{
        bg[0].style.background = `url(./slider/`+pics[counter-1]+`)`;
        bg[0].style.backgroundSize = `100% 100%`;
    }
    car_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
    console.log(counter)
}

car_slide.addEventListener("transitionend",() =>{
    if(car_image[counter].id==="lastnode"){
        car_slide.style.transition = "none"
        counter = car_image.length - counter;
        bg[0].style.background = `url(./slider/`+pics[counter-1]+`)`;
        bg[0].style.backgroundSize = `100% 100%`;
        car_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
        
    }
    if(car_image[counter].id==="firstnode"){
        car_slide.style.transition = "none"
        counter = car_image.length - 2;
        bg[0].style.background = `url(./slider/`+pics[counter-1]+`)`;
        bg[0].style.backgroundSize = `100% 100%`;
        car_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
    }
});