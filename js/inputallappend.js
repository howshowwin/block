function idontknowwhatiwrite() {
    arrayOne=[]
    arrayten=[]
    arrayhun=[]
    arrayths=[]
    changeArray = []
    change_Array_sum = 0
    
    var redcount = -1
    var bluecount = 0
    var yellowcount = 1
    var greencount = 2
    var redlittlemove = 0
    var bluelittlemove = 0
    var yellowlittlemove = 0
    var greenlittlemove = 0

    var numnum = 0
    var numnum1 = 0
    var numnum2 = 0
    var numnum3 = 0
    var numnum4 = 0
    

    var thdEnterNum = 0
    var hrdEnterNum = 0
    var tenEnterNum = 0
    var oneEnterNum = 0
    var temporary_storage = 0

    let countval = $('.count').val()
    if (countval > 10999) {
        var r = confirm("欄位數字不得大於50，按確認後將會自動跳轉成10999，取消將無動作")
        if (r == true) {
            canvas.clear();

            countval = 10999
            $('.count').val(10999)
            temporary_storage = $('.count').val()
        }
        else {
            return
        }

    } else {
        temporary_storage = $('.count').val()
        canvas.clear();

    }

    
        temporary_storage = $('.count').val()
        thdEnterNum = Math.floor(temporary_storage/1000) 
        temporary_storage = temporary_storage%1000
    
   
        hrdEnterNum = Math.floor(temporary_storage/100) 
        temporary_storage = temporary_storage%100

    
  
        tenEnterNum =Math.floor(temporary_storage/10) 
        temporary_storage = temporary_storage%10
  


        oneEnterNum = Math.floor(temporary_storage/1) 
       


 

    numnum = -1
    if (thdEnterNum != "") {
        redcount += 1
    }
    if (redcount > 4.2) {
        redcount = 0
        redlittlemove += 10
    }
    if (redlittlemove > 30) {
        redlittlemove = 0
    }

    var arr_one = new Array()
    for (i = 0; i < thdEnterNum; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = "img/newc1000.svg"
        imgEl_1.alt = '1000'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_thd').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_thd').height()) / e.target.naturalHeight,

                top: 650 * sRSS,
                left: 60 * sRSS
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '1000'
            arr_one.push(image)

            var maxWidthRed = 265 * sRSS
            numnum++
            // for (i = 0; i < arr_one.length; i++) {
            if (arr_one.length <= 5) {
                s_1 += 10


                image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (45 * sRSS) + (maxWidthRed * redcount) + (redlittlemove * sRSS), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_one.length > 5 && arr_one.length <= 10) {
                s_1_1 += 10


                image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (165 * sRSS) + (maxWidthRed * redcount) + (redlittlemove * sRSS), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }


