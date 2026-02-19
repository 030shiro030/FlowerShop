var counter =2;
// // 尋找 ID 以「imageSlide_image」開頭的元素
// const images = document.querySelectorAll('[id^="imageSlide_image"]');
// 尋找 ID 以「radio」開頭的input[type="radio"]元素
const radios = document.querySelectorAll('input[type="radio"][id^="radio"]');
let video = document.getElementById('imageSlide_image1')


// // 加Event
// images.forEach(addEventImg);
let Time = 6000; //間隔時間
let Timer = setInterval(imageSlide, Time);

let videoTimer;

// 為每個 radio 按鈕添加EventListener
radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        counter = index + 1;
        if (counter==1){
            video.currentTime = 0;
        }
        updateSlider();
    });
});

// funtion
function imageSlide() {
        document.getElementById('radio'+counter).checked = true;
        counter++;    
        if(counter>4){
            counter=1;
            
        }

    }

function addEventImg(img){
    img.addEventListener("mouseenter",imageEnter);
    img.addEventListener("mouseleave",imageLeave);
}

// //進入圖片 => 清除Timer
// function imageEnter(){
//     clearInterval(Timer);
// }
// //離開圖片 => 開始Timer
// function imageLeave(){
//     Timer = setInterval(imageSlide, Time);
// }

function updateSlider() {
    document.getElementById('radio' + counter).checked = true;
}