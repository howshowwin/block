$('.info-page').css({
    background: `url(setpic/${set_pic_info[0]})`,
    backgroundSize: "cover"
  })
if (set_pic_info.length > 1) {
    $('.info-btn-right').removeClass('display_none')
}
var picnowdisplay = 0
var picenddisplay = set_pic_info.length - 1
$('.info-btn-right').click(function () {
    picnowdisplay++
    $('.info-page').css({
        background: `url(setpic/${set_pic_info[picnowdisplay]})`,
        backgroundSize: "cover"
    })
    if (picnowdisplay == picenddisplay) {
        $('.info-btn-right').addClass('display_none')
    }
    if (picnowdisplay != 0) {
        $('.info-btn-left').removeClass('display_none')
    }
})
$('.info-btn-left').click(function () {
    picnowdisplay--
    $('.info-page').css({
        background: `url(setpic/${set_pic_info[picnowdisplay]})`,
        backgroundSize: "cover"
    })
    if (picnowdisplay == 0) {
        $('.info-btn-left').addClass('display_none')
    }
    if (picnowdisplay != picenddisplay) {
        $('.info-btn-right').removeClass('display_none')
    }

})


var stagenum = 0

var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {
        //判斷瀏覽器IE,谷歌滑輪事件 
        if (e.wheelDelta > 0) {

            var bgP = $('.img_box').css('backgroundSize')
            var jj = bgP.slice(5, 15)
            stagenum = parseInt(jj) / 8 + stagenum

            // //當滑輪向上滾動時 
            $('.img_box').css({
                backgroundPosition: `0 ${Math.round(30 * sRSS) + stagenum}px`
            })


        } if (e.wheelDelta < 0) {
            var bgP = $('.img_box').css('backgroundSize')
            var jj = bgP.slice(5, 15)
            stagenum = stagenum - parseInt(jj) / 8

            // //當滑輪向上滾動時 
            $('.img_box').css({
                backgroundPosition: `0 ${Math.round(30 * sRSS) + stagenum}px`
            })


        }
    }
    // else if (e.detail) {
    //     //Firefox滑輪事件 
    //     if (e.detail > 0) {
    //         //當滑輪向上滾動時 
    //         alert("滑輪向上滾動");
    //     }
    //     if (e.detail < 0) {
    //         //當滑輪向下滾動時 
    //         alert("滑輪向下滾動");
    //     }
    // }
}
//給頁面繫結滑輪滾動事件 
if (document.addEventListener) {
    //firefox 
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滾動滑輪觸發scrollFunc方法 //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;



$('.movetopbtn').click(function () {

    var bgP = $('.img_box').css('backgroundSize')
    var jj = bgP.slice(5, 15)
    stagenum = parseInt(jj) / 4 + stagenum

    $('.img_box').css({
        backgroundPosition: `0 ${Math.round(30 * sRSS) + stagenum}px`
    })

});


$('.movedownbtn').click(function () {

    var bgP = $('.img_box').css('backgroundSize')
    var jj = bgP.slice(5, 15)
    stagenum = stagenum - parseInt(jj) / 4

    // //當滑輪向上滾動時 
    $('.img_box').css({
        backgroundPosition: `0 ${Math.round(30 * sRSS) + stagenum}px`
    })

});



var clickDisplayNoneThd = 0
var clickDisplayNoneHrd = 0
var clickDisplayNoneTen = 0
var clickDisplayNoneOne = 0


$('.arrow1').click(function (e) {
    e.stopPropagation();
    $('.choosenum').not('.choosenum1').css({
        transform: "scale(0)"
    })
    if (clickDisplayNoneThd == 0) {
        $('.choosenum1').css({
            transform: "scale(1)"
        })

        setTimeout(function () {
            clickDisplayNoneThd = 1
        }, 100)
    } else if (clickDisplayNoneThd == 1) {
        $('.choosenum1').css({
            transform: "scale(0)"
        })
        clickDisplayNoneThd = 0
    }
 
})

$('.arrow2').click(function (e) {
    e.stopPropagation();
    $('.choosenum').not('.choosenum2').css({
        transform: "scale(0)"
    })
    if (clickDisplayNoneHrd == 0) {
        $('.choosenum2').css({
            transform: "scale(1)"
        })

        setTimeout(function () {
            clickDisplayNoneHrd = 1
        }, 100)
    } else if (clickDisplayNoneHrd == 1) {
        $('.choosenum2').css({
            transform: "scale(0)"
        })
        clickDisplayNoneHrd = 0
    }
})
$('.arrow3').click(function (e) {
    e.stopPropagation();
    $('.choosenum').not('.choosenum3').css({
        transform: "scale(0)"
    })
    if (clickDisplayNoneTen == 0) {
        $('.choosenum3').css({
            transform: "scale(1)"
        })

        setTimeout(function () {
            clickDisplayNoneTen = 1
        }, 100)
    } else if (clickDisplayNoneTen == 1) {
        $('.choosenum3').css({
            transform: "scale(0)"
        })
        clickDisplayNoneTen = 0
    }
})
$('.arrow4').click(function (e) {
    e.stopPropagation();
    $('.choosenum').not('.choosenum4').css({
        transform: "scale(0)"
    })
    if (clickDisplayNoneOne == 0) {
        $('.choosenum4').css({
            transform: "scale(1)"
        })

        setTimeout(function () {
            clickDisplayNoneOne = 1
        }, 100)
    } else if (clickDisplayNoneOne == 1) {
        $('.choosenum4').css({
            transform: "scale(0)"
        })
        clickDisplayNoneOne = 0
    }
})

$('body').bind('click', function (event) {
    if (clickDisplayNoneThd == 1) {


        $('.choosenum1').css({
            transform: "scale(0)"
        })
    }
    clickDisplayNoneThd = 0
});
$('body').bind('click', function (event) {
    if (clickDisplayNoneHrd == 1) {


        $('.choosenum2').css({
            transform: "scale(0)"
        })
    }
    clickDisplayNoneHrd = 0

});
$('body').bind('click', function (event) {
    if (clickDisplayNoneTen == 1) {


        $('.choosenum3').css({
            transform: "scale(0)"
        })
    }
    clickDisplayNoneTen = 0
    
});
$('body').bind('click', function (event) {
    if (clickDisplayNoneOne == 1) {


        $('.choosenum4').css({
            transform: "scale(0)"
        })
    }
    clickDisplayNoneOne = 0
});
var togglecount = 0
$('.openorclosecount_btn').click(function () {
    if (togglecount == 0) {
        $('.count').removeClass('display_none')
        $(this).css({
            background: "url(img/newbox3-2.svg)",
            backgroundSize: "cover"
        })
        togglecount = 1
    } else {
        $('.count').addClass('display_none')
        $(this).css({
            background: "url(img/newbox3-1.svg)",
            backgroundSize: "cover"
        })
        togglecount = 0
    }
})

var keydownblur = 0

$('body').keydown(function (event) {
    if (event.which == 13 && $('.count').is(":focus")) {
        canvas.clear();
        keydownblur = 1
        idontknowwhatiwrite()
        $('.enter_thd').val('')
        $('.enter_hrd').val('')
        $('.enter_ten').val('')
        $('.enter_one').val('')
        $('.count').blur()

    }
    if (event.which == 13 && !$('.count').is(":focus")) {
        appendblock()

    }

})




$('.numlist').click(function () {
    let showClick = $(this).data("numval")
    let amount = $(this).closest(".choosenum").data("amount")
    $(`.enter_${amount}`).val(showClick == 10 ? "+10" : `+${showClick}`)

    appendblock()
})

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

$('.enter_input').blur(function () {

    if (isAndroid || isiOS) {
        appendblock()
    }
})
function SumData(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
}

$(".count").bind('input porpertychange', function () {
    if ($('.count').val() > 10999) {
        $('.count').val(10999)
    }
})
var blurnow = 0
$('.count').focus(function () {
    $('.count').val("")
    blurnow = 1
})
$('.count').blur(function (e) {
    setTimeout(function () {
        blurnow = 0
    }, 200)
    console.log(e)
    if ($('.count').val() == "") {
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
    } else {
        if (keydownblur == 0) {
            canvas.clear();

            idontknowwhatiwrite()
            $('.enter_thd').val('')
            $('.enter_hrd').val('')
            $('.enter_ten').val('')
            $('.enter_one').val('')

        } else {
            keydownblur = 0
        }

    }
})

$('.useteach').click(function () {
    picnowdisplay = 0

    $('.mask').removeClass("display_none")

})
$('.btn_close_inset').click(function () {
    $('.mask').addClass("display_none")

})
$(".enter_input").bind('input porpertychange', function () {
    if ($(this).val() > 10) {
        $(this).val(10)
    }
    if (!isNaN($(this).val())) {
        let num = $(this).val()
        num = parseInt(num)
        $(this).val("+" + num)
    }
    if (isNaN($(this).val())) {
        $(this).val("+" + 0)

    }
})
$('.useteach').click(function () {

})
$('.delete_btn').click(function () {
    if (blurnow == 0) {


        canvas.clear()
        $('.count').val(0)
        redcount = -1
        bluecount = 0
        yellowcount = 3
        greencount = 4
        redlittlemove = 0
        bluelittlemove = 0
        yellowlittlemove = 0
        greenlittlemove = 0
        changeArray = []
        change_Array_sum = 0
        numnum = 0
        numnum1 = 0
        numnum2 = 0
        numnum3 = 0
        numnum4 = 0
        arrayOne = []
        arrayten = []
        arrayhun = []
        arrayths = []

        clickappend_img_thdC = 0
        clickrow_img_thdC = 0
        clicklittlemove_img_thdC = 0

        clickappend_img_hunC = 0
        clickrow_img_hunC = 0
        clicklittlemove_img_hunC = 0

        clickappend_img_tenC = 0
        clickrow_img_tenC = 0
        clicklittlemove_img_tenC = 0

        clickappend_img_oneC = 0
        clickrow_img_oneC = 0
        clicklittlemove_img_oneC = 0

    }


})

$('.close_btn').click(function () {
    window.location.href = 'about:blank ';
    window.opener = null;
    window.open('', '_self');
    window.close();

})




fabric.Object.prototype.setControlsVisibility({
    bl: true, // 左下
    br: true, // 右下
    mb: false, // 下中
    ml: false, // 中左
    mr: false, // 中右
    mt: false, // 上中
    tl: false, // 上左
    tr: true, // 上右
    mtr: false // 旋轉控制鍵
})
fabric.Canvas.prototype.customiseControls({
    tl: {
        action: function () {

        }
    },
    tr: {
        action: function () {

        }
    },
    bl: {
        action: function () {

        }

    },
    br: {
        action: function () {

        }
    },
    mb: {
        action: function () {

        }
    },
    mt: {
        action: function () {

        }
    },
    ml: {
        action: function () {

        }
    },
    mr: {
        action: function () {

        }
    },
    mtr: {
        action: function () {

        }
    },
}, function () {

    canvas.renderAll()
})
fabric.Canvas.prototype.cursorMap[1] = 'pointer'
// fabric.Canvas.prototype.cursorMap[2] = 'pointer'
fabric.Canvas.prototype.cursorMap[3] = 'pointer'
// fabric.Canvas.prototype.cursorMap[4] = 'pointer'
fabric.Canvas.prototype.cursorMap[5] = 'pointer'
// fabric.Canvas.prototype.cursorMap[6] = 'pointer'
// fabric.Canvas.prototype.cursorMap[7] = 'pointer'
// fabric.Canvas.prototype.cursorMap[8] = 'pointer'
// fabric.Canvas.prototype.cursorMap[9] = 'pointer'
// fabric.Canvas.prototype.cursorMap[1] = 'pointer'
fabric.Canvas.prototype.customiseControls({
    tl: {
        action: function () {

        }
    },
    tr: {
        action: function (e) {


            var ji = canvas.getActiveObject()
            console.log(ji)
            console.log(objseleted)
            if (ji.cacheKey == objseleted) {
                if (ji) {
                    var index = changeArray.indexOf(ji);
                    if (index > -1) {
                        console.log(index)

                        changeArray.splice(index, 1);
                        var stage = new Array()
                        for (i = 0; i < changeArray.length; i++) {
                            stage.push(parseInt(changeArray[i]._element.alt))
                        }

                        change_Array_sum = SumData(stage)

                    }
                    canvas.remove(ji)
                }
            }
            if (ji._objects) {
                function getSelection() {

                    return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                }

                var o = getSelection();

                o._objects.forEach(function (object, key) {
                    var index = changeArray.indexOf(object);
                    if (index > -1) {
                        console.log(index)

                        changeArray.splice(index, 1);
                        var stage = new Array()
                        for (i = 0; i < changeArray.length; i++) {
                            stage.push(parseInt(changeArray[i]._element.alt))
                        }

                        change_Array_sum = SumData(stage)

                    }
                    canvas.remove(object);
                });
                canvas.discardActiveObject()

            }



            canvas.renderAll();
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


        },
        cursor: 'pointer'
    },
    bl: {
        action: "rotate",

    },
    br: {
        action: "scale",

        cursor: 'pointer'
    },
    mb: {
        action: function () {

        }
    },
    mt: {
        action: function () {

        }
    },
    ml: {
        action: function () {

        }
    },
    mr: {
        action: function () {

        }
    },
    mtr: {
        action: function () {

        }
    },
}, function () {

    canvas.renderAll()
})





fabric.Canvas.prototype.customiseControls({
    bl: {
        action: function () {

        },
        cursor: 'pointer'

    },
    br: {
        action: function () {

        },
        cursor: 'pointer'
    },
}, function () {

    canvas.renderAll()
})






var objseleted

canvas.on('selection:updated', function (e) {
    fabric.Canvas.prototype.customiseControls({
        bl: {
            action: function () {

            },
            cursor: 'pointer'

        },
        br: {
            action: function () {

            },
            cursor: 'pointer'
        },
    }, function () {

        canvas.renderAll()
    })
    setTimeout(function () {
        objseleted = e.target.cacheKey
        console.log(objseleted)
    }, 120)
    setTimeout(function () {
        objscalerotate = e.target.cacheKey
        console.log(objseleted)
        fabric.Canvas.prototype.customiseControls({
            tl: {
                action: function () {

                }
            },
            tr: {
                action: function (e) {


                    var ji = canvas.getActiveObject()
                    console.log(ji)
                    console.log(objseleted)
                    if (ji.cacheKey == objseleted) {
                        if (ji) {

                            canvas.remove(ji)
                        }
                    }
                    if (ji._objects) {
                        function getSelection() {

                            return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                        }

                        var o = getSelection();

                        o._objects.forEach(function (object, key) {

                            canvas.remove(object);
                        });
                        canvas.discardActiveObject()

                    }



                    canvas.renderAll();

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




                },
                cursor: 'pointer'
            },
            bl: {
                action: 'rotate',
                cursor: 'pointer'

            },
            br: {
                action: "scale",
                cursor: 'pointer'
            },
            mb: {
                action: function () {

                }
            },
            mt: {
                action: function () {

                }
            },
            ml: {
                action: function () {

                }
            },
            mr: {
                action: function () {

                }
            },
            mtr: {
                action: function () {

                }
            },
        }, function () {

            canvas.renderAll()
        })
    }, 500)
});








canvas.on('object:selected', e => {
    fabric.Canvas.prototype.customiseControls({
        bl: {
            action: function () {

            },
            cursor: 'pointer'

        },
        br: {
            action: function () {

            },
            cursor: 'pointer'
        },
    }, function () {

        canvas.renderAll()
    })

    if (e.target) {
        console.log(e)
        e.target.bringToFront()
        setTimeout(function () {
            objseleted = e.target.cacheKey
            console.log(objseleted)
        }, 120)
        setTimeout(function () {
            objscalerotate = e.target.cacheKey
            console.log(objseleted)
            fabric.Canvas.prototype.customiseControls({
                tl: {
                    action: function () {

                    }
                },
                tr: {
                    action: function (e) {


                        var ji = canvas.getActiveObject()
                        console.log(ji)
                        console.log(objseleted)
                        if (ji.cacheKey == objseleted) {
                            if (ji) {

                                canvas.remove(ji)
                            }
                        }
                        if (ji._objects) {
                            function getSelection() {

                                return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                            }

                            var o = getSelection();

                            o._objects.forEach(function (object, key) {

                                canvas.remove(object);
                            });
                            canvas.discardActiveObject()

                        }



                        canvas.renderAll();

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




                    },
                    cursor: 'pointer'
                },
                bl: {
                    action: 'rotate',
                    cursor: 'pointer'

                },
                br: {
                    action: "scale",
                    cursor: 'pointer'
                },
                mb: {
                    action: function () {

                    }
                },
                mt: {
                    action: function () {

                    }
                },
                ml: {
                    action: function () {

                    }
                },
                mr: {
                    action: function () {

                    }
                },
                mtr: {
                    action: function () {

                    }
                },
            }, function () {

                canvas.renderAll()
            })
        }, 500)
    }


    // canvas.moveTo(e.target, 0);
})


canvas.on('selection:cleared', e => {
    objseleted = 0
})



var left1 = 0;
var top1 = 0;
var scale1x = 0;
var scale1y = 0;
var width1 = 0;
var height1 = 0;
var angle = 0

canvas.on('object:scaling', function (e) {
    var obj = e.target;
    // obj.set('strokeWidth', 50)

    obj.setCoords();
    var brNew = obj.getBoundingRect();

    if (((brNew.width + brNew.left) >= obj.canvas.width * 0.80 - (20 * sRSS)) || ((brNew.height + brNew.top) >= obj.canvas.height - (20 * sRSS)) || ((brNew.left < (20 * sRSS)) || (brNew.top < (20 * sRSS)))) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
    }
    else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
    }
});
canvas.on('object:rotating', function (e) {
    var obj = e.target;
    obj.setCoords();
    var brNew = obj.getBoundingRect();

    if (((brNew.width + brNew.left) >= obj.canvas.width * 0.80 - (20 * sRSS)) || ((brNew.height + brNew.top) >= obj.canvas.height - (20 * sRSS)) || ((brNew.left < (20 * sRSS)) || (brNew.top < (20 * sRSS)))) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
        obj.angle = angle1;
    }
    else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
        angle1 = obj.angle;

    }
});




