/* Hide left arrow for first slide and right arrow for last slide on carousel */

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

/* Make menu buttons go to specific carousel slides */

function goToSlide(number) {
   $('#myCarousel').carousel(number);
}

/* Push menu functionalities */

(function( window ){

    var body = document.body,
        mask = document.createElement("div"),
        button1 = document.querySelector(".button1"),
        toggleSlideLeft1 = document.querySelector( ".toggle-slide-left1" ),
        activeNav
    ;
    var body = document.body,
        mask = document.createElement("div"),
        button2 = document.querySelector(".button2"),
        toggleSlideLeft2 = document.querySelector( ".toggle-slide-left2" ),
        activeNav
    ;
    var body = document.body,
        mask = document.createElement("div"),
        button3 = document.querySelector(".button3"),
        toggleSlideLeft3 = document.querySelector( ".toggle-slide-left3" ),
        activeNav
    ;
    var body = document.body,
        mask = document.createElement("div"),
        button4 = document.querySelector(".button4"),
        toggleSlideLeft4 = document.querySelector( ".toggle-slide-left4" ),
        activeNav
    ;
    var body = document.body,
        mask = document.createElement("div"),
        button5 = document.querySelector(".button5"),
        toggleSlideLeft5 = document.querySelector( ".toggle-slide-left5" ),
        activeNav
    ;
    mask.className = "mask";

    /* push menu left */
    toggleSlideLeft1.addEventListener( "click", function(){
        classie.add( body, "sml-open" );
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );
    toggleSlideLeft2.addEventListener( "click", function(){
        classie.add( body, "sml-open" );
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );
    toggleSlideLeft3.addEventListener( "click", function(){
        classie.add( body, "sml-open" );
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );
    toggleSlideLeft4.addEventListener( "click", function(){
        classie.add( body, "sml-open" );
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );
    toggleSlideLeft5.addEventListener( "click", function(){
        classie.add( body, "sml-open" );
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );

    /* hide active menu if mask is clicked */
    mask.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );

    /* hide active menu if a menu button is clicked */
    button1.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );
    button2.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );
    button3.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );
    button4.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );
    button5.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );

    /* hide active menu if close menu button is clicked */
    [].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
        el.addEventListener( "click", function(){
            classie.remove( body, activeNav );
            activeNav = "";
            document.body.removeChild(mask);
        } );
    });

})( window );




