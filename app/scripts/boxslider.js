$(document).ready(function(){
    //Full Caption Sliding (Hidden to Visible)
    $('.box').hover(function(){
        $(".boxcaption", this).stop().animate({top:'65%'},{queue:false,duration:160});
    }, function() {
        $(".boxcaption", this).stop().animate({top:'100%'},{queue:false,duration:160});
    });
});