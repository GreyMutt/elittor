/*===================================================================================*/
/* Browser selector
/*===================================================================================*/

"use strict";
(window.requestTimeout = function (i, t) {
  if (
    !( 
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      (window.mozRequestAnimationFrame &&
        window.mozCancelRequestAnimationFrame) ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame    
    )
  )
    return window.setTimeout(i, t);
  var o = new Date().getTime(),
    a = new Object();
  return (
    (a.value = requestAnimFrame(function e() {
      var n = new Date().getTime();
      t <= n - o ? i.call() : (a.value = requestAnimFrame(e));
    })),
    a
  );
}),
  (window.clearRequestTimeout = function (e) {
    void 0 !== e &&
      (window.cancelAnimationFrame
        ? window.cancelAnimationFrame(e.value)
        : window.webkitCancelAnimationFrame
        ? window.webkitCancelAnimationFrame(e.value)
        : window.webkitCancelRequestAnimationFrame
        ? window.webkitCancelRequestAnimationFrame(e.value)
        : window.mozCancelRequestAnimationFrame
        ? window.mozCancelRequestAnimationFrame(e.value)
        : window.oCancelRequestAnimationFrame
        ? window.oCancelRequestAnimationFrame(e.value)
        : window.msCancelRequestAnimationFrame
        ? window.msCancelRequestAnimationFrame(e.value)
        : clearTimeout(e));
  }); 
var uaInfo = {
    ua: "",
    is: function (e) {
      return RegExp(e, "i").test(uaInfo.ua);
    },
    version: function (e, n) {
      for (var i = (n = n.replace(".", "_")).indexOf("_"), t = ""; 0 < i; )
        (t += " " + e + n.substring(0, i)), (i = n.indexOf("_", i + 1));
      return (t += " " + e + n);
    },
    getBrowser: function () {
      var e = "gecko",
        n = "webkit",
        i = "chrome",
        t = "firefox",
        o = "safari",
        a = "opera",
        r = "android",
        s = "blackberry",
        c = uaInfo.ua,
        d = uaInfo.is;
      return [
        !/opera|webtv/i.test(c) && /msie\s(\d+)/.test(c)
          ? "ie ie" + (/trident\/4\.0/.test(c) ? "8" : RegExp.$1)
          : d("edge/")
          ? "edge ie" +
            (/edge\/(\d+)\.(\d+)/.test(c)
              ? RegExp.$1 + " ie" + RegExp.$1 + "_" + RegExp.$2
              : "")
          : d("trident/")
          ? "ie ie" + (/trident\/.+rv:(\d+)/i.test(c) ? RegExp.$1 : "")
          : d("firefox/")
          ? e +
            " " +
            t +
            (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)
              ? " " + t + RegExp.$2 + " " + t + RegExp.$2 + "_" + RegExp.$4
              : "")
          : d("gecko/")
          ? e
          : d("opera")
          ? a +
            (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)
              ? " " + a + RegExp.$2 + " " + a + RegExp.$2 + "_" + RegExp.$4
              : /opera(\s|\/)(\d+)\.(\d+)/.test(c)
              ? " " + a + RegExp.$2 + " " + a + RegExp.$2 + "_" + RegExp.$3
              : "")
          : d("konqueror")
          ? "konqueror"
          : d("blackberry")
          ? s +
            (/Version\/(\d+)(\.(\d+)+)/i.test(c)
              ? " " +
                s +
                RegExp.$1 +
                " " +
                s +
                RegExp.$1 +
                RegExp.$2.replace(".", "_")
              : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(c)
              ? " " +
                s +
                RegExp.$2 +
                (RegExp.$3 ? " " + s + RegExp.$2 + RegExp.$3 : "")
              : "")
          : d("android")
          ? r +
            (/Version\/(\d+)(\.(\d+))+/i.test(c)
              ? " " +
                r +
                RegExp.$1 +
                " " +
                r +
                RegExp.$1 +
                RegExp.$2.replace(".", "_")
              : "") +
            (/Android (.+); (.+) Build/i.test(c)
              ? " device_" + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_")
              : "")
          : d("chrome")
          ? n +
            " " +
            i +
            (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)
              ? " " +
                i +
                RegExp.$2 +
                (0 < RegExp.$4 ? " " + i + RegExp.$2 + "_" + RegExp.$4 : "")
              : "")
          : d("iron")
          ? n + " iron"
          : d("applewebkit/")
          ? n +
            " " +
            o +
            (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(c)
              ? " " +
                o +
                RegExp.$2 +
                " " +
                o +
                RegExp.$2 +
                RegExp.$3.replace(".", "_")
              : / Safari\/(\d+)/i.test(c)
              ? "419" == RegExp.$1 ||
                "417" == RegExp.$1 ||
                "416" == RegExp.$1 ||
                "412" == RegExp.$1
                ? " " + o + "2_0"
                : "312" == RegExp.$1
                ? " " + o + "1_3"
                : "125" == RegExp.$1
                ? " " + o + "1_2"
                : "85" == RegExp.$1
                ? " " + o + "1_0"
                : ""
              : "")
          : d("mozilla/")
          ? e
          : "",
      ];
    },
    getPlatform: function () {
      var e = "winphone",
        n = "android",
        i = "blackberry",
        t = uaInfo.ua,
        o = uaInfo.version,
        a = uaInfo.is;
      return [
        a("j2me")
          ? "j2me"
          : a("windows phone")
          ? e +
            (/Windows Phone (\d+)(\.(\d+))+/i.test(t) ||
            /Windows Phone OS (\d+)(\.(\d+))+/i.test(t)
              ? " " +
                e +
                RegExp.$1 +
                " " +
                e +
                RegExp.$1 +
                RegExp.$2.replace(".", "_")
              : "")
          : a("blackberry")
          ? i +
            (/Version\/(\d+)(\.(\d+)+)/i.test(t)
              ? " " +
                i +
                RegExp.$1 +
                " " +
                i +
                RegExp.$1 +
                RegExp.$2.replace(".", "_")
              : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(t)
              ? " " +
                i +
                RegExp.$2 +
                (RegExp.$3 ? " " + i + RegExp.$2 + RegExp.$3 : "")
              : "")
          : a("android")
          ? n +
            (/Version\/(\d+)(\.(\d+))+/i.test(t)
              ? " " +
                n +
                RegExp.$1 +
                " " +
                n +
                RegExp.$1 +
                RegExp.$2.replace(".", "_")
              : "") +
            (/Android (.+); (.+) Build/i.test(t)
              ? " device_" + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_")
              : "")
          : a("ipad|ipod|iphone")
          ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(t)
              ? "ios" + o("ios", RegExp.$2)
              : "") +
            " " +
            (/(ip(ad|od|hone))/gi.test(t) ? RegExp.$1 : "")
          : a("playbook")
          ? "playbook"
          : a("kindle|silk")
          ? "kindle"
          : a("playbook")
          ? "playbook"
          : a("mac")
          ? "mac" +
            (/mac os x ((\d+)[.|_](\d+))/.test(t)
              ? " mac" + RegExp.$2 + " mac" + RegExp.$1.replace(".", "_")
              : "")
          : a("win")
          ? "win" +
            (a("windows nt 10.0")
              ? " win10"
              : a("windows nt 6.3")
              ? " win8_1"
              : a("windows nt 6.2")
              ? " win8"
              : a("windows nt 6.1")
              ? " win7"
              : a("windows nt 6.0")
              ? " vista"
              : a("windows nt 5.2") || a("windows nt 5.1")
              ? " win_xp"
              : a("windows nt 5.0")
              ? " win_2k"
              : a("windows nt 4.0") || a("WinNT4.0")
              ? " win_nt"
              : "")
          : a("freebsd")
          ? "freebsd"
          : a("x11|linux")
          ? "linux"
          : "",
      ];
    },
    getMobile: function () {
      return [
        (0, uaInfo.is)(
          "android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk"
        )
          ? "mobile"
          : "",
      ];
    },
    getIpadApp: function () {
      var e = uaInfo.is;
      return [e("ipad|iphone|ipod") && !e("safari") ? "ipad_app" : ""];
    },
    getLang: function () {
      var e = uaInfo.ua;
      return [
        /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(e)
          ? ("lang_" + RegExp.$2).replace("-", "_") +
            ("" != RegExp.$3 ? (" lang_" + RegExp.$1).replace("-", "_") : "")
          : "",
      ];
    },
  },
  screenInfo = {
    width: (window.outerWidth || document.documentElement.clientWidth) - 15,
    height: window.outerHeight || document.documentElement.clientHeight,
    getOrientation: function () {
      return screenInfo.width < screenInfo.height
        ? ["orientation_portrait"]
        : ["orientation_landscape"];
    },
    getInfo: function () {
      return [].concat(screenInfo.getOrientation());
    },
    getPixelRatio: function () {
      var e = [],
        n = window.devicePixelRatio ? window.devicePixelRatio : 1;
      return (
        1 < n
          ? (e.push("retina_" + parseInt(n) + "x"), e.push("hidpi"))
          : e.push("no-hidpi"),
        e
      );
    },
  };
function isTouchScreendevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
function css_browser_selector(e, n) {
  var i = document.documentElement,
    t = [];
  (n = n || ""), (uaInfo.ua = e.toLowerCase());
  var o = uaInfo.getBrowser();
  "gecko" == o &&
    (o = !window.ActiveXObject && "ActiveXObject" in window ? "ie ie11" : o),
    (t = isTouchScreendevice() ? t.concat("touch") : t.concat("no-touch"));
  /admin-mode/g.test(i.className) && (t = t.concat("admin-mode")),
    (t = (t = (t = (t = (t = (t = (t = (t = t.concat(o)).concat(
      uaInfo.getPlatform()
    )).concat(uaInfo.getMobile())).concat(uaInfo.getIpadApp())).concat(
      uaInfo.getLang()
    )).concat(["js"])).concat(screenInfo.getPixelRatio())).concat(
      screenInfo.getInfo()
    ));
  function a() {
    (i.className = i.className
      .replace(/ ?orientation_\w+/g, "")
      .replace(/ [min|max|cl]+[w|h]_\d+/g, "")),
      (i.className = i.className + " " + screenInfo.getInfo().join(" "));
  }
  return (
    window.addEventListener("resize", a),
    window.addEventListener("orientationchange", a),
    ((t = t.filter(function (e) {
      return e;
    }))[0] = n ? n + t[0] : t[0]),
    (i.className = t.join(" " + n)),
    i.className
  );
}
var css_browser_selector_ns = css_browser_selector_ns || "";
css_browser_selector(navigator.userAgent, css_browser_selector_ns);