/*static-0.1.0  2017-06-11 15:08:38*/

define("../js/app/dist/index",["fastclick","zepto","template","helper","api","utility","swiper","dialog","toast","goTop","loadjs","md5"],function(a,b,c){function d(){var a={url:v+"/api/jz/recommend.do",body:{id:u}};m.jsonp(a).done(function(a){a||(a={});var b=a.model||{},c=b.value||[],c=[{hardcoverId:1437,housesName:"国风美仑",houseArea:"103",room:1,hall:3,bathroom:1,roomNum:3,recommendType:"同小区同户型",title:"北欧风情清新地中海浪漫卧室1",titlePicUrl:"../images/images/demo.jpg"},{hardcoverId:1437,housesName:"富力尚悦居",houseArea:"113",room:3,hall:2,bathroom:1,roomNum:4,recommendType:"同小区不同户型",title:"北欧风情清新地中海浪漫卧室2",titlePicUrl:"../images/images/demo.jpg"},{hardcoverId:1437,housesName:"富力尚悦居2",houseArea:"143",room:3,hall:2,bathroom:2,roomNum:5,recommendType:"同小区不同户型",title:"北欧风情清新地中海浪漫卧室3",titlePicUrl:"../images/images/demo.jpg"}];k(".more-match-box").html(l.render("more-match-tpl",{data:c})),isAddCart&&isLogin&&e()}).fail(function(a){a||(a={}),q(a.msg)})}function e(){var a={url:v+"/api/jz/getSkusByArticleIds.do",body:{id:u}};m.jsonp(a).done(function(a){a||(a={});var b=a.model||{},c=b.value||[];c=[{articleId:1234,name:"卧室",skuNum:2,articleAssemble:[{skuId:3431731,skuImgUrl:"../images/images/designer.png",skuName:"好事达书柜书架 简约置物架自  木质层架收纳展示好事达书柜书架 简约置物架自  木质层架收纳展示好事达书柜书架 简约置物架自  木质层架收纳展示"},{skuId:1125276,skuImgUrl:"../images/images/designer.png",skuName:"好事达书柜书架 简约置物架自  木质层架收纳展示好事达书柜书架 简约置物架自  木质层架收纳展示"}]},{articleId:1234,name:"客厅",skuNum:2,articleAssemble:[{skuId:3581605,skuImgUrl:"../images/images/designer.png",skuName:"好事达书柜书架 简约置物架自  木质层架收纳展示"},{skuId:231407,skuImgUrl:"../images/images/designer.png",skuName:"好好事达书柜书架 简约置物架自  木质层架收纳展示好事达书柜书架 简约置物架自  木质层架收纳展示好事达书柜书架 简约置物架自  木质层架收纳展示东西"}]}];var d={url:v+"/api/sales/getSalesContent.do",body:{id:u}};m.jsonp(d).done(function(a){(a={SalesPromotion:[{name:"满100减20，满200减50",type:1,satisfy:100,favorable:20},{name:"满200减50，满200减50",type:1,satisfy:200,favorable:50}]})||(a={});var b=a.SalesPromotion||[];f(c,b)})}).fail(function(a){a||(a={}),q(a.msg)})}function f(a,b){var c=[],d=0,e=0,f=[];k.each(a,function(a,b){var e=b.articleAssemble||[];d+=b.skuNum,k.each(e,function(a,b){b.skuId&&c.push(b.skuId)})}),k(".collect-box").append(l.render("cart-bottom-tpl",{skuNum:d,promotionRule:b})),k(".pop-cart-box").html(l.render("cart-list-tpl",{data:a,skuNum:d,promotionRule:b}));var h={url:"http://pm.3.cn/prices/mgets?area=&origin=2&source=20&",body:{skuids:c.join(",")}};m.jsonp(h).done(function(a){a||(a=[]),k.each(a,function(a,b){var c=b.id,d=parseFloat(b.p);f.push(d),k(".good-price[skuId='"+c+"']").find("em").text(b.p)}),console.log(f),e=g(f,b),k(".totalPrice").text("¥"+e),console.log(e)}).fail(function(a){a||(a={}),q(a.msg)})}function g(a,b){if(b&&b.length){var c=a.reduce(function(a,b){return a+b});if(1==b[0].type||3==b[0].type){var d=0;for(b.sort(function(a,b){return b.satisfy-a.satisfy}),i=0;i<b.length;i++)if(c>=b[i].satisfy){d=b[i].favorable;break}return d>0?k(".promotionPrice").text("(已省¥"+d.toFixed(2)+")").show():k(".promotionPrice").text("").hide(),(c-d).toFixed(2)}a.sort(function(a,b){return b-a});var e=b[0].satisfy,f=b[0].favorable,g=0;if(a.length>=e){for(var h=0;h<f;h++)g+=a.pop();k(".promotionPrice").text("(已免"+f+"件¥"+g+")").show()}else k(".promotionPrice").text("").hide();return a.reduce(function(a,b){return a+b}).toFixed(2)}return a.reduce(function(a,b){return a+b}).toFixed(2)}function h(){new o(".banner-slider-box",{roundLengths:!0,initialSlide:0,speed:600,slidesPerView:"auto",pagination:".banner-swiper-pagination",centeredSlides:!0,followFinger:!0,loop:!0,onInit:function(a){k(".banner-slider-box li").eq(a.activeIndex).addClass("first")},onSlideChangeStart:function(a){var b=k(".banner-slider-box li").eq(a.activeIndex);b.addClass("actived").siblings().removeClass("actived first");var c=b.find("img").attr("src"),d=b.find(".title").text(),e=b.find(".title").attr("roomId");k(".banner-slider-box").css({background:"url("+c+") no-repeat","background-size":"cover"}),k(".banner-slider-box .goto-room").attr({href:"jing-room.html?articleId="+u+"&roomId="+e}).find("span").text(d)}})}function j(a,b,c){var d={url:v+"/api/articlePraise/favArticle.do",body:{flag:a,articleId:b}};m.jsonp(d).done(function(b){text=a?"已收藏":"收藏搭配",c.toggleClass("on").find("em").text(text)}).fail(function(a){a||(a={}),q(a.msg)})}a("fastclick")(document.body);var k=a("zepto"),l=a("template");a("helper");var m=a("api"),n=a("utility"),o=a("swiper"),p=a("dialog"),q=a("toast"),r=a("goTop"),s=(a("loadjs"),a("md5"));console.log(s("周德志")),r();var t=n.parseQueryString(),u=t.articleId,v="http://homeapi.jd.com",w={url:v+"/api/jz/hardcoverDetail.do",body:{id:91914,type:1},async:!1};m.jsonp(w).done(function(a){a||(a={});var b=a.model,b={baseInfo:{id:14085,labels:"",title:"北欧风情清新地中海浪漫卧室",titlePicUrl:"",articleType:"",praisecount:"",browsecount:"",summary:"每个人的户型图都不一样，我最大的改动是把门口入户花 园的墙砸掉了。和客厅打通后做了开放式的书房。其它范 围就做了一些小范围的调。",details:'<p>每个人的户型图都不一样，我最大的改动是把门口入户花</p><img src="../images/images/demo.jpg"><p>每个人的户型图都不一样，我最大的改动是把门口入户花</p><img src="../images/images/demo.jpg"><p>每个人的户型图都不一样，我最大的改动是把门口入户花</p><img src="../images/images/demo.jpg"><p>每个人的户型图都不一样，我最大的改动是把门口入户花</p><img src="../images/images/demo.jpg"><p>每个人的户型图都不一样，我最大的改动是把门口入户花</p>',writerVo:{id:33928,nickName:"绵绵的兔兔",headPicUrl:"../images/images/designer.png",roleId:1},articleVos:[{id:1,title:"客厅",titlePicUrl:"../images/images/1.jpg",content:"",threeDimensionalImgInfo:"",support3d:"",extendJson:""},{id:2,title:"卧室",titlePicUrl:"../images/images/2.jpg",content:"",threeDimensionalImgInfo:"",support3d:"",extendJson:""},{id:2,title:"厨房",titlePicUrl:"../images/images/3.jpg",content:"",threeDimensionalImgInfo:"",support3d:"",extendJson:""}],houses:{name:"国风美仑",provinceName:"",cityName:"北京",room:3,hall:2,cook:1,bathroom:1,houseImg:"../images/images/3.jpg",houseArea:"100"}},isAddCart:1,isLogin:1};isAddCart=b.isAddCart,isLogin=b.isLogin,k(".match-detail-page").prepend(l.render("jing-detail-tpl",{data:b})),h(),d()}).fail(function(a){a||(a={}),q(a.msg)}),k(".match-detail-page").delegate(".designer-detail .follow","click",function(){$this=k(this);var a="",b=k(this).attr("writerId");a=!k(this).hasClass("on");var c={url:v+"/api/attention/attentionWriter.do",body:{writerId:b,flag:a}};m.jsonp(c).done(function(b){text=a?"已关注":"关注TA",msg=a?"关注成功":"取消关注成功",$this.toggleClass("on").find("em").text(text),q(msg)}).fail(function(a){a||(a={}),q("关注失败")})}),k(".match-detail-page").delegate(".show-more-detail span","click",function(){k(".article-detail").css({"max-height":"none"}),k(".show-more-detail").remove()}),k(".match-detail-page").delegate(".collect-box .collect-btn","click",function(){$this=k(this);var a="",b=k(this).attr("articleId");a=k(this).hasClass("on")?0:1,a?j(a,b,$this):p({title:"确定要取消收藏吗?",type:"confirm",callback:function(){j(a,b,$this)}})}),k(".match-detail-page").delegate(".collect-box .show-btn","click",function(){k(".collect-box .show-btn").hide().siblings(".hide-btn").show(),k(".pop-cart-box").removeClass("todown").addClass("toup"),k(".pop-cart-mask").show(),k(".pop-cart-box").removeClass("hide")}),k(".match-detail-page").delegate(".collect-box .hide-btn","click",function(){k(".collect-box .hide-btn").hide().siblings(".show-btn").show(),k(".pop-cart-box").removeClass("toup").addClass("todown"),setTimeout(function(){k(".pop-cart-mask").hide(),k(".pop-cart-box").addClass("hide")},100)})}),define("../js/tpl/page",[],function(a,b,c){return'<div class="bigImg"><ul class="bigUl"><% for (var i = 0; i < list.length; i ++) { %><li style="background:<%= list[i].color %>;"><div class="ban_cter"><div class="imgBox"><a  class="focusArea" target="_blank" href="javascript:;"><img class="imgAnimate" src="<%= list[i].url %>" width="820" height="470" /><img class="imgText" src="<%= list[i].text %>"/></a></div><div class="mav"><a style="background:url(../images/smallImg.png) no-repeat;" href="javascript:;" target="_blank" class="smallImg"><i></i></a><span class="mask1"></span><a style="background:url(../images/smallImg2.png) no-repeat;" href="javascript:;" target="_blank" class="smallImg"></a><span class="mask2" ></span></div></div></li><% } %></ul></div><div class="smallBtn"><ul class="smallUl"><% for (var i = 0; i < list.length; i ++) { %><li class="<% if (i==0) { %>on<% } %>"> <%= i+1 %></li><% } %></ul></div>'}),define("../js/common/api",[],function(a,b,c){var d={};d.json=function(a){return a.body?a.body=JSON.stringify(a.body):a.body="{}",void 0==a.async&&(a.async=!0),void 0==a.cache&&(a.cache=!0),$.Deferred(function(b){var c=JSON.parse(a.body);c.rand=(new Date).getTime();var d=$.ajax({url:a.url,type:a.type||"GET",data:c,timeout:a.timeout||5e3,dataType:"json",async:a.async,cache:a.cache,success:function(a,c,d){a||(a={}),1==a.status?b.resolve(a.data,a):b.reject(a)},error:function(a){b.reject({type:"network",msg:"加载失败，请稍后重试"})}});b.xhr=d})},d.jsonp=function(a){return a.body?a.body=JSON.stringify(a.body):a.body="{}",void 0==a.async&&(a.async=!0),$.Deferred(function(b){var c=JSON.parse(a.body);c.rand=(new Date).getTime(),$.ajax({async:a.async,url:a.url,type:"GET",data:c,dataType:"jsonp",jsonp:"callback",timeout:a.timeout||5e3,success:function(a){b.resolve(a)},error:function(a){b.reject(a)}})})},c.exports=d}),define("../js/common/cookie",[],function(a,b,c){var d={};d.getCookie=function(a){if(document.cookie.length>0){var b=document.cookie.indexOf(a+"=");if(-1!=b){b=b+a.length+1;var c=document.cookie.indexOf(";",b);return-1==c&&(c=document.cookie.length),unescape(document.cookie.substring(b,c))}}return""},d.setCookie=function(a,b,c){var d=new Date;d.setDate(d.getDate()+c),document.cookie=a+"="+escape(b)+(null==c?"":";expires="+d.toGMTString())},d.checkCookie=function(){var a=d.getCookie("username");null!=a&&""!=a?alert("Welcome again "+a+"!"):null!=(a=prompt("Please enter your name:",""))&&""!=a&&d.setCookie("username",a,365)},c.exports=d}),define("../js/common/dialog",["zepto"],function(a,b,c){var d=a("zepto");return function(a){var b={title:"提示",type:"success",callback:null},c=d.extend(b,a);if(d(".dialog-box").length)return!1;var e='<div class="pop-mask"></div><div class="dialog-box"><p class="title">'+c.title+'</p><div class="dialog-btn"><ul><li class="cancel-btn">取消</li><li class="sure-btn">确定</li></ul></div></div>';d(".pop-mask, .dialog-box").remove(),d("body").append(e),$dialog=d(".dialog-box").show(),$mask=d(".pop-mask").show(),"confirm"==c.type?$dialog.find(".cancel-btn").css({display:"inline-block"}):($dialog.find(".cancel-btn").css({display:"none"}),$dialog.find(".sure-btn").addClass("only-sure-btn"));var f=function(){$dialog.remove(),$mask.remove()};d(".dialog-box .sure-btn").bind("click",function(){f(),c.callback&&"function"==typeof c.callback&&(c.callback(),"confirm"==c.type&&(c.callback=null))}),d(".dialog-box .cancel-btn").bind("click",function(){f(),c.callback=null})}}),define("../js/common/getLocation",["zepto"],function(a,b,c){var d=a("zepto");return function(){return d.Deferred(function(a){if(navigator&&navigator.geolocation){setTimeout(function(){a.reject()},2e4);try{navigator.geolocation.getCurrentPosition(function(b){var c=(b||{}).coords;isValidCoords(c)?a.resolve(c):a.reject()},function(b){a.reject(b)},{enableHighAcuracy:!0,timeout:5e3,maximumAge:3e3})}catch(b){a.reject(b)}}else a.reject()})}}),define("../js/common/getMore",["zepto"],function(a,b,c){a("zepto")}),define("../js/common/goTop",["zepto"],function(a,b,c){var d=a("zepto");return function(){clearInterval(b);var a=d(".go-top"),b=setInterval(function(){d(window).scrollTop()>400?a.show():a.hide()},500);a.bind("click",function(){a.hide(),d(window).scrollTop(0)})}}),define("../js/common/helper",["template"],function(a,b,c){var d=a("template");return d.helper("$getWinHeight",function(){return window.innerHeight}),d.helper("$halfWinWidth",function(){return.5*window.innerWidth}),d}),define("../js/common/loadjs",["zepto"],function(a,b,c){var d=a("zepto");return function a(b,c){if(a[b]){if(a[b].done)return d.Deferred(function(a){a.resolve()});if(a[b].loading)return a[b].Deferred}return a[b]={loading:!0,Deferred:d.Deferred(function(d){var e=document.createElement("script");if(e.src=b,c&&_.isObject(c))for(var f in c)e.setAttribute(f,c[f]);e.onload=function(){a[b].done=!0,a[b].loading=!1,a[b].Deferred=null,d.resolve()},e.onerror=function(){a[b]=null,d.reject()},document.getElementsByTagName("head")[0].appendChild(e)})},a[b].Deferred}}),define("../js/common/toast",["zepto"],function(a,b,c){var d=a("zepto");return function(a,b){var c=d(".toast-msg");if(0!=c.length||!a)return!1;var b=b||2e3,e=document.createElement("div");e.className="toast-msg",e.innerHTML=a,document.body.appendChild(e);var c=d(".toast-msg");c.show(),setTimeout(function(){c.remove()},b)}}),define("../js/common/utility",[],function(a,b,c){function d(a){var a=f.parseInt_10(a);return a<10&&(a="0"+a),a}function e(){for(var a=["","-webkit-","-ms-","-moz-","-o-"],b="",c=0;c<a.length;c++)b+="position:"+a[c]+"sticky;";var d=document.createElement("div"),e=document.body;d.style.cssText="display:none;"+b,e.appendChild(d);var f=/sticky/i.test(window.getComputedStyle(d).position);return e.removeChild(d),d=null,f}var f={};f.currentUrl=location.protocol+"//"+location.host+location.pathname,f.isMobile=function(a){return/^0?1(3|4|5|7|8)\d{9}$/.test((a||"").toString().trim())},f.getUserAgent=function(){return(navigator.userAgent||"").toLowerCase()},f.parseInt_10=function(a){return parseInt(a,10)},f.parseFloat_10=function(a){return parseFloat(a,10)},f.JSONparse=function(a){if("string"!=typeof a)return"";try{return JSON.parse(a)}catch(a){return""}},f.getTime=function(){return(new Date).getTime()},f.random=function(a,b){return a+Math.floor(b*Math.random())},f.parseQueryString=function(){for(var a={},b=location.search.substring(1),c=b.split("&"),d=c.length,e=0;e<d;e++){var f=c[e].split("=");a[f[0]]=f[1]}return a},f.checkRegEmoji=function(a){return/^[^\uD800-\uDBFF]+$/.test((a||"").toString().trim())},f.getCookie=function(a){if(document.cookie.length>0){var b=document.cookie.indexOf(a+"=");if(-1!=b){b=b+a.length+1;var c=document.cookie.indexOf(";",b);return-1==c&&(c=document.cookie.length),unescape(document.cookie.substring(b,c))}}return""},f.setCookie=function(a,b,c){var d=new Date;d.setDate(d.getDate()+c),document.cookie=a+"="+escape(b)+(null==c?"":";expires="+d.toGMTString())},f.deleteCookie=function(a,b,c){},f.houMinSec=function(a){var b=parseInt(a/3600),c=parseInt(a%60),e=parseInt((a-60*b*60)/60);return{hh:d(b),mm:d(e),ss:d(c)}},f.createCode=function(){for(var a="",b=(document.getElementById("checkCode"),[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]),c=0;c<6;c++){a+=b[Math.floor(36*Math.random())]}return a};var g=!1;try{sessionStorage.setItem("1","1"),g=!0}catch(a){}var h={data:{},getItem:function(a){return g?f.JSONparse(sessionStorage.getItem(a)):h.data[a]},setItem:function(a,b){g?sessionStorage.setItem(a,JSON.stringify(b)):h.data[a]=b},removeItem:function(a){g?sessionStorage.removeItem(a):delete h.data[a]}};f.sessionstate=h,f.isJDApp=function(){return"jdapp"==getUserAgent().split(";")[0].toLowerCase()},f.isJDios=function(){var a=getUserAgent(),b=a.split(";"),c="";return f.isJDApp()&&(c="iphone"==b[1].toLowerCase()),c},f.isJDandroid=function(){var a=getUserAgent(),b=a.split(";"),c="";return f.isJDApp()&&(c="android"==b[1].toLowerCase()),c},f.stickyDom=function(a){var b;if(a){var c=a.normal,d=a.fixedNav,f=a.fixedTop||0,g=a.view,h=a.from;a.normal&&a.fixedNav&&0!=c.length&&0!=d.length&&(e()?c.addClass("sticky"):(clearInterval(b),b=setInterval(function(){if(g){if(0==$("body").has(g).length)return void clearInterval(b);if(0==g.height())return void("stroeHomeShare"==h&&clearInterval(b))}c.get(0).getBoundingClientRect().top<=f?(d.show(),c.css("opacity",0)):(d.hide(),c.css("opacity",1))},10)))}},c.exports=f});