var arrayOne = []
var arrayten = []
var arrayhun = []
var arrayths = []















canvas.on('object:moving', function (e) {
    var obj = e.target;
    // if object is too big ignore
    if (obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width) {
        return;
    }
    obj.setCoords();
    // top-left  corner
    if (obj.getBoundingRect().top || obj.getBoundingRect().left) {
        obj.top = Math.max(obj.top, obj.top + (30 * sRSS) - obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left + (30 * sRSS) - obj.getBoundingRect().left);
    }
    // bot-right corner
    // if (obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
    //     obj.top = Math.min(obj.top, obj.canvas.height - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
    //     obj.left = Math.min(obj.left, obj.canvas.width - (30 * sRSS) - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
    // }


    if (obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width * 0.78) {
        obj.left = Math.min(obj.left, obj.canvas.width * 0.78 - (30 * sRSS) - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);

    }

    if (obj.getBoundingRect().left > obj.canvas.width * 0.80 && obj.getBoundingRect().top + obj.getBoundingRect().height < obj.canvas.height * 0.65) {

    }
















    var obj = e.target;
    var objjj = obj._objects ? obj._objects : e.target
    obj.setCoords();
    console.log(e)
    // if ((obj.getBoundingRect().left + obj.getBoundingRect().width/2) > obj.canvas.width * 0.80 && obj.getBoundingRect().top + obj.getBoundingRect().height < obj.canvas.height * 0.65) {
    var clientXnow = e.e.clientX || e.e.targetTouches[0].clientX

    // if (isAndroid || isiOS) {
    //     clientXnow = 
    // }


    if (objjj == e.target) {
        if (clientXnow > objjj.canvas.width * 0.85) {
            var index = changeArray.indexOf(objjj);
            if (index > -1) {
            } else {
                if (objjj._element.alt == 1) {
                    arrayOne.push(objjj)
                } else if (objjj._element.alt == 10) {
                    arrayten.push(objjj)
                } else if (objjj._element.alt == 100) {
                    arrayhun.push(objjj)
                } else if (objjj._element.alt == 1000) {
                    arrayths.push(objjj)
                }
                changeArray.push(objjj)
                canvas.remove(objjj)

            }





        }
    }

    if (objjj == obj._objects) {
        for (i = 0; i < objjj.length; i++) {
            if (clientXnow > obj.canvas.width * 0.85) {

                var index = changeArray.indexOf(objjj[i]);
                if (index > -1) {
                } else {
                    if (objjj[i]._element.alt == 1) {
                        arrayOne.push(objjj[i])
                    } else if (objjj[i]._element.alt == 10) {
                        arrayten.push(objjj[i])
                    } else if (objjj[i]._element.alt == 100) {
                        arrayhun.push(objjj[i])
                    } else if (objjj[i]._element.alt == 1000) {
                        arrayths.push(objjj[i])
                    }
                    changeArray.push(objjj[i])
                    canvas.remove(objjj[i])
                    canvas.discardActiveObject()


                }






            }
        }
    }

    var stage = new Array()


    function pusharray(arr) {
        for (i = 0; i < arr.length; i++) {
            stage.push(parseInt(arr[i]._element.alt))
        }
    }


    pusharray(arrayOne)
    pusharray(arrayten)
    pusharray(arrayhun)
    pusharray(arrayths)


    change_Array_sum = SumData(stage)

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

});

