$(document).ready(function(){
  $(".skyline").hover(function(){
    $(this).fadeOut('slow');
  }, function(){
    $(this).fadeIn('slow');
  });
  $(".frame").hover(function(){
    $(this).animate({right:'5px', bottom:'5px'});
    $(this).css({background:'rgba(255, 255, 255, 0.2)'});
    $(this).css({boxShadow: '5px 5px rgba(41, 36, 33, 0.5)'});
  }, function(){
    $(this).animate({left:'2px', top:'2px'});
    $(this).css({background:'rgba(255, 255, 255, 0)'});
    $(this).css({boxShadow: '5px 5px rgba(41, 36, 33, 0)'});
  });

  $(".line").hover(function(){
    $(this).find(".fillframe").fadeOut("normal");
    $(this).find(".fillframe").fadeIn("normal");
  });  
});
