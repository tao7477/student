var main = function () {
    var nocontextmenu = function () {
        $(document).ready(function () {
            $('body').contextmenu(function () {
                return false;
            })
        })
    };
    var goTop = function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 200 ? $(".toTop").css({
                bottom : "20px"
            }) : $(".toTop").css({
                bottom : "-40px"
            })
        });
        $(".toTop").click(function () {
            $("body, html").animate({
                scrollTop : 0
            }, 500);
        })
        $(window).scroll(function() {
            $('.navbar-collapse.in').collapse('hide');   //折叠展开后下滑会收起
        });
    };
    return {
        init : function () {
            nocontextmenu();
            goTop();
        }
    }
}();
$(document).ready(function () {
    main.init();
})