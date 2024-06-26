
jQuery(
    function($){
        'use strict';
        $(window).on('scroll',function()
        {
            if($(this).scrollTop()>50)
            {
                $('.main-nav').addClass('menu-shrink');
            }else{
                $('.main-nav').removeClass('menu-shrink');
            }});
            $('.banner-bottom-btn a').on('click',function(e){
                var anchor=$(this);
                $('html, body').stop().animate({
                    scrollTop:$(anchor.attr('href')).offset().top-50},1500);
                    e.preventDefault();});
                    jQuery('.mean-menu').meanmenu({meanScreenWidth:'991'});
                    $('select').niceSelect();
                    try{var mixer=mixitup('#container',
                    {
                        controls:{toggleDefault:'none'}});
                    }catch(err){

                    }
$('.popup-youtube').magnificPopup({disableOn:320,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});$('.odometer').appear(function(e){var odo=$('.odometer');odo.each(function(){var countNumber=$(this).attr('data-count');$(this).html(countNumber);});});$('.location-slider').owlCarousel({loop:true,margin:15,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],responsive:{0:{items:1,},600:{items:2,},1000:{items:4,}}});$('.feedback-slider').owlCarousel({loop:true,margin:0,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],responsive:{0:{items:1,},600:{items:1,},1000:{items:2,}}});$('.partner-slider').owlCarousel({loop:true,margin:0,nav:false,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,responsive:{0:{items:2,},600:{items:3,},1000:{items:5,}}});$('.support-slider').owlCarousel({loop:true,margin:0,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],responsive:{0:{items:1,},600:{items:3,},1000:{items:6,}}});$('.company-slider').owlCarousel({loop:true,margin:15,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],responsive:{0:{items:1,},600:{items:2,},1100:{items:5,}}});$('.candidate-slider').owlCarousel({loop:true,margin:20,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],responsive:{0:{items:1,},600:{items:1,},900:{items:2,}}});$('.testimonial-slider').owlCarousel({items:1,loop:true,margin:20,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],});$('.client-slider').owlCarousel({items:1,loop:true,margin:20,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],});$('.job-details-slider').owlCarousel({items:1,loop:true,margin:20,nav:true,dots:false,smartSpeed:1000,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],});$('.progress-bar').loading();let getDaysId=document.getElementById('days');if(getDaysId!==null){const second=1000;const minute=second*60;const hour=minute*60;const day=hour*24;let countDown=new Date('November 30, 2022 00:00:00').getTime();setInterval(function(){let now=new Date().getTime();let distance=countDown-now;document.getElementById('days').innerText=Math.floor(distance/(day)),document.getElementById('hours').innerText=Math.floor((distance%(day))/(hour)),document.getElementById('minutes').innerText=Math.floor((distance%(hour))/(minute)),document.getElementById('seconds').innerText=Math.floor((distance%(minute))/second);},second);};$('.accordion > li:eq(0) a').addClass('active').next().slideDown();$('.accordion a').on('click',function(j){var dropDown=$(this).closest('li').find('p');$(this).closest('.accordion').find('p').not(dropDown).slideUp();if($(this).hasClass('active')){$(this).removeClass('active');}else{$(this).closest('.accordion').find('a.active').removeClass('active');$(this).addClass('active');}

dropDown.stop(false,true).slideToggle();
j.preventDefault();});
$('.newsletter-form').validator().on('submit',function(event)
{
    if(event.isDefaultPrevented()){formErrorSub();
        submitMSGSub(false,'Please enter your email correctly.');
    }else{
        event.preventDefault();
    }});
    function callbackFunction(resp)
    {
        if(resp.result==='success'){formSuccessSub();
        }
else{
    formErrorSub();}
}
function formSuccessSub(){
    $('.newsletter-form')[0].reset();submitMSGSub(true,'Thank you for subscribing!');
    setTimeout(
        function(){$('#validator-newsletter').addClass('hide');},4000)
    }
function formErrorSub(){
    $('.newsletter-form').addClass('animated shake');
    setTimeout(function(){$('.newsletter-form').removeClass('animated shake');
},1000)
}
function submitMSGSub(valid,msg){
    if(valid){var msgClasses='validation-success';
}else{
    var msgClasses='validation-danger';
}
$('#validator-newsletter').removeClass().addClass(msgClasses).text(msg);
}
$('.newsletter-form').ajaxChimp({
    url:'https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9',callback:callbackFunction});
    jQuery(window).on('load',function(){jQuery('.loader').fadeOut(500);});
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow"></i></div>');
    $(window).on('scroll',function(){if($(this).scrollTop()!=0){$('#toTop').fadeIn();
}
else{
    $('#toTop').fadeOut();}});$('#toTop').on('click',function(){
        $('html, body').animate({scrollTop:0},900);return false;});
        //$('body').append("<a href='#' target='_blank' class='buy-now-btn'>Enquiry</a>");
        $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
    }(jQuery));
    function setTheme(themeName){localStorage.setItem('jecto_theme',themeName);
    document.documentElement.className=themeName;
}
function toggleTheme(){
    if(localStorage.getItem('jecto_theme')==='theme-dark')
    {
        setTheme('theme-light');}else{setTheme('theme-dark');}
    }
(function(){
    if(localStorage.getItem('jecto_theme')==='theme-dark'){setTheme('theme-dark');
    document.getElementById('slider').checked=false;}else{setTheme('theme-light');
    document.getElementById('slider').checked=true;
}})();
