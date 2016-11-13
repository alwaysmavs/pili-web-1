function globalNavDropdowns(e) {
    var t = this;
    this.container = document.querySelector(e), this.root = this.container.querySelector(".navRoot"), this.isCompact = !1, this.logoNav = this.root.querySelector(".navSection.logo"), this.secondaryNav = this.root.querySelector(".navSection.secondary"), this.secondaryNavUl = this.root.querySelector(".navSection.secondary"), this.minSecondaryNavWidth = this.secondaryNavUl.getBoundingClientRect().width, this.calculateLayout(), this.root.classList.add("allowExpand"), window.addEventListener("resize", this.calculateLayout.bind(this)), this.container.classList.add("noDropdownTransition"), this.dropdownBackground = this.container.querySelector(".dropdownBackground"), this.dropdownBackgroundAlt = this.container.querySelector(".alternateBackground"), this.dropdownContainer = this.container.querySelector(".dropdownContainer"), this.dropdownArrow = this.container.querySelector(".dropdownArrow"), this.dropdownSections = Strut.queryArray(".dropdownSection", this.container).map(function (e) {
        return {
            el: e,
            name: e.getAttribute("data-dropdown"),
            content: e.querySelector(".dropdownContent")
        }
    }), this.dropdownContainer.addEventListener("mouseenter", function (e) {
        t.stopCloseTimeout()
    }), this.dropdownContainer.addEventListener("mouseleave", function (e) {
        t.startCloseTimeout()
    }), this.dropdownRoots = Strut.queryArray(".hasDropdown", this.root), this.dropdownRoots.forEach(function (e, n) {
        Strut.touch.isSupported ? e.querySelector(".rootLink").addEventListener("touchend", function (n) {
            n.stopPropagation();
            var r = t.activeDropdown === e;
            t.closeDropdown(), r || t.openDropdown(e)
        }) : (e.addEventListener("mouseenter", function (n) {
            t.stopCloseTimeout(), t.openDropdown(e)
        }), e.addEventListener("mouseleave", function (e) {
            t.startCloseTimeout()
        }))
    }), Strut.touch.isSupported && (document.body.addEventListener("touchend", function (e) {
        Strut.touch.isDragging || t.closeDropdown()
    }), this.dropdownContainer.addEventListener("touchend", function (e) {
        e.stopPropagation()
    }))
}

