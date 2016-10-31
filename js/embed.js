//HelloDog -  http://wsgzao.github.io/post/duoshuo/
//More info: http://moxfive.xyz/2015/09/29/duosuo-style
//&#x79FB;&#x52A8;&#x5BA2;&#x6237;&#x7AEF;&#x5224;&#x65AD;&#x5F00;&#x59CB;
function checkMobile() {
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    if (isiPad) {
        return false;
    }
    var isMobile = navigator.userAgent.match(/iphone|android|phone|mobile|wap|netfront|java|opera mobi|opera mini|ucweb|windows ce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220/i) != null;
    if (isMobile) {
        return true;
    }
    return false;
}
//&#x79FB;&#x52A8;&#x5BA2;&#x6237;&#x7AEF;&#x5224;&#x65AD;&#x7ED3;&#x675F;
//&#x7BA1;&#x7406;&#x5458;&#x5224;&#x65AD;&#x5F00;&#x59CB;
function sskadmin(e) {
    var ssk = &apos;&apos;;
    if (e.user_id == 6290274593831650049) {
        if (checkMobile()) {
            ssk = &apos;<span class="ua"><span class="sskadmin">&#x535A;&#x4E3B;</span></span><br><br>&apos;;
        } else {
            ssk = &apos;<span class="ua"><span class="sskadmin">&#x535A;&#x4E3B;</span></span>&apos;;
        }
    } else {
        if (checkMobile()) {
            ssk = &apos;<br><br>&apos;;
        }
    }
    return ssk;
}
//&#x7BA1;&#x7406;&#x5458;&#x5224;&#x65AD;&#x7ED3;&#x675F;
//&#x663E;UA&#x5F00;&#x59CB;
function ua(e) {
    var r = new Array;
    var outputer = &apos;&apos;;
    if (r = e.match(/FireFox\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_firefox"><i class="fa fa-firefox"></i> FireFox&apos;
    } else if (r = e.match(/Maxthon([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_maxthon"><i class="fa fa-globe"></i> Maxthon&apos;
    } else if (r = e.match(/BIDUBrowser([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_ucweb"><i class="fa fa-globe"></i> &#x767E;&#x5EA6;&#x6D4F;&#x89C8;&#x5668;&apos;
    } else if (r = e.match(/UBrowser([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_ucweb"><i class="fa fa-globe"></i> UCBrowser&apos;
    } else if (r = e.match(/UCBrowser([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_ucweb"><i class="fa fa-globe"></i> UCBrowser&apos;
    } else if (r = e.match(/MetaSr/ig)) {
        outputer = &apos;<span class="ua_sogou"><i class="fa fa-globe"></i> &#x641C;&#x72D7;&#x6D4F;&#x89C8;&#x5668;&apos;
    } else if (r = e.match(/2345Explorer/ig)) {
        outputer = &apos;<span class="ua_2345explorer"><i class="fa fa-globe"></i> 2345&#x738B;&#x724C;&#x6D4F;&#x89C8;&#x5668;&apos;
    } else if (r = e.match(/2345chrome/ig)) {
        outputer = &apos;<span class="ua_2345chrome"><i class="fa fa-globe"></i> 2345&#x52A0;&#x901F;&#x6D4F;&#x89C8;&#x5668;&apos;
    } else if (r = e.match(/LBBROWSER/ig)) {
        outputer = &apos;<span class="ua_lbbrowser"><i class="fa fa-globe"></i> &#x730E;&#x8C79;&#x5B89;&#x5168;&#x6D4F;&#x89C8;&#x5668;&apos;
    } else if (r = e.match(/MicroMessenger\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_qq"><i class="fa fa-weixin"></i> &#x5FAE;&#x4FE1;&apos;
        /*.split(&apos;/&apos;)[0]*/
    } else if (r = e.match(/QQBrowser\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_qq"><i class="fa fa-qq"></i> QQ&#x6D4F;&#x89C8;&#x5668;&apos;
        /*.split(&apos;/&apos;)[0]*/
    } else if (r = e.match(/QQ\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_qq"><i class="fa fa-qq"></i> QQ&#x6D4F;&#x89C8;&#x5668;&apos;
        /*.split(&apos;/&apos;)[0]*/
    } else if (r = e.match(/MiuiBrowser\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_mi"><i class="fa fa-globe"></i> Miui&#x6D4F;&#x89C8;&#x5668;&apos;
        /*.split(&apos;/&apos;)[0]*/
    } else if (r = e.match(/Chrome([\d]*)\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_chrome"><i class="fa fa-chrome"></i> Chrome&apos;
        /*.split(&apos;.&apos;)[0]*/
    } else if (r = e.match(/safari\/([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_apple"><i class="fa fa-safari"></i> Safari&apos;
    } else if (r = e.match(/Opera[\s|\/]([^\s]+)/ig)) {
        var r1 = r[0].split(&quot;/&quot;);
        outputer = &apos;<span class="ua_opera"><i class="fa fa-opera"></i> Opera&apos;
    } else if (r = e.match(/Trident\/7.0/gi)) {
        outputer = &apos;<span class="ua_ie"><i class="fa fa-internet-explorer"></i> IE 11&apos;
    } else if (r = e.match(/MSIE\s([^\s|;]+)/gi)) {
        outputer = &apos;<span class="ua_ie"><i class="fa fa-internet-explorer"></i> IE&apos; + &apos; &apos; + r[0]
        /*.replace(&apos;MSIE&apos;, &apos;&apos;).split(&apos;.&apos;)[0]*/
    } else {
        outputer = &apos;<span class="ua_other"><i class="fa fa-globe"></i> &#x5176;&#x5B83;&#x6D4F;&#x89C8;&#x5668;&apos;
    }
    if (checkMobile()) {
        Mobile = &apos;<br><br>&apos;;
    } else {
        Mobile = &apos;&apos;;
    }
    return outputer + &quot;</span>&quot; + Mobile;
}
function os(e) {
    var os = &apos;&apos;;
    if (e.match(/win/ig)) {
        if (e.match(/nt 5.1/ig)) {
            os = &apos;<span class="os_xp"><i class="fa fa-windows"></i> Windows XP&apos;
        } else if (e.match(/nt 6.1/ig)) {
            os = &apos;<span class="os_7"><i class="fa fa-windows"></i> Windows 7&apos;
        } else if (e.match(/nt 6.2/ig)) {
            os = &apos;<span class="os_8"><i class="fa fa-windows"></i> Windows 8&apos;
        } else if (e.match(/nt 6.3/ig)) {
            os = &apos;<span class="os_8_1"><i class="fa fa-windows"></i> Windows 8.1&apos;
        } else if (e.match(/nt 10.0/ig)) {
            os = &apos;<span class="os_8_1"><i class="fa fa-windows"></i> Windows 10&apos;
        } else if (e.match(/nt 6.0/ig)) {
            os = &apos;<span class="os_vista"><i class="fa fa-windows"></i> Windows Vista&apos;
        } else if (e.match(/nt 5/ig)) {
            os = &apos;<span class="os_2000"><i class="fa fa-windows"></i> Windows 2000&apos;
        } else {
            os = &apos;<span class="os_windows"><i class="fa fa-windows"></i> Windows&apos;
        }
    } else if (e.match(/android/ig)) {
        os = &apos;<span class="os_android"><i class="fa fa-android"></i> Android&apos;
    } else if (e.match(/ubuntu/ig)) {
        os = &apos;<span class="os_ubuntu"><i class="fa fa-desktop"></i> Ubuntu&apos;
    } else if (e.match(/linux/ig)) {
        os = &apos;<span class="os_linux"><i class="fa fa-linux"></i> Linux&apos;
    } else if (e.match(/mac/ig)) {
        os = &apos;<span class="os_mac"><i class="fa fa-apple"></i> Mac OS X&apos;
    } else if (e.match(/unix/ig)) {
        os = &apos;<span class="os_unix"><i class="fa fa-desktop"></i> Unix&apos;
    } else if (e.match(/symbian/ig)) {
        os = &apos;<span class="os_nokia"><i class="fa fa-mobile"></i> Nokia SymbianOS&apos;
    } else {
        os = &apos;<span class="os_other"><i class="fa fa-desktop"></i> &#x5176;&#x5B83;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&apos;
    }
    return os + &quot;</span>&quot;;
}
//&#x663E;UA&#x7ED3;&#x675F;

(function(e, t, n) {
    function at(e, t) {
        for (var n in t) t[n] &amp;&amp; (e[n] ? e[n].set(t[n]) : e[n] = new et(t[n]))
    }
    function ft(e, t) {
        for (var n in t) e[n] = t[n]
    }
    function lt() {
        if (u.checkPermission()) return;
        var t;
        while (t = O.shift()) {
            var n = u.createNotification(t.iconUrl, t.title, t.body),
            i = t.url;
            try {
                n.onclick = function() {
                    e.focus(),
                    r.href = i,
                    n.cancel()
                }
            } catch(s) {}
            n.show(),
            setTimeout(function() {
                n.cancel &amp;&amp; n.cancel()
            },
            8e3)
        }
    }
    function ct() {
        return rt.data.user_id == 0
    }
    function ht(e, t, n) {
        if (o) try {
            o.removeItem(e),
            o.removeItem(e + &quot;:timestamp&quot;),
            o[e] = i.stringify(t),
            o[e + &quot;:timestamp&quot;] = Math.floor(n)
        } catch(r) {}
    }
    function pt(e) {
        w.theme = e,
        e != &quot;none&quot; &amp;&amp; w.injectStylesheet(b + &quot;/styles/embed&quot; + (e ? &quot;.&quot; + e + &quot;.css?&quot; + y[e] : &quot;.&quot; + short_name) + &quot;.css&quot;)
    }
    if (e.DUOSHUO) return;
    var r = e.location,
    i = e.JSON,
    s = e.XMLHttpRequest,
    o = i &amp;&amp; i.stringify &amp;&amp; e.localStorage,
    u = e.webkitNotifications,
    a = t.getElementsByTagName(&quot;head&quot;)[0] || t.getElementsByTagName(&quot;body&quot;)[0],
    f = e.navigator.userAgent,
    l = t.location.protocol == &quot;https:&quot; ? &quot;https:&quot;: &quot;http:&quot;,
    c = 0,
    h,
    p = function() {
        var e = {
            &quot;<": "&lt;",="" "="">&quot;: &quot;&gt;&quot;,
            &apos;&quot;&apos;: &quot;&quot;&quot;,
            &quot;&apos;&quot;: &quot;&apos;&quot;,
            &quot;`&quot;: &quot;`&quot;
        },
        t = /&amp;(?!\w+;)|[&lt;&gt;&quot;&apos;`]/g,
        n = /[&amp;&lt;&gt;&quot;&apos;`]/,
        r = function(t) {
            return e[t] || &quot;&amp;&quot;
        };
        return function(e) {
            return e == null || e === !1 ? &quot;&quot;: n.test(e) ? e.replace(t, r) : e
        }
    } (),
    d = function(e) {
        if (e.match(/^(http|https):/)) return e;
        var n = t.createElement(&quot;a&quot;);
        return n.href = e,
        x.hrefNormalized ? n.href: n.getAttribute(&quot;href&quot;, 4)
    },
    v = {
        start: 0,
        end: 0
    },
    m = function(e) {
        var n = this,
        r = 0,
        i = 0,
        s, o, u, a, f;
        t.selection &amp;&amp; (o = t.selection.createRange(), o &amp;&amp; o.parentElement() == n &amp;&amp; (a = n.value.length, s = n.value.replace(/\r\n/g, &quot;\n&quot;), u = n.createTextRange(), u.moveToBookmark(o.getBookmark()), f = n.createTextRange(), f.collapse(!1), u.compareEndPoints(&quot;StartToEnd&quot;, f) &gt; -1 ? r = i = a: (r = -u.moveStart(&quot;character&quot;, -a), r += s.slice(0, r).split(&quot;\n&quot;).length - 1, u.compareEndPoints(&quot;EndToEnd&quot;, f) &gt; -1 ? i = a: (i = -u.moveEnd(&quot;character&quot;, -a), i += s.slice(0, i).split(&quot;\n&quot;).length - 1)))),
        v.start = r,
        v.end = i
    },
    g = function(e) {
        return function() {
            return e
        }
    },
    y = {
        &quot;default&quot;: &quot;d6149e1c&quot;,
        dark: &quot;c11b5925&quot;,
        bluebox: &quot;dbc0a9af&quot;
    },
    b = l + &quot;//static.duoshuo.com&quot;,
    w = e.DUOSHUO = {
        DOMAIN: &quot;duoshuo.com&quot;,
        REMOTE: &quot;http://duoshuo.com&quot;,
        version: 140327,
        loaded: {
            jQuery: typeof jQuery != &quot;undefined&quot; &amp;&amp; jQuery.fn.jquery &gt;= &quot;1.5&quot;,
            smilies: !1,
            mzadxN: typeof mzadxN != &quot;undefined&quot;
        },
        libs: {
            jQuery: b + &quot;/libs/embed.compat.js?24f8ca3f.js&quot;,
            smilies: b + &quot;/libs/smilies.js?921e8eda.js&quot;,
            mzadxN: &quot;http://js.miaozhen.com/mz_ad_serving.js&quot;
        },
        sourceName: {
            weibo: &quot;\u65b0\u6d6a\u5fae\u535a&quot;,
            qq: &quot;QQ&quot;,
            qzone: &quot;QQ\u7a7a\u95f4&quot;,
            qqt: &quot;\u817e\u8baf\u5fae\u535a&quot;,
            renren: &quot;\u4eba\u4eba\u7f51&quot;,
            douban: &quot;\u8c46\u74e3\u7f51&quot;,
            netease: &quot;\u7f51\u6613\u5fae\u535a&quot;,
            kaixin: &quot;\u5f00\u5fc3\u7f51&quot;,
            sohu: &quot;\u641c\u72d0\u5fae\u535a&quot;,
            baidu: &quot;\u767e\u5ea6&quot;,
            taobao: &quot;\u6dd8\u5b9d&quot;,
            msn: &quot;MSN&quot;,
            google: &quot;\u8c37\u6b4c&quot;
        },
        serviceNames: {
            weibo: &quot;\u5fae\u535a&quot;,
            qq: &quot;QQ&quot;,
            douban: &quot;\u8c46\u74e3&quot;,
            renren: &quot;\u4eba\u4eba&quot;,
            netease: &quot;\u7f51\u6613&quot;,
            kaixin: &quot;\u5f00\u5fc3&quot;,
            sohu: &quot;\u641c\u72d0&quot;,
            baidu: &quot;\u767e\u5ea6&quot;,
            taobao: &quot;\u6dd8\u5b9d&quot;,
            msn: &quot;MSN&quot;,
            google: &quot;\u8c37\u6b4c&quot;
        },
        parseDate: function(e) {
            return e.parse(&quot;2011-10-28T00:00:00+08:00&quot;) &amp;&amp;
            function(t) {
                return new e(t)
            } || e.parse(&quot;2011/10/28T00:00:00+0800&quot;) &amp;&amp;
            function(t) {
                return new e(t.replace(/-/g, &quot;/&quot;).replace(/:(\d\d)$/, &quot;$1&quot;))
            } || e.parse(&quot;2011/10/28 00:00:00+0800&quot;) &amp;&amp;
            function(t) {
                return new e(t.replace(/-/g, &quot;/&quot;).replace(/:(\d\d)$/, &quot;$1&quot;).replace(&quot;T&quot;, &quot; &quot;))
            } ||
            function(t) {
                return new e(t)
            }
        } (Date),
        fullTime: function(e) {
            var t = w.parseDate(e);
            return t.getFullYear() + &quot;\u5e74&quot; + (t.getMonth() + 1) + &quot;\u6708&quot; + t.getDate() + &quot;\u65e5 &quot; + t.toLocaleTimeString()
        },
        elapsedTime: function(e) {
            var t = w.parseDate(e),
            n = new Date,
            r = (n - c - t) / 1e3;
            return r &lt; 10 ? &quot;\u521a\u521a&quot;: r &lt; 60 ? Math.round(r) + &quot;\u79d2\u524d&quot;: r &lt; 3600 ? Math.round(r / 60) + &quot;\u5206\u949f\u524d&quot;: r &lt; 86400 ? Math.round(r / 3600) + &quot;\u5c0f\u65f6\u524d&quot;: (n.getFullYear() == t.getFullYear() ? &quot;&quot;: t.getFullYear() + &quot;\u5e74&quot;) + (t.getMonth() + 1) + &quot;\u6708&quot; + t.getDate() + &quot;\u65e5&quot;
        },
        require: function(e, t) {
            if (typeof e == &quot;string&quot;) w.loaded[e] ? t() : F(w.libs[e],
            function() {
                w.loaded[e] = !0,
                t()
            });
            else if (typeof e == &quot;object&quot;) {
                var n, r = !0;
                for (n = 0; n &lt; e.length; n++)(function(i) {
                    if (w.loaded[e[n]]) return;
                    r = !1,
                    F(w.libs[i],
                    function() {
                        w.loaded[i] = !0;
                        for (var n = 0; n &lt; e.length; n++) if (!w.loaded[e[n]]) return;
                        t()
                    })
                })(e[n]);
                r &amp;&amp; t()
            }
        },
        getCookie: function(e) {
            var r = &quot; &quot; + e + &quot;=&quot;,
            i = t.cookie.split(&quot;;&quot;),
            s = 0,
            o,
            u,
            a;
            for (; s &lt; i.length; s++) {
                o = &quot; &quot; + i[s],
                u = o.indexOf(r);
                if (u &gt;= 0 &amp;&amp; u + r.length == (a = o.indexOf(&quot;=&quot;) + 1)) return decodeURIComponent(o.substring(a, o.length).replace(/\+/g, &quot;&quot;))
            }
            return n
        },
        param: function(e) {
            var t = [];
            for (var r in e) e[r] != n &amp;&amp; t.push(r + &quot;=&quot; + encodeURIComponent(e[r]));
            return t.join(&quot;&amp;&quot;)
        },
        ajax: function(e, t, r, o, u) {
            var a = w.getCookie(&quot;duoshuo_token&quot;);
            r.v = w.version,
            a ? r.jwt = a: z.remote_auth &amp;&amp; (r.remote_auth = z.remote_auth);
            if (s &amp;&amp; i &amp;&amp; i.parse) {
                var f = new s;
                if ( !! f &amp;&amp; &quot;withCredentials&quot; in f) {
                    var l;
                    function c(e, t, n, r) {
                        var s, a, f, l = t;
                        if (e &gt;= 200 &amp;&amp; e &lt; 300 || e === 304) if (e === 304) l = &quot;notmodified&quot;,
                        s = !0;
                        else try {
                            a = i.parse(n),
                            l = &quot;success&quot;,
                            s = !0
                        } catch(c) {
                            l = &quot;parsererror&quot;,
                            f = c
                        } else {
                            f = l;
                            if (!l || e) l = &quot;error&quot;,
                            e &lt; 0 &amp;&amp; (e = 0);
                            try {
                                a = i.parse(n)
                            } catch(c) {
                                l = &quot;parsererror&quot;,
                                f = c
                            }
                        }
                        s ? o(a) : l === &quot;parseerror&quot; ? I(&quot;\u89e3\u6790\u9519\u8bef: &quot; + n) : (u &amp;&amp; u(a), I(&quot;\u51fa\u9519\u5566(&quot; + a.code + &quot;): &quot; + a.errorMessage), a.errorTrace &amp;&amp; I(a.errorTrace))
                    }
                    f.open(e, w.hostUrl + t + &quot;.json&quot; + (e == &quot;GET&quot; ? &quot;?&quot; + w.param(r) : &quot;&quot;), !0),
                    f.withCredentials = !0,
                    f.setRequestHeader(&quot;Content-Type&quot;, &quot;application/x-www-form-urlencoded; charset=UTF-8&quot;),
                    f.send(e == &quot;GET&quot; ? null: w.param(r)),
                    l = function(e, t) {
                        var r, i, s, o;
                        try {
                            if (l &amp;&amp; (t || f.readyState === 4)) {
                                l = n;
                                if (t) f.readyState !== 4 &amp;&amp; f.abort();
                                else {
                                    r = f.status,
                                    s = f.getAllResponseHeaders();
                                    try {
                                        o = f.responseText
                                    } catch(e) {}
                                    try {
                                        i = f.statusText
                                    } catch(u) {
                                        i = &quot;&quot;
                                    }
                                }
                            }
                        } catch(a) {
                            t || c( - 1, a)
                        }
                        o &amp;&amp; c(r, i, o, s)
                    },
                    f.readyState === 4 ? l() : f.onreadystatechange = l;
                    return
                }
            }
            e != &quot;GET&quot; &amp;&amp; (r._method = &quot;POST&quot;);
            var h = &quot;cb_&quot; + Math.round(Math.random() * 1e6);
            w[h] = function(e) {
                switch (e.code) {
                case 0:
                    o(e);
                    break;
                default:
                    u &amp;&amp; u(e),
                    I(&quot;\u51fa\u9519\u5566(&quot; + e.code + &quot;): &quot; + e.errorMessage),
                    e.errorTrace &amp;&amp; I(e.errorTrace)
                }
            },
            r.callback = &quot;DUOSHUO[&apos;&quot; + h + &quot;&apos;]&quot;,
            F(w.hostUrl + t + &quot;.jsonp?&quot; + w.param(r))
        },
        injectStylesheet: function(e) {
            var n = t.createElement(&quot;link&quot;);
            n.type = &quot;text/css&quot;,
            n.rel = &quot;stylesheet&quot;,
            n.href = e,
            a.appendChild(n)
        },
        setCustomStyle: function(e) {
            h || (h = t.createElement(&quot;style&quot;), h.type = &quot;text/css&quot;, a.appendChild(h)),
            e = e.replace(/\}/g, &quot;}\n&quot;);
            if (h.styleSheet) h.styleSheet.cssText = e;
            else {
                while (h.firstChild) h.removeChild(h.firstChild);
                h.appendChild(t.createTextNode(e))
            }
        },
        compileStyle: function(e) {
            var t = &quot;&quot;,
            n = {
                textbox: &quot;#ds-thread #ds-reset .ds-replybox .ds-textarea-wrapper&quot;
            };
            if (e) for (var r in e) t += n[r] + &quot;{&quot; + e[r] + &quot;}\n&quot;;
            return t
        },
        init: function(e, t) {
            e &amp;&amp; !N[e] &amp;&amp; (N[e] = t || {
                type: &quot;EmbedThread&quot;
            }),
            w.initView &amp;&amp; w.initView()
        }
    },
    E = t.all,
    S,
    x = w.support = function() {
        var n = t.createElement(&quot;div&quot;);
        n.innerHTML = &apos;<a href="/a">a</a><input type="checkbox">&apos;;
        var i = n.getElementsByTagName(&quot;a&quot;)[0],
        o = n.getElementsByTagName(&quot;input&quot;)[0],
        u = {
            placeholder: &quot;placeholder&quot; in o,
            touch: &quot;ontouchstart&quot; in e || &quot;onmsgesturechange&quot; in e,
            hrefNormalized: i.getAttribute(&quot;href&quot;) === &quot;/a&quot;,
            iOS: f.match(/ \((iPad|iPhone|iPod);( U;)? CPU( iPhone)? OS /),
            android: f.match(/ \(Linux; U; Android /)
        };
        return S = !s &amp;&amp; typeof n.style.maxHeight == &quot;undefined&quot;,
        u.authInWin = e.postMessage &amp;&amp; e.screen.width &gt; 800 &amp;&amp; !u.iOS &amp;&amp; !u.android &amp;&amp; r.origin,
        u
    } (),
    T = function(e, n) {
        var r = (t.body || t.documentElement).style;
        if (typeof r == &quot;undefined&quot;) return ! 1;
        if (typeof r[e] == &quot;string&quot;) return n ? e: !0;
        var i = [&quot;Moz&quot;, &quot;Webkit&quot;, &quot;ms&quot;],
        e = e.charAt(0).toUpperCase() + e.substr(1),
        s = 0;
        for (; s &lt; i.length; s++) if (typeof r[i[s] + e] == &quot;string&quot;) return n ? i[s] + e: !0
    },
    N = w.selectors = {
        &quot;.ds-thread&quot;: {
            type: &quot;EmbedThread&quot;
        },
        &quot;.ds-recent-comments&quot;: {
            type: &quot;RecentComments&quot;
        },
        &quot;.ds-recent-visitors&quot;: {
            type: &quot;RecentVisitors&quot;
        },
        &quot;.ds-top-users&quot;: {
            type: &quot;TopUsers&quot;
        },
        &quot;.ds-top-threads&quot;: {
            type: &quot;TopThreads&quot;
        },
        &quot;.ds-login&quot;: {
            type: &quot;LoginWidget&quot;
        },
        &quot;.ds-thread-count&quot;: {
            type: &quot;ThreadCount&quot;
        }
    },
    C = w.pagelets = [],
    k = {
        post: &quot;\u53d1\u5e03&quot;,
        posting: &quot;\u6b63\u5728\u53d1\u5e03&quot;,
        settings: &quot;\u8bbe\u7f6e&quot;,
        reply: &quot;\u56de\u590d&quot;,
        like: &quot;\u9876&quot;,
        repost: &quot;\u8f6c\u53d1&quot;,
        report: &quot;\u4e3e\u62a5&quot;,
        &quot;delete&quot;: &quot;\u5220\u9664&quot;,
        reply_to: &quot;\u56de\u590d &quot;,
        reposts: &quot;\u8f6c\u53d1&quot;,
        comments: &quot;\u8bc4\u8bba&quot;,
        floor: &quot;\u697c&quot;,
        latest: &quot;\u6700\u65b0&quot;,
        earliest: &quot;\u6700\u65e9&quot;,
        hottest: &quot;\u6700\u70ed&quot;,
        share_to: &quot;\u5206\u4eab\u5230:&quot;,
        leave_a_message: &quot;\u8bf4\u70b9\u4ec0\u4e48\u5427\u2026&quot;,
        no_comments_yet: &quot;\u8fd8\u6ca1\u6709\u8bc4\u8bba\uff0c\u6c99\u53d1\u7b49\u4f60\u6765\u62a2&quot;,
        repost_reason: &quot;\u8bf7\u8f93\u5165\u8f6c\u53d1\u7406\u7531&quot;,
        hot_posts_title: &quot;\u88ab\u9876\u8d77\u6765\u7684\u8bc4\u8bba&quot;,
        comments_zero: &quot;\u6682\u65e0\u8bc4\u8bba&quot;,
        comments_one: &quot;1\u6761\u8bc4\u8bba&quot;,
        comments_multiple: &quot;{num}\u6761\u8bc4\u8bba&quot;,
        reposts_zero: &quot;\u6682\u65e0\u8f6c\u53d1&quot;,
        reposts_one: &quot;1\u6761\u8f6c\u53d1&quot;,
        reposts_multiple: &quot;{num}\u6761\u8f6c\u53d1&quot;,
        weibo_reposts_zero: &quot;\u6682\u65e0\u65b0\u6d6a\u5fae\u535a&quot;,
        weibo_reposts_one: &quot;1\u6761\u65b0\u6d6a\u5fae\u535a&quot;,
        weibo_reposts_multiple: &quot;{num}\u6761\u65b0\u6d6a\u5fae\u535a&quot;,
        qqt_reposts_zero: &quot;\u6682\u65e0\u817e\u8baf\u5fae\u535a&quot;,
        qqt_reposts_one: &quot;1\u6761\u817e\u8baf\u5fae\u535a&quot;,
        qqt_reposts_multiple: &quot;{num}\u6761\u817e\u8baf\u5fae\u535a&quot;
    },
    L = function(e, t, n, r) {
        w.ajax(&quot;GET&quot;, e, t, n ||
        function() {},
        r)
    },
    A = function(e, t, n, r) {
        w.ajax(&quot;POST&quot;, e, t, n ||
        function() {},
        r)
    },
    O = [],
    M,
    _ = [],
    D = function(t) {
        if (! (&quot;WebSocket&quot; in e &amp;&amp; i)) return ! 1;
        _.push(i.stringify(t)),
        M || (M = w.webSocket = new WebSocket(&quot;ws://ws.duoshuo.com:8201/&quot;), M.onopen = function() {
            var e;
            if (M.readyState === 1) while (e = _.shift()) M.send(e)
        },
        M.onmessage = function(e) {
            try {
                var t = 0,
                n, r = i.parse(e.data)
            } catch(s) {
                return
            }
            switch (r.type) {
            case &quot;post&quot;:
                for (; t &lt; w.pagelets.length; t++) n = w.pagelets[t],
                n.threadId == r.thread_id &amp;&amp; n.onMessage(r);
                break;
            case &quot;notification&quot;:
                O.push(r),
                lt();
                break;
            default:
            }
        },
        e.addEventListener(&quot;beforeunload&quot;,
        function() {
            M.close()
        })),
        M.onopen()
    },
    P = w.Collections = {},
    H = w.Views = {},
    B = w.Callbacks = {},
    j = w.openDialog = function(e) {
        return w.dialog !== n &amp;&amp; w.dialog.el.remove(),
        w.dialog = (new H.Dialog(&apos;<div class="ds-dialog"><div class="ds-dialog-inner ds-rounded"><div class="ds-dialog-body">&apos; + e + &apos;</div><div class="ds-dialog-footer"><a href="http://duoshuo.com/" target="_blank" class="ds-logo"></a><span>\u793e\u4f1a\u5316\u8bc4\u8bba\u6846</span></div><a class="ds-dialog-close" href="javascript:void(0)" title="\u5173\u95ed" target="_blank" rel="external"></a></div></div>&apos;)).open()
    },
    F = w.injectScript = function(r, i) {
        var s = t.createElement(&quot;script&quot;),
        o = t.head || t.getElementsByTagName(&quot;head&quot;)[0] || t.documentElement;
        s.type = &quot;text/javascript&quot;,
        s.src = r,
        s.async = &quot;async&quot;,
        s.charset = &quot;utf-8&quot;,
        i &amp;&amp; (s.onload = s.onreadystatechange = function(t, r) {
            if (r || !s.readyState || /loaded|complete/.test(s.readyState)) s.onload = s.onreadystatechange = null,
            o &amp;&amp; s.parentNode &amp;&amp; o.removeChild(s),
            s = n,
            r || i.call(e)
        }),
        o.insertBefore(s, o.firstChild)
    },
    I = w.log = function(e) {
        typeof console == &quot;object&quot; &amp;&amp; console.log(e)
    },
    q = w.smilies = {},
    R = [&quot;EmbedThread&quot;, &quot;RecentComments&quot;, &quot;RecentVisitors&quot;, &quot;TopUsers&quot;, &quot;TopThreads&quot;, &quot;LoginWidget&quot;, &quot;ThreadCount&quot;],
    U = 0,
    z,
    W = function() {
        var e = {},
        t = 0;
        for (; t &lt; arguments.length; t++) arguments[t] &amp;&amp; ft(e, arguments[t]);
        var n = w.param(e);
        return n ? &quot;?&quot; + n: &quot;&quot;
    },
    X = function() {
        var e = w.getCookie(&quot;duoshuo_token&quot;);
        return e ? {
            jwt: e
        }: z.remote_auth ? {
            short_name: z.short_name,
            remote_auth: z.remote_auth
        }: n
    },
    V = function() {
        return ! z &amp;&amp; (z = e.duoshuoQuery) &amp;&amp; tt.trigger(&quot;queryDefined&quot;),
        z
    };
    for (var $ in Object.prototype) return alert(&quot;Object.prototype\u4e0d\u4e3a\u7a7a\uff0c\u8bf7\u4e0d\u8981\u7ed9Object.prototype\u8bbe\u7f6e\u65b9\u6cd5&quot;);
    var J = w.templates = {
        userUrl: function(e) {
            return e.url
        },
        avatarUrl: function(e, t) {
            return e.avatar_url || nt.data.default_avatar_url
        },
        userAnchor: function(e) {
            var t = J.userUrl(e);
            return t ? &apos;<a rel="nofollow author" target="_blank" href="&apos; + p(t) + &apos;">&apos; + p(e.name) + &quot;</a>&quot;: p(e.name)
        },
        avatarImg: function(e, t) {
            return &apos;<img src="/js/&apos; + p(J.avatarUrl(e, t)) + &apos;" alt="&apos; + p(e.name) + &apos;" '="" +="" (t="" ?="" style="width:&apos; + t + " px;height:"="" t="" 'px"':="" "")="" "="">&quot;
        },
        avatar: function(e, t) {
            var n = J.avatarImg(e, t),
            r = J.userUrl(e);
            return r ? &apos;<a rel="nofollow author" target="_blank" href="&apos; + p(r) + &apos;" '="" +="" (e.user_id="" ?="" "="" onclick="\" this.href="&quot;&quot; w.hosturl=&quot;&quot; user-url=&quot;&quot; ?user_id=&quot; + e.user_id + &quot; " ;\"":="" "")="" title="&apos; + p(e.name) + &apos;">&apos; + n + &quot;</a>&quot;: n
        },
        timeHtml: function(e, t) {
            return e ? t ? &apos;<a href="&apos; + t + &apos;" target="_blank" rel="nofollow" class="ds-time" datetime="&apos; + e + &apos;" title="&apos; + w.fullTime(e) + &apos;">&apos; + w.elapsedTime(e) + &quot;</a>&quot;: &apos;<span class="ds-time" datetime="&apos; + e + &apos;" title="&apos; + w.fullTime(e) + &apos;">&apos; + w.elapsedTime(e) + &quot;</span>&quot;: &quot;&quot;
        },
        serviceIcon: function(e, t) {
            return &apos;<a href="javascript:void(0)" class="ds-service-icon&apos; + (t ? " -grey":="" "")="" +="" "="" ds-"="" e="" '"="" data-service="&apos; + e + &apos;" title="&apos; + w.sourceName[e] + &apos;" target="_blank" rel="external"></a>&apos;
        },
        loginButtons: function(e) {
            return &apos;<div class="ds-login-buttons"><p>\u793e\u4ea4\u5e10\u53f7\u767b\u5f55:</p><div class="ds-social-links">&apos; + J.serviceList() + J.additionalServices() + &quot;</div></div>&quot;
        },
        poweredBy: function(e) {
            return &apos;<p class="ds-powered-by"><a href="http://duoshuo.com" target="_blank" rel="nofollow">&apos; + p(e) + &quot;</a></p>&quot;
        },
        indicator: g(&apos;<div id="ds-indicator"></div>&apos;),
        waitingImg: g(&apos;<div id="ds-waiting"></div>&apos;),
        serviceList: function(e) {
            var t = &apos;<ul class="ds-service-list">&apos;,
            n = [&quot;weibo&quot;, &quot;qq&quot;, &quot;renren&quot;, &quot;douban&quot;],
            r = 0;
            for (; r &lt; n.length; r++) t += J.loginItem(n[r], e);
            return t + &apos;<li><a class="ds-more-services" href="javascript:void(0)" target="_blank" rel="external">\u66f4\u591a\u00bb</a></li>&apos; + &quot;</ul>&quot;
        },
        additionalServices: function(e) {
            var t = &apos;<ul class="ds-service-list ds-additional-services">&apos;,
            n = [&quot;kaixin&quot;, &quot;netease&quot;, &quot;sohu&quot;, &quot;baidu&quot;, &quot;google&quot;],
            r = 0;
            for (; r &lt; n.length; r++) t += J.loginItem(n[r], e);
            return t + &quot;</ul>&quot;
        },
        loginItem: function(e, t) {
            var n = J[t ? &quot;bindUrl&quot;: &quot;loginUrl&quot;](e);
            return &apos;<li><a href="&apos; + n + &apos;" rel="nofollow" class="ds-service-link ds-&apos; + e + &apos;">&apos; + w.serviceNames[e] + (rt.data.social_uid[e] ? &apos; <span class="ds-icon ds-icon-ok"></span>&apos;: &quot;&quot;) + &quot;</a>&quot; + &quot;</li>&quot;
        },
        loginUrl: function(e, t) {
            return t || (t = {}),
            z.sso &amp;&amp; z.sso.login &amp;&amp; (t.sso = 1, t.redirect_uri = z.sso.login),
            w.hostUrl + &quot;/login/&quot; + e + &quot;/&quot; + W(t)
        },
        bindUrl: function(e) {
            return w.hostUrl + &quot;/bind/&quot; + e + &quot;/&quot; + W(z.sso &amp;&amp; z.sso.login ? {
                sso: 1,
                redirect_uri: z.sso.login
            }: null, X())
        },
        logoutUrl: function() {
            return w.hostUrl + &quot;/logout/&quot; + W(z.sso &amp;&amp; z.sso.logout ? {
                sso: 1,
                redirect_uri: z.sso.logout
            }: null)
        },
        likePost: function(e) {
            return &apos;<a class="ds-post-likes" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-like"></span>&apos; + k.like + (e.likes &gt; 0 ? &quot;(&quot; + e.likes + &quot;)&quot;: &quot;&quot;) + &quot;</a>&quot;
        },
        ctxPost: function(e, t, n) {
            var r = K(e);
            return &apos;<li class="ds-ctx-entry" '="" +="" (n="" ?="" style="display:none" ':="" "")="" data-post-id="&apos; + e.post_id + &apos;"><div class="ds-avatar">&apos; + J.avatar(r) + &apos;</div><div class="ds-ctx-body"><div class="ds-ctx-head">&apos; + J.userAnchor(r) + J.timeHtml(e.created_at, e.url) + (t &gt;= 0 ? &apos;<div class="ds-ctx-nth" title="&apos; + w.fullTime(e.created_at) + &apos;">&apos; + (t + 1) + k.floor + &quot;</div>&quot;: &quot;&quot;) + &apos;</div><div class="ds-ctx-content">&apos; + e.message + (t &gt;= 0 ? &apos;\u3000\u3000\u3000\u3000\u3000\u3000\u3000<div class="ds-comment-actions&apos; + (e.vote &gt; 0 ? " ds-post-liked":="" "")="" +="" '"="">&apos; + J.likePost(e) + &apos; <a class="ds-post-repost" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-share"></span>&apos; + k.repost + &quot;</a>&quot; + &apos; <a class="ds-post-reply" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-reply"></span>&apos; + k.reply + &quot;</a>&quot; + &quot;</div>&quot;: &quot;&quot;) + &quot;</div></div></li>&quot;
        }
    },
    K = function(e) {
        return ut[e.author_id] &amp;&amp; ut[e.author_id].data || e.author
    },
    Q = function(e) {
        var t = [];
        for (var n in e) t.push(&apos;<input type="hidden" name="&apos; + n + &apos;" value="&apos; + p(e[n]) + &apos;">&apos;);
        return t.join(&quot;\n&quot;)
    };
    for (; U &lt; R.length; U++) w[R[U]] = function(e) {
        return function(t, n) {
            n = n || {},
            n.type = e,
            t &amp;&amp; !N[t] &amp;&amp; (N[t] = n),
            w.initSelector &amp;&amp; w.initSelector(t, n)
        }
    } (R[U]),
    w[&quot;create&quot; + R[U]] = function(e) {
        return function(n, r) {
            var i = t.createElement(n);
            for (var s in r) i.setAttribute(&quot;data-&quot; + s, r[s]);
            return w[e](i),
            i
        }
    } (R[U]);
    w.RecentCommentsWidget = w.RecentComments;
    var G = 0,
    Y = w.Class = function() {};
    Y.extend = function(e) {
        function r() { ! G &amp;&amp; this.init &amp;&amp; this.init.apply(this, arguments)
        }
        G = 1;
        var t = new this;
        G = 0;
        for (var n in e) t[n] = e[n];
        return r.prototype = t,
        r.prototype.constructor = r,
        r.extend = arguments.callee,
        r
    };
    var Z = w.Event = Y.extend({
        on: function(e, t) {
            var r = this.handlers || (this.handlers = {});
            return r[e] === n &amp;&amp; (r[e] = []),
            r[e].push(t),
            this
        },
        trigger: function(e, t) {
            var n = (this.handlers || (this.handlers = {}))[e];
            if (n) for (var r = 0; r &lt; n.length; r++) if (n[r].call(this, t) === !1) break;
            return this
        }
    }),
    et = w.Model = Z.extend({
        init: function(e) {
            this.data = e
        },
        reset: function(e) {
            this.data = e,
            this.trigger(&quot;reset&quot;)
        },
        remove: function(e) {
            this.data.splice(e, 1),
            this.trigger(&quot;reset&quot;)
        },
        set: function(e, t) {
            if (t === n) for (var r in e) this.data[r] = e[r];
            else this.data[e] = t;
            this.trigger(&quot;reset&quot;)
        }
    }),
    tt = w.events = new Z,
    nt = w.site = new et,
    rt = w.visitor = new et,
    it = w.unread = new et,
    st = w.threads = {},
    ot = w.postPool = {},
    ut = w.users = {};
    tt.on(&quot;queryDefined&quot;,
    function() {
        var e = z.short_name;
        w.hostUrl = e ? l + &quot;//&quot; + e + &quot;.&quot; + w.DOMAIN: w.REMOTE,
        z.theme &amp;&amp; pt(z.theme);
        if (o) {
            var t = o[&quot;ds_site_&quot; + e],
            n = o[&quot;ds_lang_&quot; + e];
            t &amp;&amp; nt.reset(i.parse(t)),
            n &amp;&amp; ft(k, i.parse(n))
        }
    }),
    V(),
    w.loaded.jQuery &amp;&amp; (w.jQuery = e.jQuery),
    w.require(&quot;jQuery&quot;,
    function() {
        function dt(e, t, n) {
            if (e.find(&quot;.ds-post[data-post-id=&quot; + t.post_id + &quot;]&quot;)[0]) return;
            return e.find(&quot;.ds-post-placeholder&quot;).remove(),
            i(J.post(t, n)).hide()[n.order == &quot;asc&quot; ? &quot;appendTo&quot;: &quot;prependTo&quot;](e).slideDown(function() {})
        }
        function vt(e, t) {
            var n;
            this.delegate(&quot;a.ds-post-likes&quot;, &quot;click&quot;,
            function(e) {
                if (ct()) return gt(),
                !1;
                var t = i(this).parent();
                return liked = t.hasClass(&quot;ds-post-liked&quot;),
                matches = i(this).html().match(/\((\d+)\)/),
                likes = (matches ? parseInt(matches[1]) : 0) + (liked ? -1 : 1),
                A(&quot;/api/posts/vote&quot;, {
                    post_id: t.closest(&quot;.ds-ctx-entry, .ds-post-self&quot;).attr(&quot;data-post-id&quot;),
                    vote: liked ? 0 : 1
                }),
                i(this).html(i(this).html().replace(/\(\d+\)/, &quot;&quot;) + (likes ? &quot;(&quot; + likes + &quot;)&quot;: &quot;&quot;)),
                t[liked ? &quot;removeClass&quot;: &quot;addClass&quot;](&quot;ds-post-liked&quot;),
                !1
            }).delegate(&quot;a.ds-post-repost&quot;, &quot;click&quot;,
            function(e) {
                var t = i(this).closest(&quot;.ds-post-self&quot;),
                n = ot[t.attr(&quot;data-post-id&quot;)];
                return w.repostDialog(n, &quot;&quot;),
                !1
            }).delegate(&quot;a.ds-post-delete&quot;, &quot;click&quot;,
            function(t) {
                if (confirm(&quot;\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u8bc4\u8bba\u5417\uff1f&quot;)) {
                    var n = i(this).closest(&quot;.ds-post-self&quot;);
                    A(&quot;/api/posts/remove&quot;, {
                        post_id: n.attr(&quot;data-post-id&quot;)
                    }),
                    n.parent().fadeOut(200,
                    function() {
                        e.data.comments--,
                        e.updateCounter(&quot;duoshuo&quot;),
                        i(this).remove()
                    })
                }
                return ! 1
            }).delegate(&quot;a.ds-post-report&quot;, &quot;click&quot;,
            function(e) {
                if (confirm(&quot;\u786e\u5b9a\u8981\u4e3e\u62a5\u8fd9\u6761\u8bc4\u8bba\u5417\uff1f&quot;)) {
                    var t = i(this).closest(&quot;.ds-post-self&quot;);
                    A(&quot;/api/posts/report&quot;, {
                        post_id: t.attr(&quot;data-post-id&quot;)
                    }),
                    alert(&quot;\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01&quot;)
                }
                return ! 1
            }).delegate(&quot;a.ds-post-reply&quot;, &quot;click&quot;,
            function(r) {
                var s = i(this),
                o = s.closest(&quot;.ds-comment-actions&quot;);
                if (o.hasClass(&quot;ds-reply-active&quot;)) n.el.fadeOut(200,
                function() {
                    i(this).detach()
                }),
                o.removeClass(&quot;ds-reply-active&quot;);
                else {
                    var u = s.closest(&quot;.ds-ctx-entry, .ds-post-self&quot;);
                    n ? n.actionsBar.removeClass(&quot;ds-reply-active&quot;) : (n = new H.Replybox(e), n.render(!0).el.addClass(&quot;ds-inline-replybox&quot;).detach()),
                    n.el.find(&quot;[name=parent_id]&quot;).val(u.attr(&quot;data-post-id&quot;)),
                    n.el.show().appendTo(s.closest(&quot;.ds-ctx-body, .ds-comment-body&quot;)).find(&quot;textarea&quot;).focus(),
                    n.actionsBar = o.addClass(&quot;ds-reply-active&quot;),
                    t.max_depth <= 1="" ?="" n.postlist="e.postList.el:" (n.postlist="u.siblings(" .ds-children"),"="" n.postlist[0]="" ||="" class="ds-children">&apos;).insertAfter(u)))
                }
                return ! 1
            }).delegate(&quot;a.ds-weibo-comments&quot;, &quot;click&quot;,
            function(e) {
                var n = i(this).closest(&quot;.ds-post-self&quot;),
                r = n.attr(&quot;data-post-id&quot;),
                s = n.data(&quot;source&quot;);
                if (n.attr(&quot;data-root-id&quot;) == 0) {
                    var o = n.siblings(&quot;.ds-children&quot;);
                    o[0] ? o.remove() : (o = i(&apos;<ul class="ds-children"></ul>&apos;).insertAfter(n), L(&quot;/api/posts/listComments&quot;, bt({
                        post_id: r
                    }),
                    function(e) {
                        l(e),
                        o.append(i.map(e.response,
                        function(e) {
                            return J.post(e, t)
                        }).join(&quot;&quot;))
                    }))
                }
                return ! 1
            }).delegate(&quot;a.ds-weibo-reposts&quot;, &quot;click&quot;,
            function(t) {
                var n = i(this).closest(&quot;.ds-post-self&quot;),
                r = ot[n.attr(&quot;data-post-id&quot;)],
                s = r.data.source;
                if (!rt.data.social_uid[s == &quot;qqt&quot; ? &quot;qq&quot;: s]) {
                    mt(s);
                    return
                }
                var o = r.data.root_id,
                u = o != &quot;0&quot; ? ot[o] : r,
                a = &quot;&quot;;
                if (o != &quot;0&quot;) {
                    var f = K(r.data);
                    a = (s == &quot;weibo&quot; ? &quot;//@&quot; + f.name: &quot;|| @&quot; + f.qqt_account) + &quot;:&quot; + r.data.message
                }
                return w.repostDialog(u, a, e, s),
                !1
            }).delegate(&quot;a.ds-expand&quot;, &quot;click&quot;,
            function(e) {
                var t = i(this).parent();
                return t.siblings().show(),
                t.remove(),
                !1
            }),
            x.touch || this.delegate(&quot;a.ds-comment-context, .ds-avatar, .ds-user-name&quot;, &quot;mouseenter&quot;,
            function(t) {
                var n = this;
                if (bubbleOutTimer &amp;&amp; $.owner == n) clearTimeout(bubbleOutTimer),
                bubbleOutTimer = 0;
                else {
                    var r = i(n);
                    Y = setTimeout(function() {
                        Y = 0,
                        $.owner = n,
                        tt();
                        var t = r.offset(),
                        i = e.el.offset(),
                        s = r.innerWidth() / 2,
                        o = e.el.innerHeight() - (t.top - i.top) + 6,
                        u = t.left - i.left - 35 + (s &gt; 35 ? 35 : s);
                        try {
                            if (r.hasClass(&quot;ds-comment-context&quot;)) G.attr(&quot;id&quot;, &quot;ds-ctx-bubble&quot;).attr(&quot;data-post-id&quot;, r.attr(&quot;data-post-id&quot;)).html(&apos;<ul id="ds-ctx">&apos; + J.ctxPost(ot[r.attr(&quot;data-parent-id&quot;)].data) + &quot;</ul>&quot; + &apos;<div class="ds-bubble-footer"><a class="ds-ctx-open" href="javascript:void(0);" target="_blank" rel="external">\u67e5\u770b\u5bf9\u8bdd</a></div>&apos;);
                            else if (r.hasClass(&quot;ds-avatar&quot;) || r.hasClass(&quot;ds-user-name&quot;)) {
                                var a = {},
                                f = a.user_id = r.attr(&quot;data-user-id&quot;);
                                if (!f) throw &quot;no info&quot;;
                                G.attr(&quot;id&quot;, &quot;ds-user-card&quot;).attr(&quot;data-user-id&quot;, f).empty(),
                                ut[f] ? G.html(J.userInfo(ut[f].data)) : L(&quot;/api/users/profile&quot;, bt(a),
                                function(e) {
                                    var t = e.response;
                                    ut[f] ? ut[f].set(t) : ut[f] = new et(t),
                                    $.owner == n &amp;&amp; G.html(J.userInfo(t))
                                })
                            }
                            $.css({
                                bottom: o,
                                left: u
                            }).appendTo(e.innerEl)
                        } catch(l) {
                            $.detach()
                        }
                    },
                    200)
                }
            }).delegate(&quot;a.ds-comment-context, .ds-avatar, .ds-user-name&quot;, &quot;mouseleave&quot;,
            function() {
                Y ? (clearTimeout(Y), Y = 0) : bubbleOutTimer || bubbleOut()
            })
        }
        function mt(e) {
            var t = J[ct() ? &quot;loginUrl&quot;: &quot;bindUrl&quot;](e);
            x.authInWin &amp;&amp; O(e, t) || (r.href = t)
        }
        function gt() {
            var e = j(&quot;<h2>\u793e\u4ea4\u5e10\u53f7\u767b\u5f55</h2>&quot; + J.serviceList() + J.additionalServices()).el.find(&quot;.ds-dialog&quot;).css(&quot;width&quot;, &quot;300px&quot;);
            M(e)
        }
        function bt(e) {
            var n = {
                require: &quot;site,visitor,nonce,serverTime,lang&quot; + (yt++?&quot;&quot;: &quot;,unread,log,extraCss&quot;),
                site_ims: o &amp;&amp; o[&quot;ds_site_&quot; + z.short_name + &quot;:timestamp&quot;],
                lang_ims: o &amp;&amp; o[&quot;ds_lang_&quot; + z.short_name + &quot;:timestamp&quot;],
                referer: t.referrer
            };
            z.stylePatch &amp;&amp; (n.style_patch = z.stylePatch);
            for (var r in n) n[r] &amp;&amp; (!S || encodeURIComponent(n[r]).length &lt; 200) &amp;&amp; (e[r] = n[r]);
            return e
        }
        var i = w.jQuery,
        s = i(e),
        a = i(t),
        l = w.loadRequire = function(e) {
            e.serverTime &amp;&amp; (c = (new Date).getTime() - e.serverTime * 1e3),
            e.visitor &amp;&amp; (!rt.data &amp;&amp; e.visitor.user_id &amp;&amp; u &amp;&amp; !u.checkPermission() &amp;&amp; D({
                logged_user_id: e.visitor.user_id
            }), rt.reset(e.visitor)),
            e.site &amp;&amp; (nt.reset(e.site), ht(&quot;ds_site_&quot; + z.short_name, e.site, e.serverTime)),
            !w.theme &amp;&amp; nt.data.theme &amp;&amp; pt(nt.data.theme),
            e.lang &amp;&amp; (ft(k, e.lang), ht(&quot;ds_lang_&quot; + z.short_name, e.lang, e.serverTime));
            if (e.stylesheets) for (var t = 0; t &lt; e.stylesheets.length; t++) w.injectStylesheet(e.stylesheets[t]);
            e.nonce &amp;&amp; (w.nonce = e.nonce),
            e.style &amp;&amp; w.setCustomStyle((e.style || &quot;&quot;) + w.compileStyle(z.component_style)),
            e.unread &amp;&amp; it.reset(e.unread)
        },
        h = function(e) {
            e.stopPropagation()
        },
        g = function(e) { (e.ctrlKey &amp;&amp; e.which == 13 || e.which == 10) &amp;&amp; i(this.form).trigger(&quot;submit&quot;)
        },
        y = function(e) {
            var t = i(this);
            t.height(Math.max(54, t.next(&quot;.ds-hidden-text&quot;).text(this.value).height() + 27))
        },
        O = function(t, n) {
            var i = {
                weibo: [760, 600],
                renren: [420, 322],
                qq: [504, 445],
                netease: [810, 645],
                sohu: [972, 600],
                google: [600, 440],
                taobao: [480, 585]
            } [t] || [550, 400];
            return e.open(n + (n.indexOf(&quot;?&quot;) == -1 ? &quot;?&quot;: &quot;&amp;&quot;) + w.param({
                origin: r.origin || &quot;http://&quot; + r.host
            }), &quot;_blank&quot;, &quot;width=&quot; + i[0] + &quot;,height=&quot; + i[1] + &quot;,toolbar=no,menubar=no,location=yes&quot;)
        },
        M = function(e, t) {
            x.authInWin &amp;&amp; e.find(t || &quot;a.ds-service-link&quot;).click(function(e) {
                var t = this.href.match(/\/(login|bind)\/(\w+)\//i);
                if (!t || !w.serviceNames[t[2]]) return;
                return ! O(t[2], this.href)
            })
        },
        _ = function(e) {
            return x.touch &amp;&amp; e.addClass(&quot;ds-touch&quot;),
            T(&quot;transition&quot;) || e.addClass(&quot;ds-no-transition&quot;),
            S &amp;&amp; e.addClass(&quot;ds-ie6&quot;),
            i.support.opacity || e.addClass(&quot;ds-no-opacity&quot;),
            e
        },
        B = function(e) {
            if (!x.placeholder) {
                var t = e.attr(&quot;placeholder&quot;);
                e.val(t).focus(function() {
                    this.value === t &amp;&amp; (this.value = &quot;&quot;)
                }).blur(function() {
                    this.value === &quot;&quot; &amp;&amp; (this.value = t)
                })
            }
            return e
        };
        if (e.postMessage) {
            var F = function(e) {
                if (e.origin === &quot;http://duoshuo.com&quot;) switch (e.data.type) {
                case &quot;login&quot;:
                    r.href = e.data.redirectUrl;
                    break;
                default:
                }
            };
            e.addEventListener ? e.addEventListener(&quot;message&quot;, F, !1) : e.attachEvent &amp;&amp; e.attachEvent(&quot;onmessage&quot;, F)
        }
        w.scrollTo = function(e) {
            var t = e.offset().top; (t &lt; s.scrollTop() || t &gt; s.scrollTop() + s.height()) &amp;&amp; i(&quot;html, body&quot;).animate({
                scrollTop: t - 40
            },
            200, &quot;swing&quot;)
        },
        w.toJSON = function(e) {
            var t = /\r?\n/g,
            n = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            r = /^(?:select|textarea)/i,
            s = e.map(function() {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function() {
                return this.name &amp;&amp; !this.disabled &amp;&amp; (this.checked || r.test(this.nodeName) || n.test(this.type))
            }).map(function(e, n) {
                var r = i(this).val();
                return r == null ? null: i.isArray(r) ? i.map(r,
                function(e, r) {
                    return {
                        name: n.name,
                        value: e.replace(t, &quot;\r\n&quot;)
                    }
                }) : {
                    name: n.name,
                    value: r.replace(t, &quot;\r\n&quot;)
                }
            }).toArray(),
            o = {};
            return i.each(s,
            function() {
                o[this.name] = this.value
            }),
            o
        };
        var R = w.Widget = Z.extend({
            init: function(e, t) {
                this.el = e,
                this.options = t || {},
                this.render()
            },
            render: function() {},
            reset: function() {},
            load: function(e) {
                switch (e.code) {
                case 0:
                    l(e),
                    this.onload(e);
                    break;
                default:
                    this.onError(e)
                }
            },
            onload: function(e) {
                this.el.html(J[this.tmpl].call(J, e.response, i.extend(this.options, e.options)))
            },
            onMessage: function() {},
            onError: function(e) {
                I(&quot;\u51fa\u9519\u5566(&quot; + e.code + &quot;): &quot; + e.errorMessage),
                e.errorTrace &amp;&amp; I(e.errorTrace)
            }
        }),
        U = function(e) {
            var t = {
                &quot;unread-comments&quot;: {
                    title: &quot;\u65b0\u7559\u8a00\u53ca\u56de\u590d&quot;,
                    apiUrl: &quot;/api/users/unreadComments&quot;,
                    tmpl: function(e) {
                        return &apos;<li data-thread-id="&apos; + e.thread.thread_id + &apos;">&apos; + i.map(e.authors, J.userAnchor).join(&quot;\u3001&quot;) + &apos; \u5728 <a class="ds-read" href="&apos; + e.thread.url + &apos;#comments" target="_blank">&apos; + p(e.thread.title || &quot;\u65e0\u6807\u9898&quot;) + &apos;</a> \u4e2d\u56de\u590d\u4e86\u4f60 <a class="ds-delete ds-read" title="\u77e5\u9053\u4e86" href="javascript:void(0)" target="_blank" rel="external">\u77e5\u9053\u4e86</a></li>&apos;
                    },
                    read: function(e) {
                        var t = e.attr(&quot;data-thread-id&quot;);
                        A(&quot;/api/threads/read&quot;, {
                            thread_id: t
                        }),
                        it.data.comments--
                    }
                },
                &quot;unread-notifications&quot;: {
                    title: &quot;\u7cfb\u7edf\u6d88\u606f&quot;,
                    apiUrl: &quot;/api/users/unreadNotifications&quot;,
                    tmpl: function(e) {
                        return &apos;<li data-notification-id="&apos; + e.notification_id + &apos;" data-notification-type="&apos; + e.type + &apos;">&apos; + e.content + &apos; <a class="ds-delete ds-read" title="\u77e5\u9053\u4e86" href="javascript:void(0)" target="_blank" rel="external">\u77e5\u9053\u4e86</a></li>&apos;
                    },
                    read: function(e) {
                        var t = e.attr(&quot;data-notification-id&quot;);
                        A(&quot;/api/notifications/read&quot;, {
                            notification_id: t
                        }),
                        it.data.notifications--
                    }
                }
            } [e],
            n = j(&quot;<h2>&quot; + t.title + &quot;</h2>&quot; + &apos;<ul class="ds-unread-list"></ul>&apos;);
            n.on(&quot;close&quot;, w.resetNotify);
            var r = n.el.find(&quot;.ds-unread-list&quot;).delegate(&quot;.ds-delete&quot;, &quot;click&quot;,
            function(e) {
                return i(this).parent().remove(),
                r.children().length === 0 &amp;&amp; n.close(),
                !1
            }).delegate(&quot;.ds-read&quot;, &quot;click&quot;,
            function(e) {
                t.read(i(this).parent())
            });
            i(&quot;#ds-notify&quot;).hide(),
            L(t.apiUrl, {},
            function(e) {
                n.el.find(&quot;.ds-unread-list&quot;).html(i.map(e.response, t.tmpl).join(&quot;\n&quot;))
            }),
            u &amp;&amp; u.checkPermission() &amp;&amp; u.requestPermission(lt)
        };
        w.resetNotify = function() {
            var e = i(&quot;#ds-notify&quot;),
            n = it.data;
            e[0] || (e = i(&apos;<div id="ds-notify"></div>&apos;).css({
                hidden: {
                    display: &quot;none&quot;
                },
                &quot;top-right&quot;: {
                    top: &quot;24px&quot;,
                    right: &quot;24px&quot;
                },
                &quot;bottom-right&quot;: {
                    bottom: &quot;24px&quot;,
                    right: &quot;24px&quot;
                }
            } [nt.data.notify_position]).delegate(&quot;.ds-notify-unread a&quot;, &quot;click&quot;,
            function(e) {
                return U(i(this).data(&quot;type&quot;)),
                !1
            }).appendTo(t.body)),
            e.html(&apos;<div id="ds-reset"><a class="ds-logo" href="http://duoshuo.com/" target="_blank" title="\u591a\u8bf4"></a><ul class="ds-notify-unread"><li' +="" (n.comments="" ?="" "":="" '="" style="display:none;" ')=""><a data-type="unread-comments" href="javascript:void(0);" target="_blank" rel="external">\u4f60\u6709&apos; + n.comments + &quot;\u6761\u65b0\u56de\u590d</a><li" +="" (n.notifications="" ?="" "":="" '="" style="display:none;" ')=""><a data-type="unread-notifications" href="javascript:void(0);" target="_blank" rel="external">\u4f60\u6709&apos; + n.notifications + &quot;\u6761\u7cfb\u7edf\u6d88\u606f</a></li"></li'></ul></div>&quot;)[(n.comments || n.notifications) &amp;&amp; nt.data.notify_position !== &quot;hidden&quot; &amp;&amp; !i(&quot;.ds-dialog&quot;)[0] ? &quot;show&quot;: &quot;hide&quot;]()
        },
        it.on(&quot;reset&quot;, w.resetNotify),
        J.replybox = function(e, t) {
            var n = e.options,
            r = rt.data,
            i = [],
            s = &quot;&quot;,
            o,
            u = {
                thread_id: e.threadId,
                parent_id: &quot;&quot;,
                nonce: w.nonce
            };
            for (var a in r.repostOptions) r.repostOptions[a] &amp;&amp; (i.push(a), o = 1),
            s += J.serviceIcon(a, !r.repostOptions[a]);
            return &apos;<div class="ds-replybox"><a class="ds-avatar" '="" +="" (ct()="" ?="" href="javascript:void(0);" onclick="return false" ':="" settings="" avatar="" "="" w(x())="" '"="" target="_blank" title="\u8bbe\u7f6e\u5934\u50cf" ')="">&quot; + J.avatarImg(r) + &quot;</a>&quot; + &apos;<form method="post">&apos; + Q(u) + &apos;<div class="ds-textarea-wrapper ds-rounded-top">&apos; + &apos;<textarea name="message" title="Ctrl+Enter\u5feb\u6377\u63d0\u4ea4" placeholder="&apos; + p(k.leave_a_message) + &apos;"></textarea>&apos; + &apos;<pre class="ds-hidden-text"></pre>&apos; + &quot;</div>&quot; + &apos;<div class="ds-post-toolbar">&apos; + &apos;<div class="ds-post-options ds-gradient-bg">&apos; + &apos;<span class="ds-sync">&apos; + (!ct() &amp;&amp; s ? &apos;<input id="ds-sync-checkbox&apos; + (t ? " -inline":="" "")="" +="" '"="" type="checkbox" name="repost" '="" (o="" ?="" 'checked="checked" ':="" 'value="&apos; + i.join(" ,")=""> <label for="ds-sync-checkbox&apos; + (t ? " -inline":="" "")="" +="" '"="">&apos; + k.share_to + &quot;</label>&quot; + s: &quot;&quot;) + &quot;</span>&quot; + &quot;</div>&quot; + &apos;<button class="ds-post-button" type="submit">&apos; + p(k.post) + &quot;</button>&quot; + &apos;<div class="ds-toolbar-buttons">&apos; + (n.use_smilies ? &apos;<a class="ds-toolbar-button ds-add-emote" title="\u63d2\u5165\u8868\u60c5"></a>&apos;: &quot;&quot;) + (n.use_images &amp;&amp; n.parse_html_enabled ? &apos;<a class="ds-toolbar-button ds-add-image" title="\u63d2\u5165\u56fe\u7247"></a>&apos;: &quot;&quot;) + &quot;</div>&quot; + &quot;</div>&quot; + &quot;</form>&quot; + &quot;</div>&quot;
        },
        H.Replybox = function(e) {
            this.embedThread = e
        },
        H.Replybox.prototype = {
            render: function(e) {
                function T(e) {
                    e.data(&quot;submitting&quot;, !0),
                    e.find(&quot;.ds-post-button&quot;).addClass(&quot;ds-waiting&quot;).html(k.posting)[0].disabled = !0
                }
                function N(e) {
                    e.data(&quot;submitting&quot;, !1),
                    e.find(&quot;.ds-post-button&quot;).removeClass(&quot;ds-waiting&quot;).html(k.post)[0].disabled = !1
                }
                var n = this,
                r = n.embedThread,
                s = r.options,
                u = function(e) {
                    w.require(&quot;smilies&quot;,
                    function() {})
                },
                a = n.el = i(J.replybox(r, e)).click(u),
                f = a.find(&quot;form&quot;),
                l = f.find(&quot;input[type=checkbox]&quot;)[0],
                c = f.find(&quot;a.ds-service-icon, a.ds-service-icon-grey&quot;),
                h = B(f.find(&quot;textarea&quot;)).focus(u).keyup(g).keyup(y).bind(&quot;focus mousedown mouseup keyup&quot;, m),
                d = a.find(&quot;.ds-add-emote&quot;).click(function(e) {
                    var r = w.smiliesTooltip;
                    return d.toggleClass(&quot;ds-expanded&quot;).hasClass(&quot;ds-expanded&quot;) ? (r || (r = w.smiliesTooltip = new H.SmiliesTooltip, r.render(), w.require(&quot;smilies&quot;,
                    function() {
                        r.reset(&quot;\u5fae\u535a-\u9ed8\u8ba4&quot;)
                    })), r.replybox = n, r.el.appendTo(t.body).css({
                        top: n.el.offset().top + n.el.outerHeight() + 4 + &quot;px&quot;,
                        left: n.el.find(&quot;.ds-textarea-wrapper&quot;).offset().left + &quot;px&quot;
                    }), i(t.body).click(E)) : E(e),
                    !1
                }),
                b = a.find(&quot;.ds-add-image&quot;).click(function(e) {
                    var n = h[0],
                    r = n.value,
                    i = &quot;\u8bf7\u8f93\u5165\u56fe\u7247\u5730\u5740&quot;,
                    s = &apos;<img src="/js/&apos; + i + &apos;">&apos;;
                    if (t.selection) {
                        n.value = r.substring(0, v.start) + s + r.substring(v.end, r.length),
                        n.value = n.value.replace(&quot;\u8bf4\u70b9\u4ec0\u4e48\u5427 ...&quot;, &quot;&quot;),
                        n.focus();
                        var o = t.selection.createRange();
                        o.collapse(),
                        o.findText(i),
                        o.select()
                    } else {
                        n.value = r.substring(0, n.selectionStart) + s + r.substring(n.selectionEnd);
                        var u = n.value.search(i);
                        n.setSelectionRange(u, u + i.length),
                        n.focus()
                    }
                    e.preventDefault()
                }),
                E = n.hideSmilies = function(e) {
                    d.removeClass(&quot;ds-expanded&quot;),
                    w.smiliesTooltip.el.detach(),
                    i(t.body).unbind(&quot;click&quot;, E)
                },
                S = function(e, t) {
                    var n = j(&apos;<h2>\u793e\u4ea4\u5e10\u53f7\u767b\u5f55</h2><div class="ds-icons-32">&apos; + i.map([&quot;weibo&quot;, &quot;qq&quot;, &quot;renren&quot;, &quot;kaixin&quot;, &quot;douban&quot;, &quot;netease&quot;, &quot;sohu&quot;],
                    function(e) {
                        return &apos;<a class="ds-&apos; + e + &apos;" href="&apos; + J.loginUrl(e) + &apos;">&apos; + w.sourceName[e] + &quot;</a>&quot;
                    }).join(&quot;&quot;) + &quot;</div>&quot; + (s.deny_anonymous ? &quot;&quot;: &apos;<h2>\u4f5c\u4e3a\u6e38\u5ba2\u7559\u8a00</h2><form><div class="ds-control-group"><input type="text" name="author_name" id="ds-dialog-name" value="&apos; + p(rt.data.name) + &apos;" required>&apos; + &apos;<label for="ds-dialog-name">\u540d\u5b57(\u5fc5\u586b)</label>&apos; + &quot;</div>&quot; + (s.require_guest_email ? &apos;<div class="ds-control-group"><input type="email" name="author_email" id="ds-dialog-email" value="&apos; + p(rt.data.email) + &apos;" required>&apos; + &apos;<label for="ds-dialog-email">\u90ae\u7bb1(\u5fc5\u586b)</label>&apos; + &quot;</div>&quot;: &quot;&quot;) + (s.require_guest_url ? &apos;<div class="ds-control-group"><input type="url" name="author_url" id="ds-dialog-url" placeholder="http://" value="&apos; + p(rt.data.url || " ")="" +="" '"="">&apos; + &apos;<label for="ds-dialog-url">\u7f51\u5740(\u53ef\u9009)</label>&apos; + &quot;</div>&quot;: &quot;&quot;) + &apos;<button type="submit">\u53d1\u5e03</button>&apos; + &quot;</form>&quot;)),
                    r = n.el.find(&quot;.ds-dialog&quot;).css(&quot;width&quot;, &quot;320px&quot;);
                    M(r, &quot;.ds-icons-32 a&quot;);
                    if (!s.deny_anonymous) {
                        var o = n.el.find(&quot;form&quot;);
                        o.submit(function(e) {
                            var r = o.find(&quot;input[name=author_email]&quot;).val();
                            return (r || s.require_guest_email) &amp;&amp; !r.match(/^(([^&lt;&gt;()[\]\\.,;:\s@\&quot;]+(\.[^&lt;&gt;()[\]\\.,;:\s@\&quot;]+)*)|(\&quot;.+\&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? (alert(&quot;\u8bf7\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684email\u5730\u5740.&quot;), !1) : (t(w.toJSON(o)), n.close(), !1)
                        }),
                        o.find(&quot;input[name=author_name]&quot;)[0].focus()
                    }
                };
                s.deny_anonymous &amp;&amp; h.focus(function(e) {
                    if (ct()) {
                        S(f, C);
                        var t = function(e) {
                            e.stopPropagation(),
                            h.unbind(&quot;click&quot;, t)
                        };
                        h.click(t)
                    }
                    return ! 1
                });
                var C = function(e) {
                    T(f),
                    A(&quot;/api/posts/create&quot;, i.extend(w.toJSON(f), e),
                    function(e) {
                        var t = e.response,
                        i = dt(n.postList, t, s);
                        s.order == &quot;asc&quot; == (s.formPosition == &quot;top&quot;) &amp;&amp; w.scrollTo(i),
                        ot[t.post_id] = new et(t),
                        r.data.comments++,
                        r.updateCounter(&quot;duoshuo&quot;),
                        h.val(&quot;&quot;).trigger(&quot;keyup&quot;),
                        N(f),
                        a.hasClass(&quot;ds-inline-replybox&quot;) &amp;&amp; (a.detach(), n.actionsBar.removeClass(&quot;ds-reply-active&quot;));
                        if (o) try {
                            o.removeItem(&quot;ds_draft_&quot; + r.threadId)
                        } catch(u) {}
                    },
                    function(e) {
                        N(f),
                        alert(e.errorMessage)
                    })
                };
                f.submit(function(e) {
                    if (f.data(&quot;submitting&quot;)) return ! 1;
                    var t = i.trim(f[0].message.value);
                    return t == &quot;&quot; || !x.placeholder &amp;&amp; t == h.attr(&quot;placeholder&quot;) ? (alert(&quot;\u60a8\u8fd8\u6ca1\u5199\u5185\u5bb9\u5462&quot;), !1) : (ct() ? S(f, C) : C(), !1)
                });
                var L = function(e) {
                    return i(e).hasClass(&quot;ds-service-icon-grey&quot;) ? null: i(e).attr(&quot;data-service&quot;)
                };
                return c.click(function() {
                    return i(this).toggleClass(&quot;ds-service-icon-grey&quot;).toggleClass(&quot;ds-service-icon&quot;),
                    l.value = i.map(c, L).join(&quot;,&quot;),
                    l.checked = l.value != &quot;&quot;,
                    !1
                }),
                i(l).change(function() {
                    var e = this.checked;
                    c[e ? &quot;removeClass&quot;: &quot;addClass&quot;](&quot;ds-service-icon-grey&quot;)[e ? &quot;addClass&quot;: &quot;removeClass&quot;](&quot;ds-service-icon&quot;),
                    this.value = i.map(c, L).join(&quot;,&quot;)
                }),
                this
            }
        },
        H.Dialog = Z.extend({
            init: function(e, t) { (this.el = i(&quot;#ds-wrapper&quot;))[0] || (this.el = _(i(&apos;<div id="ds-wrapper"></div>&apos;))),
                this.options = i.extend({
                    width: 600
                },
                t),
                e !== n &amp;&amp; i(e).attr(&quot;id&quot;, &quot;ds-reset&quot;).appendTo(this.el)
            },
            open: function() {
                var e = this;
                e.el.hide().appendTo(t.body).fadeIn(200),
                S &amp;&amp; e.el.css(&quot;top&quot;, s.scrollTop() + 100),
                e.el.show().find(&quot;.ds-dialog&quot;).delegate(&quot;a.ds-dialog-close&quot;, &quot;click&quot;,
                function(t) {
                    return e.close(),
                    !1
                }).click(h);
                var n = function(t) {
                    if (t.which == 27) return e.close(),
                    !1
                },
                r = function(t) {
                    return e.close(),
                    !1
                };
                return a.keydown(n),
                i(t.body).click(r),
                e.close = function(s) {
                    a.unbind(&quot;keydown&quot;, n),
                    i(t.body).unbind(&quot;click&quot;, r),
                    e.el.fadeOut(200,
                    function() {
                        i(this).remove()
                    }),
                    e.trigger(&quot;close&quot;)
                },
                e
            }
        }),
        J.likePanel = function(e) {
            return e.likes ? &apos;<span class="ds-highlight">&apos; + e.likes + &quot;</span> \u4eba\u559c\u6b22&quot;: &quot;&quot;
        },
        J.likeTooltip = function(e) {
            var t = {
                qzone: &quot;QQ\u7a7a\u95f4&quot;,
                weibo: &quot;\u65b0\u6d6a\u5fae\u535a&quot;,
                qqt: &quot;\u817e\u8baf\u5fae\u535a&quot;,
                renren: &quot;\u4eba\u4eba\u7f51&quot;,
                kaixin: &quot;\u5f00\u5fc3\u7f51&quot;,
                douban: &quot;\u8c46\u74e3\u7f51&quot;,
                baidu: &quot;\u767e\u5ea6\u641c\u85cf&quot;,
                netease: &quot;\u7f51\u6613\u5fae\u535a&quot;,
                sohu: &quot;\u641c\u72d0\u5fae\u535a&quot;
            },
            n = [];
            for (var r in t) n.push(&apos;<li><a class="ds-share-to-&apos; + r + " ds-service-link="" ds-"="" +="" r="" '"="" href="&apos; + w.hostUrl + " share-proxy="" ?"="" w.param({="" service:="" r,="" thread_id:="" e.thread_id="" })="">&apos; + t[r] + &quot;</a></li>&quot;);
            var i = Math.ceil(n.length / 2);
            return &apos;<div class="ds-like-tooltip ds-rounded"><p>\u5f88\u9ad8\u5174\u4f60\u80fd\u559c\u6b22\uff0c\u5206\u4eab\u4e00\u4e0b\u5427\uff1a</p><ul>&apos; + n.slice(0, i).join(&quot;&quot;) + &quot;</ul><ul>&quot; + n.slice(i).join(&quot;&quot;) + &apos;</ul><p class="ds-like-tooltip-footer"><a class="ds-like-tooltip-close">\u7b97\u4e86</a></p></div>&apos;
        },
        H.Meta = function(e) {
            this.embedThread = e
        },
        H.Meta.prototype = {
            render: function() {
                var r = this,
                s = r.embedThread,
                o = s.data,
                u = r.el = i(&apos;<div class="ds-meta"><a href="javascript:void(0)" class="ds-like-thread-button ds-rounded&apos; + (o.user_vote &gt; 0 ? " ds-thread-liked":="" "")="" +="" '"="" target="_blank" rel="external"><span class="ds-icon ds-icon-heart"></span>&apos; + &apos; <span class="ds-thread-like-text">&apos; + (o.user_vote &gt; 0 ? &quot;\u5df2\u559c\u6b22&quot;: &quot;\u559c\u6b22&quot;) + &apos;</span><span class="ds-thread-cancel-like">\u53d6\u6d88\u559c\u6b22</span></a><span class="ds-like-panel"></span></div>&apos;),
                a = u.find(&quot;.ds-like-thread-button&quot;).click(function(f) {
                    var l = a.hasClass(&quot;ds-thread-liked&quot;);
                    A(&quot;/api/threads/vote&quot;, {
                        thread_id: s.threadId,
                        vote: l ? 0 : 1
                    },
                    function(e) {
                        i.each(e.response.thread,
                        function(e, t) {
                            o[e] = t
                        }),
                        r.resetLikePanel()
                    }),
                    a.toggleClass(&quot;ds-thread-liked&quot;),
                    a.find(&quot;.ds-thread-like-text&quot;).text(l ? &quot;\u559c\u6b22&quot;: &quot;\u5df2\u559c\u6b22&quot;);
                    var c = function(e) {
                        r.tooltip.detach(),
                        i(t.body).unbind(&quot;click&quot;, c)
                    };
                    return l ? r.tooltip &amp;&amp; c(f) : (r.tooltip === n &amp;&amp; (r.tooltip = i(J.likeTooltip(o)).click(h).delegate(&quot;a&quot;, &quot;click&quot;,
                    function(t) {
                        switch (this.className) {
                        case &quot;ds-like-tooltip-close&quot;:
                            c(t);
                            break;
                        default:
                            if (!e.open(this.href, &quot;_blank&quot;, &quot;height=500,width=600,top=0,left=0,toolbar=no,menubar=no,resizable=yes,location=yes,status=no&quot;)) return
                        }
                        return ! 1
                    })), r.tooltip.appendTo(s.innerEl).css({
                        top: u.position().top + u.outerHeight() - 4 + &quot;px&quot;,
                        left: 0
                    }), i(t.body).click(c)),
                    !1
                });
                return r.resetLikePanel(),
                ct() &amp;&amp; u.hide(),
                r
            },
            resetLikePanel: function() {
                this.el.find(&quot;.ds-like-panel&quot;).html(J.likePanel(this.embedThread.data))
            }
        },
        J.postListHead = function(e) {
            var t = e.data,
            n = e.options;
            return &apos;<div class="ds-comments-info"><div class="ds-sort"><a class="ds-order-desc">&apos; + k.latest + &apos;</a><a class="ds-order-asc">&apos; + k.earliest + &apos;</a><a class="ds-order-hot">&apos; + k.hottest + &apos;</a></div><ul class="ds-comments-tabs"><li class="ds-tab"><a class="ds-comments-tab-duoshuo ds-current" href="javascript:void(0);" target="_blank" rel="external"></a></li>&apos; + (n.show_reposts &amp;&amp; t.reposts ? &apos;<li class="ds-tab"><a class="ds-comments-tab-repost" href="javascript:void(0);" target="_blank" rel="external"></a></li>&apos;: &quot;&quot;) + (n.show_weibo &amp;&amp; t.weibo_reposts ? &apos;<li class="ds-tab"><a class="ds-comments-tab-weibo" href="javascript:void(0);" target="_blank" rel="external"></a></li>&apos;: &quot;&quot;) + (n.show_qqt &amp;&amp; t.qqt_reposts ? &apos;<li class="ds-tab"><a class="ds-comments-tab-qqt" href="javascript:void(0);" target="_blank" rel="external"></a></li>&apos;: &quot;&quot;) + &quot;</ul>&quot; + &quot;</div>&quot;
        },
        H.PostListHead = function(e) {
            this.embedThread = e
        },
        H.PostListHead.prototype = {
            render: function() {
                var e = this.embedThread,
                t = e.options,
                n = e.postList,
                r = this.el = i(J.postListHead(e)),
                s = r.find(&quot;ul.ds-comments-tabs&quot;).delegate(&quot;.ds-tab a&quot;, &quot;click&quot;,
                function(t) {
                    s.find(&quot;a.ds-current&quot;).removeClass(&quot;ds-current&quot;),
                    n.params.page = 1;
                    var r = t.currentTarget;
                    switch (r.className) {
                    case &quot;ds-comments-tab-duoshuo&quot;:
                        n.params.source = &quot;duoshuo&quot;,
                        e.replybox.el.show();
                        break;
                    case &quot;ds-comments-tab-repost&quot;:
                        n.params.source = &quot;repost&quot;,
                        e.replybox.el.hide();
                        break;
                    case &quot;ds-comments-tab-weibo&quot;:
                        n.params.source = &quot;weibo&quot;,
                        e.replybox.el.hide();
                        break;
                    case &quot;ds-comments-tab-qqt&quot;:
                        n.params.source = &quot;qqt&quot;,
                        e.replybox.el.hide();
                        break;
                    default:
                    }
                    return i(r).addClass(&quot;ds-current&quot;),
                    n.refetch(),
                    !1
                }),
                o = r.find(&quot;.ds-sort&quot;).delegate(&quot;a&quot;, &quot;click&quot;,
                function(e) {
                    return o.find(&quot;a.ds-current&quot;).removeClass(&quot;ds-current&quot;),
                    n.params.order = t.order = this.className.replace(&quot;ds-order-&quot;, &quot;&quot;),
                    n.params.page = 1,
                    n.refetch(),
                    i(this).addClass(&quot;ds-current&quot;),
                    !1
                });
                return o.find(&quot;.ds-order-&quot; + n.params.order).addClass(&quot;ds-current&quot;),
                this
            }
        },
        H.Paginator = function(e) {
            e = e || {};
            var t = this,
            n = t.el = e.el || i(&apos;<div class="ds-paginator"></div>&apos;),
            r = t.collection = e.collection;
            n.delegate(&quot;a&quot;, &quot;click&quot;,
            function(e) {
                return r.params.page = parseInt(this.innerHTML),
                r.refetch(),
                n.find(&quot;.ds-current&quot;).removeClass(&quot;ds-current&quot;),
                i(this).addClass(&quot;ds-current&quot;),
                !1
            })
        },
        H.Paginator.prototype = {
            reset: function(e) {
                function i(e) {
                    r.push(&apos;<a data-page="&apos; + e + &apos;" href="javascript:void(0);" target="_blank" rel="external">&apos; + e + &quot;</a>&quot;)
                }
                var t = this.collection.params.page || 1,
                n, r = [];
                if (t &gt; 1) {
                    i(1),
                    n = t &gt; 4 ? t - 2 : 2,
                    n &gt; 2 &amp;&amp; r.push(&apos;<span class="page-break">...</span>&apos;);
                    for (; n &lt; t; n++) i(n)
                }
                r.push(&apos;<a data-page="&apos; + t + &apos;" href="javascript:void(0);" class="ds-current" target="_blank" rel="external">&apos; + t + &quot;</a>&quot;);
                if (t &lt; e.pages) {
                    for (n = t + 1; n <= 4="" t="" +="" &&="" n="" <="" e.pages;="" n++)="" i(n);="" e.pages="" r.push('<span="" class="page-break">...</=></=></":></span>&apos;),
                    i(e.pages)
                }
                this.el.html(&apos;<div class="ds-border"></div>&apos; + r.join(&quot; &quot;))[e.pages &gt; 1 ? &quot;show&quot;: &quot;hide&quot;]()
            }
        },
        J.smiliesTooltip = function(e) {
            var t = &apos;<div id="ds-smilies-tooltip"><ul class="ds-smilies-tabs">&apos;;
            for (var n in e) t += &quot;<li><a>&quot; + n + &quot;</a></li>&quot;;
            return t + &apos;</ul><div class="ds-smilies-container"></div></div>&apos;
        },
        w.addSmilies = function(e, t) {
            var n = w.smiliesTooltip;
            n &amp;&amp; n.el.find(&quot;ul.ds-smilies-tabs&quot;).append(&quot;<li><a>&quot; + e + &quot;</a></li>&quot;),
            w.smilies[e] = t
        },
        H.SmiliesTooltip = function() {},
        H.SmiliesTooltip.prototype = {
            render: function() {
                var e = this,
                n = e.el = i(J.smiliesTooltip(q));
                return n.click(h).find(&quot;ul.ds-smilies-tabs&quot;).delegate(&quot;a&quot;, &quot;click&quot;,
                function(t) {
                    e.reset(this.innerHTML)
                }),
                n.find(&quot;.ds-smilies-container&quot;).delegate(&quot;img&quot;, &quot;click&quot;,
                function(n) {
                    var r = e.replybox,
                    i = r.el.find(&quot;textarea&quot;)[0],
                    s = i.value;
                    if (t.selection) {
                        i.value = s.substring(0, v.start) + this.title + s.substring(v.end, s.length),
                        i.value = i.value.replace(k.leave_a_message, &quot;&quot;),
                        i.focus();
                        var o = t.selection.createRange();
                        o.moveStart(&quot;character&quot;, v.start + this.title.length),
                        o.collapse(),
                        o.select()
                    } else {
                        var u = i.selectionStart + this.title.length;
                        i.value = s.substring(0, i.selectionStart) + this.title + s.substring(i.selectionEnd),
                        i.setSelectionRange(u, u)
                    }
                    r.hideSmilies(),
                    i.focus()
                }),
                this
            },
            reset: function(e) {
                var t = this.el.find(&quot;ul.ds-smilies-tabs&quot;);
                t.find(&quot;a.ds-current&quot;).removeClass(&quot;ds-current&quot;),
                t.find(&quot;a&quot;).filter(function() {
                    return this.innerHTML == e
                }).addClass(&quot;ds-current&quot;);
                var n = &quot;<ul>&quot;;
                return i.each(q[e],
                function(t, r) {
                    var i = e.indexOf(&quot;\u5fae\u535a&quot;) === 0 ? &quot;http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/&quot; + r.replace(&quot;_org&quot;, &quot;_thumb&quot;) : b + &quot;/images/smilies/&quot; + r;
                    e === &quot;WordPress&quot; &amp;&amp; (t = &quot; &quot; + t + &quot; &quot;),
                    n += &apos;<li><img src="/js/&apos; + i + &apos;" title="&apos; + p(t) + &apos;"></li>&apos;
                }),
                n += &quot;</ul>&quot;,
                this.el.find(&quot;.ds-smilies-container&quot;).html(n),
                this
            }
        },
        J.postPlaceholder = function() {
            return &apos;<li class="ds-post ds-post-placeholder">&apos; + k.no_comments_yet + &quot;</li>&quot;
        },
        J.post = function(e, t) {
            var n = K(e),
            r = n.user_id ? &apos; data-user-id=&quot;&apos; + n.user_id + &apos;&quot;&apos;: &quot;&quot;,
            s = n.qqt_account || &quot;&quot;,
            o = J.timeHtml(e.created_at, e.url),
            u = e.parents || [];
            switch (e.source) {
            case &quot;duoshuo&quot;:
                o += &apos;<a class="ds-post-reply" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-reply"></span>&apos; + k.reply + &quot;</a>&quot; + J.likePost(e) + &apos;<a class="ds-post-repost" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-share"></span>&apos; + k.repost + &quot;</a>&quot; + &apos;<a class="ds-post-report" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-report"></span>&apos; + k.report + &quot;</a>&quot; + (e.privileges[&quot;delete&quot;] ? &apos;<a class="ds-post-delete" href="javascript:void(0);" target="_blank" rel="external"><span class="ds-icon ds-icon-delete"></span>&apos; + k[&quot;delete&quot;] + &quot;</a>&quot;: &quot;&quot;);
                break;
            case &quot;qqt&quot;:
            case &quot;weibo&quot;:
                o += &apos;<a class="ds-weibo-comments" href="javascript:void(0);" target="_blank" rel="external">&apos; + k.comments + (e.type.match(/\-comment$/) ? &quot;&quot;: &apos;(<span class="ds-count">&apos; + e.comments + &quot;</span>)&quot;) + &quot;</a>&quot; + &apos;<a class="ds-weibo-reposts" href="javascript:void(0);" target="_blank" rel="external">&apos; + k.reposts + (e.type.match(/\-comment$/) ? &quot;&quot;: &apos;(<span class="ds-count">&apos; + e.reposts + &quot;</span>)&quot;) + &quot;</a>&quot;;
                break;
            default:
            }
            return &apos;<li class="ds-post" data-post-id="&apos; + e.post_id + &apos;"><div class="ds-post-self" data-post-id="&apos; + e.post_id + &apos;" data-thread-id="&apos; + e.thread_id + &apos;" data-root-id="&apos; + e.root_id + &apos;" data-source="&apos; + e.source + &apos;"><div class="ds-avatar" '="" +="" r="" "="">&quot; + J.avatar(n) + (w.sourceName[e.source] ? J.serviceIcon(e.source) : &quot;&quot;) + &apos;</div><div class="ds-comment-body"><div class="ds-comment-header">&apos; + (n.url ? &apos;<a class="ds-user-name ds-highlight" data-qqt-account="&apos; + s + &apos;" href="&apos; + p(n.url) + &apos;" '="" +="" (n.user_id="" ?="" "="" onclick="\" this.href="&quot;&quot; w.hosturl=&quot;&quot; user-url=&quot;&quot; ?user_id=&quot; + n.user_id + &quot; " ;\"":="" "")="" rel="nofollow" target="_blank" r="">&quot; + p(n.name) + &quot;</a>&quot;: &apos;<span class="ds-user-name" '="" +="" r="" data-qqt-account="&apos;+s+&apos;">&apos;+p(n.name)+&quot;</span>&quot;) +&quot;<span class="\" ua\""="">&quot; + sskadmin(e.author) + &quot;</span><span class="\" ua\""="">&quot; + ua(e.agent) +&quot;</span><span class="\" ua\""="">&quot;+ os(e.agent) + &quot;</span>&quot; +&quot;</div>&quot; + (t.max_depth == 1 &amp;&amp; t.show_context &amp;&amp; u.length ? &apos;<ol id="ds-ctx">&apos; + i.map(u,
            function(e, t) {
                return (t == 1 &amp;&amp; u.length &gt; 2 ? &apos;<li class="ds-ctx-entry"><a href="javascript:void(0);" class="ds-expand" target="_blank" rel="external">\u8fd8\u6709&apos; + (u.length - 2) + &quot;\u6761\u8bc4\u8bba</a></li>&quot;: &quot;&quot;) + (ot[e] ? J.ctxPost(ot[e].data, t, t &amp;&amp; t &lt; u.length - 1) : &quot;&quot;)
            }).join(&quot;&quot;) + &quot;</ol>&quot;: &quot;&quot;) + &quot;<p>&quot; + (u.length &gt;= t.max_depth &amp;&amp; (!t.show_context || t.max_depth &gt; 1) &amp;&amp; e.parent_id &amp;&amp; ot[e.parent_id] ? &apos;<a class="ds-comment-context" data-post-id="&apos; + e.post_id + &apos;" data-parent-id="&apos; + e.parent_id + &apos;">&apos; + k.reply_to + p(K(ot[e.parent_id].data).name) + &quot;: </a>&quot;: &quot;&quot;) + e.message + &apos;</p><div class="ds-comment-footer ds-comment-actions&apos; + (e.vote &gt; 0 ? " ds-post-liked":="" "")="" +="" '"="">&apos; + o + &quot;</div></div></div>&quot; + (t.max_depth &gt; 1 &amp;&amp; (e.childrenArray || e.children) &amp;&amp; e.source != &quot;weibo&quot; &amp;&amp; e.source != &quot;qqt&quot; ? &apos;<ul class="ds-children">&apos; + i.map(e.childrenArray || e.children,
            function(e) {
                return ot[e] ? J.post(ot[e].data, t) : &quot;&quot;
            }).join(&quot;&quot;) + &quot;</ul>&quot;: &quot;&quot;) + &quot;</li>&quot;
        };
        var $ = i(&apos;<div id="ds-bubble"><div class="ds-bubble-content"></div><div class="ds-arrow ds-arrow-down ds-arrow-border"></div><div class="ds-arrow ds-arrow-down"></div></div>&apos;),
        G = $.find(&quot;.ds-bubble-content&quot;).delegate(&quot;a.ds-ctx-open&quot;, &quot;click&quot;,
        function(e) {
            L(&quot;/api/posts/conversation&quot;, {
                post_id: G.attr(&quot;data-post-id&quot;)
            },
            function(e) {
                t.el.find(&quot;ol&quot;).html(i.map(e.response, J.ctxPost).join(&quot;\n&quot;))
            });
            var t = j(&apos;<h2>\u67e5\u770b\u5bf9\u8bdd</h2><ol id="ds-ctx"></ol>&apos;);
            return t.el.find(&quot;.ds-dialog&quot;).css(&quot;width&quot;, &quot;600px&quot;),
            t.el.find(&quot;.ds-dialog-body&quot;).css({
                &quot;max-height&quot;: &quot;350px&quot;,
                _height: &quot;350px&quot;,
                &quot;overflow-y&quot;: &quot;auto&quot;,
                &quot;padding-top&quot;: &quot;10px&quot;
            }),
            !1
        }),
        Y = bubbleOutTimer = 0,
        tt = function() {
            bubbleOutTimer &amp;&amp; (clearTimeout(bubbleOutTimer), bubbleOutTimer = 0)
        };
        bubbleOut = function() {
            bubbleOutTimer = setTimeout(function() {
                bubbleOutTimer = 0,
                $.detach()
            },
            400)
        },
        $.mouseenter(tt).mouseleave(bubbleOut),
        J.userInfo = function(e) {
            var t = [];
            return i.each(e.social_uid,
            function(e, n) {
                t.push(&apos;<a href="&apos; + w.REMOTE + " user-proxy="" "="" +="" e="" n="" '="" target="_blank" class="ds-service-icon ds-&apos; + e + &apos;" title="&apos; + w.sourceName[e] + &apos;"></a>&apos;)
            }),
            &apos;<a href="&apos; + p(e.url) + &apos;" class="ds-avatar" target="_blank">&apos; + J.avatarImg(e) + &apos;</a><a href="&apos; + p(e.url) + &apos;" class="ds-user-name ds-highlight" target="_blank">&apos; + p(e.name) + &quot;</a>&quot; + t.join(&quot;&quot;) + &apos;<p class="ds-user-card-meta"><a href="&apos; + w.REMOTE + " profile="" "="" +="" e.user_id="" '="" target="_blank"><span class="ds-highlight">&apos; + e.comments + &quot;</span>\u6761\u8bc4\u8bba</a></p>&quot; + (e.description ? &apos;<p class="ds-user-description">&apos; + p(e.description) + &quot;</p>&quot;: &quot;&quot;)
        },
        P.PostList = function(e) {
            e &amp;&amp; (e.params &amp;&amp; (this.params = e.params), e.embedThread &amp;&amp; (this.embedThread = e.embedThread)),
            this.el = i(&apos;<ul class="ds-comments"></ul>&apos;)
        },
        P.PostList.prototype = {
            url: &quot;/api/threads/listPosts&quot;,
            render: function() {
                return vt.call(this.el, this.embedThread, this.embedThread.options),
                this
            },
            reset: function(e) {
                var t = this.embedThread.options;
                this.el.html(e[0] ? i.map(e,
                function(e) {
                    return ot[e] ? J.post(ot[e].data, t) : &quot;&quot;
                }).join(&quot;&quot;) : J.postPlaceholder())
            },
            refetch: function() {
                var e = this,
                n = i(J.indicator()).appendTo(t.body).fadeIn(200);
                e.el.fadeTo(200, .5),
                L(e.url, e.params,
                function(t) {
                    at(ot, t.parentPosts || t.relatedPosts),
                    at(ut, t.users),
                    e.reset(t.response),
                    e.embedThread.paginator.reset(t.cursor),
                    e.el.fadeTo(200, 1),
                    w.scrollTo(e.el),
                    n.remove()
                })
            }
        },
        w.repostDialog = function(e, t, n, r) {
            var i = j(&apos;<h2>\u8f6c\u53d1\u5230\u5fae\u535a</h2><div class="ds-quote"><strong>@&apos; + p(K(e.data).name) + &quot;</strong>: &quot; + e.data.message + &quot;</div>&quot; + &quot;<form>&quot; + Q({
                post_id: e.data.post_id
            }) + &apos;<div class="ds-textarea-wrapper">&apos; + &apos;<textarea name="message" title="Ctrl+Enter\u5feb\u6377\u63d0\u4ea4" placeholder="&apos; + p(k.repost_reason) + &apos;">&apos; + p(t) + &quot;</textarea>&quot; + &apos;<pre class="ds-hidden-text"></pre>&apos; + &quot;</div>&quot; + &apos;<div class="ds-actions">&apos; + (r ? Q({
                &quot;service[]&quot;: r
            }) : &apos;<label><input type="checkbox" name="service[]" value="weibo" '="" +="" (rt.data.social_uid.weibo="" ?="" checked="checked" ':="" "")=""><span class="ds-service-icon ds-weibo"></span>\u65b0\u6d6a\u5fae\u535a</label>  &apos; + &apos;<label><input type="checkbox" name="service[]" value="qqt" '="" +="" (rt.data.social_uid.qq="" ?="" checked="checked" ':="" "")=""><span class="ds-service-icon ds-qqt"></span>\u817e\u8baf\u5fae\u535a</label>&apos;) + &apos;<button type="submit">&apos; + k.repost + &quot;</button>&quot; + &quot;</div>&quot; + &quot;</form>&quot;),
            s = i.el.find(&quot;form&quot;).submit(function(e) {
                return ! r &amp;&amp; !s.find(&quot;[type=checkbox]:checked&quot;)[0] ? (alert(&quot;\u8fd8\u6ca1\u6709\u9009\u53d1\u5e03\u5230\u54ea\u513f\u5462&quot;), !1) : (A(&quot;/api/posts/repost&quot;, w.toJSON(s),
                function(e) {
                    if (n &amp;&amp; r) {
                        var t = n.options,
                        i = dt(n.postList.el, e.response[r], t);
                        t.order == &quot;asc&quot; == (t.formPosition == &quot;top&quot;) &amp;&amp; w.scrollTo(i);
                        var s = n.el.find(&quot;.ds-comments-tab-&quot; + r + &quot; span.ds-highlight&quot;);
                        s.html(parseInt(s.html()) + 1)
                    }
                }), i.close(), !1)
            });
            return s.find(&quot;.ds-actions [type=checkbox]&quot;).change(function(e) {
                var t = this.value;
                if (this.checked &amp;&amp; !rt.data.social_uid[t == &quot;qqt&quot; ? &quot;qq&quot;: t]) {
                    mt(t);
                    return
                }
            }),
            B(s.find(&quot;textarea&quot;)).keyup(g).keyup(y).focus(),
            !1
        },
        J.toolbar = function(e) {
            var t = J.logoutUrl();
            return &apos;<div class="ds-toolbar"><div class="ds-account-control"><span class="ds-icon ds-icon-settings"></span> <span>\u5e10\u53f7\u7ba1\u7406</span><ul><li><a class="ds-bind-more" href="javascript:void(0);" style="border-top: none" target="_blank" rel="external">\u7ed1\u5b9a\u66f4\u591a</a></li><li><a target="_blank" href="&apos; + w.REMOTE + " settings="" "="" +="" w(x())="" '"="">&apos; + p(k.settings) + &quot;</a></li>&quot; + &apos;<li><a rel="nofollow" href="&apos; + t + &apos;" style="border-bottom: none">\u767b\u51fa</a></li>&apos; + &quot;</ul>&quot; + &quot;</div>&quot; + &apos;<div class="ds-visitor">&apos; + (rt.data.url ? &apos;<a class="ds-visitor-name" href="&apos; + p(rt.data.url) + &apos;" target="_blank">&apos; + p(rt.data.name) + &quot;</a>&quot;: &apos;<span class="ds-visitor-name">&apos; + p(rt.data.name) + &quot;</span>&quot;) + &apos;<a class="ds-unread-comments-count" href="javascript:void(0);" title="\u65b0\u56de\u590d" target="_blank" rel="external"></a>&apos; + &quot;</div>&quot; + &quot;</div>&quot;
        },
        H.EmbedThread = R.extend({
            uri: &quot;/api/threads/listPosts&quot;,
            params: &quot;thread-id local-thread-id source-thread-id thread-key category channel-key author-key author-id url limit order max-depth form-position container-url&quot; + (f.match(/MSIE 6\.0/) ? &quot;&quot;: &quot; title image thumbnail&quot;),
            render: function() {
                var e = this.el.attr(&quot;id&quot;, &quot;ds-thread&quot;).append(J.waitingImg()),
                t = e.width(),
                n = e.data(&quot;url&quot;) || !e.attr(&quot;data-thread-id&quot;) &amp;&amp; i(&quot;link[rel=canonical]&quot;).attr(&quot;href&quot;);
                n ? e.data(&quot;url&quot;, d(n)) : e.data(&quot;container-url&quot;, r.href),
                t &amp;&amp; t <= 400="" &&="" e.addclass("ds-narrow").data("max-depth",="" 1)="" },="" updatecounter:="" function(e)="" {="" var="" t="{" duoshuo:="" ["comments",="" "\u8bc4\u8bba"],="" repost:="" ["reposts",="" "\u8f6c\u8f7d"],="" weibo:="" ["weibo_reposts",="" "\u65b0\u6d6a\u5fae\u535a"],="" qqt:="" ["qqt_reposts",="" "\u817e\u8baf\u5fae\u535a"]="" };="" for="" (var="" n="" in="" t)="" if="" (!e="" ||="" e="=" n)="" r="this.data[t[n][0]];" this.el.find(".ds-comments-tab-"="" +="" n).html(this.el.hasclass("ds-narrow")="" ?="" '<span="" class="ds-service-icon ds-&apos; + n + &apos;"></=></span>&apos; + r: (r ? &apos;<span class="ds-highlight">&apos; + r + &quot;</span>\u6761&quot;: &quot;&quot;) + t[n][1])
                }
            },
            onError: function(e) {
                this.el.html(&quot;\u8bc4\u8bba\u6846\u51fa\u9519\u5566(&quot; + e.code + &quot;): &quot; + e.errorMessage)
            },
            onload: function(t) {
                var r = this,
                s = r.threadId = t.thread.thread_id,
                u = t.cursor,
                a = r.options = t.options,
                f = r.innerEl = _(i(&apos;<div id="ds-reset"></div>&apos;).appendTo(r.el));
                r.data = t.thread,
                at(ot, t.parentPosts || t.relatedPosts),
                at(ut, t.users),
                r.el.find(&quot;#ds-waiting&quot;).remove(),
                a.like_thread_enabled &amp;&amp; (r.meta = new H.Meta(r), r.meta.render().el.appendTo(f)),
                a.hot_posts &amp;&amp; t.hotPosts &amp;&amp; t.hotPosts.length &amp;&amp; (r.hotPosts = new H.HotPosts(i(&apos;<div class="ds-rounded"></div>&apos;), {
                    max_depth: 1,
                    show_context: a.show_context
                }), r.hotPosts.thread = r, r.hotPosts.el.appendTo(f), r.hotPosts.onload({
                    response: t.hotPosts,
                    options: {}
                })),
                r.postListHead = new H.PostListHead(r),
                r.postList = new P.PostList({
                    embedThread: r,
                    params: {
                        source: &quot;duoshuo&quot;,
                        thread_id: s,
                        max_depth: a.max_depth,
                        order: a.order,
                        limit: a.limit
                    }
                }),
                r.postList.render().reset(t.response),
                r.paginator = new H.Paginator({
                    collection: r.postList
                }),
                r.paginator.reset(u);
                var l = r.replybox = new H.Replybox(r),
                c = l.render().el.find(&quot;textarea&quot;);
                l.postList = r.postList.el;
                if (o) {
                    var h = &quot;ds_draft_&quot; + s;
                    c.bind(&quot;focus blur keyup&quot;,
                    function(e) {
                        var t = i(e.currentTarget).val();
                        try {
                            o[h] = t
                        } catch(e) {}
                    }),
                    o[h] &amp;&amp; c.val(o[h])
                }
                if (ct()) {
                    var p = i(J.loginButtons()).delegate(&quot;a.ds-more-services&quot;, &quot;click&quot;,
                    function() {
                        return p.find(&quot;.ds-additional-services&quot;).toggle(),
                        !1
                    });
                    M(p)
                } else r.toolbar = i(J.toolbar()).delegate(&quot;.ds-account-control&quot;, &quot;mouseenter&quot;,
                function() {
                    i(this).addClass(&quot;ds-active&quot;)
                }).delegate(&quot;.ds-account-control&quot;, &quot;mouseleave&quot;,
                function() {
                    i(this).removeClass(&quot;ds-active&quot;)
                }).delegate(&quot;a.ds-bind-more&quot;, &quot;click&quot;,
                function() {
                    var e = j(&quot;<h2>\u7ed1\u5b9a\u66f4\u591a\u5e10\u53f7</h2>&quot; + J.serviceList(1) + J.additionalServices(1) + &apos;<div style="clear:both"></div>&apos;).el.find(&quot;.ds-dialog&quot;).addClass(&quot;ds-dialog-bind-more&quot;).css(&quot;width&quot;, &quot;300px&quot;);
                    return M(e),
                    !1
                }).delegate(&quot;a.ds-unread-comments-count&quot;, &quot;click&quot;,
                function(e) {
                    return U(&quot;unread-comments&quot;),
                    !1
                });
                r.postListHead.render().el.appendTo(f)[a.formPosition == &quot;top&quot; ? &quot;before&quot;: &quot;after&quot;](&apos;<a name="respond"></a>&apos;, r.toolbar || p, l.el).after(r.postList.el, r.paginator.el),
                r.updateCounter(),
                t.alerts &amp;&amp; i.each(t.alerts,
                function(e, t) {
                    i(&apos;<div class="ds-alert">&apos; + t + &quot;</div>&quot;).insertBefore(r.toolbar || p)
                }),
                a.message &amp;&amp; c.val(a.message).focus(),
                i(J.poweredBy(a.poweredby_text)).appendTo(f),
                it.on(&quot;reset&quot;,
                function() {
                    var e = it.data.comments || 0;
                    f.find(&quot;a.ds-unread-comments-count&quot;).html(e).attr(&quot;title&quot;, e ? &quot;\u4f60\u6709&quot; + e + &quot;\u6761\u65b0\u56de\u590d&quot;: &quot;\u4f60\u6ca1\u6709\u65b0\u56de\u590d&quot;).css(&quot;display&quot;, e ? &quot;inline&quot;: &quot;none&quot;)
                }),
                a.mzadx_id &amp;&amp; (w.require(&quot;mzadxN&quot;,
                function() {}), i(&apos;<div id="MZADX_&apos; + a.mzadx_id + &apos;" style="margin:0 auto;"></div>&apos;).appendTo(f), __mz_rpq = e.__mz_rpq || [], __mz_rpq.push({
                    l: [a.mzadx_id],
                    r: &quot;1&quot;,
                    _srv: &quot;MZADX&quot;,
                    _callback: function(e, t) {}
                })),
                w.thread = r,
                it.data !== n &amp;&amp; it.trigger(&quot;reset&quot;),
                ct() || D({
                    visit_thread_id: r.threadId
                })
            },
            onMessage: function(e) {
                dt(this.postList.el, e, this.options)
            }
        }),
        J.hotPosts = function(e, t) {
            return &apos;<div class="ds-header ds-gradient-bg">&apos; + k.hot_posts_title + &quot;</div><ul>&quot; + i.map(e,
            function(e) {
                return ot[e] ? J.post(ot[e].data, t) : &quot;&quot;
            }).join(&quot;&quot;) + &quot;</ul>&quot;
        },
        H.HotPosts = R.extend({
            params: &quot;show-quote&quot;,
            tmpl: &quot;hotPosts&quot;,
            render: function() {
                return this.el.attr(&quot;id&quot;, &quot;ds-hot-posts&quot;),
                this
            },
            onload: function(e) {
                R.prototype.onload.call(this, e),
                vt.call(this.el.find(&quot;ul&quot;), this.thread, this.options)
            }
        }),
        J.commentList = function(e, t) {
            return i.map(e,
            function(e) {
                var n = K(e);
                return &apos;<li class="ds-comment&apos; + (t.show_avatars ? " ds-show-avatars":="" "")="" +="" '"="" data-post-id="&apos; + e.post_id + &apos;">&apos; + (t.show_avatars ? &apos;<div class="ds-avatar">&apos; + J.avatar(n, t.avatar_size) + &quot;</div>&quot;: &quot;&quot;) + &apos;<div class="ds-meta">&apos; + J.userAnchor(n) + (t.show_time ? J.timeHtml(e.created_at) : &quot;&quot;) + &quot;</div>&quot; + (t.show_title ? &apos;<div class="ds-thread-title">\u5728 <a href="&apos; + p(e.thread.url + " #comments")="" +="" '"="">&apos; + p(e.thread.title) + &apos;</a> \u4e2d\u8bc4\u8bba</div><div class="ds-excerpt">&apos; + e.message + &quot;</div>&quot;: &apos;<a class="ds-excerpt" title="&apos; + p(e.thread.title) + &apos; \u4e2d\u7684\u8bc4\u8bba" href="&apos; + p(e.thread.url + " #comments")="" +="" '"="">&apos; + e.message + &quot;</a>&quot;) + &quot;</li>&quot;
            }).join(&quot;&quot;)
        },
        H.RecentComments = R.extend({
            uri: &quot;/api/sites/listRecentPosts&quot;,
            params: &quot;show-avatars show-time show-title avatar-size show-admin excerpt-length num-items channel-key&quot;,
            tmpl: &quot;commentList&quot;,
            render: function() {
                this.el.attr(&quot;id&quot;, &quot;ds-recent-comments&quot;)
            }
        }),
        J.recentVisitors = function(e, t) {
            return i.map(e,
            function(e) {
                return &apos;<div class="ds-avatar">&apos; + J.avatar(e, t.avatar_size) + &quot;</div>&quot;
            }).join(&quot;&quot;)
        },
        H.RecentVisitors = R.extend({
            uri: &quot;/api/sites/listVisitors&quot;,
            params: &quot;show-time avatar-size num-items channel-key&quot;,
            tmpl: &quot;recentVisitors&quot;,
            render: function() {
                this.el.children().detach(),
                this.el.attr(&quot;id&quot;, &quot;ds-recent-visitors&quot;).append(this.waitingEl = i(J.waitingImg()))
            }
        }),
        J.topUsers = function(e, t) {
            return i.map(e,
            function(e) {
                return &apos;<div class="ds-avatar">&apos; + J.avatar(e, t.avatar_size) + &quot;<h4>&quot; + e.name + &quot;</h4>&quot; + &quot;</div>&quot;
            }).join(&quot;&quot;)
        },
        H.TopUsers = R.extend({
            uri: &quot;/api/sites/listTopUsers&quot;,
            params: &quot;show-time avatar-size num-items channel-key&quot;,
            tmpl: &quot;topUsers&quot;,
            render: function() {
                this.el.children().detach(),
                this.el.attr(&quot;id&quot;, &quot;ds-top-users&quot;).append(this.waitingEl = i(J.waitingImg()))
            }
        }),
        J.topThreads = function(e, t) {
            return i.map(e,
            function(e) {
                return &apos;<li><a target="_blank" href="&apos; + p(e.url) + &apos;" title="&apos; + e.title + &apos;">&apos; + e.title + &quot;</a>&quot; + &quot;</li>&quot;
            }).join(&quot;&quot;)
        },
        H.TopThreads = R.extend({
            uri: &quot;/api/sites/listTopThreads&quot;,
            params: &quot;range num-items channel-key&quot;,
            tmpl: &quot;topThreads&quot;,
            render: function() {
                this.el.children().detach(),
                this.el.attr(&quot;id&quot;, &quot;ds-top-threads&quot;).append(this.waitingEl = i(J.waitingImg()))
            }
        }),
        J.loginWidget = function() {
            var e = &apos;<div class="ds-icons-32">&apos;;
            return i.each([&quot;weibo&quot;, &quot;qq&quot;, &quot;renren&quot;, &quot;kaixin&quot;, &quot;douban&quot;, &quot;netease&quot;, &quot;sohu&quot;],
            function(t, n) {
                e += &apos;<a class="ds-&apos; + n + &apos;" href="&apos; + J.loginUrl(n) + &apos;">&apos; + w.sourceName[n] + &quot;</a>&quot;
            }),
            e + &quot;</div>&quot;
        },
        H.LoginWidget = R.extend({
            tmpl: &quot;loginWidget&quot;,
            render: function() {
                var e = this.el;
                e.attr(&quot;id&quot;, &quot;ds-login&quot;).html(J.loginWidget()),
                M(e, &quot;a&quot;),
                e.find(&quot;a.ds-logout&quot;).attr(&quot;href&quot;, J.logoutUrl())
            }
        }),
        H.ThreadCount = R.extend({
            onload: function(e) {
                var t = this.el,
                n = t.data(&quot;count-type&quot;) || &quot;comments&quot;,
                r = e.data[n];
                t[t.data(&quot;replace&quot;) ? &quot;replaceWith&quot;: &quot;html&quot;](k[n + &quot;_&quot; + (r ? r &gt; 1 ? &quot;multiple&quot;: &quot;one&quot;: &quot;zero&quot;)].replace(&quot;{num}&quot;, r))
            }
        });
        var yt = 0;
        w.initSelector = function(e, t) {
            var n = [];
            V() &amp;&amp; (i.isReady || !E) &amp;&amp; i(e).each(function(e, r) {
                var s = i(r);
                if (s.data(&quot;initialized&quot;)) return;
                s.data(&quot;initialized&quot;, !0);
                var o = new H[t.type](s, t);
                C.push(o);
                if (t.type === &quot;ThreadCount&quot;) {
                    var u = s.attr(&quot;data-thread-key&quot;);
                    s.attr(&quot;data-channel-key&quot;) &amp;&amp; (u = s.attr(&quot;data-channel-key&quot;) + &quot;:&quot; + u),
                    n.push(u),
                    st[u] || (st[u] = new et({})),
                    st[u].on(&quot;reset&quot;,
                    function() {
                        o.onload(this)
                    })
                } else if (o.uri) {
                    var a = {};
                    i.each(o.params.split(&quot; &quot;),
                    function(e, t) {
                        a[t.replace(/-/g, &quot;_&quot;)] = s.attr(&quot;data-&quot; + t) || s.data(t)
                    }),
                    L(o.uri, bt(a),
                    function(e) {
                        o.load(e)
                    })
                }
            }),
            n.length &amp;&amp; L(&quot;/api/threads/counts&quot;, bt({
                threads: n.join(&quot;,&quot;)
            }),
            function(e) {
                l(e),
                ft(k, e.options),
                at(st, e.response)
            })
        },
        (w.initView = function() {
            i.each(N, w.initSelector)
        })(),
        i(function() {
            if (!V()) return I(&quot;\u7f3a\u5c11duoshuoQuery\u7684\u5b9a\u4e49&quot;);
            setInterval(function() {
                i(&quot;.ds-time&quot;).each(function() {
                    var e = i(this).attr(&quot;datetime&quot;);
                    e &amp;&amp; (this.innerHTML = w.elapsedTime(e))
                })
            },
            2e4),
            z.ondomready &amp;&amp; z.ondomready(),
            w.initView(),
            !yt &amp;&amp; z.short_name &amp;&amp; L(&quot;/api/analytics/ping&quot;, bt({}), l)
        })
    })
})(window, document);</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>