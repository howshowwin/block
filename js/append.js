var thd_number
var hrd_number
var ten_number
var one_number
var redcount = -1
var bluecount = 0
var yellowcount = 3
var greencount = 4
var redlittlemove = 0
var bluelittlemove = 0
var yellowlittlemove = 0
var greenlittlemove = 0


var numnum = 0
var numnum1 = 0
var numnum2 = 0
var numnum3 = 0
var numnum4 = 0
function appendblock() {
    thd_number = $('.enter_thd').val().replace(/[^0-9]/ig, "");
    hrd_number = $('.enter_hrd').val().replace(/[^0-9]/ig, "");
    ten_number = $('.enter_ten').val().replace(/[^0-9]/ig, "");
    one_number = $('.enter_one').val().replace(/[^0-9]/ig, "");
    $('.enter_thd').val('')
    $('.enter_hrd').val('')
    $('.enter_ten').val('')
    $('.enter_one').val('')


    numnum = -1
    if (thd_number != "") {
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
    for (i = 0; i < thd_number; i++) {
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
    if (hrd_number != "") {
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
    for (i = 0; i < hrd_number; i++) {
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
                scaleX: $('.img_hun').width() / e.target.naturalWidth,
                scaleY: $('.img_hun').height() / e.target.naturalHeight,

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
                image.animate('left', (Math.round(45 * sRSS)) + (Math.round(10 * sRSS)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRSS)), {
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
                image.animate('left', (Math.round(165 * sRSS)) + (Math.round(10 * sRSS)) + (maxWidthblue * bluecount) + (Math.round(bluelittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }


    // 3```````````````````````````````````````````````````````````````````````````````````




    if (ten_number != "") {
        yellowcount += 1
    }
    if (yellowcount > 7.5) {
        yellowcount = 0
        yellowlittlemove += 10
    }
    if (yellowlittlemove > 30) {
        yellowlittlemove = 0
    }
    numnum2 = -1
    var arr_three = new Array()
    for (i = 0; i < ten_number; i++) {
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
            var maxWidthyellow = Math.round(160 * sRSS)
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_three.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(40 * sRSS) + Math.round(120 * sRSS) * numnum2, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(40 * sRSS)) + (Math.round(20 * sRSS)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRSS)), {
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
                image.animate('left', (Math.round(120 * sRSS)) + (Math.round(20 * sRSS)) + (maxWidthyellow * yellowcount) + (Math.round(yellowlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }

    //4.................................................................................



    if (one_number != "") {
        greencount += 1
    }
    if (greencount > 7.5) {
        greencount = 0
        greenlittlemove += 10
    }
    if (greenlittlemove > 30) {
        greenlittlemove = 0
    }
    numnum3 = -1
    var arr_four = new Array()
    for (i = 0; i < one_number; i++) {
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
            var maxWidthgreen = Math.round(160 * sRSS)
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_four.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(40 * sRSS) + Math.round(80 * sRSS) * numnum3, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(85 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRSS)), {
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
                image.animate('left', (Math.round(160 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * greencount) + (Math.round(greenlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }








    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum+ change_Array_sum)
    }, 500)


}
