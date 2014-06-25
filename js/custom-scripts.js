// Hides left arrow for first slide and right arrow for last slide on carousel

$(document).ready(function(){
	checkitem();
});

$('#myCarousel').on('slid.bs.carousel', '', checkitem);

function checkitem()
{
  var $this = $('#myCarousel');
  if($('.carousel-inner .item:first').hasClass('active')) {
    $this.children('.left.carousel-control').hide();
    $this.children('.right.carousel-control').show();
  } else if($('.carousel-inner .item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
    $this.children('left.carousel-control').show();
  } else {
    $this.children('.carousel-control').show();
  } 
}


