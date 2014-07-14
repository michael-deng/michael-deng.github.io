/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */

(function($) {

	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);

		/* add class to the body.*/

		$('body').addClass(o.bodyClass);
		$(this).addClass('jPushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';


			if($(this).is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}



			$(this).toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);

			if($(this).is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}

			/* disable all other button*/
			$('.jPushMenuBtn').not($(this)).toggleClass('disabled');

			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}

    if(o.closeOnClickInside) {
       $(document).click(function() {
          jPushMenu.close();
        });

       $('.cbp-spmenu,.toggle-menu').click(function(e){
         e.stopPropagation();
       });
    }

		if(o.closeOnClickOutside) {
			 $(document).click(function() { 
				jPushMenu.close();
				dim1(false); dim2(false); dim3(false); dim4(false); dim5(false);
			 }); 

			 $('.cbp-spmenu,.toggle-menu').click(function(e){ 
				 e.stopPropagation(); 
			 });
		 }

        // On Click Link
        if(o.closeOnClickLink) {
            $('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
                dim1(false); dim2(false); dim3(false); dim4(false); dim5(false);
            });
        }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);

// Darken background after clicking menu button (One function for each page)

function dim1(bool)
{
    if (typeof bool =='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer1').style.display=(bool?'block':'none');
}

function dim2(bool)
{
    if (typeof bool =='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer2').style.display=(bool?'block':'none');
}

function dim3(bool)
{
    if (typeof bool =='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer3').style.display=(bool?'block':'none');
}

function dim4(bool)
{
    if (typeof bool =='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer4').style.display=(bool?'block':'none');
}

function dim5(bool)
{
    if (typeof bool =='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer5').style.display=(bool?'block':'none');
}
