(function($){
    $(document).ready(function(){

        /*----------------------------------------------------*/
        /*	Sticky Header
        /*----------------------------------------------------*/
        (function() {
            // Fixed Navigation Bar
           // $('#menu-bar').scrollToFixed();

           // Moving Logo from Logo-Bar to Navbar-header on Tab size of 768px or Minimum
           $(window).on("load resize orientationchange",function(e){
                if($(window).width() < 768){
                    $("#logo").detach().appendTo($(".navbar-static-top"));
                }
                else{
                    $("#logo").detach().appendTo('#menu-bar .container .col-sm-3')
                }

               // Dynamic Header Height Set in Home Page
              $(".home #header").height($(".header-top").height() +  $(".slider_block").height());

            });

         })();

        /*--------------------------------------------------
                      Search-Icon
        * ----------------------------------------------------*/
        $(function(){
            $(".search-label .search-button").on("click", function(e){
                e.preventDefault();
                $("html").addClass("search-exp");
                $(".search-input").focus();
            });
            $(".search-input").blur(function(){
                // Do not hide input if contains text
                if($(".search-input").val() === ""){
                    $("html").removeClass("search-exp");
                }
            });
        });

        /*----------------------------------------------------*/
        /*	Carousel
         /*----------------------------------------------------*/
        // Add classes for other carousels
        var $carousel = $('.recent-work-jc');
        var scrollCount;
        function adjustScrollCount() {
            if( $(window).width() < 768 ) {
                scrollCount = 1;
            } else {
                scrollCount = 3;
            }
        }

        function adjustCarouselHeight() {
            $carousel.each(function() {
                var $this    = $(this);
                var maxHeight = -1;
                $this.find('li').each(function() {
                    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
                });
                $this.height(maxHeight);
            });
        }

        function initCarousel() {
            adjustCarouselHeight();
            adjustScrollCount();
            var i = 0;
            var g = {};
            $carousel.each(function() {
                i++;
                var $this = $(this);
                g[i] = $this.jcarousel({
                    animation           : 600,
                    scroll              : scrollCount
                });
                $this.jcarousel('scroll', 0);
                $this.prev().find('.jcarousel-prev').bind('active.jcarouselcontrol', function() {
                    $(this).addClass('active');
                }).bind('inactive.jcarouselcontrol', function() {
                        $(this).removeClass('active');
                    }).jcarouselControl({
                        target: '-='+scrollCount,
                        carousel: g[i]
                    });

                $this.prev().find('.jcarousel-next').bind('active.jcarouselcontrol', function() {
                    $(this).addClass('active');
                }).bind('inactive.jcarouselcontrol', function() {
                        $(this).removeClass('active');
                    }).jcarouselControl({
                        target: '+='+scrollCount,
                        carousel: g[i]
                    });

                $this.touchwipe({
                    wipeLeft: function() {
                        $this.jcarousel('scroll','+='+scrollCount);
                    },
                    wipeRight: function() {
                        $this.jcarousel('scroll','-='+scrollCount);
                    }
                });
            });
        }

        $(window).load(function(){
            initCarousel();
        });

        $(window).resize(function () {
            $carousel.each(function() {
                var $this = $(this);
                $this.jcarousel('destroy');
            });
            initCarousel();
        });


        $("body").tooltip({
            selector: '[data-toggle="tooltip"]'
        });


        //  ============================
        //  = Scroll event function =
        //  ===========================
        var goScrolling = function(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };


        //  =======================
        //  = Progress bars =
        //  =======================
        $('.progress_skill .bar').data('width', $(this).width()).css({
            width : 0,
            height:0
        });
        $(window).scroll(function() {
            $('.progress_skill .bar').each(function() {
                if (goScrolling($(this))) {
                    $(this).css({
                        width : $(this).attr('data-value') + '%',
                        height : $(this).attr('data-height') + '%'
                    });
                }
            });
        });


        //  ===================
        //  = Flickr Gallery =
        //  ===================



        /*===========================================================*/
        /*	Isotope Posrtfolio
         /*===========================================================*/
        if(jQuery.isFunction(jQuery.fn.isotope)){
            jQuery('.portfolio_list').isotope({
                itemSelector : '.list_item',
                layoutMode : 'fitRows',
                animationEngine : 'jquery'
            });

            /* ---- Filtering ----- */
            jQuery('#filter li').click(function(){
                var $this = jQuery(this);
                if ( $this.hasClass('selected') ) {
                    return false;
                } else {
                    jQuery('#filter .selected').removeClass('selected');
                    var selector = $this.attr('data-filter');
                    $this.parent().next().isotope({ filter: selector });
                    $this.addClass('selected');
                    return false;
                }
            });
        }


        /*----------------------------------------------------*/
        /*	Magnific Popup
         /*----------------------------------------------------*/


        /*----------------------------------------------------*/
        /*	Accordians
         /*----------------------------------------------------*/
        $('.accordion').on('shown.bs.collapse', function (e) {
            $(e.target).parent().addClass('active_acc');
            $(e.target).prev().find('.switch').removeClass('fa-plus');
            $(e.target).prev().find('.switch').addClass('fa-minus');
        });
        $('.accordion').on('hidden.bs.collapse', function (e) {
            $(e.target).parent().removeClass('active_acc');
            $(e.target).prev().find('.switch').addClass('fa-plus');
            $(e.target).prev().find('.switch').removeClass('fa-minus');
        });


        /*----------------------------------------------------*/
        /*	Toggles
         /*----------------------------------------------------*/
        $('.toggle').on('shown.bs.collapse', function (e) {
            $(e.target).parent().addClass('active_acc');
            $(e.target).prev().find('.switch').removeClass('fa-plus');
            $(e.target).prev().find('.switch').addClass('fa-minus');
        });
        $('.toggle').on('hidden.bs.collapse', function (e) {
            $(e.target).parent().removeClass('active_acc');
            $(e.target).prev().find('.switch').addClass('fa-plus');
            $(e.target).prev().find('.switch').removeClass('fa-minus');
        });

        /* ------------------ End Document ------------------ */
    });
})(this.jQuery);

$(document).ready(function() {

    /*=================
     *	Contact Form
     * #contact
     ===================*/




    /*============
     BUTTON UP
     * ===========*/
    var btnUp = $('<div/>', {'class':'btntoTop'});
    btnUp.appendTo('body');
    $(document)
        .on('click', '.btntoTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });

    $(window)
        .on('scroll', function() {
            if ($(this).scrollTop() > 200)
                $('.btntoTop').addClass('active');
            else
                $('.btntoTop').removeClass('active');
        });
});


/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad, and Android mobile phones
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);


