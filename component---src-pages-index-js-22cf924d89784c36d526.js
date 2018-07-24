webpackJsonp([35783957827783],{96:function(e,t,a){"use strict";function n(e){return e}function o(e,t,a){function o(e,t){var a=g.hasOwnProperty(t)?g[t]:null;_.hasOwnProperty(t)&&u("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,a){if(a){u("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,r=n.__reactAutoBindPairs;a.hasOwnProperty(s)&&v.mixins(e,a.mixins);for(var l in a)if(a.hasOwnProperty(l)&&l!==s){var i=a[l],c=n.hasOwnProperty(l);if(o(c,l),v.hasOwnProperty(l))v[l](e,i);else{var d=g.hasOwnProperty(l),m="function"==typeof i,h=m&&!d&&!c&&a.autobind!==!1;if(h)r.push(l,i),n[l]=i;else if(c){var E=g[l];u(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,l),"DEFINE_MANY_MERGED"===E?n[l]=f(n[l],i):"DEFINE_MANY"===E&&(n[l]=p(n[l],i))}else n[l]=i}}}else;}function c(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var o=a in v;u(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var r=a in e;if(r){var l=b.hasOwnProperty(a)?b[a]:null;return u("DEFINE_MANY_MERGED"===l,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=f(e[a],n))}e[a]=n}}}function d(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(u(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var o={};return d(o,a),d(o,n),o}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],o=t[a+1];e[n]=m(e,o)}}function E(e){var t=n(function(e,n,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=i,this.updater=o||a,this.state=null;var r=this.getInitialState?this.getInitialState():null;u("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new k,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,w),r(t,e),r(t,N),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in g)t.prototype[o]||(t.prototype[o]=null);return t}var y=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)r(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},k=function(){};return l(k.prototype,e.prototype,_),E}var r,l=a(4),i=a(34),u=a(1),s="mixins";r={},e.exports=o},4:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,i,u=a(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)r.call(n,c)&&(u[c]=n[c]);if(o){i=o(n);for(var d=0;d<i.length;d++)l.call(n,i[d])&&(u[i[d]]=n[i[d]])}}return u}},197:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(5),r=n(o);t.default=function(e){var t=e.children;return r.default.createElement("section",{className:"entry"},t)},e.exports=t.default},198:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(5),r=n(o);t.default=function(e){var t=e.children;return r.default.createElement("section",{className:"sub-section"},t)},e.exports=t.default},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(5),r=n(o);t.default=function(e){var t=e.techs;return r.default.createElement("p",{className:"tech-list"},t.map(function(e){return r.default.createElement("span",{className:"tech-item"},e)}))},e.exports=t.default},202:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(5),r=n(o),l=a(198),i=n(l),u=a(197),s=n(u),c=a(199),d=n(c);t.default=function(){return r.default.createElement("div",null,r.default.createElement("section",{className:"bio"},r.default.createElement("p",null,"Hi, I'm Patrick."),r.default.createElement("p",null,"I'm a full stack web developer. For years, I traveled around the world, working remotely, but these days you can find me in Colorado."),r.default.createElement("p",null,"I love working on the web and building tools that make peoples lives more efficient."),r.default.createElement("p",null,"You can find me on ",r.default.createElement("a",{href:"https://github.com/pnw"},"Github")," or email me at ",r.default.createElement("a",{href:"mailto:patrick+1@ptrck.io"},"patrick@ptrck.io")," if you want to work together, tell me how handsome and clever I am, or just say hi.")),r.default.createElement(i.default,null,r.default.createElement("h2",{id:"work"},"Work"),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"myworksites"},"MyWorksites"),r.default.createElement("p",null,"A collaboration tool that allows municipal organizations and contractors across New Zealand to manage the lifecycle of roadwork projects, or at least the bits that require government oversight."),r.default.createElement(d.default,{techs:["Ember","Leaflet","Node","Express","Loopback","Python","Postgres","Docker"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"llur"},"Listed Land Use Register"),r.default.createElement("p",null,"An internal application used by a District County in New Zealand. It manages tracts of land that may have been contaminated by hazardous materials."),r.default.createElement(d.default,{techs:["Ember","Leaflet","Node","Express","Loopback","MS SQL Server"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"timpa"},"TIMPA"),r.default.createElement("p",null,"Used internally by the city council organization of the same acronym. It streamlines their meetings by digesting municipal data and allowing them to review, organize, make decisions about, and prepare for roadworks throughout their city."),r.default.createElement(d.default,{techs:["Ember","Node","Express","Loopback","Postgres"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"university"},"University of ",r.default.createElement("span",{className:"redacted"},"Redacted")," Enrolment Portal"),r.default.createElement("p",null,"Student enrolment portal for a New Zealand university I'm not allowed to name drop."),r.default.createElement(d.default,{techs:["Angular"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"contracts"},"Contracts"),r.default.createElement("p",null,"An internal tool used by a District County to, you guessed it, manage the lifecycle of third-party contracts."),r.default.createElement(d.default,{techs:["Ember","Node","Express","Loopback","MS SQL Server"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"pozly"},"Pozly"),r.default.createElement("p",null,"Second startup. Pozly was a bootstrapped, multi-platform, Point-of-Sale SAAS product for retail renal businesses. It was a Point-of-Sale product that handles the complexity of managing rental, hire, and lease inventory and workflows."),r.default.createElement(d.default,{techs:["Ember","iOS","Python","Django","Node","Express","Redis","Postgres"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"levr"},"Levr"),r.default.createElement("p",null,"First startup. Levr was a location-based mobile application to share and discover local deals and promotions."),r.default.createElement(d.default,{techs:["JQuery","Python","Postgres","iOS","Android"]}))),r.default.createElement(i.default,null,r.default.createElement("h2",{id:"projects"},"Projects"),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"et"},"Env Tracker"),r.default.createElement("p",null,"If you're a web developer, you probably have some files in your project that you want to keep hidden from source control à la ",r.default.createElement("samp",null,".gitignore"),". These might have names like ",r.default.createElement("samp",null,".env")," and they store things like passwords and api keys. Not having source control on those files kind of sucks."),r.default.createElement("p",null,"Env Tracker is a CLI tool that adds private source control to your private files so you don't lose them."),r.default.createElement(d.default,{techs:["Python","Click.py"]}),r.default.createElement("p",null,r.default.createElement("a",{href:"https://github.com/pnw/env-tracker/blob/master/README.md"},"Full Description")),r.default.createElement("p",null,r.default.createElement("a",{href:"https://github.com/pnw/env-tracker"},"Source"))),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"hackernews"},"Hacker News: Hide Old Comments"),r.default.createElement("p",null,"A simple Chrome browser extention that allows you to automatically collapse old comment threads when you revisit an interesting discussion."),r.default.createElement(d.default,{techs:["Google Chrome","Vanilla Javascript"]}),r.default.createElement("p",null,r.default.createElement("a",{href:"https://chrome.google.com/webstore/detail/hacker-news-hide-old-comm/lghlghkblilphbcnnpnkppioflceamjj"},"Chrome Web Store")),r.default.createElement("p",null,r.default.createElement("a",{href:"https://github.com/pnw/hn-hide-old-comments"},"Source"))),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"jiggl"},"Jiggl"),r.default.createElement("p",null,"Why spend minutes on timesheet logging and invoicing when you can spend hours hacking together a custom data-connector/automation-tool to do it for you? Yes, there are other, existing connectors between Jira and Toggle, but I had some other ideas about user experience and automation workflow."),r.default.createElement("p",null,"Jira + Toggl = Jiggl. Heh."),r.default.createElement(d.default,{techs:["Ember","Python","Flask"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"cryptobot"},"Crypto-Currency Trading Bot"),r.default.createElement("p",null,"DIY algorithmic and arbitrage crypto-currency trading bot. Also used to explore some ideas I have about market dynamics."),r.default.createElement("p",null,r.default.createElement("a",{href:"patrick+3@ptrck.io"},"Reach out")," if you want to discuss strategies!"),r.default.createElement(d.default,{techs:["Python","Click.py","Redis","Postgres","Docker"]})),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"dyetracing"},'"Dye Tracing" Personal Data'),r.default.createElement("p",null,r.default.createElement("a",{href:"https://en.wikipedia.org/wiki/Dye_tracing"},"Dye Tracing"),' is a method used (among other applications) to discover the exit point of an underground river. The general idea is you dump a bunch of dye into an underground river and, well, see where it comes out. (Sometimes people use ping pong balls instead of dye, but "Ping Pong Balling Personal Data" didn\'t make it past my personal marketing department that I totally have.)'),r.default.createElement("p",null,"Inspired by the likes of ",r.default.createElement("a",{href:"https://haveibeenpwned.com/"},"have i been pwned")," and the ",r.default.createElement("a",{href:"https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html"},'"+" sign email hack'),", GDPR, and recurring news of high profile data breaches, this is an ongoing experiment to answer the question,"),r.default.createElement("blockquote",null,'"What happens when I put my information online?"'),r.default.createElement("p",null,"The general idea is to spread a bunch of uniquely identifiable emails around the web, turn off the spam filter, and see what comes out the other side."),r.default.createElement("p",null,"If this interests you or if you have some ideas or if you want to discuss, ",r.default.createElement("a",{href:"mailto:patrick+2@ptrck.io"},"contact me"),"!")),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"ptrck"},"ptrck.io"),r.default.createElement("p",null,"You're looking at it. I'm only including it here to tell you that I built it with..."),r.default.createElement(d.default,{techs:["Gatsby","Github Pages"]}))),r.default.createElement(i.default,null,r.default.createElement("h2",{id:"other"},"Other"),r.default.createElement(s.default,null,r.default.createElement("h3",{id:"pycon"},"Kiwi PyCon 2015, Christchurch NZ"),r.default.createElement("p",null,"Was on the organizing committee. Shout out to the New Zealand Python User Group (NZPUG) and especially the Christchurch chapter for the awesome convention!"))))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-22cf924d89784c36d526.js.map