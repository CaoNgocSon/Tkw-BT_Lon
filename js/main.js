$(window).on('load',function(event) {
    $('.loadingBx').delay(500).fadeOut(300);
});
//Add class anmate + wow js
$(document).ready(function () {
    $(".category").addClass("wow animate__zoomIn animate__delay-0.9s")
    $(".product-item").addClass("wow animate__flipInY")
    $(".about-us__content").addClass("animate__delay-2s")
    $(".blog-item").addClass("wow animate__fadeInUp animate__delay-0.6s")
    $(".blog-right-sidebar").addClass("wow animate__zoomIn animate__delay-0.6s")
    $(".gl-image:odd").addClass("wow animate__flipInY animate__delay-0.8s")
    $(".gl-image:even").addClass("wow animate__flipInX animate__delay-0.8s")
    $(".contact").addClass("wow animate__zoomIn animate__delay-0.8s")
    wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});

$(document).ready(function() {

    // Go-To-Top
    $('#gototop').hide(); // ẩn nút go-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
            $('#gototop').fadeIn(300); //Xuất hiện nút
        } 
        else {
            $('#gototop').fadeOut(300); //Ngược lại thì ẩn nút
        }
    });
    $('#gototop').click(function() {
        $('html, body').animate({
             scrollTop: 0 }
            , 1000); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    });


    // Slider
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true, 
        responsive: [
        {
            breakpoint: 1025, // Độ rộng thiết bị
            settings: {
            slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            arrows: false, // Ẩn nút kéo
            infinite: false, // Kéo tới cuối không kéo dc nữa
            },
        },
        ],
        autoplay: true,
        autoplaySpeed: 1000,
    });
});

//   Padding header when scroll
$(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100)
         $(".header").addClass("header-padding");
      else
         $(".header").removeClass("header-padding");
    });
  });

  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100)
         $(".header__sort-bar").addClass("header__sort-bar-top");
      else
         $(".header__sort-bar").removeClass("header__sort-bar-top");
    });
  });


    //Modal-provice
    const chooseProvince = document.querySelector('.js-province')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose = document.querySelector('.js-modal-close')

    // Hàm hiến thị modal province (thêm class open vào modal)
    function showProvince() {
        modal.classList.add('open')
    }

    // Hàm ấn modal province (gỡ bỏ class open của modal)
    function hideProvince() {
        modal.classList.remove('open')
    }

    //Nghe hành vi click
    chooseProvince.addEventListener('click', showProvince)
            
    // Nghe hành vi click vào button close
    modalClose.addEventListener('click', hideProvince)
            
    modal.addEventListener('click', hideProvince)
    modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
    })



     // Modal-Form-Đăng-Nhập
    const from_pc = document.querySelector('.js-from')
    const from_tablet_mobile = document.querySelector('.js-from-tablet-mobile') 
    const modals = document.querySelector('.js-modals')
    const modalsContainer = document.querySelector('.js-modals-container')
   

    // Hàm hiến thị modal (thêm class open vào modal)
    function showFrom() {
        modals.classList.add('open')
    }

    // Hàm ấn modal (gỡ bỏ class open của modal)
    function hideFrom() {
        modals.classList.remove('open')
    }

    //Nghe hành vi click
    from_pc.addEventListener('click', showFrom)
    from_tablet_mobile.addEventListener('click', showFrom)  

    modals.addEventListener('click', hideFrom)

    modalsContainer.addEventListener('click', function(event) {
    event.stopPropagation()
    })


    //See more product
    var moreBtn = document.querySelector(".js-see-more")
    var moreSeeProduct = document.querySelectorAll(".product-more")
    var count = 0;
    moreBtn.addEventListener("click",function showMore() {
        for(let i = 0; i < 4; i++)
        moreSeeProduct[count++].style.display = "block";
        if(count == moreSeeProduct.length)
        moreBtn.style.display = "none";
    });


// Search
function searching() {
     var check = document.getElementById("search");
     if(check.value != "") {
        swal({
            title: "Xin lỗi !",
            text: "Tính năng chưa được phát triển, vui lòng thử lại sau !",
            icon: "info",
        });
    }
     else
        swal("Xảy ra lỗi !", "Bạn chưa nhập thông tin", "error");
}




