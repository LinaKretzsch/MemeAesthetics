(this["webpackJsonpmeme-aesthetics-react-version"]=this["webpackJsonpmeme-aesthetics-react-version"]||[]).push([[0],[,,function(e,t,n){e.exports={popupContainer:"ImageContainer_popupContainer__3_kxb",popup:"ImageContainer_popup__2i6-7",correctGuess:"ImageContainer_correctGuess__2MgyC",wrongGuess:"ImageContainer_wrongGuess__1amOt",img:"ImageContainer_img__knWX-",btns:"ImageContainer_btns__3symr",leftBtn:"ImageContainer_leftBtn__3U3-Y",rightBtn:"ImageContainer_rightBtn__1Vs1j",generateBtn:"ImageContainer_generateBtn__yXhcx"}},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(5),c=n.n(r),i=(n(10),n(3)),o=(n(11),n(2)),u=n.n(o),l=n(0),g=function(e){var t="../Img/Liberal/",n=Object(a.useState)("../Img/Liberal/0.png"),s=Object(i.a)(n,2),r=s[0],c=s[1],o=Object(a.useState)(""),g=Object(i.a)(o,2),m=g[0],b=g[1];Object(a.useEffect)((function(){}),[r,m]);var j=function(n){n.preventDefault(),r.substring(7,14)===n.target.value||r.substring(7,19)===n.target.value?(b("Correct"),setTimeout((function(){b("")}),1500)):(b("Wrong"),setTimeout((function(){b("")}),1500)),e.onGuess(r.substring(0,15)===t?"liberal":"conservative")};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:u.a.popupContainer,style:""!==m?{display:"flex"}:{display:"none"},children:Object(l.jsx)("div",{className:u.a.popup,children:Object(l.jsx)("h2",{className:"Correct"===m?u.a.correctGuess:u.a.wrongGuess,children:m})})}),Object(l.jsx)("img",{className:u.a.img,src:r,alt:""}),Object(l.jsxs)("div",{className:u.a.btns,children:[Object(l.jsx)("button",{className:u.a.leftBtn,onClick:j,value:"Liberal",children:"Left-Wing"}),Object(l.jsx)("button",{className:u.a.generateBtn,onClick:function(){c(0===Math.floor(2*Math.random())?t+Math.floor(15*Math.random())+".png":"../Img/Conservative/"+Math.floor(15*Math.random())+".png"),console.log(r),e.onGenerate()},children:"Generate Meme"}),Object(l.jsx)("button",{className:u.a.rightBtn,onClick:j,value:"Conservative",children:"Right-Wing"})]})]})};var m=function(e){var t=Object(a.useState)("App gradient"),n=Object(i.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){console.log("Classname: ",s)}),[s]),Object(l.jsxs)("div",{className:s,children:[Object(l.jsx)("h1",{children:"Meme Aesthetics"}),Object(l.jsx)(g,{onGuess:function(e){r("App gradient "+e)},onGenerate:function(){r("App gradient")}})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.afbed364.chunk.js.map