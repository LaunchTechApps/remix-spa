function ee(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=ee(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function ie(){for(var e,r,t=0,o="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=ee(e))&&(o&&(o+=" "),o+=r);return o}const B="-";function le(e){const r=ce(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const a=s.split(B);return a[0]===""&&a.length!==1&&a.shift(),re(a,r)||ae(s)}function n(s,a){const u=t[s]||[];return a&&o[s]?[...u,...o[s]]:u}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function re(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?re(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(B);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const Y=/^\[(.+)\]$/;function ae(e){if(Y.test(e)){const r=Y.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ce(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ue(Object.entries(e.classGroups),t).forEach(([n,s])=>{_(s,o,n,r)}),o}function _(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:D(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(de(i)){_(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{_(s,D(r,n),t,o)})})}function D(e,r){let t=e;return r.split(B).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function de(e){return e.isThemeGetter}function ue(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[t,i]}):e}function pe(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const te="!";function fe(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const a=[];let u=0,f=0,p;for(let b=0;b<s.length;b++){let m=s[b];if(u===0){if(m===o&&(t||s.slice(b,b+i)===r)){a.push(s.slice(f,b)),f=b+i;continue}if(m==="/"){p=b;continue}}m==="["?u++:m==="]"&&u--}const g=a.length===0?s:s.substring(f),h=g.startsWith(te),w=h?g.substring(1):g,S=p&&p>f?p-f:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:w,maybePostfixModifierPosition:S}}}function be(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function ge(e){return{cache:pe(e.cacheSize),splitModifiers:fe(e),...le(e)}}const me=/\s+/;function he(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(me).map(s=>{const{modifiers:a,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=t(s);let g=o(p?f.substring(0,p):f),h=!!p;if(!g){if(!p)return{isTailwindClass:!1,originalClassName:s};if(g=o(f),!g)return{isTailwindClass:!1,originalClassName:s};h=!1}const w=be(a).join(":");return{isTailwindClass:!0,modifierId:u?w+te:w,classGroupId:g,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:u,hasPostfixModifier:f}=s,p=a+u;return n.has(p)?!1:(n.add(p),i(u,f).forEach(g=>n.add(a+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function ye(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=oe(r))&&(o&&(o+=" "),o+=t);return o}function oe(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=oe(e[o]))&&(t&&(t+=" "),t+=r);return t}function xe(e,...r){let t,o,i,n=s;function s(u){const f=r.reduce((p,g)=>g(p),e());return t=ge(f),o=t.cache.get,i=t.cache.set,n=a,a(u)}function a(u){const f=o(u);if(f)return f;const p=he(u,t);return i(u,p),p}return function(){return n(ye.apply(null,arguments))}}function c(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ne=/^\[(?:([a-z-]+):)?(.+)\]$/i,we=/^\d+\/\d+$/,ve=new Set(["px","full","screen"]),ke=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ze=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ce=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Se=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Me=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function x(e){return C(e)||ve.has(e)||we.test(e)}function k(e){return M(e,"length",Ee)}function C(e){return!!e&&!Number.isNaN(Number(e))}function E(e){return M(e,"number",C)}function G(e){return!!e&&Number.isInteger(Number(e))}function Ae(e){return e.endsWith("%")&&C(e.slice(0,-1))}function l(e){return ne.test(e)}function z(e){return ke.test(e)}const Re=new Set(["length","size","percentage"]);function Ge(e){return M(e,Re,se)}function Ie(e){return M(e,"position",se)}const Pe=new Set(["image","url"]);function Te(e){return M(e,Pe,We)}function je(e){return M(e,"",Le)}function I(){return!0}function M(e,r,t){const o=ne.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ee(e){return ze.test(e)&&!Ce.test(e)}function se(){return!1}function Le(e){return Se.test(e)}function We(e){return Me.test(e)}function Ve(){const e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),i=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),f=c("grayscale"),p=c("hueRotate"),g=c("invert"),h=c("gap"),w=c("gradientColorStops"),S=c("gradientColorStopPositions"),b=c("inset"),m=c("margin"),v=c("opacity"),y=c("padding"),U=c("saturate"),W=c("scale"),F=c("sepia"),q=c("skew"),J=c("space"),X=c("translate"),V=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",l,r],d=()=>[l,r],Z=()=>["",x,k],P=()=>["auto",C,l],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],T=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],$=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",l],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[C,E],j=()=>[C,l];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[x,k],blur:["none","",z,l],brightness:R(),borderColor:[e],borderRadius:["none","","full",z,l],borderSpacing:d(),borderWidth:Z(),contrast:R(),grayscale:A(),hueRotate:j(),invert:A(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Ae,k],inset:O(),margin:O(),opacity:R(),padding:d(),saturate:R(),scale:R(),sepia:A(),skew:j(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),l]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G,l]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",G,l]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",G,l]},l]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[G,l]},l]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",C,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...T(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",x,k]}],"underline-offset":[{"underline-offset":["auto",x,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),Ie]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ge]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Te]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...T(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:T()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...T()]}],"outline-offset":[{"outline-offset":[x,l]}],"outline-w":[{outline:[x,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[x,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,je]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":K()}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",z,l]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[U]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[U]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[G,l]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[x,k,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ne=xe(Ve);function Oe(...e){return Ne(ie(e))}const L={seconds:e=>e*1e3,minutes:e=>L.seconds(e)*60,hours:e=>L.minutes(e)*60,days:e=>L.hours(e)*24},$e={mili:e=>new Promise(r=>setTimeout(r,e)),seconds:e=>{const r=L.seconds(e);return new Promise(t=>setTimeout(t,r))}};export{Oe as c,L as m,$e as s};
