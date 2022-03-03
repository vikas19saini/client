$(window).scroll(function () {
    var sticky = $('.header_area'),
        scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed');
    }
    else {
        sticky.removeClass('fixed');
    }

    if ($(window).width() < 750 && scroll >= 40) {
        //$("#navigation1").hide();
        //$("form.example.mob_view").addClass("p-3")
    } else {
        //$("#navigation1").show();
        //$("form.example.mob_view").removeClass("p-3")
    }
});

!(function (n, i, e, a) {
    ; (n.navigation = function (t, s) {
        var o = {
            responsive: !0,
            mobileBreakpoint: 1024,
            showDuration: 200,
            hideDuration: 200,
            showDelayDuration: 0,
            hideDelayDuration: 0,
            submenuTrigger: "hover",
            effect: "fadeIn",
            submenuIndicator: !0,
            submenuIndicatorTrigger: !1,
            hideSubWhenGoOut: !0,
            visibleSubmenusOnMobile: !1,
            fixed: !1,
            overlay: !0,
            overlayColor: "rgba(0, 0, 0, 0.5)",
            hidden: !1,
            hiddenOnMobile: !1,
            offCanvasSide: "left",
            offCanvasCloseButton: !0,
            animationOnShow: "",
            animationOnHide: "",
            onInit: function () { },
            onLandscape: function () { },
            onPortrait: function () { },
            onShowOffCanvas: function () { },
            onHideOffCanvas: function () { }
        },
            r = this,
            u = Number.MAX_VALUE,
            d = 1,
            l = "click.nav touchstart.nav",
            f = "mouseenter focusin",
            c = "mouseleave focusout"
        r.settings = {}
        var t = (n(t), t)
        n(t).find(".nav-search").length > 0 &&
            n(t)
                .find(".nav-search")
                .find("form1")
                .prepend(
                    "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
                ),
            (r.init = function () {
                ; (r.settings = n.extend({}, o, s)),
                    r.settings.offCanvasCloseButton &&
                    n(t)
                        .find(".nav-menus-wrapper")
                        .prepend(
                            "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
                        ),
                    "right" == r.settings.offCanvasSide &&
                    n(t)
                        .find(".nav-menus-wrapper")
                        .addClass("nav-menus-wrapper-right"),
                    r.settings.hidden &&
                    (n(t).addClass("navigation-hidden"),
                        (r.settings.mobileBreakpoint = 99999)),
                    v(),
                    r.settings.fixed && n(t).addClass("navigation-fixed"),
                    n(t)
                        .find(".nav-toggle")
                        .on("click touchstart", function (n) {
                            n.stopPropagation(),
                                n.preventDefault(),
                                r.showOffcanvas(),
                                s !== a && r.callback("onShowOffCanvas")
                        }),
                    n(t)
                        .find(".nav-menus-wrapper-close-button")
                        .on("click touchstart", function () {
                            r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
                        }),
                    n(t)
                        .find(".nav-search-button, .nav-search-close-button")
                        .on("click touchstart keydown", function (i) {
                            i.stopPropagation(), i.preventDefault()
                            var e = i.keyCode || i.which
                            "click" === i.type ||
                                "touchstart" === i.type ||
                                ("keydown" === i.type && 13 == e)
                                ? r.toggleSearch()
                                : 9 == e && n(i.target).blur()
                        }),
                    n(t).find(".megamenu-tabs").length > 0 && y(),
                    n(i).resize(function () {
                        r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
                    }),
                    r.initNavigationMode(C()),
                    r.settings.hiddenOnMobile && m(),
                    s !== a && r.callback("onInit")
            })
        var h = function () {
            /* n(t)
                .find(".nav-submenu")
                .hide(0),
                n(t)
                    .find("li")
                    .removeClass("focus") */
        },
            v = function () {
                n(t)
                    .find("li")
                    .each(function () {
                        n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                            (n(this)
                                .children(".nav-dropdown,.megamenu-panel")
                                .addClass("nav-submenu"),
                                r.settings.submenuIndicator &&
                                n(this)
                                    .children("a")
                                    .append(""))
                    })

            },
            m = function () {
                n(t).hasClass("navigation-portrait")
                    ? n(t).addClass("navigation-hidden")
                    : n(t).removeClass("navigation-hidden")
            }
            ; (r.showSubmenu = function (i, e) {
                C() > r.settings.mobileBreakpoint &&
                    n(t)
                        .find(".nav-search")
                        .find("form1")
                        .fadeOut(),
                    "fade" == e
                        ? n(i)
                            .children(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.showDelayDuration)
                            .fadeIn(r.settings.showDuration)
                            .removeClass(r.settings.animationOnHide)
                            .addClass(r.settings.animationOnShow)
                        : n(i)
                            .children(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.showDelayDuration)
                            .slideDown(r.settings.showDuration)
                            .removeClass(r.settings.animationOnHide)
                            .addClass(r.settings.animationOnShow),
                    n(i).addClass("focus")
            }),
                (r.hideSubmenu = function (i, e) {
                    "fade" == e
                        ? n(i)
                            .find(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.hideDelayDuration)
                            .fadeOut(r.settings.hideDuration)
                            .removeClass(r.settings.animationOnShow)
                            .addClass(r.settings.animationOnHide)
                        : n(i)
                            .find(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.hideDelayDuration)
                            .slideUp(r.settings.hideDuration)
                            .removeClass(r.settings.animationOnShow)
                            .addClass(r.settings.animationOnHide),
                        n(i)
                            .removeClass("focus")
                            .find(".focus")
                            .removeClass("focus")
                })
        var p = function () {
            n("body").addClass("no-scroll"),
                r.settings.overlay &&
                (n(t).append("<div class='nav-overlay-panel'></div>"),
                    n(t)
                        .find(".nav-overlay-panel")
                        .css("background-color", r.settings.overlayColor)
                        .fadeIn(300)
                        .on("click touchstart", function (n) {
                            r.hideOffcanvas()
                        }))
        },
            g = function () {
                n("body").removeClass("no-scroll"),
                    r.settings.overlay &&
                    n(t)
                        .find(".nav-overlay-panel")
                        .fadeOut(400, function () {
                            n(this).remove()
                        })
            }
            ; (r.showOffcanvas = function () {
                p(),
                    "left" == r.settings.offCanvasSide
                        ? n(t)
                            .find(".nav-menus-wrapper")
                            .css("transition-property", "left")
                            .addClass("nav-menus-wrapper-open")
                        : n(t)
                            .find(".nav-menus-wrapper")
                            .css("transition-property", "right")
                            .addClass("nav-menus-wrapper-open")
            }),
                (r.hideOffcanvas = function () {
                    n(t)
                        .find(".nav-menus-wrapper")
                        .removeClass("nav-menus-wrapper-open")
                        .on(
                            "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
                            function () {
                                n(t)
                                    .find(".nav-menus-wrapper")
                                    .css("transition-property", "none")
                                    .off()
                            }
                        ),
                        g()
                }),
                (r.toggleOffcanvas = function () {
                    C() <= r.settings.mobileBreakpoint &&
                        (n(t)
                            .find(".nav-menus-wrapper")
                            .hasClass("nav-menus-wrapper-open")
                            ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
                            : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
                }),
                (r.toggleSearch = function () {
                    "none" ==
                        n(t)
                            .find(".nav-search")
                            .find("form1")
                            .css("display")
                        ? (n(t)
                            .find(".nav-search")
                            .find("form1")
                            .fadeIn(200),
                            n(t)
                                .find(".nav-search")
                                .find("input")
                                .focus())
                        : (n(t)
                            .find(".nav-search")
                            .find("form1")
                            .fadeOut(200),
                            n(t)
                                .find(".nav-search")
                                .find("input")
                                .blur())
                }),
                (r.initNavigationMode = function (i) {
                    r.settings.responsive
                        ? (i <= r.settings.mobileBreakpoint &&
                            u > r.settings.mobileBreakpoint &&
                            (n(t)
                                .addClass("navigation-portrait")
                                .removeClass("navigation-landscape"),
                                S(),
                                s !== a && r.callback("onPortrait")),
                            i > r.settings.mobileBreakpoint &&
                            d <= r.settings.mobileBreakpoint &&
                            (n(t)
                                .addClass("navigation-landscape")
                                .removeClass("navigation-portrait"),
                                k(),
                                g(),
                                r.hideOffcanvas(),
                                s !== a && r.callback("onLandscape")),
                            (u = i),
                            (d = i))
                        : (n(t).addClass("navigation-landscape"),
                            k(),
                            s !== a && r.callback("onLandscape"))
                })

        C = function () {
            return (
                i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
            )
        },
            w = function () {
                n(t)
                    .find(".nav-menu")
                    .find("li, a")
                    .off(l)
                    .off(f)
                    .off(c)
            },
            O = function () {
                if (C() > r.settings.mobileBreakpoint) {
                    var i = n(t).outerWidth(!0)
                    n(t)
                        .find(".nav-menu")
                        .children("li")
                        .children(".nav-submenu")
                        .each(function () {
                            n(this)
                                .parent()
                                .position().left +
                                n(this).outerWidth() >
                                i
                                ? n(this).css("right", 0)
                                : n(this).css("right", "auto")
                        })
                }
            },
            y = function () {
                function i(i) {
                    var e = n(i)
                        .children(".megamenu-tabs-nav")
                        .children("li"),
                        a = n(i).children(".megamenu-tabs-pane")
                    n(e).on("click.tabs touchstart.tabs", function (i) {
                        i.stopPropagation(),
                            i.preventDefault(),
                            n(e).removeClass("active"),
                            n(this).addClass("active"),
                            n(a)
                                .hide(0)
                                .removeClass("active"),
                            n(a[n(this).index()])
                                .show(0)
                                .addClass("active")
                    })
                }
                if (n(t).find(".megamenu-tabs").length > 0)
                    for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
                        i(e[a])
            },
            k = function () {
                w(),
                    h(),
                    navigator.userAgent.match(/Mobi/i) ||
                        navigator.maxTouchPoints > 0 ||
                        "click" == r.settings.submenuTrigger
                        ? n(t)
                            .find(".nav-menu, .nav-dropdown")
                            .children("li")
                            .children("a")
                            .on(l, function (e) {
                                if (
                                    (r.hideSubmenu(
                                        n(this)
                                            .parent("li")
                                            .siblings("li"),
                                        r.settings.effect
                                    ),
                                        n(this)
                                            .closest(".nav-menu")
                                            .siblings(".nav-menu")
                                            .find(".nav-submenu")
                                            .fadeOut(r.settings.hideDuration),
                                        n(this).siblings(".nav-submenu").length > 0)
                                ) {
                                    if (
                                        (e.stopPropagation(),
                                            e.preventDefault(),
                                            "none" ==
                                            n(this)
                                                .siblings(".nav-submenu")
                                                .css("display"))
                                    )
                                        return (
                                            r.showSubmenu(
                                                n(this).parent("li"),
                                                r.settings.effect
                                            ),
                                            O(),
                                            !1
                                        )
                                    if (
                                        (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                                            "_blank" === n(this).attr("target") ||
                                            "blank" === n(this).attr("target"))
                                    )
                                        i.open(n(this).attr("href"))
                                    else {
                                        if (
                                            "#" === n(this).attr("href") ||
                                            "" === n(this).attr("href") ||
                                            "javascript:void(0)" === n(this).attr("href")
                                        )
                                            return !1
                                        i.location.href = n(this).attr("href")
                                    }
                                }
                            })
                        : n(t)
                            .find(".nav-menu")
                            .find("li")
                            .on(f, function () {
                                r.showSubmenu(this, r.settings.effect), O()
                            })
                            .on(c, function () {
                                r.hideSubmenu(this, r.settings.effect)
                            })
                //r.settings.hideSubWhenGoOut && b()
            },
            S = function () {
                w(),
                    h(),
                    r.settings.visibleSubmenusOnMobile
                        ? n(t)
                            .find(".nav-submenu")
                            .show(0)
                        : (n(t)
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                            r.settings.submenuIndicator &&
                                r.settings.submenuIndicatorTrigger
                                ? n(t)
                                    .find(".submenu-indicator")
                                    .on(l, function (i) {
                                        return (
                                            i.stopPropagation(),
                                            i.preventDefault(),
                                            r.hideSubmenu(
                                                n(this)
                                                    .parent("a")
                                                    .parent("li")
                                                    .siblings("li"),
                                                "slide"
                                            ),
                                            r.hideSubmenu(
                                                n(this)
                                                    .closest(".nav-menu")
                                                    .siblings(".nav-menu")
                                                    .children("li"),
                                                "slide"
                                            ),
                                            "none" ==
                                                n(this)
                                                    .parent("a")
                                                    .siblings(".nav-submenu")
                                                    .css("display")
                                                ? (n(this).addClass("submenu-indicator-up"),
                                                    n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .siblings("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                    n(this)
                                                        .closest(".nav-menu")
                                                        .siblings(".nav-menu")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                    r.showSubmenu(
                                                        n(this)
                                                            .parent("a")
                                                            .parent("li"),
                                                        "slide"
                                                    ),
                                                    !1)
                                                : (n(this)
                                                    .parent("a")
                                                    .parent("li")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                    void r.hideSubmenu(
                                                        n(this)
                                                            .parent("a")
                                                            .parent("li"),
                                                        "slide"
                                                    ))
                                        )
                                    })
                                : n(t)
                                    .find(".nav-menu, .nav-dropdown")
                                    .children("li")
                                    .children("a")
                                    .on(l, function (e) {
                                        if (
                                            (e.stopPropagation(),
                                                e.preventDefault(),
                                                r.hideSubmenu(
                                                    n(this)
                                                        .parent("li")
                                                        .siblings("li"),
                                                    r.settings.effect
                                                ),
                                                r.hideSubmenu(
                                                    n(this)
                                                        .closest(".nav-menu")
                                                        .siblings(".nav-menu")
                                                        .children("li"),
                                                    "slide"
                                                ),
                                                "none" ==
                                                n(this)
                                                    .siblings(".nav-submenu")
                                                    .css("display"))
                                        )
                                            return (
                                                n(this)
                                                    .children(".submenu-indicator")
                                                    .addClass("submenu-indicator-up"),
                                                n(this)
                                                    .parent("li")
                                                    .siblings("li")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                n(this)
                                                    .closest(".nav-menu")
                                                    .siblings(".nav-menu")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                r.showSubmenu(n(this).parent("li"), "slide"),
                                                !1
                                            )
                                        if (
                                            (n(this)
                                                .parent("li")
                                                .find(".submenu-indicator")
                                                .removeClass("submenu-indicator-up"),
                                                r.hideSubmenu(n(this).parent("li"), "slide"),
                                                "_blank" === n(this).attr("target") ||
                                                "blank" === n(this).attr("target"))
                                        )
                                            i.open(n(this).attr("href"))
                                        else {
                                            if (
                                                "#" === n(this).attr("href") ||
                                                "" === n(this).attr("href") ||
                                                "javascript:void(0)" === n(this).attr("href")
                                            )
                                                return !1
                                            i.location.href = n(this).attr("href")
                                        }
                                    }))
            }
            ; (r.callback = function (n) {
                s[n] !== a && s[n].call(t)
            }),
                r.init()
    }),
        (n.fn.navigation = function (i) {
            return this.each(function () {
                if (a === n(this).data("navigation")) {
                    var e = new n.navigation(this, i)
                    n(this).data("navigation", e)
                }
            })
        })
})(jQuery, window, document);


$(document).ready(function () {

    var sync11 = $("#sync11");
    var sync22 = $("#sync22");

    sync11.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });

    sync22.owlCarousel({
        items: 15,
        itemsDesktop: [1199, 10],
        itemsDesktopSmall: [979, 10],
        itemsTablet: [768, 8],
        itemsMobile: [479, 4],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function (el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync22")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync22").data("owlCarousel") !== undefined) {
            center(current)
        }
    }

    $("#sync22").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync11.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync22visible = sync22.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync22visible) {
            if (num === sync22visible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > sync22visible[sync22visible.length - 1]) {
                sync22.trigger("owl.goTo", num - sync22visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync22.trigger("owl.goTo", num);
            }
        } else if (num === sync22visible[sync22visible.length - 1]) {
            sync22.trigger("owl.goTo", sync22visible[1])
        } else if (num === sync22visible[0]) {
            sync22.trigger("owl.goTo", num - 1)
        }

    }

});

