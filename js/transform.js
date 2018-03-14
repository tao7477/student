var transform = function () {
    var goTop = function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 200 ? $(".goTop").animate({
                bottom : "20px"
            }, 1000) : $(".goTop").css({
                bottom : "-40px"
            })
        });
        $(".goTop").click(function () {
            $("body, html").animate({
                scrollTop : 0
            }, 500);
        })
    }
    return {
        init : function () {
            goTop();
        }
    }
}();
$(document).ready(function () {
    transform.init();
})