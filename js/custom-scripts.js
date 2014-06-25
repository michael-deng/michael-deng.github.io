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

// Push menu

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        showLeftPush = document.getElementById( 'showLeftPush' ),
        body = document.body;
 
showLeftPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toright' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeftPush' );
};

function disableOther( button ) {
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
}