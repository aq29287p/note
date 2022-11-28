import{_ as r,r as o,c,d as e,w as a,F as p,b as T,a as s,e as l,o as Q}from"./app.ee0a93f3.js";const i={},y=T('<h1 id="_107" tabindex="-1"><a class="header-anchor" href="#_107" aria-hidden="true">#</a> 107.</h1><h2 id="\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7B54" aria-hidden="true">#</a> \u89E3\u7B54</h2><ol><li>\u5275\u5EFA queue \u4E00\u5C64\u4E00\u5C64 \u628Anode \u653E\u5165queue</li><li>\u4E26\u628A\u8A72\u5C64\u5143\u7D20\u5B58\u5165 cur_layer\u5F8C \u5F9E\u982D\u63D2\u5165 res;</li></ol><h3 id="\u5BE6\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BE6\u4F5C" aria-hidden="true">#</a> \u5BE6\u4F5C</h3>',4),d=s("div",{class:"language-cpp ext-cpp line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"class"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"Solution"),s("span",{style:{color:"#ADBAC7"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"public:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F69D50"}},"vector"),s("span",{style:{color:"#ADBAC7"}},"<"),s("span",{style:{color:"#F69D50"}},"vector"),s("span",{style:{color:"#ADBAC7"}},"<"),s("span",{style:{color:"#F47067"}},"int"),s("span",{style:{color:"#ADBAC7"}},">> "),s("span",{style:{color:"#DCBDFB"}},"levelOrderBottom"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F69D50"}},"TreeNode"),s("span",{style:{color:"#F47067"}},"*"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"root"),s("span",{style:{color:"#ADBAC7"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        vector"),s("span",{style:{color:"#F47067"}},"<"),s("span",{style:{color:"#ADBAC7"}},"vector"),s("span",{style:{color:"#F47067"}},"<int>>"),s("span",{style:{color:"#ADBAC7"}}," res;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}},"(root"),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#6CB6FF"}},"nullptr"),s("span",{style:{color:"#ADBAC7"}},") "),s("span",{style:{color:"#F47067"}},"return"),s("span",{style:{color:"#ADBAC7"}}," res;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        queue"),s("span",{style:{color:"#F47067"}},"<"),s("span",{style:{color:"#ADBAC7"}},"TreeNode"),s("span",{style:{color:"#F47067"}},"*>"),s("span",{style:{color:"#ADBAC7"}}," q;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        q."),s("span",{style:{color:"#DCBDFB"}},"push"),s("span",{style:{color:"#ADBAC7"}},"(root);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"while"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F47067"}},"!"),s("span",{style:{color:"#ADBAC7"}},"q."),s("span",{style:{color:"#DCBDFB"}},"empty"),s("span",{style:{color:"#ADBAC7"}},"()){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#F47067"}},"int"),s("span",{style:{color:"#ADBAC7"}}," n "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," q."),s("span",{style:{color:"#DCBDFB"}},"size"),s("span",{style:{color:"#ADBAC7"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            vector"),s("span",{style:{color:"#F47067"}},"<int>"),s("span",{style:{color:"#ADBAC7"}}," cur_layer;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#F47067"}},"for"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F47067"}},"int"),s("span",{style:{color:"#ADBAC7"}}," i"),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},"; i"),s("span",{style:{color:"#F47067"}},"<"),s("span",{style:{color:"#ADBAC7"}},"n;i"),s("span",{style:{color:"#F47067"}},"++"),s("span",{style:{color:"#ADBAC7"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                TreeNode"),s("span",{style:{color:"#F47067"}},"*"),s("span",{style:{color:"#ADBAC7"}}," cur_node"),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," q."),s("span",{style:{color:"#DCBDFB"}},"front"),s("span",{style:{color:"#ADBAC7"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                q."),s("span",{style:{color:"#DCBDFB"}},"pop"),s("span",{style:{color:"#ADBAC7"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                cur_layer."),s("span",{style:{color:"#DCBDFB"}},"push_back"),s("span",{style:{color:"#ADBAC7"}},"(cur_node->val);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}},"(cur_node->left "),s("span",{style:{color:"#F47067"}},"!="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"nullptr"),s("span",{style:{color:"#ADBAC7"}},") q."),s("span",{style:{color:"#DCBDFB"}},"push"),s("span",{style:{color:"#ADBAC7"}},"(cur_node->left);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}},"(cur_node->right "),s("span",{style:{color:"#F47067"}},"!="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"nullptr"),s("span",{style:{color:"#ADBAC7"}},") q."),s("span",{style:{color:"#DCBDFB"}},"push"),s("span",{style:{color:"#ADBAC7"}},"(cur_node->right);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            res."),s("span",{style:{color:"#DCBDFB"}},"insert"),s("span",{style:{color:"#ADBAC7"}},"(res."),s("span",{style:{color:"#DCBDFB"}},"begin"),s("span",{style:{color:"#ADBAC7"}},"(), cur_layer);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"return"),s("span",{style:{color:"#ADBAC7"}}," res;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"};")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br")])],-1),A=s("div",{class:"language-python ext-py line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#22272e"}},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),m=s("h3",{id:"\u5206\u6790",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5206\u6790","aria-hidden":"true"},"#"),l(" \u5206\u6790")],-1),B=s("ul",null,[s("li",null,[l("\u6642\u9593\u8907\u96DC\u5EA6\uFF1A"),s("mjx-container",{class:"MathJax",jax:"SVG",style:{direction:"ltr"}},[s("svg",{style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.919ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2174 1000"},[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"4F",d:"M308 428Q289 428 289 438Q289 457 318 508T378 593Q417 638 475 671T599 705Q688 705 732 643T777 483Q777 380 733 285T620 123T464 18T293 -22Q188 -22 123 51T58 245Q58 327 87 403T159 533T249 626T333 685T388 705Q404 705 404 693Q404 674 363 649Q333 632 304 606T239 537T181 429T158 290Q158 179 214 114T364 48Q489 48 583 165T677 438Q677 473 670 505T648 568T601 617T528 636Q518 636 513 635Q486 629 460 600T419 544T392 490Q383 470 372 459Q341 430 308 428Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mo",transform:"translate(796,0)"},[s("path",{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mi",transform:"translate(1185,0)"},[s("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mo",transform:"translate(1785,0)"},[s("path",{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",style:{"stroke-width":"3"}})])])])])]),l(" \u904D\u6B77\u5168\u90E8\u5143\u7D20 n")]),s("li",null,[l("\u7A7A\u9593\u8907\u96DC\u5EA6\uFF1A"),s("mjx-container",{class:"MathJax",jax:"SVG",style:{direction:"ltr"}},[s("svg",{style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.769ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3434 1000"},[s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"4F",d:"M308 428Q289 428 289 438Q289 457 318 508T378 593Q417 638 475 671T599 705Q688 705 732 643T777 483Q777 380 733 285T620 123T464 18T293 -22Q188 -22 123 51T58 245Q58 327 87 403T159 533T249 626T333 685T388 705Q404 705 404 693Q404 674 363 649Q333 632 304 606T239 537T181 429T158 290Q158 179 214 114T364 48Q489 48 583 165T677 438Q677 473 670 505T648 568T601 617T528 636Q518 636 513 635Q486 629 460 600T419 544T392 490Q383 470 372 459Q341 430 308 428Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mo",transform:"translate(796,0)"},[s("path",{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mi",transform:"translate(1185,0)"},[s("path",{"data-c":"1D459",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mi",transform:"translate(1483,0)"},[s("path",{"data-c":"1D45C",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mi",transform:"translate(1968,0)"},[s("path",{"data-c":"1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mi",transform:"translate(2445,0)"},[s("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mo",transform:"translate(3045,0)"},[s("path",{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",style:{"stroke-width":"3"}})])])])])]),l(" \u7B49\u6BD4\u6578\u5217\u6700\u5F8C\u4E00\u9805~log_2{n}")])],-1);function D(C,u){const n=o("CodeGroupItem"),t=o("CodeGroup");return Q(),c(p,null,[y,e(t,null,{default:a(()=>[e(n,{title:"c++"},{default:a(()=>[d]),_:1}),e(n,{title:"python"},{default:a(()=>[A]),_:1})]),_:1}),m,B],64)}var b=r(i,[["render",D]]);export{b as default};
