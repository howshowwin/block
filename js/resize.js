$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});
var sRSS
var change_img = $('.img_thd').css("width")

var cursor_padding
var obj_padding 
function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    sRSS = sRatio
    $('.background-img').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background1").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".showbox").css({ width: Math.round(1480 * sRatio), height: Math.round(697 * sRatio) });
    $('.changeMoneyAreaTop').css({ width: Math.round(359 * sRatio), height: Math.round(31 * sRatio) });
    $('.changeMoneyAreaBottom').css({ width: Math.round(385 * sRatio), height: Math.round(697 * sRatio) });
    $('.change_btn').css({ width: Math.round(333 * sRatio), height: Math.round(83 * sRatio) });
    $('.close_btn').css({ width: Math.round(76 * sRatio), height: Math.round(77 * sRatio) });
    $('.useteach').css({ width: Math.round(263 * sRatio), height: Math.round(78 * sRatio) });
    $('.countpic').css({ width: Math.round(262 * sRatio), height: Math.round(163 * sRatio) });
    $('.delete_btn').css({ width: Math.round(67 * sRatio), height: Math.round(52 * sRatio) });
    $('.openorclosecount_btn').css({ width: Math.round(175 * sRatio), height: Math.round(52 * sRatio) });
    $('.inputarea').css({ width: Math.round(159 * sRatio), height: Math.round(79 * sRatio) });
    $('.arrow').css({ width: Math.round(19 * sRatio), height: Math.round(13 * sRatio) });
    $('.choosenum').css({ width: Math.round(149 * sRatio), height: Math.round(565 * sRatio) });
    $('.img_thd').css({ width: Math.round(125*1.06 *  sRatio), height: Math.round(115*1.06 * sRatio) });
    $('.img_hun').css({ width: Math.round(164 * 0.8 * sRatio), height: Math.round(36 * 0.8 * sRatio) });
    $('.img_ten').css({ width: Math.round(16 * 0.8 * sRatio), height: Math.round(129 * 0.8 * sRatio) });
    $('.img_one').css({ width: Math.round(29 * 0.8 * sRatio), height: Math.round(27 * 0.8 * sRatio) });
    $('.img_thd1').css({ width: Math.round(125 *0.95*  sRatio), height: Math.round(115 *0.95* sRatio) });
    $('.img_hun1').css({ width: Math.round(164 * 0.8 * sRatio), height: Math.round(36 * 0.8 * sRatio) });
    $('.img_ten1').css({ width: Math.round(16 * 0.8 * sRatio), height: Math.round(129 * 0.8 * sRatio) });
    $('.img_one1').css({ width: Math.round(29 * 0.8 * sRatio), height: Math.round(27 * 0.8 * sRatio) });
    $('.numberframe').css({ width: Math.round(125 * sRatio), borderRadius: Math.round(5 * sRatio) });
    $('.numlist').css({height: Math.round(54.2 * sRatio),fontSize:Math.round(35 * sRatio)})
    $('.dragselected').css({ width: Math.round(355 * sRatio), height: Math.round(200 * sRatio) });
    $('.selectedframe').css({ width: Math.round(330 * sRatio), height: Math.round(185 * sRatio), boxShadow: `0px ${Math.round(30 * sRatio)}px ${Math.round(30 * sRatio)}px inset rgba(34, 34, 34, 0.452),0px ${-Math.round(30 * sRatio)}px ${Math.round(30 * sRatio)}px inset rgba(34, 34, 34, 0.466) ` });
    $('.box').css({ width: Math.round(330 * sRatio), height: Math.round(185 * sRatio)})
    $('.img_box').css({ width: Math.round(330 * sRatio), height: Math.round(185 * sRatio),  backgroundPosition: `0 ${Math.round(30 * sRatio)}px`,backgroundSize:`${Math.round(330 * sRatio)}px ${Math.round(480 * sRatio)}px`})
    $('.movetopbtn').css({ width: Math.round(56 * sRatio), height: Math.round(39 * sRatio) });
    $('.movedownbtn').css({ width: Math.round(56 * sRatio), height: Math.round(39 * sRatio) });
    $('.enter_input').css({ width: Math.round(70 * sRatio), height: Math.round(30 * sRatio), fontSize: Math.round(30 * sRatio) })
    $('.count').css({ width: Math.round(180 * sRatio), height: Math.round(100 * sRatio), fontSize: Math.round(55 * sRatio) })
    $('.mask').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.info').css({ width: Math.round(673*1.6  * sRatio), height: Math.round(456 *1.6* sRatio) });
    $('.info-page').css({ width: Math.round(1039  * sRatio), height: Math.round(687.6* sRatio),borderRadius: Math.round(15 * sRatio) });
    $('.info-btn-left,.info-btn-right').css({ width: Math.round(35 * sRatio), height: Math.round(35 * sRatio) });
    $('.btn_close_inset').css({ width: Math.round(53 * sRatio), height: Math.round(53 * sRatio) });
    $('.now_num').css({fontSize:Math.round(25 * sRatio)})
    canvas.setHeight(655 * sRatio);
    canvas.setWidth(1815 * sRatio);
    $('.canvas-container').css({ borderRadius: Math.round(20 * sRatio) })
    canvas.discardActiveObject();



    var nowW =  $('.img_thd').css('width')
    console.log(nowW)
    console.log(change_img)
  
    var countscale =  parseInt(nowW)/ parseInt(change_img) 
      var objse = canvas.getObjects()
      objse.forEach((obj) => {
        
  
          obj.scaleX = obj.scaleX * countscale
  
          obj.scaleY = obj.scaleY * countscale
          obj.left = obj.left * countscale
          obj.top = obj.top *countscale
          obj.setCoords()
          // obj.width=  obj._element.naturalWidth* scalenow
          // obj.height=  obj._element.naturalHeigh* scalenow
  
  
      });
      change_img =nowW   
  
  
  
  
  
  
  
      fabric.Object.prototype.customiseCornerIcons({
          settings: {
              borderColor: 'black',
              cornerSize: Math.round(40 * sRatio),
              cornerShape: 'circle',
              cornerBackgroundColor: 'rgba(0,0,0,0)',
              cornerPadding: 0
          },
  
       
          tr: {

            icon: 'img/tX.svg',
        },
        bl: {
            icon: 'img/tR.svg',

        },
        br: {
            settings: {
                borderColor: '#0094dd',

                cornerShape: 'circle',
            },
            icon: 'img/tB.svg'
        },
      
      }, function () {
          canvas.renderAll()
      })
  
      fabric.Object.prototype.set({
          padding: Math.round(10 * sRatio)
      })
      fabric.Object.prototype.set({
          borderColor: '#0094dd',
          lockScalingFlip: true
      })


      cursor_padding = Math.round(40 * sRatio)
      obj_padding = Math.round(10 * sRatio)
  




}
