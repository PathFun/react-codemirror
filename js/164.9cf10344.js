(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{"./node_modules/babel-runtime/core-js/object/define-properties.js":function(e,o,n){e.exports={default:n("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-properties.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/freeze.js":function(e,o,n){e.exports={default:n("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/freeze.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js":function(e,o,n){"use strict";o.__esModule=!0;var r=t(n("./node_modules/babel-runtime/core-js/object/define-properties.js")),s=t(n("./node_modules/babel-runtime/core-js/object/freeze.js"));function t(e){return e&&e.__esModule?e:{default:e}}o.default=function(e,o){return(0,s.default)((0,r.default)(e,{raw:{value:(0,s.default)(o)}}))}},"./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-properties.js":function(e,o,n){n("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-properties.js");var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,o){return r.defineProperties(e,o)}},"./node_modules/babel-runtime/node_modules/core-js/library/fn/object/freeze.js":function(e,o,n){n("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.freeze.js"),e.exports=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.freeze},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(o,n,l){var i,u=r(o),a=s(u.length),d=t(l,a);if(e&&n!=n){for(;a>d;)if((i=u[d++])!=i)return!0}else for(;a>d;d++)if((e||d in u)&&u[d]===n)return e||d||0;return!e&&-1}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":function(e,o){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":function(e,o){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,o,n){if(r(e),void 0===o)return e;switch(n){case 1:return function(n){return e.call(o,n)};case 2:return function(n,r){return e.call(o,n,r)};case 3:return function(n,r,s){return e.call(o,n,r,s)}}return function(){return e.apply(o,arguments)}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":function(e,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":function(e,o,n){e.exports=!n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document,t=r(s)&&r(s.createElement);e.exports=function(e){return t?s.createElement(e):{}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js"),l=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js"),i=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js"),u=function(e,o,n){var a,d,m,c=e&u.F,b=e&u.G,_=e&u.S,p=e&u.P,f=e&u.B,j=e&u.W,y=b?s:s[o]||(s[o]={}),h=y.prototype,g=b?r:_?r[o]:(r[o]||{}).prototype;for(a in b&&(n=o),n)(d=!c&&g&&void 0!==g[a])&&i(y,a)||(m=d?g[a]:n[a],y[a]=b&&"function"!=typeof g[a]?n[a]:f&&d?t(m,r):j&&g[a]==m?function(e){var o=function(o,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(o);case 2:return new e(o,n)}return new e(o,n,r)}return e.apply(this,arguments)};return o.prototype=e.prototype,o}(m):p&&"function"==typeof m?t(Function.call,m):m,p&&((y.virtual||(y.virtual={}))[a]=m,e&u.R&&h&&!h[a]&&l(h,a,m)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":function(e,o){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":function(e,o){var n={}.hasOwnProperty;e.exports=function(e,o){return n.call(e,o)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");e.exports=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js")?function(e,o,n){return r.f(e,o,s(1,n))}:function(e,o,n){return e[o]=n,e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":function(e,o,n){e.exports=!n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js")&&!n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":function(e,o){e.exports=!0},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")("meta"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js"),l=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f,i=0,u=Object.isExtensible||function(){return!0},a=!n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function(){return u(Object.preventExtensions({}))}),d=function(e){l(e,r,{value:{i:"O"+ ++i,w:{}}})},m=e.exports={KEY:r,NEED:!1,fastKey:function(e,o){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!t(e,r)){if(!u(e))return"F";if(!o)return"E";d(e)}return e[r].i},getWeak:function(e,o){if(!t(e,r)){if(!u(e))return!0;if(!o)return!1;d(e)}return e[r].w},onFreeze:function(e){return a&&m.NEED&&u(e)&&!t(e,r)&&d(e),e}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js"),l=Object.defineProperty;o.f=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,o,n){if(r(e),o=t(o,!0),r(n),s)try{return l(e,o,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[o]=n.value),e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");e.exports=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,o){s(e);for(var n,l=t(o),i=l.length,u=0;i>u;)r.f(e,n=l[u++],o[n]);return e}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(!1),l=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var n,i=s(e),u=0,a=[];for(n in i)n!=l&&r(i,n)&&a.push(n);for(;o.length>u;)r(i,n=o[u++])&&(~t(a,n)||a.push(n));return a}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return r(e,s)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js"),t=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");e.exports=function(e,o){var n=(s.Object||{})[e]||Object[e],l={};l[e]=o(n),r(r.S+r.F*t(function(){n(1)}),"Object",l)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")("keys"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return r[e]||(r[e]=s(e))}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js"),t=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,o){return t[e]||(t[e]=void 0!==o?o:{})})("versions",[]).push({version:r.version,mode:n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js"),s=Math.max,t=Math.min;e.exports=function(e,o){return(e=r(e))<0?s(e+o,0):t(e,o)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":function(e,o){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return r(s(e))}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js"),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,o){if(!r(e))return e;var n,s;if(o&&"function"==typeof(n=e.toString)&&!r(s=n.call(e)))return s;if("function"==typeof(n=e.valueOf)&&!r(s=n.call(e)))return s;if(!o&&"function"==typeof(n=e.toString)&&!r(s=n.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":function(e,o){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-properties.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");r(r.S+r.F*!n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"),"Object",{defineProperties:n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js")})},"./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.freeze.js":function(e,o,n){var r=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"),s=n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").onFreeze;n("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js")("freeze",function(e){return function(o){return e&&r(o)?e(s(o)):o}})},"./node_modules/code-example/lib/md.js":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js")),s=(0,r.default)(["\n"],["\n"]);var t='Markdown: Basics\n================\n\n<ul id="ProjectSubmenu">\n    <li><a href="/projects/markdown/" title="Markdown Project Page">Main</a></li>\n    <li><a class="selected" title="Markdown Basics">Basics</a></li>\n    <li><a href="/projects/markdown/syntax" title="Markdown Syntax Documentation">Syntax</a></li>\n    <li><a href="/projects/markdown/license" title="Pricing and License Information">License</a></li>\n    <li><a href="/projects/markdown/dingus" title="Online Markdown Web Form">Dingus</a></li>\n</ul>\n\n\nGetting the Gist of Markdown\'s Formatting Syntax\n------------------------------------------------\n\nThis page offers a brief overview of what it\'s like to use Markdown.\nThe [syntax page] [s] provides complete, detailed documentation for\nevery feature, but Markdown should be very easy to pick up simply by\nlooking at a few examples of it in action. The examples on this page\nare written in a before/after style, showing example syntax and the\nHTML output produced by Markdown.\n\nIt\'s also helpful to simply try Markdown out; the [Dingus] [d] is a\nweb application that allows you type your own Markdown-formatted text\nand translate it to XHTML.\n\n**Note:** This document is itself written using Markdown; you\ncan [see the source for it by adding \'.text\' to the URL] [src].\n\n  [s]: /projects/markdown/syntax  "Markdown Syntax"\n  [d]: /projects/markdown/dingus  "Markdown Dingus"\n  [src]: /projects/markdown/basics.text\n\n\n## Paragraphs, Headers, Blockquotes ##\n\nA paragraph is simply one or more consecutive lines of text, separated\nby one or more blank lines. (A blank line is any line that looks like\na blank line -- a line containing nothing but spaces or tabs is\nconsidered blank.) Normal paragraphs should not be indented with\nspaces or tabs.\n\nMarkdown offers two styles of headers: *Setext* and *atx*.\nSetext-style headers for `<h1>` and `<h2>` are created by\n"underlining" with equal signs (`= `) and hyphens (` - `), respectively.\nTo create an atx-style header, you put 1-6 hash marks (`#`) at the\nbeginning of the line -- the number of hashes equals the resulting\nHTML header level.\n\nBlockquotes are indicated using email-style \'`> `\' angle brackets.\n\nMarkdown:\n\n    A First Level Header\n    ====================\n\n    A Second Level Header\n    ---------------------\n\n    Now is the time for all good men to come to\n    the aid of their country. This is just a\n    regular paragraph.\n\n    The quick brown fox jumped over the lazy\n    dog\'s back.\n\n    ### Header 3\n\n    > This is a blockquote.\n    >\n    > This is the second paragraph in the blockquote.\n    >\n    > ## This is an H2 in a blockquote\n\n\nOutput:\n\n    <h1>A First Level Header</h1>\n\n    <h2>A Second Level Header</h2>\n\n    <p>Now is the time for all good men to come to\n    the aid of their country. This is just a\n    regular paragraph.</p>\n\n    <p>The quick brown fox jumped over the lazy\n    dog\'s back.</p>\n\n    <h3>Header 3</h3>\n\n    <blockquote>\n        <p>This is a blockquote.</p>\n\n        <p>This is the second paragraph in the blockquote.</p>\n\n        <h2>This is an H2 in a blockquote</h2>\n    </blockquote>\n\n\n\n### Phrase Emphasis ###\n\nMarkdown uses asterisks and underscores to indicate spans of emphasis.\n\nMarkdown:\n\n    Some of these words *are emphasized*.\n    Some of these words _are emphasized also_.\n\n    Use two asterisks for **strong emphasis**.\n    Or, if you prefer, __use two underscores instead__.\n\nOutput:\n\n    <p>Some of these words <em>are emphasized</em>.\n    Some of these words <em>are emphasized also</em>.</p>\n\n    <p>Use two asterisks for <strong>strong emphasis</strong>.\n    Or, if you prefer, <strong>use two underscores instead</strong>.</p>\n\n\n\n## Lists ##\n\nUnordered (bulleted) lists use asterisks, pluses, and hyphens (`* `,\n`+ `, and ` - `) as list markers. These three markers are\ninterchangable; this:\n\n    *   Candy.\n    *   Gum.\n    *   Booze.\n\nthis:\n\n    +   Candy.\n    +   Gum.\n    +   Booze.\n\nand this:\n\n    -   Candy.\n    -   Gum.\n    -   Booze.\n\nall produce the same output:\n\n    <ul>\n    <li>Candy.</li>\n    <li>Gum.</li>\n    <li>Booze.</li>\n    </ul>\n\nOrdered (numbered) lists use regular numbers, followed by periods, as\nlist markers:\n\n    1.  Red\n    2.  Green\n    3.  Blue\n\nOutput:\n\n    <ol>\n    <li>Red</li>\n    <li>Green</li>\n    <li>Blue</li>\n    </ol>\n\nIf you put blank lines between items, you\'ll get `<p>` tags for the\nlist item text. You can create multi-paragraph list items by indenting\nthe paragraphs by 4 spaces or 1 tab:\n\n    *   A list item.\n\n        With multiple paragraphs.\n\n    *   Another item in the list.\n\nOutput:\n\n    <ul>\n    <li><p>A list item.</p>\n    <p>With multiple paragraphs.</p></li>\n    <li><p>Another item in the list.</p></li>\n    </ul>\n\n\n\n### Links ###\n\nMarkdown supports two styles for creating links: *inline* and\n*reference*. With both styles, you use square brackets to delimit the\ntext you want to turn into a link.\n\nInline-style links use parentheses immediately after the link text.\nFor example:\n\n    This is an [example link](http://example.com/).\n\nOutput:\n\n    <p>This is an <a href="http://example.com/">\n    example link</a>.</p>\n\nOptionally, you may include a title attribute in the parentheses:\n\n    This is an [example link](http://example.com/ "With a Title").\n\nOutput:\n\n    <p>This is an <a href="http://example.com/" title="With a Title">\n    example link</a>.</p>\n\nReference-style links allow you to refer to your links by names, which\nyou define elsewhere in your document:\n\n    I get 10 times more traffic from [Google][1] than from\n    [Yahoo][2] or [MSN][3].\n\n    [1]: http://google.com/        "Google"\n    [2]: http://search.yahoo.com/  "Yahoo Search"\n    [3]: http://search.msn.com/    "MSN Search"\n\nOutput:\n\n    <p>I get 10 times more traffic from <a href="http://google.com/"\n    title="Google">Google</a> than from <a href="http://search.yahoo.com/"\n    title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/"\n    title="MSN Search">MSN</a>.</p>\n\nThe title attribute is optional. Link names may contain letters,\nnumbers and spaces, but are *not* case sensitive:\n\n    I start my morning with a cup of coffee and\n    [The New York Times][NY Times].\n\n    [ny times]: http://www.nytimes.com/\n\nOutput:\n\n    <p>I start my morning with a cup of coffee and\n    <a href="http://www.nytimes.com/">The New York Times</a>.</p>\n\n\n### Images ###\n\nImage syntax is very much like link syntax.\n\nInline (titles are optional):\n\n    ![alt text](/path/to/img.jpg "Title")\n\nReference-style:\n\n    ![alt text][id]\n\n    [id]: /path/to/img.jpg "Title"\n\nBoth of the above examples produce the same output:\n\n    <img src="/path/to/img.jpg" alt="alt text" title="Title" />\n\n\n\n### Code ###\n\nIn a regular paragraph, you can create code span by wrapping text in\nbacktick quotes. Any ampersands (`& `) and angle brackets (` < ` or\n`> `) will automatically be translated into HTML entities. This makes\nit easy to use Markdown to write about HTML example code:\n\n    I strongly recommend against using any `<blink>` tags.\n\n    I wish SmartyPants used named entities like `& mdash; `\n    instead of decimal-encoded entites like `&#8212; `.\n\nOutput:\n\n    <p>I strongly recommend against using any\n    <code>&lt;blink&gt;</code> tags.</p>\n\n    <p>I wish SmartyPants used named entities like\n    <code>&amp;mdash;</code> instead of decimal-encoded\n    entites like <code>&amp;#8212;</code>.</p>\n\n\nTo specify an entire block of pre-formatted code, indent every line of\nthe block by 4 spaces or 1 tab. Just like with code spans, `& `, ` < `,\nand `> ` characters will be escaped automatically.\n\nMarkdown:\n\n    If you want your page to validate under XHTML 1.0 Strict,\n    you\'ve got to put paragraph tags in your blockquotes:\n\n        <blockquote>\n            <p>For example.</p>\n        </blockquote>\n\nOutput:\n\n    <p>If you want your page to validate under XHTML 1.0 Strict,\n    you\'ve got to put paragraph tags in your blockquotes:</p>\n\n    <pre><code>&lt;blockquote&gt;\n        &lt;p&gt;For example.&lt;/p&gt;\n    &lt;/blockquote&gt;\n    </code></pre>\n\n## Fenced code blocks (and syntax highlighting)\n\n`'((0,r.default)(["javascript\nfor (var i = 0; i < items.length; i++) {\n  console.log(items[i], i); // log them\n}\n`"],["javascript\nfor (var i = 0; i < items.length; i++) {\n  console.log(items[i], i); // log them\n}\n\\`"]))(s);o.default=t}}]);