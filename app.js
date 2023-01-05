
window.addEventListener('load',()=>{
    // alert("สวัสดี คุณสามารถคลิกที่ 'ปิยะ' ทางขวาบนเพื่อชมรูปเล่มแฟ้มสะสมผลงานได้")
    slowDisplayBoxes[0].classList.add("slow-display")
})

window.addEventListener("scroll",checkBoxes)

const slowDisplayBoxes = document.querySelectorAll(".slow-boxes")
const fastDisplayBoxes = document.querySelectorAll(".fast-boxes")
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    // console.log(slowDisplayBoxes)

    slowDisplayBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 

        if (boxTop < triggerBottom){
            box.classList.add("slow-display")
        }
    });
    fastDisplayBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 

        if (boxTop < triggerBottom){
            box.classList.add("fast-display")
        }
    });
}

function displayCloudMenu(){
    document.querySelector("#burger-img").style.display = 'none'
    document.querySelector("#burger-menu").style.display = 'block'
    document.querySelector("#cloud-cross-img").style.display = 'block'
}
function closeCloudMenu(){
    document.querySelector("#burger-img").style.display = 'block'
    document.querySelector("#burger-menu").style.display = 'none'
    document.querySelector("#cloud-cross-img").style.display = 'none'
}

function displayEducationInfoContainer(){
    document.querySelector("#education-info-container").style.display = 'block'
    document.querySelector("#edu-cross-img").style.display = 'block'
    document.querySelector("body").classList.add("disable-scroll")
}
function closeEducationInfoContainer(){
    document.querySelector("#education-info-container").style.display = 'none'
    document.querySelector("#edu-cross-img").style.display = 'none'
    document.querySelector("body").classList.remove("disable-scroll")
}
