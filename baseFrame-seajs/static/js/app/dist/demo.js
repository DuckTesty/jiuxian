/*static-0.1.0  2017-06-11 20:13:49*/

define("../js/app/dist/demo",["fastclick","zepto","toast"],function(a,b,c){a("fastclick")(document.body);a("zepto");a("toast")("页面初始化")}),define("../js/tpl/page",[],function(a,b,c){return'<div class="bigImg"><ul class="bigUl"><% for (var i = 0; i < list.length; i ++) { %><li style="background:<%= list[i].color %>;"><div class="ban_cter"><div class="imgBox"><a  class="focusArea" target="_blank" href="javascript:;"><img class="imgAnimate" src="<%= list[i].url %>" width="820" height="470" /><img class="imgText" src="<%= list[i].text %>"/></a></div><div class="mav"><a style="background:url(../images/smallImg.png) no-repeat;" href="javascript:;" target="_blank" class="smallImg"><i></i></a><span class="mask1"></span><a style="background:url(../images/smallImg2.png) no-repeat;" href="javascript:;" target="_blank" class="smallImg"></a><span class="mask2" ></span></div></div></li><% } %></ul></div><div class="smallBtn"><ul class="smallUl"><% for (var i = 0; i < list.length; i ++) { %><li class="<% if (i==0) { %>on<% } %>"> <%= i+1 %></li><% } %></ul></div>'}),define("../js/common/toast",["zepto"],function(a,b,c){var d=a("zepto");return function(a,b){var c=d(".toast-msg");if(0!=c.length||!a)return!1;var b=b||2e3,e=document.createElement("div");e.className="toast-msg",e.innerHTML=a,document.body.appendChild(e);var c=d(".toast-msg");c.show(),setTimeout(function(){c.remove()},b)}});