function navigation() {
    var $window = $(window)

    if ($.fn.navigation) {
        $("#navigation1").navigation()
        $("#always-hidden-nav").navigation({
            hidden: true
        })
    }

    $window.on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove()
        })
    })

    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function () {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function () {
        return false;
    });
    searchBox.mouseup(function () {
        return false;
    });
    $(document).mouseup(function () {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });

    $('.nav-toggle').on('click', function (e) {
        e.preventDefault();
        $('.nav-menus-wrapper').addClass('header_z');
    });
    $('#closeButton').on('click', function (e) {
        e.preventDefault();
        $('.nav-menus-wrapper').removeClass('header_z');
    });

    $('.categoery_menu .show_sub').on('click', function (e) {
        e.preventDefault();
        $('#close_menu').show();
    });
    $('#closeButton').on('click', function (e) {
        e.preventDefault();
        $('#close_menu').hide();
    });

    if (window.matchMedia("(max-width: 1024px)").matches) {
        // The viewport is less than 768 pixels wide
        //alert("This is a mobile device.");
        /*  $('.ac-list > .expanded').on('click', function (e) {
             //e.preventDefault();
             $(".expanded").removeAttr("style");
             if ($(this).find('.sub-menu').is(':visible')) {
                 $(this).removeClass('megaopen');
                 $(this).removeAttr("style");
                 $(this).find('.sub-menu').slideUp();
             } else {
                 $('.ac-list > .expanded').removeClass('megaopen');
                 $(this).addClass('megaopen');
                 var newHeight = $(this).find('.sub-menu').height();
                 $(this).height(newHeight + 100);
                 $('.ac-list > .expanded').find('.sub-menu').slideUp();
                 //$(this).find('.sub-menu').slideToggle();
             }
         }); */
    } else {
        /* $('.ac-list > .expanded').on('click', function (e) {
            //e.preventDefault();
            $(".sub-menu").removeAttr("style");
            $('.expanded').removeAttr("style");
            if ($(this).find('.sub-menu').is(':visible')) {
                $(".sub-menu").before().removeAttr("style");
                $(this).removeClass('megaopen');
                $(this).removeAttr("style");
                $(this).find('.sub-menu').slideUp();
            } else {
                $('.ac-list > .expanded').removeClass('megaopen');
                $(this).find('.sub-menu').addClass('megaopen');
                var newHeight = $(this).find('.sub-menu').height();
                $(this).find('.sub-menu').height(newHeight);
                $(this).before().height(newHeight + 100);
                $('.ac-list > .expanded').find('.sub-menu').slideUp();
                //$(this).find('.sub-menu').slideToggle();
            }
        }); */
    }
}

