var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequire7bc7;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=l);var o=l("iQIUW");let r=0;const u={delayInputEl:document.querySelector('[name="delay"]'),stepInputEl:document.querySelector('[name="step"]'),amountInputEl:document.querySelector('[name="amount"]'),createPromiseBtnEl:document.querySelector('button[type="submit"]')};u.createPromiseBtnEl.addEventListener("click",(function(e){e.preventDefault();const t=Number(u.delayInputEl.value),n=Number(u.stepInputEl.value),l=Number(u.amountInputEl.value);let a=t;const i=setInterval((()=>{if(r+=1,r>l)return clearInterval(i),u.delayInputEl.value="",u.stepInputEl.value="",u.amountInputEl.value="",void(r=0);var e,t;a+=n*(r-1),(e=r,t=a,new Promise(((n,l)=>{Math.random()>.3?n({position:e,delay:t}):l({position:e,delay:t})}))).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),console.log(r,a)}),a);console.log(t,n,l,r)}));
//# sourceMappingURL=03-promises.9da31e1b.js.map
