$(document).ready( function() {
  $('h1').html('My Story with jQuery');

  $upcomingTraversals = $('<ul>');
  $upcomingTraversals.append(
    "<li>Change the <code><span><</span>h1>" +
    "</code> to something cheeky</li>"
  );
  $('.info-box').append($upcomingTraversals);

  $(".sad").removeClass("sad")
           .addClass("happy");

  $annoyingBox = $("#annoying-popup");
  $annoyingBox.children()
  		.filter('a')
  		.attr("href", "http://www.cashcats.biz");
  $annoyingBox.css('right', '10px');
  $annoyingBox.css('top', '30px');

  $toppics = $('.suggested-topics ul').children();
  $toppics.each(function(index, element) {
    if($(element).text() === '...') {
      $(element).text('Terrible syntax');
    }
  });
  
  $(".input-form form").children()[0].remove();
	$(".input-form form").prepend("<textarea placeholder='Tell me a story!'></textarea>");
});
