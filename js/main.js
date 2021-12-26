/** ===============

.. Preloader
.. header_search
.. header_logo
.. Fixed-header
.. Menu
.. Number rotator
.. Skillbar
.. Tab
.. Accordion
.. Isotope
.. Prettyphoto
.. share-icon_btn
.. Slick_slider
.. Back to top 

 =============== */


(function($) {

   'use strict'


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
   // makes sure the whole site is loaded
    $(window).on("load",function() {
            // will first fade out the loading animation
         $("#preloader").fadeOut();
            // will fade out the whole DIV that covers the website.
         $("#status").fadeOut(9000);
    })


/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/
    
    $(".header_search").each(function(){  
        $(".search_btn", this).on("click", function(e){

            e.preventDefault();
            e.stopPropagation();

            $(".header_search_content").toggleClass("on");

            if ($('.header_search a').hasClass('open')) {

                $( ".header_search a i" ).removeClass('ti-close').addClass('ti-search');
                
                $(this).removeClass('open').addClass('sclose');    

            } 

            else {
                $(".header_search a").removeClass('sclose').addClass('open');

                $( ".header_search a i" ).removeClass('ti-search').addClass('ti-close');  
                
            }
        });

    });


/*------------------------------------------------------------------------------*/
/* header_logo / Nav
/*------------------------------------------------------------------------------*/

    $(document).ready(function() {

        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
            {
                $('.header.logo-with-bg-shape').find('img').attr({src:'images/logo-white.png'});
            }

    });

    jQuery(window).resize(function() {

        var retina = window.devicePixelRatio > 1 ? true : false;

        if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
           
            $('.header.logo-with-bg-shape .site-branding').find('img').attr({src:'images/logo-img.png'});  
        }

        else {

           $('.header.logo-with-bg-shape .site-branding').find('img').attr({src:'images/logo-white.png'}); 
        }

    });


/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

    $(window).scroll(function(){
        

        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {

                $('.ttm-stickable-header').addClass('fixed-header');
                $('.header.logo-with-bg-shape .ttm-stickable-header').addClass('fixed-header').find('img').attr({src:'images/logo-img.png'});;

            }
            else {

                $('.ttm-stickable-header').removeClass('fixed-header');
                $('.header.logo-with-bg-shape .ttm-stickable-header').removeClass('fixed-header').find('img').attr({src:'images/logo-white.png'});;

            }
        }
    });



    $(document).ready(function() {

        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
            {
                $('.header.ttm-header-style-02 .site-header-menu').addClass('ttm-bgcolor-darkgrey');
                
            }

        jQuery(window).resize(function() {

            var retina = window.devicePixelRatio > 1 ? true : false;


            if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) {
               
                $('.header.ttm-header-style-02 .site-header-menu').addClass('ttm-bgcolor-darkgrey');
            }

            else {

               $('.header.ttm-header-style-02 .site-header-menu').removeClass('ttm-bgcolor-darkgrey');

            }

        });
    });
    


/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/

    var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.main-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        e.preventDefault();
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });   

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                                $(this).closest(".col-menu").toggleClass("active");
                                return false;
                                e.preventDefault();
                                
                            });

                        });
                    });  
                    
                }); 
            }
        },
    };

    
    $('.btn-show-menu-mobile').on('click', function(e){
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show'); 
        return false;
        e.preventDefault();  
    });

    // Initialize
    $(document).ready(function(){
        menu.initialize();

    });


    function vemlo_menuhover_item() {

        var ttm_menu_item, ttm_leftmenu, ttm_menu_width, ttm_parentli_width;
        var ttm_sepline = jQuery(".ttm-sepline");
        var active_item = jQuery("header:not(.ttm-header-style-02) #site-header-menu .site-navigation .main-menu > ul.menu").children('.mega-menu-item.active');
        
        if (active_item.length != 0) {
            ttm_sepline.width(active_item.width()).css({ left: active_item.position().left, opacity: 1 }).data("origLeft", 
                ttm_sepline.position().left).data("origWidth", ttm_sepline.width());
            } 
            else {
            ttm_sepline.css("opacity", 0);
        }

        jQuery("#site-header-menu .site-navigation .main-menu > ul.menu > li").children("a").hover(
            function () {
                ttm_menu_item = jQuery(this);
                ttm_leftmenu = ttm_menu_item.parent().position().left;
                ttm_menu_width = ttm_menu_item.parent().width();
                ttm_sepline.stop().animate({ left: ttm_leftmenu, width: ttm_menu_width, opacity: 1 });
            },
            function () {
                ttm_sepline.stop().animate({ left: ttm_sepline.data("origLeft"), width: ttm_sepline.data("origWidth") });
                if (active_item.length == 0) {
                    ttm_sepline.stop().animate({ opacity: 0 });
                }
            }
        );

        jQuery("#site-header-menu .site-navigation .main-menu ul.menu > ul > li, #site-header-menu .site-navigation .main-menu ul.menu li > ul.mega-submenu > li")
        .children("a").hover(
            function () {
                ttm_menu_item = jQuery(this);
                ttm_leftmenu = ttm_menu_item.parent("ul").closest("li").left;
                ttm_menu_width = ttm_menu_item.parent().closest(".main-menu ul:not(.children, .mega-submenu)>li").width();
                ttm_sepline.stop().animate({ left: ttm_leftmenu, width: ttm_menu_width, opacity: 1 });
            },
            function () {
                ttm_sepline.stop().animate({ left: ttm_sepline.data("origLeft"), width: ttm_sepline.data("origWidth") });
                if (active_item.length == 0) {
                    ttm_sepline.stop().animate({ opacity: 0 });
                }
            }
        );

    }

    jQuery("header:not(.ttm-header-style-02) #site-header-menu .site-navigation .main-menu > ul").append("<li class='ttm-sepline'><span class='sep-img'></span></li>");
    vemlo_menuhover_item();