var changeArray = new Array()
var change_Array_sum = 0


setInterval(function () {
    if (arrayths.length != 0) {
        $('.img_thd1').removeClass('opc0')
        $('.thd1_num').removeClass('opc0')
        $('.thd1_num .num_span').text(arrayths.length)
    } else {
        $('.img_thd1').addClass('opc0')
        $('.thd1_num').addClass('opc0')
        $('.thd1_num .num_span').text(0)
    }

    if (arrayhun.length != 0) {
        $('.img_hun1').removeClass('opc0')
        $('.hun1_num').removeClass('opc0')
        $('.hun1_num .num_span').text(arrayhun.length)

    } else {
        $('.img_hun1').addClass('opc0')
        $('.hun1_num').addClass('opc0')
        $('.hun1_num .num_span').text(0)
    }
    if (arrayten.length != 0) {
        $('.img_ten1').removeClass('opc0')
        $('.ten1_num').removeClass('opc0')
        $('.ten1_num .num_span').text(arrayten.length)

    } else {
        $('.img_ten1').addClass('opc0')
        $('.ten1_num').addClass('opc0')
        $('.ten1_num .num_span').text(0)
    }
    if (arrayOne.length != 0) {
        $('.img_one1').removeClass('opc0')
        $('.one1_num').removeClass('opc0')
        $('.one1_num .num_span').text(arrayOne.length)

    } else {
        $('.img_one1').addClass('opc0')
        $('.one1_num').addClass('opc0')
        $('.one1_num .num_span').text(0)
    }
}, 100)


