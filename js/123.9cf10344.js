(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"./node_modules/code-example/lib/cypher.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default="// Cypher Mode for CodeMirror, using the neo theme\nMATCH (joe { name: 'Joe' })-[:knows*2..2]-(friend_of_friend)\nWHERE NOT (joe)-[:knows]-(friend_of_friend)\nRETURN friend_of_friend.name, COUNT(*)\nORDER BY COUNT(*) DESC , friend_of_friend.name\n\n"}}]);