/*! For license information please see 16.d90ec9d0f594514dbe9a.js.LICENSE.txt */
(self.webpackChunkpayload_starter_javascript=self.webpackChunkpayload_starter_javascript||[]).push([[16],{29016:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(67294),r=n(40460),s=n.n(r),i=n(28325),o=(n(35433),n(15251),n(24335),n(39980),n(74277),n(62356),n(96836),n(21029),n(73358),n(48170)),l=n(90546),u=n.n(l),c=n(953),g=n(90666),p=n(77070),d=n(35193);n(27413);const f=u()((e=>{const{path:t,name:n,required:r,validate:l=d.code,admin:{readOnly:u,style:f,className:h,width:m,language:y,description:v,condition:b}={},label:x}=e,[k]=(0,a.useState)((()=>i.languages[y]?e=>(0,i.highlight)(e,i.languages[y]):e=>e)),F=t||n,w=(0,a.useCallback)(((e,t)=>l(e,{...t,required:r})),[l,r]),{value:_,showError:A,setValue:S,errorMessage:P}=(0,o.Z)({path:F,validate:w,enableDebouncedValue:!0,condition:b}),E=["field-type","code",h,A&&"error",u&&"read-only"].filter(Boolean).join(" ");return a.createElement("div",{className:E,style:{...f,width:m}},a.createElement(g.Z,{showError:A,message:P}),a.createElement(c.Z,{htmlFor:`field-${F}`,label:x,required:r}),a.createElement(s(),{id:`field-${F.replace(/\./gi,"__")}`,value:_||"",onValueChange:u?()=>null:S,highlight:k,padding:25,style:{backgroundColor:"var(--theme-base-850)",color:"var(--theme-base-0)",fontFamily:'"Consolas", "Monaco", monospace',fontSize:12,pointerEvents:u?"none":"auto"}}),a.createElement(p.Z,{value:_,description:v}))}))},35433:()=>{Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},28325:(e,t,n)=>{var a=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,s;switch(n=n||{},r.util.type(t)){case"Object":if(s=r.util.objId(t),n[s])return n[s];for(var i in a={},n[s]=a,t)t.hasOwnProperty(i)&&(a[i]=e(t[i],n));return a;case"Array":return s=r.util.objId(t),n[s]?n[s]:(a=[],n[s]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var s=(a=a||r.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=s[o])}var u=a[e];return a[e]=i,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,a,s){s=s||{};var i=r.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=r.util.type(l);"Object"!==u||s[i(l)]?"Array"!==u||s[i(l)]||(s[i(l)]=!0,e(l,n,o,s)):(s[i(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var s,i=0;s=a.elements[i++];)r.highlightElement(s,!0===t,a.callback)},highlightElement:function(t,n,a){var s=r.util.getLanguage(t),i=r.languages[s];r.util.setLanguage(t,s);var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&r.util.setLanguage(o,s);var l={element:t,language:s,grammar:i,code:t.textContent};function u(e){l.highlightedCode=e,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),a&&a.call(l.element)}if(r.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return r.hooks.run("complete",l),void(a&&a.call(l.element));if(r.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(r.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(r.highlight(l.code,l.grammar,l.language));else u(r.util.encode(l.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),s.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new l;return u(r,r.head,e),o(e,r,t,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,s=0;a=n[s++];)a(t)}},Token:s};function s(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function o(e,t,n,a,l,g){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var d=n[p];d=Array.isArray(d)?d:[d];for(var f=0;f<d.length;++f){if(g&&g.cause==p+","+f)return;var h=d[f],m=h.inside,y=!!h.lookbehind,v=!!h.greedy,b=h.alias;if(v&&!h.pattern.global){var x=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,x+"g")}for(var k=h.pattern||h,F=a.next,w=l;F!==t.tail&&!(g&&w>=g.reach);w+=F.value.length,F=F.next){var _=F.value;if(t.length>e.length)return;if(!(_ instanceof s)){var A,S=1;if(v){if(!(A=i(k,w,e,y))||A.index>=e.length)break;var P=A.index,E=A.index+A[0].length,C=w;for(C+=F.value.length;P>=C;)C+=(F=F.next).value.length;if(w=C-=F.value.length,F.value instanceof s)continue;for(var $=F;$!==t.tail&&(C<E||"string"==typeof $.value);$=$.next)S++,C+=$.value.length;S--,_=e.slice(w,C),A.index-=w}else if(!(A=i(k,0,_,y)))continue;P=A.index;var j=A[0],O=_.slice(0,P),z=_.slice(P+j.length),L=w+_.length;g&&L>g.reach&&(g.reach=L);var D=F.prev;if(O&&(D=u(t,D,O),w+=O.length),c(t,D,S),F=u(t,D,new s(p,m?r.tokenize(j,m):j,b,j)),z&&u(t,F,z),S>1){var K={cause:p+","+f,reach:L};o(e,t,n,F.prev,w,K),g&&K.reach>g.reach&&(g.reach=K.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function c(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),r.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+o+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,s=n.code,i=n.immediateClose;e.postMessage(r.highlight(s,r.languages[a],a)),i&&e.close()}),!1),r):r;var g=r.util.currentScript();function p(){r.manual||r.highlightAll()}if(g&&(r.filename=g.src,g.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var d=document.readyState;"loading"===d||"interactive"===d&&g&&g.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==n.g&&(n.g.Prism=a)},15251:()=>{!function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism)},39980:()=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript},74277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},62356:()=>{!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,r=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return r})),RegExp(e,t)}r=s(r).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(i).join(""):""},o=function(t){for(var n=[],a=0;a<t.length;a++){var r=t[a],s=!1;if("string"!=typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===i(r.content[0].content[1])&&n.pop():"/>"===r.content[r.content.length-1].content||n.push({tagName:i(r.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===r.type&&"{"===r.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===r.type&&"}"===r.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof r)&&n.length>0&&0===n[n.length-1].openedBraces){var l=i(r);a<t.length-1&&("string"==typeof t[a+1]||"plain-text"===t[a+1].type)&&(l+=i(t[a+1]),t.splice(a+1,1)),a>0&&("string"==typeof t[a-1]||"plain-text"===t[a-1].type)&&(l=i(t[a-1])+l,t.splice(a-1,1),a--),t[a]=new e.Token("plain-text",l,null,l)}r.content&&"string"!=typeof r.content&&o(r.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||o(e.tokens)}))}(Prism)},24335:()=>{Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},21029:()=>{!function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}(Prism)},96836:()=>{!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(Prism)},73358:()=>{!function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+n.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+n.source+")?)",r=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(e,t){t=(t||"").replace(/m/g,"")+"m";var n=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return a})).replace(/<<value>>/g,(function(){return e}));return RegExp(n,t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return a}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return a})).replace(/<<key>>/g,(function(){return"(?:"+r+"|"+s+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(s),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)},40460:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},u=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n(67294)),g=90,p=219,d=222,f=192,h=100,m="undefined"!=typeof window&&"navigator"in window&&/Win/i.test(navigator.platform),y="undefined"!=typeof window&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),v="npm__react-simple-code-editor__textarea",b="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(v,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(v," {\n    color: transparent !important;\n  }\n\n  .").concat(v,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,a=e.selectionStart,r=e.selectionEnd;t._recordChange({value:n,selectionStart:a,selectionEnd:r})}},t._getLines=function(e,t){return e.substring(0,t).split("\n")},t._recordChange=function(e,n){var a,r,i;void 0===n&&(n=!1);var o=t._history,l=o.stack,u=o.offset;if(l.length&&u>-1){t._history.stack=l.slice(0,u+1);var c=t._history.stack.length;if(c>h){var g=c-h;t._history.stack=l.slice(g,c),t._history.offset=Math.max(t._history.offset-g,0)}}var p=Date.now();if(n){var d=t._history.stack[t._history.offset];if(d&&p-d.timestamp<3e3){var f=/[^a-z0-9]([a-z0-9]+)$/i,m=null===(a=t._getLines(d.value,d.selectionStart).pop())||void 0===a?void 0:a.match(f),y=null===(r=t._getLines(e.value,e.selectionStart).pop())||void 0===r?void 0:r.match(f);if((null==m?void 0:m[1])&&(null===(i=null==y?void 0:y[1])||void 0===i?void 0:i.startsWith(m[1])))return void(t._history.stack[t._history.offset]=s(s({},e),{timestamp:p}))}}t._history.stack.push(s(s({},e),{timestamp:p})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,a=t._history.stack[t._history.offset];a&&n&&(t._history.stack[t._history.offset]=s(s({},a),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,a=e.offset,r=n[a-1];r&&(t._updateInput(r),t._history.offset=Math.max(a-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,a=e.offset,r=n[a+1];r&&(t._updateInput(r),t._history.offset=Math.min(a+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,a=n.tabSize,r=n.insertSpaces,s=n.ignoreTabKey,i=n.onKeyDown;if(!i||(i(e),!e.defaultPrevented)){27===e.keyCode&&e.currentTarget.blur();var o=e.currentTarget,l=o.value,u=o.selectionStart,c=o.selectionEnd,h=(r?" ":"\t").repeat(a);if(9===e.keyCode&&!s&&t.state.capture)if(e.preventDefault(),e.shiftKey){var v=(F=t._getLines(l,u)).length-1,b=t._getLines(l,c).length-1,x=l.split("\n").map((function(e,t){return t>=v&&t<=b&&e.startsWith(h)?e.substring(h.length):e})).join("\n");if(l!==x){var k=F[v];t._applyEdits({value:x,selectionStart:(null==k?void 0:k.startsWith(h))?u-h.length:u,selectionEnd:c-(l.length-x.length)})}}else if(u!==c){var F,w=(F=t._getLines(l,u)).length-1,_=t._getLines(l,c).length-1;k=F[w];t._applyEdits({value:l.split("\n").map((function(e,t){return t>=w&&t<=_?h+e:e})).join("\n"),selectionStart:k&&/\S/.test(k)?u+h.length:u,selectionEnd:c+h.length*(_-w+1)})}else{var A=u+h.length;t._applyEdits({value:l.substring(0,u)+h+l.substring(c),selectionStart:A,selectionEnd:A})}else if(8===e.keyCode){var S=u!==c;if(l.substring(0,u).endsWith(h)&&!S){e.preventDefault();A=u-h.length;t._applyEdits({value:l.substring(0,u-h.length)+l.substring(c),selectionStart:A,selectionEnd:A})}}else if(13===e.keyCode){if(u===c){var P=t._getLines(l,u).pop(),E=null==P?void 0:P.match(/^\s+/);if(null==E?void 0:E[0]){e.preventDefault();var C="\n"+E[0];A=u+C.length;t._applyEdits({value:l.substring(0,u)+C+l.substring(c),selectionStart:A,selectionEnd:A})}}}else if(57===e.keyCode||e.keyCode===p||e.keyCode===d||e.keyCode===f){var $=void 0;57===e.keyCode&&e.shiftKey?$=["(",")"]:e.keyCode===p?$=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===d?$=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==f||e.shiftKey||($=["`","`"]),u!==c&&$&&(e.preventDefault(),t._applyEdits({value:l.substring(0,u)+$[0]+l.substring(u,c)+$[1]+l.substring(c),selectionStart:u,selectionEnd:c+2}))}else!(y?e.metaKey&&e.keyCode===g:e.ctrlKey&&e.keyCode===g)||e.shiftKey||e.altKey?(y?e.metaKey&&e.keyCode===g&&e.shiftKey:m?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===g&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):77!==e.keyCode||!e.ctrlKey||y&&!e.shiftKey||(e.preventDefault(),t.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),t._undoEdit())}},t._handleChange=function(e){var n=e.currentTarget,a=n.value,r=n.selectionStart,s=n.selectionEnd;t._recordChange({value:a,selectionStart:r,selectionEnd:s},!0),t.props.onValueChange(a)},t._history={stack:[],offset:-1},t._input=null,t}return r(t,e),t.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(t.prototype,"session",{get:function(){return{history:this._history}},set:function(e){this._history=e.history},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.value,a=t.style,r=t.padding,i=t.highlight,o=t.textareaId,l=t.textareaClassName,g=t.autoFocus,p=t.disabled,d=t.form,f=t.maxLength,h=t.minLength,m=t.name,y=t.placeholder,x=t.readOnly,F=t.required,w=t.onClick,_=t.onFocus,A=t.onBlur,S=t.onKeyUp,P=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),E=u(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),C={paddingTop:r,paddingRight:r,paddingBottom:r,paddingLeft:r},$=i(n);return c.createElement("div",s({},E,{style:s(s({},k.container),a)}),c.createElement("textarea",{ref:function(t){return e._input=t},style:s(s(s({},k.editor),k.textarea),C),className:v+(l?" ".concat(l):""),id:o,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:w,onKeyUp:S,onFocus:_,onBlur:A,disabled:p,form:d,maxLength:f,minLength:h,name:m,placeholder:y,readOnly:x,required:F,autoFocus:g,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),c.createElement("pre",s({className:P,"aria-hidden":"true",style:s(s(s({},k.editor),k.highlight),C)},"string"==typeof $?{dangerouslySetInnerHTML:{__html:$+"<br />"}}:{children:$})),c.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:b}}))},t.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t}(c.Component);t.default=x;var k={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}}}]);