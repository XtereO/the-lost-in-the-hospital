(()=>{"use strict";var o={716:function(e,r,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=(Object.defineProperty(r,"__esModule",{value:!0}),o(t(860))),u=o(t(147)),l=o(t(17)),n=o(t(689)),s=o(t(684)),o=(0,r.default)();o.use("*",function(t,o,e){u.default.readFile(l.default.resolve("./build/index.html"),"utf-8",function(e,r){return e?(console.log(e),o.status(500).send("Some error happened")):(console.log(r),o.send(r.replace('<div id="root"></div>','<div id="root">'.concat(s.default.renderToString(n.default.createElement("h1",null,t.baseUrl," url updated")),"</div>"))))})}),o.use(r.default.static(l.default.resolve(__dirname,"..","build"))),o.listen(8e3,function(){console.log("App launched on ".concat(8e3))})},860:e=>{e.exports=require("express")},689:e=>{e.exports=require("react")},684:e=>{e.exports=require("react-dom/server")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")}},u={};(function e(r){var t=u[r];return void 0===t&&(t=u[r]={exports:{}},o[r].call(t.exports,t,t.exports,e)),t.exports})(716)})();