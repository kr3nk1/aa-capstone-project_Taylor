!function(s, p) {
    "use strict";
    function e(e) {
        for (var t = {}, n = 0; n < e.length; n++)
            t[e[n].toUpperCase()] = e[n];
        return t
    }
    function N(e, t) {
        return typeof e === m && -1 !== A(t).indexOf(A(e))
    }
    function l(e, t) {
        if (typeof e === m)
            return e = e.replace(/^\s\s*/, f),
            typeof t == h ? e : e.substring(0, 350)
    }
    function u(e, t) {
        for (var n, i, r, o, a, s = 0; s < t.length && !o; ) {
            for (var l = t[s], u = t[s + 1], c = n = 0; c < l.length && !o && l[c]; )
                if (o = l[c++].exec(e))
                    for (i = 0; i < u.length; i++)
                        a = o[++n],
                        typeof (r = u[i]) === g && 0 < r.length ? 2 === r.length ? typeof r[1] == d ? this[r[0]] = r[1].call(this, a) : this[r[0]] = r[1] : 3 === r.length ? typeof r[1] !== d || r[1].exec && r[1].test ? this[r[0]] = a ? a.replace(r[1], r[2]) : p : this[r[0]] = a ? r[1].call(this, a, r[2]) : p : 4 === r.length && (this[r[0]] = a ? r[3].call(this, a.replace(r[1], r[2])) : p) : this[r] = a || p;
            s += 2
        }
    }
    function t(e, t) {
        for (var n in t)
            if (typeof t[n] === g && 0 < t[n].length) {
                for (var i = 0; i < t[n].length; i++)
                    if (N(t[n][i], e))
                        return "?" === n ? p : n
            } else if (N(t[n], e))
                return "?" === n ? p : n;
        return e
    }
    function c(e, t) {
        var n, i, r, o, a;
        return typeof e === g && (t = e,
        e = p),
        this instanceof c ? (n = typeof s != h && s.navigator ? s.navigator : p,
        i = e || (n && n.userAgent ? n.userAgent : f),
        r = n && n.userAgentData ? n.userAgentData : p,
        o = t ? function(e, t) {
            var n, i = {};
            for (n in e)
                t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
            return i
        }(X, t) : X,
        a = n && n.userAgent == i,
        this.getBrowser = function() {
            var e, t = {};
            return t[v] = p,
            t[w] = p,
            u.call(t, i, o.browser),
            t[R] = typeof (e = t[w]) === m ? e.replace(/[^\d\.]/g, f).split(".")[0] : p,
            a && n && n.brave && typeof n.brave.isBrave == d && (t[v] = "Brave"),
            t
        }
        ,
        this.getCPU = function() {
            var e = {};
            return e[x] = p,
            u.call(e, i, o.cpu),
            e
        }
        ,
        this.getDevice = function() {
            var e = {};
            return e[_] = p,
            e[y] = p,
            e[b] = p,
            u.call(e, i, o.device),
            a && !e[b] && r && r.mobile && (e[b] = T),
            a && "Macintosh" == e[y] && n && typeof n.standalone != h && n.maxTouchPoints && 2 < n.maxTouchPoints && (e[y] = "iPad",
            e[b] = k),
            e
        }
        ,
        this.getEngine = function() {
            var e = {};
            return e[v] = p,
            e[w] = p,
            u.call(e, i, o.engine),
            e
        }
        ,
        this.getOS = function() {
            var e = {};
            return e[v] = p,
            e[w] = p,
            u.call(e, i, o.os),
            a && !e[v] && r && "Unknown" != r.platform && (e[v] = r.platform.replace(/chrome os/i, J).replace(/macos/i, G)),
            e
        }
        ,
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        }
        ,
        this.getUA = function() {
            return i
        }
        ,
        this.setUA = function(e) {
            return i = typeof e === m && 350 < e.length ? l(e, 350) : e,
            this
        }
        ,
        this.setUA(i),
        this) : new c(e,t).getResult()
    }
    var i, f = "", d = "function", h = "undefined", g = "object", m = "string", R = "major", y = "model", v = "name", b = "type", _ = "vendor", w = "version", x = "architecture", n = "console", T = "mobile", k = "tablet", r = "smarttv", o = "wearable", a = "embedded", S = "Amazon", E = "Apple", H = "ASUS", I = "BlackBerry", C = "Browser", j = "Chrome", O = "Firefox", L = "Google", B = "Huawei", D = "LG", U = "Microsoft", q = "Motorola", M = "Opera", $ = "Samsung", V = "Sharp", P = "Sony", W = "Xiaomi", z = "Zebra", Q = "Facebook", J = "Chromium OS", G = "Mac OS", A = function(e) {
        return e.toLowerCase()
    }, Y = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
    }, X = {
        browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [w, [v, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [w, [v, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [v, w], [/opios[\/ ]+([\w\.]+)/i], [w, [v, M + " Mini"]], [/\bopr\/([\w\.]+)/i], [w, [v, M]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [v, w], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [w, [v, "UC" + C]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [w, [v, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [w, [v, "WeChat"]], [/konqueror\/([\w\.]+)/i], [w, [v, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [w, [v, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [w, [v, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[v, /(.+)/, "$1 Secure " + C], w], [/\bfocus\/([\w\.]+)/i], [w, [v, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [w, [v, M + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [w, [v, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [w, [v, "Dolphin"]], [/coast\/([\w\.]+)/i], [w, [v, M + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [w, [v, "MIUI " + C]], [/fxios\/([-\w\.]+)/i], [w, [v, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[v, "360 " + C]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[v, /(.+)/, "$1 " + C], w], [/(comodo_dragon)\/([\w\.]+)/i], [[v, /_/g, " "], w], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [v, w], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [v], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[v, Q], w], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [v, w], [/\bgsa\/([\w\.]+) .*safari\//i], [w, [v, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [w, [v, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [w, [v, j + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[v, j + " WebView"], w], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [w, [v, "Android " + C]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [v, w], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [w, [v, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [w, v], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [v, [w, t, {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
        }]], [/(webkit|khtml)\/([\w\.]+)/i], [v, w], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[v, "Netscape"], w], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [w, [v, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [v, w], [/(cobalt)\/([\w\.]+)/i], [v, [w, /master.|lts./, ""]]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[x, "amd64"]], [/(ia32(?=;))/i], [[x, A]], [/((?:i[346]|x)86)[;\)]/i], [[x, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[x, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[x, "armhf"]], [/windows (ce|mobile); ppc;/i], [[x, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[x, /ower/, f, A]], [/(sun4\w)[;\)]/i], [[x, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[x, A]]],
        device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [y, [_, $], [b, k]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [y, [_, $], [b, T]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [y, [_, E], [b, T]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [y, [_, E], [b, k]], [/(macintosh);/i], [y, [_, E]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [y, [_, V], [b, T]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [y, [_, B], [b, k]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [y, [_, B], [b, T]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[y, /_/g, " "], [_, W], [b, T]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[y, /_/g, " "], [_, W], [b, k]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [y, [_, "OPPO"], [b, T]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [y, [_, "Vivo"], [b, T]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [y, [_, "Realme"], [b, T]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [y, [_, q], [b, T]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [y, [_, q], [b, k]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [y, [_, D], [b, k]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [y, [_, D], [b, T]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [y, [_, "Lenovo"], [b, k]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[y, /_/g, " "], [_, "Nokia"], [b, T]], [/(pixel c)\b/i], [y, [_, L], [b, k]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [y, [_, L], [b, T]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [y, [_, P], [b, T]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[y, "Xperia Tablet"], [_, P], [b, k]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [y, [_, "OnePlus"], [b, T]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [y, [_, S], [b, k]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[y, /(.+)/g, "Fire Phone $1"], [_, S], [b, T]], [/(playbook);[-\w\),; ]+(rim)/i], [y, _, [b, k]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [y, [_, I], [b, T]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [y, [_, H], [b, k]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [y, [_, H], [b, T]], [/(nexus 9)/i], [y, [_, "HTC"], [b, k]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [_, [y, /_/g, " "], [b, T]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [y, [_, "Acer"], [b, k]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [y, [_, "Meizu"], [b, T]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [_, y, [b, T]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [_, y, [b, k]], [/(surface duo)/i], [y, [_, U], [b, k]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [y, [_, "Fairphone"], [b, T]], [/(u304aa)/i], [y, [_, "AT&T"], [b, T]], [/\bsie-(\w*)/i], [y, [_, "Siemens"], [b, T]], [/\b(rct\w+) b/i], [y, [_, "RCA"], [b, k]], [/\b(venue[\d ]{2,7}) b/i], [y, [_, "Dell"], [b, k]], [/\b(q(?:mv|ta)\w+) b/i], [y, [_, "Verizon"], [b, k]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [y, [_, "Barnes & Noble"], [b, k]], [/\b(tm\d{3}\w+) b/i], [y, [_, "NuVision"], [b, k]], [/\b(k88) b/i], [y, [_, "ZTE"], [b, k]], [/\b(nx\d{3}j) b/i], [y, [_, "ZTE"], [b, T]], [/\b(gen\d{3}) b.+49h/i], [y, [_, "Swiss"], [b, T]], [/\b(zur\d{3}) b/i], [y, [_, "Swiss"], [b, k]], [/\b((zeki)?tb.*\b) b/i], [y, [_, "Zeki"], [b, k]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[_, "Dragon Touch"], y, [b, k]], [/\b(ns-?\w{0,9}) b/i], [y, [_, "Insignia"], [b, k]], [/\b((nxa|next)-?\w{0,9}) b/i], [y, [_, "NextBook"], [b, k]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[_, "Voice"], y, [b, T]], [/\b(lvtel\-)?(v1[12]) b/i], [[_, "LvTel"], y, [b, T]], [/\b(ph-1) /i], [y, [_, "Essential"], [b, T]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [y, [_, "Envizen"], [b, k]], [/\b(trio[-\w\. ]+) b/i], [y, [_, "MachSpeed"], [b, k]], [/\btu_(1491) b/i], [y, [_, "Rotor"], [b, k]], [/(shield[\w ]+) b/i], [y, [_, "Nvidia"], [b, k]], [/(sprint) (\w+)/i], [_, y, [b, T]], [/(kin\.[onetw]{3})/i], [[y, /\./g, " "], [_, U], [b, T]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [y, [_, z], [b, k]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [y, [_, z], [b, T]], [/smart-tv.+(samsung)/i], [_, [b, r]], [/hbbtv.+maple;(\d+)/i], [[y, /^/, "SmartTV"], [_, $], [b, r]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[_, D], [b, r]], [/(apple) ?tv/i], [_, [y, E + " TV"], [b, r]], [/crkey/i], [[y, j + "cast"], [_, L], [b, r]], [/droid.+aft(\w)( bui|\))/i], [y, [_, S], [b, r]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [y, [_, V], [b, r]], [/(bravia[\w ]+)( bui|\))/i], [y, [_, P], [b, r]], [/(mitv-\w{5}) bui/i], [y, [_, W], [b, r]], [/Hbbtv.*(technisat) (.*);/i], [_, y, [b, r]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[_, l], [y, l], [b, r]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[b, r]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [_, y, [b, n]], [/droid.+; (shield) bui/i], [y, [_, "Nvidia"], [b, n]], [/(playstation [345portablevi]+)/i], [y, [_, P], [b, n]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [y, [_, U], [b, n]], [/((pebble))app/i], [_, y, [b, o]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [y, [_, E], [b, o]], [/droid.+; (glass) \d/i], [y, [_, L], [b, o]], [/droid.+; (wt63?0{2,3})\)/i], [y, [_, z], [b, o]], [/(quest( 2| pro)?)/i], [y, [_, Q], [b, o]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [_, [b, a]], [/(aeobc)\b/i], [y, [_, S], [b, a]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [y, [b, T]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [y, [b, k]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[b, k]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[b, T]], [/(android[-\w\. ]{0,9});.+buil/i], [y, [_, "Generic"]]],
        engine: [[/windows.+ edge\/([\w\.]+)/i], [w, [v, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [w, [v, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [v, w], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [w, v]],
        os: [[/microsoft (windows) (vista|xp)/i], [v, w], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [v, [w, t, Y]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[v, "Windows"], [w, t, Y]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[w, /_/g, "."], [v, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[v, G], [w, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [w, v], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [v, w], [/\(bb(10);/i], [w, [v, I]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [w, [v, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [w, [v, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [w, [v, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [w, [v, "watchOS"]], [/crkey\/([\d\.]+)/i], [w, [v, j + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[v, J], w], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [v, w], [/(sunos) ?([\w\.\d]*)/i], [[v, "Solaris"], w], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [v, w]]
    }, F = (c.VERSION = "1.0.35",
    c.BROWSER = e([v, w, R]),
    c.CPU = e([x]),
    c.DEVICE = e([y, _, b, n, T, r, k, o, a]),
    c.ENGINE = c.OS = e([v, w]),
    typeof exports != h ? (exports = typeof module != h && module.exports ? module.exports = c : exports).UAParser = c : typeof define === d && define.amd ? define(function() {
        return c
    }) : typeof s != h && (s.UAParser = c),
    typeof s != h && (s.jQuery || s.Zepto));
    F && !F.ua && (i = new c,
    F.ua = i.getResult(),
    F.ua.get = function() {
        return i.getUA()
    }
    ,
    F.ua.set = function(e) {
        i.setUA(e);
        var t, n = i.getResult();
        for (t in n)
            F.ua[t] = n[t]
    }
    )
}("object" == typeof window ? window : this),
!function(t) {
    "use strict";
    var u = void 0
      , i = 1e5;
    function e(e) {
        switch (typeof e) {
        case "undefined":
            return "undefined";
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
        default:
            return null === e ? "null" : "object"
        }
    }
    function r(e) {
        return Object.prototype.toString.call(e).replace(/^\[object *|\]$/g, "")
    }
    function s(e) {
        return "function" == typeof e
    }
    function c(e) {
        if (null === e || e === u)
            throw TypeError();
        return Object(e)
    }
    var o, a, n, l, p, f, d, h, g, m, y, v, N = Math.LN2, b = Math.abs, _ = Math.floor, R = Math.log, w = Math.max, x = Math.min, T = Math.pow, H = Math.round;
    function I(n) {
        if (!("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS"in t)) {
            if (n.length > i)
                throw RangeError("Array too large for polyfill");
            for (var e = 0; e < n.length; e += 1)
                !function(t) {
                    Object.defineProperty(n, t, {
                        get: function() {
                            return n._getter(t)
                        },
                        set: function(e) {
                            n._setter(t, e)
                        },
                        enumerable: !0,
                        configurable: !1
                    })
                }(e)
        }
    }
    function k(e, t) {
        t = 32 - t;
        return e << t >> t
    }
    function S(e, t) {
        t = 32 - t;
        return e << t >>> t
    }
    function B(e) {
        return [255 & e]
    }
    function U(e) {
        return k(e[0], 8)
    }
    function q(e) {
        return [255 & e]
    }
    function E(e) {
        return S(e[0], 8)
    }
    function $(e) {
        return [(e = H(Number(e))) < 0 ? 0 : 255 < e ? 255 : 255 & e]
    }
    function V(e) {
        return [255 & e, e >> 8 & 255]
    }
    function W(e) {
        return k(e[1] << 8 | e[0], 16)
    }
    function z(e) {
        return [255 & e, e >> 8 & 255]
    }
    function Q(e) {
        return S(e[1] << 8 | e[0], 16)
    }
    function J(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }
    function G(e) {
        return k(e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], 32)
    }
    function Y(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }
    function X(e) {
        return S(e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], 32)
    }
    function C(e, t, n) {
        var i, r, o, a, s = (1 << t - 1) - 1;
        function l(e) {
            var t = _(e)
              , e = e - t;
            return !(e < .5) && (.5 < e || t % 2) ? t + 1 : t
        }
        e != e ? (i = (1 << t) - 1,
        o = T(2, n - 1),
        a = 0) : e === 1 / 0 || e === -1 / 0 ? (i = (1 << t) - 1,
        a = e < (o = 0) ? 1 : 0) : 0 === e ? a = 1 / e == -1 / (o = i = 0) ? 1 : 0 : (a = e < 0,
        (e = b(e)) >= T(2, 1 - s) ? (i = x(_(R(e) / N), 1023),
        (r = e / T(2, i)) < 1 && (--i,
        r *= 2),
        2 <= r && (i += 1,
        r /= 2),
        i += s,
        1 <= (o = l(r * (r = T(2, n))) - r) / r && (i += 1,
        o = 0),
        2 * s < i && (i = (1 << t) - 1,
        o = 0)) : (i = 0,
        o = l(e / T(2, 1 - s - n))));
        for (var u = [], c = n; c; --c)
            u.push(o % 2 ? 1 : 0),
            o = _(o / 2);
        for (c = t; c; --c)
            u.push(i % 2 ? 1 : 0),
            i = _(i / 2);
        u.push(a ? 1 : 0),
        u.reverse();
        for (var p = u.join(""), f = []; p.length; )
            f.unshift(parseInt(p.substring(0, 8), 2)),
            p = p.substring(8);
        return f
    }
    function j(e, t, n) {
        for (var i, r, o, a, s, l, u = [], c = 0; c < e.length; ++c)
            for (r = e[c],
            i = 8; i; --i)
                u.push(r % 2 ? 1 : 0),
                r >>= 1;
        return u.reverse(),
        l = u.join(""),
        o = (1 << t - 1) - 1,
        a = parseInt(l.substring(0, 1), 2) ? -1 : 1,
        s = parseInt(l.substring(1, 1 + t), 2),
        l = parseInt(l.substring(1 + t), 2),
        s === (1 << t) - 1 ? 0 !== l ? NaN : 1 / 0 * a : 0 < s ? a * T(2, s - o) * (1 + l / T(2, n)) : 0 !== l ? a * T(2, -(o - 1)) * (l / T(2, n)) : a < 0 ? -0 : 0
    }
    function K(e) {
        return j(e, 11, 52)
    }
    function Z(e) {
        return C(e, 11, 52)
    }
    function ee(e) {
        return j(e, 8, 23)
    }
    function te(e) {
        return C(e, 8, 23)
    }
    function O(e) {
        if ((e >>= 0) < 0)
            throw RangeError("ArrayBuffer size is not a small enough positive integer.");
        Object.defineProperty(this, "byteLength", {
            value: e
        }),
        Object.defineProperty(this, "_bytes", {
            value: Array(e)
        });
        for (var t = 0; t < e; t += 1)
            this._bytes[t] = 0
    }
    function L() {
        if (!arguments.length || "object" != typeof arguments[0])
            return function(e) {
                if ((e >>= 0) < 0)
                    throw RangeError("length is not a small enough positive integer.");
                Object.defineProperty(this, "length", {
                    value: e
                }),
                Object.defineProperty(this, "byteLength", {
                    value: e * this.BYTES_PER_ELEMENT
                }),
                Object.defineProperty(this, "buffer", {
                    value: new O(this.byteLength)
                }),
                Object.defineProperty(this, "byteOffset", {
                    value: 0
                })
            }
            .apply(this, arguments);
        if (1 <= arguments.length && "object" === e(arguments[0]) && arguments[0]instanceof L)
            return function(e) {
                if (this.constructor !== e.constructor)
                    throw TypeError();
                var t = e.length * this.BYTES_PER_ELEMENT;
                Object.defineProperty(this, "buffer", {
                    value: new O(t)
                }),
                Object.defineProperty(this, "byteLength", {
                    value: t
                }),
                Object.defineProperty(this, "byteOffset", {
                    value: 0
                }),
                Object.defineProperty(this, "length", {
                    value: e.length
                });
                for (var n = 0; n < this.length; n += 1)
                    this._setter(n, e._getter(n))
            }
            .apply(this, arguments);
        if (1 <= arguments.length && "object" === e(arguments[0]) && !(arguments[0]instanceof L) && !(arguments[0]instanceof O || "ArrayBuffer" === r(arguments[0])))
            return function(e) {
                var t = e.length * this.BYTES_PER_ELEMENT;
                Object.defineProperty(this, "buffer", {
                    value: new O(t)
                }),
                Object.defineProperty(this, "byteLength", {
                    value: t
                }),
                Object.defineProperty(this, "byteOffset", {
                    value: 0
                }),
                Object.defineProperty(this, "length", {
                    value: e.length
                });
                for (var n = 0; n < this.length; n += 1) {
                    var i = e[n];
                    this._setter(n, Number(i))
                }
            }
            .apply(this, arguments);
        if (1 <= arguments.length && "object" === e(arguments[0]) && (arguments[0]instanceof O || "ArrayBuffer" === r(arguments[0])))
            return function(e, t, n) {
                if ((t >>>= 0) > e.byteLength)
                    throw RangeError("byteOffset out of range");
                if (t % this.BYTES_PER_ELEMENT)
                    throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
                if (n === u) {
                    var i = e.byteLength - t;
                    if (i % this.BYTES_PER_ELEMENT)
                        throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
                    n = i / this.BYTES_PER_ELEMENT
                } else
                    i = (n >>>= 0) * this.BYTES_PER_ELEMENT;
                if (t + i > e.byteLength)
                    throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
                Object.defineProperty(this, "buffer", {
                    value: e
                }),
                Object.defineProperty(this, "byteLength", {
                    value: i
                }),
                Object.defineProperty(this, "byteOffset", {
                    value: t
                }),
                Object.defineProperty(this, "length", {
                    value: n
                })
            }
            .apply(this, arguments);
        throw TypeError()
    }
    function D(e, t, n) {
        function i() {
            Object.defineProperty(this, "constructor", {
                value: i
            }),
            L.apply(this, arguments),
            I(this)
        }
        function r() {}
        "__proto__"in i ? i.__proto__ = L : (i.from = L.from,
        i.of = L.of),
        i.BYTES_PER_ELEMENT = e;
        return r.prototype = a,
        i.prototype = new r,
        Object.defineProperty(i.prototype, "BYTES_PER_ELEMENT", {
            value: e
        }),
        Object.defineProperty(i.prototype, "_pack", {
            value: t
        }),
        Object.defineProperty(i.prototype, "_unpack", {
            value: n
        }),
        i
    }
    function M(e, t) {
        return s(e.get) ? e.get(t) : e[t]
    }
    function P(e, t, n) {
        if (!(e instanceof ArrayBuffer || "ArrayBuffer" === r(e)))
            throw TypeError();
        if ((t >>>= 0) > e.byteLength)
            throw RangeError("byteOffset out of range");
        if (n === u ? n = e.byteLength - t : n >>>= 0,
        t + n > e.byteLength)
            throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
        Object.defineProperty(this, "buffer", {
            value: e
        }),
        Object.defineProperty(this, "byteLength", {
            value: n
        }),
        Object.defineProperty(this, "byteOffset", {
            value: t
        })
    }
    function A(o) {
        return function(e, t) {
            if ((e >>>= 0) + o.BYTES_PER_ELEMENT > this.byteLength)
                throw RangeError("Array index out of range");
            e += this.byteOffset;
            for (var n = new Uint8Array(this.buffer,e,o.BYTES_PER_ELEMENT), i = [], r = 0; r < o.BYTES_PER_ELEMENT; r += 1)
                i.push(M(n, r));
            return Boolean(t) === Boolean(v) && i.reverse(),
            M(new o(new Uint8Array(i).buffer), 0)
        }
    }
    function F(a) {
        return function(e, t, n) {
            if ((e >>>= 0) + a.BYTES_PER_ELEMENT > this.byteLength)
                throw RangeError("Array index out of range");
            for (var t = new a([t]), i = new Uint8Array(t.buffer), r = [], o = 0; o < a.BYTES_PER_ELEMENT; o += 1)
                r.push(M(i, o));
            Boolean(n) === Boolean(v) && r.reverse(),
            new Uint8Array(this.buffer,e,a.BYTES_PER_ELEMENT).set(r)
        }
    }
    o = Object.defineProperty,
    y = !function() {
        try {
            return Object.defineProperty({}, "x", {})
        } catch (e) {}
    }(),
    o && !y || (Object.defineProperty = function(e, t, n) {
        if (o)
            try {
                return o(e, t, n)
            } catch (e) {}
        if (e !== Object(e))
            throw TypeError("Object.defineProperty called on non-object");
        return Object.prototype.__defineGetter__ && "get"in n && Object.prototype.__defineGetter__.call(e, t, n.get),
        Object.prototype.__defineSetter__ && "set"in n && Object.prototype.__defineSetter__.call(e, t, n.set),
        "value"in n && (e[t] = n.value),
        e
    }
    ),
    t.ArrayBuffer = t.ArrayBuffer || O,
    Object.defineProperty(L, "from", {
        value: function(e) {
            return new this(e)
        }
    }),
    Object.defineProperty(L, "of", {
        value: function() {
            return new this(arguments)
        }
    }),
    L.prototype = a = {},
    Object.defineProperty(L.prototype, "_getter", {
        value: function(e) {
            if (arguments.length < 1)
                throw SyntaxError("Not enough arguments");
            if ((e >>>= 0) >= this.length)
                return u;
            for (var t = [], n = 0, i = this.byteOffset + e * this.BYTES_PER_ELEMENT; n < this.BYTES_PER_ELEMENT; n += 1,
            i += 1)
                t.push(this.buffer._bytes[i]);
            return this._unpack(t)
        }
    }),
    Object.defineProperty(L.prototype, "get", {
        value: L.prototype._getter
    }),
    Object.defineProperty(L.prototype, "_setter", {
        value: function(e, t) {
            if (arguments.length < 2)
                throw SyntaxError("Not enough arguments");
            if (!((e >>>= 0) >= this.length))
                for (var n = this._pack(t), i = 0, r = this.byteOffset + e * this.BYTES_PER_ELEMENT; i < this.BYTES_PER_ELEMENT; i += 1,
                r += 1)
                    this.buffer._bytes[r] = n[i]
        }
    }),
    Object.defineProperty(L.prototype, "constructor", {
        value: L
    }),
    Object.defineProperty(L.prototype, "copyWithin", {
        value: function(e, t) {
            var n, i = arguments[2], r = c(this), o = r.length, o = w(o >>> 0, 0), e = e >> 0, a = e < 0 ? w(o + e, 0) : x(e, o), e = t >> 0, s = e < 0 ? w(o + e, 0) : x(e, o), t = i === u ? o : i >> 0, e = t < 0 ? w(o + t, 0) : x(t, o), l = x(e - s, o - a);
            for (s < a && a < s + l ? (n = -1,
            s = s + l - 1,
            a = a + l - 1) : n = 1; 0 < l; )
                r._setter(a, r._getter(s)),
                s += n,
                a += n,
                l -= 1;
            return r
        }
    }),
    Object.defineProperty(L.prototype, "every", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = arguments[1], r = 0; r < n; r++)
                if (!e.call(i, t._getter(r), r, t))
                    return !1;
            return !0
        }
    }),
    Object.defineProperty(L.prototype, "fill", {
        value: function(e) {
            for (var t = arguments[1], n = arguments[2], i = c(this), r = i.length, r = w(r >>> 0, 0), t = t >> 0, o = t < 0 ? w(r + t, 0) : x(t, r), t = n === u ? r : n >> 0, a = t < 0 ? w(r + t, 0) : x(t, r); o < a; )
                i._setter(o, e),
                o += 1;
            return i
        }
    }),
    Object.defineProperty(L.prototype, "filter", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = [], r = arguments[1], o = 0; o < n; o++) {
                var a = t._getter(o);
                e.call(r, a, o, t) && i.push(a)
            }
            return new this.constructor(i)
        }
    }),
    Object.defineProperty(L.prototype, "find", {
        value: function(e) {
            var t = c(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = 1 < arguments.length ? arguments[1] : u, r = 0; r < n; ) {
                var o = t._getter(r)
                  , a = e.call(i, o, r, t);
                if (Boolean(a))
                    return o;
                ++r
            }
            return u
        }
    }),
    Object.defineProperty(L.prototype, "findIndex", {
        value: function(e) {
            var t = c(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = 1 < arguments.length ? arguments[1] : u, r = 0; r < n; ) {
                var o = t._getter(r)
                  , o = e.call(i, o, r, t);
                if (Boolean(o))
                    return r;
                ++r
            }
            return -1
        }
    }),
    Object.defineProperty(L.prototype, "forEach", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = arguments[1], r = 0; r < n; r++)
                e.call(i, t._getter(r), r, t)
        }
    }),
    Object.defineProperty(L.prototype, "indexOf", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (0 != n) {
                var i = 0;
                if (0 < arguments.length && ((i = Number(arguments[1])) != i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -1 / 0 && (i = (0 < i || -1) * _(b(i)))),
                !(n <= i))
                    for (var r = 0 <= i ? i : w(n - b(i), 0); r < n; r++)
                        if (t._getter(r) === e)
                            return r
            }
            return -1
        }
    }),
    Object.defineProperty(L.prototype, "join", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            for (var t = Object(this), n = t.length >>> 0, i = Array(n), r = 0; r < n; ++r)
                i[r] = t._getter(r);
            return i.join(e === u ? "," : e)
        }
    }),
    Object.defineProperty(L.prototype, "lastIndexOf", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (0 != n)
                for (var i = n, r = (1 < arguments.length && ((i = Number(arguments[1])) != i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -1 / 0 && (i = (0 < i || -1) * _(b(i)))),
                0 <= i ? x(i, n - 1) : n - b(i)); 0 <= r; r--)
                    if (t._getter(r) === e)
                        return r;
            return -1
        }
    }),
    Object.defineProperty(L.prototype, "map", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = [], r = (i.length = n,
            arguments[1]), o = 0; o < n; o++)
                i[o] = e.call(r, t._getter(o), o, t);
            return new this.constructor(i)
        }
    }),
    Object.defineProperty(L.prototype, "reduce", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            if (0 == n && 1 === arguments.length)
                throw TypeError();
            for (var i = 0, r = 2 <= arguments.length ? arguments[1] : t._getter(i++); i < n; )
                r = e.call(u, r, t._getter(i), i, t),
                i++;
            return r
        }
    }),
    Object.defineProperty(L.prototype, "reduceRight", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            if (0 == n && 1 === arguments.length)
                throw TypeError();
            for (var i = n - 1, r = 2 <= arguments.length ? arguments[1] : t._getter(i--); 0 <= i; )
                r = e.call(u, r, t._getter(i), i, t),
                i--;
            return r
        }
    }),
    Object.defineProperty(L.prototype, "reverse", {
        value: function() {
            if (this === u || null === this)
                throw TypeError();
            for (var e = Object(this), t = e.length >>> 0, n = _(t / 2), i = 0, r = t - 1; i < n; ++i,
            --r) {
                var o = e._getter(i);
                e._setter(i, e._getter(r)),
                e._setter(r, o)
            }
            return e
        }
    }),
    Object.defineProperty(L.prototype, "set", {
        value: function(e, t) {
            if (arguments.length < 1)
                throw SyntaxError("Not enough arguments");
            var n, i, r, o, a, s, l, u, c, p;
            if ("object" == typeof e && e.constructor === this.constructor) {
                if ((r = t >>> 0) + (n = e).length > this.length)
                    throw RangeError("Offset plus length of array is out of range");
                if (u = this.byteOffset + r * this.BYTES_PER_ELEMENT,
                c = n.length * this.BYTES_PER_ELEMENT,
                n.buffer === this.buffer) {
                    for (p = [],
                    a = 0,
                    s = n.byteOffset; a < c; a += 1,
                    s += 1)
                        p[a] = n.buffer._bytes[s];
                    for (a = 0,
                    l = u; a < c; a += 1,
                    l += 1)
                        this.buffer._bytes[l] = p[a]
                } else
                    for (a = 0,
                    s = n.byteOffset,
                    l = u; a < c; a += 1,
                    s += 1,
                    l += 1)
                        this.buffer._bytes[l] = n.buffer._bytes[s]
            } else {
                if ("object" != typeof e || void 0 === e.length)
                    throw TypeError("Unexpected argument type(s)");
                if ((r = t >>> 0) + (o = (i = e).length >>> 0) > this.length)
                    throw RangeError("Offset plus length of array is out of range");
                for (a = 0; a < o; a += 1)
                    s = i[a],
                    this._setter(r + a, Number(s))
            }
        }
    }),
    Object.defineProperty(L.prototype, "slice", {
        value: function(e, t) {
            for (var n = c(this), i = n.length >>> 0, e = e >> 0, r = e < 0 ? w(i + e, 0) : x(e, i), e = t === u ? i : t >> 0, o = e < 0 ? w(i + e, 0) : x(e, i), a = new n.constructor(o - r), s = 0; r < o; ) {
                var l = n._getter(r);
                a._setter(s, l),
                ++r,
                ++s
            }
            return a
        }
    }),
    Object.defineProperty(L.prototype, "some", {
        value: function(e) {
            if (this === u || null === this)
                throw TypeError();
            var t = Object(this)
              , n = t.length >>> 0;
            if (!s(e))
                throw TypeError();
            for (var i = arguments[1], r = 0; r < n; r++)
                if (e.call(i, t._getter(r), r, t))
                    return !0;
            return !1
        }
    }),
    Object.defineProperty(L.prototype, "sort", {
        value: function(n) {
            if (this === u || null === this)
                throw TypeError();
            for (var e = Object(this), t = e.length >>> 0, i = Array(t), r = 0; r < t; ++r)
                i[r] = e._getter(r);
            for (i.sort(function(e, t) {
                return e != e && t != t ? 0 : e != e ? 1 : t != t ? -1 : n !== u ? n(e, t) : e < t ? -1 : t < e ? 1 : 0
            }),
            r = 0; r < t; ++r)
                e._setter(r, i[r]);
            return e
        }
    }),
    Object.defineProperty(L.prototype, "subarray", {
        value: function(e, t) {
            function n(e, t, n) {
                return e < t ? t : n < e ? n : e
            }
            e >>= 0,
            t >>= 0,
            arguments.length < 1 && (e = 0),
            arguments.length < 2 && (t = this.length),
            e < 0 && (e = this.length + e),
            t < 0 && (t = this.length + t),
            e = n(e, 0, this.length);
            t = (t = n(t, 0, this.length)) - e;
            return new this.constructor(this.buffer,this.byteOffset + e * this.BYTES_PER_ELEMENT,t = t < 0 ? 0 : t)
        }
    }),
    y = D(1, B, U),
    n = D(1, q, E),
    l = D(1, $, E),
    p = D(2, V, W),
    f = D(2, z, Q),
    d = D(4, J, G),
    h = D(4, Y, X),
    g = D(4, te, ee),
    m = D(8, Z, K),
    t.Int8Array = t.Int8Array || y,
    t.Uint8Array = t.Uint8Array || n,
    t.Uint8ClampedArray = t.Uint8ClampedArray || l,
    t.Int16Array = t.Int16Array || p,
    t.Uint16Array = t.Uint16Array || f,
    t.Int32Array = t.Int32Array || d,
    t.Uint32Array = t.Uint32Array || h,
    t.Float32Array = t.Float32Array || g,
    t.Float64Array = t.Float64Array || m,
    y = new Uint16Array([4660]),
    v = 18 === M(new Uint8Array(y.buffer), 0),
    Object.defineProperty(P.prototype, "getUint8", {
        value: A(Uint8Array)
    }),
    Object.defineProperty(P.prototype, "getInt8", {
        value: A(Int8Array)
    }),
    Object.defineProperty(P.prototype, "getUint16", {
        value: A(Uint16Array)
    }),
    Object.defineProperty(P.prototype, "getInt16", {
        value: A(Int16Array)
    }),
    Object.defineProperty(P.prototype, "getUint32", {
        value: A(Uint32Array)
    }),
    Object.defineProperty(P.prototype, "getInt32", {
        value: A(Int32Array)
    }),
    Object.defineProperty(P.prototype, "getFloat32", {
        value: A(Float32Array)
    }),
    Object.defineProperty(P.prototype, "getFloat64", {
        value: A(Float64Array)
    }),
    Object.defineProperty(P.prototype, "setUint8", {
        value: F(Uint8Array)
    }),
    Object.defineProperty(P.prototype, "setInt8", {
        value: F(Int8Array)
    }),
    Object.defineProperty(P.prototype, "setUint16", {
        value: F(Uint16Array)
    }),
    Object.defineProperty(P.prototype, "setInt16", {
        value: F(Int16Array)
    }),
    Object.defineProperty(P.prototype, "setUint32", {
        value: F(Uint32Array)
    }),
    Object.defineProperty(P.prototype, "setInt32", {
        value: F(Int32Array)
    }),
    Object.defineProperty(P.prototype, "setFloat32", {
        value: F(Float32Array)
    }),
    Object.defineProperty(P.prototype, "setFloat64", {
        value: F(Float64Array)
    }),
    t.DataView = t.DataView || P
}(self),
!function(e) {
    var t;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self),
    t.Promise = e())
}(function() {
    var e, t, n;
    return function i(r, o, a) {
        function s(n, e) {
            if (!o[n]) {
                if (!r[n]) {
                    var t = "function" == typeof _dereq_ && _dereq_;
                    if (!e && t)
                        return t(n, !0);
                    if (l)
                        return l(n, !0);
                    e = new Error("Cannot find module '" + n + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                t = o[n] = {
                    exports: {}
                };
                r[n][0].call(t.exports, function(e) {
                    var t = r[n][1][e];
                    return s(t || e)
                }, t, t.exports, i, r, o, a)
            }
            return o[n].exports
        }
        for (var l = "function" == typeof _dereq_ && _dereq_, e = 0; e < a.length; e++)
            s(a[e]);
        return s
    }({
        1: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                var n = e._SomePromiseArray;
                function t(e) {
                    var e = new n(e)
                      , t = e.promise();
                    return e.setHowMany(1),
                    e.setUnwrap(),
                    e.init(),
                    t
                }
                e.any = t,
                e.prototype.any = function() {
                    return t(this)
                }
            }
        }
        , {}],
        2: [function(e, t, n) {
            "use strict";
            var i;
            try {
                throw new Error
            } catch (e) {
                i = e
            }
            var r = e("./schedule")
              , o = e("./queue")
              , a = e("./util");
            function s() {
                this._customScheduler = !1,
                this._isTickUsed = !1,
                this._lateQueue = new o(16),
                this._normalQueue = new o(16),
                this._haveDrainedQueues = !1,
                this._trampolineEnabled = !0;
                var e = this;
                this.drainQueues = function() {
                    e._drainQueues()
                }
                ,
                this._schedule = r
            }
            function l(e, t, n) {
                this._lateQueue.push(e, t, n),
                this._queueTick()
            }
            function u(e, t, n) {
                this._normalQueue.push(e, t, n),
                this._queueTick()
            }
            function c(e) {
                this._normalQueue._pushOne(e),
                this._queueTick()
            }
            function p(e) {
                for (; 0 < e.length(); ) {
                    t = i = n = void 0;
                    var t, n = e, i = n.shift();
                    "function" != typeof i ? i._settlePromises() : (t = n.shift(),
                    n = n.shift(),
                    i.call(t, n))
                }
            }
            s.prototype.setScheduler = function(e) {
                var t = this._schedule;
                return this._schedule = e,
                this._customScheduler = !0,
                t
            }
            ,
            s.prototype.hasCustomScheduler = function() {
                return this._customScheduler
            }
            ,
            s.prototype.enableTrampoline = function() {
                this._trampolineEnabled = !0
            }
            ,
            s.prototype.disableTrampolineIfNecessary = function() {
                a.hasDevTools && (this._trampolineEnabled = !1)
            }
            ,
            s.prototype.haveItemsQueued = function() {
                return this._isTickUsed || this._haveDrainedQueues
            }
            ,
            s.prototype.fatalError = function(e, t) {
                t ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"),
                process.exit(2)) : this.throwLater(e)
            }
            ,
            s.prototype.throwLater = function(e, t) {
                if (1 === arguments.length && (t = e,
                e = function() {
                    throw t
                }
                ),
                "undefined" != typeof setTimeout)
                    setTimeout(function() {
                        e(t)
                    }, 0);
                else
                    try {
                        this._schedule(function() {
                            e(t)
                        })
                    } catch (e) {
                        throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                    }
            }
            ,
            a.hasDevTools ? (s.prototype.invokeLater = function(e, t, n) {
                this._trampolineEnabled ? l.call(this, e, t, n) : this._schedule(function() {
                    setTimeout(function() {
                        e.call(t, n)
                    }, 100)
                })
            }
            ,
            s.prototype.invoke = function(e, t, n) {
                this._trampolineEnabled ? u.call(this, e, t, n) : this._schedule(function() {
                    e.call(t, n)
                })
            }
            ,
            s.prototype.settlePromises = function(e) {
                this._trampolineEnabled ? c.call(this, e) : this._schedule(function() {
                    e._settlePromises()
                })
            }
            ) : (s.prototype.invokeLater = l,
            s.prototype.invoke = u,
            s.prototype.settlePromises = c),
            s.prototype._drainQueues = function() {
                p(this._normalQueue),
                this._reset(),
                this._haveDrainedQueues = !0,
                p(this._lateQueue)
            }
            ,
            s.prototype._queueTick = function() {
                this._isTickUsed || (this._isTickUsed = !0,
                this._schedule(this.drainQueues))
            }
            ,
            s.prototype._reset = function() {
                this._isTickUsed = !1
            }
            ,
            t.exports = s,
            t.exports.firstLineError = i
        }
        , {
            "./queue": 26,
            "./schedule": 29,
            "./util": 36
        }],
        3: [function(e, t, n) {
            "use strict";
            t.exports = function(r, o, a, s) {
                function n(e, t) {
                    this._reject(t)
                }
                function l(e, t) {
                    t.promiseRejectionQueued = !0,
                    t.bindingPromise._then(n, n, null, this, e)
                }
                function u(e, t) {
                    0 == (50397184 & this._bitField) && this._resolveCallback(t.target)
                }
                function c(e, t) {
                    t.promiseRejectionQueued || this._reject(e)
                }
                var p = !1;
                r.prototype.bind = function(e) {
                    p || (p = !0,
                    r.prototype._propagateFrom = s.propagateFromFunction(),
                    r.prototype._boundValue = s.boundValueFunction());
                    var t, e = a(e), n = new r(o), i = (n._propagateFrom(this, 1),
                    this._target());
                    return n._setBoundTo(e),
                    e instanceof r ? (i._then(o, l, void 0, n, t = {
                        promiseRejectionQueued: !1,
                        promise: n,
                        target: i,
                        bindingPromise: e
                    }),
                    e._then(u, c, void 0, n, t),
                    n._setOnCancel(e)) : n._resolveCallback(i),
                    n
                }
                ,
                r.prototype._setBoundTo = function(e) {
                    void 0 !== e ? (this._bitField = 2097152 | this._bitField,
                    this._boundTo = e) : this._bitField = -2097153 & this._bitField
                }
                ,
                r.prototype._isBound = function() {
                    return 2097152 == (2097152 & this._bitField)
                }
                ,
                r.bind = function(e, t) {
                    return r.resolve(t).bind(e)
                }
            }
        }
        , {}],
        4: [function(e, t, n) {
            "use strict";
            var i;
            "undefined" != typeof Promise && (i = Promise);
            var r = e("./promise")();
            r.noConflict = function() {
                try {
                    Promise === r && (Promise = i)
                } catch (e) {}
                return r
            }
            ,
            t.exports = r
        }
        , {
            "./promise": 22
        }],
        5: [function(e, t, n) {
            "use strict";
            var i, r = Object.create;
            r && (i = r(null),
            r = r(null),
            i[" size"] = r[" size"] = 0),
            t.exports = function(i) {
                var n, r = e("./util"), o = r.canEvaluate;
                r.isIdentifier;
                function t(e, t) {
                    var n;
                    if ("function" != typeof (n = null != e ? e[t] : n))
                        throw e = "Object " + r.classString(e) + " has no method '" + r.toString(t) + "'",
                        new i.TypeError(e);
                    return n
                }
                function a(e) {
                    return t(e, this.pop()).apply(e, this)
                }
                function s(e) {
                    return e[this]
                }
                function l(e) {
                    var t = +this;
                    return e[t = t < 0 ? Math.max(0, t + e.length) : t]
                }
                i.prototype.call = function(e) {
                    var t = [].slice.call(arguments, 1);
                    return t.push(e),
                    this._then(a, void 0, void 0, t, void 0)
                }
                ,
                i.prototype.get = function(e) {
                    var t;
                    return t = "number" == typeof e ? l : o && null !== (t = n(e)) ? t : s,
                    this._then(t, void 0, void 0, e, void 0)
                }
            }
        }
        , {
            "./util": 36
        }],
        6: [function(l, e, t) {
            "use strict";
            e.exports = function(e, t, n, i) {
                var r = l("./util")
                  , o = r.tryCatch
                  , a = r.errorObj
                  , s = e._async;
                e.prototype.break = e.prototype.cancel = function() {
                    if (!i.cancellation())
                        return this._warn("cancellation is disabled");
                    for (var e = this, t = e; e._isCancellable(); ) {
                        if (!e._cancelBy(t)) {
                            t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                            break
                        }
                        var n = e._cancellationParent;
                        if (null == n || !n._isCancellable()) {
                            e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                            break
                        }
                        e._isFollowing() && e._followee().cancel(),
                        e._setWillBeCancelled(),
                        t = e,
                        e = n
                    }
                }
                ,
                e.prototype._branchHasCancelled = function() {
                    this._branchesRemainingToCancel--
                }
                ,
                e.prototype._enoughBranchesHaveCancelled = function() {
                    return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                }
                ,
                e.prototype._cancelBy = function(e) {
                    return e === this ? (this._branchesRemainingToCancel = 0,
                    this._invokeOnCancel(),
                    !0) : (this._branchHasCancelled(),
                    !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(),
                    !0))
                }
                ,
                e.prototype._cancelBranched = function() {
                    this._enoughBranchesHaveCancelled() && this._cancel()
                }
                ,
                e.prototype._cancel = function() {
                    this._isCancellable() && (this._setCancelled(),
                    s.invoke(this._cancelPromises, this, void 0))
                }
                ,
                e.prototype._cancelPromises = function() {
                    0 < this._length() && this._settlePromises()
                }
                ,
                e.prototype._unsetOnCancel = function() {
                    this._onCancelField = void 0
                }
                ,
                e.prototype._isCancellable = function() {
                    return this.isPending() && !this._isCancelled()
                }
                ,
                e.prototype.isCancellable = function() {
                    return this.isPending() && !this.isCancelled()
                }
                ,
                e.prototype._doInvokeOnCancel = function(e, t) {
                    var n;
                    if (r.isArray(e))
                        for (var i = 0; i < e.length; ++i)
                            this._doInvokeOnCancel(e[i], t);
                    else
                        void 0 !== e && ("function" == typeof e ? t || (n = o(e).call(this._boundValue())) === a && (this._attachExtraTrace(n.e),
                        s.throwLater(n.e)) : e._resultCancelled(this))
                }
                ,
                e.prototype._invokeOnCancel = function() {
                    var e = this._onCancel();
                    this._unsetOnCancel(),
                    s.invoke(this._doInvokeOnCancel, this, e)
                }
                ,
                e.prototype._invokeInternalOnCancel = function() {
                    this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0),
                    this._unsetOnCancel())
                }
                ,
                e.prototype._resultCancelled = function() {
                    this.cancel()
                }
            }
        }
        , {
            "./util": 36
        }],
        7: [function(e, t, n) {
            "use strict";
            t.exports = function(p) {
                var f = e("./util")
                  , d = e("./es5").keys
                  , h = f.tryCatch
                  , g = f.errorObj;
                return function(l, u, c) {
                    return function(e) {
                        var t = c._boundValue();
                        e: for (var n = 0; n < l.length; ++n) {
                            var i = l[n];
                            if (i === Error || null != i && i.prototype instanceof Error) {
                                if (e instanceof i)
                                    return h(u).call(t, e)
                            } else if ("function" == typeof i) {
                                var r = h(i).call(t, e);
                                if (r === g)
                                    return r;
                                if (r)
                                    return h(u).call(t, e)
                            } else if (f.isObject(e)) {
                                for (var o = d(i), a = 0; a < o.length; ++a) {
                                    var s = o[a];
                                    if (i[s] != e[s])
                                        continue e
                                }
                                return h(u).call(t, e)
                            }
                        }
                        return p
                    }
                }
            }
        }
        , {
            "./es5": 13,
            "./util": 36
        }],
        8: [function(e, t, n) {
            "use strict";
            t.exports = function(o) {
                var a = !1
                  , n = [];
                function s() {
                    this._trace = new s.CapturedTrace(l())
                }
                function l() {
                    var e = n.length - 1;
                    if (0 <= e)
                        return n[e]
                }
                return o.prototype._promiseCreated = function() {}
                ,
                o.prototype._pushContext = function() {}
                ,
                o.prototype._popContext = function() {
                    return null
                }
                ,
                o._peekContext = o.prototype._peekContext = function() {}
                ,
                s.prototype._pushContext = function() {
                    void 0 !== this._trace && (this._trace._promiseCreated = null,
                    n.push(this._trace))
                }
                ,
                s.prototype._popContext = function() {
                    var e, t;
                    return void 0 !== this._trace ? (t = (e = n.pop())._promiseCreated,
                    e._promiseCreated = null,
                    t) : null
                }
                ,
                s.CapturedTrace = null,
                s.create = function() {
                    if (a)
                        return new s
                }
                ,
                s.deactivateLongStackTraces = function() {}
                ,
                s.activateLongStackTraces = function() {
                    var e = o.prototype._pushContext
                      , t = o.prototype._popContext
                      , n = o._peekContext
                      , i = o.prototype._peekContext
                      , r = o.prototype._promiseCreated;
                    s.deactivateLongStackTraces = function() {
                        o.prototype._pushContext = e,
                        o.prototype._popContext = t,
                        o._peekContext = n,
                        o.prototype._peekContext = i,
                        o.prototype._promiseCreated = r,
                        a = !1
                    }
                    ,
                    a = !0,
                    o.prototype._pushContext = s.prototype._pushContext,
                    o.prototype._popContext = s.prototype._popContext,
                    o._peekContext = o.prototype._peekContext = l,
                    o.prototype._promiseCreated = function() {
                        var e = this._peekContext();
                        e && null == e._promiseCreated && (e._promiseCreated = this)
                    }
                }
                ,
                s
            }
        }
        , {}],
        9: [function(X, e, t) {
            "use strict";
            e.exports = function(i, r) {
                var n, o, a, s = i._getDomain, l = i._async, N = X("./errors").Warning, m = X("./util"), u = X("./es5"), R = m.canAttachTrace, c = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, H = /\((?:timers\.js):\d+:\d+\)/, I = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, p = null, f = null, d = !1, e = !(0 == m.env("BLUEBIRD_DEBUG")), t = !(0 == m.env("BLUEBIRD_WARNINGS") || !e && !m.env("BLUEBIRD_WARNINGS")), e = !(0 == m.env("BLUEBIRD_LONG_STACK_TRACES") || !e && !m.env("BLUEBIRD_LONG_STACK_TRACES")), h = 0 != m.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (t || !!m.env("BLUEBIRD_W_FORGOTTEN_RETURN")), g = (i.prototype.suppressUnhandledRejections = function() {
                    var e = this._target();
                    e._bitField = -1048577 & e._bitField | 524288
                }
                ,
                i.prototype._ensurePossibleRejectionHandled = function() {
                    var e;
                    0 == (524288 & this._bitField) && (this._setRejectionIsUnhandled(),
                    e = this,
                    setTimeout(function() {
                        e._notifyUnhandledRejection()
                    }, 1))
                }
                ,
                i.prototype._notifyUnhandledRejectionIsHandled = function() {
                    j("rejectionHandled", n, void 0, this)
                }
                ,
                i.prototype._setReturnedNonUndefined = function() {
                    this._bitField = 268435456 | this._bitField
                }
                ,
                i.prototype._returnedNonUndefined = function() {
                    return 0 != (268435456 & this._bitField)
                }
                ,
                i.prototype._notifyUnhandledRejection = function() {
                    var e;
                    this._isRejectionUnhandled() && (e = this._settledValue(),
                    this._setUnhandledRejectionIsNotified(),
                    j("unhandledRejection", o, e, this))
                }
                ,
                i.prototype._setUnhandledRejectionIsNotified = function() {
                    this._bitField = 262144 | this._bitField
                }
                ,
                i.prototype._unsetUnhandledRejectionIsNotified = function() {
                    this._bitField = -262145 & this._bitField
                }
                ,
                i.prototype._isUnhandledRejectionNotified = function() {
                    return 0 < (262144 & this._bitField)
                }
                ,
                i.prototype._setRejectionIsUnhandled = function() {
                    this._bitField = 1048576 | this._bitField
                }
                ,
                i.prototype._unsetRejectionIsUnhandled = function() {
                    this._bitField = -1048577 & this._bitField,
                    this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(),
                    this._notifyUnhandledRejectionIsHandled())
                }
                ,
                i.prototype._isRejectionUnhandled = function() {
                    return 0 < (1048576 & this._bitField)
                }
                ,
                i.prototype._warn = function(e, t, n) {
                    return k(e, t, n || this)
                }
                ,
                i.onPossiblyUnhandledRejection = function(e) {
                    var t = s();
                    o = "function" == typeof e ? null === t ? e : m.domainBind(t, e) : void 0
                }
                ,
                i.onUnhandledRejectionHandled = function(e) {
                    var t = s();
                    n = "function" == typeof e ? null === t ? e : m.domainBind(t, e) : void 0
                }
                ,
                function() {}
                ), y = (i.longStackTraces = function() {
                    if (l.haveItemsQueued() && !F.longStackTraces)
                        throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    var e, t, n;
                    !F.longStackTraces && L() && (e = i.prototype._captureStackTrace,
                    t = i.prototype._attachExtraTrace,
                    n = i.prototype._dereferenceTrace,
                    F.longStackTraces = !0,
                    g = function() {
                        if (l.haveItemsQueued() && !F.longStackTraces)
                            throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                        i.prototype._captureStackTrace = e,
                        i.prototype._attachExtraTrace = t,
                        i.prototype._dereferenceTrace = n,
                        r.deactivateLongStackTraces(),
                        l.enableTrampoline(),
                        F.longStackTraces = !1
                    }
                    ,
                    i.prototype._captureStackTrace = Q,
                    i.prototype._attachExtraTrace = J,
                    i.prototype._dereferenceTrace = G,
                    r.activateLongStackTraces(),
                    l.disableTrampolineIfNecessary())
                }
                ,
                i.hasLongStackTraces = function() {
                    return F.longStackTraces && L()
                }
                ,
                function() {
                    try {
                        var e;
                        return "function" == typeof CustomEvent ? (e = new CustomEvent("CustomEvent"),
                        m.global.dispatchEvent(e),
                        function(e, t) {
                            var n = {
                                detail: t,
                                cancelable: !0
                            }
                              , t = (u.defineProperty(n, "promise", {
                                value: t.promise
                            }),
                            u.defineProperty(n, "reason", {
                                value: t.reason
                            }),
                            new CustomEvent(e.toLowerCase(),n));
                            return !m.global.dispatchEvent(t)
                        }
                        ) : "function" == typeof Event ? (e = new Event("CustomEvent"),
                        m.global.dispatchEvent(e),
                        function(e, t) {
                            e = new Event(e.toLowerCase(),{
                                cancelable: !0
                            });
                            return e.detail = t,
                            u.defineProperty(e, "promise", {
                                value: t.promise
                            }),
                            u.defineProperty(e, "reason", {
                                value: t.reason
                            }),
                            !m.global.dispatchEvent(e)
                        }
                        ) : ((e = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}),
                        m.global.dispatchEvent(e),
                        function(e, t) {
                            var n = document.createEvent("CustomEvent");
                            return n.initCustomEvent(e.toLowerCase(), !1, !0, t),
                            !m.global.dispatchEvent(n)
                        }
                        )
                    } catch (e) {}
                    return function() {
                        return !1
                    }
                }()), v = m.isNode ? function() {
                    return process.emit.apply(process, arguments)
                }
                : m.global ? function(e) {
                    e = "on" + e.toLowerCase(),
                    e = m.global[e];
                    return !!e && (e.apply(m.global, [].slice.call(arguments, 1)),
                    !0)
                }
                : function() {
                    return !1
                }
                ;
                function b(e, t) {
                    return {
                        promise: t
                    }
                }
                var B = {
                    promiseCreated: b,
                    promiseFulfilled: b,
                    promiseRejected: b,
                    promiseResolved: b,
                    promiseCancelled: b,
                    promiseChained: function(e, t, n) {
                        return {
                            promise: t,
                            child: n
                        }
                    },
                    warning: function(e, t) {
                        return {
                            warning: t
                        }
                    },
                    unhandledRejection: function(e, t, n) {
                        return {
                            reason: t,
                            promise: n
                        }
                    },
                    rejectionHandled: b
                }
                  , _ = function(e) {
                    var t = !1;
                    try {
                        t = v.apply(null, arguments)
                    } catch (e) {
                        l.throwLater(e),
                        t = !0
                    }
                    var n = !1;
                    try {
                        n = y(e, B[e].apply(null, arguments))
                    } catch (e) {
                        l.throwLater(e),
                        n = !0
                    }
                    return n || t
                };
                function w() {
                    return !1
                }
                function U(e, t, n) {
                    var i = this;
                    try {
                        e(t, n, function(e) {
                            if ("function" != typeof e)
                                throw new TypeError("onCancel must be a function, got: " + m.toString(e));
                            i._attachCancellationCallback(e)
                        })
                    } catch (e) {
                        return e
                    }
                }
                function q(e) {
                    if (!this._isCancellable())
                        return this;
                    var t = this._onCancel();
                    void 0 !== t ? m.isArray(t) ? t.push(e) : this._setOnCancel([t, e]) : this._setOnCancel(e)
                }
                function $() {
                    return this._onCancelField
                }
                function V(e) {
                    this._onCancelField = e
                }
                function W() {
                    this._cancellationParent = void 0,
                    this._onCancelField = void 0
                }
                function x(e, t) {
                    var n;
                    0 != (1 & t) && (n = (this._cancellationParent = e)._branchesRemainingToCancel,
                    e._branchesRemainingToCancel = (n = void 0 === n ? 0 : n) + 1),
                    0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                }
                i.config = function(e) {
                    var t;
                    if ("longStackTraces"in (e = Object(e)) && (e.longStackTraces ? i.longStackTraces() : !e.longStackTraces && i.hasLongStackTraces() && g()),
                    "warnings"in e && (t = e.warnings,
                    F.warnings = !!t,
                    h = F.warnings,
                    m.isObject(t)) && "wForgottenReturn"in t && (h = !!t.wForgottenReturn),
                    "cancellation"in e && e.cancellation && !F.cancellation) {
                        if (l.haveItemsQueued())
                            throw new Error("cannot enable cancellation after promises are in use");
                        i.prototype._clearCancellationData = W,
                        i.prototype._propagateFrom = x,
                        i.prototype._onCancel = $,
                        i.prototype._setOnCancel = V,
                        i.prototype._attachCancellationCallback = q,
                        i.prototype._execute = U,
                        T = x,
                        F.cancellation = !0
                    }
                    return "monitoring"in e && (e.monitoring && !F.monitoring ? (F.monitoring = !0,
                    i.prototype._fireEvent = _) : !e.monitoring && F.monitoring && (F.monitoring = !1,
                    i.prototype._fireEvent = w)),
                    i
                }
                ,
                i.prototype._fireEvent = w,
                i.prototype._execute = function(e, t, n) {
                    try {
                        e(t, n)
                    } catch (e) {
                        return e
                    }
                }
                ,
                i.prototype._onCancel = function() {}
                ,
                i.prototype._setOnCancel = function(e) {}
                ,
                i.prototype._attachCancellationCallback = function(e) {}
                ,
                i.prototype._captureStackTrace = function() {}
                ,
                i.prototype._attachExtraTrace = function() {}
                ,
                i.prototype._dereferenceTrace = function() {}
                ,
                i.prototype._clearCancellationData = function() {}
                ,
                i.prototype._propagateFrom = function(e, t) {}
                ;
                var T = function(e, t) {
                    0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                };
                function z() {
                    var e = this._boundTo;
                    return void 0 !== e && e instanceof i ? e.isFulfilled() ? e.value() : void 0 : e
                }
                function Q() {
                    this._trace = new P(this._peekContext())
                }
                function J(e, t) {
                    var n;
                    R(e) && (void 0 !== (n = void 0 !== (n = this._trace) && t ? n._parent : n) ? n.attachExtraTrace(e) : e.__stackCleaned__ || (t = E(e),
                    m.notEnumerableProp(e, "stack", t.message + "\n" + t.stack.join("\n")),
                    m.notEnumerableProp(e, "__stackCleaned__", !0)))
                }
                function G() {
                    this._trace = void 0
                }
                function k(e, t, n) {
                    F.warnings && (e = new N(e),
                    t ? n._attachExtraTrace(e) : F.longStackTraces && (t = i._peekContext()) ? t.attachExtraTrace(e) : (n = E(e),
                    e.stack = n.message + "\n" + n.stack.join("\n")),
                    _("warning", e) || C(e, "", !0))
                }
                function S(e) {
                    for (var t = [], n = 0; n < e.length; ++n) {
                        var i = e[n]
                          , r = "    (No stack trace)" === i || p.test(i)
                          , o = r && D(i);
                        r && !o && (d && " " !== i.charAt(0) && (i = "    " + i),
                        t.push(i))
                    }
                    return t
                }
                function E(e) {
                    var t = e.stack
                      , n = e.toString()
                      , t = "string" == typeof t && 0 < t.length ? function(e) {
                        for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
                            var i = t[n];
                            if ("    (No stack trace)" === i || p.test(i))
                                break
                        }
                        return t = 0 < n && "SyntaxError" != e.name ? t.slice(n) : t
                    }(e) : ["    (No stack trace)"];
                    return {
                        message: n,
                        stack: "SyntaxError" == e.name ? t : S(t)
                    }
                }
                function C(e, t, n) {
                    var i;
                    "undefined" != typeof console && (i = m.isObject(e) ? (i = e.stack,
                    t + f(i, e)) : t + String(e),
                    "function" == typeof a ? a(i, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(i))
                }
                function j(e, t, n, i) {
                    var r = !1;
                    try {
                        "function" == typeof t && (r = !0,
                        "rejectionHandled" === e ? t(i) : t(n, i))
                    } catch (e) {
                        l.throwLater(e)
                    }
                    "unhandledRejection" === e ? _(e, n, i) || r || C(n, "Unhandled rejection ") : _(e, i)
                }
                function O(e) {
                    if ("function" == typeof e)
                        t = "[function " + (e.name || "anonymous") + "]";
                    else {
                        t = e && "function" == typeof e.toString ? e.toString() : m.toString(e);
                        if (/\[object [a-zA-Z0-9$_]+\]/.test(t))
                            try {
                                var t = JSON.stringify(e)
                            } catch (e) {}
                        0 === t.length && (t = "(empty array)")
                    }
                    return "(<" + function(e) {
                        if (e.length < 41)
                            return e;
                        return e.substr(0, 38) + "..."
                    }(t) + ">, no stack trace)"
                }
                function L() {
                    return "function" == typeof A
                }
                var D = function() {
                    return !1
                }
                  , Y = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                function M(e) {
                    e = e.match(Y);
                    if (e)
                        return {
                            fileName: e[1],
                            line: parseInt(e[2], 10)
                        }
                }
                function P(e) {
                    this._parent = e,
                    this._promisesCreated = 0;
                    e = this._length = 1 + (void 0 === e ? 0 : e._length);
                    A(this, P),
                    32 < e && this.uncycle()
                }
                m.inherits(P, Error),
                (r.CapturedTrace = P).prototype.uncycle = function() {
                    var e = this._length;
                    if (!(e < 2)) {
                        for (var t = [], n = {}, i = 0, r = this; void 0 !== r; ++i)
                            t.push(r),
                            r = r._parent;
                        for (i = (e = this._length = i) - 1; 0 <= i; --i) {
                            var o = t[i].stack;
                            void 0 === n[o] && (n[o] = i)
                        }
                        for (i = 0; i < e; ++i) {
                            var a = n[t[i].stack];
                            if (void 0 !== a && a !== i) {
                                0 < a && (t[a - 1]._parent = void 0,
                                t[a - 1]._length = 1),
                                t[i]._parent = void 0,
                                t[i]._length = 1;
                                for (var s = 0 < i ? t[i - 1] : this, l = (a < e - 1 ? (s._parent = t[a + 1],
                                s._parent.uncycle(),
                                s._length = s._parent._length + 1) : (s._parent = void 0,
                                s._length = 1),
                                s._length + 1), u = i - 2; 0 <= u; --u)
                                    t[u]._length = l,
                                    l++;
                                return
                            }
                        }
                    }
                }
                ,
                P.prototype.attachExtraTrace = function(e) {
                    if (!e.__stackCleaned__) {
                        this.uncycle();
                        for (var t = E(e), n = t.message, i = [t.stack], r = this; void 0 !== r; )
                            i.push(S(r.stack.split("\n"))),
                            r = r._parent;
                        for (var o = i, a = o[0], s = 1; s < o.length; ++s) {
                            for (var l = o[s], u = a.length - 1, c = a[u], p = -1, f = l.length - 1; 0 <= f; --f)
                                if (l[f] === c) {
                                    p = f;
                                    break
                                }
                            for (f = p; 0 <= f; --f) {
                                var d = l[f];
                                if (a[u] !== d)
                                    break;
                                a.pop(),
                                u--
                            }
                            a = l
                        }
                        for (var h = i, g = 0; g < h.length; ++g)
                            (0 === h[g].length || g + 1 < h.length && h[g][0] === h[g + 1][0]) && (h.splice(g, 1),
                            g--);
                        m.notEnumerableProp(e, "stack", function(e, t) {
                            for (var n = 0; n < t.length - 1; ++n)
                                t[n].push("From previous event:"),
                                t[n] = t[n].join("\n");
                            return n < t.length && (t[n] = t[n].join("\n")),
                            e + "\n" + t.join("\n")
                        }(n, i)),
                        m.notEnumerableProp(e, "__stackCleaned__", !0)
                    }
                }
                ;
                var A = function() {
                    function e(e, t) {
                        return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : O(t)
                    }
                    var n, t = /^\s*at\s*/;
                    if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace)
                        return Error.stackTraceLimit += 6,
                        p = t,
                        f = e,
                        n = Error.captureStackTrace,
                        D = function(e) {
                            return c.test(e)
                        }
                        ,
                        function(e, t) {
                            Error.stackTraceLimit += 6,
                            n(e, t),
                            Error.stackTraceLimit -= 6
                        }
                        ;
                    var i, r = new Error;
                    if ("string" == typeof r.stack && 0 <= r.stack.split("\n")[0].indexOf("stackDetection@"))
                        return p = /@/,
                        f = e,
                        d = !0,
                        function(e) {
                            e.stack = (new Error).stack
                        }
                        ;
                    try {
                        throw new Error
                    } catch (e) {
                        i = "stack"in e
                    }
                    return "stack"in r || !i || "number" != typeof Error.stackTraceLimit ? (f = function(e, t) {
                        return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? O(t) : t.toString()
                    }
                    ,
                    null) : (p = t,
                    f = e,
                    function(t) {
                        Error.stackTraceLimit += 6;
                        try {
                            throw new Error
                        } catch (e) {
                            t.stack = e.stack
                        }
                        Error.stackTraceLimit -= 6
                    }
                    )
                }()
                  , F = ("undefined" != typeof console && void 0 !== console.warn && (a = function(e) {
                    console.warn(e)
                }
                ,
                m.isNode && process.stderr.isTTY ? a = function(e, t) {
                    console.warn((t ? "[33m" : "[31m") + e + "[0m\n")
                }
                : m.isNode || "string" != typeof (new Error).stack || (a = function(e, t) {
                    console.warn("%c" + e, t ? "color: darkorange" : "color: red")
                }
                )),
                {
                    warnings: t,
                    longStackTraces: !1,
                    cancellation: !1,
                    monitoring: !1
                });
                return e && i.longStackTraces(),
                {
                    longStackTraces: function() {
                        return F.longStackTraces
                    },
                    warnings: function() {
                        return F.warnings
                    },
                    cancellation: function() {
                        return F.cancellation
                    },
                    monitoring: function() {
                        return F.monitoring
                    },
                    propagateFromFunction: function() {
                        return T
                    },
                    boundValueFunction: function() {
                        return z
                    },
                    checkForgottenReturns: function(e, t, n, i, r) {
                        if (void 0 === e && null !== t && h && (void 0 === r || !r._returnedNonUndefined()) && 0 != (65535 & i._bitField)) {
                            n && (n += " ");
                            var o = ""
                              , a = "";
                            if (t._trace) {
                                for (var s = t._trace.stack.split("\n"), l = S(s), u = l.length - 1; 0 <= u; --u) {
                                    var c = l[u];
                                    if (!H.test(c)) {
                                        c = c.match(I);
                                        c && (o = "at " + c[1] + ":" + c[2] + ":" + c[3] + " ");
                                        break
                                    }
                                }
                                if (0 < l.length)
                                    for (var p = l[0], u = 0; u < s.length; ++u)
                                        if (s[u] === p) {
                                            0 < u && (a = "\n" + s[u - 1]);
                                            break
                                        }
                            }
                            i._warn("a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + a, !0, t)
                        }
                    },
                    setBounds: function(e, t) {
                        if (L()) {
                            for (var n, i, r = (e.stack || "").split("\n"), o = (t.stack || "").split("\n"), a = -1, s = -1, l = 0; l < r.length; ++l)
                                if (u = M(r[l])) {
                                    n = u.fileName,
                                    a = u.line;
                                    break
                                }
                            for (var u, l = 0; l < o.length; ++l)
                                if (u = M(o[l])) {
                                    i = u.fileName,
                                    s = u.line;
                                    break
                                }
                            a < 0 || s < 0 || !n || !i || n !== i || s <= a || (D = function(e) {
                                return !!c.test(e) || !!((e = M(e)) && e.fileName === n && a <= e.line && e.line <= s)
                            }
                            )
                        }
                    },
                    warn: k,
                    deprecated: function(e, t) {
                        return e += " is deprecated and will be removed in a future version.",
                        t && (e += " Use " + t + " instead."),
                        k(e)
                    },
                    CapturedTrace: P,
                    fireDomEvent: y,
                    fireGlobalEvent: v
                }
            }
        }
        , {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
        }],
        10: [function(e, t, n) {
            "use strict";
            t.exports = function(n) {
                function i() {
                    return this.value
                }
                function r() {
                    throw this.reason
                }
                n.prototype.return = n.prototype.thenReturn = function(e) {
                    return e instanceof n && e.suppressUnhandledRejections(),
                    this._then(i, void 0, void 0, {
                        value: e
                    }, void 0)
                }
                ,
                n.prototype.throw = n.prototype.thenThrow = function(e) {
                    return this._then(r, void 0, void 0, {
                        reason: e
                    }, void 0)
                }
                ,
                n.prototype.catchThrow = function(e) {
                    var t;
                    return arguments.length <= 1 ? this._then(void 0, r, void 0, {
                        reason: e
                    }, void 0) : (t = arguments[1],
                    this.caught(e, function() {
                        throw t
                    }))
                }
                ,
                n.prototype.catchReturn = function(e) {
                    var t;
                    return arguments.length <= 1 ? (e instanceof n && e.suppressUnhandledRejections(),
                    this._then(void 0, i, void 0, {
                        value: e
                    }, void 0)) : ((t = arguments[1])instanceof n && t.suppressUnhandledRejections(),
                    this.caught(e, function() {
                        return t
                    }))
                }
            }
        }
        , {}],
        11: [function(e, t, n) {
            "use strict";
            t.exports = function(e, n) {
                var i = e.reduce
                  , t = e.all;
                function r() {
                    return t(this)
                }
                e.prototype.each = function(e) {
                    return i(this, e, n, 0)._then(r, void 0, void 0, this, void 0)
                }
                ,
                e.prototype.mapSeries = function(e) {
                    return i(this, e, n, n)
                }
                ,
                e.each = function(e, t) {
                    return i(e, t, n, 0)._then(r, void 0, void 0, e, void 0)
                }
                ,
                e.mapSeries = function(e, t) {
                    return i(e, t, n, n)
                }
            }
        }
        , {}],
        12: [function(e, t, n) {
            "use strict";
            var i, r, o = e("./es5"), a = o.freeze, e = e("./util"), s = e.inherits, l = e.notEnumerableProp;
            function u(t, n) {
                function i(e) {
                    if (!(this instanceof i))
                        return new i(e);
                    l(this, "message", "string" == typeof e ? e : n),
                    l(this, "name", t),
                    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
                }
                return s(i, Error),
                i
            }
            var e = u("Warning", "warning")
              , c = u("CancellationError", "cancellation error")
              , p = u("TimeoutError", "timeout error")
              , f = u("AggregateError", "aggregate error");
            try {
                i = TypeError,
                r = RangeError
            } catch (e) {
                i = u("TypeError", "type error"),
                r = u("RangeError", "range error")
            }
            for (var d = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), h = 0; h < d.length; ++h)
                "function" == typeof Array.prototype[d[h]] && (f.prototype[d[h]] = Array.prototype[d[h]]);
            o.defineProperty(f.prototype, "length", {
                value: 0,
                configurable: !1,
                writable: !0,
                enumerable: !0
            }),
            f.prototype.isOperational = !0;
            var g = 0;
            function m(e) {
                if (!(this instanceof m))
                    return new m(e);
                l(this, "name", "OperationalError"),
                l(this, "message", e),
                this.cause = e,
                this.isOperational = !0,
                e instanceof Error ? (l(this, "message", e.message),
                l(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
            }
            f.prototype.toString = function() {
                var e = "\n" + Array(4 * g + 1).join(" ") + "AggregateError of:\n";
                g++;
                for (var t = Array(4 * g + 1).join(" "), n = 0; n < this.length; ++n) {
                    for (var i = this[n] === this ? "[Circular AggregateError]" : this[n] + "", r = i.split("\n"), o = 0; o < r.length; ++o)
                        r[o] = t + r[o];
                    e += (i = r.join("\n")) + "\n"
                }
                return g--,
                e
            }
            ,
            s(m, Error);
            var y = Error.__BluebirdErrorTypes__;
            y || (y = a({
                CancellationError: c,
                TimeoutError: p,
                OperationalError: m,
                RejectionError: m,
                AggregateError: f
            }),
            o.defineProperty(Error, "__BluebirdErrorTypes__", {
                value: y,
                writable: !1,
                enumerable: !1,
                configurable: !1
            })),
            t.exports = {
                Error: Error,
                TypeError: i,
                RangeError: r,
                CancellationError: y.CancellationError,
                OperationalError: y.OperationalError,
                TimeoutError: y.TimeoutError,
                AggregateError: y.AggregateError,
                Warning: e
            }
        }
        , {
            "./es5": 13,
            "./util": 36
        }],
        13: [function(e, t, n) {
            var i, r, o, a = function() {
                "use strict";
                return void 0 === this
            }();
            a ? t.exports = {
                freeze: Object.freeze,
                defineProperty: Object.defineProperty,
                getDescriptor: Object.getOwnPropertyDescriptor,
                keys: Object.keys,
                names: Object.getOwnPropertyNames,
                getPrototypeOf: Object.getPrototypeOf,
                isArray: Array.isArray,
                isES5: a,
                propertyIsWritable: function(e, t) {
                    e = Object.getOwnPropertyDescriptor(e, t);
                    return !(e && !e.writable && !e.set)
                }
            } : (i = {}.hasOwnProperty,
            r = {}.toString,
            o = {}.constructor.prototype,
            t.exports = {
                isArray: function(e) {
                    try {
                        return "[object Array]" === r.call(e)
                    } catch (e) {
                        return !1
                    }
                },
                keys: t = function(e) {
                    var t, n = [];
                    for (t in e)
                        i.call(e, t) && n.push(t);
                    return n
                }
                ,
                names: t,
                defineProperty: function(e, t, n) {
                    return e[t] = n.value,
                    e
                },
                getDescriptor: function(e, t) {
                    return {
                        value: e[t]
                    }
                },
                freeze: function(e) {
                    return e
                },
                getPrototypeOf: function(e) {
                    try {
                        return Object(e).constructor.prototype
                    } catch (e) {
                        return o
                    }
                },
                isES5: a,
                propertyIsWritable: function() {
                    return !0
                }
            })
        }
        , {}],
        14: [function(e, t, n) {
            "use strict";
            t.exports = function(e, i) {
                var r = e.map;
                e.prototype.filter = function(e, t) {
                    return r(this, e, t, i)
                }
                ,
                e.filter = function(e, t, n) {
                    return r(e, t, n, i)
                }
            }
        }
        , {}],
        15: [function(e, t, n) {
            "use strict";
            t.exports = function(a, r, o) {
                var s = e("./util")
                  , l = a.CancellationError
                  , u = s.errorObj
                  , c = e("./catch_filter")(o);
                function p(e, t, n) {
                    this.promise = e,
                    this.type = t,
                    this.handler = n,
                    this.called = !1,
                    this.cancelPromise = null
                }
                function f(e) {
                    this.finallyHandler = e
                }
                function d(e, t) {
                    return null != e.cancelPromise && (1 < arguments.length ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(),
                    e.cancelPromise = null,
                    1)
                }
                function h() {
                    return m.call(this, this.promise._target()._settledValue())
                }
                function g(e) {
                    if (!d(this, e))
                        return u.e = e,
                        u
                }
                function m(e) {
                    var t = this.promise
                      , n = this.handler;
                    if (!this.called) {
                        this.called = !0;
                        n = this.isFinallyHandler() ? n.call(t._boundValue()) : n.call(t._boundValue(), e);
                        if (n === o)
                            return n;
                        if (void 0 !== n) {
                            t._setReturnedNonUndefined();
                            var i, n = r(n, t);
                            if (n instanceof a) {
                                if (null != this.cancelPromise) {
                                    if (n._isCancelled())
                                        return i = new l("late cancellation observer"),
                                        t._attachExtraTrace(i),
                                        u.e = i,
                                        u;
                                    n.isPending() && n._attachCancellationCallback(new f(this))
                                }
                                return n._then(h, g, void 0, this, void 0)
                            }
                        }
                    }
                    return t.isRejected() ? (d(this),
                    u.e = e,
                    u) : (d(this),
                    e)
                }
                return p.prototype.isFinallyHandler = function() {
                    return 0 === this.type
                }
                ,
                f.prototype._resultCancelled = function() {
                    d(this.finallyHandler)
                }
                ,
                a.prototype._passThrough = function(e, t, n, i) {
                    return "function" != typeof e ? this.then() : this._then(n, i, void 0, new p(this,t,e), void 0)
                }
                ,
                a.prototype.lastly = a.prototype.finally = function(e) {
                    return this._passThrough(e, 0, m, m)
                }
                ,
                a.prototype.tap = function(e) {
                    return this._passThrough(e, 1, m)
                }
                ,
                a.prototype.tapCatch = function(e) {
                    var t = arguments.length;
                    if (1 === t)
                        return this._passThrough(e, 1, void 0, m);
                    for (var n = new Array(t - 1), i = 0, r = 0; r < t - 1; ++r) {
                        var o = arguments[r];
                        if (!s.isObject(o))
                            return a.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + s.classString(o)));
                        n[i++] = o
                    }
                    return n.length = i,
                    this._passThrough(c(n, arguments[r], this), 1, void 0, m)
                }
                ,
                p
            }
        }
        , {
            "./catch_filter": 7,
            "./util": 36
        }],
        16: [function(i, e, t) {
            "use strict";
            e.exports = function(a, n, s, l, e, u) {
                var c = i("./errors").TypeError
                  , t = i("./util")
                  , p = t.errorObj
                  , f = t.tryCatch
                  , d = [];
                function h(e, t, n, i) {
                    var r, o;
                    u.cancellation() ? (r = new a(s),
                    o = this._finallyPromise = new a(s),
                    this._promise = r.lastly(function() {
                        return o
                    }),
                    r._captureStackTrace(),
                    r._setOnCancel(this)) : (this._promise = new a(s))._captureStackTrace(),
                    this._stack = i,
                    this._generatorFunction = e,
                    this._receiver = t,
                    this._generator = void 0,
                    this._yieldHandlers = "function" == typeof n ? [n].concat(d) : d,
                    this._yieldedPromise = null,
                    this._cancellationPhase = !1
                }
                t.inherits(h, e),
                h.prototype._isResolved = function() {
                    return null === this._promise
                }
                ,
                h.prototype._cleanup = function() {
                    this._promise = this._generator = null,
                    u.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(),
                    this._finallyPromise = null)
                }
                ,
                h.prototype._promiseCancelled = function() {
                    var e;
                    this._isResolved() || (e = void 0 !== this._generator.return ? (this._promise._pushContext(),
                    f(this._generator.return).call(this._generator, void 0)) : (e = new a.CancellationError("generator .return() sentinel"),
                    a.coroutine.returnSentinel = e,
                    this._promise._attachExtraTrace(e),
                    this._promise._pushContext(),
                    f(this._generator.throw).call(this._generator, e)),
                    this._promise._popContext(),
                    this._cancellationPhase = !0,
                    this._yieldedPromise = null,
                    this._continue(e))
                }
                ,
                h.prototype._promiseFulfilled = function(e) {
                    this._yieldedPromise = null,
                    this._promise._pushContext();
                    e = f(this._generator.next).call(this._generator, e);
                    this._promise._popContext(),
                    this._continue(e)
                }
                ,
                h.prototype._promiseRejected = function(e) {
                    this._yieldedPromise = null,
                    this._promise._attachExtraTrace(e),
                    this._promise._pushContext();
                    e = f(this._generator.throw).call(this._generator, e);
                    this._promise._popContext(),
                    this._continue(e)
                }
                ,
                h.prototype._resultCancelled = function() {
                    var e;
                    this._yieldedPromise instanceof a && (e = this._yieldedPromise,
                    this._yieldedPromise = null,
                    e.cancel())
                }
                ,
                h.prototype.promise = function() {
                    return this._promise
                }
                ,
                h.prototype._run = function() {
                    this._generator = this._generatorFunction.call(this._receiver),
                    this._receiver = this._generatorFunction = void 0,
                    this._promiseFulfilled(void 0)
                }
                ,
                h.prototype._continue = function(e) {
                    var t, n = this._promise;
                    return e === p ? (this._cleanup(),
                    this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1)) : (t = e.value,
                    !0 === e.done ? (this._cleanup(),
                    this._cancellationPhase ? n.cancel() : n._resolveCallback(t)) : void ((e = l(t, this._promise))instanceof a || null !== (e = function(e, t, n) {
                        for (var i = 0; i < t.length; ++i) {
                            n._pushContext();
                            var r = f(t[i])(e);
                            if (n._popContext(),
                            r === p)
                                return n._pushContext(),
                                o = a.reject(p.e),
                                n._popContext(),
                                o;
                            var o = l(r, n);
                            if (o instanceof a)
                                return o
                        }
                        return null
                    }(e, this._yieldHandlers, this._promise)) ? 0 == (50397184 & (n = (e = e._target())._bitField)) ? (this._yieldedPromise = e)._proxy(this, null) : 0 != (33554432 & n) ? a._async.invoke(this._promiseFulfilled, this, e._value()) : 0 != (16777216 & n) ? a._async.invoke(this._promiseRejected, this, e._reason()) : this._promiseCancelled() : this._promiseRejected(new c("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(t)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")))))
                }
                ,
                a.coroutine = function(i, e) {
                    if ("function" != typeof i)
                        throw new c("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var r = Object(e).yieldHandler
                      , o = h
                      , a = (new Error).stack;
                    return function() {
                        var e = i.apply(this, arguments)
                          , t = new o(void 0,void 0,r,a)
                          , n = t.promise();
                        return t._generator = e,
                        t._promiseFulfilled(void 0),
                        n
                    }
                }
                ,
                a.coroutine.addYieldHandler = function(e) {
                    if ("function" != typeof e)
                        throw new c("expecting a function but got " + t.classString(e));
                    d.push(e)
                }
                ,
                a.spawn = function(e) {
                    var t;
                    return u.deprecated("Promise.spawn()", "Promise.coroutine()"),
                    "function" != typeof e ? n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n") : (t = (e = new h(e,this)).promise(),
                    e._run(a.spawn),
                    t)
                }
            }
        }
        , {
            "./errors": 12,
            "./util": 36
        }],
        17: [function(s, e, t) {
            "use strict";
            e.exports = function(e, n, t, i, r, o) {
                var a = s("./util");
                a.canEvaluate,
                a.tryCatch,
                a.errorObj;
                e.join = function() {
                    var e, t = arguments.length - 1, t = (0 < t && "function" == typeof arguments[t] && (e = arguments[t]),
                    [].slice.call(arguments)), t = (e && t.pop(),
                    new n(t).promise());
                    return void 0 !== e ? t.spread(e) : t
                }
            }
        }
        , {
            "./util": 36
        }],
        18: [function(t, e, n) {
            "use strict";
            e.exports = function(u, e, o, c, r, p) {
                var a = u._getDomain
                  , s = t("./util")
                  , f = s.tryCatch
                  , d = s.errorObj
                  , l = u._async;
                function h(e, t, n, i) {
                    this.constructor$(e),
                    this._promise._captureStackTrace();
                    e = a();
                    this._callback = null === e ? t : s.domainBind(e, t),
                    this._preservedValues = i === r ? new Array(this.length()) : null,
                    this._limit = n,
                    this._inFlight = 0,
                    this._queue = [],
                    l.invoke(this._asyncInit, this, void 0)
                }
                function n(e, t, n, i) {
                    if ("function" != typeof t)
                        return o("expecting a function but got " + s.classString(t));
                    var r = 0;
                    if (void 0 !== n) {
                        if ("object" != typeof n || null === n)
                            return u.reject(new TypeError("options argument must be an object but it is " + s.classString(n)));
                        if ("number" != typeof n.concurrency)
                            return u.reject(new TypeError("'concurrency' must be a number but it is " + s.classString(n.concurrency)));
                        r = n.concurrency
                    }
                    return new h(e,t,r = "number" == typeof r && isFinite(r) && 1 <= r ? r : 0,i).promise()
                }
                s.inherits(h, e),
                h.prototype._asyncInit = function() {
                    this._init$(void 0, -2)
                }
                ,
                h.prototype._init = function() {}
                ,
                h.prototype._promiseFulfilled = function(e, t) {
                    var n = this._values
                      , i = this.length()
                      , r = this._preservedValues
                      , o = this._limit;
                    if (t < 0) {
                        if (n[t = -1 * t - 1] = e,
                        1 <= o && (this._inFlight--,
                        this._drainQueue(),
                        this._isResolved()))
                            return !0
                    } else {
                        if (1 <= o && this._inFlight >= o)
                            return n[t] = e,
                            this._queue.push(t),
                            !1;
                        null !== r && (r[t] = e);
                        var a = this._promise
                          , s = this._callback
                          , l = a._boundValue()
                          , s = (a._pushContext(),
                        f(s).call(l, e, t, i))
                          , l = a._popContext();
                        if (p.checkForgottenReturns(s, l, null !== r ? "Promise.filter" : "Promise.map", a),
                        s === d)
                            return this._reject(s.e),
                            !0;
                        if ((e = c(s, this._promise))instanceof u) {
                            l = (e = e._target())._bitField;
                            if (0 == (50397184 & l))
                                return 1 <= o && this._inFlight++,
                                (n[t] = e)._proxy(this, -1 * (t + 1)),
                                !1;
                            if (0 == (33554432 & l))
                                return 0 != (16777216 & l) ? this._reject(e._reason()) : this._cancel(),
                                !0;
                            s = e._value()
                        }
                        n[t] = s
                    }
                    return i <= ++this._totalResolved && (null !== r ? this._filter(n, r) : this._resolve(n),
                    !0)
                }
                ,
                h.prototype._drainQueue = function() {
                    for (var e = this._queue, t = this._limit, n = this._values; 0 < e.length && this._inFlight < t; ) {
                        if (this._isResolved())
                            return;
                        var i = e.pop();
                        this._promiseFulfilled(n[i], i)
                    }
                }
                ,
                h.prototype._filter = function(e, t) {
                    for (var n = t.length, i = new Array(n), r = 0, o = 0; o < n; ++o)
                        e[o] && (i[r++] = t[o]);
                    i.length = r,
                    this._resolve(i)
                }
                ,
                h.prototype.preservedValues = function() {
                    return this._preservedValues
                }
                ,
                u.prototype.map = function(e, t) {
                    return n(this, e, t, null)
                }
                ,
                u.map = n
            }
        }
        , {
            "./util": 36
        }],
        19: [function(t, e, n) {
            "use strict";
            e.exports = function(r, o, e, a, s) {
                var l = t("./util")
                  , u = l.tryCatch;
                r.method = function(i) {
                    if ("function" != typeof i)
                        throw new r.TypeError("expecting a function but got " + l.classString(i));
                    return function() {
                        var e = new r(o)
                          , t = (e._captureStackTrace(),
                        e._pushContext(),
                        u(i).apply(this, arguments))
                          , n = e._popContext();
                        return s.checkForgottenReturns(t, n, "Promise.method", e),
                        e._resolveFromSyncValue(t),
                        e
                    }
                }
                ,
                r.attempt = r.try = function(e) {
                    var t, n, i;
                    return "function" != typeof e ? a("expecting a function but got " + l.classString(e)) : ((t = new r(o))._captureStackTrace(),
                    t._pushContext(),
                    n = 1 < arguments.length ? (s.deprecated("calling Promise.try with more than 1 argument"),
                    i = arguments[1],
                    n = arguments[2],
                    l.isArray(i) ? u(e).apply(n, i) : u(e).call(n, i)) : u(e)(),
                    i = t._popContext(),
                    s.checkForgottenReturns(n, i, "Promise.try", t),
                    t._resolveFromSyncValue(n),
                    t)
                }
                ,
                r.prototype._resolveFromSyncValue = function(e) {
                    e === l.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0)
                }
            }
        }
        , {
            "./util": 36
        }],
        20: [function(e, t, n) {
            "use strict";
            var a = e("./util")
              , r = a.maybeWrapAsError
              , s = e("./errors").OperationalError
              , l = e("./es5");
            var u = /^(?:name|message|stack|cause)$/;
            function o(e) {
                var t, n;
                if ((n = e)instanceof Error && l.getPrototypeOf(n) === Error.prototype) {
                    (t = new s(e)).name = e.name,
                    t.message = e.message,
                    t.stack = e.stack;
                    for (var i = l.keys(e), r = 0; r < i.length; ++r) {
                        var o = i[r];
                        u.test(o) || (t[o] = e[o])
                    }
                    return t
                }
                return a.markAsOriginatingFromRejection(e),
                e
            }
            t.exports = function(n, i) {
                return function(e, t) {
                    null !== n && (e ? (e = o(r(e)),
                    n._attachExtraTrace(e),
                    n._reject(e)) : i ? (e = [].slice.call(arguments, 1),
                    n._fulfill(e)) : n._fulfill(t),
                    n = null)
                }
            }
        }
        , {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
        }],
        21: [function(t, e, n) {
            "use strict";
            e.exports = function(e) {
                var n = t("./util")
                  , i = e._async
                  , r = n.tryCatch
                  , o = n.errorObj;
                function a(e, t) {
                    if (!n.isArray(e))
                        return s.call(this, e, t);
                    t = r(t).apply(this._boundValue(), [null].concat(e));
                    t === o && i.throwLater(t.e)
                }
                function s(e, t) {
                    var n = this._boundValue()
                      , t = void 0 === e ? r(t).call(n, null) : r(t).call(n, null, e);
                    t === o && i.throwLater(t.e)
                }
                function l(e, t) {
                    e || ((n = new Error(e + "")).cause = e,
                    e = n);
                    var n = r(t).call(this._boundValue(), e);
                    n === o && i.throwLater(n.e)
                }
                e.prototype.asCallback = e.prototype.nodeify = function(e, t) {
                    var n;
                    return "function" == typeof e && (n = s,
                    void 0 !== t && Object(t).spread && (n = a),
                    this._then(n, l, void 0, this, e)),
                    this
                }
            }
        }
        , {
            "./util": 36
        }],
        22: [function(O, L, e) {
            "use strict";
            L.exports = function() {
                function a() {
                    return new c("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                }
                function s() {
                    return new S.PromiseInspection(this._target())
                }
                function l(e) {
                    return S.reject(new c(e))
                }
                function u() {}
                var o = {}
                  , p = O("./util")
                  , f = p.isNode ? function() {
                    var e = process.domain;
                    return e = void 0 === e ? null : e
                }
                : function() {
                    return null
                }
                  , e = (p.notEnumerableProp(S, "_getDomain", f),
                O("./es5"))
                  , t = O("./async")
                  , d = new t
                  , n = (e.defineProperty(S, "_async", {
                    value: d
                }),
                O("./errors"))
                  , c = S.TypeError = n.TypeError
                  , h = (S.RangeError = n.RangeError,
                S.CancellationError = n.CancellationError)
                  , g = (S.TimeoutError = n.TimeoutError,
                S.OperationalError = n.OperationalError,
                S.RejectionError = n.OperationalError,
                S.AggregateError = n.AggregateError,
                function() {}
                )
                  , m = {}
                  , y = {}
                  , v = O("./thenables")(S, g)
                  , b = O("./promise_array")(S, g, v, l, u)
                  , n = O("./context")(S)
                  , i = n.create
                  , _ = O("./debuggability")(S, n)
                  , w = (_.CapturedTrace,
                O("./finally")(S, v, y))
                  , x = O("./catch_filter")(y)
                  , r = O("./nodeback")
                  , T = p.errorObj
                  , k = p.tryCatch;
                function S(e) {
                    if (e !== g) {
                        var t = this
                          , n = e;
                        if (null == t || t.constructor !== S)
                            throw new c("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                        if ("function" != typeof n)
                            throw new c("expecting a function but got " + p.classString(n))
                    }
                    this._bitField = 0,
                    this._fulfillmentHandler0 = void 0,
                    this._rejectionHandler0 = void 0,
                    this._promise0 = void 0,
                    this._receiver0 = void 0,
                    this._resolveFromExecutor(e),
                    this._promiseCreated(),
                    this._fireEvent("promiseCreated", this)
                }
                function E(e) {
                    this.promise._resolveCallback(e)
                }
                function C(e) {
                    this.promise._rejectCallback(e, !1)
                }
                function j(e) {
                    var t = new S(g);
                    t._fulfillmentHandler0 = e,
                    t._rejectionHandler0 = e,
                    t._promise0 = e,
                    t._receiver0 = e
                }
                return S.prototype.toString = function() {
                    return "[object Promise]"
                }
                ,
                S.prototype.caught = S.prototype.catch = function(e) {
                    var t = arguments.length;
                    if (1 < t) {
                        for (var n = new Array(t - 1), i = 0, r = 0; r < t - 1; ++r) {
                            var o = arguments[r];
                            if (!p.isObject(o))
                                return l("Catch statement predicate: expecting an object but got " + p.classString(o));
                            n[i++] = o
                        }
                        if (n.length = i,
                        "function" != typeof (e = arguments[r]))
                            throw new c("The last argument to .catch() must be a function, got " + p.toString(e));
                        return this.then(void 0, x(n, e, this))
                    }
                    return this.then(void 0, e)
                }
                ,
                S.prototype.reflect = function() {
                    return this._then(s, s, void 0, this, void 0)
                }
                ,
                S.prototype.then = function(e, t) {
                    var n;
                    return _.warnings() && 0 < arguments.length && "function" != typeof e && "function" != typeof t && (n = ".then() only accepts functions but was passed: " + p.classString(e),
                    1 < arguments.length && (n += ", " + p.classString(t)),
                    this._warn(n)),
                    this._then(e, t, void 0, void 0, void 0)
                }
                ,
                S.prototype.done = function(e, t) {
                    this._then(e, t, void 0, void 0, void 0)._setIsFinal()
                }
                ,
                S.prototype.spread = function(e) {
                    return "function" != typeof e ? l("expecting a function but got " + p.classString(e)) : this.all()._then(e, void 0, void 0, m, void 0)
                }
                ,
                S.prototype.toJSON = function() {
                    var e = {
                        isFulfilled: !1,
                        isRejected: !1,
                        fulfillmentValue: void 0,
                        rejectionReason: void 0
                    };
                    return this.isFulfilled() ? (e.fulfillmentValue = this.value(),
                    e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(),
                    e.isRejected = !0),
                    e
                }
                ,
                S.prototype.all = function() {
                    return 0 < arguments.length && this._warn(".all() was passed arguments but it does not take any"),
                    new b(this).promise()
                }
                ,
                S.prototype.error = function(e) {
                    return this.caught(p.originatesFromRejection, e)
                }
                ,
                S.getNewLibraryCopy = L.exports,
                S.is = function(e) {
                    return e instanceof S
                }
                ,
                S.fromNode = S.fromCallback = function(e) {
                    var t = new S(g)
                      , n = (t._captureStackTrace(),
                    1 < arguments.length && !!Object(arguments[1]).multiArgs)
                      , e = k(e)(r(t, n));
                    return e === T && t._rejectCallback(e.e, !0),
                    t._isFateSealed() || t._setAsyncGuaranteed(),
                    t
                }
                ,
                S.all = function(e) {
                    return new b(e).promise()
                }
                ,
                S.resolve = S.fulfilled = S.cast = function(e) {
                    var t = v(e);
                    return t instanceof S || ((t = new S(g))._captureStackTrace(),
                    t._setFulfilled(),
                    t._rejectionHandler0 = e),
                    t
                }
                ,
                S.reject = S.rejected = function(e) {
                    var t = new S(g);
                    return t._captureStackTrace(),
                    t._rejectCallback(e, !0),
                    t
                }
                ,
                S.setScheduler = function(e) {
                    if ("function" != typeof e)
                        throw new c("expecting a function but got " + p.classString(e));
                    return d.setScheduler(e)
                }
                ,
                S.prototype._then = function(e, t, n, i, r) {
                    var o, a, s, l = void 0 !== r, r = l ? r : new S(g), u = this._target(), c = u._bitField, l = (l || (r._propagateFrom(this, 3),
                    r._captureStackTrace(),
                    void 0 === i && 0 != (2097152 & this._bitField) && (i = 0 != (50397184 & c) ? this._boundValue() : u === this ? void 0 : this._boundTo),
                    this._fireEvent("promiseChained", this, r)),
                    f());
                    return 0 != (50397184 & c) ? (s = u._settlePromiseCtx,
                    0 != (33554432 & c) ? (a = u._rejectionHandler0,
                    o = e) : 0 != (16777216 & c) ? (a = u._fulfillmentHandler0,
                    o = t,
                    u._unsetRejectionIsUnhandled()) : (s = u._settlePromiseLateCancellationObserver,
                    a = new h("late cancellation observer"),
                    u._attachExtraTrace(a),
                    o = t),
                    d.invoke(s, u, {
                        handler: null === l ? o : "function" == typeof o && p.domainBind(l, o),
                        promise: r,
                        receiver: i,
                        value: a
                    })) : u._addCallbacks(e, t, r, i, l),
                    r
                }
                ,
                S.prototype._length = function() {
                    return 65535 & this._bitField
                }
                ,
                S.prototype._isFateSealed = function() {
                    return 0 != (117506048 & this._bitField)
                }
                ,
                S.prototype._isFollowing = function() {
                    return 67108864 == (67108864 & this._bitField)
                }
                ,
                S.prototype._setLength = function(e) {
                    this._bitField = -65536 & this._bitField | 65535 & e
                }
                ,
                S.prototype._setFulfilled = function() {
                    this._bitField = 33554432 | this._bitField,
                    this._fireEvent("promiseFulfilled", this)
                }
                ,
                S.prototype._setRejected = function() {
                    this._bitField = 16777216 | this._bitField,
                    this._fireEvent("promiseRejected", this)
                }
                ,
                S.prototype._setFollowing = function() {
                    this._bitField = 67108864 | this._bitField,
                    this._fireEvent("promiseResolved", this)
                }
                ,
                S.prototype._setIsFinal = function() {
                    this._bitField = 4194304 | this._bitField
                }
                ,
                S.prototype._isFinal = function() {
                    return 0 < (4194304 & this._bitField)
                }
                ,
                S.prototype._unsetCancelled = function() {
                    this._bitField = -65537 & this._bitField
                }
                ,
                S.prototype._setCancelled = function() {
                    this._bitField = 65536 | this._bitField,
                    this._fireEvent("promiseCancelled", this)
                }
                ,
                S.prototype._setWillBeCancelled = function() {
                    this._bitField = 8388608 | this._bitField
                }
                ,
                S.prototype._setAsyncGuaranteed = function() {
                    d.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                }
                ,
                S.prototype._receiverAt = function(e) {
                    e = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
                    if (e !== o)
                        return void 0 === e && this._isBound() ? this._boundValue() : e
                }
                ,
                S.prototype._promiseAt = function(e) {
                    return this[4 * e - 4 + 2]
                }
                ,
                S.prototype._fulfillmentHandlerAt = function(e) {
                    return this[4 * e - 4]
                }
                ,
                S.prototype._rejectionHandlerAt = function(e) {
                    return this[4 * e - 4 + 1]
                }
                ,
                S.prototype._boundValue = function() {}
                ,
                S.prototype._migrateCallback0 = function(e) {
                    e._bitField;
                    var t = e._fulfillmentHandler0
                      , n = e._rejectionHandler0
                      , i = e._promise0
                      , e = e._receiverAt(0);
                    this._addCallbacks(t, n, i, e = void 0 === e ? o : e, null)
                }
                ,
                S.prototype._migrateCallbackAt = function(e, t) {
                    var n = e._fulfillmentHandlerAt(t)
                      , i = e._rejectionHandlerAt(t)
                      , r = e._promiseAt(t)
                      , e = e._receiverAt(t);
                    this._addCallbacks(n, i, r, e = void 0 === e ? o : e, null)
                }
                ,
                S.prototype._addCallbacks = function(e, t, n, i, r) {
                    var o, a = this._length();
                    return 65531 <= a && this._setLength(a = 0),
                    0 === a ? (this._promise0 = n,
                    this._receiver0 = i,
                    "function" == typeof e && (this._fulfillmentHandler0 = null === r ? e : p.domainBind(r, e)),
                    "function" == typeof t && (this._rejectionHandler0 = null === r ? t : p.domainBind(r, t))) : (this[2 + (o = 4 * a - 4)] = n,
                    this[3 + o] = i,
                    "function" == typeof e && (this[o] = null === r ? e : p.domainBind(r, e)),
                    "function" == typeof t && (this[1 + o] = null === r ? t : p.domainBind(r, t))),
                    this._setLength(a + 1),
                    a
                }
                ,
                S.prototype._proxy = function(e, t) {
                    this._addCallbacks(void 0, void 0, t, e, null)
                }
                ,
                S.prototype._resolveCallback = function(e, t) {
                    if (0 == (117506048 & this._bitField)) {
                        if (e === this)
                            return this._rejectCallback(a(), !1);
                        var n = v(e, this);
                        if (!(n instanceof S))
                            return this._fulfill(e);
                        t && this._propagateFrom(n, 2);
                        var i = n._target();
                        if (i === this)
                            this._reject(a());
                        else {
                            e = i._bitField;
                            if (0 == (50397184 & e)) {
                                var r = this._length();
                                0 < r && i._migrateCallback0(this);
                                for (var o = 1; o < r; ++o)
                                    i._migrateCallbackAt(this, o);
                                this._setFollowing(),
                                this._setLength(0),
                                this._setFollowee(i)
                            } else
                                0 != (33554432 & e) ? this._fulfill(i._value()) : 0 != (16777216 & e) ? this._reject(i._reason()) : (t = new h("late cancellation observer"),
                                i._attachExtraTrace(t),
                                this._reject(t))
                        }
                    }
                }
                ,
                S.prototype._rejectCallback = function(e, t, n) {
                    var i = p.ensureErrorObject(e)
                      , r = i === e;
                    r || n || !_.warnings() || (n = "a promise was rejected with a non-error: " + p.classString(e),
                    this._warn(n, !0)),
                    this._attachExtraTrace(i, !!t && r),
                    this._reject(e)
                }
                ,
                S.prototype._resolveFromExecutor = function(e) {
                    var t, n;
                    e !== g && ((t = this)._captureStackTrace(),
                    this._pushContext(),
                    n = !0,
                    e = this._execute(e, function(e) {
                        t._resolveCallback(e)
                    }, function(e) {
                        t._rejectCallback(e, n)
                    }),
                    n = !1,
                    this._popContext(),
                    void 0 !== e) && t._rejectCallback(e, !0)
                }
                ,
                S.prototype._settlePromiseFromHandler = function(e, t, n, i) {
                    var r;
                    0 == (65536 & i._bitField) && (i._pushContext(),
                    t === m ? n && "number" == typeof n.length ? r = k(e).apply(this._boundValue(), n) : (r = T).e = new c("cannot .spread() a non-array: " + p.classString(n)) : r = k(e).call(t, n),
                    e = i._popContext(),
                    0 == (65536 & i._bitField)) && (r === y ? i._reject(n) : r === T ? i._rejectCallback(r.e, !1) : (_.checkForgottenReturns(r, e, "", i, this),
                    i._resolveCallback(r)))
                }
                ,
                S.prototype._target = function() {
                    for (var e = this; e._isFollowing(); )
                        e = e._followee();
                    return e
                }
                ,
                S.prototype._followee = function() {
                    return this._rejectionHandler0
                }
                ,
                S.prototype._setFollowee = function(e) {
                    this._rejectionHandler0 = e
                }
                ,
                S.prototype._settlePromise = function(e, t, n, i) {
                    var r = e instanceof S
                      , o = this._bitField
                      , a = 0 != (134217728 & o);
                    0 != (65536 & o) ? (r && e._invokeInternalOnCancel(),
                    n instanceof w && n.isFinallyHandler() ? (n.cancelPromise = e,
                    k(t).call(n, i) === T && e._reject(T.e)) : t === s ? e._fulfill(s.call(n)) : n instanceof u ? n._promiseCancelled(e) : r || e instanceof b ? e._cancel() : n.cancel()) : "function" == typeof t ? r ? (a && e._setAsyncGuaranteed(),
                    this._settlePromiseFromHandler(t, n, i, e)) : t.call(n, i, e) : n instanceof u ? n._isResolved() || (0 != (33554432 & o) ? n._promiseFulfilled(i, e) : n._promiseRejected(i, e)) : r && (a && e._setAsyncGuaranteed(),
                    0 != (33554432 & o) ? e._fulfill(i) : e._reject(i))
                }
                ,
                S.prototype._settlePromiseLateCancellationObserver = function(e) {
                    var t = e.handler
                      , n = e.promise
                      , i = e.receiver
                      , e = e.value;
                    "function" == typeof t ? n instanceof S ? this._settlePromiseFromHandler(t, i, e, n) : t.call(i, e, n) : n instanceof S && n._reject(e)
                }
                ,
                S.prototype._settlePromiseCtx = function(e) {
                    this._settlePromise(e.promise, e.handler, e.receiver, e.value)
                }
                ,
                S.prototype._settlePromise0 = function(e, t, n) {
                    var i = this._promise0
                      , r = this._receiverAt(0);
                    this._promise0 = void 0,
                    this._receiver0 = void 0,
                    this._settlePromise(i, e, r, t)
                }
                ,
                S.prototype._clearCallbackDataAtIndex = function(e) {
                    e = 4 * e - 4;
                    this[2 + e] = this[3 + e] = this[e] = this[1 + e] = void 0
                }
                ,
                S.prototype._fulfill = function(e) {
                    var t, n = this._bitField;
                    if (!((117506048 & n) >>> 16)) {
                        if (e === this)
                            return t = a(),
                            this._attachExtraTrace(t),
                            this._reject(t);
                        this._setFulfilled(),
                        this._rejectionHandler0 = e,
                        0 < (65535 & n) && (0 != (134217728 & n) ? this._settlePromises() : d.settlePromises(this),
                        this._dereferenceTrace())
                    }
                }
                ,
                S.prototype._reject = function(e) {
                    var t = this._bitField;
                    if (!((117506048 & t) >>> 16)) {
                        if (this._setRejected(),
                        this._fulfillmentHandler0 = e,
                        this._isFinal())
                            return d.fatalError(e, p.isNode);
                        0 < (65535 & t) ? d.settlePromises(this) : this._ensurePossibleRejectionHandled()
                    }
                }
                ,
                S.prototype._fulfillPromises = function(e, t) {
                    for (var n = 1; n < e; n++) {
                        var i = this._fulfillmentHandlerAt(n)
                          , r = this._promiseAt(n)
                          , o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n),
                        this._settlePromise(r, i, o, t)
                    }
                }
                ,
                S.prototype._rejectPromises = function(e, t) {
                    for (var n = 1; n < e; n++) {
                        var i = this._rejectionHandlerAt(n)
                          , r = this._promiseAt(n)
                          , o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n),
                        this._settlePromise(r, i, o, t)
                    }
                }
                ,
                S.prototype._settlePromises = function() {
                    var e, t = this._bitField, n = 65535 & t;
                    0 < n && (0 != (16842752 & t) ? (e = this._fulfillmentHandler0,
                    this._settlePromise0(this._rejectionHandler0, e, t),
                    this._rejectPromises(n, e)) : (e = this._rejectionHandler0,
                    this._settlePromise0(this._fulfillmentHandler0, e, t),
                    this._fulfillPromises(n, e)),
                    this._setLength(0)),
                    this._clearCancellationData()
                }
                ,
                S.prototype._settledValue = function() {
                    var e = this._bitField;
                    return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0
                }
                ,
                "undefined" != typeof Symbol && Symbol.toStringTag && e.defineProperty(S.prototype, Symbol.toStringTag, {
                    get: function() {
                        return "Object"
                    }
                }),
                S.defer = S.pending = function() {
                    return _.deprecated("Promise.defer", "new Promise"),
                    {
                        promise: new S(g),
                        resolve: E,
                        reject: C
                    }
                }
                ,
                p.notEnumerableProp(S, "_makeSelfResolutionError", a),
                O("./method")(S, g, v, l, _),
                O("./bind")(S, g, v, _),
                O("./cancel")(S, b, l, _),
                O("./direct_resolve")(S),
                O("./synchronous_inspection")(S),
                O("./join")(S, b, v, g, d, f),
                (S.Promise = S).version = "3.5.5",
                O("./call_get.js")(S),
                O("./generators.js")(S, l, g, v, u, _),
                O("./map.js")(S, b, l, v, g, _),
                O("./nodeify.js")(S),
                O("./promisify.js")(S, g),
                O("./props.js")(S, b, v, l),
                O("./race.js")(S, g, v, l),
                O("./reduce.js")(S, b, l, v, g, _),
                O("./settle.js")(S, b, _),
                O("./some.js")(S, b, l),
                O("./timers.js")(S, g, _),
                O("./using.js")(S, l, v, i, g, _),
                O("./any.js")(S),
                O("./each.js")(S, g),
                O("./filter.js")(S, g),
                p.toFastProperties(S),
                p.toFastProperties(S.prototype),
                j({
                    a: 1
                }),
                j({
                    b: 2
                }),
                j({
                    c: 3
                }),
                j(1),
                j(function() {}),
                j(void 0),
                j(!1),
                j(new S(g)),
                _.setBounds(t.firstLineError, p.lastLineError),
                S
            }
        }
        , {
            "./any.js": 1,
            "./async": 2,
            "./bind": 3,
            "./call_get.js": 5,
            "./cancel": 6,
            "./catch_filter": 7,
            "./context": 8,
            "./debuggability": 9,
            "./direct_resolve": 10,
            "./each.js": 11,
            "./errors": 12,
            "./es5": 13,
            "./filter.js": 14,
            "./finally": 15,
            "./generators.js": 16,
            "./join": 17,
            "./map.js": 18,
            "./method": 19,
            "./nodeback": 20,
            "./nodeify.js": 21,
            "./promise_array": 23,
            "./promisify.js": 24,
            "./props.js": 25,
            "./race.js": 27,
            "./reduce.js": 28,
            "./settle.js": 30,
            "./some.js": 31,
            "./synchronous_inspection": 32,
            "./thenables": 33,
            "./timers.js": 34,
            "./using.js": 35,
            "./util": 36
        }],
        23: [function(i, e, t) {
            "use strict";
            e.exports = function(s, n, l, o, e) {
                var a = i("./util");
                a.isArray;
                function t(e) {
                    var t = this._promise = new s(n);
                    e instanceof s && t._propagateFrom(e, 3),
                    t._setOnCancel(this),
                    this._values = e,
                    this._length = 0,
                    this._totalResolved = 0,
                    this._init(void 0, -2)
                }
                return a.inherits(t, e),
                t.prototype.length = function() {
                    return this._length
                }
                ,
                t.prototype.promise = function() {
                    return this._promise
                }
                ,
                t.prototype._init = function e(t, n) {
                    if ((i = l(this._values, this._promise))instanceof s) {
                        var i, r = (i = i._target())._bitField;
                        if (this._values = i,
                        0 == (50397184 & r))
                            return this._promise._setAsyncGuaranteed(),
                            i._then(e, this._reject, void 0, this, n);
                        if (0 == (33554432 & r))
                            return 0 != (16777216 & r) ? this._reject(i._reason()) : this._cancel();
                        i = i._value()
                    }
                    null === (i = a.asArray(i)) ? (r = o("expecting an array or an iterable object but got " + a.classString(i)).reason(),
                    this._promise._rejectCallback(r, !1)) : 0 === i.length ? -5 === n ? this._resolveEmptyArray() : this._resolve(function(e) {
                        switch (e) {
                        case -2:
                            return [];
                        case -3:
                            return {};
                        case -6:
                            return new Map
                        }
                    }(n)) : this._iterate(i)
                }
                ,
                t.prototype._iterate = function(e) {
                    for (var t = this.getActualLength(e.length), n = (this._length = t,
                    this._values = this.shouldCopyValues() ? new Array(t) : this._values,
                    this._promise), i = !1, r = null, o = 0; o < t; ++o) {
                        var a = l(e[o], n)
                          , r = a instanceof s ? (a = a._target())._bitField : null;
                        i ? null !== r && a.suppressUnhandledRejections() : null !== r ? 0 == (50397184 & r) ? (a._proxy(this, o),
                        this._values[o] = a) : i = 0 != (33554432 & r) ? this._promiseFulfilled(a._value(), o) : 0 != (16777216 & r) ? this._promiseRejected(a._reason(), o) : this._promiseCancelled(o) : i = this._promiseFulfilled(a, o)
                    }
                    i || n._setAsyncGuaranteed()
                }
                ,
                t.prototype._isResolved = function() {
                    return null === this._values
                }
                ,
                t.prototype._resolve = function(e) {
                    this._values = null,
                    this._promise._fulfill(e)
                }
                ,
                t.prototype._cancel = function() {
                    !this._isResolved() && this._promise._isCancellable() && (this._values = null,
                    this._promise._cancel())
                }
                ,
                t.prototype._reject = function(e) {
                    this._values = null,
                    this._promise._rejectCallback(e, !1)
                }
                ,
                t.prototype._promiseFulfilled = function(e, t) {
                    return this._values[t] = e,
                    ++this._totalResolved >= this._length && (this._resolve(this._values),
                    !0)
                }
                ,
                t.prototype._promiseCancelled = function() {
                    return this._cancel(),
                    !0
                }
                ,
                t.prototype._promiseRejected = function(e) {
                    return this._totalResolved++,
                    this._reject(e),
                    !0
                }
                ,
                t.prototype._resultCancelled = function() {
                    if (!this._isResolved()) {
                        var e = this._values;
                        if (this._cancel(),
                        e instanceof s)
                            e.cancel();
                        else
                            for (var t = 0; t < e.length; ++t)
                                e[t]instanceof s && e[t].cancel()
                    }
                }
                ,
                t.prototype.shouldCopyValues = function() {
                    return !0
                }
                ,
                t.prototype.getActualLength = function(e) {
                    return e
                }
                ,
                t
            }
        }
        , {
            "./util": 36
        }],
        24: [function(r, e, t) {
            "use strict";
            e.exports = function(u, c) {
                var d = {}
                  , v = r("./util")
                  , p = r("./nodeback")
                  , f = v.withAppended
                  , h = v.maybeWrapAsError
                  , e = v.canEvaluate
                  , b = r("./errors").TypeError
                  , _ = {
                    __isPromisified__: !0
                }
                  , t = new RegExp("^(?:" + ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"].join("|") + ")$")
                  , w = function(e) {
                    return v.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e
                };
                function i(e) {
                    return !t.test(e)
                }
                function x(e) {
                    try {
                        return !0 === e.__isPromisified__
                    } catch (e) {
                        return !1
                    }
                }
                function g(e, t, n, i) {
                    for (var r, o = v.inheritedDataKeys(e), a = [], s = 0; s < o.length; ++s) {
                        var l = o[s]
                          , u = e[l]
                          , c = i === w || w(l, u, e);
                        "function" != typeof u || x(u) || (r = e,
                        (r = v.getDataPropertyOrDefault(r, l + t, _)) && x(r)) || !i(l, u, e, c) || a.push(l, u)
                    }
                    for (var p = a, f = t, d = n, h = 0; h < p.length; h += 2) {
                        var g = p[h];
                        if (d.test(g))
                            for (var m = g.replace(d, ""), y = 0; y < p.length; y += 2)
                                if (p[y] === m)
                                    throw new b("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", f))
                    }
                    return a
                }
                var n;
                var m = e ? n : function(r, o, e, t, n, a) {
                    var s = function() {
                        return this
                    }()
                      , l = r;
                    function i() {
                        var e = o
                          , t = (o === d && (e = this),
                        new u(c))
                          , n = (t._captureStackTrace(),
                        "string" == typeof l && this !== s ? this[l] : r)
                          , i = p(t, a);
                        try {
                            n.apply(e, f(arguments, i))
                        } catch (e) {
                            t._rejectCallback(h(e), !0, !0)
                        }
                        return t._isFateSealed() || t._setAsyncGuaranteed(),
                        t
                    }
                    return "string" == typeof l && (r = t),
                    v.notEnumerableProp(i, "__isPromisified__", !0),
                    i
                }
                ;
                function y(e, t, n, i, r) {
                    for (var o = new RegExp(t.replace(/([$])/, "\\$") + "$"), a = g(e, t, o, n), s = 0, l = a.length; s < l; s += 2) {
                        var u, c = a[s], p = a[s + 1], f = c + t;
                        i === m ? e[f] = m(c, d, c, p, t, r) : (u = i(p, function() {
                            return m(c, d, c, p, t, r)
                        }),
                        v.notEnumerableProp(u, "__isPromisified__", !0),
                        e[f] = u)
                    }
                    return v.toFastProperties(e),
                    e
                }
                u.promisify = function(e, t) {
                    if ("function" != typeof e)
                        throw new b("expecting a function but got " + v.classString(e));
                    var n;
                    return x(e) ? e : (n = void 0 === (t = Object(t)).context ? d : t.context,
                    t = !!t.multiArgs,
                    n = m(e, n, void 0, e, null, t),
                    v.copyDescriptors(e, n, i),
                    n)
                }
                ,
                u.promisifyAll = function(e, t) {
                    if ("function" != typeof e && "object" != typeof e)
                        throw new b("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                    var n = !!(t = Object(t)).multiArgs
                      , i = t.suffix
                      , r = t.filter
                      , o = ("function" != typeof r && (r = w),
                    t.promisifier);
                    if ("function" != typeof o && (o = m),
                    !v.isIdentifier(i = "string" != typeof i ? "Async" : i))
                        throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                    for (var a = v.inheritedDataKeys(e), s = 0; s < a.length; ++s) {
                        var l = e[a[s]];
                        "constructor" !== a[s] && v.isClass(l) && (y(l.prototype, i, r, o, n),
                        y(l, i, r, o, n))
                    }
                    return y(e, i, r, o, n)
                }
            }
        }
        , {
            "./errors": 12,
            "./nodeback": 20,
            "./util": 36
        }],
        25: [function(h, e, t) {
            "use strict";
            e.exports = function(n, e, i, r) {
                var s, o, a, t = h("./util"), l = t.isObject, u = h("./es5"), c = ("function" == typeof Map && (s = Map),
                a = 0,
                function(e) {
                    o = e.size,
                    a = 0;
                    var t = new Array(2 * e.size);
                    return e.forEach(p, t),
                    t
                }
                );
                function p(e, t) {
                    this[a] = e,
                    this[a + o] = t,
                    a++
                }
                function f(e) {
                    var t = !1;
                    if (void 0 !== s && e instanceof s)
                        r = c(e),
                        t = !0;
                    else
                        for (var n = u.keys(e), i = n.length, r = new Array(2 * i), o = 0; o < i; ++o) {
                            var a = n[o];
                            r[o] = e[a],
                            r[o + i] = a
                        }
                    this.constructor$(r),
                    this._isMap = t,
                    this._init$(void 0, t ? -6 : -3)
                }
                function d(e) {
                    var t, e = i(e);
                    return l(e) ? (t = e instanceof n ? e._then(n.props, void 0, void 0, void 0, void 0) : new f(e).promise(),
                    e instanceof n && t._propagateFrom(e, 2),
                    t) : r("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                }
                t.inherits(f, e),
                f.prototype._init = function() {}
                ,
                f.prototype._promiseFulfilled = function(e, t) {
                    if (this._values[t] = e,
                    ++this._totalResolved >= this._length) {
                        if (this._isMap)
                            n = function(e) {
                                for (var t = new s, n = e.length / 2 | 0, i = 0; i < n; ++i) {
                                    var r = e[n + i]
                                      , o = e[i];
                                    t.set(r, o)
                                }
                                return t
                            }(this._values);
                        else
                            for (var n = {}, i = this.length(), r = 0, o = this.length(); r < o; ++r)
                                n[this._values[r + i]] = this._values[r];
                        return this._resolve(n),
                        !0
                    }
                    return !1
                }
                ,
                f.prototype.shouldCopyValues = function() {
                    return !1
                }
                ,
                f.prototype.getActualLength = function(e) {
                    return e >> 1
                }
                ,
                n.prototype.props = function() {
                    return d(this)
                }
                ,
                n.props = d
            }
        }
        , {
            "./es5": 13,
            "./util": 36
        }],
        26: [function(e, t, n) {
            "use strict";
            function i(e) {
                this._capacity = e,
                this._length = 0,
                this._front = 0
            }
            i.prototype._willBeOverCapacity = function(e) {
                return this._capacity < e
            }
            ,
            i.prototype._pushOne = function(e) {
                var t = this.length()
                  , n = (this._checkCapacity(t + 1),
                this._front + t & this._capacity - 1);
                this[n] = e,
                this._length = t + 1
            }
            ,
            i.prototype.push = function(e, t, n) {
                var i, r, o = this.length() + 3;
                this._willBeOverCapacity(o) ? (this._pushOne(e),
                this._pushOne(t),
                this._pushOne(n)) : (i = this._front + o - 3,
                this._checkCapacity(o),
                r = this._capacity - 1,
                this[i & r] = e,
                this[1 + i & r] = t,
                this[2 + i & r] = n,
                this._length = o)
            }
            ,
            i.prototype.shift = function() {
                var e = this._front
                  , t = this[e];
                return this[e] = void 0,
                this._front = e + 1 & this._capacity - 1,
                this._length--,
                t
            }
            ,
            i.prototype.length = function() {
                return this._length
            }
            ,
            i.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(this._capacity << 1)
            }
            ,
            i.prototype._resizeTo = function(e) {
                var t = this._capacity;
                this._capacity = e;
                for (var e = this._front + this._length & t - 1, n = this, i = 0, r = this, o = t, a = e, s = 0; s < a; ++s)
                    r[s + o] = n[s + i],
                    n[s + i] = void 0
            }
            ,
            t.exports = i
        }
        , {}],
        27: [function(e, t, n) {
            "use strict";
            t.exports = function(u, c, p, f) {
                function d(t) {
                    return t.then(function(e) {
                        return n(e, t)
                    })
                }
                var h = e("./util");
                function n(e, t) {
                    var n = p(e);
                    if (n instanceof u)
                        return d(n);
                    if (null === (e = h.asArray(e)))
                        return f("expecting an array or an iterable object but got " + h.classString(e));
                    for (var i = new u(c), r = (void 0 !== t && i._propagateFrom(t, 3),
                    i._fulfill), o = i._reject, a = 0, s = e.length; a < s; ++a) {
                        var l = e[a];
                        (void 0 !== l || a in e) && u.cast(l)._then(r, o, void 0, i, null)
                    }
                    return i
                }
                u.race = function(e) {
                    return n(e, void 0)
                }
                ,
                u.prototype.race = function() {
                    return n(this, void 0)
                }
            }
        }
        , {
            "./util": 36
        }],
        28: [function(h, e, t) {
            "use strict";
            e.exports = function(o, e, r, t, a, s) {
                var l = o._getDomain
                  , u = h("./util")
                  , c = u.tryCatch;
                function p(e, t, n, i) {
                    this.constructor$(e);
                    e = l();
                    this._fn = null === e ? t : u.domainBind(e, t),
                    void 0 !== n && (n = o.resolve(n))._attachCancellationCallback(this),
                    this._initialValue = n,
                    this._currentCancellable = null,
                    this._eachValues = i === a ? Array(this._length) : 0 === i ? null : void 0,
                    this._promise._captureStackTrace(),
                    this._init$(void 0, -5)
                }
                function f(e, t) {
                    this.isFulfilled() ? t._resolve(e) : t._reject(e)
                }
                function n(e, t, n, i) {
                    return "function" != typeof t ? r("expecting a function but got " + u.classString(t)) : new p(e,t,n,i).promise()
                }
                function d(e) {
                    this.accum = e,
                    this.array._gotAccum(e);
                    e = t(this.value, this.array._promise);
                    return e instanceof o ? (this.array._currentCancellable = e)._then(i, void 0, void 0, this, void 0) : i.call(this, e)
                }
                function i(e) {
                    var t = this.array
                      , n = t._promise
                      , i = c(t._fn)
                      , e = (n._pushContext(),
                    (i = void 0 !== t._eachValues ? i.call(n._boundValue(), e, this.index, this.length) : i.call(n._boundValue(), this.accum, e, this.index, this.length))instanceof o && (t._currentCancellable = i),
                    n._popContext());
                    return s.checkForgottenReturns(i, e, void 0 !== t._eachValues ? "Promise.each" : "Promise.reduce", n),
                    i
                }
                u.inherits(p, e),
                p.prototype._gotAccum = function(e) {
                    void 0 !== this._eachValues && null !== this._eachValues && e !== a && this._eachValues.push(e)
                }
                ,
                p.prototype._eachComplete = function(e) {
                    return null !== this._eachValues && this._eachValues.push(e),
                    this._eachValues
                }
                ,
                p.prototype._init = function() {}
                ,
                p.prototype._resolveEmptyArray = function() {
                    this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                }
                ,
                p.prototype.shouldCopyValues = function() {
                    return !1
                }
                ,
                p.prototype._resolve = function(e) {
                    this._promise._resolveCallback(e),
                    this._values = null
                }
                ,
                p.prototype._resultCancelled = function(e) {
                    if (e === this._initialValue)
                        return this._cancel();
                    this._isResolved() || (this._resultCancelled$(),
                    this._currentCancellable instanceof o && this._currentCancellable.cancel(),
                    this._initialValue instanceof o && this._initialValue.cancel())
                }
                ,
                p.prototype._iterate = function(e) {
                    var t = (this._values = e).length
                      , n = void 0 !== this._initialValue ? (r = this._initialValue,
                    0) : (r = o.resolve(e[0]),
                    1);
                    if (!(this._currentCancellable = r).isRejected())
                        for (; n < t; ++n)
                            var i = {
                                accum: null,
                                value: e[n],
                                index: n,
                                length: t,
                                array: this
                            }
                              , r = r._then(d, void 0, void 0, i, void 0);
                    (r = void 0 !== this._eachValues ? r._then(this._eachComplete, void 0, void 0, this, void 0) : r)._then(f, f, void 0, r, this)
                }
                ,
                o.prototype.reduce = function(e, t) {
                    return n(this, e, t, null)
                }
                ,
                o.reduce = n
            }
        }
        , {
            "./util": 36
        }],
        29: [function(e, t, n) {
            "use strict";
            var i, r, o, e = e("./util"), a = e.getNativePromise();
            e = e.isNode && "undefined" == typeof MutationObserver ? (i = global.setImmediate,
            r = process.nextTick,
            e.isRecentNode ? function(e) {
                i.call(global, e)
            }
            : function(e) {
                r.call(process, e)
            }
            ) : "function" == typeof a && "function" == typeof a.resolve ? (o = a.resolve(),
            function(e) {
                o.then(e)
            }
            ) : "undefined" != typeof MutationObserver && ("undefined" == typeof window || !window.navigator || !window.navigator.standalone && !window.cordova) && "classList"in document.documentElement ? function() {
                var n = document.createElement("div")
                  , i = {
                    attributes: !0
                }
                  , r = !1
                  , o = document.createElement("div");
                new MutationObserver(function() {
                    n.classList.toggle("foo"),
                    r = !1
                }
                ).observe(o, i);
                return function(e) {
                    var t = new MutationObserver(function() {
                        t.disconnect(),
                        e()
                    }
                    );
                    t.observe(n, i),
                    r || (r = !0,
                    o.classList.toggle("foo"))
                }
            }() : "undefined" != typeof setImmediate ? function(e) {
                setImmediate(e)
            }
            : "undefined" != typeof setTimeout ? function(e) {
                setTimeout(e, 0)
            }
            : function() {
                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
            }
            ,
            t.exports = e
        }
        , {
            "./util": 36
        }],
        30: [function(o, e, t) {
            "use strict";
            e.exports = function(e, t, n) {
                var i = e.PromiseInspection;
                function r(e) {
                    this.constructor$(e)
                }
                o("./util").inherits(r, t),
                r.prototype._promiseResolved = function(e, t) {
                    return this._values[e] = t,
                    ++this._totalResolved >= this._length && (this._resolve(this._values),
                    !0)
                }
                ,
                r.prototype._promiseFulfilled = function(e, t) {
                    var n = new i;
                    return n._bitField = 33554432,
                    n._settledValueField = e,
                    this._promiseResolved(t, n)
                }
                ,
                r.prototype._promiseRejected = function(e, t) {
                    var n = new i;
                    return n._bitField = 16777216,
                    n._settledValueField = e,
                    this._promiseResolved(t, n)
                }
                ,
                e.settle = function(e) {
                    return n.deprecated(".settle()", ".reflect()"),
                    new r(e).promise()
                }
                ,
                e.prototype.settle = function() {
                    return e.settle(this)
                }
            }
        }
        , {
            "./util": 36
        }],
        31: [function(c, e, t) {
            "use strict";
            e.exports = function(e, t, i) {
                var n = c("./util")
                  , r = c("./errors").RangeError
                  , o = c("./errors").AggregateError
                  , a = n.isArray
                  , s = {};
                function l(e) {
                    this.constructor$(e),
                    this._howMany = 0,
                    this._unwrap = !1,
                    this._initialized = !1
                }
                function u(e, t) {
                    var n;
                    return (0 | t) !== t || t < 0 ? i("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n") : (n = (e = new l(e)).promise(),
                    e.setHowMany(t),
                    e.init(),
                    n)
                }
                n.inherits(l, t),
                l.prototype._init = function() {
                    var e;
                    this._initialized && (0 === this._howMany ? this._resolve([]) : (this._init$(void 0, -5),
                    e = a(this._values),
                    !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))))
                }
                ,
                l.prototype.init = function() {
                    this._initialized = !0,
                    this._init()
                }
                ,
                l.prototype.setUnwrap = function() {
                    this._unwrap = !0
                }
                ,
                l.prototype.howMany = function() {
                    return this._howMany
                }
                ,
                l.prototype.setHowMany = function(e) {
                    this._howMany = e
                }
                ,
                l.prototype._promiseFulfilled = function(e) {
                    return this._addFulfilled(e),
                    this._fulfilled() === this.howMany() && (this._values.length = this.howMany(),
                    1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values),
                    !0)
                }
                ,
                l.prototype._promiseRejected = function(e) {
                    return this._addRejected(e),
                    this._checkOutcome()
                }
                ,
                l.prototype._promiseCancelled = function() {
                    return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(s),
                    this._checkOutcome())
                }
                ,
                l.prototype._checkOutcome = function() {
                    if (this.howMany() > this._canPossiblyFulfill()) {
                        for (var e = new o, t = this.length(); t < this._values.length; ++t)
                            this._values[t] !== s && e.push(this._values[t]);
                        return 0 < e.length ? this._reject(e) : this._cancel(),
                        !0
                    }
                    return !1
                }
                ,
                l.prototype._fulfilled = function() {
                    return this._totalResolved
                }
                ,
                l.prototype._rejected = function() {
                    return this._values.length - this.length()
                }
                ,
                l.prototype._addRejected = function(e) {
                    this._values.push(e)
                }
                ,
                l.prototype._addFulfilled = function(e) {
                    this._values[this._totalResolved++] = e
                }
                ,
                l.prototype._canPossiblyFulfill = function() {
                    return this.length() - this._rejected()
                }
                ,
                l.prototype._getRangeError = function(e) {
                    e = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
                    return new r(e)
                }
                ,
                l.prototype._resolveEmptyArray = function() {
                    this._reject(this._getRangeError(0))
                }
                ,
                e.some = u,
                e.prototype.some = function(e) {
                    return u(this, e)
                }
                ,
                e._SomePromiseArray = l
            }
        }
        , {
            "./errors": 12,
            "./util": 36
        }],
        32: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                function t(e) {
                    void 0 !== e ? (e = e._target(),
                    this._bitField = e._bitField,
                    this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0,
                    this._settledValueField = void 0)
                }
                t.prototype._settledValue = function() {
                    return this._settledValueField
                }
                ;
                var n = t.prototype.value = function() {
                    if (this.isFulfilled())
                        return this._settledValue();
                    throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n")
                }
                  , i = t.prototype.error = t.prototype.reason = function() {
                    if (this.isRejected())
                        return this._settledValue();
                    throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n")
                }
                  , r = t.prototype.isFulfilled = function() {
                    return 0 != (33554432 & this._bitField)
                }
                  , o = t.prototype.isRejected = function() {
                    return 0 != (16777216 & this._bitField)
                }
                  , a = t.prototype.isPending = function() {
                    return 0 == (50397184 & this._bitField)
                }
                  , s = t.prototype.isResolved = function() {
                    return 0 != (50331648 & this._bitField)
                }
                ;
                t.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._bitField)
                }
                ,
                e.prototype.__isCancelled = function() {
                    return 65536 == (65536 & this._bitField)
                }
                ,
                e.prototype._isCancelled = function() {
                    return this._target().__isCancelled()
                }
                ,
                e.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._target()._bitField)
                }
                ,
                e.prototype.isPending = function() {
                    return a.call(this._target())
                }
                ,
                e.prototype.isRejected = function() {
                    return o.call(this._target())
                }
                ,
                e.prototype.isFulfilled = function() {
                    return r.call(this._target())
                }
                ,
                e.prototype.isResolved = function() {
                    return s.call(this._target())
                }
                ,
                e.prototype.value = function() {
                    return n.call(this._target())
                }
                ,
                e.prototype.reason = function() {
                    var e = this._target();
                    return e._unsetRejectionIsUnhandled(),
                    i.call(e)
                }
                ,
                e.prototype._value = function() {
                    return this._settledValue()
                }
                ,
                e.prototype._reason = function() {
                    return this._unsetRejectionIsUnhandled(),
                    this._settledValue()
                }
                ,
                e.PromiseInspection = t
            }
        }
        , {}],
        33: [function(e, t, n) {
            "use strict";
            t.exports = function(s, l) {
                var u = e("./util")
                  , c = u.errorObj
                  , p = u.isObject;
                var f = {}.hasOwnProperty;
                return function(e, t) {
                    if (p(e)) {
                        if (e instanceof s)
                            return e;
                        var n, i, r, o, a = function(e) {
                            try {
                                return e.then
                            } catch (e) {
                                return c.e = e,
                                c
                            }
                        }(e);
                        if (a === c)
                            return t && t._pushContext(),
                            n = s.reject(a.e),
                            t && t._popContext(),
                            n;
                        if ("function" == typeof a)
                            return function(e) {
                                try {
                                    return f.call(e, "_promise0")
                                } catch (e) {}
                            }(e) ? (n = new s(l),
                            e._then(n._fulfill, n._reject, void 0, n, null),
                            n) : (n = e,
                            a = a,
                            t = t,
                            i = new s(l),
                            r = i,
                            t && t._pushContext(),
                            i._captureStackTrace(),
                            t && t._popContext(),
                            o = !0,
                            t = u.tryCatch(a).call(n, function(e) {
                                i && (i._resolveCallback(e),
                                i = null)
                            }, function(e) {
                                i && (i._rejectCallback(e, o, !0),
                                i = null)
                            }),
                            o = !1,
                            i && t === c && (i._rejectCallback(t.e, !0, !0),
                            i = null),
                            r)
                    }
                    return e
                }
            }
        }
        , {
            "./util": 36
        }],
        34: [function(e, t, n) {
            "use strict";
            t.exports = function(i, r, a) {
                var s = e("./util")
                  , l = i.TimeoutError;
                function u(e) {
                    this.handle = e
                }
                u.prototype._resultCancelled = function() {
                    clearTimeout(this.handle)
                }
                ;
                function o(e) {
                    return t(+this).thenReturn(e)
                }
                var t = i.delay = function(e, t) {
                    var n;
                    return void 0 !== t ? (n = i.resolve(t)._then(o, null, null, e, void 0),
                    a.cancellation() && t instanceof i && n._setOnCancel(t)) : (n = new i(r),
                    t = setTimeout(function() {
                        n._fulfill()
                    }, +e),
                    a.cancellation() && n._setOnCancel(new u(t)),
                    n._captureStackTrace()),
                    n._setAsyncGuaranteed(),
                    n
                }
                ;
                i.prototype.delay = function(e) {
                    return t(e, this)
                }
                ;
                function n(e) {
                    return clearTimeout(this.handle),
                    e
                }
                function c(e) {
                    throw clearTimeout(this.handle),
                    e
                }
                i.prototype.timeout = function(e, i) {
                    e = +e;
                    var r, o, e = new u(setTimeout(function() {
                        var e, t, n;
                        r.isPending() && (e = r,
                        n = o,
                        t = "string" != typeof (t = i) ? t instanceof Error ? t : new l("operation timed out") : new l(t),
                        s.markAsOriginatingFromRejection(t),
                        e._attachExtraTrace(t),
                        e._reject(t),
                        null != n) && n.cancel()
                    }, e));
                    return a.cancellation() ? (o = this.then(),
                    (r = o._then(n, c, void 0, e, void 0))._setOnCancel(e)) : r = this._then(n, c, void 0, e, void 0),
                    r
                }
            }
        }
        , {
            "./util": 36
        }],
        35: [function(a, e, t) {
            "use strict";
            e.exports = function(p, f, d, t, e, h) {
                var g = a("./util")
                  , n = a("./errors").TypeError
                  , i = a("./util").inherits
                  , m = g.errorObj
                  , y = g.tryCatch
                  , r = {};
                function l(e) {
                    setTimeout(function() {
                        throw e
                    }, 0)
                }
                function v(i, r) {
                    var o = 0
                      , a = i.length
                      , s = new p(e);
                    return function e() {
                        if (a <= o)
                            return s._fulfill();
                        n = i[o++],
                        (t = d(n)) !== n && "function" == typeof n._isDisposable && "function" == typeof n._getDisposer && n._isDisposable() && t._setDisposable(n._getDisposer());
                        var t, n = t;
                        if (n instanceof p && n._isDisposable()) {
                            try {
                                n = d(n._getDisposer().tryDispose(r), i.promise)
                            } catch (e) {
                                return l(e)
                            }
                            if (n instanceof p)
                                return n._then(e, l, null, null, null)
                        }
                        e()
                    }(),
                    s
                }
                function b(e, t, n) {
                    this._data = e,
                    this._promise = t,
                    this._context = n
                }
                function o(e, t, n) {
                    this.constructor$(e, t, n)
                }
                function _(e) {
                    return b.isDisposer(e) ? (this.resources[this.index]._setDisposable(e),
                    e.promise()) : e
                }
                function w(e) {
                    this.length = e,
                    this.promise = null,
                    this[e - 1] = null
                }
                b.prototype.data = function() {
                    return this._data
                }
                ,
                b.prototype.promise = function() {
                    return this._promise
                }
                ,
                b.prototype.resource = function() {
                    return this.promise().isFulfilled() ? this.promise().value() : r
                }
                ,
                b.prototype.tryDispose = function(e) {
                    var t = this.resource()
                      , n = this._context
                      , t = (void 0 !== n && n._pushContext(),
                    t !== r ? this.doDispose(t, e) : null);
                    return void 0 !== n && n._popContext(),
                    this._promise._unsetDisposable(),
                    this._data = null,
                    t
                }
                ,
                b.isDisposer = function(e) {
                    return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose
                }
                ,
                i(o, b),
                o.prototype.doDispose = function(e, t) {
                    return this.data().call(e, e, t)
                }
                ,
                w.prototype._resultCancelled = function() {
                    for (var e = this.length, t = 0; t < e; ++t) {
                        var n = this[t];
                        n instanceof p && n.cancel()
                    }
                }
                ,
                p.using = function() {
                    var e = arguments.length;
                    if (e < 2)
                        return f("you must pass at least 2 arguments to Promise.using");
                    var t, o = arguments[e - 1];
                    if ("function" != typeof o)
                        return f("expecting a function but got " + g.classString(o));
                    for (var a = !0, n = (2 === e && Array.isArray(arguments[0]) ? (e = (t = arguments[0]).length,
                    a = !1) : (t = arguments,
                    e--),
                    new w(e)), i = 0; i < e; ++i) {
                        var r, s = t[i];
                        b.isDisposer(s) ? (s = (r = s).promise())._setDisposable(r) : (r = d(s))instanceof p && (s = r._then(_, null, null, {
                            resources: n,
                            index: i
                        }, void 0)),
                        n[i] = s
                    }
                    for (var l = new Array(n.length), i = 0; i < l.length; ++i)
                        l[i] = p.resolve(n[i]).reflect();
                    var u = p.all(l).then(function(e) {
                        for (var t = 0; t < e.length; ++t) {
                            var n = e[t];
                            if (n.isRejected())
                                return m.e = n.error(),
                                m;
                            if (!n.isFulfilled())
                                return void u.cancel();
                            e[t] = n.value()
                        }
                        c._pushContext(),
                        o = y(o);
                        var i = a ? o.apply(void 0, e) : o(e)
                          , r = c._popContext();
                        return h.checkForgottenReturns(i, r, "Promise.using", c),
                        i
                    })
                      , c = u.lastly(function() {
                        var e = new p.PromiseInspection(u);
                        return v(n, e)
                    });
                    return (n.promise = c)._setOnCancel(n),
                    c
                }
                ,
                p.prototype._setDisposable = function(e) {
                    this._bitField = 131072 | this._bitField,
                    this._disposer = e
                }
                ,
                p.prototype._isDisposable = function() {
                    return 0 < (131072 & this._bitField)
                }
                ,
                p.prototype._getDisposer = function() {
                    return this._disposer
                }
                ,
                p.prototype._unsetDisposable = function() {
                    this._bitField = -131073 & this._bitField,
                    this._disposer = void 0
                }
                ,
                p.prototype.disposer = function(e) {
                    if ("function" == typeof e)
                        return new o(e,this,t());
                    throw new n
                }
            }
        }
        , {
            "./errors": 12,
            "./util": 36
        }],
        36: [function(e, t, N) {
            "use strict";
            var u = e("./es5"), n = "undefined" == typeof navigator, i = {
                e: {}
            }, r, o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null;
            function a() {
                try {
                    var e = r;
                    return r = null,
                    e.apply(this, arguments)
                } catch (e) {
                    return i.e = e,
                    i
                }
            }
            function s(e) {
                return r = e,
                a
            }
            var l = function(t, n) {
                var i = {}.hasOwnProperty;
                function e() {
                    for (var e in this.constructor = t,
                    (this.constructor$ = n).prototype)
                        i.call(n.prototype, e) && "$" !== e.charAt(e.length - 1) && (this[e + "$"] = n.prototype[e])
                }
                return e.prototype = n.prototype,
                t.prototype = new e,
                t.prototype
            };
            function c(e) {
                return null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e
            }
            function p(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }
            function f(e) {
                return c(e) ? new Error(k(e)) : e
            }
            function d(e, t) {
                for (var n = e.length, i = new Array(n + 1), r = 0; r < n; ++r)
                    i[r] = e[r];
                return i[r] = t,
                i
            }
            function h(e, t, n) {
                var i;
                return u.isES5 ? null != (i = Object.getOwnPropertyDescriptor(e, t)) ? null == i.get && null == i.set ? i.value : n : void 0 : {}.hasOwnProperty.call(e, t) ? e[t] : void 0
            }
            function g(e, t, n) {
                return c(e) || u.defineProperty(e, t, {
                    value: n,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }),
                e
            }
            function m(e) {
                throw e
            }
            var y = function() {
                function s(e) {
                    for (var t = 0; t < o.length; ++t)
                        if (o[t] === e)
                            return 1
                }
                var l, r, o = [Array.prototype, Object.prototype, Function.prototype];
                return u.isES5 ? (l = Object.getOwnPropertyNames,
                function(e) {
                    for (var t, n = [], i = Object.create(null); null != e && !s(e); ) {
                        try {
                            t = l(e)
                        } catch (e) {
                            return n
                        }
                        for (var r = 0; r < t.length; ++r) {
                            var o, a = t[r];
                            i[a] || (i[a] = !0,
                            null != (o = Object.getOwnPropertyDescriptor(e, a)) && null == o.get && null == o.set && n.push(a))
                        }
                        e = u.getPrototypeOf(e)
                    }
                    return n
                }
                ) : (r = {}.hasOwnProperty,
                function(e) {
                    if (s(e))
                        return [];
                    var t = [];
                    e: for (var n in e) {
                        if (!r.call(e, n))
                            for (var i = 0; i < o.length; ++i)
                                if (r.call(o[i], n))
                                    continue e;
                        t.push(n)
                    }
                    return t
                }
                )
            }()
              , v = /this\s*\.\s*\S+\s*=/;
            function b(e) {
                try {
                    if ("function" == typeof e) {
                        var t = u.names(e.prototype)
                          , n = u.isES5 && 1 < t.length
                          , i = 0 < t.length && !(1 === t.length && "constructor" === t[0])
                          , r = v.test(e + "") && 0 < u.names(e).length;
                        if (n || i || r)
                            return !0
                    }
                    return !1
                } catch (e) {
                    return !1
                }
            }
            function _(e) {
                function t() {}
                t.prototype = e;
                var n = new t;
                function i() {
                    n.foo
                }
                return i(),
                i(),
                e
            }
            var w = /^[a-z$_][a-z$_0-9]*$/i;
            function x(e) {
                return w.test(e)
            }
            function T(e, t, n) {
                for (var i = new Array(e), r = 0; r < e; ++r)
                    i[r] = t + r + n;
                return i
            }
            function k(e) {
                try {
                    return e + ""
                } catch (e) {
                    return "[no string representation]"
                }
            }
            function S(e) {
                return e instanceof Error || null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name
            }
            function E(e) {
                try {
                    g(e, "isOperational", !0)
                } catch (e) {}
            }
            function C(e) {
                return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational)
            }
            function j(e) {
                return S(e) && u.propertyIsWritable(e, "stack")
            }
            var O = "stack"in new Error ? function(e) {
                return j(e) ? e : new Error(k(e))
            }
            : function(e) {
                if (j(e))
                    return e;
                try {
                    throw new Error(k(e))
                } catch (e) {
                    return e
                }
            }
            ;
            function L(e) {
                return {}.toString.call(e)
            }
            function D(e, t, n) {
                for (var i = u.names(e), r = 0; r < i.length; ++r) {
                    var o = i[r];
                    if (n(o))
                        try {
                            u.defineProperty(t, o, u.getDescriptor(e, o))
                        } catch (e) {}
                }
            }
            var M = function(e) {
                return u.isArray(e) ? e : null
            }, P, M, R = ("undefined" != typeof Symbol && Symbol.iterator && (P = "function" == typeof Array.from ? function(e) {
                return Array.from(e)
            }
            : function(e) {
                for (var t, n = [], i = e[Symbol.iterator](); !(t = i.next()).done; )
                    n.push(t.value);
                return n
            }
            ,
            M = function(e) {
                return u.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? P(e) : null
            }
            ),
            "undefined" != typeof process && "[object process]" === L(process).toLowerCase()), A = "undefined" != typeof process && void 0 !== process.env;
            function H(e) {
                return A ? process.env[e] : void 0
            }
            function I() {
                if ("function" == typeof Promise)
                    try {
                        var e = new Promise(function() {}
                        );
                        if ("[object Promise]" === {}.toString.call(e))
                            return Promise
                    } catch (e) {}
            }
            function B(e, t) {
                return e.bind(t)
            }
            var F = {
                isClass: b,
                isIdentifier: x,
                inheritedDataKeys: y,
                getDataPropertyOrDefault: h,
                thrower: m,
                isArray: u.isArray,
                asArray: M,
                notEnumerableProp: g,
                isPrimitive: c,
                isObject: p,
                isError: S,
                canEvaluate: n,
                errorObj: i,
                tryCatch: s,
                inherits: l,
                withAppended: d,
                maybeWrapAsError: f,
                toFastProperties: _,
                filledRange: T,
                toString: k,
                canAttachTrace: j,
                ensureErrorObject: O,
                originatesFromRejection: C,
                markAsOriginatingFromRejection: E,
                classString: L,
                copyDescriptors: D,
                hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                isNode: R,
                hasEnvVariables: A,
                env: H,
                global: o,
                getNativePromise: I,
                domainBind: B
            };
            F.isRecentNode = F.isNode && function() {
                var e;
                return process.versions && process.versions.node ? e = process.versions.node.split(".").map(Number) : process.version && (e = process.version.split(".").map(Number)),
                0 === e[0] && 10 < e[1] || 0 < e[0]
            }(),
            F.isNode && F.toFastProperties(process);
            try {
                throw new Error
            } catch (e) {
                F.lastLineError = e
            }
            t.exports = F
        }
        , {
            "./es5": 13
        }]
    }, {}, [4])(4)
}),
"undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise),
Promise.config && Promise.config({
    warnings: !1
}),
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(x, N) {
    "use strict";
    function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function R(e) {
        return null != e && e === e.window
    }
    var t = []
      , H = Object.getPrototypeOf
      , s = t.slice
      , I = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , B = t.push
      , b = t.indexOf
      , U = {}
      , q = U.toString
      , $ = U.hasOwnProperty
      , V = $.toString
      , W = V.call(Object)
      , g = {}
      , T = x.document
      , z = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function Q(e, t, n) {
        var i, r, o = (n = n || T).createElement("script");
        if (o.text = e,
        t)
            for (i in z)
                (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function J(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[q.call(e)] || "object" : typeof e
    }
    var G = /HTML$/i
      , k = function(e, t) {
        return new k.fn.init(e,t)
    };
    function Y(e) {
        var t = !!e && "length"in e && e.length
          , n = J(e);
        return !v(e) && !R(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    k.fn = k.prototype = {
        jquery: "3.7.0",
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = k.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(k.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(k.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: B,
        sort: t.sort,
        splice: t.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, i, r, o = arguments[0] || {}, a = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || v(o) || (o = {}),
        a === s && (o = this,
        a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && o !== n && (l && n && (k.isPlainObject(n) || (i = Array.isArray(n))) ? (r = o[t],
                    r = i && !Array.isArray(r) ? [] : i || k.isPlainObject(r) ? r : {},
                    i = !1,
                    o[t] = k.extend(l, r, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    k.extend({
        expando: "jQuery" + ("3.7.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== q.call(e) || (e = H(e)) && ("function" != typeof (e = $.call(e, "constructor") && e.constructor) || V.call(e) !== W))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            Q(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (Y(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r)
                    return e.textContent;
                if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += k.text(t);
            return n
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (Y(Object(e)) ? k.merge(t, "string" == typeof e ? [e] : e) : B.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : b.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !G.test(t || e && e.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                !t(e[r], r) != a && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, a = [];
            if (Y(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && a.push(r);
            return I(a)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var X = t.pop
      , K = t.sort
      , Z = t.splice
      , n = "[\\x20\\t\\r\\n\\f]"
      , ee = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$","g")
      , te = (k.contains = function(e, t) {
        t = t && t.parentNode;
        return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
    }
    ,
    /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);
    function ne(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    k.escapeSelector = function(e) {
        return (e + "").replace(te, ne)
    }
    ;
    var ie, w, re, oe, ae, S, se, E, f, le, i = T, ue = B, C = ue, j = k.expando, O = 0, ce = 0, pe = Le(), fe = Le(), de = Le(), he = Le(), ge = function(e, t) {
        return e === t && (ae = !0),
        0
    }, me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", e = "(?:\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", r = "\\[" + n + "*(" + e + ")(?:" + n + "*([*^$|!~]?=)" + n + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + n + "*\\]", o = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + r + ")*)|.*)\\)|)", ye = new RegExp(n + "+","g"), ve = new RegExp("^" + n + "*," + n + "*"), be = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"), _e = new RegExp(n + "|>"), we = new RegExp(o), xe = new RegExp("^" + e + "$"), Te = {
        ID: new RegExp("^#(" + e + ")"),
        CLASS: new RegExp("^\\.(" + e + ")"),
        TAG: new RegExp("^(" + e + "|[*])"),
        ATTR: new RegExp("^" + r),
        PSEUDO: new RegExp("^" + o),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)","i"),
        bool: new RegExp("^(?:" + me + ")$","i"),
        needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)","i")
    }, ke = /^(?:input|select|textarea|button)$/i, Se = /^h\d$/i, Ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ce = /[+~]/, p = new RegExp("\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\([^\\r\\n\\f])","g"), d = function(e, t) {
        e = "0x" + e.slice(1) - 65536;
        return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
    }, je = function() {
        Fe()
    }, Oe = Ie(function(e) {
        return !0 === e.disabled && _(e, "fieldset")
    }, {
        dir: "parentNode",
        next: "legend"
    });
    try {
        C.apply(t = s.call(i.childNodes), i.childNodes),
        t[i.childNodes.length].nodeType
    } catch (ie) {
        C = {
            apply: function(e, t) {
                ue.apply(e, s.call(t))
            },
            call: function(e) {
                ue.apply(e, s.call(arguments, 1))
            }
        }
    }
    function L(e, t, n, i) {
        var r, o, a, s, l, u, c = t && t.ownerDocument, p = t ? t.nodeType : 9;
        if (n = n || [],
        "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
            return n;
        if (!i && (Fe(t),
        t = t || S,
        E)) {
            if (11 !== p && (s = Ee.exec(e)))
                if (r = s[1]) {
                    if (9 === p) {
                        if (!(u = t.getElementById(r)))
                            return n;
                        if (u.id === r)
                            return C.call(n, u),
                            n
                    } else if (c && (u = c.getElementById(r)) && L.contains(t, u) && u.id === r)
                        return C.call(n, u),
                        n
                } else {
                    if (s[2])
                        return C.apply(n, t.getElementsByTagName(e)),
                        n;
                    if ((r = s[3]) && t.getElementsByClassName)
                        return C.apply(n, t.getElementsByClassName(r)),
                        n
                }
            if (!(he[e + " "] || f && f.test(e))) {
                if (u = e,
                c = t,
                1 === p && (_e.test(e) || be.test(e))) {
                    for ((c = Ce.test(e) && Ae(t.parentNode) || t) == t && g.scope || ((a = t.getAttribute("id")) ? a = k.escapeSelector(a) : t.setAttribute("id", a = j)),
                    o = (l = Re(e)).length; o--; )
                        l[o] = (a ? "#" + a : ":scope") + " " + He(l[o]);
                    u = l.join(",")
                }
                try {
                    return C.apply(n, c.querySelectorAll(u)),
                    n
                } catch (t) {
                    he(e, !0)
                } finally {
                    a === j && t.removeAttribute("id")
                }
            }
        }
        return Ve(e.replace(ee, "$1"), t, n, i)
    }
    function Le() {
        var i = [];
        return function e(t, n) {
            return i.push(t + " ") > w.cacheLength && delete e[i.shift()],
            e[t + " "] = n
        }
    }
    function D(e) {
        return e[j] = !0,
        e
    }
    function De(e) {
        var t = S.createElement("fieldset");
        try {
            return !!e(t)
        } catch (e) {
            return !1
        } finally {
            t.parentNode && t.parentNode.removeChild(t)
        }
    }
    function Me(t) {
        return function(e) {
            return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Oe(e) === t : e.disabled === t : "label"in e && e.disabled === t
        }
    }
    function Pe(a) {
        return D(function(o) {
            return o = +o,
            D(function(e, t) {
                for (var n, i = a([], e.length, o), r = i.length; r--; )
                    e[n = i[r]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }
    function Ae(e) {
        return e && void 0 !== e.getElementsByTagName && e
    }
    function Fe(e) {
        var e = e ? e.ownerDocument || e : i;
        return e != S && 9 === e.nodeType && e.documentElement && (se = (S = e).documentElement,
        E = !k.isXMLDoc(S),
        le = se.matches || se.webkitMatchesSelector || se.msMatchesSelector,
        i != S && (e = S.defaultView) && e.top !== e && e.addEventListener("unload", je),
        g.getById = De(function(e) {
            return se.appendChild(e).id = k.expando,
            !S.getElementsByName || !S.getElementsByName(k.expando).length
        }),
        g.disconnectedMatch = De(function(e) {
            return le.call(e, "*")
        }),
        g.scope = De(function() {
            return S.querySelectorAll(":scope")
        }),
        g.cssHas = De(function() {
            try {
                return S.querySelector(":has(*,:jqfake)"),
                0
            } catch (e) {
                return 1
            }
        }),
        g.getById ? (w.filter.ID = function(e) {
            var t = e.replace(p, d);
            return function(e) {
                return e.getAttribute("id") === t
            }
        }
        ,
        w.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && E)
                return (t = t.getElementById(e)) ? [t] : []
        }
        ) : (w.filter.ID = function(e) {
            var t = e.replace(p, d);
            return function(e) {
                e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return e && e.value === t
            }
        }
        ,
        w.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && E) {
                var n, i, r, o = t.getElementById(e);
                if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                    for (r = t.getElementsByName(e),
                    i = 0; o = r[i++]; )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o]
                }
                return []
            }
        }
        ),
        w.find.TAG = function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
        }
        ,
        w.find.CLASS = function(e, t) {
            if (void 0 !== t.getElementsByClassName && E)
                return t.getElementsByClassName(e)
        }
        ,
        f = [],
        De(function(e) {
            var t;
            se.appendChild(e).innerHTML = "<a id='" + j + "' href='' disabled='disabled'></a><select id='" + j + "-\r\\' disabled='disabled'><option selected=''></option></select>",
            e.querySelectorAll("[selected]").length || f.push("\\[" + n + "*(?:value|" + me + ")"),
            e.querySelectorAll("[id~=" + j + "-]").length || f.push("~="),
            e.querySelectorAll("a#" + j + "+*").length || f.push(".#.+[+~]"),
            e.querySelectorAll(":checked").length || f.push(":checked"),
            (t = S.createElement("input")).setAttribute("type", "hidden"),
            e.appendChild(t).setAttribute("name", "D"),
            se.appendChild(e).disabled = !0,
            2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"),
            (t = S.createElement("input")).setAttribute("name", ""),
            e.appendChild(t),
            e.querySelectorAll("[name='']").length || f.push("\\[" + n + "*name" + n + "*=" + n + "*(?:''|\"\")")
        }),
        g.cssHas || f.push(":has"),
        f = f.length && new RegExp(f.join("|")),
        ge = function(e, t) {
            var n;
            return e === t ? (ae = !0,
            0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument == i && L.contains(i, e) ? -1 : t === S || t.ownerDocument == i && L.contains(i, t) ? 1 : oe ? b.call(oe, e) - b.call(oe, t) : 0 : 4 & n ? -1 : 1)
        }
        ),
        S
    }
    for (ie in L.matches = function(e, t) {
        return L(e, null, null, t)
    }
    ,
    L.matchesSelector = function(e, t) {
        if (Fe(e),
        E && !he[t + " "] && (!f || !f.test(t)))
            try {
                var n = le.call(e, t);
                if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                    return n
            } catch (e) {
                he(t, !0)
            }
        return 0 < L(t, S, null, [e]).length
    }
    ,
    L.contains = function(e, t) {
        return (e.ownerDocument || e) != S && Fe(e),
        k.contains(e, t)
    }
    ,
    L.attr = function(e, t) {
        (e.ownerDocument || e) != S && Fe(e);
        var n = w.attrHandle[t.toLowerCase()]
          , n = n && $.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== n ? n : e.getAttribute(t)
    }
    ,
    L.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }
    ,
    k.uniqueSort = function(e) {
        var t, n = [], i = 0, r = 0;
        if (ae = !g.sortStable,
        oe = !g.sortStable && s.call(e, 0),
        K.call(e, ge),
        ae) {
            for (; t = e[r++]; )
                t === e[r] && (i = n.push(r));
            for (; i--; )
                Z.call(e, n[i], 1)
        }
        return oe = null,
        e
    }
    ,
    k.fn.uniqueSort = function() {
        return this.pushStack(k.uniqueSort(s.apply(this)))
    }
    ,
    (w = k.expr = {
        cacheLength: 50,
        createPseudo: D,
        match: Te,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(e) {
                return e[1] = e[1].replace(p, d),
                e[3] = (e[3] || e[4] || e[5] || "").replace(p, d),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
            },
            CHILD: function(e) {
                return e[1] = e[1].toLowerCase(),
                "nth" === e[1].slice(0, 3) ? (e[3] || L.error(e[0]),
                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && L.error(e[0]),
                e
            },
            PSEUDO: function(e) {
                var t, n = !e[6] && e[2];
                return Te.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && we.test(n) && (t = (t = Re(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                e[2] = n.slice(0, t)),
                e.slice(0, 3))
            }
        },
        filter: {
            TAG: function(e) {
                var t = e.replace(p, d).toLowerCase();
                return "*" === e ? function() {
                    return !0
                }
                : function(e) {
                    return _(e, t)
                }
            },
            CLASS: function(e) {
                var t = pe[e + " "];
                return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && pe(e, function(e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
            },
            ATTR: function(t, n, i) {
                return function(e) {
                    e = L.attr(e, t);
                    return null == e ? "!=" === n : !n || (e += "",
                    "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(ye, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                }
            },
            CHILD: function(d, e, t, h, g) {
                var m = "nth" !== d.slice(0, 3)
                  , y = "last" !== d.slice(-4)
                  , v = "of-type" === e;
                return 1 === h && 0 === g ? function(e) {
                    return !!e.parentNode
                }
                : function(e, t, n) {
                    var i, r, o, a, s, l = m != y ? "nextSibling" : "previousSibling", u = e.parentNode, c = v && e.nodeName.toLowerCase(), p = !n && !v, f = !1;
                    if (u) {
                        if (m) {
                            for (; l; ) {
                                for (o = e; o = o[l]; )
                                    if (v ? _(o, c) : 1 === o.nodeType)
                                        return !1;
                                s = l = "only" === d && !s && "nextSibling"
                            }
                            return !0
                        }
                        if (s = [y ? u.firstChild : u.lastChild],
                        y && p) {
                            for (f = (a = (i = (r = u[j] || (u[j] = {}))[d] || [])[0] === O && i[1]) && i[2],
                            o = a && u.childNodes[a]; o = ++a && o && o[l] || (f = a = 0,
                            s.pop()); )
                                if (1 === o.nodeType && ++f && o === e) {
                                    r[d] = [O, a, f];
                                    break
                                }
                        } else if (!1 === (f = p ? a = (i = (r = e[j] || (e[j] = {}))[d] || [])[0] === O && i[1] : f))
                            for (; (o = ++a && o && o[l] || (f = a = 0,
                            s.pop())) && ((v ? !_(o, c) : 1 !== o.nodeType) || !++f || (p && ((r = o[j] || (o[j] = {}))[d] = [O, f]),
                            o !== e)); )
                                ;
                        return (f -= g) === h || f % h == 0 && 0 <= f / h
                    }
                }
            },
            PSEUDO: function(e, o) {
                var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || L.error("unsupported pseudo: " + e);
                return a[j] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                w.setFilters.hasOwnProperty(e.toLowerCase()) ? D(function(e, t) {
                    for (var n, i = a(e, o), r = i.length; r--; )
                        e[n = b.call(e, i[r])] = !(t[n] = i[r])
                }) : function(e) {
                    return a(e, 0, t)
                }
                ) : a
            }
        },
        pseudos: {
            not: D(function(e) {
                var i = []
                  , r = []
                  , s = $e(e.replace(ee, "$1"));
                return s[j] ? D(function(e, t, n, i) {
                    for (var r, o = s(e, null, i, []), a = e.length; a--; )
                        (r = o[a]) && (e[a] = !(t[a] = r))
                }) : function(e, t, n) {
                    return i[0] = e,
                    s(i, null, n, r),
                    i[0] = null,
                    !r.pop()
                }
            }),
            has: D(function(t) {
                return function(e) {
                    return 0 < L(t, e).length
                }
            }),
            contains: D(function(t) {
                return t = t.replace(p, d),
                function(e) {
                    return -1 < (e.textContent || k.text(e)).indexOf(t)
                }
            }),
            lang: D(function(n) {
                return xe.test(n || "") || L.error("unsupported lang: " + n),
                n = n.replace(p, d).toLowerCase(),
                function(e) {
                    var t;
                    do {
                        if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                            return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1
                }
            }),
            target: function(e) {
                var t = x.location && x.location.hash;
                return t && t.slice(1) === e.id
            },
            root: function(e) {
                return e === se
            },
            focus: function(e) {
                return e === function() {
                    try {
                        return S.activeElement
                    } catch (e) {}
                }() && S.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: Me(!1),
            disabled: Me(!0),
            checked: function(e) {
                return _(e, "input") && !!e.checked || _(e, "option") && !!e.selected
            },
            selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex,
                !0 === e.selected
            },
            empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6)
                        return !1;
                return !0
            },
            parent: function(e) {
                return !w.pseudos.empty(e)
            },
            header: function(e) {
                return Se.test(e.nodeName)
            },
            input: function(e) {
                return ke.test(e.nodeName)
            },
            button: function(e) {
                return _(e, "input") && "button" === e.type || _(e, "button")
            },
            text: function(e) {
                return _(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: Pe(function() {
                return [0]
            }),
            last: Pe(function(e, t) {
                return [t - 1]
            }),
            eq: Pe(function(e, t, n) {
                return [n < 0 ? n + t : n]
            }),
            even: Pe(function(e, t) {
                for (var n = 0; n < t; n += 2)
                    e.push(n);
                return e
            }),
            odd: Pe(function(e, t) {
                for (var n = 1; n < t; n += 2)
                    e.push(n);
                return e
            }),
            lt: Pe(function(e, t, n) {
                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                    e.push(i);
                return e
            }),
            gt: Pe(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; )
                    e.push(i);
                return e
            })
        }
    }).pseudos.nth = w.pseudos.eq,
    {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    })
        w.pseudos[ie] = function(t) {
            return function(e) {
                return _(e, "input") && e.type === t
            }
        }(ie);
    for (ie in {
        submit: !0,
        reset: !0
    })
        w.pseudos[ie] = function(t) {
            return function(e) {
                return (_(e, "input") || _(e, "button")) && e.type === t
            }
        }(ie);
    function Ne() {}
    function Re(e, t) {
        var n, i, r, o, a, s, l, u = fe[e + " "];
        if (u)
            return t ? 0 : u.slice(0);
        for (a = e,
        s = [],
        l = w.preFilter; a; ) {
            for (o in n && !(i = ve.exec(a)) || (i && (a = a.slice(i[0].length) || a),
            s.push(r = [])),
            n = !1,
            (i = be.exec(a)) && (n = i.shift(),
            r.push({
                value: n,
                type: i[0].replace(ee, " ")
            }),
            a = a.slice(n.length)),
            w.filter)
                !(i = Te[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                r.push({
                    value: n,
                    type: o,
                    matches: i
                }),
                a = a.slice(n.length));
            if (!n)
                break
        }
        return t ? a.length : a ? L.error(e) : fe(e, s).slice(0)
    }
    function He(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++)
            i += e[t].value;
        return i
    }
    function Ie(a, e, t) {
        var s = e.dir
          , l = e.next
          , u = l || s
          , c = t && "parentNode" === u
          , p = ce++;
        return e.first ? function(e, t, n) {
            for (; e = e[s]; )
                if (1 === e.nodeType || c)
                    return a(e, t, n);
            return !1
        }
        : function(e, t, n) {
            var i, r, o = [O, p];
            if (n) {
                for (; e = e[s]; )
                    if ((1 === e.nodeType || c) && a(e, t, n))
                        return !0
            } else
                for (; e = e[s]; )
                    if (1 === e.nodeType || c)
                        if (r = e[j] || (e[j] = {}),
                        l && _(e, l))
                            e = e[s] || e;
                        else {
                            if ((i = r[u]) && i[0] === O && i[1] === p)
                                return o[2] = i[2];
                            if ((r[u] = o)[2] = a(e, t, n))
                                return !0
                        }
            return !1
        }
    }
    function Be(r) {
        return 1 < r.length ? function(e, t, n) {
            for (var i = r.length; i--; )
                if (!r[i](e, t, n))
                    return !1;
            return !0
        }
        : r[0]
    }
    function Ue(e, t, n, i, r) {
        for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
            !(o = e[s]) || n && !n(o, i, r) || (a.push(o),
            u && t.push(s));
        return a
    }
    function qe(e) {
        for (var i, t, n, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = Ie(function(e) {
            return e === i
        }, a, !0), u = Ie(function(e) {
            return -1 < b.call(i, e)
        }, a, !0), c = [function(e, t, n) {
            e = !o && (n || t != re) || ((i = t).nodeType ? l : u)(e, t, n);
            return i = null,
            e
        }
        ]; s < r; s++)
            if (t = w.relative[e[s].type])
                c = [Ie(Be(c), t)];
            else {
                if ((t = w.filter[e[s].type].apply(null, e[s].matches))[j]) {
                    for (n = ++s; n < r && !w.relative[e[n].type]; n++)
                        ;
                    return function e(d, h, g, m, y, t) {
                        return m && !m[j] && (m = e(m)),
                        y && !y[j] && (y = e(y, t)),
                        D(function(e, t, n, i) {
                            var r, o, a, s, l = [], u = [], c = t.length, p = e || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++)
                                    L(e, t[i], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? p : Ue(p, l, d, n, i);
                            if (g ? g(f, s = y || (e ? d : c || m) ? [] : t, n, i) : s = f,
                            m)
                                for (r = Ue(s, u),
                                m(r, [], n, i),
                                o = r.length; o--; )
                                    (a = r[o]) && (s[u[o]] = !(f[u[o]] = a));
                            if (e) {
                                if (y || d) {
                                    if (y) {
                                        for (r = [],
                                        o = s.length; o--; )
                                            (a = s[o]) && r.push(f[o] = a);
                                        y(null, s = [], r, i)
                                    }
                                    for (o = s.length; o--; )
                                        (a = s[o]) && -1 < (r = y ? b.call(e, a) : l[o]) && (e[r] = !(t[r] = a))
                                }
                            } else
                                s = Ue(s === t ? s.splice(c, s.length) : s),
                                y ? y(null, t, s, i) : C.apply(t, s)
                        })
                    }(1 < s && Be(c), 1 < s && He(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(ee, "$1"), t, s < n && qe(e.slice(s, n)), n < r && qe(e = e.slice(n)), n < r && He(e))
                }
                c.push(t)
            }
        return Be(c)
    }
    function $e(e, t) {
        var n, m, y, v, b, i, r = [], o = [], a = de[e + " "];
        if (!a) {
            for (n = (t = t || Re(e)).length; n--; )
                ((a = qe(t[n]))[j] ? r : o).push(a);
            (a = de(e, (v = 0 < (y = r).length,
            b = 0 < (m = o).length,
            i = function(e, t, n, i, r) {
                var o, a, s, l = 0, u = "0", c = e && [], p = [], f = re, d = e || b && w.find.TAG("*", r), h = O += null == f ? 1 : Math.random() || .1, g = d.length;
                for (r && (re = t == S || t || r); u !== g && null != (o = d[u]); u++) {
                    if (b && o) {
                        for (a = 0,
                        t || o.ownerDocument == S || (Fe(o),
                        n = !E); s = m[a++]; )
                            if (s(o, t || S, n)) {
                                C.call(i, o);
                                break
                            }
                        r && (O = h)
                    }
                    v && ((o = !s && o) && l--,
                    e) && c.push(o)
                }
                if (l += u,
                v && u !== l) {
                    for (a = 0; s = y[a++]; )
                        s(c, p, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--; )
                                c[u] || p[u] || (p[u] = X.call(i));
                        p = Ue(p)
                    }
                    C.apply(i, p),
                    r && !e && 0 < p.length && 1 < l + y.length && k.uniqueSort(i)
                }
                return r && (O = h,
                re = f),
                c
            }
            ,
            v ? D(i) : i))).selector = e
        }
        return a
    }
    function Ve(e, t, n, i) {
        var r, o, a, s, l, u = "function" == typeof e && e, c = !i && Re(e = u.selector || e);
        if (n = n || [],
        1 === c.length) {
            if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && w.relative[o[1].type]) {
                if (!(t = (w.find.ID(a.matches[0].replace(p, d), t) || [])[0]))
                    return n;
                u && (t = t.parentNode),
                e = e.slice(o.shift().value.length)
            }
            for (r = Te.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
            !w.relative[s = a.type]); )
                if ((l = w.find[s]) && (i = l(a.matches[0].replace(p, d), Ce.test(o[0].type) && Ae(t.parentNode) || t))) {
                    if (o.splice(r, 1),
                    e = i.length && He(o))
                        break;
                    return C.apply(n, i),
                    n
                }
        }
        return (u || $e(e, c))(i, t, !E, n, !t || Ce.test(e) && Ae(t.parentNode) || t),
        n
    }
    Ne.prototype = w.filters = w.pseudos,
    w.setFilters = new Ne,
    g.sortStable = j.split("").sort(ge).join("") === j,
    Fe(),
    g.sortDetached = De(function(e) {
        return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
    }),
    k.find = L,
    k.expr[":"] = k.expr.pseudos,
    k.unique = k.uniqueSort,
    L.compile = $e,
    L.select = Ve,
    L.setDocument = Fe,
    L.escape = k.escapeSelector,
    L.getText = k.text,
    L.isXML = k.isXMLDoc,
    L.selectors = k.expr,
    L.support = k.support,
    L.uniqueSort = k.uniqueSort;
    function We(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && k(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function ze(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var Qe = k.expr.match.needsContext
      , Je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Ge(e, n, i) {
        return v(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < b.call(n, e) !== i
        }) : k.filter(n, e, i)
    }
    k.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? k.find.matchesSelector(i, e) ? [i] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (k.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                k.find(e, r[t], n);
            return 1 < i ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(Ge(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(Ge(this, e || [], !0))
        },
        is: function(e) {
            return !!Ge(this, "string" == typeof e && Qe.test(e) ? k(e) : e || [], !1).length
        }
    });
    var Ye, Xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ke = ((k.fn.init = function(e, t, n) {
        if (e) {
            if (n = n || Ye,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Xe.exec(e)) || !i[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (i[1]) {
                if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
                Je.test(i[1]) && k.isPlainObject(t))
                    for (var i in t)
                        v(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
            } else
                (n = T.getElementById(i[2])) && (this[0] = n,
                this.length = 1)
        }
        return this
    }
    ).prototype = k.fn,
    Ye = k(T),
    /^(?:parents|prev(?:Until|All))/), Ze = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function et(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && k(e);
            if (!Qe.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.call(k(e), this[0]) : b.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return We(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return We(e, "parentNode", n)
        },
        next: function(e) {
            return et(e, "nextSibling")
        },
        prev: function(e) {
            return et(e, "previousSibling")
        },
        nextAll: function(e) {
            return We(e, "nextSibling")
        },
        prevAll: function(e) {
            return We(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return We(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return We(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ze((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ze(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && H(e.contentDocument) ? e.contentDocument : (_(e, "template") && (e = e.content || e),
            k.merge([], e.childNodes))
        }
    }, function(i, r) {
        k.fn[i] = function(e, t) {
            var n = k.map(this, r, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (Ze[i] || k.uniqueSort(n),
            Ke.test(i)) && n.reverse(),
            this.pushStack(n)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function tt(e) {
        return e
    }
    function nt(e) {
        throw e
    }
    function it(e, t, n, i) {
        var r;
        try {
            e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        k.each(e.match(M) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, i);
        function r() {
            for (s = s || i.once,
            a = o = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length; )
                    !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length,
                    t = !1);
            i.memory || (t = !1),
            o = !1,
            s && (l = t ? [] : "")
        }
        var o, t, a, s, l = [], u = [], c = -1, p = {
            add: function() {
                return l && (t && !o && (c = l.length - 1,
                u.push(t)),
                function n(e) {
                    k.each(e, function(e, t) {
                        v(t) ? i.unique && p.has(t) || l.push(t) : t && t.length && "string" !== J(t) && n(t)
                    })
                }(arguments),
                t) && !o && r(),
                this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    for (var n; -1 < (n = k.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return s = u = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return s = u = [],
                t || o || (l = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                o) || r(),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return p
    }
    ,
    k.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , a = {
                state: function() {
                    return r
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return k.Deferred(function(i) {
                        k.each(o, function(e, t) {
                            var n = v(r[t[4]]) && r[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function u(r, o, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = a.apply(n, i)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(t) ? s ? t.call(e, u(l, o, tt, s), u(l, o, nt, s)) : (l++,
                                    t.call(e, u(l, o, tt, s), u(l, o, nt, s), u(l, o, tt, o.notifyWith))) : (a !== tt && (n = void 0,
                                    i = [e]),
                                    (s || o.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.error),
                                    l <= r + 1 && (a !== nt && (n = void 0,
                                    i = [e]),
                                    o.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? t() : (k.Deferred.getErrorHook ? t.error = k.Deferred.getErrorHook() : k.Deferred.getStackHook && (t.error = k.Deferred.getStackHook()),
                            x.setTimeout(t))
                        }
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(u(0, e, v(i) ? i : tt, e.notifyWith)),
                        o[1][3].add(u(0, e, v(t) ? t : tt)),
                        o[2][3].add(u(0, e, v(n) ? n : nt))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a
                }
            }
              , s = {};
            return k.each(o, function(e, t) {
                var n = t[2]
                  , i = t[5];
                a[t[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this,
                    o[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || a.resolveWith(r, o)
                }
            }
            var n = arguments.length
              , i = n
              , r = Array(i)
              , o = s.call(arguments)
              , a = k.Deferred();
            if (n <= 1 && (it(e, a.done(t(i)).resolve, a.reject, !n),
            "pending" === a.state() || v(o[i] && o[i].then)))
                return a.then();
            for (; i--; )
                it(o[i], t(i), a.reject);
            return a.promise()
        }
    });
    var rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , ot = (k.Deferred.exceptionHook = function(e, t) {
        x.console && x.console.warn && e && rt.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    k.readyException = function(e) {
        x.setTimeout(function() {
            throw e
        })
    }
    ,
    k.Deferred());
    function at() {
        T.removeEventListener("DOMContentLoaded", at),
        x.removeEventListener("load", at),
        k.ready()
    }
    k.fn.ready = function(e) {
        return ot.then(e).catch(function(e) {
            k.readyException(e)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || ot.resolveWith(T, [k])
        }
    }),
    k.ready.then = ot.then,
    "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? x.setTimeout(k.ready) : (T.addEventListener("DOMContentLoaded", at),
    x.addEventListener("load", at));
    function c(e, t, n, i, r, o, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === J(n))
            for (s in r = !0,
            n)
                c(e, t, s, n[s], !0, o, a);
        else if (void 0 !== i && (r = !0,
        v(i) || (a = !0),
        t = u ? a ? (t.call(e, i),
        null) : (u = t,
        function(e, t, n) {
            return u.call(k(e), n)
        }
        ) : t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
    var st = /^-ms-/
      , lt = /-([a-z])/g;
    function ut(e, t) {
        return t.toUpperCase()
    }
    function P(e) {
        return e.replace(st, "ms-").replace(lt, ut)
    }
    function ct(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function pt() {
        this.expando = k.expando + pt.uid++
    }
    pt.uid = 1,
    pt.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            ct(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[P(t)] = n;
            else
                for (i in t)
                    r[P(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][P(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(P) : (t = P(t))in i ? [t] : t.match(M) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !k.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !k.isEmptyObject(e)
        }
    };
    var y = new pt
      , l = new pt
      , ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , dt = /[A-Z]/g;
    function ht(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(dt, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : ft.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                l.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return l.hasData(e) || y.hasData(e)
        },
        data: function(e, t, n) {
            return l.access(e, t, n)
        },
        removeData: function(e, t) {
            l.remove(e, t)
        },
        _data: function(e, t, n) {
            return y.access(e, t, n)
        },
        _removeData: function(e, t) {
            y.remove(e, t)
        }
    }),
    k.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], a = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    l.set(this, n)
                }) : c(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = l.get(o, n)) || void 0 !== (t = ht(o, n)) ? t : void 0;
                    this.each(function() {
                        l.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = l.get(o),
            1 === o.nodeType) && !y.get(o, "hasDataAttrs")) {
                for (t = a.length; t--; )
                    a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = P(i.slice(5)),
                    ht(o, i, r[i]));
                y.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                l.remove(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return i = y.get(e, t = (t || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = y.access(e, t, k.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = k._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                k.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return y.get(e, n) || y.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(a, [a])
            }
            var i, r = 1, o = k.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (i = y.get(a[s], e + "queueHooks")) && i.empty && (r++,
                i.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    function gt(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && vt(e) && "none" === k.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , mt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , h = ["Top", "Right", "Bottom", "Left"]
      , yt = T.documentElement
      , vt = function(e) {
        return k.contains(e.ownerDocument, e)
    }
      , bt = {
        composed: !0
    };
    yt.getRootNode && (vt = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(bt) === e.ownerDocument
    }
    );
    function _t(e, t, n, i) {
        var r, o, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return k.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== u && +l) && mt.exec(k.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3],
            c = +(l /= 2) || 1; a--; )
                k.style(e, t, c + u),
                (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0),
                c /= o;
            k.style(e, t, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i) && (i.unit = u,
        i.start = c,
        i.end = r),
        r
    }
    var wt = {};
    function xt(e, t) {
        for (var n, i, r, o, a, s, l = [], u = 0, c = e.length; u < c; u++)
            (i = e[u]).style && (n = i.style.display,
            t ? ("none" === n && (l[u] = y.get(i, "display") || null,
            l[u] || (i.style.display = "")),
            "" === i.style.display && gt(i) && (l[u] = (s = o = r = void 0,
            o = i.ownerDocument,
            a = i.nodeName,
            (s = wt[a]) || (r = o.body.appendChild(o.createElement(a)),
            s = k.css(r, "display"),
            r.parentNode.removeChild(r),
            wt[a] = s = "none" === s ? "block" : s)))) : "none" !== n && (l[u] = "none",
            y.set(i, "display", n)));
        for (u = 0; u < c; u++)
            null != l[u] && (e[u].style.display = l[u]);
        return e
    }
    k.fn.extend({
        show: function() {
            return xt(this, !0)
        },
        hide: function() {
            return xt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                gt(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var Tt = /^(?:checkbox|radio)$/i
      , kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , St = /^$|^module$|\/(?:java|ecma)script/i
      , r = T.createDocumentFragment().appendChild(T.createElement("div"))
      , m = ((o = T.createElement("input")).setAttribute("type", "radio"),
    o.setAttribute("checked", "checked"),
    o.setAttribute("name", "t"),
    r.appendChild(o),
    g.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
    r.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!r.cloneNode(!0).lastChild.defaultValue,
    r.innerHTML = "<option></option>",
    g.option = !!r.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function A(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && _(e, t) ? k.merge([e], n) : n
    }
    function Et(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            y.set(e[n], "globalEval", !t || y.get(t[n], "globalEval"))
    }
    m.tbody = m.tfoot = m.colgroup = m.caption = m.thead,
    m.th = m.td,
    g.option || (m.optgroup = m.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ct = /<|&#?\w+;/;
    function jt(e, t, n, i, r) {
        for (var o, a, s, l, u, c = t.createDocumentFragment(), p = [], f = 0, d = e.length; f < d; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === J(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (Ct.test(o)) {
                    for (a = a || c.appendChild(t.createElement("div")),
                    s = (kt.exec(o) || ["", ""])[1].toLowerCase(),
                    s = m[s] || m._default,
                    a.innerHTML = s[1] + k.htmlPrefilter(o) + s[2],
                    u = s[0]; u--; )
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                    (a = c.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (c.textContent = "",
        f = 0; o = p[f++]; )
            if (i && -1 < k.inArray(o, i))
                r && r.push(o);
            else if (l = vt(o),
            a = A(c.appendChild(o), "script"),
            l && Et(a),
            n)
                for (u = 0; o = a[u++]; )
                    St.test(o.type || "") && n.push(o);
        return c
    }
    var Ot = /^([^.]*)(?:\.(.+)|)/;
    function Lt() {
        return !0
    }
    function Dt() {
        return !1
    }
    function Mt(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Mt(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = Dt;
        else if (!r)
            return e;
        return 1 === o && (a = r,
        (r = function(e) {
            return k().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        e.each(function() {
            k.event.add(this, t, r, i, n)
        })
    }
    function Pt(e, i, t) {
        t ? (y.set(e, i, !1),
        k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n = y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (n)
                        (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (n = s.call(arguments),
                    y.set(this, i, n),
                    this[i](),
                    t = y.get(this, i),
                    y.set(this, i, !1),
                    n !== t)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        t
                } else
                    n && (y.set(this, i, k.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Lt)
            }
        })) : void 0 === y.get(e, i) && k.event.add(e, i, Lt)
    }
    k.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, u, c, p, f, d, h = y.get(t);
            if (ct(t))
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && k.find.matchesSelector(yt, r),
                n.guid || (n.guid = k.guid++),
                s = (s = h.events) || (h.events = Object.create(null)),
                a = (a = h.handle) || (h.handle = function(e) {
                    return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(M) || [""]).length; l--; )
                    p = d = (f = Ot.exec(e[l]) || [])[1],
                    f = (f[2] || "").split(".").sort(),
                    p && (u = k.event.special[p] || {},
                    p = (r ? u.delegateType : u.bindType) || p,
                    u = k.event.special[p] || {},
                    d = k.extend({
                        type: p,
                        origType: d,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && k.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, o),
                    (c = s[p]) || ((c = s[p] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(t, i, f, a)) || t.addEventListener && t.addEventListener(p, a),
                    u.add && (u.add.call(t, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    r ? c.splice(c.delegateCount++, 0, d) : c.push(d),
                    k.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, p, f, d, h, g, m = y.hasData(e) && y.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(M) || [""]).length; u--; )
                    if (d = g = (s = Ot.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (p = k.event.special[d] || {},
                        f = l[d = (i ? p.delegateType : p.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = f.length; o--; )
                            c = f[o],
                            !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, c));
                        a && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || k.removeEvent(e, d, m.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            k.event.remove(e, d + t[u], n, i, !0);
                k.isEmptyObject(l) && y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a = new Array(arguments.length), s = k.event.fix(e), e = (y.get(this, "events") || Object.create(null))[s.type] || [], l = k.event.special[s.type] || {};
            for (a[0] = s,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (s.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (o = k.event.handlers.call(this, s, e),
                t = 0; (i = o[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (r = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== r.namespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r,
                        s.data = r.data,
                        void 0 !== (r = ((k.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < k(r, this).index(u) : k.find(r, this, null, [u]).length),
                            a[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return Tt.test(e.type) && e.click && _(e, "input") && Pt(e, "click", !0),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return Tt.test(e.type) && e.click && _(e, "input") && Pt(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return Tt.test(e.type) && e.click && _(e, "input") && y.get(e, "click") || _(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    k.Event = function(e, t) {
        if (!(this instanceof k.Event))
            return new k.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Lt : Dt,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && k.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[k.expando] = !0
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Dt,
        isPropagationStopped: Dt,
        isImmediatePropagationStopped: Dt,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Lt,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Lt,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Lt,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, k.event.addProp),
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, r) {
        function o(e) {
            var t, n;
            T.documentMode ? (t = y.get(this, "handle"),
            (n = k.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur",
            n.isSimulated = !0,
            t(e),
            n.target === n.currentTarget && t(n)) : k.event.simulate(r, e.target, k.event.fix(e))
        }
        k.event.special[i] = {
            setup: function() {
                var e;
                if (Pt(this, i, !0),
                !T.documentMode)
                    return !1;
                (e = y.get(this, r)) || this.addEventListener(r, o),
                y.set(this, r, (e || 0) + 1)
            },
            trigger: function() {
                return Pt(this, i),
                !0
            },
            teardown: function() {
                var e;
                if (!T.documentMode)
                    return !1;
                (e = y.get(this, r) - 1) ? y.set(this, r, e) : (this.removeEventListener(r, o),
                y.remove(this, r))
            },
            _default: function(e) {
                return y.get(e.target, i)
            },
            delegateType: r
        },
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = T.documentMode ? this : e
                  , n = y.get(t, r);
                n || (T.documentMode ? this.addEventListener(r, o) : e.addEventListener(i, o, !0)),
                y.set(t, r, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = T.documentMode ? this : e
                  , n = y.get(t, r) - 1;
                n ? y.set(t, r, n) : (T.documentMode ? this.removeEventListener(r, o) : e.removeEventListener(i, o, !0),
                y.remove(t, r))
            }
        }
    }),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        k.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, i) {
            return Mt(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Mt(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                i = e.handleObj,
                k(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
            else {
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = Dt),
                    this.each(function() {
                        k.event.remove(this, e, n, t)
                    });
                for (r in e)
                    this.off(r, t, e[r])
            }
            return this
        }
    });
    var At = /<script|<style|<link/i
      , Ft = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Nt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Rt(e, t) {
        return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Ht(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function It(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Bt(e, t) {
        var n, i, r, o;
        if (1 === t.nodeType) {
            if (y.hasData(e) && (o = y.get(e).events))
                for (r in y.remove(t, "handle events"),
                o)
                    for (n = 0,
                    i = o[r].length; n < i; n++)
                        k.event.add(t, r, o[r][n]);
            l.hasData(e) && (e = l.access(e),
            e = k.extend({}, e),
            l.set(t, e))
        }
    }
    function Ut(n, i, r, o) {
        i = I(i);
        var e, t, a, s, l, u, c = 0, p = n.length, f = p - 1, d = i[0], h = v(d);
        if (h || 1 < p && "string" == typeof d && !g.checkClone && Ft.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = d.call(this, e, t.html())),
                Ut(t, i, r, o)
            });
        if (p && (t = (e = jt(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(A(e, "script"), Ht)).length; c < p; c++)
                l = e,
                c !== f && (l = k.clone(l, !0, !0),
                s) && k.merge(a, A(l, "script")),
                r.call(n[c], l, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument,
                k.map(a, It),
                c = 0; c < s; c++)
                    l = a[c],
                    St.test(l.type || "") && !y.access(l, "globalEval") && k.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && !l.noModule && k._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : Q(l.textContent.replace(Nt, ""), l, u))
        }
        return n
    }
    function qt(e, t, n) {
        for (var i, r = t ? k.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || k.cleanData(A(i)),
            i.parentNode && (n && vt(i) && Et(A(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l, u, c = e.cloneNode(!0), p = vt(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = A(c),
                i = 0,
                r = (o = A(e)).length; i < r; i++)
                    s = o[i],
                    "input" === (u = (l = a[i]).nodeName.toLowerCase()) && Tt.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || A(e),
                    a = a || A(c),
                    i = 0,
                    r = o.length; i < r; i++)
                        Bt(o[i], a[i]);
                else
                    Bt(e, c);
            return 0 < (a = A(c, "script")).length && Et(a, !p && A(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, i, r = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ct(n)) {
                    if (t = n[y.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                        n[y.expando] = void 0
                    }
                    n[l.expando] && (n[l.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(e) {
            return qt(this, e, !0)
        },
        remove: function(e) {
            return qt(this, e)
        },
        text: function(e) {
            return c(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ut(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ut(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Rt(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Ut(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ut(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(A(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return c(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !At.test(e) && !m[(kt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(A(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ut(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(A(this)),
                t) && t.replaceChild(e, this)
            }, n)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], i = k(e), r = i.length - 1, o = 0; o <= r; o++)
                t = o === r ? this : this.clone(!0),
                k(i[o])[a](t),
                B.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function $t(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : x).getComputedStyle(e)
    }
    function Vt(e, t, n) {
        var i, r = {};
        for (i in t)
            r[i] = e.style[i],
            e.style[i] = t[i];
        for (i in n = n.call(e),
        t)
            e.style[i] = r[i];
        return n
    }
    var Wt, zt, Qt, Jt, Gt, Yt, Xt, a, Kt = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), Zt = /^--/, en = new RegExp(h.join("|"),"i");
    function tn(e, t, n) {
        var i, r = Zt.test(t), o = e.style;
        return (n = n || $t(e)) && (i = n.getPropertyValue(t) || n[t],
        "" !== (i = r ? i && (i.replace(ee, "$1") || void 0) : i) || vt(e) || (i = k.style(e, t)),
        !g.pixelBoxStyles()) && Kt.test(i) && en.test(t) && (r = o.width,
        e = o.minWidth,
        t = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = i,
        i = n.width,
        o.width = r,
        o.minWidth = e,
        o.maxWidth = t),
        void 0 !== i ? i + "" : i
    }
    function nn(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function rn() {
        var e;
        a && (Xt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        a.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        yt.appendChild(Xt).appendChild(a),
        e = x.getComputedStyle(a),
        Wt = "1%" !== e.top,
        Yt = 12 === on(e.marginLeft),
        a.style.right = "60%",
        Jt = 36 === on(e.right),
        zt = 36 === on(e.width),
        a.style.position = "absolute",
        Qt = 12 === on(a.offsetWidth / 3),
        yt.removeChild(Xt),
        a = null)
    }
    function on(e) {
        return Math.round(parseFloat(e))
    }
    Xt = T.createElement("div"),
    (a = T.createElement("div")).style && (a.style.backgroundClip = "content-box",
    a.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === a.style.backgroundClip,
    k.extend(g, {
        boxSizingReliable: function() {
            return rn(),
            zt
        },
        pixelBoxStyles: function() {
            return rn(),
            Jt
        },
        pixelPosition: function() {
            return rn(),
            Wt
        },
        reliableMarginLeft: function() {
            return rn(),
            Yt
        },
        scrollboxSize: function() {
            return rn(),
            Qt
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Gt && (e = T.createElement("table"),
            t = T.createElement("tr"),
            n = T.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            yt.appendChild(e).appendChild(t).appendChild(n),
            n = x.getComputedStyle(t),
            Gt = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            yt.removeChild(e)),
            Gt
        }
    }));
    var an = ["Webkit", "Moz", "ms"]
      , sn = T.createElement("div").style
      , ln = {};
    function un(e) {
        return k.cssProps[e] || ln[e] || (e in sn ? e : ln[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = an.length; n--; )
                if ((e = an[n] + t)in sn)
                    return e
        }(e) || e)
    }
    var cn = /^(none|table(?!-c[ea]).+)/
      , pn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , fn = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function dn(e, t, n) {
        var i = mt.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function hn(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0
          , u = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + h[a], !0, r)),
            i ? ("content" === n && (l -= k.css(e, "padding" + h[a], !0, r)),
            "margin" !== n && (l -= k.css(e, "border" + h[a] + "Width", !0, r))) : (l += k.css(e, "padding" + h[a], !0, r),
            "padding" !== n ? l += k.css(e, "border" + h[a] + "Width", !0, r) : s += k.css(e, "border" + h[a] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0),
        l + u
    }
    function gn(e, t, n) {
        var i = $t(e)
          , r = (!g.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, i)
          , o = r
          , a = tn(e, t, i)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Kt.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && _(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === k.css(e, "boxSizing", !1, i),
        o = s in e) && (a = e[s]),
        (a = parseFloat(a) || 0) + hn(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
    }
    function u(e, t, n, i, r) {
        return new u.prototype.init(e,t,n,i,r)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = tn(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = P(t), l = Zt.test(t), u = e.style;
                if (l || (t = un(s)),
                a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = mt.exec(n)) && r[1] && (n = _t(e, t, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (k.cssNumber[s] ? "" : "px")),
                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o = P(t);
            return Zt.test(t) || (t = un(o)),
            "normal" === (r = void 0 === (r = (o = k.cssHooks[t] || k.cssHooks[o]) && "get"in o ? o.get(e, !0, n) : r) ? tn(e, t, i) : r) && t in fn && (r = fn[t]),
            ("" === n || n) && (o = parseFloat(r),
            !0 === n || isFinite(o)) ? o || 0 : r
        }
    }),
    k.each(["height", "width"], function(e, a) {
        k.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !cn.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? gn(e, a, n) : Vt(e, pn, function() {
                        return gn(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var i = $t(e)
                  , r = !g.scrollboxSize() && "absolute" === i.position
                  , o = (r || n) && "border-box" === k.css(e, "boxSizing", !1, i)
                  , n = n ? hn(e, a, n, o, i) : 0;
                return o && r && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - hn(e, a, "border", !1, i) - .5)),
                n && (o = mt.exec(t)) && "px" !== (o[3] || "px") && (e.style[a] = t,
                t = k.css(e, a)),
                dn(0, t, n)
            }
        }
    }),
    k.cssHooks.marginLeft = nn(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(tn(e, "marginLeft")) || e.getBoundingClientRect().left - Vt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        k.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[r + h[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (k.cssHooks[r + o].set = dn)
    }),
    k.fn.extend({
        css: function(e, t) {
            return c(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = $t(e),
                    r = t.length; a < r; a++)
                        o[t[a]] = k.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((k.Tween = u).prototype = {
        constructor: u,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || k.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = u.propHooks[this.prop];
            return (e && e.get ? e : u.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = u.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : u.propHooks._default).set(this),
            this
        }
    }).init.prototype = u.prototype,
    (u.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = k.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[un(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = u.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = u.prototype.init,
    k.fx.step = {};
    var mn, yn, vn = /^(?:toggle|show|hide)$/, bn = /queueHooks$/;
    function _n() {
        yn && (!1 === T.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(_n) : x.setTimeout(_n, k.fx.interval),
        k.fx.tick())
    }
    function wn() {
        return x.setTimeout(function() {
            mn = void 0
        }),
        mn = Date.now()
    }
    function xn(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = h[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function Tn(e, t, n) {
        for (var i, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function F(r, e, t) {
        var n, o, i, a, s, l, u, c = 0, p = F.prefilters.length, f = k.Deferred().always(function() {
            delete d.elem
        }), d = function() {
            if (o)
                return !1;
            for (var e = mn || wn(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, i = h.tweens.length; n < i; n++)
                h.tweens[n].run(t);
            return f.notifyWith(r, [h, t, e]),
            t < 1 && i ? e : (i || f.notifyWith(r, [h, 1, 0]),
            f.resolveWith(r, [h]),
            !1)
        }, h = f.promise({
            elem: r,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: mn || wn(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = k.Tween(r, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , n = e ? h.tweens.length : 0;
                if (!o) {
                    for (o = !0; t < n; t++)
                        h.tweens[t].run(1);
                    e ? (f.notifyWith(r, [h, 1, 0]),
                    f.resolveWith(r, [h, e])) : f.rejectWith(r, [h, e])
                }
                return this
            }
        }), g = h.props, m = g, y = h.opts.specialEasing;
        for (i in m)
            if (s = y[a = P(i)],
            l = m[i],
            Array.isArray(l) && (s = l[1],
            l = m[i] = l[0]),
            i !== a && (m[a] = l,
            delete m[i]),
            (u = k.cssHooks[a]) && "expand"in u)
                for (i in l = u.expand(l),
                delete m[a],
                l)
                    i in m || (m[i] = l[i],
                    y[i] = s);
            else
                y[a] = s;
        for (; c < p; c++)
            if (n = F.prefilters[c].call(h, r, g, h.opts))
                return v(n.stop) && (k._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
                n;
        return k.map(g, Tn, h),
        v(h.opts.start) && h.opts.start.call(r, h),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
        k.fx.timer(k.extend(d, {
            elem: r,
            anim: h,
            queue: h.opts.queue
        })),
        h
    }
    k.Animation = k.extend(F, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return _t(n.elem, e, mt.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = v(e) ? (t = e,
            ["*"]) : e.match(M)).length; i < r; i++)
                n = e[i],
                F.tweeners[n] = F.tweeners[n] || [],
                F.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, a, s, l, u, c = "width"in t || "height"in t, p = this, f = {}, d = e.style, h = e.nodeType && gt(e), g = y.get(e, "fxshow");
            for (i in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    k.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                vn.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (h ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i])
                            continue;
                        h = !0
                    }
                    f[i] = g && g[i] || k.style(e, i)
                }
            if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(f))
                for (i in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                null == (u = g && g.display) && (u = y.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (u ? c = u : (xt([e], !0),
                u = e.style.display || u,
                c = k.css(e, "display"),
                xt([e]))),
                "inline" === c || "inline-block" === c && null != u) && "none" === k.css(e, "float") && (l || (p.done(function() {
                    d.display = u
                }),
                null == u && (c = d.display,
                u = "none" === c ? "" : c)),
                d.display = "inline-block"),
                n.overflow && (d.overflow = "hidden",
                p.always(function() {
                    d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
                })),
                l = !1,
                f)
                    l || (g ? "hidden"in g && (h = g.hidden) : g = y.access(e, "fxshow", {
                        display: u
                    }),
                    o && (g.hidden = !h),
                    h && xt([e], !0),
                    p.done(function() {
                        for (i in h || xt([e]),
                        y.remove(e, "fxshow"),
                        f)
                            k.style(e, i, f[i])
                    })),
                    l = Tn(h ? g[i] : 0, i, p),
                    i in g || (g[i] = l.start,
                    h && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? F.prefilters.unshift(e) : F.prefilters.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return k.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in k.fx.speeds ? i.duration = k.fx.speeds[i.duration] : i.duration = k.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            v(i.old) && i.old.call(this),
            i.queue && k.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = F(this, k.extend({}, t), a);
                (o || y.get(this, "finish")) && e.stop(!0)
            }
            var o = k.isEmptyObject(t)
              , a = k.speed(e, n, i);
            return r.finish = r,
            o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
        },
        stop: function(r, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof r && (o = e,
            e = r,
            r = void 0),
            e && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , n = k.timers
                  , i = y.get(this);
                if (t)
                    i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && bn.test(t) && a(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || k.dequeue(this, r)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = y.get(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = k.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, i) {
        var r = k.fn[i];
        k.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(xn(i, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: xn("show"),
        slideUp: xn("hide"),
        slideToggle: xn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        k.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (mn = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(),
        mn = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        k.fx.start()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        yn || (yn = !0,
        _n())
    }
    ,
    k.fx.stop = function() {
        yn = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(i, e) {
        return i = k.fx && k.fx.speeds[i] || i,
        this.queue(e = e || "fx", function(e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function() {
                x.clearTimeout(n)
            }
        })
    }
    ,
    o = T.createElement("input"),
    r = T.createElement("select").appendChild(T.createElement("option")),
    o.type = "checkbox",
    g.checkOn = "" !== o.value,
    g.optSelected = r.selected,
    (o = T.createElement("input")).value = "t",
    o.type = "radio",
    g.radioValue = "t" === o.value;
    var kn, Sn = k.expr.attrHandle, En = (k.fn.extend({
        attr: function(e, t) {
            return c(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (r = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? kn : void 0)),
                void 0 !== n ? null === n ? void k.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : !(r && "get"in r && null !== (i = r.get(e, t))) && null == (i = k.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!g.radioValue && "radio" === t && _(e, "input"))
                        return n = e.value,
                        e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(M);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    kn = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = Sn[t] || k.find.attr;
        Sn[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = Sn[o],
            Sn[o] = i,
            i = null != a(e, t, n) ? o : null,
            Sn[o] = r),
            i
        }
    }),
    /^(?:input|select|textarea|button)$/i), Cn = /^(?:a|area)$/i;
    function jn(e) {
        return (e.match(M) || []).join(" ")
    }
    function On(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Ln(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return c(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
    k.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                r = k.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : En.test(e.nodeName) || Cn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (k.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode) && e.parentNode.selectedIndex
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a;
            return v(t) ? this.each(function(e) {
                k(this).addClass(t.call(this, e, On(this)))
            }) : (e = Ln(t)).length ? this.each(function() {
                if (i = On(this),
                n = 1 === this.nodeType && " " + jn(i) + " ") {
                    for (o = 0; o < e.length; o++)
                        r = e[o],
                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    a = jn(n),
                    i !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, i, r, o, a;
            return v(t) ? this.each(function(e) {
                k(this).removeClass(t.call(this, e, On(this)))
            }) : arguments.length ? (e = Ln(t)).length ? this.each(function() {
                if (i = On(this),
                n = 1 === this.nodeType && " " + jn(i) + " ") {
                    for (o = 0; o < e.length; o++)
                        for (r = e[o]; -1 < n.indexOf(" " + r + " "); )
                            n = n.replace(" " + r + " ", " ");
                    a = jn(n),
                    i !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, i, r, o, a = typeof t, s = "string" == a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                k(this).toggleClass(t.call(this, e, On(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = Ln(t),
            this.each(function() {
                if (s)
                    for (o = k(this),
                    r = 0; r < e.length; r++)
                        i = e[r],
                        o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                else
                    void 0 !== t && "boolean" != a || ((i = On(this)) && y.set(this, "__className__", i),
                    this.setAttribute && this.setAttribute("class", !i && !1 !== t && y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + jn(On(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    function Dn(e) {
        e.stopPropagation()
    }
    var Mn = /\r/g
      , Pn = (k.fn.extend({
        val: function(t) {
            var n, e, i, r = this[0];
            return arguments.length ? (i = v(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, k(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = k.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : r ? (n = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof (e = r.value) ? e.replace(Mn, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : jn(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [], a = r ? i + 1 : n.length, s = i < 0 ? a : r ? i : 0; s < a; s++)
                        if (((t = n[s]).selected || s === i) && !t.disabled && (!t.parentNode.disabled || !_(t.parentNode, "optgroup"))) {
                            if (t = k(t).val(),
                            r)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = k.makeArray(t), a = r.length; a--; )
                        ((i = r[a]).selected = -1 < k.inArray(k.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        },
        g.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    x.location)
      , An = {
        guid: Date.now()
    }
      , Fn = /\?/
      , Nn = (k.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new x.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || k.error("Invalid XML: " + (n ? k.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /^(?:focusinfocus|focusoutblur)$/)
      , Rn = (k.extend(k.event, {
        trigger: function(e, t, n, i) {
            var r, o, a, s, l, u, c, p = [n || T], f = $.call(e, "type") ? e.type : e, d = $.call(e, "namespace") ? e.namespace.split(".") : [], h = c = o = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Nn.test(f + k.event.triggered) && (-1 < f.indexOf(".") && (f = (d = f.split(".")).shift(),
            d.sort()),
            s = f.indexOf(":") < 0 && "on" + f,
            (e = e[k.expando] ? e : new k.Event(f,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            u = k.event.special[f] || {},
            i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !R(n)) {
                    for (a = u.delegateType || f,
                    Nn.test(a + f) || (h = h.parentNode); h; h = h.parentNode)
                        p.push(h),
                        o = h;
                    o === (n.ownerDocument || T) && p.push(o.defaultView || o.parentWindow || x)
                }
                for (r = 0; (h = p[r++]) && !e.isPropagationStopped(); )
                    c = h,
                    e.type = 1 < r ? a : u.bindType || f,
                    (l = (y.get(h, "events") || Object.create(null))[e.type] && y.get(h, "handle")) && l.apply(h, t),
                    (l = s && h[s]) && l.apply && ct(h) && (e.result = l.apply(h, t),
                    !1 === e.result) && e.preventDefault();
                return e.type = f,
                i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !ct(n) || s && v(n[f]) && !R(n) && ((o = n[s]) && (n[s] = null),
                k.event.triggered = f,
                e.isPropagationStopped() && c.addEventListener(f, Dn),
                n[f](),
                e.isPropagationStopped() && c.removeEventListener(f, Dn),
                k.event.triggered = void 0,
                o) && (n[s] = o),
                e.result
            }
        },
        simulate: function(e, t, n) {
            n = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(n, null, t)
        }
    }),
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return k.event.trigger(e, t, n, !0)
        }
    }),
    /\[\]$/)
      , Hn = /\r?\n/g
      , In = /^(?:submit|button|image|reset|file)$/i
      , Bn = /^(?:input|select|textarea|keygen)/i;
    k.param = function(e, t) {
        function n(e, t) {
            t = v(t) ? t() : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, r = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, r, o) {
                    if (Array.isArray(e))
                        k.each(e, function(e, t) {
                            r || Rn.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
                        });
                    else if (r || "object" !== J(e))
                        o(i, e);
                    else
                        for (var t in e)
                            n(i + "[" + t + "]", e[t], r, o)
                }(i, e[i], t, n);
        return r.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Bn.test(this.nodeName) && !In.test(e) && (this.checked || !Tt.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Hn, "\r\n")
                }
            }).get()
        }
    });
    var Un = /%20/g
      , qn = /#.*$/
      , $n = /([?&])_=[^&]*/
      , Vn = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Wn = /^(?:GET|HEAD)$/
      , zn = /^\/\//
      , Qn = {}
      , Jn = {}
      , Gn = "*/".concat("*")
      , Yn = T.createElement("a");
    function Xn(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, r = e.toLowerCase().match(M) || [];
            if (v(t))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Kn(t, i, r, o) {
        var a = {}
          , s = t === Jn;
        function l(e) {
            var n;
            return a[e] = !0,
            k.each(t[e] || [], function(e, t) {
                t = t(i, r, o);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (i.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }
    function Zn(e, t) {
        var n, i, r = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && k.extend(!0, e, i),
        e
    }
    Yn.href = Pn.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pn.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Pn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zn(Zn(e, k.ajaxSettings), t) : Zn(k.ajaxSettings, e)
        },
        ajaxPrefilter: Xn(Qn),
        ajaxTransport: Xn(Jn),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, u, c, n, p, f, d, i, r, h = k.ajaxSetup({}, t = t || {}), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? k(g) : k.event, y = k.Deferred(), v = k.Callbacks("once memory"), b = h.statusCode || {}, o = {}, a = {}, s = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (f) {
                        if (!n)
                            for (n = {}; t = Vn.exec(c); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return f ? c : null
                },
                setRequestHeader: function(e, t) {
                    return null == f && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == f && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (f)
                            _.always(e[_.status]);
                        else
                            for (var t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || s;
                    return l && l.abort(e),
                    w(0, e),
                    this
                }
            };
            if (y.promise(_),
            h.url = ((e || h.url || Pn.href) + "").replace(zn, Pn.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
            null == h.crossDomain) {
                r = T.createElement("a");
                try {
                    r.href = h.url,
                    r.href = r.href,
                    h.crossDomain = Yn.protocol + "//" + Yn.host != r.protocol + "//" + r.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)),
            Kn(Qn, h, t, _),
            !f) {
                for (i in (d = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !Wn.test(h.type),
                u = h.url.replace(qn, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Un, "+")) : (r = h.url.slice(u.length),
                h.data && (h.processData || "string" == typeof h.data) && (u += (Fn.test(u) ? "&" : "?") + h.data,
                delete h.data),
                !1 === h.cache && (u = u.replace($n, "$1"),
                r = (Fn.test(u) ? "&" : "?") + "_=" + An.guid++ + r),
                h.url = u + r),
                h.ifModified && (k.lastModified[u] && _.setRequestHeader("If-Modified-Since", k.lastModified[u]),
                k.etag[u]) && _.setRequestHeader("If-None-Match", k.etag[u]),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && _.setRequestHeader("Content-Type", h.contentType),
                _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Gn + "; q=0.01" : "") : h.accepts["*"]),
                h.headers)
                    _.setRequestHeader(i, h.headers[i]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, _, h) || f))
                    return _.abort();
                if (s = "abort",
                v.add(h.complete),
                _.done(h.success),
                _.fail(h.error),
                l = Kn(Jn, h, t, _)) {
                    if (_.readyState = 1,
                    d && m.trigger("ajaxSend", [_, h]),
                    f)
                        return _;
                    h.async && 0 < h.timeout && (p = x.setTimeout(function() {
                        _.abort("timeout")
                    }, h.timeout));
                    try {
                        f = !1,
                        l.send(o, w)
                    } catch (e) {
                        if (f)
                            throw e;
                        w(-1, e)
                    }
                } else
                    w(-1, "No Transport")
            }
            return _;
            function w(e, t, n, i) {
                var r, o, a, s = t;
                f || (f = !0,
                p && x.clearTimeout(p),
                l = void 0,
                c = i || "",
                _.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a = a || r
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(h, _, n)),
                !i && -1 < k.inArray("script", h.dataTypes) && k.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                a = function(e, t, n, i) {
                    var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, a, _, i),
                i ? (h.ifModified && ((n = _.getResponseHeader("Last-Modified")) && (k.lastModified[u] = n),
                n = _.getResponseHeader("etag")) && (k.etag[u] = n),
                204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                r = a.data,
                i = !(o = a.error))) : (o = s,
                !e && s || (s = "error",
                e < 0 && (e = 0))),
                _.status = e,
                _.statusText = (t || s) + "",
                i ? y.resolveWith(g, [r, s, _]) : y.rejectWith(g, [_, s, o]),
                _.statusCode(b),
                b = void 0,
                d && m.trigger(i ? "ajaxSuccess" : "ajaxError", [_, h, i ? r : o]),
                v.fireWith(g, [_, s]),
                d && (m.trigger("ajaxComplete", [_, h]),
                --k.active || k.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, r) {
        k[r] = function(e, t, n, i) {
            return v(t) && (i = i || n,
            n = t,
            t = void 0),
            k.ajax(k.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }),
    k.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    k._evalUrl = function(e, t, n) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t, n)
            }
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(e) {
            return this[0] && (v(e) && (e = e.call(this[0])),
            e = k(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }
    ,
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var ei = {
        0: 200,
        1223: 204
    }
      , ti = k.ajaxSettings.xhr();
    g.cors = !!ti && "withCredentials"in ti,
    g.ajax = ti = !!ti,
    k.ajaxTransport(function(r) {
        var o, a;
        if (g.cors || ti && !r.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(ei[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = o(),
                    a = i.onerror = i.ontimeout = o("error"),
                    void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                        4 === i.readyState && x.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    k.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    T.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var ni = []
      , ii = /(=)\?(?=&|$)|\?\?/
      , ri = (k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ni.pop() || k.expando + "_" + An.guid++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, a = !1 !== e.jsonp && (ii.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(ii, "$1" + i) : !1 !== e.jsonp && (e.url += (Fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return o || k.error(i + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = x[i],
            x[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? k(x).removeProp(i) : x[i] = r,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                ni.push(i)),
                o && v(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((e = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === e.childNodes.length),
    k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (g.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
        t.head.appendChild(i)) : t = T),
        i = !n && [],
        (n = Je.exec(e)) ? [t.createElement(n[1])] : (n = jt([e], t, i),
        i && i.length && k(i).remove(),
        k.merge([], n.childNodes)));
        var i
    }
    ,
    k.fn.load = function(e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return -1 < s && (i = jn(e.slice(s)),
        e = e.slice(0, s)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < a.length && k.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s = k.css(e, "position"), l = k(e), u = {};
            "static" === s && (e.style.position = "relative"),
            o = l.offset(),
            i = k.css(e, "top"),
            a = k.css(e, "left"),
            s = ("absolute" === s || "fixed" === s) && -1 < (i + a).indexOf("auto") ? (r = (s = l.position()).top,
            s.left) : (r = parseFloat(i) || 0,
            parseFloat(a) || 0),
            null != (t = v(t) ? t.call(e, n, k.extend({}, o)) : t).top && (u.top = t.top - o.top + r),
            null != t.left && (u.left = t.left - o.left + s),
            "using"in t ? t.using.call(e, u) : l.css(u)
        }
    },
    k.fn.extend({
        offset: function(t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                    r.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - k.css(i, "marginTop", !0),
                    left: t.left - r.left - k.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position"); )
                    e = e.offsetParent;
                return e || yt
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        k.fn[t] = function(e) {
            return c(this, function(e, t, n) {
                var i;
                if (R(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = nn(g.pixelPosition, function(e, t) {
            if (t)
                return t = tn(e, n),
                Kt.test(t) ? k(e).position()[n] + "px" : t
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , r = i || (!0 === e || !0 === t ? "margin" : "border");
                return c(this, function(e, t, n) {
                    var i;
                    return R(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? k.css(e, t, r) : k.style(e, t, n, r)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g)
      , oi = (k.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        v(e))
            return n = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i
    }
    ,
    k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }
    ,
    k.isArray = Array.isArray,
    k.parseJSON = JSON.parse,
    k.nodeName = _,
    k.isFunction = v,
    k.isWindow = R,
    k.camelCase = P,
    k.type = J,
    k.now = Date.now,
    k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    k.trim = function(e) {
        return null == e ? "" : (e + "").replace(ri, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    }),
    x.jQuery)
      , ai = x.$;
    return k.noConflict = function(e) {
        return x.$ === k && (x.$ = ai),
        e && x.jQuery === k && (x.jQuery = oi),
        k
    }
    ,
    void 0 === N && (x.jQuery = x.$ = k),
    k
}),
!function(l, n, a) {
    l.migrateVersion = "1.4.1";
    var i = {};
    function u(e) {
        var t = n.console;
        i[e] || (i[e] = !0,
        l.migrateWarnings.push(e),
        t && t.warn && !l.migrateMute && (t.warn("JQMIGRATE: " + e),
        l.migrateTrace) && t.trace && t.trace())
    }
    function e(e, t, n, i) {
        if (Object.defineProperty)
            try {
                return void Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return u(i),
                        n
                    },
                    set: function(e) {
                        u(i),
                        n = e
                    }
                })
            } catch (e) {}
        l._definePropertyBroken = !0,
        e[t] = n
    }
    l.migrateWarnings = [],
    l.migrateTrace === a && (l.migrateTrace = !0),
    l.migrateReset = function() {
        i = {},
        l.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var s = l("<input/>", {
        size: 1
    }).attr("size") && l.attrFn
      , c = l.attr
      , r = l.attrHooks.value && l.attrHooks.value.get || function() {
        return null
    }
      , o = l.attrHooks.value && l.attrHooks.value.set || function() {
        return a
    }
      , p = /^(?:input|button)$/i
      , f = /^[238]$/
      , d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , h = /^(?:checked|selected)$/i;
    e(l, "attrFn", s || {}, "jQuery.attrFn is deprecated"),
    l.attr = function(e, t, n, i) {
        var r = t.toLowerCase()
          , o = e && e.nodeType;
        return i && (c.length < 4 && u("jQuery.fn.attr( props, pass ) is deprecated"),
        e) && !f.test(o) && (s ? t in s : l.isFunction(l.fn[t])) ? l(e)[t](n) : ("type" === t && n !== a && p.test(e.nodeName) && e.parentNode && u("Can't change the 'type' of an input or button in IE 6/7/8"),
        !l.attrHooks[r] && d.test(r) && (l.attrHooks[r] = {
            get: function(e, t) {
                var n = l.prop(e, t);
                return !0 === n || "boolean" != typeof n && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : a
            },
            set: function(e, t, n) {
                return !1 === t ? l.removeAttr(e, n) : ((t = l.propFix[n] || n)in e && (e[t] = !0),
                e.setAttribute(n, n.toLowerCase())),
                n
            }
        },
        h.test(r)) && u("jQuery.fn.attr('" + r + "') might use property instead of attribute"),
        c.call(l, e, t, n))
    }
    ,
    l.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? r.apply(this, arguments) : ("input" !== n && "option" !== n && u("jQuery.fn.attr('value') no longer gets properties"),
            t in e ? e.value : null)
        },
        set: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            if ("button" === n)
                return o.apply(this, arguments);
            "input" !== n && "option" !== n && u("jQuery.fn.attr('value', val) no longer sets properties"),
            e.value = t
        }
    };
    var t, g, m = l.fn.init, y = l.find, v = l.parseJSON, b = /^\s*</, _ = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, w = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, x = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    for (g in l.fn.init = function(e, t, n) {
        var i;
        return e && "string" == typeof e && !l.isPlainObject(t) && (i = x.exec(l.trim(e))) && i[0] && (b.test(e) || u("$(html) HTML strings must start with '<' character"),
        i[3] && u("$(html) HTML text after last tag is ignored"),
        "#" === i[0].charAt(0) && (u("HTML string cannot start with a '#' character"),
        l.error("JQMIGRATE: Invalid selector string (XSS)")),
        t && t.context && t.context.nodeType && (t = t.context),
        l.parseHTML) ? m.call(this, l.parseHTML(i[2], t && t.ownerDocument || t || document, !0), t, n) : (i = m.apply(this, arguments),
        e && e.selector !== a ? (i.selector = e.selector,
        i.context = e.context) : (i.selector = "string" == typeof e ? e : "",
        e && (i.context = e.nodeType ? e : t || document)),
        i)
    }
    ,
    l.fn.init.prototype = l.fn,
    l.find = function(t) {
        var n = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && _.test(t))
            try {
                document.querySelector(t)
            } catch (e) {
                t = t.replace(w, function(e, t, n, i) {
                    return "[" + t + n + '"' + i + '"]'
                });
                try {
                    document.querySelector(t),
                    u("Attribute selector with '#' must be quoted: " + n[0]),
                    n[0] = t
                } catch (e) {
                    u("Attribute selector with '#' was not fixed: " + n[0])
                }
            }
        return y.apply(this, n)
    }
    ,
    y)
        Object.prototype.hasOwnProperty.call(y, g) && (l.find[g] = y[g]);
    l.parseJSON = function(e) {
        return e ? v.apply(this, arguments) : (u("jQuery.parseJSON requires a valid JSON string"),
        null)
    }
    ,
    l.uaMatch = function(e) {
        e = e.toLowerCase();
        e = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: e[1] || "",
            version: e[2] || "0"
        }
    }
    ,
    l.browser || (t = {},
    (P = l.uaMatch(navigator.userAgent)).browser && (t[P.browser] = !0,
    t.version = P.version),
    t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
    l.browser = t),
    e(l, "browser", l.browser, "jQuery.browser is deprecated"),
    l.boxModel = l.support.boxModel = "CSS1Compat" === document.compatMode,
    e(l, "boxModel", l.boxModel, "jQuery.boxModel is deprecated"),
    e(l.support, "boxModel", l.support.boxModel, "jQuery.support.boxModel is deprecated"),
    l.sub = function() {
        function n(e, t) {
            return new n.fn.init(e,t)
        }
        l.extend(!0, n, this),
        n.superclass = this,
        ((n.fn = n.prototype = this()).constructor = n).sub = this.sub,
        n.fn.init = function(e, t) {
            e = l.fn.init.call(this, e, t, i);
            return e instanceof n ? e : n(e)
        }
        ,
        n.fn.init.prototype = n.fn;
        var i = n(document);
        return u("jQuery.sub() is deprecated"),
        n
    }
    ;
    function T(e) {
        return "string" != typeof e || l.event.special.hover ? e : (F.test(e) && u("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
        e && e.replace(F, "mouseenter$1 mouseleave$1"))
    }
    var k, S, E = !(l.fn.size = function() {
        return u("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
    }
    ), C = (l.swap && l.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var n = l.cssHooks[t] && l.cssHooks[t].get;
        n && (l.cssHooks[t].get = function() {
            var e;
            return E = !0,
            e = n.apply(this, arguments),
            E = !1,
            e
        }
        )
    }),
    l.swap = function(e, t, n, i) {
        var r, o = {};
        for (r in E || u("jQuery.swap() is undocumented and deprecated"),
        t)
            o[r] = e.style[r],
            e.style[r] = t[r];
        for (r in n = n.apply(e, i || []),
        t)
            e.style[r] = o[r];
        return n
    }
    ,
    l.ajaxSetup({
        converters: {
            "text json": l.parseJSON
        }
    }),
    l.fn.data), j = (l.fn.data = function(e) {
        var t, n = this[0];
        return n && "events" === e && 1 === arguments.length && (t = l.data(n, e),
        n = l._data(n, e),
        t === a || t === n) && n !== a ? (u("Use of jQuery.fn.data('events') is deprecated"),
        n) : C.apply(this, arguments)
    }
    ,
    /\/(java|ecma)script/i), O = (l.clean || (l.clean = function(e, t, n, i) {
        t = (t = !(t = t || document).nodeType && t[0] || t).ownerDocument || t,
        u("jQuery.clean() is deprecated");
        var r, o, a, s = [];
        if (l.merge(s, l.buildFragment(e, t).childNodes),
        n)
            for (o = function(e) {
                if (!e.type || j.test(e.type))
                    return i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
            }
            ,
            r = 0; null != (a = s[r]); r++)
                l.nodeName(a, "script") && o(a) || (n.appendChild(a),
                void 0 !== a.getElementsByTagName && (a = l.grep(l.merge([], a.getElementsByTagName("script")), o),
                s.splice.apply(s, [r + 1, 0].concat(a)),
                r += a.length));
        return s
    }
    ),
    l.event.add), L = l.event.remove, N = l.event.trigger, R = l.fn.toggle, D = l.fn.live, M = l.fn.die, H = l.fn.load, P = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", A = new RegExp("\\b(?:" + P + ")\\b"), F = /(?:^|\s)hover(\.\S+|)\b/, I = (l.event.props && "attrChange" !== l.event.props[0] && l.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    l.event.dispatch && e(l.event, "handle", l.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    l.event.add = function(e, t, n, i, r) {
        e !== document && A.test(t) && u("AJAX events should be attached to document: " + t),
        O.call(this, e, T(t || ""), n, i, r)
    }
    ,
    l.event.remove = function(e, t, n, i, r) {
        L.call(this, e, T(t) || "", n, i, r)
    }
    ,
    l.each(["load", "unload", "error"], function(e, t) {
        l.fn[t] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? H.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }
    }),
    l.fn.toggle = function(n, e) {
        if (!l.isFunction(n) || !l.isFunction(e))
            return R.apply(this, arguments);
        u("jQuery.fn.toggle(handler, handler...) is deprecated");
        function t(e) {
            var t = (l._data(this, "lastToggle" + n.guid) || 0) % o;
            return l._data(this, "lastToggle" + n.guid, 1 + t),
            e.preventDefault(),
            i[t].apply(this, arguments) || !1
        }
        var i = arguments
          , r = n.guid || l.guid++
          , o = 0;
        for (t.guid = r; o < i.length; )
            i[o++].guid = r;
        return this.click(t)
    }
    ,
    l.fn.live = function(e, t, n) {
        return u("jQuery.fn.live() is deprecated"),
        D ? D.apply(this, arguments) : (l(this.context).on(e, this.selector, t, n),
        this)
    }
    ,
    l.fn.die = function(e, t) {
        return u("jQuery.fn.die() is deprecated"),
        M ? M.apply(this, arguments) : (l(this.context).off(e, this.selector || "**", t),
        this)
    }
    ,
    l.event.trigger = function(e, t, n, i) {
        return n || A.test(e) || u("Global events are undocumented and deprecated"),
        N.call(this, e, t, n || document, i)
    }
    ,
    l.each(P.split("|"), function(e, t) {
        l.event.special[t] = {
            setup: function() {
                var e = this;
                return e !== document && (l.event.add(document, t + "." + l.guid, function() {
                    l.event.trigger(t, Array.prototype.slice.call(arguments, 1), e, !0)
                }),
                l._data(this, t, l.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && l.event.remove(document, t + "." + l._data(this, t)),
                !1
            }
        }
    }),
    l.event.special.ready = {
        setup: function() {
            this === document && u("'ready' event is deprecated")
        }
    },
    l.fn.andSelf || l.fn.addBack), B = l.fn.find;
    l.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        I.apply(this, arguments)
    }
    ,
    l.fn.find = function(e) {
        var t = B.apply(this, arguments);
        return t.context = this.context,
        t.selector = this.selector ? this.selector + " " + e : e,
        t
    }
    ,
    l.Callbacks && (k = l.Deferred,
    S = [["resolve", "done", l.Callbacks("once memory"), l.Callbacks("once memory"), "resolved"], ["reject", "fail", l.Callbacks("once memory"), l.Callbacks("once memory"), "rejected"], ["notify", "progress", l.Callbacks("memory"), l.Callbacks("memory")]],
    l.Deferred = function(e) {
        var o = k()
          , a = o.promise();
        return o.pipe = a.pipe = function() {
            var r = arguments;
            return u("deferred.pipe() is deprecated"),
            l.Deferred(function(i) {
                l.each(S, function(e, t) {
                    var n = l.isFunction(r[e]) && r[e];
                    o[t[1]](function() {
                        var e = n && n.apply(this, arguments);
                        e && l.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                    })
                }),
                r = null
            }).promise()
        }
        ,
        o.isResolved = function() {
            return u("deferred.isResolved is deprecated"),
            "resolved" === o.state()
        }
        ,
        o.isRejected = function() {
            return u("deferred.isRejected is deprecated"),
            "rejected" === o.state()
        }
        ,
        e && e.call(o, o),
        o
    }
    )
}(jQuery, window),
!function(F, N, R) {
    function H(e) {
        throw e
    }
    var I = void 0
      , B = null;
    function U(e) {
        return function() {
            return e
        }
    }
    function e(e) {
        function p(e, t, n) {
            n && t !== w.k.r(e) && w.k.S(e, t),
            t !== w.k.r(e) && w.a.va(e, "change")
        }
        var i, n, w = void 0 !== e ? e : {};
        function r() {
            return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        w.b = function(e, t) {
            for (var n = e.split("."), i = w, r = 0; r < n.length - 1; r++)
                i = i[n[r]];
            i[n[n.length - 1]] = t
        }
        ,
        w.B = function(e, t, n) {
            e[t] = n
        }
        ,
        w.version = "2.1.0",
        w.b("version", w.version),
        w.a = new function() {
            function o(e, t) {
                if ("input" === w.a.o(e) && e.type && "click" == t.toLowerCase())
                    return "checkbox" == (t = e.type) || "radio" == t
            }
            var e, t = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, n = {}, i = {};
            for (e in n[/Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"],
            n.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "),
            n) {
                var r = n[e];
                if (r.length)
                    for (var a = 0, s = r.length; a < s; a++)
                        i[r[a]] = e
            }
            var l = {
                propertychange: !0
            }
              , u = function() {
                for (var e = 3, t = N.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e",
                n[0]; )
                    ;
                return 4 < e ? e : I
            }();
            return {
                Ca: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                v: function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        t(e[n])
                },
                j: function(e, t) {
                    if ("function" == typeof Array.prototype.indexOf)
                        return Array.prototype.indexOf.call(e, t);
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                },
                ab: function(e, t, n) {
                    for (var i = 0, r = e.length; i < r; i++)
                        if (t.call(n, e[i]))
                            return e[i];
                    return B
                },
                ba: function(e, t) {
                    t = w.a.j(e, t);
                    0 <= t && e.splice(t, 1)
                },
                za: function(e) {
                    for (var t = [], n = 0, i = (e = e || []).length; n < i; n++)
                        w.a.j(t, e[n]) < 0 && t.push(e[n]);
                    return t
                },
                T: function(e, t) {
                    for (var n = [], i = 0, r = (e = e || []).length; i < r; i++)
                        n.push(t(e[i]));
                    return n
                },
                aa: function(e, t) {
                    for (var n = [], i = 0, r = (e = e || []).length; i < r; i++)
                        t(e[i]) && n.push(e[i]);
                    return n
                },
                N: function(e, t) {
                    if (t instanceof Array)
                        e.push.apply(e, t);
                    else
                        for (var n = 0, i = t.length; n < i; n++)
                            e.push(t[n]);
                    return e
                },
                extend: function(e, t) {
                    if (t)
                        for (var n in t)
                            t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                },
                ga: function(e) {
                    for (; e.firstChild; )
                        w.removeNode(e.firstChild)
                },
                Ab: function(e) {
                    for (var e = w.a.L(e), t = N.createElement("div"), n = 0, i = e.length; n < i; n++)
                        w.F(e[n]),
                        t.appendChild(e[n]);
                    return t
                },
                X: function(e, t) {
                    if (w.a.ga(e),
                    t)
                        for (var n = 0, i = t.length; n < i; n++)
                            e.appendChild(t[n])
                },
                Na: function(e, t) {
                    var n = e.nodeType ? [e] : e;
                    if (0 < n.length) {
                        for (var i = n[0], r = i.parentNode, o = 0, a = t.length; o < a; o++)
                            r.insertBefore(t[o], i);
                        for (o = 0,
                        a = n.length; o < a; o++)
                            w.removeNode(n[o])
                    }
                },
                Pa: function(e, t) {
                    0 <= R.userAgent.indexOf("MSIE 6") ? e.setAttribute("selected", t) : e.selected = t
                },
                w: function(e) {
                    return (e || "").replace(t, "")
                },
                Ib: function(e, t) {
                    for (var n = [], i = (e || "").split(t), r = 0, o = i.length; r < o; r++) {
                        var a = w.a.w(i[r]);
                        "" !== a && n.push(a)
                    }
                    return n
                },
                Hb: function(e, t) {
                    return !(t.length > (e = e || "").length) && e.substring(0, t.length) === t
                },
                eb: function(e, t) {
                    for (var n = "return (" + e + ")", i = 0; i < t; i++)
                        n = "with(sc[" + i + "]) { " + n + " } ";
                    return new Function("sc",n)
                },
                kb: function(e, t) {
                    if (t.compareDocumentPosition)
                        return 16 == (16 & t.compareDocumentPosition(e));
                    for (; e != B; ) {
                        if (e == t)
                            return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                fa: function(e) {
                    return w.a.kb(e, e.ownerDocument)
                },
                o: function(e) {
                    return e && e.tagName && e.tagName.toLowerCase()
                },
                n: function(t, e, n) {
                    var i, r = u && l[e];
                    r || "undefined" == typeof jQuery ? r || "function" != typeof t.addEventListener ? void 0 !== t.attachEvent ? t.attachEvent("on" + e, function(e) {
                        n.call(t, e)
                    }) : H(Error("Browser doesn't support addEventListener or attachEvent")) : t.addEventListener(e, n, !1) : (o(t, e) && (i = n,
                    n = function(e, t) {
                        var n = this.checked;
                        t && (this.checked = !0 !== t.fb),
                        i.call(this, e),
                        this.checked = n
                    }
                    ),
                    jQuery(t).bind(e, n))
                },
                va: function(e, t) {
                    var n;
                    e && e.nodeType || H(Error("element must be a DOM node when calling triggerEvent")),
                    "undefined" != typeof jQuery ? (n = [],
                    o(e, t) && n.push({
                        fb: e.checked
                    }),
                    jQuery(e).trigger(t, n)) : "function" == typeof N.createEvent ? "function" == typeof e.dispatchEvent ? ((n = N.createEvent(i[t] || "HTMLEvents")).initEvent(t, !0, !0, F, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e),
                    e.dispatchEvent(n)) : H(Error("The supplied element doesn't support dispatchEvent")) : void 0 !== e.fireEvent ? (o(e, t) && (e.checked = !0 !== e.checked),
                    e.fireEvent("on" + t)) : H(Error("Browser doesn't support triggering events"))
                },
                d: function(e) {
                    return w.la(e) ? e() : e
                },
                Ua: function(e, t, n) {
                    var i = (e.className || "").split(/\s+/)
                      , r = 0 <= w.a.j(i, t);
                    if (n && !r)
                        e.className += (i[0] ? " " : "") + t;
                    else if (r && !n) {
                        for (n = "",
                        r = 0; r < i.length; r++)
                            i[r] != t && (n += i[r] + " ");
                        e.className = w.a.w(n)
                    }
                },
                Qa: function(e, t) {
                    t = w.a.d(t);
                    t !== B && t !== I || (t = ""),
                    "innerText"in e ? e.innerText = t : e.textContent = t,
                    9 <= u && (e.style.display = e.style.display)
                },
                lb: function(e) {
                    var t;
                    9 <= u && (t = e.style.width,
                    e.style.width = 0,
                    e.style.width = t)
                },
                Eb: function(e, t) {
                    for (var e = w.a.d(e), t = w.a.d(t), n = [], i = e; i <= t; i++)
                        n.push(i);
                    return n
                },
                L: function(e) {
                    for (var t = [], n = 0, i = e.length; n < i; n++)
                        t.push(e[n]);
                    return t
                },
                tb: 6 === u,
                ub: 7 === u,
                ja: u,
                Da: function(e, t) {
                    for (var n = w.a.L(e.getElementsByTagName("input")).concat(w.a.L(e.getElementsByTagName("textarea"))), i = "string" == typeof t ? function(e) {
                        return e.name === t
                    }
                    : function(e) {
                        return t.test(e.name)
                    }
                    , r = [], o = n.length - 1; 0 <= o; o--)
                        i(n[o]) && r.push(n[o]);
                    return r
                },
                Bb: function(e) {
                    return "string" == typeof e && (e = w.a.w(e)) ? F.JSON && F.JSON.parse ? F.JSON.parse(e) : new Function("return " + e)() : B
                },
                sa: function(e, t, n) {
                    return void 0 !== JSON && void 0 !== JSON.stringify || H(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")),
                    JSON.stringify(w.a.d(e), t, n)
                },
                Cb: function(e, t, n) {
                    var i = (n = n || {}).params || {}
                      , r = n.includeFields || this.Ca
                      , o = e;
                    if ("object" == typeof e && "form" === w.a.o(e))
                        for (var o = e.action, a = r.length - 1; 0 <= a; a--)
                            for (var s = w.a.Da(e, r[a]), l = s.length - 1; 0 <= l; l--)
                                i[s[l].name] = s[l].value;
                    var u, t = w.a.d(t), c = N.createElement("form");
                    for (u in c.style.display = "none",
                    c.action = o,
                    c.method = "post",
                    t)
                        e = N.createElement("input"),
                        e.name = u,
                        e.value = w.a.sa(w.a.d(t[u])),
                        c.appendChild(e);
                    for (u in i)
                        e = N.createElement("input"),
                        e.name = u,
                        e.value = i[u],
                        c.appendChild(e);
                    N.body.appendChild(c),
                    n.submitter ? n.submitter(c) : c.submit(),
                    setTimeout(function() {
                        c.parentNode.removeChild(c)
                    }, 0)
                }
            }
        }
        ,
        w.b("utils", w.a),
        w.b("utils.arrayForEach", w.a.v),
        w.b("utils.arrayFirst", w.a.ab),
        w.b("utils.arrayFilter", w.a.aa),
        w.b("utils.arrayGetDistinctValues", w.a.za),
        w.b("utils.arrayIndexOf", w.a.j),
        w.b("utils.arrayMap", w.a.T),
        w.b("utils.arrayPushAll", w.a.N),
        w.b("utils.arrayRemoveItem", w.a.ba),
        w.b("utils.extend", w.a.extend),
        w.b("utils.fieldsIncludedWithJsonPost", w.a.Ca),
        w.b("utils.getFormFields", w.a.Da),
        w.b("utils.postJson", w.a.Cb),
        w.b("utils.parseJson", w.a.Bb),
        w.b("utils.registerEventHandler", w.a.n),
        w.b("utils.stringifyJson", w.a.sa),
        w.b("utils.range", w.a.Eb),
        w.b("utils.toggleDomNodeCssClass", w.a.Ua),
        w.b("utils.triggerEvent", w.a.va),
        w.b("utils.unwrapObservable", w.a.d),
        Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this
              , n = Array.prototype.slice.call(arguments)
              , e = n.shift();
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
            }
        }
        ),
        w.a.f = new function() {
            var i = 0
              , r = "__ko__" + (new Date).getTime()
              , o = {};
            return {
                get: function(e, t) {
                    e = w.a.f.getAll(e, !1);
                    return e === I ? I : e[t]
                },
                set: function(e, t, n) {
                    n === I && w.a.f.getAll(e, !1) === I || (w.a.f.getAll(e, !0)[t] = n)
                },
                getAll: function(e, t) {
                    var n = e[r];
                    if (!n || "null" === n) {
                        if (!t)
                            return;
                        n = e[r] = "ko" + i++,
                        o[n] = {}
                    }
                    return o[n]
                },
                clear: function(e) {
                    var t = e[r];
                    t && (delete o[t],
                    e[r] = B)
                }
            }
        }
        ,
        w.b("utils.domData", w.a.f),
        w.b("utils.domData.clear", w.a.f.clear),
        w.a.G = new function() {
            function i(e, t) {
                var n = w.a.f.get(e, o);
                return n === I && t && w.a.f.set(e, o, n = []),
                n
            }
            function r(e) {
                if (t = i(e, !1))
                    for (var t = t.slice(0), n = 0; n < t.length; n++)
                        t[n](e);
                if (w.a.f.clear(e),
                "function" == typeof jQuery && "function" == typeof jQuery.cleanData && jQuery.cleanData([e]),
                s[e.nodeType])
                    for (t = e.firstChild; e = t; )
                        t = e.nextSibling,
                        8 === e.nodeType && r(e)
            }
            var o = "__ko_domNodeDisposal__" + (new Date).getTime()
              , a = {
                1: !0,
                8: !0,
                9: !0
            }
              , s = {
                1: !0,
                9: !0
            };
            return {
                wa: function(e, t) {
                    "function" != typeof t && H(Error("Callback must be a function")),
                    i(e, !0).push(t)
                },
                Ma: function(e, t) {
                    var n = i(e, !1);
                    n && (w.a.ba(n, t),
                    0 == n.length) && w.a.f.set(e, o, I)
                },
                F: function(e) {
                    if (a[e.nodeType] && (r(e),
                    s[e.nodeType])) {
                        var t = [];
                        w.a.N(t, e.getElementsByTagName("*"));
                        for (var e = 0, n = t.length; e < n; e++)
                            r(t[e])
                    }
                },
                removeNode: function(e) {
                    w.F(e),
                    e.parentNode && e.parentNode.removeChild(e)
                }
            }
        }
        ,
        w.F = w.a.G.F,
        w.removeNode = w.a.G.removeNode,
        w.b("cleanNode", w.F),
        w.b("removeNode", w.removeNode),
        w.b("utils.domNodeDisposal", w.a.G),
        w.b("utils.domNodeDisposal.addDisposeCallback", w.a.G.wa),
        w.b("utils.domNodeDisposal.removeDisposeCallback", w.a.G.Ma),
        w.a.pa = function(e) {
            if ("undefined" != typeof jQuery) {
                if ((n = jQuery.clean([e])) && n[0]) {
                    for (e = n[0]; e.parentNode && 11 !== e.parentNode.nodeType; )
                        e = e.parentNode;
                    e.parentNode && e.parentNode.removeChild(e)
                }
            } else {
                var t = w.a.w(e).toLowerCase()
                  , n = N.createElement("div");
                for (e = "ignored<div>" + (t = (t.match(/^<(thead|tbody|tfoot)/) ? [1, "<table>", "</table>"] : !t.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"]) || (t.indexOf("<td") && t.indexOf("<th") ? [0, "", ""] : [3, "<table><tbody><tr>", "</tr></tbody></table>"]))[1] + e + t[2] + "</div>",
                "function" == typeof F.innerShiv ? n.appendChild(F.innerShiv(e)) : n.innerHTML = e; t[0]--; )
                    n = n.lastChild;
                n = w.a.L(n.lastChild.childNodes)
            }
            return n
        }
        ,
        w.a.Y = function(e, t) {
            if (w.a.ga(e),
            t !== B && t !== I)
                if ("string" != typeof t && (t = t.toString()),
                "undefined" != typeof jQuery)
                    jQuery(e).html(t);
                else
                    for (var n = w.a.pa(t), i = 0; i < n.length; i++)
                        e.appendChild(n[i])
        }
        ,
        w.b("utils.parseHtmlFragment", w.a.pa),
        w.b("utils.setHtml", w.a.Y),
        w.s = (i = {},
        {
            na: function(e) {
                "function" != typeof e && H(Error("You can only pass a function to ko.memoization.memoize()"));
                var t = r() + r();
                return i[t] = e,
                "\x3c!--[ko_memo:" + t + "]--\x3e"
            },
            Va: function(e, t) {
                var n = i[e];
                n === I && H(Error("Couldn't find any memo with ID " + e + ". Perhaps it's already been unmemoized."));
                try {
                    return n.apply(B, t || []),
                    !0
                } finally {
                    delete i[e]
                }
            },
            Wa: function(e, t) {
                var n = [];
                !function e(t, n) {
                    if (t)
                        if (8 == t.nodeType)
                            (i = w.s.Ja(t.nodeValue)) != B && n.push({
                                jb: t,
                                yb: i
                            });
                        else if (1 == t.nodeType)
                            for (var i = 0, r = t.childNodes, o = r.length; i < o; i++)
                                e(r[i], n)
                }(e, n);
                for (var i = 0, r = n.length; i < r; i++) {
                    var o = n[i].jb
                      , a = [o];
                    t && w.a.N(a, t),
                    w.s.Va(n[i].yb, a),
                    o.nodeValue = "",
                    o.parentNode && o.parentNode.removeChild(o)
                }
            },
            Ja: function(e) {
                return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : B
            }
        }),
        w.b("memoization", w.s),
        w.b("memoization.memoize", w.s.na),
        w.b("memoization.unmemoize", w.s.Va),
        w.b("memoization.parseMemoText", w.s.Ja),
        w.b("memoization.unmemoizeDomNodeAndDescendants", w.s.Wa),
        w.Ba = {
            throttle: function(t, n) {
                t.throttleEvaluation = n;
                var i = B;
                return w.h({
                    read: t,
                    write: function(e) {
                        clearTimeout(i),
                        i = setTimeout(function() {
                            t(e)
                        }, n)
                    }
                })
            },
            notify: function(e, t) {
                return e.equalityComparer = "always" == t ? U(!1) : w.m.fn.equalityComparer,
                e
            }
        },
        w.b("extenders", w.Ba),
        w.Sa = function(e, t, n) {
            this.target = e,
            this.ca = t,
            this.ib = n,
            w.B(this, "dispose", this.A)
        }
        ,
        w.Sa.prototype.A = function() {
            this.sb = !0,
            this.ib()
        }
        ,
        w.R = function() {
            this.u = {},
            w.a.extend(this, w.R.fn),
            w.B(this, "subscribe", this.ta),
            w.B(this, "extend", this.extend),
            w.B(this, "getSubscriptionsCount", this.ob)
        }
        ,
        w.R.fn = {
            ta: function(e, t, n) {
                var n = n || "change"
                  , e = t ? e.bind(t) : e
                  , i = new w.Sa(this,e,function() {
                    w.a.ba(this.u[n], i)
                }
                .bind(this));
                return this.u[n] || (this.u[n] = []),
                this.u[n].push(i),
                i
            },
            notifySubscribers: function(t, e) {
                this.u[e = e || "change"] && w.a.v(this.u[e].slice(0), function(e) {
                    e && !0 !== e.sb && e.ca(t)
                })
            },
            ob: function() {
                var e, t = 0;
                for (e in this.u)
                    this.u.hasOwnProperty(e) && (t += this.u[e].length);
                return t
            },
            extend: function(e) {
                var t = this;
                if (e)
                    for (var n in e) {
                        var i = w.Ba[n];
                        "function" == typeof i && (t = i(t, e[n]))
                    }
                return t
            }
        },
        w.Ga = function(e) {
            return "function" == typeof e.ta && "function" == typeof e.notifySubscribers
        }
        ,
        w.b("subscribable", w.R),
        w.b("isSubscribable", w.Ga),
        w.U = (n = [],
        {
            bb: function(e) {
                n.push({
                    ca: e,
                    Aa: []
                })
            },
            end: function() {
                n.pop()
            },
            La: function(e) {
                var t;
                w.Ga(e) || H(Error("Only subscribable things can act as dependencies")),
                0 < n.length && (0 <= w.a.j((t = n[n.length - 1]).Aa, e) || (t.Aa.push(e),
                t.ca(e)))
            }
        });
        var o, s, l, t, a, u, c, f = {
            undefined: !0,
            boolean: !0,
            number: !0,
            string: !0
        }, d = (w.m = function(e) {
            function t() {
                return 0 < arguments.length ? (t.equalityComparer && t.equalityComparer(n, arguments[0]) || (t.I(),
                n = arguments[0],
                t.H()),
                this) : (w.U.La(t),
                n)
            }
            var n = e;
            return w.R.call(t),
            t.H = function() {
                t.notifySubscribers(n)
            }
            ,
            t.I = function() {
                t.notifySubscribers(n, "beforeChange")
            }
            ,
            w.a.extend(t, w.m.fn),
            w.B(t, "valueHasMutated", t.H),
            w.B(t, "valueWillMutate", t.I),
            t
        }
        ,
        w.m.fn = {
            equalityComparer: function(e, t) {
                return (e === B || typeof e in f) && e === t
            }
        },
        w.m.Db = "__ko_proto__");
        function h(i, r, o) {
            if (o = o || new g,
            "object" != typeof (i = r(i)) || i === B || i === I || i instanceof Date)
                return i;
            var a = i instanceof Array ? [] : {}
              , e = (o.save(i, a),
            i)
              , t = function(e) {
                var t = r(i[e]);
                switch (typeof t) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    a[e] = t;
                    break;
                case "object":
                case "undefined":
                    var n = o.get(t);
                    a[e] = n !== I ? n : h(t, r, o)
                }
            };
            if (e instanceof Array) {
                for (var n = 0; n < e.length; n++)
                    t(n);
                "function" == typeof e.toJSON && t("toJSON")
            } else
                for (n in e)
                    t(n);
            return a
        }
        function g() {
            var i = []
              , r = [];
            this.save = function(e, t) {
                var n = w.a.j(i, e);
                0 <= n ? r[n] = t : (i.push(e),
                r.push(t))
            }
            ,
            this.get = function(e) {
                return 0 <= (e = w.a.j(i, e)) ? r[e] : I
            }
        }
        function m(e, n) {
            for (var t = B; e != t; )
                e = (t = e).replace(o, function(e, t) {
                    return n[t]
                });
            return e
        }
        function y(e) {
            return 8 == e.nodeType && (t ? e.text : e.nodeValue).match(a)
        }
        function v(e) {
            return 8 == e.nodeType && (t ? e.text : e.nodeValue).match(u)
        }
        function b(e, t) {
            for (var n = e, i = 1, r = []; n = n.nextSibling; ) {
                if (v(n) && 0 === --i)
                    return r;
                r.push(n),
                y(n) && i++
            }
            return t || H(Error("Cannot find closing comment tag to match: " + e.nodeValue)),
            B
        }
        function _(e, t) {
            t = b(e, t);
            return t ? (0 < t.length ? t[t.length - 1] : e).nextSibling : B
        }
        function x(e, t, n) {
            for (var i = w.e.firstChild(t); t = i; )
                i = w.e.nextSibling(t),
                T(e, t, n)
        }
        function T(e, t, n) {
            var i = !0
              , r = 1 === t.nodeType;
            r && w.e.Ia(t),
            (i = r && n || w.J.instance.nodeHasBindings(t) ? k(t, B, e, n).Gb : i) && x(e, t, !r)
        }
        function k(r, o, a, s) {
            function l(e) {
                return function() {
                    return c[e]
                }
            }
            function u() {
                return c
            }
            var c, p, f = 0;
            return w.h(function() {
                var e = a && a instanceof w.z ? a : new w.z(w.a.d(a))
                  , t = e.$data;
                if (s && w.Ra(r, e),
                c = ("function" == typeof o ? o() : o) || w.J.instance.getBindings(r, e)) {
                    if (0 === f) {
                        for (var n in f = 1,
                        c) {
                            var i = w.c[n];
                            i && 8 === r.nodeType && !w.e.C[n] && H(Error("The binding '" + n + "' cannot be used with virtual elements")),
                            i && "function" == typeof i.init && (i = (0,
                            i.init)(r, l(n), u, t, e)) && i.controlsDescendantBindings && (p !== I && H(Error("Multiple bindings (" + p + " and " + n + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),
                            p = n)
                        }
                        f = 2
                    }
                    if (2 === f)
                        for (n in c)
                            (i = w.c[n]) && "function" == typeof i.update && (0,
                            i.update)(r, l(n), u, t, e)
                }
            }, B, {
                disposeWhenNodeIsRemoved: r
            }),
            {
                Gb: p === I
            }
        }
        w.m.fn[d] = w.m,
        w.ia = function(e, t) {
            return e !== B && e !== I && e[d] !== I && (e[d] === t || w.ia(e[d], t))
        }
        ,
        w.la = function(e) {
            return w.ia(e, w.m)
        }
        ,
        w.Ha = function(e) {
            return !!("function" == typeof e && e[d] === w.m || "function" == typeof e && e[d] === w.h && e.pb)
        }
        ,
        w.b("observable", w.m),
        w.b("isObservable", w.la),
        w.b("isWriteableObservable", w.Ha),
        w.Q = function(e) {
            (e = 0 == arguments.length ? [] : e) === B || e === I || "length"in e || H(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
            var t = w.m(e);
            return w.a.extend(t, w.Q.fn),
            t
        }
        ,
        w.Q.fn = {
            remove: function(t) {
                for (var e = this(), n = [], i = "function" == typeof t ? t : function(e) {
                    return e === t
                }
                , r = 0; r < e.length; r++) {
                    var o = e[r];
                    i(o) && (0 === n.length && this.I(),
                    n.push(o),
                    e.splice(r, 1),
                    r--)
                }
                return n.length && this.H(),
                n
            },
            removeAll: function(t) {
                var e, n;
                return t === I ? (n = (e = this()).slice(0),
                this.I(),
                e.splice(0, e.length),
                this.H(),
                n) : t ? this.remove(function(e) {
                    return 0 <= w.a.j(t, e)
                }) : []
            },
            destroy: function(t) {
                var e = this()
                  , n = "function" == typeof t ? t : function(e) {
                    return e === t
                }
                ;
                this.I();
                for (var i = e.length - 1; 0 <= i; i--)
                    n(e[i]) && (e[i]._destroy = !0);
                this.H()
            },
            destroyAll: function(t) {
                return t === I ? this.destroy(U(!0)) : t ? this.destroy(function(e) {
                    return 0 <= w.a.j(t, e)
                }) : []
            },
            indexOf: function(e) {
                var t = this();
                return w.a.j(t, e)
            },
            replace: function(e, t) {
                e = this.indexOf(e);
                0 <= e && (this.I(),
                this()[e] = t,
                this.H())
            }
        },
        w.a.v("pop push reverse shift sort splice unshift".split(" "), function(t) {
            w.Q.fn[t] = function() {
                var e = this();
                return this.I(),
                e = e[t].apply(e, arguments),
                this.H(),
                e
            }
        }),
        w.a.v(["slice"], function(t) {
            w.Q.fn[t] = function() {
                var e = this();
                return e[t].apply(e, arguments)
            }
        }),
        w.b("observableArray", w.Q),
        w.h = function(e, i, t) {
            function n() {
                w.a.v(d, function(e) {
                    e.A()
                }),
                d = []
            }
            function r() {
                var e = a.throttleEvaluation;
                e && 0 <= e ? (clearTimeout(y),
                y = setTimeout(o, e)) : o()
            }
            function o() {
                if (!c)
                    if (u && m())
                        h();
                    else {
                        c = !0;
                        try {
                            var n = w.a.T(d, function(e) {
                                return e.target
                            });
                            w.U.bb(function(e) {
                                var t;
                                0 <= (t = w.a.j(n, e)) ? n[t] = I : d.push(e.ta(r))
                            });
                            for (var e = p.call(i), t = n.length - 1; 0 <= t; t--)
                                n[t] && d.splice(t, 1)[0].A();
                            u = !0,
                            a.notifySubscribers(s, "beforeChange"),
                            s = e
                        } finally {
                            w.U.end()
                        }
                        a.notifySubscribers(s),
                        c = !1
                    }
            }
            function a() {
                if (!(0 < arguments.length))
                    return u || o(),
                    w.U.La(a),
                    s;
                !function() {
                    "function" == typeof f ? f.apply(i, arguments) : H(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))
                }
                .apply(a, arguments)
            }
            var s, l, u = !1, c = !1, p = e, f = ("function" != typeof (p = p && "object" == typeof p ? (t = p).read : (t = t || {},
            p || t.read)) && H(Error("Pass a function that returns the value of the ko.computed")),
            t.write), d = (i = i || t.owner,
            []), h = n, g = "object" == typeof t.disposeWhenNodeIsRemoved ? t.disposeWhenNodeIsRemoved : B, m = t.disposeWhen || U(!1), y = (g && (h = function() {
                w.a.G.Ma(g, arguments.callee),
                n()
            }
            ,
            w.a.G.wa(g, h),
            l = m,
            m = function() {
                return !w.a.fa(g) || l()
            }
            ),
            B);
            return a.nb = function() {
                return d.length
            }
            ,
            a.pb = "function" == typeof t.write,
            a.A = function() {
                h()
            }
            ,
            w.R.call(a),
            w.a.extend(a, w.h.fn),
            !0 !== t.deferEvaluation && o(),
            w.B(a, "dispose", a.A),
            w.B(a, "getDependenciesCount", a.nb),
            a
        }
        ,
        w.rb = function(e) {
            return w.ia(e, w.h)
        }
        ,
        e = w.m.Db,
        w.h[e] = w.m,
        w.h.fn = {},
        w.h.fn[e] = w.h,
        w.b("dependentObservable", w.h),
        w.b("computed", w.h),
        w.b("isComputed", w.rb),
        w.Ta = function(e) {
            return 0 == arguments.length && H(Error("When calling ko.toJS, pass the object you want to convert.")),
            h(e, function(e) {
                for (var t = 0; w.la(e) && t < 10; t++)
                    e = e();
                return e
            })
        }
        ,
        w.toJSON = function(e, t, n) {
            return e = w.Ta(e),
            w.a.sa(e, t, n)
        }
        ,
        w.b("toJS", w.Ta),
        w.b("toJSON", w.toJSON),
        w.k = {
            r: function(e) {
                switch (w.a.o(e)) {
                case "option":
                    return !0 === e.__ko__hasDomDataOptionValue__ ? w.a.f.get(e, w.c.options.oa) : e.getAttribute("value");
                case "select":
                    return 0 <= e.selectedIndex ? w.k.r(e.options[e.selectedIndex]) : I;
                default:
                    return e.value
                }
            },
            S: function(e, t) {
                switch (w.a.o(e)) {
                case "option":
                    "string" == typeof t ? (w.a.f.set(e, w.c.options.oa, I),
                    "__ko__hasDomDataOptionValue__"in e && delete e.__ko__hasDomDataOptionValue__,
                    e.value = t) : (w.a.f.set(e, w.c.options.oa, t),
                    e.__ko__hasDomDataOptionValue__ = !0,
                    e.value = "number" == typeof t ? t : "");
                    break;
                case "select":
                    for (var n = e.options.length - 1; 0 <= n; n--)
                        if (w.k.r(e.options[n]) == t) {
                            e.selectedIndex = n;
                            break
                        }
                    break;
                default:
                    e.value = t = t !== B && t !== I ? t : ""
                }
            }
        },
        w.b("selectExtensions", w.k),
        w.b("selectExtensions.readValue", w.k.r),
        w.b("selectExtensions.writeValue", w.k.S),
        w.g = (o = /\@ko_token_(\d+)\@/g,
        s = /^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,
        l = ["true", "false"],
        {
            D: [],
            W: function(e) {
                if ((r = w.a.w(e)).length < 3)
                    return [];
                "{" === r.charAt(0) && (r = r.substring(1, r.length - 1));
                for (var e = [], t = B, n = 0; n < r.length; n++) {
                    var i, r, o = r.charAt(n);
                    if (t === B)
                        switch (o) {
                        case '"':
                        case "'":
                        case "/":
                            t = n,
                            a = o
                        }
                    else
                        o == a && "\\" !== r.charAt(n - 1) && (o = r.substring(t, n + 1),
                        e.push(o),
                        i = "@ko_token_" + (e.length - 1) + "@",
                        r = r.substring(0, t) + i + r.substring(n + 1),
                        n -= o.length - i.length,
                        t = B)
                }
                for (var a = t = B, s = 0, l = B, n = 0; n < r.length; n++) {
                    if (o = r.charAt(n),
                    t === B)
                        switch (o) {
                        case "{":
                            t = n,
                            l = o,
                            a = "}";
                            break;
                        case "(":
                            t = n,
                            l = o,
                            a = ")";
                            break;
                        case "[":
                            t = n,
                            l = o,
                            a = "]"
                        }
                    o === l ? s++ : o === a && 0 === --s && (o = r.substring(t, n + 1),
                    e.push(o),
                    i = "@ko_token_" + (e.length - 1) + "@",
                    r = r.substring(0, t) + i + r.substring(n + 1),
                    n -= o.length - i.length,
                    t = B)
                }
                for (a = [],
                t = 0,
                n = (r = r.split(",")).length; t < n; t++)
                    0 < (l = (s = r[t]).indexOf(":")) && l < s.length - 1 ? (o = s.substring(l + 1),
                    a.push({
                        key: m(s.substring(0, l), e),
                        value: m(o, e)
                    })) : a.push({
                        unknown: m(s, e)
                    });
                return a
            },
            ka: function(e) {
                for (var t, n = "string" == typeof e ? w.g.W(e) : e, i = [], e = [], r = 0; t = n[r]; r++)
                    if (0 < i.length && i.push(","),
                    t.key) {
                        e: {
                            var o = t.key
                              , a = w.a.w(o);
                            switch (a.length && a.charAt(0)) {
                            case "'":
                            case '"':
                                break e;
                            default:
                                o = "'" + a + "'"
                            }
                        }
                        t = t.value,
                        i.push(o),
                        i.push(":"),
                        i.push(t),
                        a = w.a.w(t),
                        0 <= w.a.j(l, w.a.w(a).toLowerCase()) || a.match(s) === B || (0 < e.length && e.push(", "),
                        e.push(o + " : function(__ko_value) { " + t + " = __ko_value; }"))
                    } else
                        t.unknown && i.push(t.unknown);
                return n = i.join(""),
                n = 0 < e.length ? n + ", '_ko_property_writers' : { " + e.join("") + " } " : n
            },
            wb: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (w.a.w(e[n].key) == t)
                        return !0;
                return !1
            },
            $: function(e, t, n, i, r) {
                e && w.Ha(e) ? r && e() === i || e(i) : (e = t()._ko_property_writers) && e[n] && e[n](i)
            }
        }),
        w.b("jsonExpressionRewriting", w.g),
        w.b("jsonExpressionRewriting.bindingRewriteValidators", w.g.D),
        w.b("jsonExpressionRewriting.parseObjectLiteral", w.g.W),
        w.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", w.g.ka),
        t = "\x3c!--test--\x3e" === N.createComment("test").text,
        a = t ? /^<\!--\s*ko\s+(.*\:.*)\s*--\>$/ : /^\s*ko\s+(.*\:.*)\s*$/,
        u = t ? /^<\!--\s*\/ko\s*--\>$/ : /^\s*\/ko\s*$/,
        c = {
            ul: !0,
            ol: !0
        },
        w.e = {
            C: {},
            childNodes: function(e) {
                return y(e) ? b(e) : e.childNodes
            },
            ha: function(e) {
                if (y(e))
                    for (var t = 0, n = (e = w.e.childNodes(e)).length; t < n; t++)
                        w.removeNode(e[t]);
                else
                    w.a.ga(e)
            },
            X: function(e, t) {
                if (y(e)) {
                    w.e.ha(e);
                    for (var n = e.nextSibling, i = 0, r = t.length; i < r; i++)
                        n.parentNode.insertBefore(t[i], n)
                } else
                    w.a.X(e, t)
            },
            Ka: function(e, t) {
                y(e) ? e.parentNode.insertBefore(t, e.nextSibling) : e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            },
            Fa: function(e, t, n) {
                y(e) ? e.parentNode.insertBefore(t, n.nextSibling) : n.nextSibling ? e.insertBefore(t, n.nextSibling) : e.appendChild(t)
            },
            firstChild: function(e) {
                return y(e) ? !e.nextSibling || v(e.nextSibling) ? B : e.nextSibling : e.firstChild
            },
            nextSibling: function(e) {
                return (e = y(e) ? _(e) : e).nextSibling && v(e.nextSibling) ? B : e.nextSibling
            },
            Xa: function(e) {
                return (e = y(e)) ? e[1] : B
            },
            Ia: function(e) {
                if (c[w.a.o(e)]) {
                    var t = e.firstChild;
                    if (t)
                        do {
                            if (1 === t.nodeType) {
                                var n, i = t.firstChild, r = B;
                                if (i)
                                    do {} while (r ? r.push(i) : y(i) ? (n = _(i, !0)) ? i = n : r = [i] : v(i) && (r = [i]),
                                    i = i.nextSibling);
                                if (i = r)
                                    for (r = t.nextSibling,
                                    n = 0; n < i.length; n++)
                                        r ? e.insertBefore(i[n], r) : e.appendChild(i[n])
                            }
                        } while (t = t.nextSibling)
                }
            }
        },
        w.b("virtualElements", w.e),
        w.b("virtualElements.allowedBindings", w.e.C),
        w.b("virtualElements.emptyNode", w.e.ha),
        w.b("virtualElements.insertAfter", w.e.Fa),
        w.b("virtualElements.prepend", w.e.Ka),
        w.b("virtualElements.setDomNodeChildren", w.e.X),
        w.J = function() {
            this.cb = {}
        }
        ,
        w.a.extend(w.J.prototype, {
            nodeHasBindings: function(e) {
                switch (e.nodeType) {
                case 1:
                    return e.getAttribute("data-bind") != B;
                case 8:
                    return w.e.Xa(e) != B;
                default:
                    return !1
                }
            },
            getBindings: function(e, t) {
                e = this.getBindingsString(e, t);
                return e ? this.parseBindingsString(e, t) : B
            },
            getBindingsString: function(e) {
                switch (e.nodeType) {
                case 1:
                    return e.getAttribute("data-bind");
                case 8:
                    return w.e.Xa(e);
                default:
                    return B
                }
            },
            parseBindingsString: function(t, e) {
                try {
                    var n, i, r = e.$data, o = (r = "object" == typeof r && r != B ? [r, e] : [e]).length, a = this.cb, s = o + "_" + t;
                    return (i = a[s]) || (n = " { " + w.g.ka(t) + " } ",
                    i = a[s] = w.a.eb(n, o)),
                    i(r)
                } catch (e) {
                    H(Error("Unable to parse bindings.\nMessage: " + e + ";\nBindings value: " + t))
                }
            }
        }),
        w.J.instance = new w.J,
        w.b("bindingProvider", w.J),
        w.c = {},
        w.z = function(e, t) {
            t ? (w.a.extend(this, t),
            this.$parentContext = t,
            this.$parent = t.$data,
            this.$parents = (t.$parents || []).slice(0),
            this.$parents.unshift(this.$parent)) : (this.$parents = [],
            this.$root = e),
            this.$data = e
        }
        ,
        w.z.prototype.createChildContext = function(e) {
            return new w.z(e,this)
        }
        ,
        w.z.prototype.extend = function(e) {
            var t = w.a.extend(new w.z, this);
            return w.a.extend(t, e)
        }
        ,
        w.Ra = function(e, t) {
            if (2 != arguments.length)
                return w.a.f.get(e, "__ko_bindingContext__");
            w.a.f.set(e, "__ko_bindingContext__", t)
        }
        ,
        w.ya = function(e, t, n) {
            return 1 === e.nodeType && w.e.Ia(e),
            k(e, t, n, !0)
        }
        ,
        w.Ya = function(e, t) {
            1 !== t.nodeType && 8 !== t.nodeType || x(e, t, !0)
        }
        ,
        w.xa = function(e, t) {
            t && 1 !== t.nodeType && 8 !== t.nodeType && H(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")),
            T(e, t = t || F.document.body, !0)
        }
        ,
        w.ea = function(e) {
            switch (e.nodeType) {
            case 1:
            case 8:
                var t = w.Ra(e);
                return t ? t : e.parentNode ? w.ea(e.parentNode) : void 0
            }
        }
        ,
        w.hb = function(e) {
            return (e = w.ea(e)) ? e.$data : I
        }
        ,
        w.b("bindingHandlers", w.c),
        w.b("applyBindings", w.xa),
        w.b("applyBindingsToDescendants", w.Ya),
        w.b("applyBindingsToNode", w.ya),
        w.b("contextFor", w.ea),
        w.b("dataFor", w.hb),
        w.a.v(["click"], function(r) {
            w.c[r] = {
                init: function(e, t, n, i) {
                    return w.c.event.init.call(this, e, function() {
                        var e = {};
                        return e[r] = t(),
                        e
                    }, n, i)
                }
            }
        }),
        w.c.event = {
            init: function(e, a, s, l) {
                for (var t in a() || {})
                    !function() {
                        var o = t;
                        "string" == typeof o && w.a.n(e, o, function(e) {
                            var t, n = a()[o];
                            if (n) {
                                var i = s();
                                try {
                                    var r = w.a.L(arguments);
                                    r.unshift(l),
                                    t = n.apply(l, r)
                                } finally {
                                    !0 !== t && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                }
                                !1 === i[o + "Bubble"] && (e.cancelBubble = !0,
                                e.stopPropagation) && e.stopPropagation()
                            }
                        })
                    }()
            }
        },
        w.c.submit = {
            init: function(i, r, e, o) {
                "function" != typeof r() && H(Error("The value for a submit binding must be a function")),
                w.a.n(i, "submit", function(e) {
                    var t, n = r();
                    try {
                        t = n.call(o, i)
                    } finally {
                        !0 !== t && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    }
                })
            }
        },
        w.c.visible = {
            update: function(e, t) {
                var t = w.a.d(t())
                  , n = "none" != e.style.display;
                t && !n ? e.style.display = "" : !t && n && (e.style.display = "none")
            }
        },
        w.c.enable = {
            update: function(e, t) {
                t = w.a.d(t());
                t && e.disabled ? e.removeAttribute("disabled") : t || e.disabled || (e.disabled = !0)
            }
        },
        w.c.disable = {
            update: function(e, t) {
                w.c.enable.update(e, function() {
                    return !w.a.d(t())
                })
            }
        },
        w.c.value = {
            init: function(n, i, r) {
                function o() {
                    var e = i()
                      , t = w.k.r(n);
                    w.g.$(e, r, "value", t, !0)
                }
                var e, t = ["change"], a = r().valueUpdate;
                a && (w.a.N(t, a = "string" == typeof a ? [a] : a),
                t = w.a.za(t)),
                !w.a.ja || "input" != n.tagName.toLowerCase() || "text" != n.type || "off" == n.autocomplete || n.form && "off" == n.form.autocomplete || -1 != w.a.j(t, "propertychange") || (e = !1,
                w.a.n(n, "propertychange", function() {
                    e = !0
                }),
                w.a.n(n, "blur", function() {
                    e && (e = !1,
                    o())
                })),
                w.a.v(t, function(e) {
                    var t = o;
                    w.a.Hb(e, "after") && (t = function() {
                        setTimeout(o, 0)
                    }
                    ,
                    e = e.substring(5)),
                    w.a.n(n, e, t)
                })
            },
            update: function(e, t) {
                var n = "select" === w.a.o(e)
                  , i = w.a.d(t())
                  , t = w.k.r(e);
                (0 === i && 0 !== t && "0" !== t ? !0 : i != t) && ((t = function() {
                    w.k.S(e, i)
                }
                )(),
                n) && setTimeout(t, 0),
                n && 0 < e.length && p(e, i, !1)
            }
        },
        w.c.options = {
            update: function(e, t, n) {
                "select" !== w.a.o(e) && H(Error("options binding applies only to SELECT elements"));
                for (var i = 0 == e.length, r = w.a.T(w.a.aa(e.childNodes, function(e) {
                    return e.tagName && "option" === w.a.o(e) && e.selected
                }), function(e) {
                    return w.k.r(e) || e.innerText || e.textContent
                }), o = e.scrollTop, a = w.a.d(t()); 0 < e.length; )
                    w.F(e.options[0]),
                    e.remove(0);
                if (a) {
                    n = n(),
                    "number" != typeof a.length && (a = [a]),
                    n.optionsCaption && (l = N.createElement("option"),
                    w.a.Y(l, n.optionsCaption),
                    w.k.S(l, I),
                    e.appendChild(l));
                    for (var t = 0, s = a.length; t < s; t++) {
                        var l = N.createElement("option")
                          , u = "string" == typeof n.optionsValue ? a[t][n.optionsValue] : a[t]
                          , u = w.a.d(u)
                          , c = (w.k.S(l, u),
                        n.optionsText);
                        (u = "function" == typeof c ? c(a[t]) : "string" == typeof c ? a[t][c] : u) !== B && u !== I || (u = ""),
                        w.a.Qa(l, u),
                        e.appendChild(l)
                    }
                    for (t = l = 0,
                    s = (a = e.getElementsByTagName("option")).length; t < s; t++)
                        0 <= w.a.j(r, w.k.r(a[t])) && (w.a.Pa(a[t], !0),
                        l++);
                    e.scrollTop = o,
                    i && "value"in n && p(e, w.a.d(n.value), !0),
                    w.a.lb(e)
                }
            }
        },
        w.c.options.oa = "__ko.optionValueDomData__",
        w.c.selectedOptions = {
            Ea: function(e) {
                for (var t = [], n = 0, i = (e = e.childNodes).length; n < i; n++) {
                    var r = e[n]
                      , o = w.a.o(r);
                    "option" == o && r.selected ? t.push(w.k.r(r)) : "optgroup" == o && (r = w.c.selectedOptions.Ea(r),
                    Array.prototype.splice.apply(t, [t.length, 0].concat(r)))
                }
                return t
            },
            init: function(e, n, i) {
                w.a.n(e, "change", function() {
                    var e = n()
                      , t = w.c.selectedOptions.Ea(this);
                    w.g.$(e, i, "value", t)
                })
            },
            update: function(e, t) {
                "select" != w.a.o(e) && H(Error("values binding applies only to SELECT elements"));
                var n = w.a.d(t());
                if (n && "number" == typeof n.length)
                    for (var i = e.childNodes, r = 0, o = i.length; r < o; r++) {
                        var a = i[r];
                        "option" === w.a.o(a) && w.a.Pa(a, 0 <= w.a.j(n, w.k.r(a)))
                    }
            }
        },
        w.c.text = {
            update: function(e, t) {
                w.a.Qa(e, t())
            }
        },
        w.c.html = {
            init: function() {
                return {
                    controlsDescendantBindings: !0
                }
            },
            update: function(e, t) {
                t = w.a.d(t());
                w.a.Y(e, t)
            }
        },
        w.c.css = {
            update: function(e, t) {
                var n, i, r = w.a.d(t() || {});
                for (n in r)
                    "string" == typeof n && (i = w.a.d(r[n]),
                    w.a.Ua(e, n, i))
            }
        },
        w.c.style = {
            update: function(e, t) {
                var n, i, r = w.a.d(t() || {});
                for (n in r)
                    "string" == typeof n && (i = w.a.d(r[n]),
                    e.style[n] = i || "")
            }
        },
        w.c.uniqueName = {
            init: function(e, t) {
                t() && (e.name = "ko_unique_" + ++w.c.uniqueName.gb,
                w.a.tb || w.a.ub) && e.mergeAttributes(N.createElement("<input name='" + e.name + "'/>"), !1)
            }
        },
        w.c.uniqueName.gb = 0,
        w.c.checked = {
            init: function(n, i, r) {
                w.a.n(n, "click", function() {
                    var e;
                    if ("checkbox" == n.type)
                        e = n.checked;
                    else {
                        if ("radio" != n.type || !n.checked)
                            return;
                        e = n.value
                    }
                    var t = i();
                    "checkbox" == n.type && w.a.d(t)instanceof Array ? (e = w.a.j(w.a.d(t), n.value),
                    n.checked && e < 0 ? t.push(n.value) : !n.checked && 0 <= e && t.splice(e, 1)) : w.g.$(t, r, "checked", e, !0)
                }),
                "radio" != n.type || n.name || w.c.uniqueName.init(n, U(!0))
            },
            update: function(e, t) {
                t = w.a.d(t());
                "checkbox" == e.type ? e.checked = t instanceof Array ? 0 <= w.a.j(t, e.value) : t : "radio" == e.type && (e.checked = e.value == t)
            }
        };
        var S, E, C, j = {
            class: "className",
            for: "htmlFor"
        };
        function O(e, t, n) {
            for (var e = w.g.W(e), i = w.g.D, r = 0; r < e.length; r++) {
                var o, a = e[r].key;
                i.hasOwnProperty(a) && ("function" == typeof (o = i[a]) ? (a = o(e[r].value)) && H(Error(a)) : o || H(Error("This template engine does not support the '" + a + "' binding within its templates")))
            }
            return e = "ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { " + w.g.ka(e) + " } })()         })",
            n.createJavaScriptEvaluatorBlock(e) + t
        }
        function L(e, t, n) {
            for (var i, t = w.e.nextSibling(t); e && (i = e) !== t; )
                e = w.e.nextSibling(i),
                1 !== i.nodeType && 8 !== i.nodeType || n(i)
        }
        function D(e, t) {
            var n;
            e.length && (L(n = e[0], e = e[e.length - 1], function(e) {
                w.xa(t, e)
            }),
            L(n, e, function(e) {
                w.s.Wa(e, [t])
            }))
        }
        function M(e) {
            return e.nodeType ? e : 0 < e.length ? e[0] : B
        }
        function P(e, t, n, i, r) {
            var r = r || {}
              , o = (o = e && M(e)) && o.ownerDocument
              , a = r.templateEngine || C;
            switch (w.Z.mb(n, a, o),
            ("number" != typeof (n = a.renderTemplate(n, i, r, o)).length || 0 < n.length && "number" != typeof n[0].nodeType) && H(Error("Template engine must return an array of DOM nodes")),
            o = !1,
            t) {
            case "replaceChildren":
                w.e.X(e, n),
                o = !0;
                break;
            case "replaceNode":
                w.a.Na(e, n),
                o = !0;
                break;
            case "ignoreTargetNode":
                break;
            default:
                H(Error("Unknown renderMode: " + t))
            }
            return o && (D(n, i),
            r.afterRender) && r.afterRender(n, i.$data),
            n
        }
        function A(e) {
            if (2 < e.length) {
                for (var t = e[0], n = e[e.length - 1], i = [t]; t !== n; ) {
                    if (!(t = t.nextSibling))
                        return;
                    i.push(t)
                }
                Array.prototype.splice.apply(e, [0, e.length].concat(i))
            }
        }
        w.c.attr = {
            update: function(e, t) {
                var n, i, r, o = w.a.d(t()) || {};
                for (n in o)
                    "string" == typeof n && ((r = !1 === (i = w.a.d(o[n])) || i === B || i === I) && e.removeAttribute(n),
                    w.a.ja <= 8 && n in j ? (n = j[n],
                    r ? e.removeAttribute(n) : e[n] = i) : r || e.setAttribute(n, i.toString()))
            }
        },
        w.c.hasfocus = {
            init: function(e, n, i) {
                function t(e) {
                    var t = n();
                    w.g.$(t, i, "hasfocus", e, !0)
                }
                w.a.n(e, "focus", function() {
                    t(!0)
                }),
                w.a.n(e, "focusin", function() {
                    t(!0)
                }),
                w.a.n(e, "blur", function() {
                    t(!1)
                }),
                w.a.n(e, "focusout", function() {
                    t(!1)
                })
            },
            update: function(e, t) {
                t = w.a.d(t());
                t ? e.focus() : e.blur(),
                w.a.va(e, t ? "focusin" : "focusout")
            }
        },
        w.c.with = {
            p: function(t) {
                return function() {
                    var e = t();
                    return {
                        if: e,
                        data: e,
                        templateEngine: w.q.K
                    }
                }
            },
            init: function(e, t) {
                return w.c.template.init(e, w.c.with.p(t))
            },
            update: function(e, t, n, i, r) {
                return w.c.template.update(e, w.c.with.p(t), n, i, r)
            }
        },
        w.g.D.with = !1,
        w.e.C.with = !0,
        w.c.if = {
            p: function(e) {
                return function() {
                    return {
                        if: e(),
                        templateEngine: w.q.K
                    }
                }
            },
            init: function(e, t) {
                return w.c.template.init(e, w.c.if.p(t))
            },
            update: function(e, t, n, i, r) {
                return w.c.template.update(e, w.c.if.p(t), n, i, r)
            }
        },
        w.g.D.if = !1,
        w.e.C.if = !0,
        w.c.ifnot = {
            p: function(e) {
                return function() {
                    return {
                        ifnot: e(),
                        templateEngine: w.q.K
                    }
                }
            },
            init: function(e, t) {
                return w.c.template.init(e, w.c.ifnot.p(t))
            },
            update: function(e, t, n, i, r) {
                return w.c.template.update(e, w.c.ifnot.p(t), n, i, r)
            }
        },
        w.g.D.ifnot = !1,
        w.e.C.ifnot = !0,
        w.c.foreach = {
            p: function(t) {
                return function() {
                    var e = w.a.d(t());
                    return e && "number" != typeof e.length ? {
                        foreach: e.data,
                        includeDestroyed: e.includeDestroyed,
                        afterAdd: e.afterAdd,
                        beforeRemove: e.beforeRemove,
                        afterRender: e.afterRender,
                        templateEngine: w.q.K
                    } : {
                        foreach: e,
                        templateEngine: w.q.K
                    }
                }
            },
            init: function(e, t) {
                return w.c.template.init(e, w.c.foreach.p(t))
            },
            update: function(e, t, n, i, r) {
                return w.c.template.update(e, w.c.foreach.p(t), n, i, r)
            }
        },
        w.g.D.foreach = !1,
        w.e.C.foreach = !0,
        w.t = function() {}
        ,
        w.t.prototype.renderTemplateSource = function() {
            H(Error("Override renderTemplateSource"))
        }
        ,
        w.t.prototype.createJavaScriptEvaluatorBlock = function() {
            H(Error("Override createJavaScriptEvaluatorBlock"))
        }
        ,
        w.t.prototype.makeTemplateSource = function(e, t) {
            return "string" == typeof e ? ((t = (t = t || N).getElementById(e)) || H(Error("Cannot find template with ID " + e)),
            new w.l.i(t)) : 1 == e.nodeType || 8 == e.nodeType ? new w.l.M(e) : void H(Error("Unknown template type: " + e))
        }
        ,
        w.t.prototype.renderTemplate = function(e, t, n, i) {
            return this.renderTemplateSource(this.makeTemplateSource(e, i), t, n)
        }
        ,
        w.t.prototype.isTemplateRewritten = function(e, t) {
            return !(!1 !== this.allowTemplateRewriting && (t && t != N || !this.V || !this.V[e])) || this.makeTemplateSource(e, t).data("isRewritten")
        }
        ,
        w.t.prototype.rewriteTemplate = function(e, t, n) {
            var i = this.makeTemplateSource(e, n)
              , t = t(i.text());
            i.text(t),
            i.data("isRewritten", !0),
            n && n != N || "string" != typeof e || (this.V = this.V || {},
            this.V[e] = !0)
        }
        ,
        w.b("templateEngine", w.t),
        w.Z = (S = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,
        E = /<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g,
        {
            mb: function(e, t, n) {
                t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
                    return w.Z.zb(e, t)
                }, n)
            },
            zb: function(e, s) {
                return e.replace(S, function(e, t, n, i, r, o, a) {
                    return O(a, t, s)
                }).replace(E, function(e, t) {
                    return O(t, "\x3c!-- ko --\x3e", s)
                })
            },
            Za: function(n) {
                return w.s.na(function(e, t) {
                    e.nextSibling && w.ya(e.nextSibling, n, t)
                })
            }
        }),
        w.b("templateRewriting", w.Z),
        w.b("templateRewriting.applyMemoizedBindingsToNextSibling", w.Z.Za),
        w.l = {},
        w.l.i = function(e) {
            this.i = e
        }
        ,
        w.l.i.prototype.text = function() {
            var e = "script" === (e = w.a.o(this.i)) ? "text" : "textarea" === e ? "value" : "innerHTML";
            if (0 == arguments.length)
                return this.i[e];
            var t = arguments[0];
            "innerHTML" == e ? w.a.Y(this.i, t) : this.i[e] = t
        }
        ,
        w.l.i.prototype.data = function(e) {
            if (1 === arguments.length)
                return w.a.f.get(this.i, "templateSourceData_" + e);
            w.a.f.set(this.i, "templateSourceData_" + e, arguments[1])
        }
        ,
        w.l.M = function(e) {
            this.i = e
        }
        ,
        w.l.M.prototype = new w.l.i,
        w.l.M.prototype.text = function() {
            var e;
            if (0 == arguments.length)
                return (e = w.a.f.get(this.i, "__ko_anon_template__") || {}).ua === I && e.da && (e.ua = e.da.innerHTML),
                e.ua;
            w.a.f.set(this.i, "__ko_anon_template__", {
                ua: arguments[0]
            })
        }
        ,
        w.l.i.prototype.nodes = function() {
            if (0 == arguments.length)
                return (w.a.f.get(this.i, "__ko_anon_template__") || {}).da;
            w.a.f.set(this.i, "__ko_anon_template__", {
                da: arguments[0]
            })
        }
        ,
        w.b("templateSources", w.l),
        w.b("templateSources.domElement", w.l.i),
        w.b("templateSources.anonymousTemplate", w.l.M),
        w.ra = function(e) {
            e == I || e instanceof w.t || H(Error("templateEngine must inherit from ko.templateEngine")),
            C = e
        }
        ,
        w.qa = function(n, i, r, o, a) {
            var s;
            return ((r = r || {}).templateEngine || C) == I && H(Error("Set a template engine before calling renderTemplate")),
            a = a || "replaceChildren",
            o ? (s = M(o),
            w.h(function() {
                var e = i && i instanceof w.z ? i : new w.z(w.a.d(i))
                  , t = "function" == typeof n ? n(e.$data) : n
                  , e = P(o, a, t, e, r);
                "replaceNode" == a && (s = M(o = e))
            }, B, {
                disposeWhen: function() {
                    return !s || !w.a.fa(s)
                },
                disposeWhenNodeIsRemoved: s && "replaceNode" == a ? s.parentNode : s
            })) : w.s.na(function(e) {
                w.qa(n, i, r, e, "replaceNode")
            })
        }
        ,
        w.Fb = function(i, t, r, n, o) {
            function a(e, t) {
                D(t, l),
                r.afterRender && r.afterRender(t, e)
            }
            function s(e, t) {
                var n = "function" == typeof i ? i(e) : i;
                return (l = o.createChildContext(w.a.d(e))).$index = t,
                P(B, "ignoreTargetNode", n, l, r)
            }
            var l;
            return w.h(function() {
                var e = w.a.d(t) || [];
                void 0 === e.length && (e = [e]),
                e = w.a.aa(e, function(e) {
                    return r.includeDestroyed || e === I || e === B || !w.a.d(e._destroy)
                }),
                w.a.Oa(n, e, s, r, a)
            }, B, {
                disposeWhenNodeIsRemoved: n
            })
        }
        ,
        w.c.template = {
            init: function(e, t) {
                t = w.a.d(t());
                return "string" == typeof t || t.name || 1 != e.nodeType && 8 != e.nodeType || (t = 1 == e.nodeType ? e.childNodes : w.e.childNodes(e),
                t = w.a.Ab(t),
                new w.l.M(e).nodes(t)),
                {
                    controlsDescendantBindings: !0
                }
            },
            update: function(e, t, n, i, r) {
                i = !0,
                "string" == typeof (t = w.a.d(t())) ? n = t : (n = t.name,
                "if"in t && (i = i && w.a.d(t.if)),
                "ifnot"in t && (i = i && !w.a.d(t.ifnot)));
                var o = B;
                "object" == typeof t && "foreach"in t ? o = w.Fb(n || e, i && t.foreach || [], t, e, r) : i ? (r = "object" == typeof t && "data"in t ? r.createChildContext(w.a.d(t.data)) : r,
                o = w.qa(n || e, r, t, e)) : w.e.ha(e),
                r = o,
                (t = w.a.f.get(e, "__ko__templateSubscriptionDomDataKey__")) && "function" == typeof t.A && t.A(),
                w.a.f.set(e, "__ko__templateSubscriptionDomDataKey__", r)
            }
        },
        w.g.D.template = function(e) {
            return 1 == (e = w.g.W(e)).length && e[0].unknown || w.g.wb(e, "name") ? B : "This template engine does not support anonymous templates nested within its templates"
        }
        ,
        w.e.C.template = !0,
        w.b("setTemplateEngine", w.ra),
        w.b("renderTemplate", w.qa),
        w.a.O = function(e, t, n) {
            if (n === I)
                return w.a.O(e, t, 1) || w.a.O(e, t, 10) || w.a.O(e, t, Number.MAX_VALUE);
            for (var i = e = e || [], r = t = t || [], o = [], a = 0; a <= r.length; a++)
                o[a] = [];
            for (var a = 0, s = Math.min(i.length, n); a <= s; a++)
                o[0][a] = a;
            for (a = 1,
            s = Math.min(r.length, n); a <= s; a++)
                o[a][0] = a;
            for (var s = i.length, l = r.length, a = 1; a <= s; a++)
                for (var u = Math.max(1, a - n), c = Math.min(l, a + n); u <= c; u++)
                    o[u][a] = i[a - 1] === r[u - 1] ? o[u - 1][a - 1] : Math.min(o[u - 1][a] === I ? Number.MAX_VALUE : o[u - 1][a] + 1, o[u][a - 1] === I ? Number.MAX_VALUE : o[u][a - 1] + 1);
            if (n = e.length,
            r = [],
            (a = o[i = t.length][n]) === I)
                o = B;
            else {
                for (; 0 < n || 0 < i; )
                    s = o[i][n],
                    l = 0 < i ? o[i - 1][n] : a + 1,
                    c = 0 < n ? o[i][n - 1] : a + 1,
                    (u = 0 < i && 0 < n ? o[i - 1][n - 1] : a + 1) < s - 1 && (u = a + 1),
                    (l = l === I || l < s - 1 ? a + 1 : l) <= (c = c === I || c < s - 1 ? a + 1 : c) && l < u ? (r.push({
                        status: "added",
                        value: t[i - 1]
                    }),
                    i--) : (c < l && c < u ? r.push({
                        status: "deleted",
                        value: e[n - 1]
                    }) : (r.push({
                        status: "retained",
                        value: e[n - 1]
                    }),
                    i--),
                    n--);
                o = r.reverse()
            }
            return o
        }
        ,
        w.b("utils.compareArrays", w.a.O),
        w.a.Oa = function(e, t, n, i, r) {
            for (var t = t || [], i = i || {}, o = w.a.f.get(e, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === I, a = w.a.f.get(e, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [], s = w.a.T(a, function(e) {
                return e.$a
            }), l = w.a.O(s, t), t = [], u = 0, c = [], p = 0, s = [], f = B, d = 0, h = l.length; d < h; d++)
                switch (l[d].status) {
                case "retained":
                    (g = a[u]).qb(p),
                    p = t.push(g),
                    0 < g.P.length && (f = g.P[g.P.length - 1]),
                    u++;
                    break;
                case "deleted":
                    a[u].h.A(),
                    A(a[u].P),
                    w.a.v(a[u].P, function(e) {
                        c.push({
                            element: e,
                            index: d,
                            value: l[d].value
                        }),
                        f = e
                    }),
                    u++;
                    break;
                case "added":
                    for (var g = l[d].value, m = w.m(p), y = (p = function(e, t, n, i, r) {
                        var o = []
                          , e = w.h(function() {
                            var e = t(n, r) || [];
                            0 < o.length && (A(o),
                            w.a.Na(o, e),
                            i) && i(n, e),
                            o.splice(0, o.length),
                            w.a.N(o, e)
                        }, B, {
                            disposeWhenNodeIsRemoved: e,
                            disposeWhen: function() {
                                return 0 == o.length || !w.a.fa(o[0])
                            }
                        });
                        return {
                            xb: o,
                            h: e
                        }
                    }(e, n, g, r, m)).xb, p = t.push({
                        $a: l[d].value,
                        P: y,
                        h: p.h,
                        qb: m
                    }), v = 0, b = y.length; v < b; v++) {
                        var _ = y[v];
                        s.push({
                            element: _,
                            index: d,
                            value: l[d].value
                        }),
                        f == B ? w.e.Ka(e, _) : w.e.Fa(e, _, f),
                        f = _
                    }
                    r && r(g, y, m)
                }
            if (w.a.v(c, function(e) {
                w.F(e.element)
            }),
            n = !1,
            !o) {
                if (i.afterAdd)
                    for (d = 0; d < s.length; d++)
                        i.afterAdd(s[d].element, s[d].index, s[d].value);
                if (i.beforeRemove) {
                    for (d = 0; d < c.length; d++)
                        i.beforeRemove(c[d].element, c[d].index, c[d].value);
                    n = !0
                }
            }
            if (!n && c.length)
                for (d = 0; d < c.length; d++)
                    (i = c[d].element).parentNode && i.parentNode.removeChild(i);
            w.a.f.set(e, "setDomNodeChildrenFromArrayMapping_lastMappingResult", t)
        }
        ,
        w.b("utils.setDomNodeChildrenFromArrayMapping", w.a.Oa),
        w.q = function() {
            this.allowTemplateRewriting = !1
        }
        ,
        w.q.prototype = new w.t,
        w.q.prototype.renderTemplateSource = function(e) {
            var t = w.a.ja < 9 || !e.nodes ? B : e.nodes();
            return t ? w.a.L(t.cloneNode(!0).childNodes) : (e = e.text(),
            w.a.pa(e))
        }
        ,
        w.q.K = new w.q,
        w.ra(w.q.K),
        w.b("nativeTemplateEngine", w.q),
        w.ma = function() {
            var r = this.vb = function() {
                if ("undefined" == typeof jQuery || !jQuery.tmpl)
                    return 0;
                try {
                    if (0 <= jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))
                        return 2
                } catch (e) {}
                return 1
            }();
            this.renderTemplateSource = function(e, t, n) {
                n = n || {},
                r < 2 && H(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
                var i = e.data("precompiled");
                return i || (i = e.text() || "",
                i = jQuery.template(B, "{{ko_with $item.koBindingContext}}" + i + "{{/ko_with}}"),
                e.data("precompiled", i)),
                e = [t.$data],
                t = jQuery.extend({
                    koBindingContext: t
                }, n.templateOptions),
                (t = jQuery.tmpl(i, e, t)).appendTo(N.createElement("div")),
                jQuery.fragments = {},
                t
            }
            ,
            this.createJavaScriptEvaluatorBlock = function(e) {
                return "{{ko_code ((function() { return " + e + " })()) }}"
            }
            ,
            this.addTemplate = function(e, t) {
                N.write("<script type='text/html' id='" + e + "'>" + t + "<\/script>")
            }
            ,
            0 < r && (jQuery.tmpl.tag.ko_code = {
                open: "__.push($1 || '');"
            },
            jQuery.tmpl.tag.ko_with = {
                open: "with($1) {",
                close: "} "
            })
        }
        ,
        w.ma.prototype = new w.t,
        0 < (e = new w.ma).vb && w.ra(e),
        w.b("jqueryTmplTemplateEngine", w.ma)
    }
    "function" == typeof require && "object" == typeof exports && "object" == typeof module ? e(module.exports || exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(F.ko = {})
}(window, document, navigator),
ko.bindingHandlers.creoleText = {
    update: function(e, t, n, i) {
        t = t();
        $(e).empty(),
        i.getCreole().parse(e, t),
        $(e).find("a").attr("target", "_blank").attr("rel", "noreferrer")
    }
},
ko.bindingHandlers["iframe-src-attr"] = {
    update: function(e, t, n) {
        var t = ko.utils.unwrapObservable(t())
          , t = ko.utils.unwrapObservable(t.src)
          , e = $(e)
          , i = e.attr("src");
        !t && i ? e.removeAttr("src") : t && i !== t && e.attr("src", t)
    }
};
var Parse, Parse = Parse || {}, JSON;
function clearFormFields(e) {
    if (null == e.clearInputs && (e.clearInputs = !0),
    null == e.clearTextareas && (e.clearTextareas = !0),
    null == e.passwordFieldText && (e.passwordFieldText = !1),
    null == e.addClassFocus && (e.addClassFocus = !1),
    e.filterClass || (e.filterClass = "default"),
    e.clearInputs)
        for (var t, n = document.getElementsByTagName("input"), i = 0; i < n.length; i++)
            "text" != n[i].type && "password" != n[i].type || -1 != n[i].className.indexOf(e.filterClass) || (n[i].valueHtml = n[i].value,
            n[i].onfocus = function() {
                this.valueHtml == this.value && (this.value = ""),
                this.fake && (o(this, this.previousSibling),
                this.previousSibling.focus()),
                e.addClassFocus && !this.fake && (this.className += " " + e.addClassFocus,
                this.parentNode.className += " parent-" + e.addClassFocus)
            }
            ,
            n[i].onblur = function() {
                "" == this.value && (this.value = this.valueHtml,
                e.passwordFieldText) && "password" == this.type && o(this, this.nextSibling),
                e.addClassFocus && (this.className = this.className.replace(e.addClassFocus, ""),
                this.parentNode.className = this.parentNode.className.replace("parent-" + e.addClassFocus, ""))
            }
            ,
            e.passwordFieldText && "password" == n[i].type && ((t = document.createElement("input")).type = "text",
            t.value = n[i].value,
            t.className = n[i].className,
            t.fake = !0,
            n[i].parentNode.insertBefore(t, n[i].nextSibling),
            o(n[i], null)));
    if (e.clearTextareas)
        for (var r = document.getElementsByTagName("textarea"), i = 0; i < r.length; i++)
            -1 == r[i].className.indexOf(e.filterClass) && (r[i].valueHtml = r[i].value,
            r[i].onfocus = function() {
                this.value == this.valueHtml && (this.value = ""),
                e.addClassFocus && (this.className += " " + e.addClassFocus,
                this.parentNode.className += " parent-" + e.addClassFocus)
            }
            ,
            r[i].onblur = function() {
                "" == this.value && (this.value = this.valueHtml),
                e.addClassFocus && (this.className = this.className.replace(e.addClassFocus, ""),
                this.parentNode.className = this.parentNode.className.replace("parent-" + e.addClassFocus, ""))
            }
            );
    function o(e, t) {
        e && (e.style.display = "none"),
        t && (t.style.display = "inline")
    }
}
function progressBar(e, t) {
    var n, i = e + "%";
    e <= (t.data("progress") || 0) || ((n = t.data("timeoutRef")) && window.clearTimeout(n),
    t.data("progress", e),
    t.find(".progress").animate({
        width: i
    }, 2e3).addClass("updated"),
    n = setTimeout(function() {
        t.data("timeoutRef", null),
        t.find(".progress").removeClass("updated")
    }, 7e3),
    t.data("timeoutRef", n))
}
function clientMatches(e) {
    if (0 !== (e = e || []).length) {
        var t = window.getClientInfo();
        if (t)
            try {
                t.browser = t.browser || "",
                t.os = t.os || "";
                for (var n = t.browser.toLowerCase(), i = t.browserVersionMajor, r = t.os.toLowerCase(), o = 0; o < e.length; o++)
                    try {
                        var a = e[o]
                          , s = !a.browser || a.browser.test(n)
                          , l = !1
                          , u = (a.os ? "string" == typeof a.os ? l = a.os == r : a.os instanceof RegExp && (l = a.os.test(r)) : l = !0,
                        !1)
                          , u = "number" == typeof a.browserMajorVersion ? a.browserMajorVersion <= i : !a.browserMajorVersion || i == a.browserMajorVersion;
                        if (s && u && l)
                            return !0
                    } catch (e) {}
            } catch (e) {}
    }
    return !1
}
function getClientInfo() {
    try {
        var e, t, n, i, r, o, a, s = (new UAParser).getResult(), l = "";
        return (screen.width && (l += (screen.width || "") + " x " + (screen.height || "")),
        navigator) ? (e = navigator.appVersion,
        t = s.browser.name,
        n = s.os.name,
        i = s.ua,
        r = s.browser.major,
        isFinite(r) && (r = parseInt(r)),
        /Ghostery/.test(i) && (t = "Ghostery"),
        o = !(o = (o = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(e)) || /Android/.test(n)) && "mobile" == s.device.type,
        a = !!navigator.cookieEnabled,
        void 0 !== navigator.cookieEnabled || a || (document.cookie = "testcookie",
        a = -1 != document.cookie.indexOf("testcookie"),
        document.cookie = "testcookie; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
        {
            screen: l,
            browser: t || "",
            browserVersion: s.browser.version,
            browserVersionMajor: r,
            mobile: o.toString(),
            os: n || "",
            osVersion: s.os.version,
            cookies: a,
            engine: s.engine.name,
            deviceVendor: s.device.vendor,
            deviceModel: s.device.model,
            deviceType: s.device.type
        }) : null
    } catch (e) {
        return null
    }
}
Parse.Simple || (Parse.Simple = {}),
Parse.Simple.Base = function(e, t) {
    arguments.length && (this.grammar = e,
    this.grammar.root = new this.ruleConstructor(this.grammar.root),
    this.options = t)
}
,
Parse.Simple.Base.prototype = {
    ruleConstructor: null,
    grammar: null,
    options: null,
    parse: function(e, t, n) {
        if (n)
            for (i in this.options)
                void 0 === n[i] && (n[i] = this.options[i]);
        else
            n = this.options;
        t = t.replace(/\r\n?/g, "\n"),
        this.grammar.root.apply(e, t, n),
        n && n.forIE && $(e).html($(e).html().replace(/\r?\n/g, "\r\n"))
    }
},
Parse.Simple.Base.prototype.constructor = Parse.Simple.Base,
Parse.Simple.Base.Rule = function(e) {
    if (arguments.length) {
        for (var t in e)
            this[t] = e[t];
        this.children || (this.children = [])
    }
}
,
Parse.Simple.Base.prototype.ruleConstructor = Parse.Simple.Base.Rule,
Parse.Simple.Base.Rule.prototype = {
    regex: null,
    capture: null,
    replaceRegex: null,
    replaceString: null,
    tag: null,
    attrs: null,
    children: null,
    match: function(e, t) {
        return e.match(this.regex)
    },
    build: function(e, t, n) {
        var i, r;
        if (null !== this.capture && (i = t[this.capture]),
        this.tag ? (r = document.createElement(this.tag),
        e.appendChild(r)) : r = e,
        i && (this.replaceRegex && (i = i.replace(this.replaceRegex, this.replaceString)),
        this.apply(r, i, n)),
        this.attrs)
            for (var o in this.attrs)
                r.setAttribute(o, this.attrs[o]),
                n && n.forIE && "class" == o && (r.className = this.attrs[o]);
        return this
    },
    apply: function(e, t, n) {
        var i = "" + t
          , r = [];
        for (this.fallback.apply || (this.fallback = new this.constructor(this.fallback)); ; ) {
            for (var o = !1, a = !1, s = 0; s < this.children.length && (void 0 === r[s] && (this.children[s].match || (this.children[s] = new this.constructor(this.children[s])),
            r[s] = this.children[s].match(i, n)),
            !r[s] || o && !(o.index > r[s].index) || (a = this.children[s],
            0 != (o = r[s]).index)); s++)
                ;
            var l = o ? o.index : i.length;
            if (0 < l && this.fallback.apply(e, i.substring(0, l), n),
            !o)
                break;
            (a = a.build ? a : new this.constructor(a)).build(e, o, n);
            for (var u = o.index + o[0].length, i = i.substring(u), s = 0; s < this.children.length; s++)
                r[s] && (r[s].index >= u ? r[s].index -= u : r[s] = void 0)
        }
        return this
    },
    fallback: {
        apply: function(e, t, n) {
            n && n.forIE && (t = t.replace(/\n/g, " \r")),
            e.appendChild(document.createTextNode(t))
        }
    }
},
Parse.Simple.Base.Rule.prototype.constructor = Parse.Simple.Base.Rule,
Parse.Simple.Creole = function(e) {
    function a(e, t) {
        return t instanceof Function ? t(e) : (void 0 === (t = t instanceof Array ? t : [t])[1] && (t[1] = ""),
        t[0] + e + t[1])
    }
    var t = {
        link: "[^\\]|~\\n]*(?:(?:\\](?!\\])|~.)[^\\]|~\\n]*)*",
        linkText: "[^\\]~\\n]*(?:(?:\\](?!\\])|~.)[^\\]~\\n]*)*",
        uriPrefix: "\\b(?:(?:https?|ftp)://|mailto:)"
    }
      , s = (t.uri = t.uriPrefix + t.link,
    t.rawUri = t.uriPrefix + "\\S*[^\\s!\"',.:;?]",
    t.interwikiPrefix = "[\\w.]+:",
    t.interwikiLink = t.interwikiPrefix + t.link,
    t.img = "\\{\\{((?!\\{)[^|}\\n]*(?:}(?!})[^|}\\n]*)*)" + (e && e.strict ? "" : "(?:") + "\\|([^}~\\n]*((}(?!})|~.)[^}~\\n]*)*)" + (e && e.strict ? "" : ")?") + "}}",
    {
        hr: {
            tag: "hr",
            regex: /(^|\n)\s*----\s*(\n|$)/
        },
        br: {
            tag: "br",
            regex: /\\\\/
        },
        preBlock: {
            tag: "pre",
            capture: 2,
            regex: /(^|\n)\{\{\{\n((.*\n)*?)\}\}\}(\n|$)/,
            replaceRegex: /^ ([ \t]*\}\}\})/gm,
            replaceString: "$1"
        },
        tt: {
            tag: "tt",
            regex: /\{\{\{(.*?\}\}\}+)/,
            capture: 1,
            replaceRegex: /\}\}\}$/,
            replaceString: ""
        },
        ulist: {
            tag: "ul",
            capture: 0,
            regex: /(^|\n)([ \t]*\*[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/
        },
        olist: {
            tag: "ol",
            capture: 0,
            regex: /(^|\n)([ \t]*#[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/
        },
        li: {
            tag: "li",
            capture: 0,
            regex: /[ \t]*([*#]).+(\n[ \t]*[^*#\s].*)*(\n[ \t]*\1[*#].+)*/,
            replaceRegex: /(^|\n)[ \t]*[*#]/g,
            replaceString: "$1"
        },
        table: {
            tag: "table",
            capture: 0,
            regex: /(^|\n)(\|.*?[ \t]*(\n|$))+/
        },
        tr: {
            tag: "tr",
            capture: 2,
            regex: /(^|\n)(\|.*?)\|?[ \t]*(\n|$)/
        },
        th: {
            tag: "th",
            regex: /\|+=([^|]*)/,
            capture: 1
        },
        td: {
            tag: "td",
            capture: 1,
            regex: "\\|+([^|~\\[{]*((~(.|(?=\\n)|$)|\\[\\[" + t.link + "(\\|" + t.linkText + ")?\\]\\]" + (e && e.strict ? "" : "|" + t.img) + "|[\\[{])[^|~]*)*)"
        },
        singleLine: {
            regex: /.+/,
            capture: 0
        },
        paragraph: {
            tag: "p",
            capture: 0,
            regex: /(^|\n)([ \t]*\S.*(\n|$))+/
        },
        text: {
            capture: 0,
            regex: /(^|\n)([ \t]*[^\s].*(\n|$))+/
        },
        strong: {
            tag: "strong",
            capture: 1,
            regex: /\*\*([^*~]*((\*(?!\*)|~(.|(?=\n)|$))[^*~]*)*)(\*\*|\n|$)/
        },
        em: {
            tag: "em",
            capture: 1,
            regex: "\\/\\/(((?!" + t.uriPrefix + ")[^\\/~])*((" + t.rawUri + "|\\/(?!\\/)|~(.|(?=\\n)|$))((?!" + t.uriPrefix + ")[^\\/~])*)*)(\\/\\/|\\n|$)"
        },
        img: {
            regex: t.img,
            build: function(e, t, n) {
                var i = document.createElement("img");
                i.src = t[1],
                i.alt = void 0 === t[2] ? n && n.defaultImageText ? n.defaultImageText : "" : t[2].replace(/~(.)/g, "$1"),
                e.appendChild(i)
            }
        },
        namedUri: {
            regex: "\\[\\[(" + t.uri + ")\\|(" + t.linkText + ")\\]\\]",
            build: function(e, t, n) {
                var i = document.createElement("a");
                i.href = t[1],
                n && n.isPlainUri ? i.appendChild(document.createTextNode(t[2])) : this.apply(i, t[2], n),
                e.appendChild(i)
            }
        },
        namedLink: {
            regex: "\\[\\[(" + t.link + ")\\|(" + t.linkText + ")\\]\\]",
            build: function(e, t, n) {
                var i = document.createElement("a");
                i.href = n && n.linkFormat ? a(t[1].replace(/~(.)/g, "$1"), n.linkFormat) : t[1].replace(/~(.)/g, "$1"),
                this.apply(i, t[2], n),
                e.appendChild(i)
            }
        },
        unnamedUri: {
            regex: "\\[\\[(" + t.uri + ")\\]\\]",
            build: "dummy"
        },
        unnamedLink: {
            regex: "\\[\\[(" + t.link + ")\\]\\]",
            build: "dummy"
        },
        unnamedInterwikiLink: {
            regex: "\\[\\[(" + t.interwikiLink + ")\\]\\]",
            build: "dummy"
        },
        rawUri: {
            regex: "(" + t.rawUri + ")",
            build: "dummy"
        },
        escapedSequence: {
            regex: "~(" + t.rawUri + "|.)",
            capture: 1,
            tag: "span",
            attrs: {
                class: "escaped"
            }
        },
        escapedSymbol: {
            regex: /~(.)/,
            capture: 1,
            tag: "span",
            attrs: {
                class: "escaped"
            }
        }
    });
    s.unnamedUri.build = s.rawUri.build = function(e, t, n) {
        (n = n || {}).isPlainUri = !0,
        s.namedUri.build.call(this, e, Array(t[0], t[1], t[1]), n)
    }
    ,
    s.unnamedLink.build = function(e, t, n) {
        s.namedLink.build.call(this, e, Array(t[0], t[1], t[1]), n)
    }
    ,
    s.namedInterwikiLink = {
        regex: "\\[\\[(" + t.interwikiLink + ")\\|(" + t.linkText + ")\\]\\]",
        build: function(e, t, n) {
            var i, r, o = document.createElement("a");
            if (n && n.interwiki && (i = t[1].match(/(.*?):(.*)/),
            r = n.interwiki[i[1]]),
            void 0 === r)
                return s.namedLink.apply || (s.namedLink = new this.constructor(s.namedLink)),
                s.namedLink.build.call(s.namedLink, e, t, n);
            o.href = a(i[2].replace(/~(.)/g, "$1"), r),
            this.apply(o, t[2], n),
            e.appendChild(o)
        }
    },
    s.unnamedInterwikiLink.build = function(e, t, n) {
        s.namedInterwikiLink.build.call(this, e, Array(t[0], t[1], t[1]), n)
    }
    ,
    s.namedUri.children = s.unnamedUri.children = s.rawUri.children = s.namedLink.children = s.unnamedLink.children = s.namedInterwikiLink.children = s.unnamedInterwikiLink.children = [s.escapedSymbol, s.img];
    for (var n = 1; n <= 6; n++)
        s["h" + n] = {
            tag: "h" + n,
            capture: 2,
            regex: "(^|\\n)[ \\t]*={" + n + "}[ \\t]([^~]*?(~(.|(?=\\n)|$))*)[ \\t]*=*\\s*(\\n|$)"
        };
    s.ulist.children = s.olist.children = [s.li],
    s.li.children = [s.ulist, s.olist],
    s.li.fallback = s.text,
    s.table.children = [s.tr],
    s.tr.children = [s.th, s.td],
    s.td.children = [s.singleLine],
    s.th.children = [s.singleLine],
    s.h1.children = s.h2.children = s.h3.children = s.h4.children = s.h5.children = s.h6.children = s.singleLine.children = s.paragraph.children = s.text.children = s.strong.children = s.em.children = [s.escapedSequence, s.strong, s.em, s.br, s.rawUri, s.namedUri, s.namedInterwikiLink, s.namedLink, s.unnamedUri, s.unnamedInterwikiLink, s.unnamedLink, s.tt, s.img],
    s.root = {
        children: [s.h1, s.h2, s.h3, s.h4, s.h5, s.h6, s.hr, s.ulist, s.olist, s.preBlock, s.table],
        fallback: {
            children: [s.paragraph]
        }
    },
    Parse.Simple.Base.call(this, s, e)
}
,
Parse.Simple.Creole.prototype = new Parse.Simple.Base,
Parse.Simple.Creole.prototype.constructor = Parse.Simple.Creole,
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return n = [function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
          , a = u(n(1))
          , s = u(n(3))
          , l = u(n(4));
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n = function() {
            function i(e, t) {
                var n;
                if (this instanceof i)
                    return (n = function(e, t) {
                        if (e)
                            return !t || "object" != typeof t && "function" != typeof t ? e : t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this))).resolveOptions(t),
                    n.listenClick(e),
                    n;
                throw new TypeError("Cannot call a class as a function")
            }
            var e = i
              , t = s.default;
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            return e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t),
            o(i, [{
                key: "resolveOptions",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                    this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                    this.text = "function" == typeof e.text ? e.text : this.defaultText,
                    this.container = "object" === r(e.container) ? e.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(e) {
                    var t = this;
                    this.listener = (0,
                    l.default)(e, "click", function(e) {
                        return t.onClick(e)
                    })
                }
            }, {
                key: "onClick",
                value: function(e) {
                    e = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new a.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(e) {
                    return c("action", e)
                }
            }, {
                key: "defaultTarget",
                value: function(e) {
                    e = c("target", e);
                    if (e)
                        return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function(e) {
                    return c("text", e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                      , e = "string" == typeof e ? [e] : e
                      , t = !!document.queryCommandSupported;
                    return e.forEach(function(e) {
                        t = t && !!document.queryCommandSupported(e)
                    }),
                    t
                }
            }]),
            i
        }();
        function c(e, t) {
            e = "data-clipboard-" + e;
            if (t.hasAttribute(e))
                return t.getAttribute(e)
        }
        e.exports = n
    }
    , function(e, t, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function(e, t, n) {
            return t && a(e.prototype, t),
            n && a(e, n),
            e
        }
          , n = n(2)
          , o = n && n.__esModule ? n : {
            default: n
        };
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        r(s, [{
            key: "resolveOptions",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                this.action = e.action,
                this.container = e.container,
                this.emitter = e.emitter,
                this.target = e.target,
                this.text = e.text,
                this.trigger = e.trigger,
                this.selectedText = ""
            }
        }, {
            key: "initSelection",
            value: function() {
                this.text ? this.selectFake() : this.target && this.selectTarget()
            }
        }, {
            key: "selectFake",
            value: function() {
                var e = this
                  , t = "rtl" == document.documentElement.getAttribute("dir")
                  , t = (this.removeFake(),
                this.fakeHandlerCallback = function() {
                    return e.removeFake()
                }
                ,
                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                this.fakeElem = document.createElement("textarea"),
                this.fakeElem.style.fontSize = "12pt",
                this.fakeElem.style.border = "0",
                this.fakeElem.style.padding = "0",
                this.fakeElem.style.margin = "0",
                this.fakeElem.style.position = "absolute",
                this.fakeElem.style[t ? "right" : "left"] = "-9999px",
                window.pageYOffset || document.documentElement.scrollTop);
                this.fakeElem.style.top = t + "px",
                this.fakeElem.setAttribute("readonly", ""),
                this.fakeElem.value = this.text,
                this.container.appendChild(this.fakeElem),
                this.selectedText = (0,
                o.default)(this.fakeElem),
                this.copyText()
            }
        }, {
            key: "removeFake",
            value: function() {
                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                this.fakeHandler = null,
                this.fakeHandlerCallback = null),
                this.fakeElem && (this.container.removeChild(this.fakeElem),
                this.fakeElem = null)
            }
        }, {
            key: "selectTarget",
            value: function() {
                this.selectedText = (0,
                o.default)(this.target),
                this.copyText()
            }
        }, {
            key: "copyText",
            value: function() {
                var t = void 0;
                try {
                    t = document.execCommand(this.action)
                } catch (e) {
                    t = !1
                }
                this.handleResult(t)
            }
        }, {
            key: "handleResult",
            value: function(e) {
                this.emitter.emit(e ? "success" : "error", {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                })
            }
        }, {
            key: "clearSelection",
            value: function() {
                this.trigger && this.trigger.focus(),
                window.getSelection().removeAllRanges()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeFake()
            }
        }, {
            key: "action",
            set: function() {
                if (this._action = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy",
                "copy" !== this._action && "cut" !== this._action)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
            },
            get: function() {
                return this._action
            }
        }, {
            key: "target",
            set: function(e) {
                if (void 0 !== e) {
                    if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === this.action && e.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    this._target = e
                }
            },
            get: function() {
                return this._target
            }
        }]);
        n = s;
        function s(e) {
            if (!(this instanceof s))
                throw new TypeError("Cannot call a class as a function");
            this.resolveOptions(e),
            this.initSelection()
        }
        e.exports = n
    }
    , function(e, t) {
        e.exports = function(e) {
            var t, n, e = "SELECT" === e.nodeName ? (e.focus(),
            e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""),
            e.select(),
            e.setSelectionRange(0, e.value.length),
            t || e.removeAttribute("readonly"),
            e.value) : (e.hasAttribute("contenteditable") && e.focus(),
            t = window.getSelection(),
            (n = document.createRange()).selectNodeContents(e),
            t.removeAllRanges(),
            t.addRange(n),
            t.toString());
            return e
        }
    }
    , function(e, t) {
        function n() {}
        n.prototype = {
            on: function(e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }),
                this
            },
            once: function(e, t, n) {
                var i = this;
                function r() {
                    i.off(e, r),
                    t.apply(n, arguments)
                }
                return r._ = t,
                this.on(e, r, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++)
                    n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {})
                  , i = n[e]
                  , r = [];
                if (i && t)
                    for (var o = 0, a = i.length; o < a; o++)
                        i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                return r.length ? n[e] = r : delete n[e],
                this
            }
        },
        e.exports = n
    }
    , function(e, t, n) {
        var u = n(5)
          , c = n(6);
        e.exports = function(e, t, n) {
            if (!e && !t && !n)
                throw new Error("Missing required arguments");
            if (!u.string(t))
                throw new TypeError("Second argument must be a String");
            if (!u.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (u.node(e))
                return (a = e).addEventListener(s = t, l = n),
                {
                    destroy: function() {
                        a.removeEventListener(s, l)
                    }
                };
            if (u.nodeList(e))
                return i = e,
                r = t,
                o = n,
                Array.prototype.forEach.call(i, function(e) {
                    e.addEventListener(r, o)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(i, function(e) {
                            e.removeEventListener(r, o)
                        })
                    }
                };
            if (u.string(e))
                return c(document.body, e, t, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var i, r, o, a, s, l
        }
    }
    , function(e, n) {
        n.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }
        ,
        n.nodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length"in e && (0 === e.length || n.node(e[0]))
        }
        ,
        n.string = function(e) {
            return "string" == typeof e || e instanceof String
        }
        ,
        n.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }
    , function(e, t, n) {
        var a = n(7);
        function o(e, t, n, i, r) {
            var o = function(t, n, e, i) {
                return function(e) {
                    e.delegateTarget = a(e.target, n),
                    e.delegateTarget && i.call(t, e)
                }
            }
            .apply(this, arguments);
            return e.addEventListener(n, o, r),
            {
                destroy: function() {
                    e.removeEventListener(n, o, r)
                }
            }
        }
        e.exports = function(e, t, n, i, r) {
            return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
            Array.prototype.map.call(e, function(e) {
                return o(e, t, n, i, r)
            }))
        }
    }
    , function(e, t) {
        var n;
        "undefined" == typeof Element || Element.prototype.matches || ((n = Element.prototype).matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector),
        e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType; ) {
                if ("function" == typeof e.matches && e.matches(t))
                    return e;
                e = e.parentNode
            }
        }
    }
    ],
    i = {},
    r.m = n,
    r.c = i,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                r.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 0);
    function r(e) {
        var t;
        return (i[e] || (t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        n[e].call(t.exports, t, t.exports, r),
        t.l = !0,
        t)).exports
    }
    var n, i
}),
!function(h) {
    function e() {
        this.regional = [],
        this.regional[""] = {
            labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
            labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
            compactLabels: ["y", "m", "w", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        },
        this._defaults = {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        h.extend(this._defaults, this.regional[""]),
        this._serverSyncs = [];
        var n = "function" == typeof Date.now ? Date.now : function() {
            return (new Date).getTime()
        }
          , i = window.performance && "function" == typeof window.performance.now;
        var r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null
          , o = 0;
        !r || h.noRequestAnimationFrame ? (h.noRequestAnimationFrame = null,
        setInterval(function() {
            g._updateTargets()
        }, 980)) : (o = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(),
        r(function e(t) {
            t = t < 1e12 ? i ? performance.now() + performance.timing.navigationStart : n() : t || n();
            1e3 <= t - o && (g._updateTargets(),
            o = t),
            r(e)
        }))
    }
    h.extend(e.prototype, {
        markerClassName: "hasCountdown",
        propertyName: "countdown",
        _rtlClass: "countdown_rtl",
        _sectionClass: "countdown_section",
        _amountClass: "countdown_amount",
        _rowClass: "countdown_row",
        _holdingClass: "countdown_holding",
        _showClass: "countdown_show",
        _descrClass: "countdown_descr",
        _timerTargets: [],
        setDefaults: function(e) {
            this._resetExtraLabels(this._defaults, e),
            h.extend(this._defaults, e || {})
        },
        UTCDate: function(e, t, n, i, r, o, a, s) {
            "object" == typeof t && t.constructor == Date && (s = t.getMilliseconds(),
            a = t.getSeconds(),
            o = t.getMinutes(),
            r = t.getHours(),
            i = t.getDate(),
            n = t.getMonth(),
            t = t.getFullYear());
            var l = new Date;
            return l.setUTCFullYear(t),
            l.setUTCDate(1),
            l.setUTCMonth(n || 0),
            l.setUTCDate(i || 1),
            l.setUTCHours(r || 0),
            l.setUTCMinutes((o || 0) - (Math.abs(e) < 30 ? 60 * e : e)),
            l.setUTCSeconds(a || 0),
            l.setUTCMilliseconds(s || 0),
            l
        },
        periodsToSeconds: function(e) {
            return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6]
        },
        _attachPlugin: function(e, t) {
            var n;
            (e = h(e)).hasClass(this.markerClassName) || (n = {
                options: h.extend({}, this._defaults),
                _periods: [0, 0, 0, 0, 0, 0, 0]
            },
            e.addClass(this.markerClassName).data(this.propertyName, n),
            this._optionPlugin(e, t))
        },
        _addTarget: function(e) {
            this._hasTarget(e) || this._timerTargets.push(e)
        },
        _hasTarget: function(e) {
            return -1 < h.inArray(e, this._timerTargets)
        },
        _removeTarget: function(t) {
            this._timerTargets = h.map(this._timerTargets, function(e) {
                return e == t ? null : e
            })
        },
        _updateTargets: function() {
            for (var e = this._timerTargets.length - 1; 0 <= e; e--)
                this._updateCountdown(this._timerTargets[e])
        },
        _optionPlugin: function(e, t, n) {
            var i, r = (e = h(e)).data(this.propertyName);
            if (!t || "string" == typeof t && null == n)
                return i = t,
                (t = (r || {}).options) && i ? t[i] : t;
            e.hasClass(this.markerClassName) && ("string" == typeof (t = t || {}) && (i = t,
            (t = {})[i] = n),
            t.layout && (t.layout = t.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
            this._resetExtraLabels(r.options, t),
            i = r.options.timezone != t.timezone,
            h.extend(r.options, t),
            this._adjustSettings(e, r, null != t.until || null != t.since || i),
            n = new Date,
            (r._since && r._since < n || r._until && r._until > n) && this._addTarget(e[0]),
            this._updateCountdown(e, r))
        },
        _updateCountdown: function(e, t) {
            var n, i = h(e);
            (t = t || i.data(this.propertyName)) && (i.html(this._generateHTML(t)).toggleClass(this._rtlClass, t.options.isRTL),
            h.isFunction(t.options.onTick) && (n = "lap" != t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date),
            1 != t.options.tickInterval && this.periodsToSeconds(n) % t.options.tickInterval != 0 || t.options.onTick.apply(e, [n])),
            "pause" != t._hold && (t._since ? t._now.getTime() < t._since.getTime() : t._now.getTime() >= t._until.getTime()) && !t._expiring ? (t._expiring = !0,
            (this._hasTarget(e) || t.options.alwaysExpire) && (this._removeTarget(e),
            h.isFunction(t.options.onExpiry) && t.options.onExpiry.apply(e, []),
            t.options.expiryText && (n = t.options.layout,
            t.options.layout = t.options.expiryText,
            this._updateCountdown(e, t),
            t.options.layout = n),
            t.options.expiryUrl) && (window.location = t.options.expiryUrl),
            t._expiring = !1) : "pause" == t._hold && this._removeTarget(e),
            i.data(this.propertyName, t))
        },
        _resetExtraLabels: function(e, t) {
            var n = !1;
            for (i in t)
                if ("whichLabels" != i && i.match(/[Ll]abels/)) {
                    n = !0;
                    break
                }
            if (n)
                for (var i in e)
                    i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = null)
        },
        _adjustSettings: function(e, t, n) {
            for (var i, r = 0, o = null, a = 0; a < this._serverSyncs.length; a++)
                if (this._serverSyncs[a][0] == t.options.serverSync) {
                    o = this._serverSyncs[a][1];
                    break
                }
            null != o ? (r = t.options.serverSync ? o : 0,
            i = new Date) : (e = h.isFunction(t.options.serverSync) ? t.options.serverSync.apply(e, []) : null,
            i = new Date,
            r = e ? i.getTime() - e.getTime() : 0,
            this._serverSyncs.push([t.options.serverSync, r]));
            e = null == (e = t.options.timezone) ? -i.getTimezoneOffset() : e;
            (n || !n && null == t._until && null == t._since) && (t._since = t.options.since,
            null != t._since && (t._since = this.UTCDate(e, this._determineTime(t._since, null)),
            t._since) && r && t._since.setMilliseconds(t._since.getMilliseconds() + r),
            t._until = this.UTCDate(e, this._determineTime(t.options.until, i)),
            r) && t._until.setMilliseconds(t._until.getMilliseconds() + r),
            t._show = this._determineShow(t)
        },
        _destroyPlugin: function(e) {
            (e = h(e)).hasClass(this.markerClassName) && (this._removeTarget(e[0]),
            e.removeClass(this.markerClassName).empty().removeData(this.propertyName))
        },
        _pausePlugin: function(e) {
            this._hold(e, "pause")
        },
        _lapPlugin: function(e) {
            this._hold(e, "lap")
        },
        _resumePlugin: function(e) {
            this._hold(e, null)
        },
        _hold: function(e, t) {
            var n, i = h.data(e, this.propertyName);
            i && ("pause" != i._hold || t || (i._periods = i._savePeriods,
            n = i._since ? "-" : "+",
            i[i._since ? "_since" : "_until"] = this._determineTime(n + i._periods[0] + "y" + n + i._periods[1] + "o" + n + i._periods[2] + "w" + n + i._periods[3] + "d" + n + i._periods[4] + "h" + n + i._periods[5] + "m" + n + i._periods[6] + "s"),
            this._addTarget(e)),
            i._hold = t,
            i._savePeriods = "pause" == t ? i._periods : null,
            h.data(e, this.propertyName, i),
            this._updateCountdown(e, i))
        },
        _getTimesPlugin: function(e) {
            e = h.data(e, this.propertyName);
            return e ? "pause" == e._hold ? e._savePeriods : e._hold ? this._calculatePeriods(e, e._show, e.options.significant, new Date) : e._periods : null
        },
        _determineTime: function(e, t) {
            var n, t = null == e ? t : "string" == typeof e ? function(e) {
                e = e.toLowerCase();
                for (var t = new Date, n = t.getFullYear(), i = t.getMonth(), r = t.getDate(), o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, u = l.exec(e); u; ) {
                    switch (u[2] || "s") {
                    case "s":
                        s += parseInt(u[1], 10);
                        break;
                    case "m":
                        a += parseInt(u[1], 10);
                        break;
                    case "h":
                        o += parseInt(u[1], 10);
                        break;
                    case "d":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                        r += 7 * parseInt(u[1], 10);
                        break;
                    case "o":
                        i += parseInt(u[1], 10),
                        r = Math.min(r, g._getDaysInMonth(n, i));
                        break;
                    case "y":
                        n += parseInt(u[1], 10),
                        r = Math.min(r, g._getDaysInMonth(n, i))
                    }
                    u = l.exec(e)
                }
                return new Date(n,i,r,o,a,s,0)
            }(e) : "number" == typeof e ? (t = e,
            (n = new Date).setTime(n.getTime() + 1e3 * t),
            n) : e;
            return t && t.setMilliseconds(0),
            t
        },
        _getDaysInMonth: function(e, t) {
            return 32 - new Date(e,t,32).getDate()
        },
        _normalLabels: function(e) {
            return e
        },
        _generateHTML: function(n) {
            for (var i = this, e = (n._periods = n._hold ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date),
            !1), t = 0, r = n.options.significant, o = h.extend({}, n._show), a = 0; a <= 6; a++)
                e |= "?" == n._show[a] && 0 < n._periods[a],
                o[a] = "?" != n._show[a] || e ? n._show[a] : null,
                t += o[a] ? 1 : 0,
                r -= 0 < n._periods[a] ? 1 : 0;
            for (var s = [!1, !1, !1, !1, !1, !1, !1], a = 6; 0 <= a; a--)
                n._show[a] && (n._periods[a] ? s[a] = !0 : (s[a] = 0 < r,
                r--));
            function l(e) {
                var t = n.options["compactLabels" + p(n._periods[e])];
                return o[e] ? i._translateDigits(n, n._periods[e]) + (t || c)[e] + " " : ""
            }
            function u(e) {
                var t = n.options["labels" + p(n._periods[e])];
                return !n.options.significant && o[e] || n.options.significant && s[e] ? '<span class="' + g._sectionClass + '"><span class="' + g._amountClass + '">' + i._translateDigits(n, n._periods[e]) + "</span><br/>" + (t || c)[e] + "</span>" : ""
            }
            var c = n.options.compact ? n.options.compactLabels : n.options.labels
              , p = n.options.whichLabels || this._normalLabels;
            return n.options.layout ? this._buildLayout(n, o, n.options.layout, n.options.compact, n.options.significant, s) : (n.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (n._hold ? " " + this._holdingClass : "") + '">' + l(0) + l(1) + l(2) + l(3) + (o[4] ? this._minDigits(n, n._periods[4], 2) : "") + (o[5] ? (o[4] ? n.options.timeSeparator : "") + this._minDigits(n, n._periods[5], 2) : "") + (o[6] ? (o[4] || o[5] ? n.options.timeSeparator : "") + this._minDigits(n, n._periods[6], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (n.options.significant || t) + (n._hold ? " " + this._holdingClass : "") + '">' + u(0) + u(1) + u(2) + u(3) + u(4) + u(5) + u(6)) + "</span>" + (n.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + n.options.description + "</span>" : "")
        },
        _buildLayout: function(n, e, t, i, r, o) {
            function a(e) {
                return (n.options[(i ? "compactLabels" : "labels") + u(n._periods[e])] || l)[e]
            }
            function s(e, t) {
                return n.options.digits[Math.floor(e / t) % 10]
            }
            for (var l = n.options[i ? "compactLabels" : "labels"], u = n.options.whichLabels || this._normalLabels, c = {
                desc: n.options.description,
                sep: n.options.timeSeparator,
                yl: a(0),
                yn: this._minDigits(n, n._periods[0], 1),
                ynn: this._minDigits(n, n._periods[0], 2),
                ynnn: this._minDigits(n, n._periods[0], 3),
                y1: s(n._periods[0], 1),
                y10: s(n._periods[0], 10),
                y100: s(n._periods[0], 100),
                y1000: s(n._periods[0], 1e3),
                ol: a(1),
                on: this._minDigits(n, n._periods[1], 1),
                onn: this._minDigits(n, n._periods[1], 2),
                onnn: this._minDigits(n, n._periods[1], 3),
                o1: s(n._periods[1], 1),
                o10: s(n._periods[1], 10),
                o100: s(n._periods[1], 100),
                o1000: s(n._periods[1], 1e3),
                wl: a(2),
                wn: this._minDigits(n, n._periods[2], 1),
                wnn: this._minDigits(n, n._periods[2], 2),
                wnnn: this._minDigits(n, n._periods[2], 3),
                w1: s(n._periods[2], 1),
                w10: s(n._periods[2], 10),
                w100: s(n._periods[2], 100),
                w1000: s(n._periods[2], 1e3),
                dl: a(3),
                dn: this._minDigits(n, n._periods[3], 1),
                dnn: this._minDigits(n, n._periods[3], 2),
                dnnn: this._minDigits(n, n._periods[3], 3),
                d1: s(n._periods[3], 1),
                d10: s(n._periods[3], 10),
                d100: s(n._periods[3], 100),
                d1000: s(n._periods[3], 1e3),
                hl: a(4),
                hn: this._minDigits(n, n._periods[4], 1),
                hnn: this._minDigits(n, n._periods[4], 2),
                hnnn: this._minDigits(n, n._periods[4], 3),
                h1: s(n._periods[4], 1),
                h10: s(n._periods[4], 10),
                h100: s(n._periods[4], 100),
                h1000: s(n._periods[4], 1e3),
                ml: a(5),
                mn: this._minDigits(n, n._periods[5], 1),
                mnn: this._minDigits(n, n._periods[5], 2),
                mnnn: this._minDigits(n, n._periods[5], 3),
                m1: s(n._periods[5], 1),
                m10: s(n._periods[5], 10),
                m100: s(n._periods[5], 100),
                m1000: s(n._periods[5], 1e3),
                sl: a(6),
                sn: this._minDigits(n, n._periods[6], 1),
                snn: this._minDigits(n, n._periods[6], 2),
                snnn: this._minDigits(n, n._periods[6], 3),
                s1: s(n._periods[6], 1),
                s10: s(n._periods[6], 10),
                s100: s(n._periods[6], 100),
                s1000: s(n._periods[6], 1e3)
            }, p = t, f = 0; f <= 6; f++)
                var d = "yowdhms".charAt(f)
                  , d = new RegExp("\\{" + d + "<\\}([\\s\\S]*)\\{" + d + ">\\}","g")
                  , p = p.replace(d, !r && e[f] || r && o[f] ? "$1" : "");
            return h.each(c, function(e, t) {
                e = new RegExp("\\{" + e + "\\}","g");
                p = p.replace(e, t)
            }),
            p
        },
        _minDigits: function(e, t, n) {
            return (t = "" + t).length >= n ? this._translateDigits(e, t) : this._translateDigits(e, (t = "0000000000" + t).substr(t.length - n))
        },
        _translateDigits: function(t, e) {
            return ("" + e).replace(/[0-9]/g, function(e) {
                return t.options.digits[e]
            })
        },
        _determineShow: function(e) {
            var e = e.options.format
              , t = [];
            return t[0] = e.match("y") ? "?" : e.match("Y") ? "!" : null,
            t[1] = e.match("o") ? "?" : e.match("O") ? "!" : null,
            t[2] = e.match("w") ? "?" : e.match("W") ? "!" : null,
            t[3] = e.match("d") ? "?" : e.match("D") ? "!" : null,
            t[4] = e.match("h") ? "?" : e.match("H") ? "!" : null,
            t[5] = e.match("m") ? "?" : e.match("M") ? "!" : null,
            t[6] = e.match("s") ? "?" : e.match("S") ? "!" : null,
            t
        },
        _calculatePeriods: function(e, n, t, i) {
            e._now = i,
            e._now.setMilliseconds(0);
            function r(e, t) {
                u[e] = n[e] ? Math.floor(c / t) : 0,
                c -= u[e] * t
            }
            var o, a, s, l = new Date(e._now.getTime()), u = (e._since ? i.getTime() < e._since.getTime() ? e._now = i = l : i = e._since : (l.setTime(e._until.getTime()),
            i.getTime() > e._until.getTime() && (e._now = i = l)),
            [0, 0, 0, 0, 0, 0, 0]), c = ((n[0] || n[1]) && (o = g._getDaysInMonth(i.getFullYear(), i.getMonth()),
            s = g._getDaysInMonth(l.getFullYear(), l.getMonth()),
            s = l.getDate() == i.getDate() || l.getDate() >= Math.min(o, s) && i.getDate() >= Math.min(o, s),
            a = function(e) {
                return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds()
            }
            ,
            s = Math.max(0, 12 * (l.getFullYear() - i.getFullYear()) + l.getMonth() - i.getMonth() + (l.getDate() < i.getDate() && !s || s && a(l) < a(i) ? -1 : 0)),
            u[0] = n[0] ? Math.floor(s / 12) : 0,
            u[1] = n[1] ? s - 12 * u[0] : 0,
            a = (i = new Date(i.getTime())).getDate() == o,
            s = g._getDaysInMonth(i.getFullYear() + u[0], i.getMonth() + u[1]),
            i.getDate() > s && i.setDate(s),
            i.setFullYear(i.getFullYear() + u[0]),
            i.setMonth(i.getMonth() + u[1]),
            a) && i.setDate(s),
            Math.floor((l.getTime() - i.getTime()) / 1e3));
            if (r(2, 604800),
            r(3, 86400),
            r(4, 3600),
            r(5, 60),
            r(6, 1),
            0 < c && !e._since)
                for (var p = [1, 12, 4.3482, 7, 24, 60, 60], f = 6, d = 1, h = 6; 0 <= h; h--)
                    n[h] && (d <= u[f] && (u[f] = 0,
                    c = 1),
                    0 < c) && (u[h]++,
                    c = 0,
                    f = h,
                    d = 1),
                    d *= p[h];
            if (t)
                for (h = 0; h <= 6; h++)
                    t && u[h] ? t-- : t || (u[h] = 0);
            return u
        }
    });
    var r = ["getTimes"];
    h.fn.countdown = function(e) {
        var t, n, i = Array.prototype.slice.call(arguments, 1);
        return n = i,
        "option" == (t = e) && (0 == n.length || 1 == n.length && "string" == typeof n[0]) || -1 < h.inArray(t, r) ? g["_" + e + "Plugin"].apply(g, [this[0]].concat(i)) : this.each(function() {
            if ("string" == typeof e) {
                if (!g["_" + e + "Plugin"])
                    throw "Unknown command: " + e;
                g["_" + e + "Plugin"].apply(g, [this].concat(i))
            } else
                g._attachPlugin(this, e || {})
        })
    }
    ;
    var g = h.countdown = new e
}(jQuery),
!function(e) {
    e.countdown.regional["da-DK"] = {
        labels: ["År", "Måneder", "Uger", "Dage", "Timer", "Minutter", "Sekunder"],
        labels1: ["År", "Månad", "Uge", "Dag", "Time", "Minut", "Sekund"],
        compactLabels: ["Å", "M", "U", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["nl-NL"] = {
        labels: ["Jaren", "Maanden", "Weken", "Dagen", "Uren", "Minuten", "Seconden"],
        labels1: ["Jaar", "Maand", "Week", "Dag", "Uur", "Minuut", "Seconde"],
        compactLabels: ["j", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["de-DE"] = {
        labels: ["Jahre", "Monate", "Wochen", "Tage", "Stunden", "Minuten", "Sekunden"],
        labels1: ["Jahr", "Monat", "Woche", "Tag", "Stunde", "Minute", "Sekunde"],
        compactLabels: ["J", "M", "W", "T"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["en-GB"] = {
        labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
        labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels: ["Y", "M", "W", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["fr-FR"] = {
        labels: ["Années", "Mois", "Semaines", "Jours", "Heures", "Minutes", "Secondes"],
        labels1: ["Année", "Mois", "Semaine", "Jour", "Heure", "Minute", "Seconde"],
        compactLabels: ["a", "m", "s", "j"],
        whichLabels: function(e) {
            return 1 < e ? 0 : 1
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["fr-CA"] = {
        labels: ["Années", "Mois", "Semaines", "Jours", "Heures", "Minutes", "Secondes"],
        labels1: ["Année", "Mois", "Semaine", "Jour", "Heure", "Minute", "Seconde"],
        compactLabels: ["a", "m", "s", "j"],
        whichLabels: function(e) {
            return 1 < e ? 0 : 1
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["es-CL"] = {
        labels: ["Años", "Meses", "Semanas", "Días", "Horas", "Minutos", "Segundos"],
        labels1: ["Año", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["es-ES"] = {
        labels: ["Años", "Meses", "Semanas", "Días", "Horas", "Minutos", "Segundos"],
        labels1: ["Año", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["es-MX"] = {
        labels: ["Años", "Meses", "Semanas", "Días", "Horas", "Minutos", "Segundos"],
        labels1: ["Año", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["nb-NO"] = {
        labels: ["År", "Måneder", "Uker", "Dager", "Timer", "Minutter", "Sekunder"],
        labels1: ["År", "Måned", "Uke", "Dag", "Time", "Minutt", "Sekund"],
        compactLabels: ["Å", "M", "U", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["sv-SE"] = {
        labels: ["År", "Månader", "Veckor", "Dagar", "Timmar", "Minuter", "Sekunder"],
        labels1: ["År", "Månad", "Vecka", "Dag", "Timme", "Minut", "Sekund"],
        compactLabels: ["Å", "M", "V", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["ca-ES"] = {
        labels: ["Anys", "Mesos", "Setmanes", "Dies", "Hores", "Minuts", "Segons"],
        labels1: ["Any", "Mes", "Setmana", "Dia", "Hora", "Minut", "Segon"],
        compactLabels: ["a", "m", "s", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["zh-CN"] = {
        labels: ["年", "月", "周", "天", "小时", "分钟", "秒"],
        labels1: ["年", "月", "周", "天", "小时", "分钟", "秒"],
        compactLabels: ["年", "月", "周", "天"],
        compactLabels1: ["年", "月", "周", "天"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["zh-TW"] = {
        labels: ["年", "月", "週", "天", "小時", "分鐘", "秒"],
        labels1: ["年", "月", "週", "天", "小時", "分鐘", "秒"],
        compactLabels: ["年", "月", "週", "天"],
        compactLabels1: ["年", "月", "週", "天"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["zh-HK"] = {
        labels: ["年", "月", "週", "天", "小時", "分鐘", "秒"],
        labels1: ["年", "月", "週", "天", "小時", "分鐘", "秒"],
        compactLabels: ["年", "月", "週", "天"],
        compactLabels1: ["年", "月", "週", "天"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["pt-BR"] = {
        labels: ["Anos", "Meses", "Semanas", "Dias", "Horas", "Minutos", "Segundos"],
        labels1: ["Ano", "Mes", "Semana", "Dia", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["pt-PT"] = {
        labels: ["Anos", "Meses", "Semanas", "Dias", "Horas", "Minutos", "Segundos"],
        labels1: ["Ano", "Mes", "Semana", "Dia", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["th-TH"] = {
        labels: ["ปี", "เดือน", "สัปดาห์", "วัน", "ชั่วโมง", "นาที", "วินาที"],
        labels1: ["ปี", "เดือน", "สัปดาห์", "วัน", "ชั่วโมง", "นาที", "วินาที"],
        compactLabels: ["ป", "ด", "อ", "ว"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["tr-TR"] = {
        labels: ["Yıl", "Ay", "Haftalar", "Günler", "Saat", "Dakika", "Saniye"],
        labels1: ["Yıl", "Ay", "Hafta", "Gün", "Saat", "Dakika", "Saniye"],
        compactLabels: ["Y", "A", "H", "G"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["el-GR"] = {
        labels: ["Χρόνια", "Μήνες", "Εβδομάδες", "Μέρες", "Ώρες", "Λεπτά", "Δευτερόλεπτα"],
        labels1: ["Χρόνος", "Μήνας", "Εβδομάδα", "Ημέρα", "Ώρα", "Λεπτό", "Δευτερόλεπτο"],
        compactLabels: ["Χρ.", "Μην.", "Εβδ.", "Ημ."],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["he-IL"] = {
        labels: ["שנים", "חודשים", "שבועות", "ימים", "שעות", "דקות", "שניות"],
        labels1: ["שנה", "חודש", "שבוע", "יום", "שעה", "דקה", "שנייה"],
        compactLabels: ["שנ", "ח", "שב", "י"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["ru-RU"] = {
        labels: ["Лет", "Месяцев", "Недель", "Дней", "Часов", "Минут", "Секунд"],
        labels1: ["Год", "Месяц", "Неделя", "День", "Час", "Минута", "Секунда"],
        compactLabels: ["л", "м", "н", "д"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["nl-NL"] = {
        labels: ["Jaren", "Maanden", "Weken", "Dagen", "Uren", "Minuten", "Seconden"],
        labels1: ["Jaar", "Maand", "Week", "Dag", "Uur", "Minuut", "Seconde"],
        compactLabels: ["j", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["is-IS"] = {
        labels: ["Ár", "Mánuðir", "Vikur", "Dagar", "Klukkustundir", "Mínútur", "Sekúndur"],
        labels1: ["Ár", "Mánuður", "Vika", "Dagur", "Klukkustund", "Mínúta", "Sekúnda"],
        compactLabels: ["ár.", "mán.", "vik.", "dag.", "klst.", "mín.", "sek."],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["it-IT"] = {
        labels: ["Anni", "Mesi", "Settimane", "Giorni", "Ore", "Minuti", "Secondi"],
        labels1: ["Anno", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["ka-GE"] = {
        labels: ["წელი", "თვე", "კვირა", "დღე", "საათი", "წუთი", "წამი"],
        labels1: ["წელი", "თვე", "კვირა", "დღე", "საათი", "წუთი", "წამი"],
        compactLabels: ["Y", "M", "W", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["fo-FO"] = {
        labels: ["Ár", "Mánaðir", "Vikur", "Dagar", "Tímar", "Minuttir", "Sekund"],
        labels1: ["Ár", "Mánaður", "Vika", "Dagur", "Tími", "Minuttur", "Sekund"],
        compactLabels: ["Á", "M", "V", "D"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["fi-FI"] = {
        labels: ["vuotta", "kuukautta", "viikkoa", "päivää", "tuntia", "minuuttia", "sekuntia"],
        labels1: ["vuosi", "kuukausi", "viikko", "päivä", "tunti", "minuutti", "sekunti"],
        compactLabels: ["v", "kk", "vk", "pv"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["pl-PL"] = {
        labels: ["lat", "miesięcy", "tygodni", "dni", "godzin", "minut", "sekund"],
        labels1: ["rok", "miesiąc", "tydzień", "dzień", "godzina", "minuta", "sekunda"],
        compactLabels: ["l", "m", "t", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["ja-JP"] = {
        labels: ["年", "月", "週", "日", "時間", "分", "秒"],
        labels1: ["年", "月", "週", "日", "時間", "分", "秒"],
        compactLabels: ["年", "月", "週", "日"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["ro-RO"] = {
        labels: ["Ani", "Luni", "Saptamani", "Zile", "Ore", "Minute", "Secunde"],
        labels1: ["An", "Luna", "Saptamana", "Ziua", "Ora", "Minutul", "Secunda"],
        compactLabels: ["A", "L", "S", "Z"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["cy-GB"] = {
        labels: ["Blynyddoedd", "Mis", "Wythnosau", "Diwrnodau", "Oriau", "Munudau", "Eiliadau"],
        labels1: ["Blwyddyn", "Mis", "Wythnos", "Diwrnod", "Awr", "Munud", "Eiliad"],
        compactLabels: ["b", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["ar-QA"] = {
        labels: ["سنوات", "أشهر", "أسابيع", "أيام", "ساعات", "دقيقة", "ثانية"],
        labels1: ["السنة", "الشهر", "الأسبوع", "اليوم", "ساعة", "دقيقة", "الثانية"],
        compactLabels: ["س", "ش", "أ", "ي"],
        whichLabels: null,
        digits: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["ar-BH"] = {
        labels: ["سنوات", "أشهر", "أسابيع", "أيام", "ساعات", "دقائق", "ثواني"],
        labels1: ["سنة", "شهر", "أسبوع", "يوم", "ساعة", "دقيقة", "ثانية"],
        compactLabels: ["س", "ش", "أ", "ي"],
        whichLabels: null,
        digits: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["ar-MA"] = {
        labels: ["سنوات", "أشهر", "أسابيع", "أيام", "ساعات", "دقائق", "ثواني"],
        labels1: ["سنة", "شهر", "أسبوع", "يوم", "ساعة", "دقيقة", "ثانية"],
        compactLabels: ["س", "ش", "أ", "ي"],
        whichLabels: null,
        digits: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["ar-SA"] = {
        labels: ["سنوات", "أشهر", "أسابيع", "أيام", "ساعات", "دقائق", "ثواني"],
        labels1: ["سنة", "شهر", "أسبوع", "يوم", "ساعة", "دقيقة", "ثانية"],
        compactLabels: ["س", "ش", "أ", "ي"],
        whichLabels: null,
        digits: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        timeSeparator: ":",
        isRTL: !0
    },
    e.countdown.regional["ko-KR"] = {
        labels: ["년", "월", "주", "일", "시", "분", "초"],
        labels1: ["년", "월", "주", "일", "시", "분", "초"],
        compactLabels: ["년", "월", "주", "일"],
        compactLabels1: ["년", "월", "주", "일"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["vi-VN"] = {
        labels: ["Năm", "Tháng", "Tuần", "Ngày", "Giờ", "Phút", "Giây"],
        labels1: ["Năm", "Tháng", "Tuần", "Ngày", "Giờ", "Phút", "Giây"],
        compactLabels: ["năm", "th", "tu", "ng"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["vi-VN"] = {
        labels: ["Năm", "Tháng", "Tuần", "Ngày", "Giờ", "Phút", "Giây"],
        labels1: ["Năm", "Tháng", "Tuần", "Ngày", "Giờ", "Phút", "Giây"],
        compactLabels: ["năm", "th", "tu", "ng"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["hu-HU"] = {
        labels: ["Év", "Hónap", "Hét", "Nap", "Óra", "Perc", "Másodperc"],
        labels1: ["Év", "Hónap", "Hét", "Nap", "Óra", "Perc", "Másodperc"],
        compactLabels: ["É", "H", "Hé", "N"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["sr-Latn-RS"] = {
        labels: ["Godina", "Meseci", "Nedelja", "Dana", "Sati", "Minuta", "Sekundi"],
        labels1: ["Godina", "Mesec", "Nedelja", "Dan", "Sat", "Minut", "Sekunda"],
        labels2: ["Godine", "Meseca", "Nedelje", "Dana", "Sata", "Minuta", "Sekunde"],
        compactLabels: ["g", "m", "n", "d"],
        whichLabels: function(e) {
            return 1 === e ? 1 : 2 <= e && e <= 4 ? 2 : 0
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["hr-HR"] = {
        labels: ["Godina", "Mjeseci", "Tjedana", "Dana", "Sati", "Minuta", "Sekundi"],
        labels1: ["Godina", "Mjesec", "Tjedan", "Dan", "Sat", "Minutu", "Sekundu"],
        labels2: ["Godine", "Mjeseca", "Tjedana", "Dana", "Sata", "Minute", "Sekunde"],
        compactLabels: ["g", "m", "t", "d"],
        whichLabels: function(e) {
            return (e = parseInt(e, 10)) % 10 == 1 && e % 100 != 11 ? 1 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 2 : 0
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["bg-BG"] = {
        labels: ["Години", "Месеца", "Седмица", "Дни", "Часа", "Минути", "Секунди"],
        labels1: ["Година", "Месец", "Седмица", "Ден", "Час", "Минута", "Секунда"],
        compactLabels: ["l", "m", "n", "d"],
        compactLabels1: ["g", "m", "n", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["sl-SI"] = {
        labels: ["Let", "Mesecev", "Tednov", "Dni", "Ur", "Minut", "Sekund"],
        labels1: ["Leto", "Mesec", "Teden", "Dan", "Ura", "Minuta", "Sekunda"],
        labels2: ["Leti", "Meseca", "Tedna", "Dneva", "Uri", "Minuti", "Sekundi"],
        labels3: ["Leta", "Meseci", "Tedni", "Dnevi", "Ure", "Minute", "Sekunde"],
        labels4: ["Leta", "Meseci", "Tedni", "Dnevi", "Ure", "Minute", "Sekunde"],
        compactLabels: ["l", "m", "t", "d"],
        whichLabels: function(e) {
            return 4 < e ? 0 : e
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["gsw-FR"] = {
        labels: ["Plizyè Lane", "Plizyè Mwa", "Plizyè Semenn", "Plizyè Jou", "Plizyè Lè", "Plizyè Minit", "Plizyè segond"],
        labels1: ["Ane", "Mwa", "Semenn", "Jou", "Lè", "Minit", "Segond"],
        compactLabels: ["a", "m", "s", "j"],
        whichLabels: function(e) {
            return 1 < e ? 0 : 1
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["et-EE"] = {
        labels: ["Aastat", "Kuud", "NГ¤dalat", "PГ¤eva", "Tundi", "Minutit", "Sekundit"],
        labels1: ["Aasta", "Kuu", "NГ¤dal", "PГ¤ev", "Tund", "Minut", "Sekund"],
        compactLabels: ["a", "k", "n", "p"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["cs-CZ"] = {
        labels: ["Let", "Měsíců", "Týdnů", "Dní", "Hodin", "Minut", "Sekund"],
        labels1: ["Rok", "Měsíc", "Týden", "Den", "Hodina", "Minuta", "Sekunda"],
        labels2: ["Roky", "Měsíce", "Týdny", "Dny", "Hodiny", "Minuty", "Sekundy"],
        compactLabels: ["R", "M", "T", "D"],
        whichLabels: function(e) {
            return 1 === e ? 1 : 2 <= e && e <= 4 ? 2 : 0
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["sk-SK"] = {
        labels: ["Rokov", "Mesiacov", "Týždňov", "Dní", "Hodín", "Minút", "Sekúnd"],
        labels1: ["Rok", "Mesiac", "Týždeň", "Deň", "Hodina", "Minúta", "Sekunda"],
        labels2: ["Roky", "Mesiace", "Týždne", "Dni", "Hodiny", "Minúty", "Sekundy"],
        compactLabels: ["r", "m", "t", "d"],
        whichLabels: function(e) {
            return 1 === e ? 1 : 2 <= e && e <= 4 ? 2 : 0
        },
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["id-ID"] = {
        labels: ["tahun", "bulan", "minggu", "hari", "jam", "menit", "detik"],
        labels1: ["tahun", "bulan", "minggu", "hari", "jam", "menit", "detik"],
        compactLabels: ["t", "b", "m", "h"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["uk-UA"] = {
        labels: ["Років", "Місяців", "Тижнів", "Днів", "Годин", "Хвилин", "Секунд"],
        labels1: ["Рік", "Місяць", "Тиждень", "День", "Година", "Хвилина", "Секунда"],
        compactLabels: ["Р", "М", "Т", "Д"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["lt-LT"] = {
        labels: ["Metų", "Mėnesių", "Savaičių", "Dienų", "Valandų", "Minučių", "Sekundžių"],
        labels1: ["Metai", "Mėnuo", "Savaitė", "Diena", "Valanda", "Minutė", "Sekundė"],
        compactLabels: ["m", "m", "s", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["lv-LV"] = {
        labels: ["Gadi", "Mēneši", "Nedēļas", "Dienas", "Stundas", "Minūtes", "Sekundes"],
        labels1: ["Gads", "Mēnesis", "Nedēļa", "Diena", "Stunda", "Minūte", "Sekunde"],
        compactLabels: ["l", "m", "n", "d"],
        compactLabels1: ["g", "m", "n", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    },
    e.countdown.regional["gl-ES"] = {
        labels: ["Anos", "Meses", "Semanas", "DÃ­as", "Horas", "Minutos", "Segundos"],
        labels1: ["Ano", "Mes", "Semana", "DÃ­a", "Hora", "Minuto", "Segundo"],
        compactLabels: ["a", "m", "s", "g"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
    }
}(jQuery),
jQuery(function() {
    clearFormFields({
        clearInputs: !0,
        clearTextareas: !0,
        passwordFieldText: !0,
        addClassFocus: "focus",
        filterClass: "default"
    })
}),
JSON = JSON || {},
!function() {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e : e
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(e) {
        return escapable.lastIndex = 0,
        escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, i, r, o, a, s = gap, l = t[e];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)),
        typeof (l = "function" == typeof rep ? rep.call(t, e, l) : l)) {
        case "string":
            return quote(l);
        case "number":
            return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
            return String(l);
        case "object":
            if (!l)
                return "null";
            if (gap += indent,
            a = [],
            "[object Array]" === Object.prototype.toString.apply(l)) {
                for (o = l.length,
                n = 0; n < o; n += 1)
                    a[n] = str(n, l) || "null";
                r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]"
            } else {
                if (rep && "object" == typeof rep)
                    for (o = rep.length,
                    n = 0; n < o; n += 1)
                        "string" == typeof rep[n] && (r = str(i = rep[n], l)) && a.push(quote(i) + (gap ? ": " : ":") + r);
                else
                    for (i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l)) && a.push(quote(i) + (gap ? ": " : ":") + r);
                r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}"
            }
            return gap = s,
            r
        }
    }
    "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
        var i;
        if (indent = gap = "",
        "number" == typeof n)
            for (i = 0; i < n; i += 1)
                indent += " ";
        else
            "string" == typeof n && (indent = n);
        if (!(rep = t) || "function" == typeof t || "object" == typeof t && "number" == typeof t.length)
            return str("", {
                "": e
            });
        throw new Error("JSON.stringify")
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        var j;
        function walk(e, t) {
            var n, i, r = e[t];
            if (r && "object" == typeof r)
                for (n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (void 0 !== (i = walk(r, n)) ? r[n] = i : delete r[n]);
            return reviver.call(e, t, r)
        }
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
!function(gt, mt) {
    "use strict";
    if (!gt || !gt.document)
        throw new Error("SoundManager requires a browser with window and document objects.");
    var e = null;
    function t(t, R) {
        this.setupOptions = {
            url: t || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            forceUseGlobalHTML5Audio: !1,
            ignoreMobileRestrictions: !1,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !1,
            noSWFCache: !1,
            idPrefix: "sound"
        },
        this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        },
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        },
        this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        },
        this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        },
        this.movieID = "sm2-container",
        this.id = R || "sm2movie",
        this.debugID = "soundmanager-debug",
        this.debugURLParam = /([#?&])debug=1/i,
        this.versionNumber = "V2.97a.20150601",
        this.version = null,
        this.movieURL = null,
        this.altURL = null,
        this.swfLoaded = !1,
        this.enabled = !1,
        this.oMC = null,
        this.sounds = {},
        this.soundIDs = [],
        this.muted = !1,
        this.didFlashBlock = !1,
        this.filePattern = null,
        this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        },
        this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        },
        this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        },
        this.html5 = {
            usingFlash: null
        },
        this.flash = {},
        this.html5Only = !1,
        this.ignoreFlash = !1;
        var H, g, I, B, U, y, v, b, n, _, q, $, V, r, i, o, W, z, Q, J, m, G, a, Y, X, K, Z, w, ee, te, ne, ie, re, x, oe, T, k, ae, se, le, S, E, ue, ce, pe, fe, de, he, ge, me, s, ye, ve, be, C, _e, l, we, xe, j, Te, ke, Se, Ee, Ce, je, O = this, Oe = null, L = null, u = "soundManager", c = u + ": ", Le = "HTML5::", D = navigator.userAgent, De = gt.location.href.toString(), M = document, p = [], Me = !0, Pe = !1, Ae = !1, f = !1, d = !1, Fe = !1, Ne = 0, Re = ["log", "info", "warn", "error"], He = 8, Ie = null, Be = null, Ue = !1, qe = !1, $e = 0, Ve = null, P = [], h = null, We = Array.prototype.slice, A = !1, ze = 0, F = 1e3, Qe = D.match(/(ipad|iphone|ipod)/i), Je = D.match(/android/i), N = D.match(/msie/i), Ge = D.match(/webkit/i), Ye = D.match(/safari/i) && !D.match(/chrome/i), Xe = D.match(/opera/i), Ke = D.match(/(mobile|pre\/|xoom)/i) || Qe || Je, Ze = !De.match(/usehtml5audio/i) && !De.match(/sm2\-ignorebadua/i) && Ye && !D.match(/silk/i) && D.match(/OS X 10_6_([3-7])/i), et = gt.console !== mt && console.log !== mt, tt = M.hasFocus !== mt ? M.hasFocus() : null, nt = Ye && (M.hasFocus === mt || !M.hasFocus()), it = !nt, rt = /(mp3|mp4|mpa|m4a|m4b)/i, ot = "about:blank", at = "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==", st = M.location ? M.location.protocol.match(/http/i) : null, lt = st ? "" : "http://", ut = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i, ct = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"], pt = new RegExp("\\.(" + ct.join("|") + ")(\\?.*)?$","i");
        function ft(e) {
            return O.preferFlash && l && !O.ignoreFlash && O.flash[e] !== mt && O.flash[e]
        }
        function dt(e) {
            var e = We.call(e)
              , t = e.length;
            return Ce ? (e[1] = "on" + e[1],
            3 < t && e.pop()) : 3 === t && e.push(!1),
            e
        }
        function ht(e, t) {
            var n = e.shift()
              , t = [je[t]];
            Ce ? n[t](e[0], e[1]) : n[t].apply(n, e)
        }
        function e(n) {
            return function(e) {
                var t = this._s
                  , t = t && t._a ? n.call(this, e) : (t && t.id ? O._wD(t.id + ": Ignoring " + e.type) : O._wD(Le + "Ignoring " + e.type),
                null);
                return t
            }
        }
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,
        this.useAltURL = !st,
        k = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        },
        this.hasHTML5 = function() {
            try {
                return Audio !== mt && (Xe && opera !== mt && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== mt
            } catch (e) {
                return !1
            }
        }(),
        this.setup = function(e) {
            var t = !O.url;
            return e !== mt && f && h && O.ok() && (e.flashVersion !== mt || e.url !== mt || e.html5Test !== mt) && S(x("setupLate")),
            q(e),
            A || (Ke ? O.setupOptions.ignoreMobileRestrictions && !O.setupOptions.forceUseGlobalHTML5Audio || (P.push(m.globalHTML5),
            A = !0) : O.setupOptions.forceUseGlobalHTML5Audio && (P.push(m.globalHTML5),
            A = !0)),
            !Ee && Ke && (O.setupOptions.ignoreMobileRestrictions ? P.push(m.ignoreMobile) : (O.setupOptions.useHTML5Audio && !O.setupOptions.preferFlash || O._wD(m.mobileUA),
            O.setupOptions.useHTML5Audio = !0,
            O.setupOptions.preferFlash = !1,
            Qe ? O.ignoreFlash = !0 : (!Je || D.match(/android\s2\.3/i)) && Je || (O._wD(m.globalHTML5),
            A = !0))),
            e && (t && X && e.url !== mt && O.beginDelayedInit(),
            X || e.url === mt || "complete" !== M.readyState || setTimeout(a, 1)),
            Ee = !0,
            O
        }
        ,
        this.ok = function() {
            return h ? f && !d : O.useHTML5Audio && O.hasHTML5
        }
        ,
        this.supported = this.ok,
        this.getMovie = function(e) {
            return g(e) || M[e] || gt[e]
        }
        ,
        this.createSound = function(e, t) {
            var n, i = null, r = u + ".createSound(): ", o = r + x(f ? "notOK" : "notReady");
            if (!f || !O.ok())
                return S(o),
                !1;
            if ((n = _(e = t !== mt ? {
                id: e,
                url: t
            } : e)).url = fe(n.url),
            n.id === mt && (n.id = O.setupOptions.idPrefix + ze++),
            n.id.toString().charAt(0).match(/^[0-9]$/) && O._wD(r + x("badID", n.id), 2),
            O._wD(r + n.id + (n.url ? " (" + n.url + ")" : ""), 1),
            E(n.id, !0))
                return O._wD(r + n.id + " exists", 1),
                O.sounds[n.id];
            function a() {
                return n = se(n),
                O.sounds[n.id] = new H(n),
                O.soundIDs.push(n.id),
                O.sounds[n.id]
            }
            if (ge(n))
                i = a(),
                O.html5Only || O._wD(n.id + ": Using HTML5"),
                i._setup_html5(n);
            else {
                if (O.html5Only)
                    return O._wD(n.id + ": No HTML5 support for this sound, and no Flash. Exiting."),
                    a();
                if (O.html5.usingFlash && n.url && n.url.match(/data\:/i))
                    return O._wD(n.id + ": data: URIs not supported via Flash. Exiting."),
                    a();
                8 < y && (null === n.isMovieStar && (n.isMovieStar = !!(n.serverURL || n.type && n.type.match(ut) || n.url && n.url.match(pt))),
                n.isMovieStar) && (O._wD(r + "using MovieStar handling"),
                1 < n.loops) && b("noNSLoop"),
                n = le(n, r),
                i = a(),
                8 === y ? L._createSound(n.id, n.loops || 1, n.usePolicyFile) : (L._createSound(n.id, n.url, n.usePeakData, n.useWaveformData, n.useEQData, n.isMovieStar, !!n.isMovieStar && n.bufferTime, n.loops || 1, n.serverURL, n.duration || null, n.autoPlay, !0, n.autoLoad, n.usePolicyFile),
                n.serverURL || (i.connected = !0,
                n.onconnect && n.onconnect.apply(i))),
                n.serverURL || !n.autoLoad && !n.autoPlay || i.load(n)
            }
            return !n.serverURL && n.autoPlay && i.play(),
            i
        }
        ,
        this.destroySound = function(e, t) {
            if (!E(e))
                return !1;
            var n, i = O.sounds[e];
            for (i.stop(),
            i._iO = {},
            i.unload(),
            n = 0; n < O.soundIDs.length; n++)
                if (O.soundIDs[n] === e) {
                    O.soundIDs.splice(n, 1);
                    break
                }
            return t || i.destruct(!0),
            i = null,
            delete O.sounds[e],
            !0
        }
        ,
        this.load = function(e, t) {
            return !!E(e) && O.sounds[e].load(t)
        }
        ,
        this.unload = function(e) {
            return !!E(e) && O.sounds[e].unload()
        }
        ,
        this.onPosition = function(e, t, n, i) {
            return !!E(e) && O.sounds[e].onposition(t, n, i)
        }
        ,
        this.onposition = this.onPosition,
        this.clearOnPosition = function(e, t, n) {
            return !!E(e) && O.sounds[e].clearOnPosition(t, n)
        }
        ,
        this.play = function(e, t) {
            var n = null
              , i = t && !(t instanceof Object);
            if (!f || !O.ok())
                return S(u + ".play(): " + x(f ? "notOK" : "notReady")),
                !1;
            if (E(e, i))
                i && (t = {
                    url: t
                });
            else {
                if (!i)
                    return !1;
                (t = i ? {
                    url: t
                } : t) && t.url && (O._wD(u + '.play(): Attempting to create "' + e + '"', 1),
                t.id = e,
                n = O.createSound(t).play())
            }
            return n = null === n ? O.sounds[e].play(t) : n
        }
        ,
        this.start = this.play,
        this.setPosition = function(e, t) {
            return !!E(e) && O.sounds[e].setPosition(t)
        }
        ,
        this.stop = function(e) {
            return !!E(e) && (O._wD(u + ".stop(" + e + ")", 1),
            O.sounds[e].stop())
        }
        ,
        this.stopAll = function() {
            for (var e in O._wD(u + ".stopAll()", 1),
            O.sounds)
                O.sounds.hasOwnProperty(e) && O.sounds[e].stop()
        }
        ,
        this.pause = function(e) {
            return !!E(e) && O.sounds[e].pause()
        }
        ,
        this.pauseAll = function() {
            for (var e = O.soundIDs.length - 1; 0 <= e; e--)
                O.sounds[O.soundIDs[e]].pause()
        }
        ,
        this.resume = function(e) {
            return !!E(e) && O.sounds[e].resume()
        }
        ,
        this.resumeAll = function() {
            for (var e = O.soundIDs.length - 1; 0 <= e; e--)
                O.sounds[O.soundIDs[e]].resume()
        }
        ,
        this.togglePause = function(e) {
            return !!E(e) && O.sounds[e].togglePause()
        }
        ,
        this.setPan = function(e, t) {
            return !!E(e) && O.sounds[e].setPan(t)
        }
        ,
        this.setVolume = function(e, t) {
            var n, i;
            if (e === mt || isNaN(e) || t !== mt)
                return !!E(e) && O.sounds[e].setVolume(t);
            for (n = 0,
            i = O.soundIDs.length; n < i; n++)
                O.sounds[O.soundIDs[n]].setVolume(e)
        }
        ,
        this.mute = function(e) {
            var t = 0;
            if (e = e instanceof String ? null : e)
                return !!E(e) && (O._wD(u + '.mute(): Muting "' + e + '"'),
                O.sounds[e].mute());
            for (O._wD(u + ".mute(): Muting all sounds"),
            t = O.soundIDs.length - 1; 0 <= t; t--)
                O.sounds[O.soundIDs[t]].mute();
            return O.muted = !0
        }
        ,
        this.muteAll = function() {
            O.mute()
        }
        ,
        this.unmute = function(e) {
            var t;
            if (e = e instanceof String ? null : e)
                return !!E(e) && (O._wD(u + '.unmute(): Unmuting "' + e + '"'),
                O.sounds[e].unmute());
            for (O._wD(u + ".unmute(): Unmuting all sounds"),
            t = O.soundIDs.length - 1; 0 <= t; t--)
                O.sounds[O.soundIDs[t]].unmute();
            return !(O.muted = !1)
        }
        ,
        this.unmuteAll = function() {
            O.unmute()
        }
        ,
        this.toggleMute = function(e) {
            return !!E(e) && O.sounds[e].toggleMute()
        }
        ,
        this.getMemoryUse = function() {
            var e = 0;
            return e = L && 8 !== y ? parseInt(L._getMemoryUse(), 10) : e
        }
        ,
        this.disable = function(e) {
            var t;
            if (e === mt && (e = !1),
            d)
                return !1;
            for (d = !0,
            b("shutdown", 1),
            t = O.soundIDs.length - 1; 0 <= t; t--)
                ne(O.sounds[O.soundIDs[t]]);
            return n(e),
            C.remove(gt, "load", i),
            !0
        }
        ,
        this.canPlayMIME = function(e) {
            var t;
            return t = !(t = O.hasHTML5 ? me({
                type: e
            }) : t) && h ? e && O.ok() ? !!(8 < y && e.match(ut) || e.match(O.mimePattern)) : null : t
        }
        ,
        this.canPlayURL = function(e) {
            var t;
            return t = !(t = O.hasHTML5 ? me({
                url: e
            }) : t) && h ? e && O.ok() ? !!e.match(O.filePattern) : null : t
        }
        ,
        this.canPlayLink = function(e) {
            return !(e.type === mt || !e.type || !O.canPlayMIME(e.type)) || O.canPlayURL(e.href)
        }
        ,
        this.getSoundById = function(e, t) {
            var n;
            return e ? ((n = O.sounds[e]) || t || O._wD(u + '.getSoundById(): Sound "' + e + '" not found.', 2),
            n) : null
        }
        ,
        this.onready = function(e, t) {
            var n = "onready";
            if ("function" != typeof e)
                throw x("needFunction", n);
            return f && O._wD(x("queue", n)),
            V(n, e, t = t || gt),
            r(),
            !0
        }
        ,
        this.ontimeout = function(e, t) {
            var n = "ontimeout";
            if ("function" != typeof e)
                throw x("needFunction", n);
            return f && O._wD(x("queue", n)),
            V(n, e, t = t || gt),
            r({
                type: n
            }),
            !0
        }
        ,
        this._writeDebug = function(e, t) {
            var n, i;
            if (!O.setupOptions.debugMode)
                return !1;
            if (!(et && O.useConsole && (t && "object" == typeof t ? console.log(e, t) : Re[t] !== mt ? console[Re[t]](e) : console.log(e),
            O.consoleOnly))) {
                if (!(n = g("soundmanager-debug")))
                    return !1;
                i = M.createElement("div"),
                ++Ne % 2 == 0 && (i.className = "sm2-alt"),
                t = t === mt ? 0 : parseInt(t, 10),
                i.appendChild(M.createTextNode(e)),
                t && (2 <= t && (i.style.fontWeight = "bold"),
                3 === t) && (i.style.color = "#ff3333"),
                n.insertBefore(i, n.firstChild),
                n = null
            }
            return !0
        }
        ,
        -1 !== De.indexOf("sm2-debug=alert") && (this._writeDebug = function(e) {
            gt.alert(e)
        }
        ),
        this._wD = this._writeDebug,
        this._debug = function() {
            var e, t;
            for (b("currentObj", 1),
            e = 0,
            t = O.soundIDs.length; e < t; e++)
                O.sounds[O.soundIDs[e]]._debug()
        }
        ,
        this.reboot = function(e, t) {
            var n, i, r;
            for (O.soundIDs.length && O._wD("Destroying " + O.soundIDs.length + " SMSound object" + (1 !== O.soundIDs.length ? "s" : "") + "..."),
            n = O.soundIDs.length - 1; 0 <= n; n--)
                O.sounds[O.soundIDs[n]].destruct();
            if (L)
                try {
                    N && (Be = L.innerHTML),
                    Ie = L.parentNode.removeChild(L)
                } catch (e) {
                    b("badRemove", 2)
                }
            if (Be = Ie = h = L = null,
            O.enabled = X = f = Ue = qe = Pe = Ae = d = A = O.swfLoaded = !1,
            O.soundIDs = [],
            O.sounds = {},
            ze = 0,
            Ee = !1,
            e)
                p = [];
            else
                for (n in p)
                    if (p.hasOwnProperty(n))
                        for (i = 0,
                        r = p[n].length; i < r; i++)
                            p[n][i].fired = !1;
            return t || O._wD(u + ": Rebooting..."),
            O.html5 = {
                usingFlash: null
            },
            O.flash = {},
            O.html5Only = !1,
            O.ignoreFlash = !1,
            gt.setTimeout(function() {
                t || O.beginDelayedInit()
            }, 20),
            O
        }
        ,
        this.reset = function() {
            return b("reset"),
            O.reboot(!0, !0)
        }
        ,
        this.getMoviePercent = function() {
            return L && "PercentLoaded"in L ? L.PercentLoaded() : null
        }
        ,
        this.beginDelayedInit = function() {
            Fe = !0,
            a(),
            setTimeout(function() {
                return !qe && (Z(),
                G(),
                qe = !0)
            }, 20),
            o()
        }
        ,
        this.destruct = function() {
            O._wD(u + ".destruct()"),
            O.disable(!0)
        }
        ,
        H = function(e) {
            var r, o, t, i, l, u, a, c, p, f = this, d = !1, s = [], h = 0, g = null, m = {
                duration: null,
                time: null
            };
            this.id = e.id,
            this.sID = this.id,
            this.url = e.url,
            this.options = _(e),
            this.instanceOptions = this.options,
            this._iO = this.instanceOptions,
            this.pan = this.options.pan,
            this.volume = this.options.volume,
            this.isHTML5 = !1,
            this._a = null,
            p = !this.url,
            this.id3 = {},
            this._debug = function() {
                O._wD(f.id + ": Merged options:", f.options)
            }
            ,
            this.load = function(e) {
                var t;
                if (e !== mt ? f._iO = _(e, f.options) : (e = f.options,
                f._iO = e,
                g && g !== f.url && (b("manURL"),
                f._iO.url = f.url,
                f.url = null)),
                f._iO.url || (f._iO.url = f.url),
                f._iO.url = fe(f._iO.url),
                f.instanceOptions = f._iO,
                t = f._iO,
                O._wD(f.id + ": load (" + t.url + ")"),
                t.url || f.url)
                    if (f.isHTML5 || 8 !== y || f.url || t.autoPlay || O._wD(f.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1),
                    t.url === f.url && 0 !== f.readyState && 2 !== f.readyState)
                        b("onURL", 1),
                        3 === f.readyState && t.onload && Se(f, function() {
                            t.onload.apply(f, [!!f.duration])
                        });
                    else {
                        if (f.loaded = !1,
                        f.readyState = 1,
                        f.playState = 0,
                        f.id3 = {},
                        ge(t))
                            f._setup_html5(t)._called_load ? O._wD(f.id + ": Ignoring request to load again") : (f._html5_canplay = !1,
                            f.url !== t.url && (O._wD(b("manURL") + ": " + t.url),
                            f._a.src = t.url,
                            f.setPosition(0)),
                            f._a.autobuffer = "auto",
                            f._a.preload = "auto",
                            f._a._called_load = !0);
                        else {
                            if (O.html5Only)
                                return O._wD(f.id + ": No flash support. Exiting."),
                                f;
                            if (f._iO.url && f._iO.url.match(/data\:/i))
                                return O._wD(f.id + ": data: URIs not supported via Flash. Exiting."),
                                f;
                            try {
                                f.isHTML5 = !1,
                                f._iO = le(se(t)),
                                f._iO.autoPlay && (f._iO.position || f._iO.from) && (O._wD(f.id + ": Disabling autoPlay because of non-zero offset case"),
                                f._iO.autoPlay = !1),
                                t = f._iO,
                                8 === y ? L._load(f.id, t.url, t.stream, t.autoPlay, t.usePolicyFile) : L._load(f.id, t.url, !!t.stream, !!t.autoPlay, t.loops || 1, !!t.autoLoad, t.usePolicyFile)
                            } catch (e) {
                                b("smError", 2),
                                v("onload", !1),
                                w({
                                    type: "SMSOUND_LOAD_JS_EXCEPTION",
                                    fatal: !0
                                })
                            }
                        }
                        f.url = t.url
                    }
                else
                    O._wD(f.id + ": load(): url is unassigned. Exiting.", 2);
                return f
            }
            ,
            this.unload = function() {
                return 0 !== f.readyState && (O._wD(f.id + ": unload()"),
                f.isHTML5 ? (i(),
                f._a && (f._a.pause(),
                g = ye(f._a))) : 8 === y ? L._unload(f.id, ot) : L._unload(f.id),
                r()),
                f
            }
            ,
            this.destruct = function(e) {
                O._wD(f.id + ": Destruct"),
                f.isHTML5 ? (i(),
                f._a && (f._a.pause(),
                ye(f._a),
                A || t(),
                f._a._s = null,
                f._a = null)) : (f._iO.onfailure = null,
                L._destroySound(f.id)),
                e || O.destroySound(f.id, !0)
            }
            ,
            this.play = function(e, t) {
                var n, i, r, o, a = null, s = f.id + ": play(): ";
                if (t = t === mt || t,
                e = e || {},
                f.url && (f._iO.url = f.url),
                f._iO = _(f._iO, f.options),
                f._iO = _(e, f._iO),
                f._iO.url = fe(f._iO.url),
                f.instanceOptions = f._iO,
                f.isHTML5 || !f._iO.serverURL || f.connected) {
                    if (ge(f._iO) && (f._setup_html5(f._iO),
                    l()),
                    1 !== f.playState || f.paused || (f._iO.multiShot ? O._wD(s + "Already playing (multi-shot)", 1) : (O._wD(s + "Already playing (one-shot)", 1),
                    f.isHTML5 && f.setPosition(f._iO.position),
                    a = f)),
                    null !== a)
                        return a;
                    if (e.url && e.url !== f.url && (f.readyState || f.isHTML5 || 8 !== y || !p ? f.load(f._iO) : p = !1),
                    f.loaded ? O._wD(s.substr(0, s.lastIndexOf(":"))) : 0 === f.readyState ? (O._wD(s + "Attempting to load"),
                    f.isHTML5 || O.html5Only ? f.isHTML5 ? f.load(f._iO) : (O._wD(s + "Unsupported type. Exiting."),
                    a = f) : (f._iO.autoPlay = !0,
                    f.load(f._iO)),
                    f.instanceOptions = f._iO) : 2 === f.readyState ? (O._wD(s + "Could not load - exiting", 2),
                    a = f) : O._wD(s + "Loading - attempting to play..."),
                    null !== a)
                        return a;
                    if (!f.isHTML5 && 9 === y && 0 < f.position && f.position === f.duration && (O._wD(s + "Sound at end, resetting to position: 0"),
                    e.position = 0),
                    f.paused && 0 <= f.position && (!f._iO.serverURL || 0 < f.position))
                        O._wD(s + "Resuming from paused state", 1),
                        f.resume();
                    else {
                        if (f._iO = _(e, f._iO),
                        (!f.isHTML5 && null !== f._iO.position && 0 < f._iO.position || null !== f._iO.from && 0 < f._iO.from || null !== f._iO.to) && 0 === f.instanceCount && 0 === f.playState && !f._iO.serverURL) {
                            if (n = function() {
                                f._iO = _(e, f._iO),
                                f.play(f._iO)
                            }
                            ,
                            f.isHTML5 && !f._html5_canplay ? (O._wD(s + "Beginning load for non-zero offset case"),
                            f.load({
                                _oncanplay: n
                            }),
                            a = !1) : f.isHTML5 || f.loaded || f.readyState && 2 === f.readyState || (O._wD(s + "Preloading for non-zero offset case"),
                            f.load({
                                onload: n
                            }),
                            a = !1),
                            null !== a)
                                return a;
                            f._iO = c()
                        }
                        (!f.instanceCount || f._iO.multiShotEvents || f.isHTML5 && f._iO.multiShot && !A || !f.isHTML5 && 8 < y && !f.getAutoPlay()) && f.instanceCount++,
                        f._iO.onposition && 0 === f.playState && u(f),
                        f.playState = 1,
                        f.paused = !1,
                        f.position = f._iO.position === mt || isNaN(f._iO.position) ? 0 : f._iO.position,
                        f.isHTML5 || (f._iO = le(se(f._iO))),
                        f._iO.onplay && t && (f._iO.onplay.apply(f),
                        d = !0),
                        f.setVolume(f._iO.volume, !0),
                        f.setPan(f._iO.pan, !0),
                        f.isHTML5 ? f.instanceCount < 2 ? (l(),
                        n = f._setup_html5(),
                        f.setPosition(f._iO.position),
                        n.play()) : (O._wD(f.id + ": Cloning Audio() for instance #" + f.instanceCount + "..."),
                        i = new Audio(f._iO.url),
                        r = function() {
                            C.remove(i, "ended", r),
                            f._onfinish(f),
                            ye(i),
                            i = null
                        }
                        ,
                        o = function() {
                            C.remove(i, "canplay", o);
                            try {
                                i.currentTime = f._iO.position / F
                            } catch (e) {
                                S(f.id + ": multiShot play() failed to apply position of " + f._iO.position / F)
                            }
                            i.play()
                        }
                        ,
                        C.add(i, "ended", r),
                        f._iO.volume !== mt && (i.volume = Math.max(0, Math.min(1, f._iO.volume / 100))),
                        f.muted && (i.muted = !0),
                        f._iO.position ? C.add(i, "canplay", o) : i.play()) : (a = L._start(f.id, f._iO.loops || 1, 9 === y ? f.position : f.position / F, f._iO.multiShot || !1),
                        9 !== y || a || (O._wD(s + "No sound hardware, or 32-sound ceiling hit", 2),
                        f._iO.onplayerror && f._iO.onplayerror.apply(f)))
                    }
                } else
                    f.getAutoPlay() || (O._wD(s + " Netstream not connected yet - setting autoPlay"),
                    f.setAutoPlay(!0));
                return f
            }
            ,
            this.start = this.play,
            this.stop = function(e) {
                var t, n = f._iO;
                return 1 === f.playState && (O._wD(f.id + ": stop()"),
                f._onbufferchange(0),
                f._resetOnPosition(0),
                f.paused = !1,
                f.isHTML5 || (f.playState = 0),
                a(),
                n.to && f.clearOnPosition(n.to),
                f.isHTML5 ? f._a && (t = f.position,
                f.setPosition(0),
                f.position = t,
                f._a.pause(),
                f.playState = 0,
                f._onTimer(),
                i()) : (L._stop(f.id, e),
                n.serverURL && f.unload()),
                f.instanceCount = 0,
                f._iO = {},
                n.onstop) && n.onstop.apply(f),
                f
            }
            ,
            this.setAutoPlay = function(e) {
                O._wD(f.id + ": Autoplay turned " + (e ? "on" : "off")),
                f._iO.autoPlay = e,
                f.isHTML5 || (L._setAutoPlay(f.id, e),
                !e) || f.instanceCount || 1 !== f.readyState || (f.instanceCount++,
                O._wD(f.id + ": Incremented instance count to " + f.instanceCount))
            }
            ,
            this.getAutoPlay = function() {
                return f._iO.autoPlay
            }
            ,
            this.setPosition = function(e) {
                e === mt && (e = 0);
                var t, e = f.isHTML5 ? Math.max(e, 0) : Math.min(f.duration || f._iO.duration, Math.max(e, 0));
                if (f.position = e,
                t = f.position / F,
                f._resetOnPosition(f.position),
                f._iO.position = e,
                f.isHTML5) {
                    if (f._a) {
                        if (f._html5_canplay) {
                            if (f._a.currentTime !== t) {
                                O._wD(f.id + ": setPosition(" + t + ")");
                                try {
                                    f._a.currentTime = t,
                                    0 !== f.playState && !f.paused || f._a.pause()
                                } catch (e) {
                                    O._wD(f.id + ": setPosition(" + t + ") failed: " + e.message, 2)
                                }
                            }
                        } else if (t)
                            return O._wD(f.id + ": setPosition(" + t + "): Cannot seek yet, sound not ready", 2),
                            f;
                        f.paused && f._onTimer(!0)
                    }
                } else
                    e = 9 === y ? f.position : t,
                    f.readyState && 2 !== f.readyState && L._setPosition(f.id, e, f.paused || !f.playState, f._iO.multiShot);
                return f
            }
            ,
            this.pause = function(e) {
                return f.paused || 0 === f.playState && 1 !== f.readyState || (O._wD(f.id + ": pause()"),
                f.paused = !0,
                f.isHTML5 ? (f._setup_html5().pause(),
                i()) : !e && e !== mt || L._pause(f.id, f._iO.multiShot),
                f._iO.onpause && f._iO.onpause.apply(f)),
                f
            }
            ,
            this.resume = function() {
                var e = f._iO;
                return f.paused && (O._wD(f.id + ": resume()"),
                f.paused = !1,
                f.playState = 1,
                f.isHTML5 ? (f._setup_html5().play(),
                l()) : (e.isMovieStar && !e.serverURL && f.setPosition(f.position),
                L._pause(f.id, e.multiShot)),
                !d && e.onplay ? (e.onplay.apply(f),
                d = !0) : e.onresume && e.onresume.apply(f)),
                f
            }
            ,
            this.togglePause = function() {
                return O._wD(f.id + ": togglePause()"),
                0 === f.playState ? f.play({
                    position: 9 !== y || f.isHTML5 ? f.position / F : f.position
                }) : f.paused ? f.resume() : f.pause(),
                f
            }
            ,
            this.setPan = function(e, t) {
                return e === mt && (e = 0),
                t === mt && (t = !1),
                f.isHTML5 || L._setPan(f.id, e),
                f._iO.pan = e,
                t || (f.pan = e,
                f.options.pan = e),
                f
            }
            ,
            this.setVolume = function(e, t) {
                return e === mt && (e = 100),
                t === mt && (t = !1),
                f.isHTML5 ? f._a && (O.muted && !f.muted && (f.muted = !0,
                f._a.muted = !0),
                f._a.volume = Math.max(0, Math.min(1, e / 100))) : L._setVolume(f.id, O.muted && !f.muted || f.muted ? 0 : e),
                f._iO.volume = e,
                t || (f.volume = e,
                f.options.volume = e),
                f
            }
            ,
            this.mute = function() {
                return f.muted = !0,
                f.isHTML5 ? f._a && (f._a.muted = !0) : L._setVolume(f.id, 0),
                f
            }
            ,
            this.unmute = function() {
                f.muted = !1;
                var e = f._iO.volume !== mt;
                return f.isHTML5 ? f._a && (f._a.muted = !1) : L._setVolume(f.id, (e ? f._iO : f.options).volume),
                f
            }
            ,
            this.toggleMute = function() {
                return f.muted ? f.unmute() : f.mute()
            }
            ,
            this.onPosition = function(e, t, n) {
                return s.push({
                    position: parseInt(e, 10),
                    method: t,
                    scope: n !== mt ? n : f,
                    fired: !1
                }),
                f
            }
            ,
            this.onposition = this.onPosition,
            this.clearOnPosition = function(e, t) {
                var n;
                if (e = parseInt(e, 10),
                isNaN(e))
                    return !1;
                for (n = 0; n < s.length; n++)
                    e !== s[n].position || t && t !== s[n].method || (s[n].fired && h--,
                    s.splice(n, 1))
            }
            ,
            this._processOnPosition = function() {
                var e, t, n = s.length;
                if (!n || !f.playState || n <= h)
                    return !1;
                for (e = n - 1; 0 <= e; e--)
                    !(t = s[e]).fired && f.position >= t.position && (t.fired = !0,
                    h++,
                    t.method.apply(t.scope, [t.position]),
                    n = s.length);
                return !0
            }
            ,
            this._resetOnPosition = function(e) {
                var t, n, i = s.length;
                if (!i)
                    return !1;
                for (t = i - 1; 0 <= t; t--)
                    (n = s[t]).fired && e <= n.position && (n.fired = !1,
                    h--);
                return !0
            }
            ,
            c = function() {
                var e = f._iO
                  , t = e.from
                  , n = e.to
                  , i = function() {
                    O._wD(f.id + ': "To" time of ' + n + " reached."),
                    f.clearOnPosition(n, i),
                    f.stop()
                }
                  , r = function() {
                    O._wD(f.id + ': Playing "from" ' + t),
                    null === n || isNaN(n) || f.onPosition(n, i)
                };
                return null === t || isNaN(t) || (e.position = t,
                e.multiShot = !1,
                r()),
                e
            }
            ,
            u = function() {
                var e, t = f._iO.onposition;
                if (t)
                    for (e in t)
                        t.hasOwnProperty(e) && f.onPosition(parseInt(e, 10), t[e])
            }
            ,
            a = function() {
                var e, t = f._iO.onposition;
                if (t)
                    for (e in t)
                        t.hasOwnProperty(e) && f.clearOnPosition(parseInt(e, 10))
            }
            ,
            l = function() {
                f.isHTML5 && ue(f)
            }
            ,
            i = function() {
                f.isHTML5 && ce(f)
            }
            ,
            (r = function(e) {
                e || (s = [],
                h = 0),
                d = !1,
                f._hasTimer = null,
                f._a = null,
                f._html5_canplay = !1,
                f.bytesLoaded = null,
                f.bytesTotal = null,
                f.duration = f._iO && f._iO.duration ? f._iO.duration : null,
                f.durationEstimate = null,
                f.buffered = [],
                f.eqData = [],
                f.eqData.left = [],
                f.eqData.right = [],
                f.failures = 0,
                f.isBuffering = !1,
                f.instanceOptions = {},
                f.instanceCount = 0,
                f.loaded = !1,
                f.metadata = {},
                f.readyState = 0,
                f.muted = !1,
                f.paused = !1,
                f.peakData = {
                    left: 0,
                    right: 0
                },
                f.waveformData = {
                    left: [],
                    right: []
                },
                f.playState = 0,
                f.position = null,
                f.id3 = {}
            }
            )(),
            this._onTimer = function(e) {
                var t, n = !1, i = {};
                if (f._hasTimer || e)
                    return f._a && (e || (0 < f.playState || 1 === f.readyState) && !f.paused) && ((t = f._get_html5_duration()) !== m.duration && (m.duration = t,
                    f.duration = t,
                    n = !0),
                    f.durationEstimate = f.duration,
                    (t = f._a.currentTime * F || 0) !== m.time && (m.time = t,
                    n = !0),
                    n || e) && f._whileplaying(t, i, i, i, i),
                    n
            }
            ,
            this._get_html5_duration = function() {
                var e = f._iO
                  , e = f._a && f._a.duration ? f._a.duration * F : e && e.duration ? e.duration : null;
                return e && !isNaN(e) && e !== 1 / 0 ? e : null
            }
            ,
            this._apply_loop = function(e, t) {
                !e.loop && 1 < t && O._wD("Note: Native HTML5 looping is infinite.", 1),
                e.loop = 1 < t ? "loop" : ""
            }
            ,
            this._setup_html5 = function(e) {
                var t, e = _(f._iO, e), n = A ? Oe : f._a, i = decodeURI(e.url);
                if (A ? i === decodeURI(_e) && (t = !0) : i === decodeURI(g) && (t = !0),
                n) {
                    if (n._s)
                        if (A)
                            n._s && n._s.playState && !t && n._s.stop();
                        else if (!A && i === decodeURI(g))
                            return f._apply_loop(n, e.loops),
                            n;
                    t || (g && r(!1),
                    n.src = e.url,
                    f.url = e.url,
                    g = e.url,
                    _e = e.url,
                    n._called_load = !1)
                } else
                    e.autoLoad || e.autoPlay ? (f._a = new Audio(e.url),
                    f._a.load()) : f._a = Xe && opera.version() < 10 ? new Audio(null) : new Audio,
                    (n = f._a)._called_load = !1,
                    A && (Oe = n);
                return f.isHTML5 = !0,
                (f._a = n)._s = f,
                o(),
                f._apply_loop(n, e.loops),
                e.autoLoad || e.autoPlay ? f.load() : (n.autobuffer = !1,
                n.preload = "auto"),
                n
            }
            ,
            o = function() {
                if (f._a._added_events)
                    return !1;
                var e, t, n, i;
                for (e in f._a._added_events = !0,
                j)
                    j.hasOwnProperty(e) && (n = j[t = e],
                    i = void 0,
                    f._a) && f._a.addEventListener(t, n, i || !1);
                return !0
            }
            ,
            t = function() {
                var e, t, n, i;
                for (e in O._wD(f.id + ": Removing event listeners"),
                f._a._added_events = !1,
                j)
                    j.hasOwnProperty(e) && (n = j[t = e],
                    i = void 0,
                    f._a) && f._a.removeEventListener(t, n, i || !1)
            }
            ,
            this._onload = function(e) {
                var t = !!e || !f.isHTML5 && 8 === y && f.duration
                  , e = f.id + ": ";
                return O._wD(e + (t ? "onload()" : "Failed to load / invalid sound?" + (f.duration ? " -" : " Zero-length duration reported.") + " (" + f.url + ")"), t ? 1 : 2),
                t || f.isHTML5 || (!0 === O.sandbox.noRemote && O._wD(e + x("noNet"), 1),
                !0 === O.sandbox.noLocal && O._wD(e + x("noLocal"), 1)),
                f.loaded = t,
                f.readyState = t ? 3 : 2,
                f._onbufferchange(0),
                f._iO.onload && Se(f, function() {
                    f._iO.onload.apply(f, [t])
                }),
                !0
            }
            ,
            this._onbufferchange = function(e) {
                return 0 !== f.playState && !(e && f.isBuffering || !e && !f.isBuffering || (f.isBuffering = 1 === e,
                f._iO.onbufferchange && (O._wD(f.id + ": Buffer state change: " + e),
                f._iO.onbufferchange.apply(f, [e])),
                0))
            }
            ,
            this._onsuspend = function() {
                return f._iO.onsuspend && (O._wD(f.id + ": Playback suspended"),
                f._iO.onsuspend.apply(f)),
                !0
            }
            ,
            this._onfailure = function(e, t, n) {
                f.failures++,
                O._wD(f.id + ": Failure (" + f.failures + "): " + e),
                f._iO.onfailure && 1 === f.failures ? f._iO.onfailure(e, t, n) : O._wD(f.id + ": Ignoring failure")
            }
            ,
            this._onwarning = function(e, t, n) {
                f._iO.onwarning && f._iO.onwarning(e, t, n)
            }
            ,
            this._onfinish = function() {
                var e = f._iO.onfinish;
                f._onbufferchange(0),
                f._resetOnPosition(0),
                f.instanceCount && (f.instanceCount--,
                f.instanceCount || (a(),
                f.playState = 0,
                f.paused = !1,
                f.instanceCount = 0,
                f.instanceOptions = {},
                f._iO = {},
                i(),
                f.isHTML5 && (f.position = 0)),
                f.instanceCount && !f._iO.multiShotEvents || e && (O._wD(f.id + ": onfinish()"),
                Se(f, function() {
                    e.apply(f)
                })))
            }
            ,
            this._whileloading = function(e, t, n, i) {
                var r = f._iO;
                f.bytesLoaded = e,
                f.bytesTotal = t,
                f.duration = Math.floor(n),
                f.bufferLength = i,
                f.isHTML5 || r.isMovieStar ? f.durationEstimate = f.duration : r.duration ? f.durationEstimate = (f.duration > r.duration ? f : r).duration : f.durationEstimate = parseInt(f.bytesTotal / f.bytesLoaded * f.duration, 10),
                f.isHTML5 || (f.buffered = [{
                    start: 0,
                    end: f.duration
                }]),
                (3 !== f.readyState || f.isHTML5) && r.whileloading && r.whileloading.apply(f)
            }
            ,
            this._whileplaying = function(e, t, n, i, r) {
                var o = f._iO;
                return !isNaN(e) && null !== e && (f.position = Math.max(0, e),
                f._processOnPosition(),
                !f.isHTML5 && 8 < y && (o.usePeakData && t !== mt && t && (f.peakData = {
                    left: t.leftPeak,
                    right: t.rightPeak
                }),
                o.useWaveformData && n !== mt && n && (f.waveformData = {
                    left: n.split(","),
                    right: i.split(",")
                }),
                o.useEQData) && r !== mt && r && r.leftEQ && (e = r.leftEQ.split(","),
                f.eqData = e,
                f.eqData.left = e,
                r.rightEQ !== mt) && r.rightEQ && (f.eqData.right = r.rightEQ.split(",")),
                1 === f.playState && (f.isHTML5 || 8 !== y || f.position || !f.isBuffering || f._onbufferchange(0),
                o.whileplaying) && o.whileplaying.apply(f),
                !0)
            }
            ,
            this._oncaptiondata = function(e) {
                O._wD(f.id + ": Caption data received."),
                f.captiondata = e,
                f._iO.oncaptiondata && f._iO.oncaptiondata.apply(f, [e])
            }
            ,
            this._onmetadata = function(e, t) {
                O._wD(f.id + ": Metadata received.");
                for (var n = {}, i = 0, r = e.length; i < r; i++)
                    n[e[i]] = t[i];
                f.metadata = n,
                f._iO.onmetadata && f._iO.onmetadata.call(f, f.metadata)
            }
            ,
            this._onid3 = function(e, t) {
                O._wD(f.id + ": ID3 data received.");
                for (var n = [], i = 0, r = e.length; i < r; i++)
                    n[e[i]] = t[i];
                f.id3 = _(f.id3, n),
                f._iO.onid3 && f._iO.onid3.apply(f)
            }
            ,
            this._onconnect = function(e) {
                O._wD(f.id + ": " + ((e = 1 === e) ? "Connected." : "Failed to connect? - " + f.url), e ? 1 : 2),
                (f.connected = e) && (f.failures = 0,
                E(f.id) && (f.getAutoPlay() ? f.play(mt, f.getAutoPlay()) : f._iO.autoLoad && f.load()),
                f._iO.onconnect) && f._iO.onconnect.apply(f, [e])
            }
            ,
            this._ondataerror = function(e) {
                0 < f.playState && (O._wD(f.id + ": Data error: " + e),
                f._iO.ondataerror) && f._iO.ondataerror.apply(f)
            }
            ,
            this._debug()
        }
        ,
        K = function() {
            return M.body || M.getElementsByTagName("div")[0]
        }
        ,
        g = function(e) {
            return M.getElementById(e)
        }
        ,
        _ = function(e, t) {
            var n, i = e || {}, r = t === mt ? O.defaultOptions : t;
            for (n in r)
                r.hasOwnProperty(n) && i[n] === mt && ("object" != typeof r[n] || null === r[n] ? i[n] = r[n] : i[n] = _(i[n], r[n]));
            return i
        }
        ,
        Se = function(e, t) {
            e.isHTML5 || 8 !== y ? t() : gt.setTimeout(t, 0)
        }
        ,
        $ = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        },
        q = function(e, t) {
            var n, i = !0, r = t !== mt, o = O.setupOptions, a = $;
            if (e === mt) {
                for (n in i = [],
                o)
                    o.hasOwnProperty(n) && i.push(n);
                for (n in a)
                    a.hasOwnProperty(n) && ("object" == typeof O[n] ? i.push(n + ": {...}") : O[n]instanceof Function ? i.push(n + ": function() {...}") : i.push(n));
                return O._wD(x("setup", i.join(", "))),
                !1
            }
            for (n in e)
                if (e.hasOwnProperty(n))
                    if ("object" != typeof e[n] || null === e[n] || e[n]instanceof Array || e[n]instanceof RegExp)
                        r && a[t] !== mt ? O[t][n] = e[n] : o[n] !== mt ? (O.setupOptions[n] = e[n],
                        O[n] = e[n]) : a[n] === mt ? (S(x(O[n] === mt ? "setupUndef" : "setupError", n), 2),
                        i = !1) : O[n]instanceof Function ? O[n].apply(O, e[n]instanceof Array ? e[n] : [e[n]]) : O[n] = e[n];
                    else {
                        if (a[n] !== mt)
                            return q(e[n], n);
                        S(x(O[n] === mt ? "setupUndef" : "setupError", n), 2),
                        i = !1
                    }
            return i
        }
        ,
        Ce = gt.attachEvent,
        je = {
            add: Ce ? "attachEvent" : "addEventListener",
            remove: Ce ? "detachEvent" : "removeEventListener"
        },
        C = {
            add: function() {
                ht(dt(arguments), "add")
            },
            remove: function() {
                ht(dt(arguments), "remove")
            }
        },
        j = {
            abort: e(function() {
                O._wD(this._s.id + ": abort")
            }),
            canplay: e(function() {
                var t, n = this._s;
                if (n._html5_canplay)
                    return !0;
                if (n._html5_canplay = !0,
                O._wD(n.id + ": canplay"),
                n._onbufferchange(0),
                t = n._iO.position === mt || isNaN(n._iO.position) ? null : n._iO.position / F,
                this.currentTime !== t) {
                    O._wD(n.id + ": canplay: Setting position to " + t);
                    try {
                        this.currentTime = t
                    } catch (e) {
                        O._wD(n.id + ": canplay: Setting position of " + t + " failed: " + e.message, 2)
                    }
                }
                n._iO._oncanplay && n._iO._oncanplay()
            }),
            canplaythrough: e(function() {
                var e = this._s;
                e.loaded || (e._onbufferchange(0),
                e._whileloading(e.bytesLoaded, e.bytesTotal, e._get_html5_duration()),
                e._onload(!0))
            }),
            durationchange: e(function() {
                var e = this._s
                  , t = e._get_html5_duration();
                isNaN(t) || t === e.duration || (O._wD(this._s.id + ": durationchange (" + t + ")" + (e.duration ? ", previously " + e.duration : "")),
                e.durationEstimate = e.duration = t)
            }),
            ended: e(function() {
                var e = this._s;
                O._wD(e.id + ": ended"),
                e._onfinish()
            }),
            error: e(function() {
                O._wD(this._s.id + ": HTML5 error, code " + this.error.code),
                this._s._onload(!1)
            }),
            loadeddata: e(function() {
                var e = this._s;
                O._wD(e.id + ": loadeddata"),
                e._loaded || Ye || (e.duration = e._get_html5_duration())
            }),
            loadedmetadata: e(function() {
                O._wD(this._s.id + ": loadedmetadata")
            }),
            loadstart: e(function() {
                O._wD(this._s.id + ": loadstart"),
                this._s._onbufferchange(1)
            }),
            play: e(function() {
                this._s._onbufferchange(0)
            }),
            playing: e(function() {
                O._wD(this._s.id + ": playing " + String.fromCharCode(9835)),
                this._s._onbufferchange(0)
            }),
            progress: e(function(e) {
                var t, n, i, r, o = this._s, a = "progress" === e.type, s = e.target.buffered, l = e.loaded || 0, u = e.total || 1;
                if (o.buffered = [],
                s && s.length) {
                    for (t = 0,
                    n = s.length; t < n; t++)
                        o.buffered.push({
                            start: s.start(t) * F,
                            end: s.end(t) * F
                        });
                    if (r = (s.end(0) - s.start(0)) * F,
                    l = Math.min(1, r / (e.target.duration * F)),
                    a && 1 < s.length) {
                        for (i = [],
                        n = s.length,
                        t = 0; t < n; t++)
                            i.push(e.target.buffered.start(t) * F + "-" + e.target.buffered.end(t) * F);
                        O._wD(this._s.id + ": progress, timeRanges: " + i.join(", "))
                    }
                    a && !isNaN(l) && O._wD(this._s.id + ": progress, " + Math.floor(100 * l) + "% loaded")
                }
                isNaN(l) || (o._whileloading(l, u, o._get_html5_duration()),
                l && u && l === u && j.canplaythrough.call(this, e))
            }),
            ratechange: e(function() {
                O._wD(this._s.id + ": ratechange")
            }),
            suspend: e(function(e) {
                var t = this._s;
                O._wD(this._s.id + ": suspend"),
                j.progress.call(this, e),
                t._onsuspend()
            }),
            stalled: e(function() {
                O._wD(this._s.id + ": stalled")
            }),
            timeupdate: e(function() {
                this._s._onTimer()
            }),
            waiting: e(function() {
                var e = this._s;
                O._wD(this._s.id + ": waiting"),
                e._onbufferchange(1)
            })
        },
        ge = function(e) {
            e = !(!e || !(e.type || e.url || e.serverURL) || e.serverURL || e.type && ft(e.type)) && (e.type ? me({
                type: e.type
            }) : me({
                url: e.url
            }) || O.html5Only || e.url.match(/data\:/i));
            return e
        }
        ,
        ye = function(e) {
            var t;
            return e && (t = !Ye && O.html5.canPlayType("audio/wav") ? at : ot,
            e.src = t,
            e._called_unload !== mt) && (e._called_load = !1),
            A && (_e = null),
            t
        }
        ,
        me = function(e) {
            if (!O.useHTML5Audio || !O.hasHTML5)
                return !1;
            var t, n, i, r = e.url || null, e = e.type || null, o = O.audioFormats;
            if (e && O.html5[e] !== mt)
                return O.html5[e] && !ft(e);
            if (!s) {
                for (i in s = [],
                o)
                    o.hasOwnProperty(i) && (s.push(i),
                    o[i].related) && (s = s.concat(o[i].related));
                s = new RegExp("\\.(" + s.join("|") + ")(\\?.*)?$","i")
            }
            return (r = r ? r.toLowerCase().match(s) : null) && r.length ? r = r[1] : e ? r = (-1 !== (n = e.indexOf(";")) ? e.substr(0, n) : e).substr(6) : t = !1,
            t = r && O.html5[r] !== mt ? O.html5[r] && !ft(r) : (t = O.html5.canPlayType({
                type: e = "audio/" + r
            }),
            (O.html5[r] = t) && O.html5[e] && !ft(e))
        }
        ,
        be = function() {
            if (!O.useHTML5Audio || !O.hasHTML5)
                return O.html5.usingFlash = !0,
                !(h = !0);
            var e, t, n, o, a = Audio !== mt ? Xe && opera.version() < 10 ? new Audio(null) : new Audio : null, i = {};
            function r(e) {
                var t, n, i = !1, r = !1;
                if (a && "function" == typeof a.canPlayType)
                    if (e instanceof Array) {
                        for (o = 0,
                        n = e.length; o < n; o++)
                            (O.html5[e[o]] || a.canPlayType(e[o]).match(O.html5Test)) && (O.html5[e[o]] = r = !0,
                            O.flash[e[o]] = !!e[o].match(rt));
                        i = r
                    } else
                        i = !(!(t = !(!a || "function" != typeof a.canPlayType) && a.canPlayType(e)) || !t.match(O.html5Test));
                return i
            }
            for (e in n = O.audioFormats)
                if (n.hasOwnProperty(e) && (t = "audio/" + e,
                i[e] = r(n[e].type),
                i[t] = i[e],
                e.match(rt) ? (O.flash[e] = !0,
                O.flash[t] = !0) : (O.flash[e] = !1,
                O.flash[t] = !1),
                n[e]) && n[e].related)
                    for (o = n[e].related.length - 1; 0 <= o; o--)
                        i["audio/" + n[e].related[o]] = i[e],
                        O.html5[n[e].related[o]] = i[e],
                        O.flash[n[e].related[o]] = i[e];
            return i.canPlayType = a ? r : null,
            O.html5 = _(O.html5, i),
            O.html5.usingFlash = he(),
            h = O.html5.usingFlash,
            !0
        }
        ,
        m = {
            notReady: "Unavailable - wait until onready() has fired.",
            notOK: "Audio support is not available.",
            domError: u + "exception caught while appending SWF to DOM.",
            spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
            swf404: c + "Verify that %s is a valid path.",
            tryDebug: "Try " + u + ".debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: c + "Non-HTTP page (" + M.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: c + "Special case: Waiting for SWF to load with window focus...",
            waitForever: c + "Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: c + "Waiting for 100% SWF load...",
            needFunction: c + "Function object expected for %s",
            badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: c + "_debug(): Current sound objects",
            waitOnload: c + "Waiting for window.onload()",
            docLoaded: c + "Document already loaded",
            onload: c + "initComplete(): calling soundManager.onload()",
            onloadOK: u + ".onload() complete",
            didInit: c + "init(): Already called?",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: c + "Failed to remove Flash node.",
            shutdown: u + ".disable(): Shutting down",
            queue: c + "Queueing %s handler",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + k.swfTimedout + " CSS...",
            fbLoaded: "Flash loaded",
            fbHandler: c + "flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: u + ".load(): current URL already assigned.",
            badFV: u + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            needFlash: c + "Fatal error: Flash is needed to play some required formats, but is not available.",
            gotFocus: c + "Got window focus.",
            policy: "Enabling usePolicyFile for data access",
            setup: u + ".setup(): allowed parameters: %s",
            setupError: u + '.setup(): "%s" cannot be assigned with this method.',
            setupUndef: u + '.setup(): Could not find option "%s"',
            setupLate: u + ".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
            noURL: c + "Flash URL required. Call soundManager.setup({url:...}) to get started.",
            sm2Loaded: "SoundManager 2: Ready. " + String.fromCharCode(10003),
            reset: u + ".reset(): Removing event callbacks",
            mobileUA: "Mobile UA detected, preferring HTML5 by default.",
            globalHTML5: "Using singleton HTML5 Audio() pattern for this device.",
            ignoreMobile: "Ignoring mobile restrictions for this device."
        },
        x = function() {
            var e, t, n = We.call(arguments), i = n.shift(), r = m && m[i] ? m[i] : "";
            if (r && n && n.length)
                for (e = 0,
                t = n.length; e < t; e++)
                    r = r.replace("%s", n[e]);
            return r
        }
        ,
        se = function(e) {
            return 8 === y && 1 < e.loops && e.stream && (b("as2loop"),
            e.stream = !1),
            e
        }
        ,
        le = function(e, t) {
            return e && !e.usePolicyFile && (e.onid3 || e.usePeakData || e.useWaveformData || e.useEQData) && (O._wD((t || "") + x("policy")),
            e.usePolicyFile = !0),
            e
        }
        ,
        S = function(e) {
            et && console.warn !== mt ? console.warn(e) : O._wD(e)
        }
        ,
        I = function() {
            return !1
        }
        ,
        ne = function(e) {
            for (var t in e)
                e.hasOwnProperty(t) && "function" == typeof e[t] && (e[t] = I)
        }
        ,
        ie = function(e) {
            e === mt && (e = !1),
            (d || e) && O.disable(e)
        }
        ,
        re = function(e) {
            if (e)
                if (e.match(/\.swf(\?.*)?$/i)) {
                    if (e.substr(e.toLowerCase().lastIndexOf(".swf?") + 4))
                        return e
                } else
                    e.lastIndexOf("/") !== e.length - 1 && (e += "/");
            return e = (e && -1 !== e.lastIndexOf("/") ? e.substr(0, e.lastIndexOf("/") + 1) : "./") + O.movieURL,
            O.noSWFCache && (e += "?ts=" + (new Date).getTime()),
            e
        }
        ,
        Q = function() {
            8 !== (y = parseInt(O.flashVersion, 10)) && 9 !== y && (O._wD(x("badFV", y, He)),
            O.flashVersion = y = He);
            var e = O.debugMode || O.debugFlash ? "_debug.swf" : ".swf";
            O.useHTML5Audio && !O.html5Only && O.audioFormats.mp4.required && y < 9 && (O._wD(x("needfl9")),
            O.flashVersion = y = 9),
            O.version = O.versionNumber + (O.html5Only ? " (HTML5-only mode)" : 9 === y ? " (AS3/Flash 9)" : " (AS2/Flash 8)"),
            8 < y ? (O.defaultOptions = _(O.defaultOptions, O.flash9Options),
            O.features.buffering = !0,
            O.defaultOptions = _(O.defaultOptions, O.movieStarOptions),
            O.filePatterns.flash9 = new RegExp("\\.(mp3|" + ct.join("|") + ")(\\?.*)?$","i"),
            O.features.movieStar = !0) : O.features.movieStar = !1,
            O.filePattern = O.filePatterns[8 !== y ? "flash9" : "flash8"],
            O.movieURL = (8 === y ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", e),
            O.features.peakData = O.features.waveformData = O.features.eqData = 8 < y
        }
        ,
        ee = function(e, t) {
            if (!L)
                return !1;
            L._setPolling(e, t)
        }
        ,
        te = function() {
            if (O.debugURLParam.test(De) && (O.setupOptions.debugMode = O.debugMode = !0),
            g(O.debugID))
                return !1;
            var e, t, n, i, r;
            if (O.debugMode && !g(O.debugID) && (!et || !O.useConsole || !O.consoleOnly)) {
                for (r in (e = M.createElement("div")).id = O.debugID + "-toggle",
                i = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                },
                e.appendChild(M.createTextNode("-")),
                e.onclick = ae,
                e.title = "Toggle SM2 debug console",
                D.match(/msie 6/i) && (e.style.position = "absolute",
                e.style.cursor = "hand"),
                i)
                    i.hasOwnProperty(r) && (e.style[r] = i[r]);
                if ((t = M.createElement("div")).id = O.debugID,
                t.style.display = O.debugMode ? "block" : "none",
                O.debugMode && !g(e.id)) {
                    try {
                        (n = K()).appendChild(e)
                    } catch (e) {
                        throw new Error(x("domError") + " \n" + e.toString())
                    }
                    n.appendChild(t)
                }
            }
        }
        ,
        E = this.getSoundById,
        b = function(e, t) {
            return e ? O._wD(x(e), t) : ""
        }
        ,
        ae = function() {
            var e = g(O.debugID)
              , t = g(O.debugID + "-toggle");
            if (!e)
                return !1;
            Me ? (t.innerHTML = "+",
            e.style.display = "none") : (t.innerHTML = "-",
            e.style.display = "block"),
            Me = !Me
        }
        ,
        v = function(e, t, n) {
            if (gt.sm2Debugger !== mt)
                try {
                    sm2Debugger.handleEvent(e, t, n)
                } catch (e) {
                    return !1
                }
            return !0
        }
        ,
        T = function() {
            var e = [];
            return O.debugMode && e.push(k.sm2Debug),
            O.debugFlash && e.push(k.flashDebug),
            O.useHighPerformance && e.push(k.highPerf),
            e.join(" ")
        }
        ,
        oe = function() {
            var e = x("fbHandler")
              , t = O.getMoviePercent()
              , n = k
              , i = {
                type: "FLASHBLOCK"
            };
            if (O.html5Only)
                return !1;
            O.ok() ? (O.didFlashBlock && O._wD(e + ": Unblocked"),
            O.oMC && (O.oMC.className = [T(), n.swfDefault, n.swfLoaded + (O.didFlashBlock ? " " + n.swfUnblocked : "")].join(" "))) : (h && (O.oMC.className = T() + " " + n.swfDefault + " " + (null === t ? n.swfTimedout : n.swfError),
            O._wD(e + ": " + x("fbTimeout") + (t ? " (" + x("fbLoaded") + ")" : ""))),
            O.didFlashBlock = !0,
            r({
                type: "ontimeout",
                ignoreInit: !0,
                error: i
            }),
            w(i))
        }
        ,
        V = function(e, t, n) {
            p[e] === mt && (p[e] = []),
            p[e].push({
                method: t,
                scope: n || null,
                fired: !1
            })
        }
        ,
        r = function(e) {
            if (e = e || {
                type: O.ok() ? "onready" : "ontimeout"
            },
            !f && e && !e.ignoreInit)
                return !1;
            if ("ontimeout" === e.type && (O.ok() || d && !e.ignoreInit))
                return !1;
            var t, n, i = {
                success: e && e.ignoreInit ? O.ok() : !d
            }, r = e && e.type && p[e.type] || [], o = [], a = [i], s = h && !O.ok();
            for (e.error && (a[0].error = e.error),
            t = 0,
            n = r.length; t < n; t++)
                !0 !== r[t].fired && o.push(r[t]);
            if (o.length)
                for (t = 0,
                n = o.length; t < n; t++)
                    o[t].scope ? o[t].method.apply(o[t].scope, a) : o[t].method.apply(this, a),
                    s || (o[t].fired = !0);
            return !0
        }
        ,
        i = function() {
            gt.setTimeout(function() {
                O.useFlashBlock && oe(),
                r(),
                "function" == typeof O.onload && (b("onload", 1),
                O.onload.apply(gt),
                b("onloadOK", 1)),
                O.waitForWindowLoad && C.add(gt, "load", i)
            }, 1)
        }
        ,
        we = function() {
            if (l !== mt)
                return l;
            var t, e = !1, n = navigator, i = n.plugins, r = gt.ActiveXObject;
            if (i && i.length)
                i = "application/x-shockwave-flash",
                (n = n.mimeTypes) && n[i] && n[i].enabledPlugin && n[i].enabledPlugin.description && (e = !0);
            else if (r !== mt && !D.match(/MSAppHost/i)) {
                try {
                    t = new r("ShockwaveFlash.ShockwaveFlash")
                } catch (e) {
                    t = null
                }
                e = !!t,
                t = null
            }
            return l = e
        }
        ,
        he = function() {
            var e, t, n = O.audioFormats;
            if (Qe && !!D.match(/os (1|2|3_0|3_1)\s/i) ? (O.hasHTML5 = !1,
            O.html5Only = !0,
            O.oMC && (O.oMC.style.display = "none")) : O.useHTML5Audio && (O.html5 && O.html5.canPlayType || (O._wD("SoundManager: No HTML5 Audio() support detected."),
            O.hasHTML5 = !1),
            Ze) && O._wD(c + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (l ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1),
            O.useHTML5Audio && O.hasHTML5)
                for (t in de = !0,
                n)
                    n.hasOwnProperty(t) && n[t].required && (O.html5.canPlayType(n[t].type) ? O.preferFlash && (O.flash[t] || O.flash[n[t].type]) && (e = !0) : e = !(de = !1));
            return O.ignoreFlash && (de = !(e = !1)),
            O.html5Only = O.hasHTML5 && O.useHTML5Audio && !e,
            !O.html5Only
        }
        ,
        fe = function(e) {
            var t, n, i, r = 0;
            if (e instanceof Array) {
                for (t = 0,
                n = e.length; t < n; t++)
                    if (e[t]instanceof Object) {
                        if (O.canPlayMIME(e[t].type)) {
                            r = t;
                            break
                        }
                    } else if (O.canPlayURL(e[t])) {
                        r = t;
                        break
                    }
                e[r].url && (e[r] = e[r].url),
                i = e[r]
            } else
                i = e;
            return i
        }
        ,
        ue = function(e) {
            e._hasTimer || (e._hasTimer = !0,
            !Ke && O.html5PollingInterval && (null === Ve && 0 === $e && (Ve = setInterval(pe, O.html5PollingInterval)),
            $e++))
        }
        ,
        ce = function(e) {
            e._hasTimer && (e._hasTimer = !1,
            !Ke) && O.html5PollingInterval && $e--
        }
        ,
        pe = function() {
            var e;
            if (null !== Ve && !$e)
                return clearInterval(Ve),
                Ve = null,
                !1;
            for (e = O.soundIDs.length - 1; 0 <= e; e--)
                O.sounds[O.soundIDs[e]].isHTML5 && O.sounds[O.soundIDs[e]]._hasTimer && O.sounds[O.soundIDs[e]]._onTimer()
        }
        ,
        w = function(e) {
            e = e !== mt ? e : {},
            "function" == typeof O.onerror && O.onerror.apply(gt, [{
                type: e.type !== mt ? e.type : null
            }]),
            e.fatal !== mt && e.fatal && O.disable()
        }
        ,
        xe = function() {
            if (!Ze || !we())
                return !1;
            var e, t, n = O.audioFormats;
            for (t in n)
                if (n.hasOwnProperty(t) && ("mp3" === t || "mp4" === t) && (O._wD(u + ": Using flash fallback for " + t + " format"),
                O.html5[t] = !1,
                n[t]) && n[t].related)
                    for (e = n[t].related.length - 1; 0 <= e; e--)
                        O.html5[n[t].related[e]] = !1
        }
        ,
        this._setSandboxType = function(e) {
            var t = O.sandbox;
            t.type = e,
            t.description = t.types[t.types[e] !== mt ? e : "unknown"],
            "localWithFile" === t.type ? (t.noRemote = !0,
            t.noLocal = !1,
            b("secNote", 2)) : "localWithNetwork" === t.type ? (t.noRemote = !1,
            t.noLocal = !0) : "localTrusted" === t.type && (t.noRemote = !1,
            t.noLocal = !1)
        }
        ,
        this._externalInterfaceOK = function(e) {
            var t;
            return !O.swfLoaded && (v("swf", !0),
            v("flashtojs", !0),
            O.swfLoaded = !0,
            nt = !1,
            Ze && xe(),
            e && e.replace(/\+dev/i, "") === O.versionNumber.replace(/\+dev/i, "") ? void setTimeout(U, N ? 100 : 1) : (t = u + ': Fatal: JavaScript file build "' + O.versionNumber + '" does not match Flash SWF build "' + e + '" at ' + O.url + ". Ensure both are up-to-date.",
            setTimeout(function() {
                throw new Error(t)
            }, 0),
            !1))
        }
        ,
        Z = function(e, t) {
            if (Pe && Ae)
                return !1;
            function n() {
                var e = []
                  , t = []
                  , n = "SoundManager " + O.version + (!O.html5Only && O.useHTML5Audio ? O.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : "");
                O.html5Only ? O.html5PollingInterval && e.push("html5PollingInterval (" + O.html5PollingInterval + "ms)") : (O.preferFlash && e.push("preferFlash"),
                O.useHighPerformance && e.push("useHighPerformance"),
                O.flashPollingInterval && e.push("flashPollingInterval (" + O.flashPollingInterval + "ms)"),
                O.html5PollingInterval && e.push("html5PollingInterval (" + O.html5PollingInterval + "ms)"),
                O.wmode && e.push("wmode (" + O.wmode + ")"),
                O.debugFlash && e.push("debugFlash"),
                O.useFlashBlock && e.push("flashBlock")),
                e.length && (t = t.concat([e.join(" + ")])),
                O._wD(n + (t.length ? " + " + t.join(", ") : ""), 1),
                Te()
            }
            if (O.html5Only)
                return Q(),
                n(),
                O.oMC = g(O.movieID),
                U(),
                !(Ae = Pe = !0);
            var i, r, o, a, s, l, u, c = t || O.url, p = O.altURL || c, f = K(), d = (T(),
            M.getElementsByTagName("html")[0]);
            function h(e, t) {
                return '<param name="' + e + '" value="' + t + '" />'
            }
            if (d = d && d.dir && d.dir.match(/rtl/i),
            e = e === mt ? O.id : e,
            Q(),
            O.url = re(st ? c : p),
            t = O.url,
            O.wmode = !O.wmode && O.useHighPerformance ? "transparent" : O.wmode,
            null !== O.wmode && (D.match(/msie 8/i) || !N && !O.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (P.push(m.spcWmode),
            O.wmode = null),
            i = {
                name: e,
                id: e,
                src: t,
                quality: "high",
                allowScriptAccess: O.allowScriptAccess,
                bgcolor: O.bgColor,
                pluginspage: lt + "www.macromedia.com/go/getflashplayer",
                title: "JS/Flash audio component (SoundManager 2)",
                type: "application/x-shockwave-flash",
                wmode: O.wmode,
                hasPriority: "true"
            },
            O.debugFlash && (i.FlashVars = "debug=1"),
            O.wmode || delete i.wmode,
            N)
                r = M.createElement("div"),
                a = ['<object id="' + e + '" data="' + t + '" type="' + i.type + '" title="' + i.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', h("movie", t), h("AllowScriptAccess", O.allowScriptAccess), h("quality", i.quality), O.wmode ? h("wmode", O.wmode) : "", h("bgcolor", O.bgColor), h("hasPriority", "true"), O.debugFlash ? h("FlashVars", i.FlashVars) : "", "</object>"].join("");
            else
                for (o in r = M.createElement("embed"),
                i)
                    i.hasOwnProperty(o) && r.setAttribute(o, i[o]);
            if (te(),
            c = T(),
            f = K())
                if (O.oMC = g(O.movieID) || M.createElement("div"),
                O.oMC.id)
                    p = O.oMC.className,
                    O.oMC.className = (p ? p + " " : k.swfDefault) + (c ? " " + c : ""),
                    O.oMC.appendChild(r),
                    N && ((s = O.oMC.appendChild(M.createElement("div"))).className = k.swfBox,
                    s.innerHTML = a),
                    Ae = !0;
                else {
                    if (O.oMC.id = O.movieID,
                    O.oMC.className = k.swfDefault + " " + c,
                    s = l = null,
                    O.useFlashBlock || (O.useHighPerformance ? l = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : (l = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px"
                    },
                    d && (l.left = Math.abs(parseInt(l.left, 10)) + "px"))),
                    Ge && (O.oMC.style.zIndex = 1e4),
                    !O.debugFlash)
                        for (u in l)
                            l.hasOwnProperty(u) && (O.oMC.style[u] = l[u]);
                    try {
                        N || O.oMC.appendChild(r),
                        f.appendChild(O.oMC),
                        N && ((s = O.oMC.appendChild(M.createElement("div"))).className = k.swfBox,
                        s.innerHTML = a),
                        Ae = !0
                    } catch (e) {
                        throw new Error(x("domError") + " \n" + e.toString())
                    }
                }
            return Pe = !0,
            n(),
            !0
        }
        ,
        G = function() {
            return O.html5Only ? (Z(),
            !1) : !L && (O.url ? ((L = O.getMovie(O.id)) || (Ie ? (N ? O.oMC.innerHTML = Be : O.oMC.appendChild(Ie),
            Pe = !(Ie = null)) : Z(O.id, O.url),
            L = O.getMovie(O.id)),
            "function" == typeof O.oninitmovie && setTimeout(O.oninitmovie, 1),
            ke(),
            !0) : (b("noURL"),
            !1))
        }
        ,
        o = function() {
            setTimeout(W, 1e3)
        }
        ,
        z = function() {
            gt.setTimeout(function() {
                S(c + "useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false..."),
                O.setup({
                    preferFlash: !1
                }).reboot(),
                O.didFlashBlock = !0,
                O.beginDelayedInit()
            }, 1)
        }
        ,
        W = function() {
            var e, t = !1;
            return !!O.url && !Ue && (Ue = !0,
            C.remove(gt, "load", o),
            l && nt && !tt ? (b("waitFocus"),
            !1) : (f || 0 < (e = O.getMoviePercent()) && e < 100 && (t = !0),
            void setTimeout(function() {
                if (e = O.getMoviePercent(),
                t)
                    return Ue = !1,
                    O._wD(x("waitSWF")),
                    gt.setTimeout(o, 1),
                    !1;
                f || (O._wD(u + ": No Flash response within expected time. Likely causes: " + (0 === e ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (O.debugFlash ? " " + x("checkSWF") : ""), 2),
                !st && e && (b("localFail", 2),
                O.debugFlash || b("tryDebug", 2)),
                0 === e && O._wD(x("swf404", O.url), 1),
                v("flashtojs", !1, ": Timed out" + (st ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)"))),
                !f && it && (null === e ? O.useFlashBlock || 0 === O.flashLoadTimeout ? (O.useFlashBlock && oe(),
                b("waitForever")) : !O.useFlashBlock && de ? z() : (b("waitForever"),
                r({
                    type: "ontimeout",
                    ignoreInit: !0,
                    error: {
                        type: "INIT_FLASHBLOCK"
                    }
                })) : 0 === O.flashLoadTimeout ? b("waitForever") : !O.useFlashBlock && de ? z() : ie(!0))
            }, O.flashLoadTimeout)))
        }
        ,
        J = function() {
            function e() {
                C.remove(gt, "focus", J)
            }
            return tt || !nt ? e() : (tt = it = !0,
            b("gotFocus"),
            Ue = !1,
            o(),
            e()),
            !0
        }
        ,
        ke = function() {
            P.length && (O._wD("SoundManager 2: " + P.join(" "), 1),
            P = [])
        }
        ,
        Te = function() {
            ke();
            var e, t = [];
            if (O.useHTML5Audio && O.hasHTML5) {
                for (e in O.audioFormats)
                    O.audioFormats.hasOwnProperty(e) && t.push(e + " = " + O.html5[e] + (!O.html5[e] && h && O.flash[e] ? " (using flash)" : O.preferFlash && O.flash[e] && h ? " (preferring flash)" : O.html5[e] ? "" : " (" + (O.audioFormats[e].required ? "required, " : "") + "and no flash support)"));
                O._wD("SoundManager 2 HTML5 support: " + t.join(", "), 1)
            }
        }
        ,
        n = function(e) {
            var t, n;
            return !f && (O.html5Only ? (b("sm2Loaded", 1),
            f = !0,
            i(),
            v("onload", !0),
            !0) : (t = !0,
            O.useFlashBlock && O.flashLoadTimeout && !O.getMoviePercent() || (f = !0),
            n = {
                type: !l && h ? "NO_FLASH" : "INIT_TIMEOUT"
            },
            O._wD("SoundManager 2 " + (d ? "failed to load" : "loaded") + " (" + (d ? "Flash security/load error" : "OK") + ") " + String.fromCharCode(d ? 10006 : 10003), d ? 2 : 1),
            d || e ? (O.useFlashBlock && O.oMC && (O.oMC.className = T() + " " + (null === O.getMoviePercent() ? k.swfTimedout : k.swfError)),
            r({
                type: "ontimeout",
                error: n,
                ignoreInit: !0
            }),
            v("onload", !1),
            w(n),
            t = !1) : v("onload", !0),
            d || (O.waitForWindowLoad && !Fe ? (b("waitOnload"),
            C.add(gt, "load", i)) : (O.waitForWindowLoad && Fe && b("docLoaded"),
            i())),
            t))
        }
        ,
        B = function() {
            var e, t = O.setupOptions;
            for (e in t)
                t.hasOwnProperty(e) && (O[e] === mt ? O[e] = t[e] : O[e] !== t[e] && (O.setupOptions[e] = O[e]))
        }
        ,
        U = function() {
            if (f)
                return b("didInit"),
                !1;
            function e() {
                C.remove(gt, "load", O.beginDelayedInit)
            }
            if (O.html5Only)
                f || (e(),
                O.enabled = !0,
                n());
            else {
                G();
                try {
                    L._externalInterfaceTest(!1),
                    ee(!0, O.flashPollingInterval || (O.useHighPerformance ? 10 : 50)),
                    O.debugMode || L._disableDebug(),
                    O.enabled = !0,
                    v("jstoflash", !0),
                    O.html5Only || C.add(gt, "unload", I)
                } catch (e) {
                    return O._wD("js/flash exception: " + e.toString()),
                    v("jstoflash", !1),
                    w({
                        type: "JS_TO_FLASH_EXCEPTION",
                        fatal: !0
                    }),
                    ie(!0),
                    n(),
                    !1
                }
                n(),
                e()
            }
            return !0
        }
        ,
        a = function() {
            return !X && (X = !0,
            B(),
            te(),
            !l && O.hasHTML5 && (O._wD("SoundManager 2: No Flash detected" + (O.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1),
            O.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            })),
            be(),
            !l && h && (P.push(m.needFlash),
            O.setup({
                flashLoadTimeout: 1
            })),
            M.removeEventListener && M.removeEventListener("DOMContentLoaded", a, !1),
            G(),
            !0)
        }
        ,
        ve = function() {
            return "complete" === M.readyState && (a(),
            M.detachEvent("onreadystatechange", ve)),
            !0
        }
        ,
        Y = function() {
            Fe = !0,
            a(),
            C.remove(gt, "load", Y)
        }
        ,
        we(),
        C.add(gt, "focus", J),
        C.add(gt, "load", o),
        C.add(gt, "load", Y),
        M.addEventListener ? M.addEventListener("DOMContentLoaded", a, !1) : M.attachEvent ? M.attachEvent("onreadystatechange", ve) : (v("onload", !1),
        w({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        }))
    }
    gt.SM2_DEFER !== mt && SM2_DEFER || (e = new t),
    "object" == typeof module && module && "object" == typeof module.exports ? (module.exports.SoundManager = t,
    module.exports.soundManager = e) : "function" == typeof define && define.amd && define(function() {
        return {
            constructor: t,
            getInstance: function(e) {
                return !gt.soundManager && e instanceof Function && (e = e(t))instanceof t && (gt.soundManager = e),
                gt.soundManager
            }
        }
    }),
    gt.SoundManager = t,
    gt.soundManager = e
}(window),
Date.prototype.toISOString || !function() {
    function e(e) {
        return e < 10 ? "0" + e : e
    }
    Date.prototype.toISOString = function() {
        return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
    }
}(),
!function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.polly = t()
}(this, function() {
    "use strict";
    var r = {
        delay: 100
    };
    function n(r, e) {
        var o = 0;
        return new Promise(function(n, i) {
            !function t() {
                e({
                    count: o
                }).then(function(e) {
                    n(e)
                }, function(e) {
                    o < r.count && r.handleFn(e) ? (o++,
                    t()) : i(e)
                })
            }()
        }
        )
    }
    function i(r, e) {
        var o = 0;
        return new Promise(function(t, i) {
            !function n() {
                e({
                    count: o
                }).then(function(e) {
                    t(e)
                }, function(e) {
                    var t = r.delays.shift();
                    t && r.handleFn(e) ? (o++,
                    setTimeout(n, t)) : i(e)
                })
            }()
        }
        )
    }
    function o(i, r, o) {
        var a = 0;
        r(function e(t, n) {
            t && a < i.count && i.handleFn(t) ? r(e, {
                count: ++a
            }) : o(t, n)
        }, {
            count: a
        })
    }
    function a(r, o, a) {
        var s = 0;
        o(function e(t, n) {
            var i = r.delays.shift();
            t && i && r.handleFn(t) ? (s++,
            setTimeout(function() {
                o(e, {
                    count: s
                })
            }, i)) : a(t, n)
        }, {
            count: s
        })
    }
    function e() {
        var t = {
            count: 1,
            delays: [r.delay],
            handleFn: function() {
                return !0
            }
        };
        return {
            handle: function(e) {
                return "function" == typeof e && (t.handleFn = e),
                this
            },
            retry: function(e) {
                return "number" == typeof e && (t.count = e),
                {
                    execute: function(t, e) {
                        for (var n = 0; ; )
                            try {
                                return e({
                                    count: n
                                })
                            } catch (e) {
                                if (!(n < t.count && t.handleFn(e)))
                                    throw e;
                                n++
                            }
                    }
                    .bind(null, t),
                    executeForPromise: n.bind(null, t),
                    executeForNode: o.bind(null, t)
                }
            },
            waitAndRetry: function(e) {
                return "number" == typeof e && (e = function(e) {
                    for (var t = [], n = r.delay, i = 0; i < e; i++)
                        t.push(n),
                        n *= 2;
                    return t
                }(e)),
                Array.isArray(e) && (t.delays = e),
                {
                    executeForPromise: i.bind(null, t),
                    executeForNode: a.bind(null, t)
                }
            }
        }
    }
    return e.defaults = r,
    e
});
