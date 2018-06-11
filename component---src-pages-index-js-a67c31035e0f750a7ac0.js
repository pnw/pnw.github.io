webpackJsonp([35783957827783],{96:function(e,t,a){"use strict";function n(e){return e}function l(e,t,a){function l(e,t){var a=g.hasOwnProperty(t)?g[t]:null;_.hasOwnProperty(t)&&u("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,a){if(a){u("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,o=n.__reactAutoBindPairs;a.hasOwnProperty(s)&&v.mixins(e,a.mixins);for(var r in a)if(a.hasOwnProperty(r)&&r!==s){var i=a[r],c=n.hasOwnProperty(r);if(l(c,r),v.hasOwnProperty(r))v[r](e,i);else{var d=g.hasOwnProperty(r),m="function"==typeof i,h=m&&!d&&!c&&a.autobind!==!1;if(h)o.push(r,i),n[r]=i;else if(c){var E=g[r];u(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,r),"DEFINE_MANY_MERGED"===E?n[r]=f(n[r],i):"DEFINE_MANY"===E&&(n[r]=p(n[r],i))}else n[r]=i}}}else;}function c(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var l=a in v;u(!l,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var o=a in e;if(o){var r=b.hasOwnProperty(a)?b[a]:null;return u("DEFINE_MANY_MERGED"===r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=f(e[a],n))}e[a]=n}}}function d(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(u(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var l={};return d(l,a),d(l,n),l}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],l=t[a+1];e[n]=m(e,l)}}function E(e){var t=n(function(e,n,l){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=i,this.updater=l||a,this.state=null;var o=this.getInitialState?this.getInitialState():null;u("object"==typeof o&&!Array.isArray(o),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=o});t.prototype=new I,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(o.bind(null,t)),o(t,N),o(t,e),o(t,w),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in g)t.prototype[l]||(t.prototype[l]=null);return t}var y=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)o(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},I=function(){};return r(I.prototype,e.prototype,_),E}var o,r=a(4),i=a(34),u=a(1),s="mixins";o={},e.exports=l},4:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,i,u=a(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)o.call(n,c)&&(u[c]=n[c]);if(l){i=l(n);for(var d=0;d<i.length;d++)r.call(n,i[d])&&(u[i[d]]=n[i[d]])}}return u}},197:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(5),o=n(l);t.default=function(e){var t=e.children;return o.default.createElement("section",{className:"entry"},t)},e.exports=t.default},198:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(5),o=n(l);t.default=function(e){var t=e.children;return o.default.createElement("section",{className:"sub-section"},t)},e.exports=t.default},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(5),o=n(l);t.default=function(e){var t=e.techs;return o.default.createElement("p",{className:"tech-list"},t.map(function(e){return o.default.createElement("span",{className:"tech-item"},e)}))},e.exports=t.default},202:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(5),o=n(l),r=a(198),i=n(r),u=a(197),s=n(u),c=a(199),d=n(c);t.default=function(){return o.default.createElement("div",null,o.default.createElement("section",{className:"header-section"},o.default.createElement("p",null,"Hi, I'm Patrick."),o.default.createElement("p",null,"I'm a full stack web developer. For years, I traveled around the eastern hemisphere, working remotely, but these days you can find me in Boulder, Colorado."),o.default.createElement("p",null,"I like to build tools that make peoples lives more efficient."),o.default.createElement("p",null,"You can find me on ",o.default.createElement("a",{href:"https://github.com/pnw"},"Github")," or email me at ",o.default.createElement("a",{href:"mailto:patrick+1@ptrck.io"},"patrick@ptrck.io")," if you want to work together, tell me how handsome and clever I am, or just say hi.")),o.default.createElement(i.default,null,o.default.createElement("h2",null,"Work"),o.default.createElement(s.default,null,o.default.createElement("h3",null,"MyWorksites"),o.default.createElement("p",null,"A collaboration tool that allows municipal organizations and contractors across New Zealand to manage the lifecycle (at least the bits that require approval from the gub'ment) of roadwork projects."),o.default.createElement(d.default,{techs:["Ember","Node","Express","Loopback","Python","Postgres","Docker"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Listed Land Use Register"),o.default.createElement("p",null,"An internal application used by a District County in New Zealand. It manages tracts of land that may have been contaminated by hazardous materials."),o.default.createElement(d.default,{techs:["Ember","Node","Express","Loopback","MS SQL Server"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"TIMPA"),o.default.createElement("p",null,"Used internally by the city council organization of the same acronym. It streamlines their meetings by digesting municipal data and allowing them to review, organize, make decisions about, and prepare for roadworks throughout their city."),o.default.createElement("p",null,"Looking back, we probably should have named it Advanced TIMPA Meeting Streamliner Pro ™ or something cooler."),o.default.createElement(d.default,{techs:["Ember","Node","Express","Loopback","Postgres"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"University of ",o.default.createElement("span",{className:"redacted"},"Redacted")," Enrolment Portal"),o.default.createElement("p",null,"Student enrolment portal for a New Zealand university I'm not allowed to name drop."),o.default.createElement(d.default,{techs:["Angular"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Contracts"),o.default.createElement("p",null,"An internal tool used by a New Zealand district county to, you guessed it, manage the lifecycle of third-party contracts."),o.default.createElement("p",null,"I think we forgot to actually give this one a real name..."),o.default.createElement(d.default,{techs:["Ember","Node","Express","Loopback","MS SQL Server"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Pozly"),o.default.createElement("p",null,"Second startup. Pozly was a bootstrapped, multi-platform, Point-of-Sale SAAS product for retail renal businesses. It was a Point-of-Sale product that handles the complexity of managing rental, hire, and lease inventory and workflows."),o.default.createElement(d.default,{techs:["Ember","iOS","Python","Django","Node","Express","Redis","Postgres"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Levr"),o.default.createElement("p",null,"First startup. Levr was a location-based mobile application to share and discover local deals and promotions."),o.default.createElement(d.default,{techs:["JQuery","Python","Postgres","iOS","Android"]}))),o.default.createElement(i.default,null,o.default.createElement("h2",null,"Projects"),o.default.createElement("p",null,"These are some of the projects that I've built (or am building) for myself."),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Jiggl"),o.default.createElement("p",null,"Why spend minutes on timesheet logging and invoicing when you can spend hours hacking together a custom data-connector/automation-tool to do it for you? Yes, there are other connectors between Jira and Toggle, but I had some other ideas about user experience and workflow."),o.default.createElement("p",null,"Jira + Toggl = Jiggl. Heh."),o.default.createElement(d.default,{techs:["Ember","Python","Flask"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Env Tracker"),o.default.createElement("p",null,"If you're a web developer, you probably have some files in your project that you want to keep hidden from source control à la ",o.default.createElement("samp",null,".gitignore"),". These might have names like ",o.default.createElement("samp",null,".env")," and they store things like passwords and api keys. Not having source control on those files kind of sucks."),o.default.createElement("p",null,"Env Tracker is a CLI tool that adds private source control to your private files so you don't lose them."),o.default.createElement(d.default,{techs:["Python","Click.py"]}),o.default.createElement("a",{href:"https://github.com/pnw/env-tracker"},"Source")),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Crypto-Currency Trading Bot"),o.default.createElement("p",null,"DIY algorithmic and arbitrage crypto-currency trading bot."),o.default.createElement(d.default,{techs:["Python","Click.py","Redis","Postgres","Docker"]})),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Hacker News: Hide Old Comments"),o.default.createElement("p",null,"A simple Chrome browser extention that allows you to automatically collapse old comment threads when you revisit an interesting discussion."),o.default.createElement(d.default,{techs:["Vanilla Javascript"]}),o.default.createElement("p",null,o.default.createElement("a",{href:"https://chrome.google.com/webstore/detail/hacker-news-hide-old-comm/lghlghkblilphbcnnpnkppioflceamjj"},"Chrome Web Store")),o.default.createElement("p",null,o.default.createElement("a",{href:"https://github.com/pnw/hn-hide-old-comments"},"Source"))),o.default.createElement(s.default,null,o.default.createElement("h3",null,'"Dye Tracing" Personal Data'),o.default.createElement("p",null,o.default.createElement("a",{href:"https://en.wikipedia.org/wiki/Dye_tracing"},"Dye Tracing"),' is a method used (among other applications) to discover the exit point of an underground river. The general idea is you dump a bunch of dye into an underground river and, well, see where it comes out. (Sometimes people use ping pong balls instead of dye, but "Ping Pong Balling Personal Data" didn\'t make it past my personal marketing department that I totally have.)'),o.default.createElement("p",null,"Inspired by the likes of ",o.default.createElement("a",{href:"https://haveibeenpwned.com/"},"have i been pwned")," and the ",o.default.createElement("a",{href:"https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html"},'"+" sign email hack'),", this is an ongoing experiment to answer the question,"),o.default.createElement("blockquote",null,'"What happens when I put my information online?"'),o.default.createElement("p",null,"The general idea is to , turn off the spam filter, and see what comes out the other side."),o.default.createElement("p",null,"If this interests you or if you have some ideas or if you want to discuss, ",o.default.createElement("a",{href:"mailto:patrick+2@ptrck.io"},"contact me"),"!")),o.default.createElement(s.default,null,o.default.createElement("h3",null,"ptrck.io"),o.default.createElement("p",null,"You're looking at it. I'm only including it here to tell you that I built it with..."),o.default.createElement(d.default,{techs:["Gatsby","Github Pages"]}))),o.default.createElement(i.default,null,o.default.createElement("h2",null,"Other"),o.default.createElement(s.default,null,o.default.createElement("h3",null,"Kiwi PyCon 2015, Christchurch NZ"),o.default.createElement("p",null,"Was on the organizing committee. Shout out to the New Zealand Python User Group (NZPUG) and especially the Christchurch chapter for the awesome convention!"))))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-a67c31035e0f750a7ac0.js.map