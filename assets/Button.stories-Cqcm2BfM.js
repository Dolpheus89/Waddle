import{j as u}from"./jsx-runtime-BImWf-k8.js";import{g}from"./index-CUiaQPeq.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var d;function b(){return d||(d=1,function(n){(function(){var l={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=o(e,m(s)))}return e}function m(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)l.call(e,s)&&e[s]&&(t=o(t,s));return t}function o(e,t){return t?e?e+" "+t:e+t:e}n.exports?(a.default=a,n.exports=a):window.classNames=a})()}(c)),c.exports}var v=b();const h=g(v),x="_button_1b9g5_1",N="_primary_1b9g5_21",T="_secondary_1b9g5_30",q="_ghost_1b9g5_39",j="_sm_1b9g5_49",S="_md_1b9g5_54",w="_lg_1b9g5_59",R="_loading_1b9g5_64",B="_content_1b9g5_68",V="_loader_1b9g5_73",z="_spin_1b9g5_1",r={button:x,primary:N,secondary:T,ghost:q,sm:j,md:S,lg:w,loading:R,content:B,loader:V,spin:z};function _({variant:n="primary",size:l="md",loading:a=!1,disabled:m,className:o,children:e,...t}){return u.jsxs("button",{className:h(r.button,r[n],r[l],a&&r.loading,o),disabled:m||a,"aria-busy":a,type:"button",...t,children:[a&&u.jsx("span",{className:r.loader}),u.jsx("span",{className:r.content,children:e})]})}_.__docgenInfo={description:"A button",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'}]},description:"Button variant (primary, secondary, or ghost)",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Button size (sm, md, or lg)",defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indicates if the button is disabled"},loading:{required:!1,tsType:{name:"boolean"},description:"Indicates if the button is in a loading state",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the button is clicked"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content (text, React elements)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the button"}}};const E={title:"Atoms/Button",component:_,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{table:{type:{summary:"primary | secondary"},defaultValue:{summary:"primary"}}},size:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"primary"}}}}},i={args:{variant:"primary",size:"md",children:"Test"}};var p,y,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Test"
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const O=["Primary"];export{i as Primary,O as __namedExportsOrder,E as default};
