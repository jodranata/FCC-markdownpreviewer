(this.webpackJsonp8_markdownpreviewer=this.webpackJsonp8_markdownpreviewer||[]).push([[0],{116:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),s=(t(28),t(11)),l=(t(29),t(21)),c=t.n(l),d=t(22),u=t.n(d),m=function(e){var n=e.markdownText,t=e.handleChange,a=e.handleReset,o=e.handleParse;return r.a.createElement("div",{className:"editor"},r.a.createElement("button",{type:"button",className:"clear-button",onClick:a},"Clear"),r.a.createElement("form",{className:"radio-form",onChange:o},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"raw"},"Raw",r.a.createElement("input",{type:"radio",name:"parse",id:"raw",defaultChecked:!0}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"escape"},"Escape",r.a.createElement("input",{type:"radio",name:"parse",id:"escape"}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"skip"},"skip",r.a.createElement("input",{type:"radio",name:"parse",id:"skip"})))),r.a.createElement("textarea",{id:"editor",value:n,onChange:t,spellCheck:"false"}))},h=function(e){var n=e.outputText,t=e.htmlParse,a=t.isEscape,o=t.isSkip;return r.a.createElement("div",{className:"previewer",id:"preview"},r.a.createElement(c.a,{source:n,escapeHtml:a,skipHtml:o,linkTarget:"_blank",plugins:u.a}))};var p=function(){var e=Object(a.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n## HTML block below\n\n<blockquote>\n  This blockquote will change based on the HTML settings above.\n</blockquote>\n\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)({isEscape:!0,isSkip:!1}),l=Object(s.a)(i,2),c=l[0],d=l[1];return r.a.createElement("div",{className:"app-container"},r.a.createElement(m,{markdownText:t,handleChange:function(e){var n=e.target.value;o(n)},handleReset:function(){return o("")},handleParse:function(e){var n=e.target.id;"escape"===n&&d({isEscape:!1}),"skip"===n&&d({isSkip:!0}),"raw"===n&&d({isEscape:!0,isSkip:!1})}}),r.a.createElement(h,{outputText:t,htmlParse:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},23:function(e,n,t){e.exports=t(116)},28:function(e,n,t){},29:function(e,n,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.9864bdee.chunk.js.map