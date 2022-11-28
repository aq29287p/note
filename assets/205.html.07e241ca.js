import{_ as r,r as o,c,d as a,w as e,F as p,b as i,a as s,e as l,o as y}from"./app.ee0a93f3.js";const A={},T=i('<h1 id="_205-isomorphic-strings" tabindex="-1"><a class="header-anchor" href="#_205-isomorphic-strings" aria-hidden="true">#</a> 205. Isomorphic Strings</h1><h2 id="\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7B54" aria-hidden="true">#</a> \u89E3\u7B54</h2><p>\u6AA2\u67E5\u7B2Ci\u500B\u5B57\u6BCD \u662F\u5426\u6709map\u5230\u540C\u4E00\u500B\u6578<br> \u7B2Ci\u500B\u5B57\u6BCD \u82E5\u7B2C\u4E00\u6B21\u51FA\u73FE map\u5230 i+1<br> python: [a,b,b,c,c] \u53D6index -&gt; [0,1,1,2,2]<br> c++: \u521D\u59CB [a,b,c,d...z] -&gt; [0,0,0,0,0...,0]<br> 1 \u6AA2\u67E5 s[0] and t[0] \u662F\u5426map \u5230\u540C\u4E00\u500B\u6578<br> if no -&gt; return false<br> else if \u4E4B\u524D\u6C92map\u904E(0):<br> s[i],t[i] map\u5230 i+1</p><h3 id="\u5BE6\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BE6\u4F5C" aria-hidden="true">#</a> \u5BE6\u4F5C</h3>',4),d=s("div",{class:"language-cpp ext-cpp line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"class"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"Solution"),s("span",{style:{color:"#ADBAC7"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"public:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"bool"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"isIsomorphic"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F69D50"}},"string"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"s"),s("span",{style:{color:"#ADBAC7"}},", "),s("span",{style:{color:"#F69D50"}},"string"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"t"),s("span",{style:{color:"#ADBAC7"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"int"),s("span",{style:{color:"#ADBAC7"}}," n"),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}},"s."),s("span",{style:{color:"#DCBDFB"}},"length"),s("span",{style:{color:"#ADBAC7"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    vector"),s("span",{style:{color:"#F47067"}},"<int>"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"s_table"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"128"),s("span",{style:{color:"#ADBAC7"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    vector"),s("span",{style:{color:"#F47067"}},"<int>"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"t_table"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"128"),s("span",{style:{color:"#ADBAC7"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"for"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F47067"}},"int"),s("span",{style:{color:"#ADBAC7"}}," i"),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},";i"),s("span",{style:{color:"#F47067"}},"<"),s("span",{style:{color:"#ADBAC7"}},"n;i"),s("span",{style:{color:"#F47067"}},"++"),s("span",{style:{color:"#ADBAC7"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}},"(s_table[s[i]]"),s("span",{style:{color:"#F47067"}},"!="),s("span",{style:{color:"#ADBAC7"}},"t_table[t[i]]){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#F47067"}},"return"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"false"),s("span",{style:{color:"#ADBAC7"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }"),s("span",{style:{color:"#F47067"}},"else"),s("span",{style:{color:"#ADBAC7"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}},"(s_table[s[i]]"),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                s_table[s[i]]"),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}},"i"),s("span",{style:{color:"#F47067"}},"+"),s("span",{style:{color:"#6CB6FF"}},"1"),s("span",{style:{color:"#ADBAC7"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                t_table[t[i]]"),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}},"i"),s("span",{style:{color:"#F47067"}},"+"),s("span",{style:{color:"#6CB6FF"}},"1"),s("span",{style:{color:"#ADBAC7"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"return"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"true"),s("span",{style:{color:"#ADBAC7"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br")])],-1),m=s("div",{class:"language-python ext-py line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"class"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"Solution"),s("span",{style:{color:"#ADBAC7"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"def"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"isIsomorphic"),s("span",{style:{color:"#ADBAC7"}},"(self, s: "),s("span",{style:{color:"#6CB6FF"}},"str"),s("span",{style:{color:"#ADBAC7"}},", t: "),s("span",{style:{color:"#6CB6FF"}},"str"),s("span",{style:{color:"#ADBAC7"}},") -> "),s("span",{style:{color:"#6CB6FF"}},"bool"),s("span",{style:{color:"#ADBAC7"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"return"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"list"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"map"),s("span",{style:{color:"#ADBAC7"}},"(s.index,s))"),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#6CB6FF"}},"list"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"map"),s("span",{style:{color:"#ADBAC7"}},"(t.index,t))")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br")])],-1),B=s("h3",{id:"\u5206\u6790",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5206\u6790","aria-hidden":"true"},"#"),l(" \u5206\u6790")],-1),C=s("ul",null,[s("li",null,[l("\u6642\u9593\u8907\u96DC\u5EA6\uFF1A"),s("mjx-container",{class:"MathJax",jax:"SVG",style:{direction:"ltr"}},[s("svg",{style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.919ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2174 1000"},[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"4F",d:"M308 428Q289 428 289 438Q289 457 318 508T378 593Q417 638 475 671T599 705Q688 705 732 643T777 483Q777 380 733 285T620 123T464 18T293 -22Q188 -22 123 51T58 245Q58 327 87 403T159 533T249 626T333 685T388 705Q404 705 404 693Q404 674 363 649Q333 632 304 606T239 537T181 429T158 290Q158 179 214 114T364 48Q489 48 583 165T677 438Q677 473 670 505T648 568T601 617T528 636Q518 636 513 635Q486 629 460 600T419 544T392 490Q383 470 372 459Q341 430 308 428Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mo",transform:"translate(796,0)"},[s("path",{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mi",transform:"translate(1185,0)"},[s("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mo",transform:"translate(1785,0)"},[s("path",{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",style:{"stroke-width":"3"}})])])])])])]),s("li",null,[l("\u7A7A\u9593\u8907\u96DC\u5EA6\uFF1A"),s("mjx-container",{class:"MathJax",jax:"SVG",style:{direction:"ltr"}},[s("svg",{style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.692ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2074 1000"},[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"4F",d:"M308 428Q289 428 289 438Q289 457 318 508T378 593Q417 638 475 671T599 705Q688 705 732 643T777 483Q777 380 733 285T620 123T464 18T293 -22Q188 -22 123 51T58 245Q58 327 87 403T159 533T249 626T333 685T388 705Q404 705 404 693Q404 674 363 649Q333 632 304 606T239 537T181 429T158 290Q158 179 214 114T364 48Q489 48 583 165T677 438Q677 473 670 505T648 568T601 617T528 636Q518 636 513 635Q486 629 460 600T419 544T392 490Q383 470 372 459Q341 430 308 428Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mo",transform:"translate(796,0)"},[s("path",{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mn",transform:"translate(1185,0)"},[s("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mo",transform:"translate(1685,0)"},[s("path",{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",style:{"stroke-width":"3"}})])])])])])])],-1);function Q(D,b){const n=o("CodeGroupItem"),t=o("CodeGroup");return y(),c(p,null,[T,a(t,null,{default:e(()=>[a(n,{title:"c++"},{default:e(()=>[d]),_:1}),a(n,{title:"python"},{default:e(()=>[m]),_:1})]),_:1}),B,C],64)}var F=r(A,[["render",Q]]);export{F as default};