$(document).ready(function () {

    var sync11 = $("#sync11");
    var sync22 = $("#sync22");

    sync11.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });

    sync22.owlCarousel({
        items: 15,
        itemsDesktop: [1199, 10],
        itemsDesktopSmall: [979, 10],
        itemsTablet: [768, 8],
        itemsMobile: [479, 4],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function (el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync22")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync22").data("owlCarousel") !== undefined) {
            center(current)
        }
    }

    $("#sync22").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync11.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync22visible = sync22.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync22visible) {
            if (num === sync22visible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > sync22visible[sync22visible.length - 1]) {
                sync22.trigger("owl.goTo", num - sync22visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync22.trigger("owl.goTo", num);
            }
        } else if (num === sync22visible[sync22visible.length - 1]) {
            sync22.trigger("owl.goTo", sync22visible[1])
        } else if (num === sync22visible[0]) {
            sync22.trigger("owl.goTo", num - 1)
        }

    }

});

function scrollDown() {
    $('html, body').animate({ scrollTop: $('.ok').offset().top }, 'slow');
}

$(document).ready(function () {
    $('.myslider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
    });
    $('#closeButton').on('click', function (e) {
        $('#close_menu').hide();
    });
});

function synCSlider() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 7; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [''],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            margin: 10,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            responsive: {
                0: {

                    items: 4,

                },

                667: {
                    items: 7,
                },

                1170: {

                    items: 7
                }
            }

        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

}

