(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(t,e,n){var r=n(152),i=n(153),o=n(154);t.exports=function(t){return r(t)||i(t)||o()}},152:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},153:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},154:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},161:function(t,e,n){"use strict";n.r(e);var r=n(151),i=n.n(r),o=n(90),l={data:function(){return console.log(o),{items:i()(o)}},methods:{open:function(t){window.open(t)}}},s=n(16),u=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{"text-xs-center":""}},[n("v-list",{attrs:{"three-line":""}},[t._l(t.items,function(e){return[n("v-list",{key:e.id,attrs:{"two-line":"",subheader:""}},[e.title?n("v-list-tile",{attrs:{avatar:""},on:{click:function(n){t.open(e.url)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.url))])],1)],1):t._e()],1)]})],2)],1)],1)},[],!1,null,null,null);u.options.__file="shouqu.vue";e.default=u.exports}}]);