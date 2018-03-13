var main = function () {
    var nocontextmenu = function () {
        $(document).ready(function () {
            $('body').contextmenu(function () {
                return false;
            })
        })
    }
    return {
        init : function () {
            nocontextmenu();
        }
    }
}();
$(document).ready(function () {
    main.init();
})