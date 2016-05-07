// JavaScript Document    
/* 新浪异步加载方案*/
(function() {
    var w = this,
    d = document,
    version = '1.0.7',
    data = {},
    length = 0,
    cbkLen = 0;
    if (w.jsLoader) {
        if (w.jsLoader.version >= version) {
            return
        };
        data = w.jsLoader.getData();
        length = data.length;
    };
    var addEvent = function(obj, eventType, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventType, func)
        } else {
            obj.addEventListener(eventType, func, false)
        }
    };
    var domReady = false,
    ondomReady = function() {
        domReady = true
    };
    if (d.addEventListener) {
        var webkit = navigator.userAgent.match(/AppleWebKit\/(\d+)/);
        if (webkit && webkit[1] < 525) {
            doReadyStateCheck()
        } else {
            d.addEventListener("DOMContentLoaded",
            function() {
                d.removeEventListener("DOMContentLoaded", arguments.callee, false);
                ondomReady()
            },
            false)
        }
    };
    function doScrollCheck() {
        if (domReady) {
            return
        };
        try {
            d.documentElement.doScroll("left")
        } catch(e) {
            return
        };
        ondomReady()
    };
    function doReadyStateCheck() {
        if (domReady) {
            return
        };
        if (d.readyState == 'loaded' || d.readyState == 'complete') {
            ondomReady();
            return
        } else {
            setTimeout(doReadyStateCheck, 1);
            return
        }
    };
    function createPosNode() {
        if (jsLoader.caller) {
            return
        };
        cbkLen++;
        if (!domReady && d.attachEvent) {
            doScrollCheck()
        };
        if (!domReady) {
            try {
                d.write('<div style="display:none" id="_jl_pos_' + cbkLen + '"></div>');
                s = d.getElementById('_jl_pos_' + cbkLen)
            } catch(e) {
                var s = d.createElement('div');
                s.id = '_jl_pos_' + cbkLen;
                s.style.display = 'none';
                d.body.insertBefore(s, d.body.firstChild)
            }
        } else {
            var s = d.createElement('div');
            s.id = '_jl_pos_' + cbkLen;
            s.style.display = 'none';
            d.body.appendChild(s)
        };
        return s
    };
    function getScript(url, dispose, charset) {
        var scriptNode = d.createElement("script");
        scriptNode.type = "text/javascript";
        if (charset) {
            scriptNode.charset = charset
        };
        scriptNode.onreadystatechange = scriptNode.onload = function() {
            if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                if (dispose) {
                    dispose()
                };
                scriptNode.onreadystatechange = scriptNode.onload = null;
                scriptNode.parentNode.removeChild(scriptNode)
            }
        };
        scriptNode.src = url;
        var h = d.getElementsByTagName("head")[0];
        h.insertBefore(scriptNode, h.firstChild)
    };
    var write = d.write,
    posNode;
    function cWrite(str) {
        if (posNode.childNodes.length > 0) {
            return
        };
        if (posNode.innerHTML != '') {
            while (posNode.childNodes.length) {
                posNode.parentNode.insertBefore(posNode.childNodes[0], posNode)
            }
        };
        posNode.innerHTML = str;
        while (posNode.childNodes.length) {
            posNode.parentNode.insertBefore(posNode.childNodes[0], posNode)
        }
    };
    var JsObj = function(name, url) {
        this.name = name;
        this.url = url;
        this.callback = []
    };
    JsObj.prototype = {
        status: 'init',
        onload: function() {
            this.status = 'ok';
            var errors = [];
            for (var i = 0; i < this.callback.length; i++) {
                if (typeof this.callback[i] == 'function') {
                    try {
                        if (this.callback[i].posNode) {
                            posNode = this.callback[i].posNode;
                            d.write = cWrite
                        };
                        this.callback[i]();
                        if (this.callback[i].posNode) {
                            d.write = write;
                            this.callback[i].posNode.parentNode.removeChild(this.callback[i].posNode)
                        }
                    } catch(e) {
                        errors.push(e)
                    }
                }
            };
            this.callback = [];
            if (errors.length != 0) {
                throw errors[0]
            }
        }
    };
    w.jsLoader = function(cfg) {
        var url = cfg.url || "";
        var name = cfg.name || "";
        var callback = cfg.callback || "";
        var charset = cfg.charset || "";
        if (name) {
            if (!data[name]) {
                if (!url) {
                    data[name] = new JsObj(name);
                    data[name].status = 'waiting'
                } else {
                    data[name] = new JsObj(name, url)
                };
                length++
            } else if (data[name].status == 'waiting' && url) {
                data[name].status = 'init'
            };
            if (cfg.status) {
                data[name].status = cfg.status
            };
            if (data[name].status == 'loading' || data[name].status == 'waiting') {
                if (typeof callback == 'function') {
                    callback.posNode = createPosNode();
                    data[name].callback.push(callback)
                };
                return
            } else if (data[name].status == 'ok') {
                if (typeof callback == 'function') {
                    callback()
                };
                return
            }
        } else {
            if (!url) {
                return
            };
            for (var item in data) {
                if (data[item].url == url) {
                    name = item;
                    break
                }
            };
            if (!name) {
                name = 'noname' + length;
                data[name] = new JsObj(name, url);
                length++
            };
            if (data[name].status == 'loading') {
                if (typeof callback == 'function') {
                    callback.posNode = createPosNode();
                    data[name].callback.push(callback)
                };
                return
            } else if (data[name].status == 'ok') {
                if (typeof callback == 'function') {
                    callback()
                };
                return
            }
        };
        if (typeof callback == 'function') {
            callback.posNode = createPosNode();
            data[name].callback.push(callback)
        };
        getScript(url,
        function() {
            data[name].onload()
        },
        charset);
        data[name].status = 'loading'
    };
    w.jsLoader.version = version;
    w.jsLoader.getData = function() {
        return data
    }
})();

/**/
