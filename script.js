$(document).ready(() => {
    $(window).scroll(() => {
        // alert('wjhvcjdvhjdcvj')
        var scrollCounter = $(this).scrollTop()// this-i mej ena inchy scroll enq anum(window)
        if (scrollCounter > 5) {
            $("header").css("height", '70px')
            $("header").css("background-color", "rgb(34, 34, 34)")
        } else {
            $("header").css("height", '100px')
            $("header").css("background-color", "transparent")

        }
    })
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href')); 
        if (target.length) {
            event.preventDefault();
            var count = target.offset().top - 150// Prevent default anchor click behavior
            $('html, body').animate({
                // scrollTop: target.offset().top  // Scroll to the target element
                scrollTop: count
            }, 1000);  // Scroll duration (1 second)
        }
    });

    var protfolioBaza = [
        {
            img: "https://www.sandawatch.net/wp-content/uploads/2022/10/analog-watch.jpg",
            title: "THREADS",
            halfTitle: "illuatration",
            lorem: "jhdfsgh hbbv hhsb  b hjhvv y sgy gygsyugfyg sysyab huh fun uadugc uudinfec ixv usygdyugfuygs jahhajshjhduhe nfucx chu fgg cagenfbh9sjdjjdj8eeus99syddhhcudh hbdyfysgdzhfg"
        },
        {
            img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
            title: "EXPLORE",
            halfTitle: "graphic design",
            lorem: "jhdfsgh hbbv hhsb  b hjhvv y sgy gygsyugfyg sysyab huh fun uadugc uudinfec ixv usygdyugfuygs jahhajshjhduhe nfucx chu fgg cagenfbh9sjdjjdj8eeus99syddhhcudh hbdyfysgdzhfg"
        },
        {
            img: "https://static.euronews.com/articles/stories/08/34/38/20/1200x675_cmsv2_f11ea645-3171-5463-97c2-2dc13e93c2d8-8343820.jpg",
            title: "FINISH",
            halfTitle: "identity",
            lorem: "jhdfsgh hbbv hhsb  b hjhvv y sgy gygsyugfyg sysyab huh fun uadugc uudinfec ixv usygdyugfuygs jahhajshjhduhe nfucx chu fgg cagenfbh9sjdjjdj8eeus99syddhhcudh hbdyfysgdzhfg"
        },
        {
            img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
            title: "LINES",
            halfTitle: "branding",
            lorem: "jhdfsgh hbbv hhsb  b hjhvv y sgy gygsyugfyg sysyab huh fun uadugc uudinfec ixv usygdyugfuygs jahhajshjhduhe nfucx chu fgg cagenfbh9sjdjjdj8eeus99syddhhcudh hbdyfysgdzhfg"
        },
        {
            img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
            title: "Southwest",
            halfTitle: "web decign",
            lorem: "jhdfsgh hbbv hhsb  b hjhvv y sgy gygsyugfyg sysyab huh fun uadugc uudinfec ixv usygdyugfuygs jahhajshjhduhe nfucx chu fgg cagenfbh9sjdjjdj8eeus99syddhhcudh hbdyfysgdzhfg"
        },
        {
            img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
            title: "WINDOW",
            halfTitle: "photography",
            lorem: "jhdfsgh hbbv hhsb  b hjhvv y sgy gygsyugfyg sysyab huh fun uadugc uudinfec ixv usygdyugfuygs jahhajshjhduhe nfucx chu fgg cagenfbh9sjdjjdj8eeus99syddhhcudh hbdyfysgdzhfg"
        }
    ]
    // protfolioBaza.map((index) => {
    //     // console.log(index)
    //     var portfolioChild = $('<div>');
    //     portfolioChild.addClass("portfolioChild");
    //     var imgPart = $('<div>');
    //     imgPart.addClass('imgPart');
    //     var realImg = $(`<img src =${index.img}>`);
    //     imgPart.append(realImg);
    //     var infoPart = $("<div>");
    //     infoPart.addClass("infoPart");
    //     var infoP = $("<p>");
    //     infoP.text(index.title);
    //     var halfTitle = $('<span>');
    //     halfTitle.text(index.halfTitle)
    //     infoPart.append(infoP, halfTitle)
    //     portfolioChild.append(imgPart, infoPart)
    //     $(".portfolioParent").append(portfolioChild)
    //     portfolioChild.on("click", () => {
    //         localStorage.setItem('product', JSON.stringify(index))
    //         var openedDiv = $(".openedDiv");
    //         openedDiv.css('display', "flex");
    //         $('.cancleBtn').on('click', function () {
    //             openedDiv.hide();
    //             openedDiv.html(''); // Очистить перед обновлением
    //             // getProduct();
    //             localStorage.removeItem('product')
    //         })

    //         function getProduct() {
    //             var gotProduct = JSON.parse(localStorage.getItem('product'))
    //             console.log(gotProduct);
    //             var prodName = $('<h1>');
    //             prodName.text(gotProduct.title);
    //             var prodHalfName = $("<span>");
    //             prodHalfName.text(gotProduct.halfTitle)
    //             $(".productNameDiv").append(prodName, prodHalfName);
    //             var prodImage = $(`<img src=${gotProduct.img}>`);
    //             prodImage.src = gotProduct.img;
    //             $('.productImage').append(prodImage)
    //             var secondInfo = $("<span>");
    //             secondInfo.text(gotProduct.secondInfo)
    //             $(".secondInfo").append(secondInfo)
    //         }
    //         getProduct()
    //         $(".secondBtnClose").on("click", () => {
    //             openedDiv.html('')
    //             openedDiv.hide();
    //         })
    //     })
    // })

    // GPT traberak
    protfolioBaza.map((index) => { // index-i mej 1hatik poqr object-na 
        var portfolioChild = $('<div>');
        portfolioChild.addClass("portfolioChild");

        var imgPart = $('<div>');
        imgPart.addClass('imgPart');

        var realImg = $(`<img src="${index.img}">`);  // Исправлено
        imgPart.append(realImg);

        var infoPart = $("<div>");
        infoPart.addClass("infoPart");

        var infoP = $("<p>");
        infoP.text(index.title);

        var halfTitle = $('<span>');
        halfTitle.text(index.halfTitle);

        infoPart.append(infoP, halfTitle);
        portfolioChild.append(imgPart, infoPart);

        $(".portfolioParent").append(portfolioChild);

        portfolioChild.on("click", () => {
            localStorage.setItem('product', JSON.stringify(index));
            var openedDiv = $(".openedDiv");
            openedDiv.css('display', "flex");

            function getProduct() {
                var gotProduct = JSON.parse(localStorage.getItem('product'));
                console.log(gotProduct);

                var prodName = $('<h1>');
                prodName.text(gotProduct.title);

                var prodHalfName = $("<span>");
                prodHalfName.text(gotProduct.halfTitle);

                $(".productNameDiv").append(prodName, prodHalfName);

                var prodImage = $(`<img src=${gotProduct.img}>`);  // Исправлено
                $('.productImage').append(prodImage);

                var secondInfo = $("<span>");
                secondInfo.text(gotProduct.secondInfo);  // Исправлено
                $(".secondInfo").append(secondInfo);
                // openedDiv.append(prodName,prodHalfName,prodImage,secondInfo);
                $('.cancleBtn').on('click', function () {
                    openedDiv.find(".productNameDiv").empty();  // Очищаем блок с названием
                    openedDiv.find(".productImage").empty();    // Очищаем блок с изображением
                    openedDiv.find(".secondInfo").empty();      // Очищаем блок с дополнительной информацией
                    openedDiv.hide();
                });

                $(".secondBtnClose").on("click", () => {
                    openedDiv.find(".productNameDiv").empty();  // Очищаем блок с названием
                    openedDiv.find(".productImage").empty();    // Очищаем блок с изображением
                    openedDiv.find(".secondInfo").empty();      // Очищаем блок с дополнительной информацией
                    openedDiv.hide();
                });
            }

            getProduct(); 
        });
    });
    if ($(window).width() >= 340 && $(window).width() <= 768) {
        $(".listBtn").css("display", "block");
        $(".listBtn").on("click", () => {
            $(".listPart").toggleClass("openList");
        })
    }
})
$(".bannerBtn").click(function () {
    $("#h2").toggle(1000);
    $("#h1").toggle(1000)
})