function productPageInit() {
    $('#product_slide').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            568: {
                items: 1,
                nav: false,
            },
            667: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });
}

function homePageInit() {

    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: false,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
            navText: []
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            navText: [],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });

    synCSlider();

    $('#luxury').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        nav: false,
        margin: 10,
        responsive: {
            0: {

                items: 1,

            },

            568: {
                items: 1,

            },

            667: {
                items: 1,
            },

            1170: {

                items: 1,
                margin: 0,
            }
        }
    });

    $('#collection_slide').owlCarousel({
        loop: false,
        autoplay: false,
        dots: false,
        nav: false,
        margin: 10,
        responsive: {
            0: {

                items: 1,
                nav: false,
            },

            568: {
                items: 1,
                nav: false,
            },

            667: {
                items: 1,
            },

            1170: {

                items: 1
            }
        }
    });

    $('#arrivals').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
        margin: 10,
        responsive: {
            0: {
                items: 1.1,
                nav: false,
            },
            568: {
                items: 1.1,
            },
            667: {
                items: 3.1,
            },
            1170: {
                items: 3.1
            }
        }
    });



    $('#best_sellers').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        margin: 40,
        navText: ["<img src='images/new_img/left.png'>", "<img src='images/new_img/right.png'>"],
        responsive: {
            0: {

                items: 1.2,
                margin: 20,

            },

            568: {
                items: 1.2,

            },

            667: {
                items: 2,
            },

            1170: {

                items: 2,

            }
        }
    });

    $('#fabric').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        margin: 20,
        navText: ["<img src='images/new_img/left.png'>", "<img src='images/new_img/right.png'>"],
        responsive: {
            0: {

                items: 1.4,

            },

            568: {
                items: 1.2,

            },

            667: {
                items: 2,
            },

            1170: {

                items: 3,

            }
        }
    });

    $('#best_sellers_1').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        nav: true,
        margin: 40,
        navText: ["<img src='images/new_img/left.png'>", "<img src='images/new_img/right.png'>"],
        responsive: {
            0: {

                items: 1.2,
                margin: 20,

            },

            568: {
                items: 1.2,

            },

            667: {
                items: 2,
            },

            1170: {

                items: 2,

            }
        }
    });

    $('#fabric_1, #fabric_2, #just').owlCarousel({
        loop: true,
        autoplay: false,
        nav: true,
        margin: 20,
        navText: ["<img src='images/new_img/left.png'>", "<img src='images/new_img/right.png'>"],
        responsive: {
            0: {

                items: 1.4,
                dots: true,

            },

            568: {
                items: 1.2,
                dots: true,

            },

            667: {
                items: 2.2,
                dots: true,
            },

            1170: {

                items: 3,
                dots: false,

            }
        }
    });

}


