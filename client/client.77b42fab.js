function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e,t,n,s,r,o,a){const c=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(c){const r=i(t,n,s,a);e.p(r,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let f,d,h=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function m(e,t){h?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=p(1,r+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;s[e]=n[o]+1;const a=o+1;n[a]=e,r=Math.max(a,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function g(e,t,n){h&&!n?m(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function _(){return y(" ")}function E(){return y("")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function x(e){return function(t){return t.preventDefault(),e.call(this,t)}}function T(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function A(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:T(e,s,t[s])}function I(e){return Array.from(e.childNodes)}function N(e,t,n,s,r=!1){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o))return n(o),e.splice(s,1),r||(e.claim_info.last_index=s),o}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o))return n(o),e.splice(s,1),r?e.claim_info.last_index--:e.claim_info.last_index=s,o}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function P(e,t,n,s){return N(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s?w(t):$(t)))}function L(e,t){return N(e,(e=>3===e.nodeType),(e=>{e.data=""+t}),(()=>y(t)),!0)}function R(e){return L(e," ")}function k(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function O(e){const t=k(e,"HTML_TAG_START",0),n=k(e,"HTML_TAG_END",t);if(t===n)return new D;const s=e.splice(t,n+1);return b(s[0]),b(s[s.length-1]),new D(s.slice(1,s.length-1))}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function H(e,t){e.value=null==t?"":t}function U(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function M(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=U();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=S(n.contentWindow,"resize",t)}),m(e,n),()=>{(s||r&&n.contentWindow)&&r(),b(n)}}function j(e,t=document.body){return Array.from(t.querySelectorAll(e))}class D{constructor(e){this.e=this.n=null,this.l=e}m(e,t,n=null){this.e||(this.e=$(t.nodeName),this.t=t,this.l?this.n=this.l:this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)g(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}function G(e){d=e}function q(){if(!d)throw new Error("Function called outside component initialization");return d}function B(e){q().$$.on_mount.push(e)}function z(e){q().$$.after_update.push(e)}function K(e){q().$$.on_destroy.push(e)}const J=[],V=[],W=[],F=[],Y=Promise.resolve();let Q=!1;function X(e){W.push(e)}let Z=!1;const ee=new Set;function te(){if(!Z){Z=!0;do{for(let e=0;e<J.length;e+=1){const t=J[e];G(t),ne(t.$$)}for(G(null),J.length=0;V.length;)V.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];ee.has(t)||(ee.add(t),t())}W.length=0}while(J.length);for(;F.length;)F.pop()();Q=!1,Z=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}const se=new Set;let re;function oe(){re={r:0,c:[],p:re}}function ae(){re.r||r(re.c),re=re.p}function ie(e,t){e&&e.i&&(se.delete(e),e.i(t))}function ce(e,t,n,s){if(e&&e.o){if(se.has(e))return;se.add(e),re.c.push((()=>{se.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function le(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function ue(e){return"object"==typeof e&&null!==e?e:{}}function fe(e){e&&e.c()}function de(e,t){e&&e.l(t)}function he(e,t,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,s),a||X((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(X)}function pe(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){-1===e.$$.dirty[0]&&(J.push(e),Q||(Q=!0,Y.then(te)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(t,n,o,a,i,c,l=[-1]){const u=d;G(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&me(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){h=!0;const e=I(n.target);f.fragment&&f.fragment.l(e),e.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&ie(t.$$.fragment),he(t,n.target,n.anchor,n.customElement),h=!1,te()}G(u)}class be{$destroy(){pe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ve=[];function $e(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!ve.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ve.push(n,t)}if(e){for(let e=0;e<ve.length;e+=2)ve[e][0](ve[e+1]);ve.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const we={};var ye={owner:"cafeeurope",repo:"status.cafe-europe.info",sites:[{name:"Infohalle (prod)",url:"http://portal.infohalle.com/"},{name:"Infohalle (stage)",url:"https://stage-portal.infohalle.com/"},{name:"typo3",url:"https://nachrichtenaustausch.ch/typo3/"},{name:"punkt4",url:"http://punkt4.info/"},{name:"swisstrade",url:"http://swisstrade.com/"},{name:"cafe europe",url:"http://cafe-europe.info/"},{name:"ce email",url:"https://host.cafe-europe.info/"}],"status-website":{cname:"status.cafe-europe.info",logoUrl:"https://raw.githubusercontent.com/cafeeurope/status.cafe-europe.info/master/assets/celogo.png",name:"Status",introTitle:"uptime monitor and status page",introMessage:"",navbar:[{title:"Status",href:"/"}]},path:"https://status.cafe-europe.info",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function _e(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ee(t){let n,s,r,o=ye["status-website"]&&!ye["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=$("img"),this.h()},l(e){n=P(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){T(n,"alt",""),n.src!==(s=ye["status-website"].logoUrl)&&T(n,"src",s),T(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}(),a=ye["status-website"]&&!ye["status-website"].hideNavTitle&&function(t){let n,s,r=ye["status-website"].name+"";return{c(){n=$("div"),s=y(r)},l(e){n=P(e,"DIV",{});var t=I(n);s=L(t,r),t.forEach(b)},m(e,t){g(e,n,t),m(n,s)},p:e,d(e){e&&b(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=_(),a&&a.c(),this.h()},l(e){n=P(e,"DIV",{});var t=I(n);s=P(t,"A",{href:!0,class:!0});var i=I(s);o&&o.l(i),r=R(i),a&&a.l(i),i.forEach(b),t.forEach(b),this.h()},h(){T(s,"href",ye["status-website"].logoHref||ye.path),T(s,"class","logo svelte-a08hsz")},m(e,t){g(e,n,t),m(n,s),o&&o.m(s,null),m(s,r),a&&a.m(s,null)},p(e,t){ye["status-website"]&&!ye["status-website"].hideNavLogo&&o.p(e,t),ye["status-website"]&&!ye["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&b(n),o&&o.d(),a&&a.d()}}}function Se(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=$("li"),n=$("a"),s=y(a),o=_(),this.h()},l(e){t=P(e,"LI",{});var r=I(t);n=P(r,"A",{"aria-current":!0,href:!0,class:!0});var i=I(n);s=L(i,a),i.forEach(b),o=R(r),r.forEach(b),this.h()},h(){T(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),T(n,"href",e[1].href.replace("$OWNER",ye.owner).replace("$REPO",ye.repo)),T(n,"class","svelte-a08hsz")},m(e,r){g(e,t,r),m(t,n),m(n,s),m(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&T(n,"aria-current",r)},d(e){e&&b(t)}}}function xe(t){let n,s,r,o,a,i=ye["status-website"]&&ye["status-website"].logoUrl&&Ee(),c=ye["status-website"]&&ye["status-website"].navbar&&function(e){let t,n=ye["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Se(_e(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=E()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=E()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(1&r){let o;for(n=ye["status-website"].navbar,o=0;o<n.length;o+=1){const a=_e(e,n,o);s[o]?s[o].p(a,r):(s[o]=Se(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),l=ye["status-website"]&&ye["status-website"].navbarGitHub&&!ye["status-website"].navbar&&function(t){let n,s,r,o=ye.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=y(o),this.h()},l(e){n=P(e,"LI",{});var t=I(n);s=P(t,"A",{href:!0,class:!0});var a=I(s);r=L(a,o),a.forEach(b),t.forEach(b),this.h()},h(){T(s,"href",`https://github.com/${ye.owner}/${ye.repo}`),T(s,"class","svelte-a08hsz")},m(e,t){g(e,n,t),m(n,s),m(s,r)},p:e,d(e){e&&b(n)}}}();return{c(){n=$("nav"),s=$("div"),i&&i.c(),r=_(),o=$("ul"),c&&c.c(),a=_(),l&&l.c(),this.h()},l(e){n=P(e,"NAV",{class:!0});var t=I(n);s=P(t,"DIV",{class:!0});var u=I(s);i&&i.l(u),r=R(u),o=P(u,"UL",{class:!0});var f=I(o);c&&c.l(f),a=R(f),l&&l.l(f),f.forEach(b),u.forEach(b),t.forEach(b),this.h()},h(){T(o,"class","svelte-a08hsz"),T(s,"class","container svelte-a08hsz"),T(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t),m(n,s),i&&i.m(s,null),m(s,r),m(s,o),c&&c.m(o,null),m(o,a),l&&l.m(o,null)},p(e,[t]){ye["status-website"]&&ye["status-website"].logoUrl&&i.p(e,t),ye["status-website"]&&ye["status-website"].navbar&&c.p(e,t),ye["status-website"]&&ye["status-website"].navbarGitHub&&!ye["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&b(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Te(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Ae extends be{constructor(e){super(),ge(this,e,Te,xe,a,{segment:0})}}var Ie={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ne(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Pe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Le(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Ie[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ne(Pe(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Le(Ne(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Pe(r[8])+'" alt="'+Pe(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Pe(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Le(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Pe(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Re(e,t,n){const s=e.slice();return s[3]=t[n],s}function ke(e,t,n){const s=e.slice();return s[3]=t[n],s}function Oe(e,t,n){const s=e.slice();return s[8]=t[n],s}function Ce(t){let n;return{c(){n=$("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",`${ye.path}/themes/${(ye["status-website"]||{}).theme||"light"}.css`)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function He(t){let n;return{c(){n=$("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",(ye["status-website"]||{}).themeUrl)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Ue(t){let n,s;return{c(){n=$("script"),this.h()},l(e){n=P(e,"SCRIPT",{src:!0}),I(n).forEach(b),this.h()},h(){n.src!==(s=t[8].src)&&T(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Me(t){let n;return{c(){n=$("link"),this.h()},l(e){n=P(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){T(n,"rel",t[3].rel),T(n,"href",t[3].href),T(n,"media",t[3].media)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function je(t){let n;return{c(){n=$("meta"),this.h()},l(e){n=P(e,"META",{name:!0,content:!0}),this.h()},h(){T(n,"name",t[3].name),T(n,"content",t[3].content)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function De(t){let n,s,r,o,a,l,u,f,d,h,p,w,y,S,x,A,N,L,k=Le(ye.i18n.footer.replace(/\$REPO/,`https://github.com/${ye.owner}/${ye.repo}`))+"",C=(ye["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ye["status-website"]||{}).customHeadHtml+"";return{c(){n=new D,s=E(),this.h()},l(e){n=O(e),s=E(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}();let H=((ye["status-website"]||{}).themeUrl?He:Ce)(t),U=(ye["status-website"]||{}).scripts&&function(e){let t,n=(ye["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ue(Oe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=E()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=E()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(0&r){let o;for(n=(ye["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Oe(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ue(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),M=(ye["status-website"]||{}).links&&function(e){let t,n=(ye["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Me(ke(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=E()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=E()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(0&r){let o;for(n=(ye["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=ke(e,n,o);s[o]?s[o].p(a,r):(s[o]=Me(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),G=(ye["status-website"]||{}).metaTags&&function(e){let t,n=(ye["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=je(Re(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=E()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=E()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(0&r){let o;for(n=(ye["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Re(e,n,o);s[o]?s[o].p(a,r):(s[o]=je(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),q=ye["status-website"].css&&function(t){let n,s,r=`<style>${ye["status-website"].css}</style>`;return{c(){n=new D,s=E(),this.h()},l(e){n=O(e),s=E(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}(),B=ye["status-website"].js&&function(t){let n,s,r=`<script>${ye["status-website"].js}<\/script>`;return{c(){n=new D,s=E(),this.h()},l(e){n=O(e),s=E(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}(),z=(ye["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ye["status-website"]||{}).customBodyHtml+"";return{c(){n=new D,s=E(),this.h()},l(e){n=O(e),s=E(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}();w=new Ae({props:{segment:t[0]}});const K=t[2].default,J=function(e,t,n,s){if(e){const r=i(e,t,n,s);return e[0](r)}}(K,t,t[1],null);return{c(){C&&C.c(),n=E(),H.c(),s=$("link"),r=$("link"),o=$("link"),U&&U.c(),a=E(),M&&M.c(),l=E(),G&&G.c(),u=E(),q&&q.c(),f=E(),B&&B.c(),d=E(),h=_(),z&&z.c(),p=_(),fe(w.$$.fragment),y=_(),S=$("main"),J&&J.c(),x=_(),A=$("footer"),N=$("p"),this.h()},l(e){const t=j('[data-svelte="svelte-ri9y7q"]',document.head);C&&C.l(t),n=E(),H.l(t),s=P(t,"LINK",{rel:!0,href:!0}),r=P(t,"LINK",{rel:!0,type:!0,href:!0}),o=P(t,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(t),a=E(),M&&M.l(t),l=E(),G&&G.l(t),u=E(),q&&q.l(t),f=E(),B&&B.l(t),d=E(),t.forEach(b),h=R(e),z&&z.l(e),p=R(e),de(w.$$.fragment,e),y=R(e),S=P(e,"MAIN",{class:!0});var i=I(S);J&&J.l(i),i.forEach(b),x=R(e),A=P(e,"FOOTER",{class:!0});var c=I(A);N=P(c,"P",{}),I(N).forEach(b),c.forEach(b),this.h()},h(){T(s,"rel","stylesheet"),T(s,"href",`${ye.path}/global.css`),T(r,"rel","icon"),T(r,"type","image/svg"),T(r,"href",(ye["status-website"]||{}).faviconSvg||(ye["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),T(o,"rel","icon"),T(o,"type","image/png"),T(o,"href",(ye["status-website"]||{}).favicon||"/logo-192.png"),T(S,"class","container"),T(A,"class","svelte-jbr799")},m(e,t){C&&C.m(document.head,null),m(document.head,n),H.m(document.head,null),m(document.head,s),m(document.head,r),m(document.head,o),U&&U.m(document.head,null),m(document.head,a),M&&M.m(document.head,null),m(document.head,l),G&&G.m(document.head,null),m(document.head,u),q&&q.m(document.head,null),m(document.head,f),B&&B.m(document.head,null),m(document.head,d),g(e,h,t),z&&z.m(e,t),g(e,p,t),he(w,e,t),g(e,y,t),g(e,S,t),J&&J.m(S,null),g(e,x,t),g(e,A,t),m(A,N),N.innerHTML=k,L=!0},p(e,[t]){(ye["status-website"]||{}).customHeadHtml&&C.p(e,t),H.p(e,t),(ye["status-website"]||{}).scripts&&U.p(e,t),(ye["status-website"]||{}).links&&M.p(e,t),(ye["status-website"]||{}).metaTags&&G.p(e,t),ye["status-website"].css&&q.p(e,t),ye["status-website"].js&&B.p(e,t),(ye["status-website"]||{}).customBodyHtml&&z.p(e,t);const n={};1&t&&(n.segment=e[0]),w.$set(n),J&&J.p&&(!L||2&t)&&c(J,K,e,e[1],L?t:-1,null,null)},i(e){L||(ie(w.$$.fragment,e),ie(J,e),L=!0)},o(e){ce(w.$$.fragment,e),ce(J,e),L=!1},d(e){C&&C.d(e),b(n),H.d(e),b(s),b(r),b(o),U&&U.d(e),b(a),M&&M.d(e),b(l),G&&G.d(e),b(u),q&&q.d(e),b(f),B&&B.d(e),b(d),e&&b(h),z&&z.d(e),e&&b(p),pe(w,e),e&&b(y),e&&b(S),J&&J.d(e),e&&b(x),e&&b(A)}}}function Ge(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class qe extends be{constructor(e){super(),ge(this,e,Ge,De,a,{segment:0})}}function Be(e){let t,n,s=e[1].stack+"";return{c(){t=$("pre"),n=y(s)},l(e){t=P(e,"PRE",{});var r=I(t);n=L(r,s),r.forEach(b)},m(e,s){g(e,t,s),m(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&C(n,s)},d(e){e&&b(t)}}}function ze(t){let n,s,r,o,a,i,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Be(t);return{c(){s=_(),r=$("h1"),o=y(t[0]),a=_(),i=$("p"),c=y(f),l=_(),d&&d.c(),u=E(),this.h()},l(e){j('[data-svelte="svelte-1moakz"]',document.head).forEach(b),s=R(e),r=P(e,"H1",{class:!0});var n=I(r);o=L(n,t[0]),n.forEach(b),a=R(e),i=P(e,"P",{class:!0});var h=I(i);c=L(h,f),h.forEach(b),l=R(e),d&&d.l(e),u=E(),this.h()},h(){T(r,"class","svelte-17w3omn"),T(i,"class","svelte-17w3omn")},m(e,t){g(e,s,t),g(e,r,t),m(r,o),g(e,a,t),g(e,i,t),m(i,c),g(e,l,t),d&&d.m(e,t),g(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&C(o,e[0]),2&t&&f!==(f=e[1].message+"")&&C(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Be(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&b(s),e&&b(r),e&&b(a),e&&b(i),e&&b(l),d&&d.d(e),e&&b(u)}}}function Ke(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Je extends be{constructor(e){super(),ge(this,e,Ke,ze,a,{status:0,error:1})}}function Ve(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&fe(n.$$.fragment),s=E()},l(e){n&&de(n.$$.fragment,e),s=E()},m(e,t){n&&he(n,e,t),g(e,s,t),r=!0},p(e,t){const r=16&t?le(o,[ue(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){oe();const e=n;ce(e.$$.fragment,1,0,(()=>{pe(e,1)})),ae()}a?(n=new a(i()),fe(n.$$.fragment),ie(n.$$.fragment,1),he(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&ie(n.$$.fragment,e),r=!0)},o(e){n&&ce(n.$$.fragment,e),r=!1},d(e){e&&b(s),n&&pe(n,e)}}}function We(e){let t,n;return t=new Je({props:{error:e[0],status:e[1]}}),{c(){fe(t.$$.fragment)},l(e){de(t.$$.fragment,e)},m(e,s){he(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){pe(t,e)}}}function Fe(e){let t,n,s,r;const o=[We,Ve],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=E()},l(e){n.l(e),s=E()},m(e,n){a[t].m(e,n),g(e,s,n),r=!0},p(e,r){let c=t;t=i(e),t===c?a[t].p(e,r):(oe(),ce(a[c],1,1,(()=>{a[c]=null})),ae(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),ie(n,1),n.m(s.parentNode,s))},i(e){r||(ie(n),r=!0)},o(e){ce(n),r=!1},d(e){a[t].d(e),e&&b(s)}}}function Ye(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Fe]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new qe({props:o}),{c(){fe(n.$$.fragment)},l(e){de(n.$$.fragment,e)},m(e,t){he(n,e,t),s=!0},p(e,[t]){const s=12&t?le(r,[4&t&&{segment:e[2][0]},8&t&&ue(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(ie(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){pe(n,e)}}}function Qe(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return z(l),u=we,f=s,q().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,a,i,c,s,l]}class Xe extends be{constructor(e){super(),ge(this,e,Qe,Ye,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ze=[],et=[{js:()=>Promise.all([import("./index.fb8c154f.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.e4e479eb.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].ad0ca26d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].93f6c5ac.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.01ee6325.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],tt=(nt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:nt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:nt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var nt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function st(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))}function rt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ot,at=1;const it="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ct={};let lt,ut;function ft(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function dt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(lt))return null;let t=e.pathname.slice(lt.length);if(""===t&&(t="/"),!Ze.some((e=>e.test(t))))for(let n=0;n<tt.length;n+=1){const s=tt[n],r=s.pattern.exec(t);if(r){const n=ft(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function ht(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=rt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=dt(r);if(o){gt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),it.pushState({id:ot},"",r.href)}}function pt(){return{x:pageXOffset,y:pageYOffset}}function mt(e){if(ct[ot]=pt(),e.state){const t=dt(new URL(location.href));t?gt(t,e.state.id):location.href=location.href}else!function(e){at=e}(at+1),function(e){ot=e}(at),it.replaceState({id:ot},"",location.href)}function gt(e,t,n,s){return st(this,void 0,void 0,(function*(){const r=!!t;if(r)ot=t;else{const e=pt();ct[ot]=e,ot=t=++at,ct[ot]=n?e:{x:0,y:0}}if(yield ut(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ct[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ct[ot]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function bt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let vt,$t=null;function wt(e){const t=rt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=dt(new URL(e,bt(document)));if(t)$t&&e===$t.href||($t={href:e,promise:Ut(t)}),$t.promise}(t.href)}function yt(e){clearTimeout(vt),vt=setTimeout((()=>{wt(e)}),20)}function _t(e,t={noscroll:!1,replaceState:!1}){const n=dt(new URL(e,bt(document)));if(n){const s=gt(n,null,t.noscroll);return it[t.replaceState?"replaceState":"pushState"]({id:ot},"",e),s}return location.href=e,new Promise((()=>{}))}const Et="undefined"!=typeof __SAPPER__&&__SAPPER__;let St,xt,Tt,At=!1,It=[],Nt="{}";const Pt={page:function(e){const t=$e(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:$e(null),session:$e(Et&&Et.session)};let Lt,Rt,kt;function Ot(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Ct(e){return st(this,void 0,void 0,(function*(){St&&Pt.preloading.set(!0);const t=function(e){return $t&&$t.href===e.href?$t.promise:Ut(e)}(e),n=xt={},s=yield t,{redirect:r}=s;if(n===xt)if(r)yield _t(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Ht(n,t,Ot(t,e.page))}}))}function Ht(e,t,n){return st(this,void 0,void 0,(function*(){Pt.page.set(n),Pt.preloading.set(!1),St?St.$set(t):(t.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},t.level0={props:yield Tt},t.notify=Pt.page.notify,St=new Xe({target:kt,props:t,hydrate:!0})),It=e,Nt=JSON.stringify(n.query),At=!0,Rt=!1}))}function Ut(e){return st(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Tt){const e=()=>({});Tt=Et.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Lt)}let i,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>st(this,void 0,void 0,(function*(){const f=s[i];if(function(e,t,n,s){if(s!==Nt)return!0;const r=It[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,l,r)&&(u=!0),o.segments[c]=s[i+1],!t)return{segment:f};const d=c++;let h;if(Rt||u||!It[i]||It[i].part!==t.i){u=!1;const{default:s,preload:r}=yield et[t.i].js();let o;o=At||!Et.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Lt):{}:Et.preloaded[i+1],h={component:s,props:o,segment:f,match:l,part:t.i}}else h=It[i];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Mt,jt,Dt;Pt.session.subscribe((e=>st(void 0,void 0,void 0,(function*(){if(Lt=e,!At)return;Rt=!0;const t=dt(new URL(location.href)),n=xt={},{redirect:s,props:r,branch:o}=yield Ut(t);n===xt&&(s?yield _t(s.location,{replaceState:!0}):yield Ht(o,r,Ot(r,t.page)))})))),Mt={target:document.querySelector("#sapper")},jt=Mt.target,kt=jt,Dt=Et.baseUrl,lt=Dt,ut=Ct,"scrollRestoration"in it&&(it.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{it.scrollRestoration="auto"})),addEventListener("load",(()=>{it.scrollRestoration="manual"})),addEventListener("click",ht),addEventListener("popstate",mt),addEventListener("touchstart",wt),addEventListener("mousemove",yt),Et.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Et;Tt||(Tt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Tt},level1:{props:{status:o,error:a},component:Je},segments:r},c=ft(n);Ht([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;it.replaceState({id:at},"",t);const n=dt(new URL(location.href));if(n)return gt(n,at,!0,e)}));export{pe as A,S as B,r as C,V as D,O as E,u as F,j as G,D as H,Le as I,w as J,_t as K,H as L,x as M,t as N,A as O,le as P,z as Q,K as R,be as S,l as T,ue as U,X as V,M as W,I as a,L as b,P as c,b as d,$ as e,T as f,g,m as h,ge as i,_ as j,R as k,oe as l,ce as m,e as n,ae as o,ie as p,B as q,ye as r,a as s,y as t,C as u,E as v,v as w,fe as x,de as y,he as z};

import __inject_styles from './inject_styles.5607aec6.js';