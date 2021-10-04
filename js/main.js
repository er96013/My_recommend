$(document).ready(function(){
    $(".fa-tv").mouseenter(function(){
        var rotate = $(".fas");
        rotate.animate({transform: rotate('45deg'), fontsize: '25px'});
        rotate.animate({transform: rotate('90deg'), fontsize: '30px'});
        rotate.animate({transform: rotate('135deg'), fontsize: '35px'});
        rotate.animate({transform: rotate('180deg'), fontsize: '40px'});
        rotate.animate({transform: rotate('225deg'), fontsize: '45px'});
        rotate.animate({transform: rotate('270deg'), fontsize: '50px'});
        rotate.animate({transform: rotate('315deg'), fontsize: '55px'});
        rotate.animate({transform: rotate('350deg'), fontsize: '60px'});
    })
    $('.btn-close1').click(function(){
        $('.full-screen1').addClass('x1');
    })
    $('#img1').click(function(){
        $('.full-screen1').removeClass('x1');
    })
    $('.btn-close2').click(function(){
        $('.full-screen2').addClass('x2');
    })
    $('#img2').click(function(){
        $('.full-screen2').removeClass('x2');
    })
    $('.btn-close3').click(function(){
        $('.full-screen3').addClass('x3');
    })
    $('#img3').click(function(){
        $('.full-screen3').removeClass('x3');
    })
})