function globalNavPopup(e) {
    var t = this,
        n = Strut.touch.isSupported ? "touchend" : "click";
    this.activeClass = "globalPopupActive",
        console.log(this);
        this.root = document.querySelector(e),
        this.link = this.root.querySelector(".rootLink"),
        this.popup = this.root.querySelector(".popup"),
        this.closeButton = this.root.querySelector(".popupCloseButton"),
        this.link.addEventListener(n, function (e) {
            e.stopPropagation(), t.togglePopup()
        }),
        this.popup.addEventListener(n, function (e) {
            e.stopPropagation()
        }), this.closeButton && this.closeButton.addEventListener(n, function (e) {
        t.closeAllPopups()
    }), document.body.addEventListener(n, function (e) {
        Strut.touch.isDragging || t.closeAllPopups()
    }, !1)
}
(function () {
    window.$ && window.$.ajaxPrefilter && $(function () {
        return $.ajaxPrefilter(function (e, t, n) {
            var r, i;
            return i = $("meta[name=csrf-token]"), r = i ? i.attr("content") : "", n.setRequestHeader("x-stripe-csrf-token", r)
        })
    })
}).call(this), "use strict";
var Strut = {
    random: function (e, t) {
        return Math.random() * (t - e) + e
    },
    arrayRandom: function (e) {
        return e[Math.floor(Math.random() * e.length)]
    },
    interpolate: function (e, t, n) {
        return e * (1 - n) + t * n
    },
    rangePosition: function (e, t, n) {
        return (n - e) / (t - e)
    },
    clamp: function (e, t, n) {
        return Math.max(Math.min(e, n), t)
    },
    queryArray: function (e, t) {
        return t || (t = document.body), Array.prototype.slice.call(t.querySelectorAll(e))
    },
    ready: function (e) {
        document.readyState == "complete" ? e() : document.addEventListener("DOMContentLoaded", e)
    }
};
Strut.isRetina = window.devicePixelRatio > 1.3, Strut.mobileViewportWidth = 670, Strut.isMobileViewport = window.innerWidth < Strut.mobileViewportWidth, window.addEventListener("resize", function () {
    Strut.isMobileViewport = window.innerWidth < Strut.mobileViewportWidth
}), Strut.touch = {
    isSupported: "ontouchstart" in window || navigator.maxTouchPoints,
    isDragging: !1
}, document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("touchmove", function () {
        Strut.touch.isDragging = !0
    }), document.body.addEventListener("touchstart", function () {
        Strut.touch.isDragging = !1
    })
}), Strut.load = {
    images: function (e, t) {
        typeof e == "string" && (e = [e]);
        var n = -e.length;
        e.forEach(function (e) {
            var r = new Image;
            r.src = e, r.onload = function () {
                n++, n === 0 && t && t()
            }
        })
    },
    css: function (e, t) {
        var n = document.createElement("link"),
            r = window.readConfig("strut_files") || {},
            i = r[e];
        if (!i) throw new Error('CSS file "' + e + '" not found in strut_files config');
        n.href = i, n.rel = "stylesheet", document.head.appendChild(n), t && (n.onload = t)
    },
    js: function (e, t) {
        var n = document.createElement("script"),
            r = window.readConfig("strut_files") || {},
            i = r[e];
        if (!i) throw new Error('Javascript file "' + e + '" not found in strut_files config');
        n.src = i, document.head.appendChild(n), t && (n.onload = t)
    }
}, Strut.supports = {
    es6: function () {
        try {
            return new Function("(a = 0) => a"), !0
        } catch (e) {
            return !1
        }
    }(),
    pointerEvents: function () {
        var e = document.createElement("a").style;
        return e.cssText = "pointer-events:auto", e.pointerEvents === "auto"
    }(),
    positionSticky: function () {
        var e = "position:",
            t = "sticky",
            n = document.createElement("a"),
            r = n.style,
            i = " -webkit- -moz- -o- -ms- ".split(" ");
        return r.cssText = e + i.join(t + ";" + e).slice(0, -e.length), r.position.indexOf(t) !== -1
    }(),
    masks: function () {
        return !/MSIE|Trident|Edge/i.test(navigator.userAgent)
    }()
}, globalNavDropdowns.prototype.calculateLayout = function () {
    var e = document.body.clientWidth,
        t = this.logoNav.getBoundingClientRect().width;
    this.isCompact && t > this.minSecondaryNavWidth ? (this.secondaryNav.classList.remove("compact"), this.isCompact = !1) : t < this.minSecondaryNavWidth && (this.secondaryNav.classList.add("compact"), this.isCompact = !0)
}, globalNavDropdowns.prototype.openDropdown = function (e) {
    var t = this;
    if (this.activeDropdown === e) return;
    this.container.classList.add("overlayActive"), this.container.classList.add("dropdownActive"), this.activeDropdown = e, this.dropdownRoots.forEach(function (e, t) {
        e.classList.remove("active")
    }), e.classList.add("active");
    var n = e.getAttribute("data-dropdown"),
        r = "left",
        i, s, o;
    this.dropdownSections.forEach(function (e) {
        e.el.classList.remove("active"), e.el.classList.remove("left"), e.el.classList.remove("right"), e.name == n ? (e.el.classList.add("active"), r = "right", i = e.content.offsetWidth, s = e.content.offsetHeight, o = e.content) : e.el.classList.add(r)
    });
    var u = 520,
        a = 400,
        f = i / u,
        l = s / a,
        c = e.querySelector(".rootLink").getBoundingClientRect(),
        h = c.left + c.width / 2 - i / 2;
    h = Math.round(Math.max(h, 10)), clearTimeout(this.disableTransitionTimeout), this.enableTransitionTimeout = setTimeout(function () {
        t.container.classList.remove("noDropdownTransition")
    }, 50), this.dropdownBackground.style.transform = "translateX(" + h + "px) scaleX(" + f + ") scaleY(" + l + ")", this.dropdownContainer.style.transform = "translateX(" + h + "px)", this.dropdownContainer.style.width = i + "px", this.dropdownContainer.style.height = s + "px";
    var p = Math.round(c.left + c.width / 2);
    this.dropdownArrow.style.transform = "translateX(" + p + "px) rotate(45deg)";
    var d = o.children[0].offsetHeight / l;
    this.dropdownBackgroundAlt.style.transform = "translateY(" + d + "px)"
}, globalNavDropdowns.prototype.closeDropdown = function () {
    var e = this;
    if (!this.activeDropdown) return;
    this.dropdownSections.forEach(function (e) {
        e.el.classList.remove("active"), e.el.classList.remove("left"), e.el.classList.remove("right")
    }), this.dropdownRoots.forEach(function (e, t) {
        e.classList.remove("active")
    }), clearTimeout(this.enableTransitionTimeout), this.disableTransitionTimeout = setTimeout(function () {
        e.container.classList.add("noDropdownTransition")
    }, 50), this.container.classList.remove("overlayActive"), this.container.classList.remove("dropdownActive"), this.activeDropdown = undefined
}, globalNavDropdowns.prototype.startCloseTimeout = function () {
    var e = this;
    e.closeDropdownTimeout = setTimeout(function () {
        e.closeDropdown()
    }, 50)
}, globalNavDropdowns.prototype.stopCloseTimeout = function () {
    var e = this;
    clearTimeout(e.closeDropdownTimeout)
}, globalNavPopup.prototype.togglePopup = function () {
    var e = this.root.classList.contains(this.activeClass);
    this.closeAllPopups(!0), e || this.root.classList.add(this.activeClass)
}, globalNavPopup.prototype.closeAllPopups = function (e) {
    var t = document.getElementsByClassName(this.activeClass);
    for (var n = 0; n < t.length; n++) t[n].classList.remove(this.activeClass)
}, Strut.supports.pointerEvents || Strut.load.css("v3/shared/navigation_ie10.css"), Strut.ready(function () {
    new globalNavDropdowns(".globalNav"), new globalNavPopup(".globalNav .navSection.mobile")
});