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
var str_className = ''
var truemove = 0

function saveImg(e) {
    str_className = e.target.className
    str_className = str_className.substring(9, 19)
    console.log(str_className)
    if (str_className == "img_block2") {
        truemove = 1
    }
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

    str_className = e.target.className
    str_className = str_className.substring(9, 19)
    console.log(str_className)
    if (str_className == "img_block2") {
        truemove = 1
    }

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
    // copyObj.style.top = e.target.y + "px"
    // copyObj.style.left = e.target.x + "px"
    copyObj.style.zIndex = "9999"
    copyObj.style.opacity = "0.6"


    copyObj.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    copyObj.style.left = e.targetTouches[0].clientX - e.target.width / 2 + "px"
    jijo = copyObj
    canvas.discardActiveObject();
    canvas.renderAll();
}
var odX
var odY
function drag(e) {


    e.preventDefault();

    jijo.style.top = e.targetTouches[0].clientY - e.target.height / 2 + "px"
    jijo.style.left = e.targetTouches[0].clientX - e.target.width / 2 + "px"

    odX = e.targetTouches[0].clientX - e.target.width / 2
    odY = e.targetTouches[0].clientY - e.target.height / 2
}
var push = false
var image_q = new Array()

function pushimg(e) {
 
    
    document.body.removeChild(jijo);

    var oriTop = e.changedTouches[0].clientY - e.target.height
    var oriLeft = e.changedTouches[0].clientX - e.target.width
    // if()
    var mix_padding = (obj_padding) + (cursor_padding / 2)
    // var mix_padding = 0

    let nowwha = 1

    if (oriTop - mix_padding < 0) {
        oriTop = mix_padding
    }
    if (oriLeft < 0) {
        oriLeft = 0
    }
    if (oriTop + movingImage.height > $('.canvas-container').height()) {
        movingImage = ''
    }
    if (oriLeft + movingImage.width + mix_padding > $('.canvas-container').width() * 0.788) {
        movingImage = ''
        nowwha = 0

    }

    if (truemove == 1&&nowwha == 1) {
        console.log(movingImage.alt)
        let alt = movingImage.alt
        switch (alt) {
            case "1":
                arrayOne.pop()
                change_Array_sum = change_Array_sum - 1
                break;
            case "10":
                arrayten.pop()
                change_Array_sum = change_Array_sum - 10

                break;
            case "100":
                arrayhun.pop()
                change_Array_sum = change_Array_sum - 100

                break;
            case "1000":
                arrayths.pop()
                change_Array_sum = change_Array_sum - 1000

                break;

            default:
                break;
        }
        truemove = 0
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


    image_qq.set({
        borderColor: '#01B0F1'
    })

    if(image_qq._element!=null){
        canvas.add(image_qq)
        image_q.push(image_qq)
    }

    movingImage = ""
    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum + change_Array_sum)
    }, 500)


}




function dropImg(e) {
    const { offsetX, offsetY } = e.e
    // console.log(e.target.className)
    console.log(movingImage)
    if (truemove == 1) {
        console.log(movingImage.alt)
        let alt = movingImage.alt
        switch (alt) {
            case "1":
                arrayOne.pop()
                change_Array_sum = change_Array_sum - 1
                break;
            case "10":
                arrayten.pop()
                change_Array_sum = change_Array_sum - 10

                break;
            case "100":
                arrayhun.pop()
                change_Array_sum = change_Array_sum - 100

                break;
            case "1000":
                arrayths.pop()
                change_Array_sum = change_Array_sum - 1000

                break;

            default:
                break;
        }
        truemove = 0
    }
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
    if (oriLeft - mix_padding < 0) {
        oriLeft = mix_padding
    }
    if (oriTop + movingImage.height > $('.canvas-container').height()) {
        oriTop = $('.canvas-container').height() - movingImage.height
    }
    if (oriLeft + movingImage.width + mix_padding > $('.canvas-container').width() * 0.788) {
        oriLeft = $('.canvas-container').width() * 0.788 - movingImage.width - mix_padding
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
        $(".count").val(Array_sum + change_Array_sum)
    }, 500)
}




// document.oncontextmenu = function (e) {
//     e.preventDefault();
// };

var toucharea = document.querySelector(".box")
canvas.on('drop', dropImg)

$('.defaultImg').mousedown(function () {
}, saveImg);
imgset.addEventListener('touchstart', saveFoneImg)
imgset.addEventListener("touchmove", drag);
imgset.addEventListener("touchend", pushimg);







var startx, starty;
//獲得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根據起點終點返回方向 1向上 2向下 3向左 4向右 0未滑動
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑動距離太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}
//手指接觸螢幕
toucharea.addEventListener("touchstart", function (e) {
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指離開螢幕
toucharea.addEventListener("touchend", function (e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            break;
        case 1:

            var bgP = $('.img_box').css('backgroundSize')
            var jj = bgP.slice(5, 15)
            stagenum = stagenum - parseInt(jj) / 4

            // //當滑輪向上滾動時 
            $('.img_box').css({
                backgroundPosition: `0 ${Math.round(30 * sRSS) + stagenum}px`
            })
            break;
        case 2:
            var bgP = $('.img_box').css('backgroundSize')
            var jj = bgP.slice(5, 15)
            stagenum = parseInt(jj) / 4 + stagenum

            $('.img_box').css({
                backgroundPosition: `0 ${Math.round(30 * sRSS) + stagenum}px`
            })
            break;
        case 3:
            break;
        case 4:
            break;
        default:
    }
}, false);