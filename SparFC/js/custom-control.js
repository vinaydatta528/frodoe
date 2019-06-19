


// 
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-100 }, 1000);
      return false;
  });
});

$(document).ready(function() {
	$(".menu").click(function(){
		$(".menu_box").slideToggle();
	}); 
	$(".menu_box").on( "mouseleave", function() {
		$(".menu_box").slideToggle(200);
  });
 
});

///////////////////// Back To Top 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.backtotop').fadeIn('slow');
        } else {
            $('.backtotop').fadeOut('slow');
        }
    });
    $('.backtotop').click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
        return false;
    });
});