// 2```````````````````````````````````````````````````````````````````````````````````
if ( hrdEnterNum != "") {
bluecount += 1
}
if (bluecount > 4.3) {
bluecount = 0
bluelittlemove += 10
}
if (bluelittlemove > 30) {
bluelittlemove = 0
}
numnum1 = -1
var arr_two = new Array()
for (i = 0; i <  hrdEnterNum; i++) {
var s_1 = 0
var s_1_1 = 0
// var w = 0 
const imgEl_1 = document.createElement('img')
imgEl_1.src = "img/newc100.svg"
imgEl_1.alt = '100'

imgEl_1.onload = (e) => {


    const image = new fabric.Image(imgEl_1, {
        width: e.target.naturalWidth,
        height: e.target.naturalHeight,
        scaleX: $('.img_hun').width()/e.target.naturalWidth,
        scaleY: $('.img_hun').height()/e.target.naturalHeight,

        top: Math.round(650 * sRSS),
        left: Math.round(400 * sRSS)
    })
    canvas.add(image)

    image.alt = 100
    image.set({
        borderColor: '#01B0F1'
    })



    canvas.renderAll();


    image._element.alt = '100'
    arr_two.push(image)
    numnum1++
    var maxWidthblue = Math.round(265 * sRSS)
    // for (i = 0; i < arr_two.length; i++) {
    if (arr_two.length <= 5) {
        s_1 += 10


        image.animate('top', Math.round(40 * sRSS) + Math.round(120 * sRSS) * numnum1, {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
        image.animate('left', (Math.round(45 * sRSS))+(Math.round(10 * sRSS)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRSS)), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
    } else if (arr_two.length > 5 && arr_two.length <= 10) {
        s_1_1 += 10


        image.animate('top', Math.round(40 * sRSS) + Math.round(120 * sRSS) * (numnum1 - 5), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
        image.animate('left', (Math.round(165 * sRSS)) +(Math.round(10 * sRSS))+ (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRSS)), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })

    }
    // }



}
}


// 3```````````````````````````````````````````````````````````````````````````````````




if (tenEnterNum != "") {
yellowcount += 1
}
if (yellowcount > 4.8) {
yellowcount = 0
yellowlittlemove += 10
}
if (yellowlittlemove > 30) {
yellowlittlemove = 0
}
numnum2 = -1
var arr_three = new Array()
for (i = 0; i < tenEnterNum; i++) {
var s_1 = 0
var s_1_1 = 0
// var w = 0 
const imgEl_1 = document.createElement('img')
imgEl_1.src = "img/newc10.svg"
imgEl_1.alt = '10'

imgEl_1.onload = (e) => {


    const image = new fabric.Image(imgEl_1, {
        width: e.target.naturalWidth,
        height: e.target.naturalHeight,
        scaleX: parseInt($('.img_ten').width()) / e.target.naturalWidth,
        scaleY: parseInt($('.img_ten').height()) / e.target.naturalHeight,

        top: Math.round(650 * sRSS),
        left: Math.round(730 * sRSS)
    })
    canvas.add(image)

    image.alt = 1
    image.set({
        borderColor: '#01B0F1'
    })



    canvas.renderAll();


    image._element.alt = '10'
    arr_three.push(image)
    numnum2++
    var maxWidthyellow = Math.round(265 * sRSS)
    // for (i = 0; i < arr_two.length; i++) {
    if (arr_three.length <= 5) {
        s_1 += 10


        image.animate('top', Math.round(40 * sRSS) + Math.round(120 * sRSS) * numnum2, {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
        image.animate('left', (Math.round(130 * sRSS))+(Math.round(20 * sRSS)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRSS)), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
    } else if (arr_three.length > 5 && arr_three.length <= 10) {
        s_1_1 += 10


        image.animate('top', Math.round(40 * sRSS) + Math.round(120 * sRSS) * (numnum2 - 5), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
        image.animate('left', (Math.round(210 * sRSS))+(Math.round(20 * sRSS)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRSS)), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })

    }
    // }



}
}

//4.................................................................................



if (oneEnterNum!= "") {
greencount += 1
}
if (greencount > 4.8) {
greencount = 0
greenlittlemove += 10
}
if (greenlittlemove > 30) {
greenlittlemove = 0
}
numnum3 = -1
var arr_four = new Array()
for (i = 0; i < oneEnterNum; i++) {
var s_1 = 0
var s_1_1 = 0
// var w = 0 
const imgEl_1 = document.createElement('img')
imgEl_1.src = "img/newc1.svg"
imgEl_1.alt = '1'

imgEl_1.onload = (e) => {


    const image = new fabric.Image(imgEl_1, {
        width: e.target.naturalWidth,
        height: e.target.naturalHeight,
        scaleX: parseInt($('.img_one').width()) / e.target.naturalWidth,
        scaleY: parseInt($('.img_one').height()) / e.target.naturalHeight,

        top: Math.round(650 * sRSS),
        left: Math.round(950 * sRSS)
    })
    canvas.add(image)

    image.alt = 1
    image.set({
        borderColor: '#01B0F1'
    })



    canvas.renderAll();


    image._element.alt = '1'
    arr_four.push(image)
    numnum3++
    var maxWidthgreen = Math.round(265 * sRSS)
    // for (i = 0; i < arr_two.length; i++) {
    if (arr_four.length <= 5) {
        s_1 += 10


        image.animate('top', Math.round(40 * sRSS) + Math.round(80 * sRSS) * numnum3, {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
        image.animate('left', (Math.round(85 * sRSS)) +(Math.round(30 * sRSS))+ (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRSS)), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
    } else if (arr_four.length > 5 && arr_four.length <= 10) {
        s_1_1 += 10


        image.animate('top', Math.round(40 * sRSS) + Math.round(80 * sRSS) * (numnum3 - 5), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })
        image.animate('left', (Math.round(165 * sRSS))+(Math.round(30 * sRSS)) + (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRSS)), {
            duration: 800 + s_1,
            onChange: canvas.renderAll.bind(canvas),

            easing: fabric.util.ease.easeInOutExpo
        })

    }
    // }



}
}
























}