if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>n(e,r),u={module:{uri:r},exports:a,require:o};s[r]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-d850f21f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/bug-issue-template-f174eaf6.js",revision:null},{url:"assets/directory-open-01563666-f87a57cf.js",revision:null},{url:"assets/directory-open-4ed118d0-f36e5697.js",revision:null},{url:"assets/file-open-002ab408-9ae3a7ce.js",revision:null},{url:"assets/file-open-7c801643-a0dcc141.js",revision:null},{url:"assets/file-save-3189631c-cc90d322.js",revision:null},{url:"assets/file-save-745eba88-e9b5e4a2.js",revision:null},{url:"assets/image-53b294ca.js",revision:null},{url:"assets/image-blob-reduce.esm-1fc068b7.js",revision:null},{url:"assets/index-a7afa820.js",revision:null},{url:"assets/index-bea72a37.css",revision:null},{url:"assets/index-c42c0d12.js",revision:null},{url:"assets/index.esm-7f00915d.js",revision:null},{url:"assets/index.esm-a332ef89.js",revision:null},{url:"assets/index.esm-c5afb8b0.js",revision:null},{url:"assets/index.esm-e1c6a587.js",revision:null},{url:"assets/pica-32e85426.js",revision:null},{url:"assets/random-username.esm-236d99b1.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"3c9a050e46b72ef81fa878da5176f5bb"},{url:"android-chrome-192x192.png",revision:"3d005c71b9ea629a8d137916a02ce9af"},{url:"apple-touch-icon.png",revision:"a9b855bc4fa588808a72c126fa9ade00"},{url:"manifest.webmanifest",revision:"4f0bc9def18c8d0ff65aac7f4275bbef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.+.(ttf|woff2|otf)/,new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET"),e.registerRoute(/fonts.css/,new e.StaleWhileRevalidate({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/locales\/[^/]+.js/,new e.CacheFirst({cacheName:"locales",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