function subCategory() {
    $('#best_sellers').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        margin: 40,
        navText: ["<img src='/images/new_img/left.png'>", "<img src='/images/new_img/right.png'>"],
        responsive: {
            0: {

                items: 1.2,
                margin: 20,

            },

            568: {
                items: 1.2,

            },

            667: {
                items: 2,
            },

            1170: {

                items: 2,

            }
        }
    });
}

$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    setTimeout(() => {
        $(".collapse.show").each(function () {
            $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function () {
            $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    }, 5000);

    $(document).on('click', '#mobileMenu a', function () {
        $(".nav-menus-wrapper-close-button").trigger('click');
    });
});

$(document).on('click', '.showSubMenuDesktop', function (e) {
    e.preventDefault();
    $(".submenuDesktop").removeClass("active");
    $(".expanded.parentMenu").removeAttr("style");
    $(this).next(".submenuDesktop").addClass("active");
    $(this).parent("div").css("height", $(this).next(".submenuDesktop").height() + 100);
});

$(document).on('click', '.menuLinkDesktop', function () {
    $(".megamenu-panel").hide();
});

$(document).on('click', '.mobileMenuIcon', function () {
    $(".sideMenu").removeClass("nav-menus-wrapper-open");
    $(".sideMenu").css("transition-property", "none");
});

/* $(window).scroll(function () {
    var top_of_element = $("footer").offset().top;
    var bottom_of_element = $("footer").offset().top + $("footer").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if (document.querySelector(".mob_view_filter.filter_cs") && $(window).width() <= 750) {
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            $(".mob_view_filter.filter_cs").css("display", "none");
        } else {
            $(".mob_view_filter.filter_cs").css("display", "block");
        }
    }
}); */

/* $(document).on('click', "#showCartMobile", function () {
    $(".appy_sec.cart-details").toggleClass("d-none");
}); */