(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(t,o){t.onchange=()=>{var e;const i=(e=t.files)==null?void 0:e.item(0);if(!i)return;const n=new FileReader;n.onload=()=>o(n.result),n.readAsText(i)}}const l=t=>Math.random()*t|0;function*a(t,o=[]){const i=t.length;let n=l(i);for(;o.length<i;)o.includes(n)||(o.push(n),yield t[n]),n=l(i)}function m(t,o,i=[]){const n=a(o,i),e=({value:r,done:s})=>{s?(t.innerHTML="complete",t.disabled=!0):t.innerHTML=`sorted is ${r}`};t.onclick=()=>e(n.next())}const p=(t,o=",",i=!1)=>t.slice(i?t.indexOf(`
`)+1:0).split(`
`).map(e=>e.split(o)),y=(t,o)=>{d(t,i=>{var r;const e=p(i).map(([s])=>s);m(o,e),o.disabled=!1,(r=t.form)==null||r.remove()})};function f(t){return document.querySelector(t)}const c=f("input"),u=f("button");c&&u&&y(c,u);
