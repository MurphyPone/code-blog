(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(56),r=n(156),l=n(164),d=n(161),s=n(165),c=Object(r.b)(s.a).withConfig({displayName:"HeaderLogo",componentId:"sc-8uhhqs-0"})(["background:-webkit-linear-gradient( 240deg,hsl(189,100%,50%),hsl(174,79%,49%),hsl(188,81%,59%),hsl(213,62%,61%),hsl(240,100%,70%) );-webkit-text-fill-color:white;height:3em;justify-content:space-between;"]),m=r.b.p.withConfig({displayName:"HeaderLogo__Logo",componentId:"sc-8uhhqs-1"})(["font-size:32px;font-weight:700;@media (max-width:849px){font-size:28px;}"]);var p=function(t){return t.data,i.a.createElement(c,null,i.a.createElement(m,null,"Posts"),i.a.createElement(o.Link,{to:"/about"},i.a.createElement("h1",{style:{color:"white"}},i.a.createElement("em",null,"About"))))},g=n(163),h=r.b.h2.withConfig({displayName:"HeadingSecondary",componentId:"txft8w-0"})(["display:block;font-size:40px;line-height:1.2;margin-bottom:2.5vh;letter-spacing:-1.5px;@media (max-width:849px){font-size:30px;}"]),f=n(159),u=n(170),x=n(188),b=n.n(x);n.d(e,"query",function(){return v});var w=r.b.div.withConfig({displayName:"pages__Hero",componentId:"sjh9uz-0"})(["margin-bottom:20vh;@media (max-width:849px){margin-bottom:15vh;}"]),y=r.b.div.withConfig({displayName:"pages__Post",componentId:"sjh9uz-1"})(["border-bottom:1px solid lightgray;margin-bottom:50px;@media (max-width:849px){padding-left:0;}"]),k={padding:"5px",borderRadius:"50%",height:"200px",width:"200px",verticalAlign:"middle",alignSelf:"flex-start",float:"right"};var v="2498822752";e.default=function(t){var e=t.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:"Blog"}),i.a.createElement(p,null),i.a.createElement(l.a,null,i.a.createElement(w,null,i.a.createElement("img",{src:b.a,style:k,alt:"profile image"}),i.a.createElement(g.a,null,"Peter's Code Blog"),i.a.createElement(f.a,null,"For my meager writeups")),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return i.a.createElement(o.Link,{key:e.id,to:e.fields.slug},i.a.createElement(y,null,i.a.createElement(h,null,e.frontmatter.title),i.a.createElement(f.a,null," Using: ",e.frontmatter.subtitle," "),i.a.createElement(u.a,{style:{float:"right"}},e.frontmatter.duration),i.a.createElement(u.a,null,e.frontmatter.date)))})))}},157:function(t,e,n){t.exports=n.p+"static/IBMPlexMono400-0a25c96eb36d640fe49af50fd28f3930.woff2"},158:function(t,e,n){t.exports=n.p+"static/IBMPlexMono700-b92716c44d0ec4bb256f9eda1e5c9999.woff2"},159:function(t,e,n){"use strict";var a=n(156);e.a=a.b.p.withConfig({displayName:"TextBody",componentId:"xl8j46-0"})(["display:block;line-height:1.5;margin:0 5% 5vh 5%;letter-spacing:-.003em;color:var(--primary-color-light);@media (max-width:849px){margin:0 0 5vh 0;}"])},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Peter's Code Blog"}}}}},161:function(t,e,n){"use strict";var a=n(162),i=n(0),o=n.n(i),r=n(1),l=n.n(r),d=n(167),s=n.n(d);function c(t){var e=t.lang,n=t.title,i=t.description,r=a.data.site,l=i||r.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:e},title:n,titleTemplate:"%s ― "+r.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:n},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:l}]})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={lang:l.a.string,title:l.a.string.isRequired,meta:l.a.arrayOf(l.a.object),description:l.a.string},e.a=c},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Peter's Code Blog",description:"Peter's Code Blog",author:"Peter Murphy"}}}}},163:function(t,e,n){"use strict";var a=n(156);e.a=a.b.h1.withConfig({displayName:"HeadingPrimary",componentId:"sc-1llftaz-0"})(["display:block;margin:0 auto 5vh auto;max-width:25em;font-size:60px;line-height:1.1;letter-spacing:-3px;padding:0 0 10px 0;background:-webkit-linear-gradient( 240deg,hsl(189,100%,50%),hsl(174,79%,49%),hsl(188,81%,59%),hsl(213,62%,61%),hsl(240,100%,70%) );-webkit-background-clip:text;-webkit-text-fill-color:transparent;@media (max-width:849px){font-size:45px;}"])},164:function(t,e,n){"use strict";var a=n(160),i=n(0),o=n.n(i),r=n(1),l=n.n(r),d=n(56),s=n(156),c=s.b.a.withConfig({displayName:"LinkStd",componentId:"wc3zqf-0"})(["margin-right:5vw;"]),m=s.b.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-14yvoum-0"})(["padding-top:5vh;padding-bottom:3vh;margin-top:10vh;text-align:left;font-size:17px;@media (max-width:849px){font-size:16px;}"]);var p=function(){return o.a.createElement(m,null,o.a.createElement(c,{href:"https://murphypone.github.io/Homepage/",target:"_blank"},"Homepage"))},g=n(166),h=n.n(g),f=n(157),u=n.n(f),x=n(158),b=n.n(x);function w(){var t=h()(["\n  * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  // h1,\n  // h2,\n  // h3,\n  // h4,\n  // h5,\n  // h6,\n  // p {\n  //   margin: 0;\n  //   -webkit-margin-before: 0;\n  //   margin-block-start: 0;\n  //   -webkit-margin-after: 0;\n  //   margin-block-end: 0;\n  //   -webkit-margin-start: 0;\n  //   margin-inline-start: 0;\n  //   -webkit-margin-end: 0;\n  //   margin-inline-end: 0;\n  // \n  //   display: inline-block;\n  //   font-size: inherit;\n  // }\n\n  a {\n    text-decoration: none;\n    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);\n    -webkit-tap-highlight-color: transparent;\n    color: inherit;\n  }\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n    height: 100%;\n    width: 100%;\n  }\n\n  @font-face {\n    font-family: \"IBMPlexMono\";\n    src: local('IBMPlexMono400'), url('","') format(\"woff2\");\n    font-weight: 400;\n    font-style: normal;\n    font-display: block;\n  }\n\n  @font-face {\n    font-family: \"IBMPlexMono\";\n    src: local('IBMPlexMono700'), url('","') format(\"woff2\");\n    font-weight: 700;\n    font-style: normal;\n    font-display: block;\n  }\n\n  body {\n    padding-top: 15vh;\n    line-height: 1;\n    --sides-padding-desktop: 3%;\n    --sides-padding-mobile: 5%;\n\n    --background-color: hsl(0, 0%, 99%);\n    --background-color-translucent: hsla(0, 0%, 99%, 0.92);\n    --primary-color: hsl(0, 0%, 15%);\n    --primary-color-light: hsla(0, 0%, 15%, 0.9);\n    --primary-color-lighter: hsla(00, 0%, 15%, 0.7);\n    --secondary-color-a: hsl(351, 100%, 63%);\n    background-color: var(--background-color);\n    font-family: 'IBMPlexMono', sans-serif;\n    font-size: 19px;\n    font-weight: 400;\n    color: var(--primary-color);\n\n    @media (max-width: 849px) {\n      font-size: 17px;\n    }\n  }\n"]);return w=function(){return t},t}var y=Object(s.a)(w(),u.a,b.a),k=s.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1h5jjax-0"})(["padding:0 var(--sides-padding-desktop);margin:0 auto;max-width:1400px;@media (max-width:849px){padding:0 var(--sides-padding-mobile);}"]),v=s.b.main.withConfig({displayName:"Layout__Content",componentId:"sc-1h5jjax-1"})(["max-width:900px;margin:0 auto;@media (max-width:849px){width:100%;}"]);function E(t){var e=t.children;return o.a.createElement(d.StaticQuery,{query:"2994927498",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement(k,null,o.a.createElement(v,null,e),o.a.createElement(p,null)))},data:a})}E.propTypes={children:l.a.node.isRequired};e.a=E},165:function(t,e,n){"use strict";var a=n(156);e.a=a.b.header.withConfig({displayName:"FixedBar",componentId:"sc-1sit54l-0"})(["display:flex;flex-direction:row;align-items:center;position:fixed;left:auto;right:auto;z-index:999;height:8vh;width:100%;padding:0 var(--sides-padding-desktop);top:0px;background-color:var(--background-color-translucent);-webkit-backdrop-filter:blur(2.5px);backdrop-filter:blur(2.5px);@media (max-width:849px){padding:0 var(--sides-padding-mobile);}"])},170:function(t,e,n){"use strict";var a=n(156),i=n(159);e.a=Object(a.b)(i.a).withConfig({displayName:"TextDate",componentId:"sc-5tt7pv-0"})(["font-size:16px;color:var(--primary-color-lighter);@media (max-width:849px){font-size:15px;}"])},188:function(t,e,n){t.exports=n.p+"static/avi-e1e8af4361bca79677e8033ecd1c90a8.jpeg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9eb9e4af3a3fe3028a23.js.map