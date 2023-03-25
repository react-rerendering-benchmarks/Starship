"use strict";(self.webpackChunktricorder_api_server_ui=self.webpackChunktricorder_api_server_ui||[]).push([[413],{5071:function(H,y,r){r.r(y);var D=r(11281),l=r.n(D),I=r(97548),P=r.n(I),Z=r(97983),b=r.n(Z),W=r(40794),B=r.n(W),F=r(12741),A=r.n(F),L=r(98037),T=r(59652),R=r(67294),s=r(91993),M=r(16536),d=r(24016),x=r(26713),v=r(71577),U=r(2771),E=r(38939),O=r(3089),C=r(24969),K=r(88484),S=r(94601),j=r(36275),e=r(85893),k=["key","name"],w=["key","name"],N=function(m){return console.log("Upload event:",m),Array.isArray(m)?m:m==null?void 0:m.fileList},p="100%",$=function(){var m=s.Z.useForm(),V=A()(m,1),g=V[0],o=(0,j.useIntl)(),G=function(){var c=B()(b()().mark(function a(t){var _,f,i,h;return b()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,S.zp)({name:t.name,ebpf:{code:t.code,eventSize:String(t.eventSize),perfBuffers:[t.perfBuffers],kprobes:t.kprobes},fn:t.fn,wasm:(_=t.wasm)===null||_===void 0||(f=_[0])===null||f===void 0||(i=f.response)===null||i===void 0?void 0:i.data,schemaName:t.schemaName,schemaAttr:t.schemaAttr});case 3:return h=n.sent,h.code==="200"?(M.ZP.success("success"),j.history.push("/module-list"),sessionStorage.setItem("codeCache","")):M.ZP.error(h.message),n.abrupt("return",h.data);case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}},a,null,[[0,8]])}));return function(t){return c.apply(this,arguments)}}(),J=function(a){console.log("failed:",a)};return(0,R.useEffect)(function(){var c=j.history.listen(function(){sessionStorage.setItem("codeCache",JSON.stringify(g.getFieldsValue()))}),a=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return _.returnValue="You might lost changes on this page",_.returnValue};return window.addEventListener("beforeunload",a),function(){c(),window.removeEventListener("beforeunload",a)}},[g]),(0,e.jsx)(L._z,{children:(0,e.jsx)(T.Z,{style:{borderRadius:8},bodyStyle:{backgroundImage:"radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)"},children:(0,e.jsxs)(s.Z,{name:"basic",labelCol:{span:5},wrapperCol:{span:15},initialValues:sessionStorage.getItem("codeCache")?JSON.parse(sessionStorage.getItem("codeCache")||"{}"):{},onFinish:G,onFinishFailed:J,autoComplete:"off",form:g,children:[(0,e.jsx)(s.Z.Item,{label:o.formatMessage({id:"code.name"}),name:"name",rules:[{required:!0,message:"Please input name!"},{type:"string",max:50,message:"Up to 50 characters!"}],children:(0,e.jsx)(d.Z,{style:{width:p}})}),(0,e.jsx)(s.Z.Item,{label:o.formatMessage({id:"code.code"}),name:"code",rules:[{required:!0,message:"Please input ebpf!"}],children:(0,e.jsx)(d.Z.TextArea,{rows:8,style:{width:p}})}),(0,e.jsx)(s.Z.Item,{label:o.formatMessage({id:"code.eventSize"}),name:"eventSize",rules:[{required:!0,message:"Please input eBPF event size!"},{validator:function(a,t){return t==="0"?Promise.resolve(!0):Number.isNaN(Number(t))?Promise.reject(!1):Promise.resolve(!0)},message:"Please input number!"}],children:(0,e.jsx)(d.Z,{style:{width:p}})}),(0,e.jsx)(s.Z.Item,{label:o.formatMessage({id:"code.perfBuffers"}),name:"perfBuffers",rules:[{required:!0,message:"Please input eBPF perf buffers!"}],children:(0,e.jsx)(d.Z,{style:{width:p}})}),(0,e.jsx)(s.Z.Item,{wrapperCol:{offset:0,span:15},label:o.formatMessage({id:"code.kprobe"}),required:!0,children:(0,e.jsx)(s.Z.List,{name:"kprobes",initialValue:[{target:null,entry:null,return:null}],children:function(a,t){var _=t.add,f=t.remove;return(0,e.jsxs)(e.Fragment,{children:[a.map(function(i){var h=i.key,u=i.name,n=P()(i,k);return(0,e.jsxs)(x.Z,{style:{display:"flex",marginBottom:8},align:"baseline",children:[(0,e.jsx)(s.Z.Item,l()(l()({},n),{},{name:[u,"target"],rules:[{required:!0,message:"target"}],children:(0,e.jsx)(d.Z,{placeholder:"target"})})),(0,e.jsx)(s.Z.Item,l()(l()({},n),{},{name:[u,"entry"],rules:[{required:!0,message:"entry"}],children:(0,e.jsx)(d.Z,{placeholder:"entry"})})),(0,e.jsx)(s.Z.Item,l()(l()({},n),{},{name:[u,"return"],rules:[{required:!0,message:"return"}],children:(0,e.jsx)(d.Z,{placeholder:"return"})})),a.length>1&&(0,e.jsx)(O.Z,{onClick:function(){return f(u)}})]},h)}),(0,e.jsx)(s.Z.Item,{children:(0,e.jsx)(v.Z,{type:"dashed",onClick:function(){return _()},block:!0,icon:(0,e.jsx)(C.Z,{}),style:{width:p},children:o.formatMessage({id:"code.addKprobe"})})})]})}})}),(0,e.jsx)(s.Z.Item,{name:"wasm",label:o.formatMessage({id:"code.wasm"}),valuePropName:"fileList",getValueFromEvent:N,extra:"WASM byte code(.wasm .wat)",rules:[{required:!0,message:"Please input wasm code!"}],children:(0,e.jsx)(U.Z,{action:"/api/uploadFile",maxCount:1,accept:".wasm,.wat",children:(0,e.jsx)(v.Z,{icon:(0,e.jsx)(K.Z,{}),children:"Click to upload"})})}),(0,e.jsx)(s.Z.Item,{label:o.formatMessage({id:"code.fn"}),name:"fn",rules:[{required:!0,message:"Please input function name!"}],children:(0,e.jsx)(d.Z,{style:{width:p}})}),(0,e.jsx)(s.Z.Item,{wrapperCol:{offset:0,span:15},label:o.formatMessage({id:"code.collector"}),required:!0,children:(0,e.jsx)(s.Z.List,{name:"schemaAttr",initialValue:[{name:null,type:null}],children:function(a,t){var _=t.add,f=t.remove;return(0,e.jsxs)(e.Fragment,{children:[a.map(function(i){var h=i.key,u=i.name,n=P()(i,w);return(0,e.jsxs)(x.Z,{style:{display:"flex",marginBottom:8},align:"baseline",children:[(0,e.jsx)(s.Z.Item,l()(l()({},n),{},{name:[u,"name"],rules:[{required:!0,message:"attibute"}],children:(0,e.jsx)(d.Z,{placeholder:"attibute name"})})),(0,e.jsx)(s.Z.Item,l()(l()({},n),{},{name:[u,"type"],rules:[{required:!0,message:"attibute type"}],children:(0,e.jsxs)(E.Z,{placeholder:"attibute type",style:{width:166},children:[(0,e.jsx)(E.Z.Option,{value:"int",children:"int"}),(0,e.jsx)(E.Z.Option,{value:"text",children:"text"}),(0,e.jsx)(E.Z.Option,{value:"date",children:"date"})]})})),a.length>1&&(0,e.jsx)(O.Z,{onClick:function(){return f(u)}})]},h)}),(0,e.jsx)(s.Z.Item,{children:(0,e.jsx)(v.Z,{type:"dashed",onClick:function(){return _()},block:!0,icon:(0,e.jsx)(C.Z,{}),style:{width:p},children:o.formatMessage({id:"code.addField"})})})]})}})}),(0,e.jsxs)(s.Z.Item,{wrapperCol:{offset:5,span:16},children:[(0,e.jsx)(v.Z,{type:"primary",htmlType:"submit",children:o.formatMessage({id:"button.submit"})}),(0,e.jsx)(v.Z,{type:"primary",onClick:function(){sessionStorage.setItem("codeCache",""),g.setFieldsValue({name:null,code:null,eventSize:null,perfBuffers:null,kprobes:null,fn:null,wasm:null,schemaName:null,schemaAttr:null})},style:{marginLeft:10},children:o.formatMessage({id:"button.clear"})})]})]})})})};y.default=$}}]);