/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });


   
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
    $('.ttm-progress-bar').each(function() {
        $(this).find('.progress-bar').width(0);
    });

    $('.ttm-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });


    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });

/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 
    $(document).ready(function() {

        $('.ttm-tabs > .tabs').children('li').on('click', function(e) {  

            var tab = $(this).closest('.ttm-tabs > .tabs > .tab'), 

            index = $(this).closest('.ttm-tabs > .tabs > li').index();

            $(this).parents('.ttm-tabs').children(' .tabs').children('li.active ').removeClass('active'); 

            $(this).addClass('active'); 
            $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
            $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

            e.preventDefault();
        });
    });


/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

    var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click',function(e) {

        e.preventDefault();
        var $this = $(this);
            $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');   
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
           $this.next().parent().children().children().addClass('active');

        }

    });


/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   $(function () {

        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.project_item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

   });


    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
    $(function () {

         // Normal link
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
            if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') && !jQuery(this).hasClass('modula-lightbox') ){
                var attr = $(this).attr('data-gal');
                if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
                    jQuery(this).attr('data-rel','prettyPhoto');
                }
            }
        });     

        jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
        jQuery('a.ttm_prettyphoto').prettyPhoto();
        jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'})

    });
    

    
/*------------------------------------------------------------------------------*/
/* share-icon_btn
/*------------------------------------------------------------------------------*/
    jQuery(".ttm-blog-classic").each(function(t){
        var e=jQuery(this);
        e.find(".ttm-social-share-icon_btn").on("click",function(){
            return e.find(".social-icons").toggleClass("show"),!1
        })
    });


/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: false,
        centerMode : false,

        responsive: [{

            breakpoint: 1360,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    /* testimonials */
    var testinav=jQuery('.testimonials-nav',this);
    var testiinfo=jQuery('.testimonials-info',this);

    jQuery('.testimonials-info',this).slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        fade            : false,
        arrows          : false,
        asNavFor        : testinav,
        adaptiveHeight  : true,
        speed           : 1500,
        autoplay        : true,
        loop            : true,

    });

    jQuery('.testimonials-nav',this).slick({

        slidesToShow    : 1,
        slidesToScroll  : 1,
        asNavFor        : testiinfo,
        centerMode      : true,
        centerPadding   : '0',
        focusOnSelect   : true,
        autoplay        : false,
        speed           : 1500,
        arrows          : true,
        dots            : false,
        variableWidth   : true,
        loop            : true,


        responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
        
    });


    /* testimonials */
    var blognav=jQuery('.blog-nav',this);
    var bloginfo=jQuery('.blog-info',this);

    jQuery('.blog-info',this).slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        fade            : false,
        asNavFor        : blognav,
        autoplay        : false,
        speed           : 1500,
        arrows          : false,
        dots            : false,
    });

    jQuery('.blog-nav',this).slick({

        slidesToShow    : 4,
        slidesToScroll  : 1,
        asNavFor        : bloginfo,
        focusOnSelect   : true,
        autoplay        : false,
        speed           : 1500,
        arrows          : false,
        dots            : false,
        vertical        : true,

        responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        }
      ]
        
    }); 



/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
    
    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    jQuery(window).scroll(function() {
        "use strict";
        if (jQuery(this).scrollTop() >= 1000) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });



})(jQuery);