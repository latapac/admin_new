function setUpSliders(q) {
    var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
    });
}

/*

<script>
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
</script>

var slideWidth;
    $(".slider").each(function() {
        var slideCount = $(this).find('ul li').length;
        slideWidth = $(this).find('ul li').width();
        var slideHeight = $(this).find('ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        console.log(slideCount);
        console.log(slideWidth);
        console.log(slideHeight);
        console.log(sliderUlWidth);
        /*$(this).css({
            width: slideWidth,
            height: slideHeight
        });
        $(this).find('ul').css({
            width: sliderUlWidth,
            marginLeft: -slideWidth
        });
        $(this).find('ul li:last-child').prependTo($(this).find('ul')); ./
    });

    function moveLeft(parentElement) {
        $(parentElement).find('ul').animate({
            left: +slideWidth
        }, 300, function() {
            $(parentElement).find('ul li:last-child').prependTo($(parentElement).find('ul'));
            $(parentElement).find('ul').css('left', '');
        });
    };

    function moveRight(parentElement) {
        $(parentElement).find('ul').animate({
            left: -slideWidth
        }, 300, function() {
            $(parentElement).find('ul li:first-child').appendTo($(parentElement).find('ul'));
            $(parentElement).find('ul').css('left', '');
        });
    };

    $('a.control_prev').click(function() {
        moveLeft($(this).parent());
    });

    $('a.control_next').click(function() {
        moveRight($(this).parent());
    });*/