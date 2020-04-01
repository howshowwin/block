var canvas = new fabric.Canvas('canvas');
canvas.setHeight(500);
canvas.setWidth(500);


const imgset = document.querySelector('.background')
const defaultImg = document.querySelector('.defaultImg')
let movingImage
let movingSrc
let imgDragOffset = {
    offsetX: 0,
    offsetY: 0
}

var oldimgX = ''
var oldimgY = ''

function saveImg(e) {

    if (e.target.tagName.toLowerCase() === 'img') {
        movingSrc = e.target.src
        imgDragOffset.offsetX = e.clientX - e.target.offsetLeft
        imgDragOffset.offsetY = e.clientY - e.target.offsetTop
        movingImage = e.target
        oldimgX = movingImage.width / movingImage.naturalWidth
        oldimgY = movingImage.height / movingImage.naturalHeight
    }
    canvas.discardActiveObject();
    canvas.renderAll();

}
var jijo = ''
function saveFoneImg(e) {


    if (e.target.tagName.toLowerCase() === 'img') {

        imgDragOffset.offsetX = e.targetTouches[0].clientX - e.target.width / 2
        imgDragOffset.offsetY = e.targetTouches[0].clientY - e.target.height / 2
        movingImage = e.target
        oldimgX = movingImage.width / movingImage.naturalWidth
        oldimgY = movingImage.height / movingImage.naturalHeight
    }

    let copyObj = movingImage.cloneNode(true);
    document.body.appendChild(copyObj);

    copyObj.style.position = "absolute"
    copyObj.style.top = e.target.y + "px"
    copyObj.style.left = e.target.x + "px"
    copyObj.style.zIndex = "9999"
    copyObj.style.opacity = "0.6"


    copyObj.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    copyObj.style.left = e.targetTouches[0].clientX - e.target.width / 2 - spcial_move + "px"
    jijo = copyObj
    canvas.discardActiveObject();
    canvas.renderAll();
}
var odX
var odY
function drag(e) {


    e.preventDefault();
    jijo.style.transition = "none"

    jijo.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    jijo.style.left = e.targetTouches[0].clientX - e.target.width / 2 - spcial_move + "px"

    odX = e.targetTouches[0].clientX - e.target.width / 2
    odY = e.targetTouches[0].clientY - e.target.height / 2
}
var push = false
var image_q = new Array()

function pushimg(e) {
    let yoyo = $('.canvas_wrapper').offset().left
    let yoyot = $('.canvas_wrapper').offset().top

    let offsetY = odY
    let offsetX = odX
    document.body.removeChild(jijo);
    let h
    if (e.changedTouches[0].clientY - yoyot - e.target.height / 2 < 0) {
        h = 35
    } else if ((e.changedTouches[0].clientY - yoyot - e.target.height / 2 + e.target.height) > ($('.canvas_wrapper').height())) {
        h = $('.canvas_wrapper').height() - e.target.height - 20
    } else {
        h = e.changedTouches[0].clientY - yoyot - e.target.height / 2
    }
    let w
    if (e.changedTouches[0].clientX - yoyo - e.target.width / 2 < 0) {
        w = 0
    }
    else if (e.changedTouches[0].clientX - yoyo - e.target.width / 2 + e.target.width > ($('.canvas_wrapper').width())) {
        w = $('.canvas_wrapper').width() * 999 + e.target.width / 2
    }
    else {
        w = e.changedTouches[0].clientX - yoyo - e.target.width
    }
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: h,
        left: w + movingImage.naturalWidth / 4,
        lockScalingFlip: true
    })


    image_qq.set({
        borderColor: 'rgba(0,0,0,0)'
    })
    canvas.add(image_qq)

    image_q.push(image_qq)
}




function dropImg(e) {
    const { offsetX, offsetY } = e.e


    // cursor_padding
    // obj_padding

    var oriTop = offsetY - imgDragOffset.offsetY
    var oriLeft = offsetX - imgDragOffset.offsetX
    // if()
    var mix_padding = (obj_padding) + (cursor_padding / 2)
    // var mix_padding = 0


    if (oriTop - mix_padding < 0) {
        oriTop = mix_padding 
    }
    if (oriLeft <0) {
        oriLeft = 0
    }
    if (oriTop + movingImage.height > $('.canvas-container').height()) {
        oriTop = $('.canvas-container').height() - movingImage.height 
    }
    if (oriLeft + movingImage.width + mix_padding > $('.canvas-container').width()*0.788) {
        oriLeft = $('.canvas-container').width()*0.788 - movingImage.width - mix_padding
    }
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: oriTop,
        left: oriLeft,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })

    image_q.push(image_qq)

    canvas.add(image_qq)
    movingImage = ""
    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum)
    }, 500)
}




// document.oncontextmenu = function (e) {
//     e.preventDefault();
// };

canvas.on('drop', dropImg)

$('.defaultImg').mousedown(function () {
}, saveImg);
imgset.addEventListener('touchstart', saveFoneImg)
imgset.addEventListener("touchmove", drag);
imgset.addEventListener("touchend", pushimg);

