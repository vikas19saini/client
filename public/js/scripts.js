
$(window).scroll(function () {
    var sticky = $('.header_area'),
        scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed');
    }
    else {
        sticky.removeClass('fixed');
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
                .find("form")
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
                                    .append(
                                        "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                                    ))
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
                        .find("form")
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
                            .find("form")
                            .css("display")
                        ? (n(t)
                            .find(".nav-search")
                            .find("form")
                            .fadeIn(200),
                            n(t)
                                .find(".nav-search")
                                .find("input")
                                .focus())
                        : (n(t)
                            .find(".nav-search")
                            .find("form")
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


/* 
//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};
 
//remove class from a set of items
const removeClasses = (elemSet, className) => {
 
  elemSet.forEach(elem => {
 
    elem.classList.remove(className);
 
  });
 
};
 
//return exect parent node of the element
const findParent = (elem, parentClass) => {
 
  let currentNode = elem;
 
  while (!(currentNode.classList.contains(parentClass))) {
    currentNode = currentNode.parentNode;
  }
 
  return currentNode;
 
};
 
//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};
 
//set all steps before clicked (and clicked too) to active
const setActiveStep = (activeStepNum) => {
 
  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');
 
  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {
 
    if (index <= (activeStepNum)) {
      elem.classList.add('js-active');
    }
 
  });
};
 
//get active panel
const getActivePanel = () => {
 
  let activePanel;
 
  DOMstrings.stepFormPanels.forEach(elem => {
 
    if (elem.classList.contains('js-active')) {
 
      activePanel = elem;
 
    }
 
  });
 
  return activePanel;
 
};
 
//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {
 
  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');
 
  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === (activePanelNum)) {
 
      elem.classList.add('js-active');
 
      setFormHeight(elem);
 
    }
  })
 
};
 
//set form height equal to current panel height
const formHeight = (activePanel) => {
 
  const activePanelHeight = activePanel.offsetHeight;
 
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
 
};
 
const setFormHeight = () => {
  const activePanel = getActivePanel();
 
  formHeight(activePanel);
}
 
//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {
 
  //check if click target is a step button
  const eventTarget = e.target;
 
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
 
  //get active button step number
  const activeStep = getActiveStep(eventTarget);
 
  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);
 
  //open active panel
  setActivePanel(activeStep);
});
 
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {
 
  const eventTarget = e.target;
 
  //check if we clicked on `PREV` or NEXT` buttons
  if (!((eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) || (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))) {
    return;
  }
 
  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
 
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
 
  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;
 
  } else {
 
    activePanelNum++;
 
  }
 
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
 
});
 
//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);
 
//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);
 
//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)
 
const setAnimationType = (newType) => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  })
};
 
//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');
 
animationSelect.addEventListener('change', () => {
  const newAnimationType = animationSelect.value;
 
  setAnimationType(newAnimationType);
});
 */

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
        $('.ac-list > .expanded').on('click', function (e) {
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
        });
    } else {
        $('.ac-list > .expanded').on('click', function (e) {
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
        });
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
    $('#may_like').owlCarousel({
        loop: false,
        autoplay: false,
        dots: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {

                items: 1.2,
                nav: false,
                margin: 10,
            },
            568: {
                items: 3,
                nav: false,
            },
            667: {
                items: 3,
            },
            1170: {
                items: 3,
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
        loop: true,
        autoplay: false,
        dots: true,
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
        dots: true,
        nav: false,
        margin: 30,
        responsive: {
            0: {

                items: 1.2,
                nav: false,
                margin: 15,
            },

            568: {
                items: 1.2,
                nav: false,
            },

            667: {
                items: 3,
            },

            1170: {

                items: 3
            }
        }
    });
}


function subCategory() {
    $('#mini_slide').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1.2,
                nav: false,
                margin: 20,
            },
            568: {
                items: 3,
                nav: false,
            },
            667: {
                items: 3,
            },
            1170: {
                items: 3,
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


/* var wow = new WOW();
wow.init(); */