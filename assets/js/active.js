/* ===================================================================
    Author          : Modina Theme
    Template Name   : Fundbux - Charity & Foundries HTML Template
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {

        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").delay(500).fadeOut();                        
        });
                

        $(".hero-slider-active, .hero-slider-two-active, .hero-slider-three-active").owlCarousel({        
            items: 1,     
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            nav: true,
            animateOut: "slideOutDown",
            animateIn: "slideInDown",            
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
        });

        $(".event-carousel-active").owlCarousel({
            autoWidth:true,
            center: true,
            loop: true,                                                               
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,                    
                },
                // breakpoint from 768 up
                767 : {
                    items: 2,                    
                },

                991 : {
                    items: 3
                },
                
                1300 : {
                    items: 4
                },

                // breakpoint from 992 up
                1700 : {
                    items: 5
                }
            }
        });

        $(".brands-carousel-active").owlCarousel({ 
            margin: 30,                                                                          
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,                    
                },
                // breakpoint from 768 up
                480 : {
                    items: 2
                },
                // breakpoint from 768 up
                768 : {
                    items: 3
                },
                // breakpoint from 992 up
                992 : {
                    items: 3
                },
                
                1191 : {
                    items: 4
                }
            }
        });

        $(".popular-cause-carousel-active").owlCarousel({        
            margin: 30,      
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            nav: true,
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
            navContainer: '.popular-cause-section .cause-carousel-nav',   
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },                
                // breakpoint from 992 up
                1191 : {
                    items: 3
                }
            }
        });

        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        //# Smooth Scroll
        $('#responsive-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        $('.container').imagesLoaded(function() {
            $('.causes-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });

        $('.container').imagesLoaded(function() {
            $('.event-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.single-event-ticket',
                percentPosition: true,
            });
        });

        var catButton = '.causes-cat-filter button';

        $(catButton).on('click', function(){
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        var eventButton = '.event-cat-filter button';

        $(eventButton).on('click', function(){
            $(eventButton).removeClass('active');
            $(this).addClass('active');
        });

        var amountButton = '.donate-amount-buttons span';

        $(amountButton).on('click', function(){
            $(amountButton).removeClass('active');
            $(this).addClass('active');
        });

        $('.price-raised span, .our-experience h1, .single-fact .digit span, .digit-count span').counterUp({
            delay: 15,
            time: 2200,
        });


        $('.donate-progress-bar').each(function() {
            $(this).find('.progress-content').animate({
              width:$(this).attr('data-percentage')
            },2000);
            
            $(this).find('.progress-number-mark').animate(
              {left:$(this).attr('data-percentage')},
              {
               duration: 2000,
               step: function(now, fx) {
                 var data = Math.round(now);
                 $(this).find('.percent').html(data + '%');
               }
            });  
        });


        $(function() {
            var chart = '.chart';
            if(chart.length > 0) {
                $(chart).easyPieChart({                
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    },
    
                    barColor: '#00baa3',
                    trackColor: '#f6f6f6',
                    scaleColor: 'black',
                    scaleLength: 0,
                    lineCap: 'round',
                    lineWidth: 5,                
                    size: 54,
                });
            }
        });

        $(function() {
            var skillprogress = '.skillprogress';
            if(skillprogress.length > 0) {
                $(skillprogress).easyPieChart({                
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    },
    
                    barColor: '#d55342',
                    trackColor: '#ededed',
                    scaleColor: 'black',
                    scaleLength: 0,
                    lineCap: 'round',
                    lineWidth: 10,                
                    size: 180,
                });
            }
        });

        $(function() {
            var timeline = '.timeline';
            if(timeline.length > 0) {                
                $(timeline).timeline({
                    mode: 'horizontal',
                    visibleItems: 4,
                    forceVerticalMode: 991 // 600px
                });
            }
        });

        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        $("#mobile-menu").metisMenu();

        new WOW().init();

    }); // end document ready function
})(jQuery); // End jQuery
