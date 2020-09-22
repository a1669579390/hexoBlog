// build time:Tue Sep 22 2020 18:01:46 GMT+0800 (GMT+08:00)
var e={version:"0.1.4",hostname:"github.com",root:"/hexoBlog/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:null,valine:{appId:"7pz2gufe9XYUs6ErfamTfNj4-gzGzoHsz",appKey:"ov0dbhCWaWVlkMuXjUfGaleW",placeholder:"ヽ(○´∀`)ﾉ♪111",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,recordIP:true,serverURLs:null,requiredFields:["nick","mail"],enableQQ:true,masters:["hash of master@email.com","hash of master2@email.com"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"},quicklink:{timeout:3e3,priority:true},audio:["https://music.163.com/#/my/m/music/playlist?id=161237652"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const i=function(){return l("main > .inner").offsetHeight};const n=function(e,t,i){if(i){t()}else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;n=undefined;if(!i&&t)setTimeout(t,0)}};n.src=e;document.head.appendChild(n)}};const a=function(t,i){return(e[t][i].indexOf("npm")>-1?"//cdn.jsdelivr.net/":f)+e[t][i]};const s=function(e,t,i){if(LOCAL[e]){n(a("js",e),t||function(){window[e]=true},i||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:a("css",e)});window["css"+e]=true}};const c=function(e){var t=e.text||e.textContent||e.innerHTML||"";var i=e.parentNode;i.removeChild(e);var n=document.createElement("script");if(e.id){n.id=e.id}if(e.className){n.className=e.className}if(e.type){n.type=e.type}if(e.src){n.src=e.src;n.async=false}if(e.dataset.pjax!==undefined){n.dataset.pjax=""}if(t!==""){n.appendChild(document.createTextNode(t))}i.appendChild(n)};const o=function(e,t,i){Velocity(e,"scroll",{duration:500,easing:"easeOutQuart",offset:t||-S,complete:i||function(){}})};const l=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};l.all=function(e,t){t=t||document;return t.querySelectorAll(e)};l.each=function(e,t,i){return l.all(e,i).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t){var i=document.createElement(e);Object.assign(i,t);this.appendChild(i);return i},wrap:function(e){var t=document.createElement("div");Object.assign(t,e);this.parentNode.insertBefore(t,this);this.parentNode.removeChild(this);t.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e}},child:function(e){return l(e,this)},find:function(e){return l.all(e,this)},_class:function(e,t,i){var n=t.indexOf(" ")?t.split(" "):[t];var a=this;n.forEach(function(t){if(e=="toggle"){a.classList.toggle(t,i)}else{a.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const d={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const u=function(e){var t=this,i={type:"audio",mode:"random",btns:["play-pause","music"],events:{"play-pause":function(e){if(t.media.source.paused){t.media.play()}else{t.media.pause()}},music:function(e){if(t.media.list.hasClass("show")){t.media.hideList()}else{t.media.list.addClass("show");t.media.scroll();t.media.changeTitle()}}}};var n={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(i){var n=new RegExp(i[0]);var a=n.exec(e);if(a!==null){t=[i[1],i[2],a[1]]}});return t},lrc:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var i=[];const n=t.length;for(var a=0;a<n;a++){const s=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const r=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const c=s.length;for(var o=0;o<c;o++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[o]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const h=d+u+f;i.push([h,r])}}}i=i.filter(function(e){return e[1]});i.sort(function(e,t){return e[0]-t[0]});return i}else{return[]}}};t.media={pointer:-1,source:null,buttons:{},playlist:[],lrc:{},fetch:function(e,t){var i=this;var a=[];return new Promise(function(t,i){e.forEach(function(e){var i=n.parse(e);var s=JSON.stringify(i);var r=d.get(s);if(r){a.push.apply(a,JSON.parse(r));t(a)}else{fetch("https://api.i-meto.com/meting/api?server="+i[0]+"&type="+i[1]+"&id="+i[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){d.set(s,JSON.stringify(e));a.push.apply(a,e);t(a)}).catch(function(e){})}})})},load:function(e){if(e){if(this.options.rawList!==e){var t=this;this.options.rawList=e;this.fetch(e).then(function(e){t.playlist=e;a.list();t.setMode(t.options.mode)})}}},setMode:function(e){var i=this.playlist.length;if(!i)return;var a=function(e){if(e+1==i){e=-1}t.media.pointer=++e};switch(e){case"random":var s=n.random(i);if(this.pointer!==s){this.pointer=s}else{a(this.pointer)}break;case"next":a(this.pointer);break}this.setSource()},setCurrent:function(e){if(typeof e=="number"&&e!=this.pointer&&this.playlist[e]&&!this.playlist[e]["error"]){this.pointer=e;this.setSource()}},setSource:function(){var e=this.playlist[this.pointer];if(e["error"]){return}var t=false;if(!this.source.paused){t=true;this.stop()}this.source.attr("src",e.url);this.source.attr("title",e.title+" - "+e.author);a.progress();a.preview();if(t==true){this.play()}},play:function(){if(this.playlist[this.pointer]["error"]){return}this.source.play();this.changeTitle()},pause:function(){this.source.pause();document.title=p},stop:function(){this.source.pause();this.source.currentTime=0;document.title=p},scroll:function(){var e=this.list.find("li")[this.pointer];Velocity(e,"scroll",{container:e.parentNode})},scrollLrc:function(e){var t=this;if(!this.lrc.data)return;if(this.lrc.index>this.lrc.data.length-1||e<this.lrc.data[this.lrc.index][0]||(!this.lrc.data[this.lrc.index+1]||e>=this.lrc.data[this.lrc.index+1][0])){for(var i=0;i<this.lrc.data.length;i++){if(e>=this.lrc.data[i][0]&&(!this.lrc.data[i+1]||e<this.lrc.data[i+1][0])){t.lrc.index=i;var n=-(t.lrc.index-1);t.lrc.el.style.transform="translateY("+n+"rem)";t.lrc.el.style.webkitTransform="translateY("+n+"rem)";t.lrc.el.getElementsByClassName("current")[0].removeClass("current");t.lrc.el.getElementsByTagName("p")[i].addClass("current")}}}},hideList:function(){var e=this.list;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)},changeTitle:function(){if(!this.source.paused)document.title="Now Playing..."+this.playlist[this.pointer]["title"]+" - "+this.playlist[this.pointer]["author"]+" | "+p}};var a={button:function(e){if(!t.media.buttons[e]){var i=document.createElement("div");i.addClass(e+" btn");i.addEventListener("click",t.media.options.events[e]||function(){});t.appendChild(i);t.media.buttons[e]=i}},audio:function(){if(!t.media.source){var e=document.createElement("audio");e.addEventListener("error",function(){t.media.list.find("li")[t.media.pointer].addClass("error");t.media.playlist[t.media.pointer]["error"]=true;t.media.setMode("next")});e.addEventListener("play",function(){t.addClass("playing");t.media.list.addClass("playing");Y(e.attr("title"))});e.addEventListener("pause",function(){t.removeClass("playing");t.media.list.removeClass("playing")});e.addEventListener("timeupdate",function(){var i=Math.floor(e.currentTime/e.duration*100);t.media.progress.width(i+"%");if(t.media.lrc){t.media.scrollLrc(e.currentTime)}if(i==100){t.media.setMode("next");t.media.play()}});t.appendChild(e);t.media.source=e}},info:function(){if(!t.media.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ol></ol>';t.media.list=e;t.insertAfter(e);l("#main").addEventListener("click",function(){t.media.hideList()})}},list:function(){var e=t.media.list.child("ol");e.innerHTML="";t.media.playlist.forEach(function(i,n){var a=document.createElement("li");a.innerHTML='<span class="info"><span>'+i.title+"</span><span>"+i.author+"</span></span>";a.title=i.title+" - "+i.author;a.addEventListener("click",function(e){var i=e.currentTarget;if(t.media.pointer===n&&t.media.progress){if(t.media.source.paused){t.media.play()}else{t.media.source.currentTime=t.media.source.duration*Math.floor(e.clientX-i.left())/i.width()}return}t.media.setCurrent(n);t.media.play()});e.appendChild(a)})},progress:function(){if(t.media.progress){t.media.progress.parentNode.removeClass("current");t.media.progress.remove()}var e=t.media.list.find("li")[t.media.pointer];if(e){var i=document.createElement("div");i.addClass("progress");e.appendChild(i);t.media.progress=i;e.addClass("current");t.media.scroll()}},preview:function(){var e=t.media.list.child(".preview");var i=t.media.playlist[t.media.pointer];e.innerHTML='<div class="cover"><div class="disc"><img src="'+i.pic+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+i.title+"</h4><span>"+i.author+'</span><div class="lrc"></div></div>';var a="";fetch(i.lrc).then(function(e){return e.text()}).then(function(s){if(i!==t.media.playlist[t.media.pointer])return;t.media.lrc.data=n.lrc(s);var r="";t.media.lrc.data.forEach(function(e,t){a+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});var c=document.createElement("div");c.addClass("inner");c.innerHTML=a;e.child(".lrc").innerHTML="";e.child(".lrc").appendChild(c);t.media.lrc.el=c;t.media.lrc.index=0}).catch(function(e){});e.child(".cover").addEventListener("click",t.media.options.events["play-pause"])}},s=function(e){if(t.media.created)return;t.media.options=Object.assign(i,e);t.media.options.btns.forEach(a.button);a[t.media.options.type]();a.info();t.media.created=true};s(e)};Object.assign(HTMLElement.prototype,{player:u});var f=e.statics.indexOf("//")>0?e.statics:e.root;var h={x:"undefined",y:"undefined"};var m=0;var p,v;const g=document.getElementsByTagName("body")[0];const C=document.documentElement;const y=l("#container");const w=l("#loading");const b=l("#nav");const L=l("#header");const x=b.child(".toggle");const k=l("#quick");const E=l("#sidebar");const T=l("#brand");var N=l("#tool"),O,M,I,j;var H=l("#search");var S,A,q;const R={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");Velocity(w,"fadeIn",{complete:function(){R.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(R.lock)return;Velocity(w,"fadeOut");document.body.addClass("loaded");R.lock=true}};const V=function(e){var t=l(".theme .ic");if(e){C.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{C.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const z=function(e){if(C.attr("data-theme")=="dark")e="#222";l('meta[name="theme-color"]').attr("content",e)};const B=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){V("dark")}else{V()}});var e=d.get("theme");if(e){V(e)}l(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var i=g.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var n=function(){setTimeout(function(){Velocity(i,"fadeOut",{complete:function(){g.removeChild(i)}})},2500)};if(t.hasClass("i-sun")){Velocity(i,"fadeIn",{complete:function(){i.addClass("dark");V("dark");d.set("theme","dark");n()}})}else{i.addClass("dark");Velocity(i,"fadeIn",{complete:function(){i.removeClass("dark");V();d.del("theme");n()}})}})};const D=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":l('[rel="icon"]').attr("href",f+e.favicon.hidden);document.title=LOCAL.favicon.hide;R.show();clearTimeout(v);break;case"visible":l('[rel="icon"]').attr("href",f+e.favicon.normal);document.title=LOCAL.favicon.show;R.hide(1e3);v=setTimeout(function(){document.title=p},2e3);break}})};const Y=function(e){if(!e)return;var t=g.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){g.removeChild(t)},300)},3e3)};const U=function(e){S=b.height();A=L.height();q=A+l("#waves").height();P(null,1);E.style=""};const _=function(e){var t=window.innerHeight;var n=i();var a=n>t?n-t:document.body.scrollHeight-t;var s=window.pageYOffset>A;var r=window.pageYOffset>0;if(s){z("#FFF")}else{z("#222")}b.toggleClass("show",s);N.toggleClass("affix",r);T.toggleClass("affix",r);E.toggleClass("affix",window.pageYOffset>q&&document.body.offsetWidth>991);if(typeof h.y=="undefined"){h.y=window.pageYOffset}m=h.y-window.pageYOffset;if(m<0){b.removeClass("up");b.toggleClass("down",s)}else if(m>0){b.removeClass("down");b.toggleClass("up",s)}else{}h.y=window.pageYOffset;var c=Math.round(Math.min(100*window.pageYOffset/a,100))+"%";M.child("span").innerText=c;l(".percent").width(c)};const W=function(e){d.set(e,h.y)};const Q=function(){var e=window.location.hash;if(e){o(l(decodeURI(e)))}else{var t=d.get(window.location.href);if(t){o(g,t);d.del(window.location.href)}}};const F=function(e,t){var i=g.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const n=document.getSelection();const a=n.rangeCount>0?n.getRangeAt(0):false;i.select();i.setSelectionRange(0,e.length);i.readOnly=false;var s=document.execCommand("copy");t&&t(s);i.blur();if(a){n.removeAllRanges();n.addRange(a)}g.removeChild(i)};const P=function(e,t){if(E.hasClass("on")){E.removeClass("on");x.removeClass("close");Velocity(E,"transition.slideRightOut",{duration:200})}else{if(t)return;Velocity(E,"transition.slideRightIn",{duration:200,complete:function(){E.addClass("on");x.addClass("close")}})}};const $=function(){var e=E.child(".inner");var t=E.find(".panel");if(E.child(".tab")){e.removeChild(E.child(".tab"))}var i=document.createElement("ul"),n="active";i.className="tab";["contents","related","overview"].forEach(function(e){var t=E.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){j.display("none")}return}if(e=="contents"){j.display("")}var a=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);a.appendChild(s);a.addClass(e+" item");if(n){t.addClass(n);a.addClass(n)}else{t.removeClass("active")}a.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;E.find(".tab .item").forEach(function(e){e.removeClass("active")});E.find(".panel").forEach(function(e){e.removeClass("active")});E.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});i.appendChild(a);n=""});if(i.childNodes.length>1){e.insertBefore(i,e.childNodes[0]);E.child(".panels").style.paddingTop=""}else{E.child(".panels").style.paddingTop=".625rem"}};const G=function(){var e=l.all(".contents li");if(e.length<1){return}var t=Array.prototype.slice.call(e)||[];var i=null;t=t.map(function(e,t){var n=e.child("a.toc-link");var s=l(decodeURI(n.attr("href")));var r=s.child("a.anchor");var c=function(e){e.preventDefault();var n=l(decodeURI(e.currentTarget.attr("href")));i=t;o(n,-S,function(){a(t);i=null})};n.addEventListener("click",c);r&&r.addEventListener("click",function(e){c(e);F(LOCAL.path+e.currentTarget.attr("href"))});return s});var n=E.child(".panels .inner");var a=function(i,a){var s=e[i];if(!s)return;if(s.hasClass("current")){return}l.each(".toc .active",function(e){e.removeClass("active current")});t.forEach(function(e){e.removeClass("active")});s.addClass("active current");t[i].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var c=l(r.child("a.toc-link").attr("href"));if(c){c.addClass("active")}}r=r.parentNode}Velocity(s,"scroll",{container:n,offset:-(n.offsetHeight/2)})};var s=function(e){var i=0;var n=e[i];if(n.boundingClientRect.top>0){i=t.indexOf(n.target);return i===0?0:i-1}for(;i<e.length;i++){if(e[i].boundingClientRect.top<=0){n=e[i]}else{return t.indexOf(n.target)}}return t.indexOf(n.target)};var r=function(){var e=new IntersectionObserver(function(e,t){var n=s(e)+(m<0?1:0);if(i===null){a(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(t){t&&e.observe(t)})};r()};const J=function(){o(g)};const X=function(){o(g,y.height())};const K=function(){o(l("#comments"))};const Z=function(){l.each(".menu .item:not(.title)",function(t){var i=t.child("a[href]");if(!i)return;var n=i.pathname===location.pathname||i.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(i.pathname)&&location.pathname.startsWith(i.pathname);var s=i.hostname===location.hostname&&(n||a);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const ee=function(){if(!l(".index.wrap"))return;var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){if(t.target.hasClass("show")===false){t.target.addClass("show")}}else{if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}}})},{root:null,threshold:[.3]});l.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});l(".index.wrap .item:first-child").addClass("show");l.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(l(".cards .item.active")){l(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const te=function(){l.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const ie=function(){ne();if(!l(".md"))return;l(".article.wrap").oncopy=function(e){Y(LOCAL.copyright);var t=l("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var i="# "+t.child(".author").innerText;var n="# "+t.child(".link").innerText;var a="# "+t.child(".license").innerText;var s=i+"<br>"+n+"<br>"+a+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var r=i+"\n"+n+"\n"+a+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",s);e.clipboardData.setData("text/plain",r)}else if(window.clipboardData){return window.clipboardData.setData("text",r)}}};l.each(".md img",function(e){var t;if(t=e.attr("title")){var i=document.createElement("span");var n=document.createTextNode(t);i.appendChild(n);i.addClass("image-info");e.insertAfter(i)}});if(l(".md :not(a) > img, .md > img")){LOCAL["mediumzoom"]=true;s("mediumzoom",function(){window.mediumZoom(".md :not(a) > img, .md > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}l.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});l.each(".md > table",function(e){e.wrap({className:"table-container"})});l.each(".highlight > table",function(e){e.wrap({className:"code-container"})});l.each("figure.highlight",function(e){var t=e.child(".code-container");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var i=e.child(".copy-btn");i.addEventListener("click",function(e){var i=e.currentTarget;var n="",a="";t.find("pre").forEach(function(e){a+=n+e.innerText;n="\n"});F(a,function(e){i.child(".ic").className=e?"ic i-check":"ic i-times";i.blur();Y(LOCAL.copyright)})});i.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)});var n=e.child(".breakline-btn");n.addEventListener("click",function(t){var i=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");i.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");i.child(".ic").className="ic i-align-justify"}});var a=e.child(".fullscreen-btn");var s=function(){e.removeClass("fullscreen");g.removeClass("fullscreen");a.child(".ic").className="ic i-expand"};var r=function(t){var i=t.currentTarget;if(e.hasClass("fullscreen")){s();u&&u();o(e)}else{e.addClass("fullscreen");g.addClass("fullscreen");a.child(".ic").className="ic i-compress";d&&d()}};a.addEventListener("click",r);e.child("figcaption").addEventListener("click",r);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var c=t.child(".show-btn");var l=c.child("i");var d=function(){t.style.maxHeight="";c.addClass("open")};var u=function(){t.style.maxHeight="300px";c.removeClass("open")};c.addEventListener("click",function(e){if(c.hasClass("open")){s();u();o(t.parentNode)}else{d()}})}});l.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});l.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=l("#qr");if(t.display()==="inline-flex"){Velocity(t,"fadeOut")}else{Velocity(t,"transition.slideUpBigIn",{display:"inline-flex"})}})});l.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});l.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});l.each("div.tab",function(e,t){var i=e.attr("data-id");var n=e.attr("data-title");var a=l("#"+i);if(!a){a=document.createElement("div");a.className="tabs";a.id=i;e.parentNode.insertBefore(a,e)}var s=a.child(".nav");if(!s){s=a.createChild("ul",{className:"nav"})}var r=s.createChild("li",{innerHTML:n});if(t==0){r.addClass("active");e.addClass("active")}r.addEventListener("click",function(t){var i=t.currentTarget;a.find(".active").forEach(function(e){e.removeClass("active")});e.addClass("active");i.addClass("active")});a.appendChild(e)})};const ne=function(){var t=l("#comments");if(!t){I.display("none");return}else{I.display("");s("valine",function(){var i=e.valine;i.el="#comments";i.path=t.attr("data-id");new Valine(i)},window.Valine)}var i=new IntersectionObserver(function(e,t){var i=e[0];r("valine");if(i.isIntersecting){Velocity(l("#comments"),"transition.bounceUpIn");t.disconnect()}});i.observe(t)};const ae=function(t){if(e.search===null)return;if(!H){H=g.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var i=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=l(".search-input");if(t.value){e.search()}}});i.on("render",function(){t.refresh(l("#search-hits"))});i.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var i=t.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+e.root+t.path+'"><span>'+i+"</span>"+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);i.start();l.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(H,"transition.shrinkIn",{duration:200,complete:function(){l(".search-input").focus()}})})});const n=function(){document.body.style.overflow="";Velocity(H,"transition.shrinkOut")};H.addEventListener("click",function(e){if(e.target===H){n()}});l(".close-btn").addEventListener("click",n);window.addEventListener("pjax:success",n);window.addEventListener("keyup",function(e){if(e.key==="Escape"){n()}})};const se=function(){l.each(".overview .menu > .item",function(e){b.child(".menu").appendChild(e.cloneNode(true))});w.addEventListener("click",R.vanish);x.addEventListener("click",P);l(".dimmer").addEventListener("click",P);k.child(".down").addEventListener("click",X);k.child(".up").addEventListener("click",J);if(!N){N=L.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})}O=N.child(".player");M=N.child(".back-to-top");I=N.child(".chat");j=N.child(".contents");M.addEventListener("click",J);I.addEventListener("click",K);j.addEventListener("click",P);O.player()};const re=function(){W(window.location.href);if(E.hasClass("on")){Velocity(E,"transition.slideRightOut",{duration:200,complete:function(){E.removeClass("on");x.removeClass("close")}})}l("#content").innerHTML="";l("#content").appendChild(w.lastChild.cloneNode(true))};const ce=function(t){r("katex");s("copy_tex");r("mermaid");s("chart");if(!t){l.each("script[data-pjax]",c)}p=document.title;U();Z();$();G();te();ie();O.media.load(LOCAL.audio||e.audio||{});lozad(l.all("img, [data-background-image]"),{loaded:function(e){e.addClass("lozaded")}}).observe();R.hide();Q();ee()};const oe=function(){se();var t=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);D();B();ae(t);window.addEventListener("scroll",_);window.addEventListener("resize",U);window.addEventListener("pjax:send",re);window.addEventListener("pjax:success",ce);window.addEventListener("beforeunload",function(){W(window.location.href)});ce(1)};window.addEventListener("DOMContentLoaded",oe);console.log("%c Theme.Shoka v"+e.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
//rebuild by hrmmi 