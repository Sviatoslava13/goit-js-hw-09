var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=r);var o=r("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{n&&r({position:e,delay:t}),o({position:e,delay:t})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.delay.value);const n=Number(e.currentTarget.step.value),r=Number(e.currentTarget.amount.value);for(let e=1;e<=r;e+=1)i(e,t).then((({position:e,delay:t})=>{setTimeout((()=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{position:"center-center"})}),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{position:"center-center"})}),t)})),t+=n}));
//# sourceMappingURL=03-promises.006d7f94.js.map
