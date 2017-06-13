// common scripts
(function () {
    "use strict";
    //一级菜单点击事件
    jQuery('.menu-list > a').click(function () {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        if (!jQuery('body').hasClass('sidebar-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(300, function () {
                    parent.removeClass('nav-active');
                    // jQuery('.body-content').css({height: ''});
                    // jQuery('.b-main').css({height: ''});
                    // adjustMainContentHeight();
                });
            } else {
                visibleSubMenuClose();
                parent.addClass('nav-active');
                sub.slideDown(300, function () {
                    // adjustMainContentHeight()
                });
            }
        }
        return false;
    });

    function visibleSubMenuClose() {
        jQuery('.menu-list').each(function () {
            var t = jQuery(this);
            if (t.hasClass('nav-active')) {
                t.find('> ul').slideUp(300, function () {
                    t.removeClass('nav-active');
                });
            }
        });
    }
    // function adjustMainContentHeight() {
    //
    //     // Adjust main content height
    //     var docHeight = jQuery(document).height();
    //     // if(docHeight > jQuery('.body-content').height())
    //         // jQuery('.body-content').height(docHeight);
    //     if(docHeight > jQuery('.b-main').height())
    //         jQuery('.b-mian').height(docHeight);
    // }




    // Toggle Menu
    //改变菜单的样式
    // jQuery('.toggle-btn').click(function () {
    //     var body = jQuery('body');
    //     if (body.hasClass('side-open')) {
    //         body.removeClass('side-open');
    //     }
    //     else {
    //         body.addClass('side-open');
    //     }
    // })

    $("[data-toggle='tooltip']").tooltip();
    //下拉
    $(".select-show").click(function (event) {
        var selectBox = $(this).parent(".index-select");
        if (selectBox.hasClass("active")) {
            selectBox.removeClass("active");
        } else {
            $(".index-select").removeClass("active");
            selectBox.addClass("active");
            $(document).one("click", function () {
                selectBox.removeClass("active");
            });
            event.stopPropagation();
        }
    });
    $(".index-select").click(function (event) {
        event.stopPropagation();
    });
})(jQuery);


function Hsearch() {
    console.log("头部搜索");
    location.href = "customer.html";
    return false;
}