canvas.on('object:moved', function (e) {
    var obj = e.target;

    if (obj.getBoundingRect().top + obj.getBoundingRect().height > $('.canvas-container').height() + $('.canvas-container').offset().top) {

        var obj = e.target;
        var obkkk = obj._objects ? obj._objects : e.target
        obj.setCoords();


        if (obkkk == e.target) {
            canvas.remove(obkkk)
        }

        if (obkkk == obj._objects) {
            obkkk.forEach(function (object, key) {
                canvas.remove(object);
            });
            canvas.discardActiveObject()

        }


        canvas.renderAll();

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
})




var count22 = -1
var littlemove = 0
var start = 1
$('.change_btn').click(function () {
    var bgP = $('.img_box').css('backgroundSize')
    var jj = bgP.slice(5, 15)
    if (Math.sign(stagenum) == 1) {

    }
    var jdj = stagenum / (parseInt(jj) / 4)
    var o = Math.abs(jdj % 4)
    if (Math.sign(stagenum) == 1) {
        if (o == 3) {
            o = 1

        } else if (o == 1) {
            o = 3
        }
    }
    var r = /^\+?[1-9][0-9]*$/

    numnum = 0
    numnum1 = 0
    numnum2 = 0
    numnum3 = 0
    numnum4 = 0
    if (o == 0 && change_Array_sum > 0) {
        if (change_Array_sum / 1 <= 50) {
            count22 = -1
            numnum = -1
            if (o == 0) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            var s_1 = 0

            for (i = 0; i < change_Array_sum; i++) {
                var s_1_1 = 0
                var s_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = "img/newc1.svg"
                imgEl_1.alt = '1'
                // s_1 +=  20
                imgEl_1.onload = (e) => {

                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_one').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_one').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    image.left = 20 + s_1
                    canvas.add(image)

                    image.alt = 1
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '1'
                    arr_one.push(image)
                    console.log(arr_one)
                    const om = 300
                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed2 = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (125 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (205 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (365 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (445 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (605 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (685 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 80 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed2 * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }
            arrayOne = []
            arrayten = []
            arrayhun = []
            arrayths = []
        } else {
            alert(`兌換後數值已大於50，請調整後再進行兌換。`)
        }
    }
    if (o == 1 && change_Array_sum > 0) {
        if (change_Array_sum / 10 <= 50 && r.test(change_Array_sum / 10)) {
            count22 = -1
            numnum = -1
            if (o == 1) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 10; i++) {
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

                        top: 20 * sRSS,
                        left: (1500 + Math.random() * 250) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '10'
                    arr_one.push(image)
                    const om = 300
                    var nowchange2 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange2) * sRSS
                    }

                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (125 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (205 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {
                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (365 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (445 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (605 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (685 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }
            arrayOne = []
            arrayten = []
            arrayhun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 10) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換。`)
        } else {
            let remaining = change_Array_sum % 10
            change_Array_sum = change_Array_sum - change_Array_sum % 10
            count22 = -1
            numnum = -1
            if (o == 1) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 10; i++) {
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

                        top: 20 * sRSS,
                        left: (1500 + Math.random() * 250) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '10'
                    arr_one.push(image)
                    const om = 300
                    var nowchange2 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange2) * sRSS
                    }

                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (125 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (205 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {
                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (365 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (445 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (605 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (685 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }
            let ch500 = remaining
            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }
            arrayten = []
            arrayhun = []
            arrayths = []
            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)


                pusharray(changeArray)
                change_Array_sum = SumData(stage)

            }, 200)
        }










    }
    if (o == 2 && change_Array_sum > 0) {
        if (change_Array_sum / 100 <= 50 && r.test(change_Array_sum / 100)) {
            count22 = -1
            numnum = -1
            if (o == 2) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 100; i++) {
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
                        scaleX: parseInt($('.img_hun').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_hun').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500 + Math.random() * 250) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 100
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '100'
                    arr_one.push(image)
                    const oom = 180
                    var nowchange3 = oom / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange3) * sRSS
                    }

                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }
            arrayOne = []
            arrayten = []
            arrayhun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 100) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換。`)
        } else {
            let remaining = change_Array_sum % 100
            change_Array_sum = change_Array_sum - change_Array_sum % 100
            count22 = -1
            numnum = -1
            if (o == 2) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 100; i++) {
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
                        scaleX: parseInt($('.img_hun').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_hun').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500 + Math.random() * 250) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 100
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '100'
                    arr_one.push(image)
                    const oom = 180
                    var nowchange3 = oom / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange3) * sRSS
                    }

                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }

            let ch500 = remaining
            if ((ch500 - 10) >= 0 && arrayten.length != 0) {
                for (i = 0; i < arrayten.length; i++) {
                    ch500 = ch500 - 10
                    if ((ch500 - 10) < 0) {
                        arrayten = arrayten.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayten = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }

            arrayhun = []
            arrayths = []


            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayten)



                pusharray(changeArray)
                change_Array_sum = SumData(stage)

            }, 200)

        }










    }
    if (o == 3 && change_Array_sum > 0) {
        if (change_Array_sum / 1000 <= 50 && r.test(change_Array_sum / 1000)) {
            count22 = -1
            numnum = -1
            if (o == 3) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 1000; i++) {
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

                        top: 20 * sRSS,
                        left: (1500 + Math.random() * 250) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1000
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '1000'
                    arr_one.push(image)
                    const oom = 180
                    var nowchange4 = oom / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange4) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }
            arrayOne = []
            arrayten = []
            arrayhun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 1000) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換。`)

        } else {
            let remaining = change_Array_sum % 1000
            change_Array_sum = change_Array_sum - change_Array_sum % 1000
            count22 = -1
            numnum = -1
            if (o == 3) {
                count22 += 1
            }

            littlemove += 10

            if (littlemove > 30) {
                littlemove = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 1000; i++) {
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

                        top: 20 * sRSS,
                        left: (1500 + Math.random() * 250) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1000
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '1000'
                    arr_one.push(image)
                    const oom = 180
                    var nowchange4 = oom / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange4) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 40 * sRSS + 120 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 40 * sRSS + 120 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemove * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }


            let ch500 = remaining
            if ((ch500 - 100) >= 0 && arrayhun.length != 0) {
                for (i = 0; i < arrayhun.length; i++) {
                    ch500 = ch500 - 100
                    if ((ch500 - 100) < 0) {
                        arrayhun = arrayhun.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayhun = []
            }


            if ((ch500 - 10) >= 0 && arrayten.length != 0) {
                for (i = 0; i < arrayten.length; i++) {
                    ch500 = ch500 - 10
                    if ((ch500 - 10) < 0) {
                        arrayten = arrayten.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayten = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }

            arrayths = []


            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayten)
                changeArray = changeArray.concat(arrayhun)
                pusharray(changeArray)
                change_Array_sum = SumData(stage)

            }, 200)


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
        $(".count").val(Array_sum + change_Array_sum)

    }, 500)


})

var clickappend_img_thdC = 0
var clickrow_img_thdC = 0
var clicklittlemove_img_thdC = 0

var clickappend_img_hunC = 0
var clickrow_img_hunC = 0
var clicklittlemove_img_hunC = 0

var clickappend_img_tenC = 0
var clickrow_img_tenC = 0
var clicklittlemove_img_tenC = 0

var clickappend_img_oneC = 0
var clickrow_img_oneC = 0
var clicklittlemove_img_oneC = 0


$('.img_thdC').click(function (e) {
    let movingImage = e.target
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: 40 * sRSS + 110 * clickappend_img_thdC * sRSS,
        left: 30 * sRSS + clickrow_img_thdC * 135 * sRSS + clicklittlemove_img_thdC * sRSS,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })
    clickappend_img_thdC++
    if (clickappend_img_thdC == 5) {
        clickrow_img_thdC++
        clickappend_img_thdC = 0
    }
    if (clickrow_img_thdC == 2) {
        clickrow_img_thdC = 0
        clicklittlemove_img_thdC += 20
    }
    if (clicklittlemove_img_thdC > 80) {
        clicklittlemove_img_thdC = 0
    }
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

})



$('.img_hunC').click(function (e) {
    let movingImage = e.target
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: 40 * sRSS + 110 * clickappend_img_hunC * sRSS,
        left: 370 * sRSS + clickrow_img_hunC * 135 * sRSS + clicklittlemove_img_hunC * sRSS,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })
    clickappend_img_hunC++
    if (clickappend_img_hunC == 5) {
        clickrow_img_hunC++
        clickappend_img_hunC = 0
    }
    if (clickrow_img_hunC == 2) {
        clickrow_img_hunC = 0
        clicklittlemove_img_hunC += 20
    }
    if (clicklittlemove_img_hunC > 80) {
        clicklittlemove_img_hunC = 0
    }
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

})



$('.img_tenC').click(function (e) {
    let movingImage = e.target
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: 40 * sRSS + 110 * clickappend_img_tenC * sRSS,
        left: 720 * sRSS + clickrow_img_tenC * 135 * sRSS + clicklittlemove_img_tenC * sRSS,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })
    clickappend_img_tenC++
    if (clickappend_img_tenC == 5) {
        clickrow_img_tenC++
        clickappend_img_tenC = 0
    }
    if (clickrow_img_tenC == 2) {
        clickrow_img_tenC = 0
        clicklittlemove_img_tenC += 20
    }
    if (clicklittlemove_img_tenC > 80) {
        clicklittlemove_img_tenC = 0
    }
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

})




$('.img_oneC').click(function (e) {
    let movingImage = e.target
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: 40 * sRSS + 80 * clickappend_img_oneC * sRSS,
        left: 970 * sRSS + clickrow_img_oneC * 135 * sRSS + clicklittlemove_img_oneC * sRSS,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })
    clickappend_img_oneC++
    if (clickappend_img_oneC == 5) {
        clickrow_img_oneC++
        clickappend_img_oneC = 0
    }
    if (clickrow_img_oneC == 2) {
        clickrow_img_oneC = 0
        clicklittlemove_img_oneC += 20
    }
    if (clicklittlemove_img_oneC > 80) {
        clicklittlemove_img_oneC = 0
    }
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

})