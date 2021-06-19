jQuery(document).ready(function($){
    $('.slider-4').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        touchDrag:false,
        mouseDrag:false,
        navText: [$('.section-environment .am-prev'),$('.section-environment .am-next')],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
         onInitialized  : counter, //When the plugin has initialized.
         onTranslated : counter ,
         // onDragged: counter
     })

    function counter(event) {
    var element   = event.target;         // DOM element, in this example .owl-carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index -1;
    if(item == 0){
        item = 4;
    }    // Position of the current item

  // it loop is true then reset counter from 1
  if(item > items) {
    item = item - items;
}
$('.num #counter').html(item+" | "+items)
}


var toggled2 = false;
$('#header').on("click",".navbar-toggler",function(){
    toggled2 = !toggled2;
    $(this).find(".navbar-toggler-icon").css({"background":
        toggled2 ? "url('uploads/Group 3764.png') no-repeat" : "url('uploads/Group 3760.png') no-repeat right"
    });
})


});
jQuery(document).ready(function($){

    $('.slider-1').owlCarousel({
        loop:false,
        margin:10,
        // nav:true,
        // navText: [$('.section-slider .am-prev'),$('.section-slider .am-next')],
        touchDrag:false,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.slider-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [$('.section-talents .am-prev'),$('.section-talents .am-next')],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
     if($(window).width() > 768){
         var envi_height = 0;
    $('.section-environment .box-info').each(function() {
        if(envi_height < $(this).outerHeight()){
            envi_height = $(this).outerHeight();
        };
    });
    $('.section-environment .box-info').outerHeight(envi_height+25);
     }
   

    var talents_height = 0;
    $('.section-talents .box-info').each(function() {
        if(talents_height < $(this).outerHeight()){
            talents_height = $(this).outerHeight();
        };
    });
    $('.section-talents .box-info').outerHeight(talents_height);

    var reason_height = 0;
    $('.section-reason .box-top').each(function() {
        if(reason_height < $(this).outerHeight()){
            reason_height = $(this).outerHeight();
        };
    });
    $('.section-reason .box-top').each(function() {
        $(this).outerHeight(reason_height);
    })


});

jQuery('.section-parents').ready(function($){


    $('.slider-3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [$('.section-parents .am-prev'),$('.section-parents .am-next')],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    var parents_height = 0;
    $('.section-parents .box-info').each(function() {
        if(parents_height < $(this).outerHeight()){
            parents_height = $(this).outerHeight();
        };
    });
    if($(window).width() < 450)
    {
        $('.section-parents .box-info').height(parents_height);
    }else{
       $('.section-parents .box-info').height(parents_height+25);
   }
})
jQuery(document).ready(function($){
    if($(window).width() < 450)
    {
        $(".slider-1 .item").find("img").attr("src","uploads/tiếng anh trẻ em tại ILA.jpg");
        $(".alo").on("click","#employee",function(){
            $(".alo .form-ila").toggle();
            $(".alo").addClass("bg-mob");
            $(this).toggle();
        })
        $(".alo").on("click","#close-form",function(){
            $(".alo .form-ila").toggle();
            $("#employee").toggle();
            $(".alo").removeClass("bg-mob");
        })
    } else{
        $(".alo").on("click","#close-form",function(){
            $(".alo .form-ila").toggle();
            $("#employee").toggle();
        })
        $(".alo").on("click","#employee",function(){
            $(".alo .form-ila").toggle();
            $(this).toggle();
        })
    }

    var toggled_1 = false;
    var toggled_2 = false;
    var toggled_3 = false;
    $('.box-content').on("click",".read-more-mob",function(){
        let data = $(this).data("index");
        let check = false;
        switch (data){
            case "one": toggled_1 = !toggled_1;
            check = toggled_1;
            break;
            case "two": toggled_2 = !toggled_2;
            check = toggled_2;
            break;
            case "three": toggled_3 = !toggled_3;
            check = toggled_3;
            break;
        }
        $(this).closest(".box-content").find(".box-hidden").toggle();
        $(this).find("img").attr("src",check ? "uploads/Group 3804.png" : "uploads/Group 3759.png");
        $(this).closest(".box-content").find(".description").toggleClass('change-color');
    })

    $(".read-more").on("click",function(e){
        e.preventDefault();
        console.log($(this).text())
        $(this).closest(".box").find(".replace-content").toggle();
    });

    $("span#close-replace").on("click",function(e){
     $(this).closest(".box").find(".replace-content").toggle();
 });
});

$(document).ready(function() {
  $("a.reg").click(function(e) {
    e.preventDefault();
    $("body,html").animate(
    {
        scrollTop: $(".hr1-form").offset().top-50
    },
      1500 //speed
      );
});


  $('a.reg').on( "mouseenter mouseleave", function( event ) {
    $( this ).toggleClass( "animate" );
});
});


jQuery(document).ready(function ($) {
    $("header").on("click","#ila-toggle li",function(){
        $("#ila-toggle li").removeClass("active");
        $(this).addClass("active");
        $('#ila-toggle').removeClass('show')
        $('.navbar-toggler').find(".navbar-toggler-icon").css({"background":"url('uploads/Group 3760.png') no-repeat right"});
    })
})

jQuery(document).ready(function ($) {
    $("header").on("click","a.nav-link,a.dropdown-item",function(e){
        e.preventDefault();
        var link = $(this).attr('href');
        console.log(link)
        $([document.documentElement, document.body]).animate({
            scrollTop: $(link).offset().top - 75
        }, 500);

    })
})

jQuery(document).ready(function ($) {
    $('.form-ila form').on('submit',function(e){
        e.preventDefault();
        var phone_number = $('#sdt').val();
        var numbers = phone_number.split("");
        var newarray = numbers.map(function(num,index) {
            if(index === 0 || index === 1) {
                return num;
            }
            return 'x';
        });


        var html = '<img src="uploads/image 12.png">';
        html += '<h4 class="title otp-title">XÁC THỰC SỐ ĐIỆN THOẠI DI ĐỘNG ĐỂ HOÀN TẤT QUÁ TRÌNH ĐĂNG KÝ</h4>';
        html += '<p class="text">Mã OTP đã được gửi đến số điện thoại: '+newarray.join("")+'</p>';
        html += '<p class="text">Nhập mã OTP để hoàn tất quá trình đăng ký tư vấn.</p>';
        html += '<form id="otp">';
        html += '<div class="form-group search__bar__description form__control">';
        html += '<input type="number" class="form-control" placeholder=" ">';
        html += '<p class="short-label">Nhập mã OTP tại đây<span class="red">*</span></p>';
        html += '</div>';
        html += '<div class="button-submit">';
        html += '<button class="reg otp-btn">Xác nhận</button>';
        html += '</div>';
        html += '</form>';

        $(this).parent('.form-ila').html(html);

    });
});