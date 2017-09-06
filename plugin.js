$(document).ready(function(){
    var a=1;
    
    //carousel speed
  $('.carousel').carousel({
  interval:0
});
    
    //nicescroll
     $("html").niceScroll({
    cursorcolor: "#888",
    cursorwidth: "10px", });
    $(".do-nicescrol").niceScroll({
  cursorcolor:"aquamarine",
  cursorwidth:"24px",
  background:"rgba(20,20,20,0.3)",
  cursorborder:"1px solid aquamarine",
  cursorborderradius:0
});  //end
    
    
    //colorbox open and close
    $(".openbox").click(function(){
        if(a==2){
        $(".box").animate({width:"toggle"},300);
        $(".box ul").toggle(300);
        }else{
        $(".box").animate({width:"150px"},300);
            $(".box ul").toggle(300);
        }
        a=2;
    });//end
    
    //colorbox change color
    $(".box li").click(function(){
    if(this.id=="darkred")
    {
       $("link:last").remove();
       $("head").append("<link rel=\"stylesheet\" href=\"css/default.css\">");
    }else if(this.id=="purple")
        {
        $("link:last").remove();
       $("head").append("<link rel=\"stylesheet\" href=\"css/purple.css\">");
        }else{
          $("link:last").remove();
       $("head").append("<link rel=\"stylesheet\" href=\"css/blue.css\">");  
        }
    });  
});//end

  //loading screen
    $(window).on("load",function(){
        $('.scrolltop i').css("display","none");
       $('.loading').delay(1000).fadeOut(1000,function(){
        $('body').css("overflow","auto");
       });
    });//end

//scrolltop
    $(window).scroll(function(){
        
       if($(this).scrollTop()>800){
          
           $('.scrolltop i').fadeIn(1000);
       }else if($(this).scrollTop()<=800)
           {
               $('.scrolltop i').fadeOut(1000);
           }
    });
$('.scrolltop i').click(function(){
    $('html,body').animate({scrollTop:0},600);
});//end




