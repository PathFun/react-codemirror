(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{"./node_modules/code-example/lib/webidl.js":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default="[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]\ninterface HTMLImageElement : HTMLElement {\n           attribute DOMString alt;\n           attribute DOMString src;\n           attribute DOMString srcset;\n           attribute DOMString sizes;\n           attribute DOMString? crossOrigin;\n           attribute DOMString useMap;\n           attribute boolean isMap;\n           attribute unsigned long width;\n           attribute unsigned long height;\n  readonly attribute unsigned long naturalWidth;\n  readonly attribute unsigned long naturalHeight;\n  readonly attribute boolean complete;\n  readonly attribute DOMString currentSrc;\n\n  // also has obsolete members\n};\n\npartial interface HTMLImageElement {\n  attribute DOMString name;\n  attribute DOMString lowsrc;\n  attribute DOMString align;\n  attribute unsigned long hspace;\n  attribute unsigned long vspace;\n  attribute DOMString longDesc;\n\n  [TreatNullAs=EmptyString] attribute DOMString border;\n};\n\n"}}]);