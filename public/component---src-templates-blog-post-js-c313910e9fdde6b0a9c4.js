(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(n,t,e){"use strict";e.r(t),e.d(t,"query",function(){return m});var a=e(0),i=e.n(a),o=e(164),r=e(168),l=e(161),c=e(163),d=e(159),s=e(170);t.default=function(n){var t=n.data.markdownRemark;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:t.frontmatter.title}),i.a.createElement(r.a,null),i.a.createElement(o.a,null,i.a.createElement(c.a,null,t.frontmatter.title),i.a.createElement(s.a,null,t.frontmatter.date),i.a.createElement(d.a,{dangerouslySetInnerHTML:{__html:t.html}})))};var m="3202582339"},157:function(n,t,e){n.exports=e.p+"static/IBMPlexMono400-0a25c96eb36d640fe49af50fd28f3930.woff2"},158:function(n,t,e){n.exports=e.p+"static/IBMPlexMono700-b92716c44d0ec4bb256f9eda1e5c9999.woff2"},159:function(n,t,e){"use strict";var a=e(156);t.a=a.b.p.withConfig({displayName:"TextBody",componentId:"xl8j46-0"})(["display:block;line-height:1.5;margin:0 5% 5vh 5%;letter-spacing:-.003em;color:var(--primary-color-light);@media (max-width:849px){margin:0 0 5vh 0;}"])},160:function(n){n.exports={data:{site:{siteMetadata:{title:"Peter's Code Blog"}}}}},161:function(n,t,e){"use strict";var a=e(162),i=e(0),o=e.n(i),r=e(1),l=e.n(r),c=e(167),d=e.n(c);function s(n){var t=n.lang,e=n.title,i=n.description,r=a.data.site,l=i||r.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:t},title:e,titleTemplate:"%s ― "+r.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:e},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:e},{name:"twitter:description",content:l}]})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={lang:l.a.string,title:l.a.string.isRequired,meta:l.a.arrayOf(l.a.object),description:l.a.string},t.a=s},162:function(n){n.exports={data:{site:{siteMetadata:{title:"Peter's Code Blog",description:"Peter's Code Blog",author:"Peter Murphy"}}}}},163:function(n,t,e){"use strict";var a=e(156);t.a=a.b.h1.withConfig({displayName:"HeadingPrimary",componentId:"sc-1llftaz-0"})(["display:block;margin:0 auto 5vh auto;max-width:25em;font-size:60px;line-height:1.1;letter-spacing:-3px;padding:0 0 10px 0;background:-webkit-linear-gradient( 240deg,hsl(189,100%,50%),hsl(174,79%,49%),hsl(188,81%,59%),hsl(213,62%,61%),hsl(240,100%,70%) );-webkit-background-clip:text;-webkit-text-fill-color:transparent;@media (max-width:849px){font-size:45px;}"])},164:function(n,t,e){"use strict";var a=e(160),i=e(0),o=e.n(i),r=e(1),l=e.n(r),c=e(56),d=e(156),s=d.b.a.withConfig({displayName:"LinkStd",componentId:"wc3zqf-0"})(["margin-right:5vw;"]),m=d.b.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-14yvoum-0"})(["padding-top:5vh;padding-bottom:3vh;margin-top:10vh;text-align:left;font-size:17px;@media (max-width:849px){font-size:16px;}"]);var p=function(){return o.a.createElement(m,null,o.a.createElement(s,{href:"https://murphypone.github.io/Homepage/",target:"_blank"},"Homepage"))},g=e(166),h=e.n(g),u=e(157),f=e.n(u),w=e(158),x=e.n(w);function b(){var n=h()(["\n  * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    margin: 0;\n    -webkit-margin-before: 0;\n    margin-block-start: 0;\n    -webkit-margin-after: 0;\n    margin-block-end: 0;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 0;\n    margin-inline-end: 0;\n\n    display: inline-block;\n    font-size: inherit;\n  }\n\n  a {\n    text-decoration: none;\n    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);\n    -webkit-tap-highlight-color: transparent;\n    color: inherit;\n  }\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n    height: 100%;\n    width: 100%;\n  }\n\n  @font-face {\n    font-family: \"IBMPlexMono\";\n    src: local('IBMPlexMono400'), url('","') format(\"woff2\");\n    font-weight: 400;\n    font-style: normal;\n    font-display: block;\n  }\n\n  @font-face {\n    font-family: \"IBMPlexMono\";\n    src: local('IBMPlexMono700'), url('","') format(\"woff2\");\n    font-weight: 700;\n    font-style: normal;\n    font-display: block;\n  }\n\n  body {\n    padding-top: 15vh;\n    line-height: 1;\n    --sides-padding-desktop: 3%;\n    --sides-padding-mobile: 5%;\n\n    --background-color: hsl(0, 0%, 99%);\n    --background-color-translucent: hsla(0, 0%, 99%, 0.92);\n    --primary-color: hsl(0, 0%, 15%);\n    --primary-color-light: hsla(0, 0%, 15%, 0.9);\n    --primary-color-lighter: hsla(00, 0%, 15%, 0.7);\n    --secondary-color-a: hsl(351, 100%, 63%);\n    background-color: var(--background-color);\n    font-family: 'IBMPlexMono', sans-serif;\n    font-size: 19px;\n    font-weight: 400;\n    color: var(--primary-color);\n\n    @media (max-width: 849px) {\n      font-size: 17px;\n    }\n  }\n"]);return b=function(){return n},n}var y=Object(d.a)(b(),f.a,x.a),v=d.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1h5jjax-0"})(["padding:0 var(--sides-padding-desktop);margin:0 auto;max-width:1400px;@media (max-width:849px){padding:0 var(--sides-padding-mobile);}"]),k=d.b.main.withConfig({displayName:"Layout__Content",componentId:"sc-1h5jjax-1"})(["max-width:900px;margin:0 auto;@media (max-width:849px){width:100%;}"]);function C(n){var t=n.children;return o.a.createElement(c.StaticQuery,{query:"2994927498",render:function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement(v,null,o.a.createElement(k,null,t),o.a.createElement(p,null)))},data:a})}C.propTypes={children:l.a.node.isRequired};t.a=C},165:function(n,t,e){"use strict";var a=e(156);t.a=a.b.header.withConfig({displayName:"FixedBar",componentId:"sc-1sit54l-0"})(["display:flex;flex-direction:row;align-items:center;position:fixed;left:auto;right:auto;z-index:999;height:8vh;width:100%;padding:0 var(--sides-padding-desktop);top:0px;background-color:var(--background-color-translucent);-webkit-backdrop-filter:blur(2.5px);backdrop-filter:blur(2.5px);@media (max-width:849px){padding:0 var(--sides-padding-mobile);}"])},168:function(n,t,e){"use strict";var a=e(0),i=e.n(a),o=e(56),r=e(156),l=e(165),c=e(169),d=e.n(c),s=r.b.div.withConfig({displayName:"HeaderBack__Icon",componentId:"sc-185w4hl-0"})(["height:34px;width:34px;@media (max-width:849px){height:28px;width:28px;}"]);t.a=function(){return i.a.createElement(l.a,null,i.a.createElement(o.Link,{to:"/"},i.a.createElement(s,null,i.a.createElement("img",{src:d.a,alt:"Back"}))))}},169:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDA4cHgiIGhlaWdodD0iNDA4cHgiIHZpZXdCb3g9IjAgMCA0MDggNDA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDggNDA4OyBmaWxsOiBoc2woMCwgMCUsIDUlKSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8ZyBpZD0iYXJyb3ctYmFjayI+DQoJCTxwYXRoIGQ9Ik00MDgsMTc4LjVIOTYuOUwyMzkuNywzNS43TDIwNCwwTDAsMjA0bDIwNCwyMDRsMzUuNy0zNS43TDk2LjksMjI5LjVINDA4VjE3OC41eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},170:function(n,t,e){"use strict";var a=e(156),i=e(159);t.a=Object(a.b)(i.a).withConfig({displayName:"TextDate",componentId:"sc-5tt7pv-0"})(["font-size:16px;color:var(--primary-color-lighter);@media (max-width:849px){font-size:15px;}"])}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c313910e9fdde6b0a9c4.js.map