(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{"./node_modules/code-example/lib/django.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default='<!doctype html>\n<html>\n  <head>\n    <title>My Django web application</title>\n  </head>\n  <body>\n    <h1>\n      {{ page.title|capfirst }}\n    </h1>\n    <ul class="my-list">\n      {# traverse a list of items and produce links to their views. #}\n      {% for item in items %}\n      <li>\n        <a href="{% url \'item_view\' item.name|slugify %}">\n          {{ item.name }}\n        </a>\n      </li>\n      {% empty %}\n      <li>You have no items in your list.</li>\n      {% endfor %}\n    </ul>\n    {% comment "this is a forgotten footer" %}\n    <footer></footer>\n    {% endcomment %}\n  </body>\n</html>\n'}}]);