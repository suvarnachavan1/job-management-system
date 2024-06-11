/**
 * crisp-client
 * @version v2.14.0 3654117
 * @author Crisp IM SAS
 * @date 6/11/2024
 */
(function(){try{new(function(){function t(){var t,i=this;try{this.ns="CrispLoader",this.n={warn:function(t,i){},error:function(t,i){},info:function(t,i){},log:function(t,i){},debug:function(t,i){}},this.s=!1,this.f="crisp-client",this.w="client.crisp.chat",this.y="client.relay.crisp.chat",this.v="stream.relay.crisp.chat",this.x="3654117",this.on="production",this.fn="https:",this._n="https://crisp.chat",this.fs="https://go.crisp.chat",this.ws="https://image.crisp.chat",this.ms="https://game.crisp.chat",this.$s="".concat(this.fn,"//").concat(this.y),this._e="".concat(this.fn,"//").concat(this.v),this.io="".concat(this.fn,"//").concat(this.w),this.do=[{urls:["stun:stun.media.crisp.chat:3478","stun:stun.media.crisp.chat:3479"]},{urls:["turn:turn.media.crisp.chat:3478?transport=udp","turn:turn.media.crisp.chat:3478?transport=tcp","turn:turn.media.crisp.chat:3479?transport=udp","turn:turn.media.crisp.chat:3479?transport=tcp","turns:turn.media.crisp.chat:443?transport=tcp"],username:"client_9F9kh",credential:"DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"}],this._a=!0,this.Yp={domains:[],agents:["Trident","Googlebot","Bingbot","Slurp","DuckDuckBot","Baiduspider","YandexBot","GTmetrix","Lighthouse","Acunetix","Ahrefs","SemrushBot","SiteAuditBot","SplitSignalBot"]},this.Xp="static/javascripts",this.Qp="static/stylesheets",this.Zp="$__CRISP_INSTANCE",this.el="$__CRISP_INCLUDED",this._f=100,this.t_=3e4,this.i_=1e3,this.n_=280,this.s_=320,this.e_=420,this.r_=[{pattern:/edg(?:e)?\/([0-9\.]+)/,versions:{support:18,legacy:117}},{pattern:/chrom(?:e|ium)\/([0-9\.]+)/,versions:{support:54,legacy:117}},{pattern:/firefox\/([0-9\.]+)/,versions:{support:54,legacy:65}},{pattern:/opr\/([0-9\.]+)/,versions:{support:41,legacy:103}},{pattern:/version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,versions:{support:12,legacy:14}},{pattern:/android ([0-9\.]+)/,versions:{support:5,legacy:10}}],this.o_=/(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i,this.c_(),!0===window[this.el]||void 0!==window[this.Zp]&&"function"==typeof window[this.Zp].__init||!0!==this.h_()||(window[this.el]=!0,"interactive"===document.readyState||"complete"===document.readyState?this.init():(t=document.onreadystatechange||function(){},window.addEventListener("DOMContentLoaded",function(){i.init()}),document.onreadystatechange=function(){"function"==typeof t&&t(),"interactive"!==document.readyState&&"complete"!==document.readyState||setTimeout(function(){i.init()},i.i_)}),this.a_())}catch(t){}}var i=t.prototype;return i.init=function(){var i,n,s=this,e="init";try{this.u_||!0===this.d_||this.p_(),this.u_&&!0!==this.d_&&(this.d_=!0,(i=document.createElement("div")).id="crisp-loader",document.getElementsByTagName("body")[0].appendChild(i),n=function(){return"none"===window.getComputedStyle(i).getPropertyValue("display")},function t(){s.l_=setTimeout(function(){s.l_=null,s.f_-=s._f,void 0!==window[s.Zp]&&"function"==typeof window[s.Zp].__init&&!0===n()?(s.n.info("".concat(s.ns,".").concat(e),"Dependencies loaded"),i.parentNode.removeChild(i),window[s.Zp].__init({dollar_crisp:window[s.Zp],project_name:s.f,url_go:s.fs,url_image:s.ws,url_game:s.ms,url_relay_client:s.$s,url_relay_stream:s._e,url_website:s._n,url_assets:s.io,rtc_ice:s.do,socket_affinity:s._a,client_environment:s.on,client_revision:s.x,website_domain:s.__,website_id:s.u_,token_id:s.w_,cookie_expire:s.Pi,cookie_domain:s.y_,page_url:s.m_,page_domain:s.I_,browser_useragent:s.v_,browser_timezone:s.g_,browser_capabilities:s.C_,browser_locales:s.R_,ready_trigger:s.E_,include_mode:s.S_,runtime_configuration:s.P_,reset_handler:function(){s.reset()}})):0<s.f_?t():s.n.error("".concat(s.ns,".").concat(e),"Could not load dependencies")},s._f)}())}catch(t){}},i.reset=function(){try{null!==this.l_&&clearTimeout(this.l_),this.c_(),this.init()}catch(t){}},i.a_=function(){try{this.b_("dns-prefetch",this.$s),this.b_("preconnect",this.io),this.D_(),this.O_()}catch(t){}},i.b_=function(t,i){try{var n=document.createElement("link");n.setAttribute("href",i),n.setAttribute("rel",t),n.setAttribute("crossorigin",""),this.T_(n),document.getElementsByTagName("head")[0].appendChild(n)}catch(t){}},i.D_=function(){try{var t=document.createElement("script");t.src=["".concat(this.io,"/"),"".concat(this.Xp,"/"),"client.js?".concat(this.x)].join(""),t.type="text/javascript",t.async=!0,this.T_(t),document.getElementsByTagName("head")[0].appendChild(t)}catch(t){}},i.O_=function(){try{var t=this.S_,i=document.createElement("link");i.href=["".concat(this.io,"/"),"".concat(this.Qp,"/"),"client_".concat(t,".css?").concat(this.x)].join(""),i.type="text/css",i.rel="stylesheet",this.T_(i),document.getElementsByTagName("head")[0].appendChild(i)}catch(t){}},i.c_=function(){this.N_(),this.p_(),this.k_(),this.K_()},i.N_=function(){this.d_=!1,this.l_=null,this.f_=this.t_,this.__=document.domain,this.m_=document.location.href,this.I_=document.location.hostname,this.v_=window.navigator.userAgent,this.g_=(new Date).getTimezoneOffset(),this.R_=this.A_(),this.S_=this.j_()},i.p_=function(){"string"==typeof CRISP_WEBSITE_ID&&CRISP_WEBSITE_ID?this.u_=CRISP_WEBSITE_ID:this.u_=this.B_(),"string"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.w_=CRISP_TOKEN_ID:"number"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.w_=CRISP_TOKEN_ID.toString():this.w_=null,"number"==typeof CRISP_COOKIE_EXPIRE&&0<CRISP_COOKIE_EXPIRE?this.Pi=CRISP_COOKIE_EXPIRE:this.Pi=null,"string"==typeof CRISP_COOKIE_DOMAIN&&CRISP_COOKIE_DOMAIN?this.y_=CRISP_COOKIE_DOMAIN:this.y_=null,"function"==typeof CRISP_READY_TRIGGER?this.E_=CRISP_READY_TRIGGER:this.E_={},"object"==typeof CRISP_RUNTIME_CONFIG?this.P_=CRISP_RUNTIME_CONFIG:this.P_={},"object"==typeof CRISP_INCLUDE_ATTRS?this.G_=CRISP_INCLUDE_ATTRS:this.G_={}},i.k_=function(){try{this.C_=[],"function"==typeof window.MutationObserver&&"function"==typeof JSON.stringify&&this.C_.push("browsing"),("function"==typeof window.RTCPeerConnection&&"object"==typeof navigator.mediaDevices&&"https:"===document.location.protocol&&(window.innerWidth||0)>=this.s_&&(window.innerHeight||0)>=this.e_||!0===this.s)&&this.C_.push("call")}catch(t){}},i.K_=function(){var t;try{this.P_.locale&&(-1!==(t=this.R_.indexOf(this.P_.locale))&&this.R_.splice(t,1),this.R_.unshift(this.P_.locale))}catch(t){}},i.T_=function(t){try{for(var i in this.G_)this.G_.hasOwnProperty(i)&&t.setAttribute(i,this.G_[i])}catch(t){}},i.B_=function(){var t=null;try{for(var i=document.querySelectorAll("script[src]"),n=0;n<i.length;n++){var s=this.o_.exec(i[n].src);if(s&&"string"==typeof s[1]){t=s[1];break}}}catch(t){}finally{return t}},i.j_=function(){var t="default";try{var i=(navigator.userAgent||"").toLowerCase(),n=(navigator.appVersion||"").toLowerCase(),s=!1,e=!1;-1===i.indexOf("opera mini/")&&-1===i.indexOf("msie")&&-1===n.indexOf("trident/")||(s=e=!0);for(var r=0;r<this.r_.length;r++){var o=this.r_[r],c=i.match(o.pattern),h=null!=c&&c[1]?parseInt(c[1],10):-1;if(!isNaN(h)&&1<=h){var a=o.versions.support,u=o.versions.legacy;h<a&&(e=!0),h<=u&&(s=!0);break}}!0===e?t=null:!0===s&&(t="legacy")}catch(t){}finally{return t}},i.h_=function(){var t=!0;try{(window.innerWidth&&window.innerWidth<this.n_||!this.S_||!0!==this.x_()||!0===this.U_(this.I_)||!0===this.L_(this.v_)||!window.WebSocket||window.__nativePerformance&&window.__nativePromise)&&(t=!1)}catch(t){}finally{return t}},i.x_=function(){var t,i,n=!1;try{!0===navigator.cookieEnabled?n=!0:window.localStorage&&"function"==typeof window.localStorage.setItem&&"function"==typeof window.localStorage.getItem&&"function"==typeof window.localStorage.removeItem&&(t="".concat((new Date).getTime()),i="crisp-client/loader/storage/check",window.localStorage.setItem(i,t),n=window.localStorage.getItem(i)===t)}catch(t){}finally{return n}},i.U_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var n=0;n<this.Yp.domains.length;n++){var s=this.Yp.domains[n],e=".".concat(s);if(t===s||t.slice(-1*e.length)===e){i=!0;break}}}catch(t){}finally{return i}},i.L_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var n=0;n<this.Yp.agents.length;n++)if(-1!==t.indexOf(this.Yp.agents[n])){i=!0;break}}catch(t){}finally{return i}},i.A_=function(){var t=[];try{for(var i,n=0<(null===(i=navigator.languages)||void 0===i?void 0:i.length)?navigator.languages:[navigator.language||navigator.userLanguage],s=0;s<n.length;s++)n[s]&&t.push(n[s])}catch(t){}finally{return t}},t}())}catch(t){}})();