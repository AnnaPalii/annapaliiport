(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{14:function(e,a,t){e.exports=t(31)},19:function(e,a,t){},20:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),i=t(10),s=(t(19),t(3)),m=t.n(s),o=["btn--primary","btn--outline","btn--test"],u=["btn--medium","btn--large"],d=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,i=o.includes(c)?c:o[0],s=u.includes(r)?r:u[0];return l.a.createElement(m.a,{href:"#contact",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(i," ").concat(s),onClick:n,type:t},a))},E=t(2);t(20);var f=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),o=s[0],u=s[1],f=function(){return c(!1)},b=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(E.b,{to:"/",className:"navbar-logo",onClick:f},"Anna Palii"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.a,{href:"#aboutme",className:"nav-links",onClick:f},"About Me")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.a,{href:"#projects",className:"nav-links",onClick:f},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.a,{href:"#resume",className:"nav-links",onClick:f},"Resume"))),o&&l.a.createElement(d,{buttonStyle:"btn--outline"},"Contact"))))};t(6),t(7);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(E.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"AppAvatar",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var p=function(){return l.a.createElement("section",{className:"cards",id:"projects"},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-1.jpg",text:"Workout Tracker offers tracking of unlimited activities, whether you\u2019re cycling, hiking or even kayaking.",label:"React",path:"/services"}),l.a.createElement(b,{src:"images/img-2.png",text:"Employee Directory",label:"React",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-3.jpg",text:"Real time weather application",label:"JavaScript",path:"/services"}),l.a.createElement(b,{src:"images/img-4.jpg",text:"Online Repository for local businesses to find influencers in Twitter",label:"HTML",path:"/products"})))))};t(29);var v=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-3.mov",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"Hi! I am Anna."))};t(30);var g=function(){return l.a.createElement("section",{id:"contact",className:"footer-container"},l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"})),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement("p",{className:"social-logo"},"Anna Palii"),l.a.createElement("p",{className:"social-logo"},"annapalii@outlook.com")),l.a.createElement("div",{class:"social-icons"},l.a.createElement(E.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(E.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(E.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(E.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))},k=function(){return l.a.createElement("section",{className:"cards",id:"aboutme"},l.a.createElement("h3",{className:"text"},"About Me"),l.a.createElement("p",null,"Certified product manager and scrum master leveraging financial background to build effective web applications. Successfully managed team of 10 people, creating agile-based strategies that empower teams to streamline processes to meet deadlines. Experienced in development of real-time, synchronized reporting to provide return on investment, risk rate and outstanding liabilities."),l.a.createElement("p",null,"Currently involved in earning a certificate in full stack development from Columbia University to develop skills in JavaScript, React.js, MySQL and responsive web design. Passionate about approaching financial challenges from a programming angle and collaborate with others to create web applications which will help users to make informed decisions.  "))},h=function(){return l.a.createElement("section",{className:"cards",id:"resume"},l.a.createElement("h1",{className:"text"},"Resume"),l.a.createElement("embed",{src:"assets/annapaliicv.pdf",width:"600px",height:"700px",className:"resume"}))};var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(k,null),l.a.createElement(p,null),l.a.createElement(h,null),l.a.createElement(g,null))};var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(f,null),l.a.createElement(N,null)))};r.a.render(l.a.createElement(_,null),document.getElementById("root"))},6:function(e,a,t){},7:function(e,a,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.789c3ad4.chunk.js.map