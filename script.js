$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

        $('.navbar .menu li a').click(function(){
            // applying again smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
        });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Want to become a DEV FullStack", "Learning Front-End in Software Academy"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["...", " My name is Le Phan Tuan Anh, I am currently studying 3rd year at FPT Greenwich. I am currently doing Front-End internship at FPT SoftWare and my goal is to become a full-time employee here. My hobbies are traveling to many places, to many lands to know the culture, people and scenery. I also love programming Websitie, because it helps me to practice my sophistication and aesthetics."],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script for avatar team =v same story
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            500:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$(function() {
    $('.home .service .').lazy({
      effect: "fadeIn",
      effectTime: 10000,
      threshold: 0
    });
});

$('.contact-form').submit((e)=>{
    // var text = document.querySelector('#fullname').value

    // var gmail = document.querySelector('#gmail').value

    // var subject = document.querySelector('#subject').value

    // let isValidate = true;

    // var err = ''

    // if (!reg.test(fullname).val() == ''){
       
    //     err += 'Please ipunt name correct!'
    //     document.querySelector('.message1').innerHTML = err
    //     isValidate = false

    // }

    // err = ''
    // if ($('#gmail').val() == '') {
    //     err += 'please input sameple text + @ + domain'
    //     document.querySelector('.message2').innerHTML = err
    //     isValidate = false
    // }

    // err = ''
    // if ($('subject').val() == '') {
    //     err += 'vui lòng nhập số từ 1 < n < 10'
    //     document.querySelector('.message3').innerHTML = err
    //     isValidate = false
    // }
    
    // if (!sValidate) {
    //     return true
    // }
    e.preventDefault("send"); //preventing from submitting form
    // alert("Send Feedback Success!");
});


$('.send-msg').click(()=>{
    $fullname = $('.fullname').val();
    $email = $('.email-input').val();
    $subject = $('.subject').val();
    $message = $('.message').val();
    $('.send-msg').text("Sending...");
    $('.contact-form').addClass("disable");

    $.ajax({
        url: "message.php",
        type: "POST",
        data: "email="+$email+"&subject="+$subject+"&message="+$message,
        success: function(data){
            $errorBox = $('.error-box');
            $('.send-msg').text("Send message");
            $('.contact-form').removeClass("disable");
            if(data == "success"){
                $fullname = $('.fullname').val("");
                $email = $('.email-input').val("");
                $subject = $('.subject').val("");
                $message = $('.message').val("");
                $errorBox.html("Your message has been sent!");
                $errorBox.addClass("success");
                setTimeout(()=>{
                    $errorBox.html("");
                }, 5000);
            }else{
                $errorBox.html("<span>* </span>" + data);
            }
        }
    });
});
      
