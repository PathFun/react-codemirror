(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{"./node_modules/code-example/lib/oz.js":function(n,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default="declare\nfun {Ints N Max}\n  if N == Max then nil\n  else\n    {Delay 1000}\n    N|{Ints N+1 Max}\n  end\nend\n\nfun {Sum S Stream}\n  case Stream of nil then S\n  [] H|T then S|{Sum H+S T} end\nend\n\nlocal X Y in\n  thread X = {Ints 0 1000} end\n  thread Y = {Sum 0 X} end\n  {Browse Y}\nend\n"}}]);