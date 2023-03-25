"use strict";(self.webpackChunktricorder_api_server_ui=self.webpackChunktricorder_api_server_ui||[]).push([[498],{3089:function(rt,Le,f){f.d(Le,{Z:function(){return pe}});var g=f(1413),o=f(67294),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},we=E,fe=f(84089),ne=function($,be){return o.createElement(fe.Z,(0,g.Z)((0,g.Z)({},$),{},{ref:be,icon:we}))};ne.displayName="MinusCircleOutlined";var pe=o.forwardRef(ne)},88484:function(rt,Le,f){f.d(Le,{Z:function(){return pe}});var g=f(1413),o=f(67294),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},we=E,fe=f(84089),ne=function($,be){return o.createElement(fe.Z,(0,g.Z)((0,g.Z)({},$),{},{ref:be,icon:we}))};ne.displayName="UploadOutlined";var pe=o.forwardRef(ne)},2771:function(rt,Le,f){f.d(Le,{Z:function(){return en}});var g=f(87462),o=f(67294),E=f(4942),we=f(74165),fe=f(71002),ne=f(74902),pe=f(97685),He=f(94184),$=f.n(He),be=f(15671),nt=f(43144),at=f(32531),ot=f(73568),Ve=f(91),St=f(15861),Dt=f(64217);function Rt(r,e){var n="cannot ".concat(r.method," ").concat(r.action," ").concat(e.status,"'"),t=new Error(n);return t.status=e.status,t.method=r.method,t.url=r.action,t}function it(r){var e=r.responseText||r.response;if(!e)return e;try{return JSON.parse(e)}catch(n){return e}}function xt(r){var e=new XMLHttpRequest;r.onProgress&&e.upload&&(e.upload.onprogress=function(i){i.total>0&&(i.percent=i.loaded/i.total*100),r.onProgress(i)});var n=new FormData;r.data&&Object.keys(r.data).forEach(function(a){var i=r.data[a];if(Array.isArray(i)){i.forEach(function(l){n.append("".concat(a,"[]"),l)});return}n.append(a,i)}),r.file instanceof Blob?n.append(r.filename,r.file,r.file.name):n.append(r.filename,r.file),e.onerror=function(i){r.onError(i)},e.onload=function(){return e.status<200||e.status>=300?r.onError(Rt(r,e),it(e)):r.onSuccess(it(e),e)},e.open(r.method,r.action,!0),r.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var t=r.headers||{};return t["X-Requested-With"]!==null&&e.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t).forEach(function(a){t[a]!==null&&e.setRequestHeader(a,t[a])}),e.send(n),{abort:function(){e.abort()}}}var Lt=+new Date,Ot=0;function Ge(){return"rc-upload-".concat(Lt,"-").concat(++Ot)}var Ft=f(80334),Ke=function(r,e){if(r&&e){var n=Array.isArray(e)?e:e.split(","),t=r.name||"",a=r.type||"",i=a.replace(/\/.*$/,"");return n.some(function(l){var c=l.trim();if(/^\*(\/\*)?$/.test(l))return!0;if(c.charAt(0)==="."){var s=t.toLowerCase(),u=c.toLowerCase(),d=[u];return(u===".jpg"||u===".jpeg")&&(d=[".jpg",".jpeg"]),d.some(function(v){return s.endsWith(v)})}return/\/\*$/.test(c)?i===c.replace(/\/.*$/,""):a===c?!0:/^\w+$/.test(c)?((0,Ft.ZP)(!1,"Upload takes an invalidate 'accept' type '".concat(c,"'.Skip for check.")),!0):!1})}return!0};function Nt(r,e){var n=r.createReader(),t=[];function a(){n.readEntries(function(i){var l=Array.prototype.slice.apply(i);t=t.concat(l);var c=!l.length;c?e(t):a()})}a()}var Ut=function(e,n,t){var a=function i(l,c){l.path=c||"",l.isFile?l.file(function(s){t(s)&&(l.fullPath&&!s.webkitRelativePath&&(Object.defineProperties(s,{webkitRelativePath:{writable:!0}}),s.webkitRelativePath=l.fullPath.replace(/^\//,""),Object.defineProperties(s,{webkitRelativePath:{writable:!1}})),n([s]))}):l.isDirectory&&Nt(l,function(s){s.forEach(function(u){i(u,"".concat(c).concat(l.name,"/"))})})};e.forEach(function(i){a(i.webkitGetAsEntry())})},Tt=Ut,$t=["component","prefixCls","className","disabled","id","style","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave"],Mt=function(r){(0,at.Z)(n,r);var e=(0,ot.Z)(n);function n(){var t;(0,be.Z)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i)),t.state={uid:Ge()},t.reqs={},t.fileInput=void 0,t._isMounted=void 0,t.onChange=function(c){var s=t.props,u=s.accept,d=s.directory,v=c.target.files,m=(0,ne.Z)(v).filter(function(C){return!d||Ke(C,u)});t.uploadFiles(m),t.reset()},t.onClick=function(c){var s=t.fileInput;if(s){var u=t.props,d=u.children,v=u.onClick;if(d&&d.type==="button"){var m=s.parentNode;m.focus(),m.querySelector("button").blur()}s.click(),v&&v(c)}},t.onKeyDown=function(c){c.key==="Enter"&&t.onClick(c)},t.onFileDrop=function(c){var s=t.props.multiple;if(c.preventDefault(),c.type!=="dragover")if(t.props.directory)Tt(Array.prototype.slice.call(c.dataTransfer.items),t.uploadFiles,function(d){return Ke(d,t.props.accept)});else{var u=(0,ne.Z)(c.dataTransfer.files).filter(function(d){return Ke(d,t.props.accept)});s===!1&&(u=u.slice(0,1)),t.uploadFiles(u)}},t.uploadFiles=function(c){var s=(0,ne.Z)(c),u=s.map(function(d){return d.uid=Ge(),t.processFile(d,s)});Promise.all(u).then(function(d){var v=t.props.onBatchStart;v==null||v(d.map(function(m){var C=m.origin,h=m.parsedFile;return{file:C,parsedFile:h}})),d.filter(function(m){return m.parsedFile!==null}).forEach(function(m){t.post(m)})})},t.processFile=function(){var c=(0,St.Z)((0,we.Z)().mark(function s(u,d){var v,m,C,h,S,Z,P,I,D;return(0,we.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(v=t.props.beforeUpload,m=u,!v){p.next=14;break}return p.prev=3,p.next=6,v(u,d);case 6:m=p.sent,p.next=12;break;case 9:p.prev=9,p.t0=p.catch(3),m=!1;case 12:if(m!==!1){p.next=14;break}return p.abrupt("return",{origin:u,parsedFile:null,action:null,data:null});case 14:if(C=t.props.action,typeof C!="function"){p.next=21;break}return p.next=18,C(u);case 18:h=p.sent,p.next=22;break;case 21:h=C;case 22:if(S=t.props.data,typeof S!="function"){p.next=29;break}return p.next=26,S(u);case 26:Z=p.sent,p.next=30;break;case 29:Z=S;case 30:return P=((0,fe.Z)(m)==="object"||typeof m=="string")&&m?m:u,P instanceof File?I=P:I=new File([P],u.name,{type:u.type}),D=I,D.uid=u.uid,p.abrupt("return",{origin:u,data:Z,parsedFile:D,action:h});case 35:case"end":return p.stop()}},s,null,[[3,9]])}));return function(s,u){return c.apply(this,arguments)}}(),t.saveFileInput=function(c){t.fileInput=c},t}return(0,nt.Z)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(a){var i=this,l=a.data,c=a.origin,s=a.action,u=a.parsedFile;if(this._isMounted){var d=this.props,v=d.onStart,m=d.customRequest,C=d.name,h=d.headers,S=d.withCredentials,Z=d.method,P=c.uid,I=m||xt,D={action:s,filename:C,data:l,file:u,headers:h,withCredentials:S,method:Z||"post",onProgress:function(p){var y=i.props.onProgress;y==null||y(p,u)},onSuccess:function(p,y){var R=i.props.onSuccess;R==null||R(p,u,y),delete i.reqs[P]},onError:function(p,y){var R=i.props.onError;R==null||R(p,y,u),delete i.reqs[P]}};v(c),this.reqs[P]=I(D)}}},{key:"reset",value:function(){this.setState({uid:Ge()})}},{key:"abort",value:function(a){var i=this.reqs;if(a){var l=a.uid?a.uid:a;i[l]&&i[l].abort&&i[l].abort(),delete i[l]}else Object.keys(i).forEach(function(c){i[c]&&i[c].abort&&i[c].abort(),delete i[c]})}},{key:"render",value:function(){var a,i=this.props,l=i.component,c=i.prefixCls,s=i.className,u=i.disabled,d=i.id,v=i.style,m=i.multiple,C=i.accept,h=i.capture,S=i.children,Z=i.directory,P=i.openFileDialogOnClick,I=i.onMouseEnter,D=i.onMouseLeave,x=(0,Ve.Z)(i,$t),p=$()((a={},(0,E.Z)(a,c,!0),(0,E.Z)(a,"".concat(c,"-disabled"),u),(0,E.Z)(a,s,s),a)),y=Z?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},R=u?{}:{onClick:P?this.onClick:function(){},onKeyDown:P?this.onKeyDown:function(){},onMouseEnter:I,onMouseLeave:D,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:"0"};return o.createElement(l,(0,g.Z)({},R,{className:p,role:"button",style:v}),o.createElement("input",(0,g.Z)({},(0,Dt.Z)(x,{aria:!0,data:!0}),{id:d,type:"file",ref:this.saveFileInput,onClick:function(z){return z.stopPropagation()},key:this.state.uid,style:{display:"none"},accept:C},y,{multiple:m,onChange:this.onChange},h!=null?{capture:h}:{})),S)}}]),n}(o.Component),At=Mt;function Xe(){}var st=function(r){(0,at.Z)(n,r);var e=(0,ot.Z)(n);function n(){var t;(0,be.Z)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i)),t.uploader=void 0,t.saveUploader=function(c){t.uploader=c},t}return(0,nt.Z)(n,[{key:"abort",value:function(a){this.uploader.abort(a)}},{key:"render",value:function(){return o.createElement(At,(0,g.Z)({},this.props,{ref:this.saveUploader}))}}]),n}(o.Component);st.defaultProps={component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:Xe,onError:Xe,onSuccess:Xe,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0};var jt=st,ct=jt,zt=f(21770),Wt=f(72834),$e=f(53124),Bt=f(98866),Ht=f(23715),Vt=f(6213),me=f(1413),Gt={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",fill:n}},{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",fill:e}}]}},name:"file",theme:"twotone"},Kt=Gt,Oe=f(84089),lt=function(e,n){return o.createElement(Oe.Z,(0,me.Z)((0,me.Z)({},e),{},{ref:n,icon:Kt}))};lt.displayName="FileTwoTone";var Xt=o.forwardRef(lt),ut=f(50888),Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},Yt=Jt,dt=function(e,n){return o.createElement(Oe.Z,(0,me.Z)((0,me.Z)({},e),{},{ref:n,icon:Yt}))};dt.displayName="PaperClipOutlined";var Qt=o.forwardRef(dt),qt={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",fill:e}},{tag:"path",attrs:{d:"M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",fill:n}},{tag:"path",attrs:{d:"M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",fill:n}},{tag:"path",attrs:{d:"M276 368a28 28 0 1056 0 28 28 0 10-56 0z",fill:n}},{tag:"path",attrs:{d:"M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",fill:e}}]}},name:"picture",theme:"twotone"},_t=qt,vt=function(e,n){return o.createElement(Oe.Z,(0,me.Z)((0,me.Z)({},e),{},{ref:n,icon:_t}))};vt.displayName="PictureTwoTone";var er=o.forwardRef(vt),Je=f(62874),ft=f(71577),tr=f(57838),rr=f(33603),Me=f(96159);function Ae(r){return(0,g.Z)((0,g.Z)({},r),{lastModified:r.lastModified,lastModifiedDate:r.lastModifiedDate,name:r.name,size:r.size,type:r.type,uid:r.uid,percent:0,originFileObj:r})}function je(r,e){var n=(0,ne.Z)(e),t=n.findIndex(function(a){var i=a.uid;return i===r.uid});return t===-1?n.push(r):n[t]=r,n}function Ye(r,e){var n=r.uid!==void 0?"uid":"name";return e.filter(function(t){return t[n]===r[n]})[0]}function nr(r,e){var n=r.uid!==void 0?"uid":"name",t=e.filter(function(a){return a[n]!==r[n]});return t.length===e.length?null:t}var ar=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=e.split("/"),t=n[n.length-1],a=t.split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(a)||[""])[0]},pt=function(e){return e.indexOf("image/")===0},or=function(e){if(e.type&&!e.thumbUrl)return pt(e.type);var n=e.thumbUrl||e.url||"",t=ar(n);return/^data:image\//.test(n)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(t)?!0:!(/^data:/.test(n)||t)},ke=200;function ir(r){return new Promise(function(e){if(!r.type||!pt(r.type)){e("");return}var n=document.createElement("canvas");n.width=ke,n.height=ke,n.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(ke,"px; height: ").concat(ke,"px; z-index: 9999; display: none;"),document.body.appendChild(n);var t=n.getContext("2d"),a=new Image;if(a.onload=function(){var l=a.width,c=a.height,s=ke,u=ke,d=0,v=0;l>c?(u=c*(ke/l),v=-(u-s)/2):(s=l*(ke/c),d=-(s-u)/2),t.drawImage(a,d,v,s,u);var m=n.toDataURL();document.body.removeChild(n),e(m)},a.crossOrigin="anonymous",r.type.startsWith("image/svg+xml")){var i=new FileReader;i.addEventListener("load",function(){i.result&&(a.src=i.result)}),i.readAsDataURL(r)}else a.src=window.URL.createObjectURL(r)})}var sr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},cr=sr,mt=function(e,n){return o.createElement(Oe.Z,(0,me.Z)((0,me.Z)({},e),{},{ref:n,icon:cr}))};mt.displayName="DeleteOutlined";var lr=o.forwardRef(mt),ur={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},dr=ur,ht=function(e,n){return o.createElement(Oe.Z,(0,me.Z)((0,me.Z)({},e),{},{ref:n,icon:dr}))};ht.displayName="DownloadOutlined";var vr=o.forwardRef(ht),fr=f(99611),pr=f(89739),mr=f(63606),hr=f(4340),gr=f(97937),yr=f(98423),gt=f(93355),Qe=f(92138),yt={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},Ct=function(){var e=(0,o.useRef)([]),n=(0,o.useRef)(null);return(0,o.useEffect)(function(){var t=Date.now(),a=!1;e.current.forEach(function(i){if(i){a=!0;var l=i.style;l.transitionDuration=".3s, .3s, .3s, .06s",n.current&&t-n.current<100&&(l.transitionDuration="0s, 0s")}}),a&&(n.current=Date.now())}),e.current},Cr=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],qe=function(e){var n=e.className,t=e.percent,a=e.prefixCls,i=e.strokeColor,l=e.strokeLinecap,c=e.strokeWidth,s=e.style,u=e.trailColor,d=e.trailWidth,v=e.transition,m=(0,Ve.Z)(e,Cr);delete m.gapPosition;var C=Array.isArray(t)?t:[t],h=Array.isArray(i)?i:[i],S=Ct(),Z=c/2,P=100-c/2,I="M ".concat(l==="round"?Z:0,",").concat(Z,`
         L `).concat(l==="round"?P:100,",").concat(Z),D="0 0 100 ".concat(c),x=0;return o.createElement("svg",(0,g.Z)({className:$()("".concat(a,"-line"),n),viewBox:D,preserveAspectRatio:"none",style:s},m),o.createElement("path",{className:"".concat(a,"-line-trail"),d:I,strokeLinecap:l,stroke:u,strokeWidth:d||c,fillOpacity:"0"}),C.map(function(p,y){var R=1;switch(l){case"round":R=1-c/100;break;case"square":R=1-c/2/100;break;default:R=1;break}var j={strokeDasharray:"".concat(p*R,"px, 100px"),strokeDashoffset:"-".concat(x,"px"),transition:v||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},z=h[y]||h[h.length-1];return x+=p,o.createElement("path",{key:y,className:"".concat(a,"-line-path"),d:I,strokeLinecap:l,stroke:z,strokeWidth:c,fillOpacity:"0",ref:function(X){S[y]=X},style:j})}))};qe.defaultProps=yt,qe.displayName="Line";var wr=qe,kr=f(98924),wt=0,Zr=(0,kr.Z)();function Er(){var r;return Zr?(r=wt,wt+=1):r="TEST_OR_SSR",r}var Pr=function(r){var e=o.useState(),n=(0,pe.Z)(e,2),t=n[0],a=n[1];return o.useEffect(function(){a("rc_progress_".concat(Er()))},[]),r||t},br=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function kt(r){return+r.replace("%","")}function Zt(r){var e=r!=null?r:[];return Array.isArray(e)?e:[e]}var Fe=100,_e=function(e,n,t,a,i,l,c,s,u,d){var v=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,m=t/100*360*((360-l)/360),C=l===0?0:{bottom:0,top:180,left:90,right:-90}[c],h=(100-a)/100*n;return u==="round"&&a!==100&&(h+=d/2,h>=n&&(h=n-.01)),{stroke:typeof s=="string"?s:void 0,strokeDasharray:"".concat(n,"px ").concat(e),strokeDashoffset:h+v,transform:"rotate(".concat(i+m+C,"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},et=function(e){var n=e.id,t=e.prefixCls,a=e.steps,i=e.strokeWidth,l=e.trailWidth,c=e.gapDegree,s=c===void 0?0:c,u=e.gapPosition,d=e.trailColor,v=e.strokeLinecap,m=e.style,C=e.className,h=e.strokeColor,S=e.percent,Z=(0,Ve.Z)(e,br),P=Pr(n),I="".concat(P,"-gradient"),D=Fe/2-i/2,x=Math.PI*2*D,p=s>0?90+s/2:-90,y=x*((360-s)/360),R=(0,fe.Z)(a)==="object"?a:{count:a,space:2},j=R.count,z=R.space,ae=_e(x,y,0,100,p,s,u,d,v,i),X=Zt(S),V=Zt(h),L=V.find(function(T){return T&&(0,fe.Z)(T)==="object"}),Q=Ct(),de=function(){var G=0;return X.map(function(B,q){var oe=V[q]||V[V.length-1],_=oe&&(0,fe.Z)(oe)==="object"?"url(#".concat(I,")"):void 0,J=_e(x,y,G,B,p,s,u,oe,v,i);return G+=B,o.createElement("circle",{key:q,className:"".concat(t,"-circle-path"),r:D,cx:0,cy:0,stroke:_,strokeLinecap:v,strokeWidth:i,opacity:B===0?0:1,style:J,ref:function(ie){Q[q]=ie}})}).reverse()},he=function(){var G=Math.round(j*(X[0]/100)),B=100/j,q=0;return new Array(j).fill(null).map(function(oe,_){var J=_<=G-1?V[0]:d,se=J&&(0,fe.Z)(J)==="object"?"url(#".concat(I,")"):void 0,ie=_e(x,y,q,B,p,s,u,J,"butt",i,z);return q+=(y-ie.strokeDashoffset+z)*100/y,o.createElement("circle",{key:_,className:"".concat(t,"-circle-path"),r:D,cx:0,cy:0,stroke:se,strokeWidth:i,opacity:1,style:ie,ref:function(M){Q[_]=M}})})};return o.createElement("svg",(0,g.Z)({className:$()("".concat(t,"-circle"),C),viewBox:"".concat(-Fe/2," ").concat(-Fe/2," ").concat(Fe," ").concat(Fe),style:m,id:n,role:"presentation"},Z),L&&o.createElement("defs",null,o.createElement("linearGradient",{id:I,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(L).sort(function(T,G){return kt(T)-kt(G)}).map(function(T,G){return o.createElement("stop",{key:G,offset:T,stopColor:L[T]})}))),!j&&o.createElement("circle",{className:"".concat(t,"-circle-trail"),r:D,cx:0,cy:0,stroke:d,strokeLinecap:v,strokeWidth:l||i,style:ae}),j?he():de())};et.defaultProps=yt,et.displayName="Circle";var Et=et,an={Line:wr,Circle:Et};function Ze(r){return!r||r<0?0:r>100?100:r}function ze(r){var e=r.success,n=r.successPercent,t=n;return e&&"progress"in e&&(t=e.progress),e&&"percent"in e&&(t=e.percent),t}function Ir(r){var e=r.percent,n=r.success,t=r.successPercent,a=Ze(ze({success:n,successPercent:t}));return[a,Ze(Ze(e)-a)]}function Sr(r){var e=r.success,n=e===void 0?{}:e,t=r.strokeColor,a=n.strokeColor;return[a||Qe.presetPrimaryColors.green,t||null]}var Dr=function(e){var n=e.prefixCls,t=e.width,a=e.strokeWidth,i=e.trailColor,l=i===void 0?null:i,c=e.strokeLinecap,s=c===void 0?"round":c,u=e.gapPosition,d=e.gapDegree,v=e.type,m=e.children,C=e.success,h=t||120,S={width:h,height:h,fontSize:h*.15+6},Z=a||6,P=u||v==="dashboard"&&"bottom"||void 0,I=function(){if(d||d===0)return d;if(v==="dashboard")return 75},D=Object.prototype.toString.call(e.strokeColor)==="[object Object]",x=Sr({success:C,strokeColor:e.strokeColor}),p=$()("".concat(n,"-inner"),(0,E.Z)({},"".concat(n,"-circle-gradient"),D));return o.createElement("div",{className:p,style:S},o.createElement(Et,{percent:Ir(e),strokeWidth:Z,trailWidth:Z,strokeColor:x,strokeLinecap:s,trailColor:l,prefixCls:n,gapDegree:I(),gapPosition:P}),m)},Rr=Dr,xr=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(n[t[a]]=r[t[a]]);return n},Lr=function(e){var n=[];return Object.keys(e).forEach(function(t){var a=parseFloat(t.replace(/%/g,""));isNaN(a)||n.push({key:a,value:e[t]})}),n=n.sort(function(t,a){return t.key-a.key}),n.map(function(t){var a=t.key,i=t.value;return"".concat(i," ").concat(a,"%")}).join(", ")},Or=function(e,n){var t=e.from,a=t===void 0?Qe.presetPrimaryColors.blue:t,i=e.to,l=i===void 0?Qe.presetPrimaryColors.blue:i,c=e.direction,s=c===void 0?n==="rtl"?"to left":"to right":c,u=xr(e,["from","to","direction"]);if(Object.keys(u).length!==0){var d=Lr(u);return{backgroundImage:"linear-gradient(".concat(s,", ").concat(d,")")}}return{backgroundImage:"linear-gradient(".concat(s,", ").concat(a,", ").concat(l,")")}},Fr=function(e){var n=e.prefixCls,t=e.direction,a=e.percent,i=e.strokeWidth,l=e.size,c=e.strokeColor,s=e.strokeLinecap,u=s===void 0?"round":s,d=e.children,v=e.trailColor,m=v===void 0?null:v,C=e.success,h=c&&typeof c!="string"?Or(c,t):{background:c},S=u==="square"||u==="butt"?0:void 0,Z={backgroundColor:m||void 0,borderRadius:S},P=(0,g.Z)({width:"".concat(Ze(a),"%"),height:i||(l==="small"?6:8),borderRadius:S},h),I=ze(e),D={width:"".concat(Ze(I),"%"),height:i||(l==="small"?6:8),borderRadius:S,backgroundColor:C==null?void 0:C.strokeColor},x=I!==void 0?o.createElement("div",{className:"".concat(n,"-success-bg"),style:D}):null;return o.createElement(o.Fragment,null,o.createElement("div",{className:"".concat(n,"-outer")},o.createElement("div",{className:"".concat(n,"-inner"),style:Z},o.createElement("div",{className:"".concat(n,"-bg"),style:P}),x)),d)},Nr=Fr,Ur=function(e){for(var n=e.size,t=e.steps,a=e.percent,i=a===void 0?0:a,l=e.strokeWidth,c=l===void 0?8:l,s=e.strokeColor,u=e.trailColor,d=u===void 0?null:u,v=e.prefixCls,m=e.children,C=Math.round(t*(i/100)),h=n==="small"?2:14,S=new Array(t),Z=0;Z<t;Z++){var P=Array.isArray(s)?s[Z]:s;S[Z]=o.createElement("div",{key:Z,className:$()("".concat(v,"-steps-item"),(0,E.Z)({},"".concat(v,"-steps-item-active"),Z<=C-1)),style:{backgroundColor:Z<=C-1?P:d,width:h,height:c}})}return o.createElement("div",{className:"".concat(v,"-steps-outer")},S,m)},Tr=Ur,$r=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(n[t[a]]=r[t[a]]);return n},on=(0,gt.b)("line","circle","dashboard"),Mr=(0,gt.b)("normal","exception","active","success"),Ar=function(e){var n,t=e.prefixCls,a=e.className,i=e.steps,l=e.strokeColor,c=e.percent,s=c===void 0?0:c,u=e.size,d=u===void 0?"default":u,v=e.showInfo,m=v===void 0?!0:v,C=e.type,h=C===void 0?"line":C,S=$r(e,["prefixCls","className","steps","strokeColor","percent","size","showInfo","type"]);function Z(){var L=ze(e);return parseInt(L!==void 0?L.toString():s.toString(),10)}function P(){var L=e.status;return!Mr.includes(L)&&Z()>=100?"success":L||"normal"}function I(L,Q){var de=e.format,he=ze(e);if(!m)return null;var T,G=de||function(q){return"".concat(q,"%")},B=h==="line";return de||Q!=="exception"&&Q!=="success"?T=G(Ze(s),Ze(he)):Q==="exception"?T=B?o.createElement(hr.Z,null):o.createElement(gr.Z,null):Q==="success"&&(T=B?o.createElement(pr.Z,null):o.createElement(mr.Z,null)),o.createElement("span",{className:"".concat(L,"-text"),title:typeof T=="string"?T:void 0},T)}var D=o.useContext($e.E_),x=D.getPrefixCls,p=D.direction,y=x("progress",t),R=P(),j=I(y,R),z=Array.isArray(l)?l[0]:l,ae=typeof l=="string"||Array.isArray(l)?l:void 0,X;h==="line"?X=i?o.createElement(Tr,(0,g.Z)({},e,{strokeColor:ae,prefixCls:y,steps:i}),j):o.createElement(Nr,(0,g.Z)({},e,{strokeColor:z,prefixCls:y,direction:p}),j):(h==="circle"||h==="dashboard")&&(X=o.createElement(Rr,(0,g.Z)({},e,{strokeColor:z,prefixCls:y,progressStatus:R}),j));var V=$()(y,(n={},(0,E.Z)(n,"".concat(y,"-").concat(h==="dashboard"&&"circle"||i&&"steps"||h),!0),(0,E.Z)(n,"".concat(y,"-status-").concat(R),!0),(0,E.Z)(n,"".concat(y,"-show-info"),m),(0,E.Z)(n,"".concat(y,"-").concat(d),d),(0,E.Z)(n,"".concat(y,"-rtl"),p==="rtl"),n),a);return o.createElement("div",(0,g.Z)({},(0,yr.Z)(S,["status","format","trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"]),{className:V,role:"progressbar"}),X)},jr=Ar,zr=jr,Wr=f(77939),Br=o.forwardRef(function(r,e){var n,t=r.prefixCls,a=r.className,i=r.style,l=r.locale,c=r.listType,s=r.file,u=r.items,d=r.progress,v=r.iconRender,m=r.actionIconRender,C=r.itemRender,h=r.isImgUrl,S=r.showPreviewIcon,Z=r.showRemoveIcon,P=r.showDownloadIcon,I=r.previewIcon,D=r.removeIcon,x=r.downloadIcon,p=r.onPreview,y=r.onDownload,R=r.onClose,j,z,ae=s.status,X=o.useState(ae),V=(0,pe.Z)(X,2),L=V[0],Q=V[1];o.useEffect(function(){ae!=="removed"&&Q(ae)},[ae]);var de=o.useState(!1),he=(0,pe.Z)(de,2),T=he[0],G=he[1],B=o.useRef(null);o.useEffect(function(){return B.current=setTimeout(function(){G(!0)},300),function(){B.current&&clearTimeout(B.current)}},[]);var q="".concat(t,"-span"),oe=v(s),_=o.createElement("div",{className:"".concat(t,"-text-icon")},oe);if(c==="picture"||c==="picture-card")if(L==="uploading"||!s.thumbUrl&&!s.url){var J,se=$()((J={},(0,E.Z)(J,"".concat(t,"-list-item-thumbnail"),!0),(0,E.Z)(J,"".concat(t,"-list-item-file"),L!=="uploading"),J));_=o.createElement("div",{className:se},oe)}else{var ie,Ee=h!=null&&h(s)?o.createElement("img",{src:s.thumbUrl||s.url,alt:s.name,className:"".concat(t,"-list-item-image"),crossOrigin:s.crossOrigin}):oe,M=$()((ie={},(0,E.Z)(ie,"".concat(t,"-list-item-thumbnail"),!0),(0,E.Z)(ie,"".concat(t,"-list-item-file"),h&&!h(s)),ie));_=o.createElement("a",{className:M,onClick:function(Y){return p(s,Y)},href:s.url||s.thumbUrl,target:"_blank",rel:"noopener noreferrer"},Ee)}var Ue=$()((n={},(0,E.Z)(n,"".concat(t,"-list-item"),!0),(0,E.Z)(n,"".concat(t,"-list-item-").concat(L),!0),(0,E.Z)(n,"".concat(t,"-list-item-list-type-").concat(c),!0),n)),Te=typeof s.linkProps=="string"?JSON.parse(s.linkProps):s.linkProps,ve=Z?m((typeof D=="function"?D(s):D)||o.createElement(lr,null),function(){return R(s)},t,l.removeFile):null,Ie=P&&L==="done"?m((typeof x=="function"?x(s):x)||o.createElement(vr,null),function(){return y(s)},t,l.downloadFile):null,Se=c!=="picture-card"&&o.createElement("span",{key:"download-delete",className:$()("".concat(t,"-list-item-card-actions"),{picture:c==="picture"})},Ie,ve),ge=$()("".concat(t,"-list-item-name")),ce=s.url?[o.createElement("a",(0,g.Z)({key:"view",target:"_blank",rel:"noopener noreferrer",className:ge,title:s.name},Te,{href:s.url,onClick:function(Y){return p(s,Y)}}),s.name),Se]:[o.createElement("span",{key:"view",className:ge,onClick:function(Y){return p(s,Y)},title:s.name},s.name),Se],O={pointerEvents:"none",opacity:.5},b=S?o.createElement("a",{href:s.url||s.thumbUrl,target:"_blank",rel:"noopener noreferrer",style:s.url||s.thumbUrl?void 0:O,onClick:function(Y){return p(s,Y)},title:l.previewFile},typeof I=="function"?I(s):I||o.createElement(fr.Z,null)):null,H=c==="picture-card"&&L!=="uploading"&&o.createElement("span",{className:"".concat(t,"-list-item-actions")},b,L==="done"&&Ie,ve),K;s.response&&typeof s.response=="string"?K=s.response:K=((j=s.error)===null||j===void 0?void 0:j.statusText)||((z=s.error)===null||z===void 0?void 0:z.message)||l.uploadError;var le=o.createElement("span",{className:q},_,ce),De=o.useContext($e.E_),Pe=De.getPrefixCls,Re=Pe(),xe=o.createElement("div",{className:Ue},o.createElement("div",{className:"".concat(t,"-list-item-info")},le),H,T&&o.createElement(Je.Z,{motionName:"".concat(Re,"-fade"),visible:L==="uploading",motionDeadline:2e3},function(ue){var Y=ue.className,ye="percent"in s?o.createElement(zr,(0,g.Z)({},d,{type:"line",percent:s.percent})):null;return o.createElement("div",{className:$()("".concat(t,"-list-item-progress"),Y)},ye)})),Be=$()("".concat(t,"-list-").concat(c,"-container"),a),W=L==="error"?o.createElement(Wr.Z,{title:K,getPopupContainer:function(Y){return Y.parentNode}},xe):xe;return o.createElement("div",{className:Be,style:i,ref:e},C?C(W,s,u,{download:y.bind(null,s),preview:p.bind(null,s),remove:R.bind(null,s)}):W)}),Hr=Br,We=(0,g.Z)({},rr.ZP);delete We.onAppearEnd,delete We.onEnterEnd,delete We.onLeaveEnd;var Vr=function(e,n){var t,a=e.listType,i=a===void 0?"text":a,l=e.previewFile,c=l===void 0?ir:l,s=e.onPreview,u=e.onDownload,d=e.onRemove,v=e.locale,m=e.iconRender,C=e.isImageUrl,h=C===void 0?or:C,S=e.prefixCls,Z=e.items,P=Z===void 0?[]:Z,I=e.showPreviewIcon,D=I===void 0?!0:I,x=e.showRemoveIcon,p=x===void 0?!0:x,y=e.showDownloadIcon,R=y===void 0?!1:y,j=e.removeIcon,z=e.previewIcon,ae=e.downloadIcon,X=e.progress,V=X===void 0?{strokeWidth:2,showInfo:!1}:X,L=e.appendAction,Q=e.appendActionVisible,de=Q===void 0?!0:Q,he=e.itemRender,T=(0,tr.Z)(),G=o.useState(!1),B=(0,pe.Z)(G,2),q=B[0],oe=B[1];o.useEffect(function(){i!=="picture"&&i!=="picture-card"||(P||[]).forEach(function(O){typeof document=="undefined"||typeof window=="undefined"||!window.FileReader||!window.File||!(O.originFileObj instanceof File||O.originFileObj instanceof Blob)||O.thumbUrl!==void 0||(O.thumbUrl="",c&&c(O.originFileObj).then(function(b){O.thumbUrl=b||"",T()}))})},[i,P,c]),o.useEffect(function(){oe(!0)},[]);var _=function(b,H){if(s)return H==null||H.preventDefault(),s(b)},J=function(b){typeof u=="function"?u(b):b.url&&window.open(b.url)},se=function(b){d==null||d(b)},ie=function(b){if(m)return m(b,i);var H=b.status==="uploading",K=h&&h(b)?o.createElement(er,null):o.createElement(Xt,null),le=H?o.createElement(ut.Z,null):o.createElement(Qt,null);return i==="picture"?le=H?o.createElement(ut.Z,null):K:i==="picture-card"&&(le=H?v.uploading:K),le},Ee=function(b,H,K,le){var De={type:"text",size:"small",title:le,onClick:function(xe){H(),(0,Me.l$)(b)&&b.props.onClick&&b.props.onClick(xe)},className:"".concat(K,"-list-item-card-actions-btn")};if((0,Me.l$)(b)){var Pe=(0,Me.Tm)(b,(0,g.Z)((0,g.Z)({},b.props),{onClick:function(){}}));return o.createElement(ft.Z,(0,g.Z)({},De,{icon:Pe}))}return o.createElement(ft.Z,(0,g.Z)({},De),o.createElement("span",null,b))};o.useImperativeHandle(n,function(){return{handlePreview:_,handleDownload:J}});var M=o.useContext($e.E_),Ue=M.getPrefixCls,Te=M.direction,ve=Ue("upload",S),Ie=$()((t={},(0,E.Z)(t,"".concat(ve,"-list"),!0),(0,E.Z)(t,"".concat(ve,"-list-").concat(i),!0),(0,E.Z)(t,"".concat(ve,"-list-rtl"),Te==="rtl"),t)),Se=(0,ne.Z)(P.map(function(O){return{key:O.uid,file:O}})),ge=i==="picture-card"?"animate-inline":"animate",ce={motionDeadline:2e3,motionName:"".concat(ve,"-").concat(ge),keys:Se,motionAppear:q};return i!=="picture-card"&&(ce=(0,g.Z)((0,g.Z)({},We),ce)),o.createElement("div",{className:Ie},o.createElement(Je.V,(0,g.Z)({},ce,{component:!1}),function(O){var b=O.key,H=O.file,K=O.className,le=O.style;return o.createElement(Hr,{key:b,locale:v,prefixCls:ve,className:K,style:le,file:H,items:P,progress:V,listType:i,isImgUrl:h,showPreviewIcon:D,showRemoveIcon:p,showDownloadIcon:R,removeIcon:j,previewIcon:z,downloadIcon:ae,iconRender:ie,actionIconRender:Ee,itemRender:he,onPreview:_,onDownload:J,onClose:se})}),L&&o.createElement(Je.Z,(0,g.Z)({},ce,{visible:de,forceRender:!0}),function(O){var b=O.className,H=O.style;return(0,Me.Tm)(L,function(K){return{className:$()(K.className,b),style:(0,g.Z)((0,g.Z)((0,g.Z)({},H),{pointerEvents:b?"none":void 0}),K.style)}})}))},Gr=o.forwardRef(Vr),Kr=Gr,Xr=function(r,e,n,t){function a(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function c(d){try{u(t.next(d))}catch(v){l(v)}}function s(d){try{u(t.throw(d))}catch(v){l(v)}}function u(d){d.done?i(d.value):a(d.value).then(c,s)}u((t=t.apply(r,e||[])).next())})},Ne="__LIST_IGNORE_".concat(Date.now(),"__"),Jr=function(e,n){var t,a=e.fileList,i=e.defaultFileList,l=e.onRemove,c=e.showUploadList,s=c===void 0?!0:c,u=e.listType,d=u===void 0?"text":u,v=e.onPreview,m=e.onDownload,C=e.onChange,h=e.onDrop,S=e.previewFile,Z=e.disabled,P=e.locale,I=e.iconRender,D=e.isImageUrl,x=e.progress,p=e.prefixCls,y=e.className,R=e.type,j=R===void 0?"select":R,z=e.children,ae=e.style,X=e.itemRender,V=e.maxCount,L=e.data,Q=L===void 0?{}:L,de=e.multiple,he=de===void 0?!1:de,T=e.action,G=T===void 0?"":T,B=e.accept,q=B===void 0?"":B,oe=e.supportServerRender,_=oe===void 0?!0:oe,J=o.useContext(Bt.Z),se=Z!=null?Z:J,ie=(0,zt.Z)(i||[],{value:a,postState:function(k){return k!=null?k:[]}}),Ee=(0,pe.Z)(ie,2),M=Ee[0],Ue=Ee[1],Te=o.useState("drop"),ve=(0,pe.Z)(Te,2),Ie=ve[0],Se=ve[1],ge=o.useRef(null);o.useMemo(function(){var ee=Date.now();(a||[]).forEach(function(k,N){!k.uid&&!Object.isFrozen(k)&&(k.uid="__AUTO__".concat(ee,"_").concat(N,"__"))})},[a]);var ce=function(k,N,A){var w=(0,ne.Z)(N);V===1?w=w.slice(-1):V&&(w=w.slice(0,V)),(0,Wt.flushSync)(function(){Ue(w)});var F={file:k,fileList:w};A&&(F.event=A),C==null||C(F)},O=function(k,N){return Xr(void 0,void 0,void 0,(0,we.Z)().mark(function A(){var w,F,te,re;return(0,we.Z)().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(w=e.beforeUpload,F=e.transformFile,te=k,!w){U.next=13;break}return U.next=5,w(k,N);case 5:if(re=U.sent,re!==!1){U.next=8;break}return U.abrupt("return",!1);case 8:if(delete k[Ne],re!==Ne){U.next=12;break}return Object.defineProperty(k,Ne,{value:!0,configurable:!0}),U.abrupt("return",!1);case 12:(0,fe.Z)(re)==="object"&&re&&(te=re);case 13:if(!F){U.next=17;break}return U.next=16,F(te);case 16:te=U.sent;case 17:return U.abrupt("return",te);case 18:case"end":return U.stop()}},A)}))},b=function(k){var N=k.filter(function(F){return!F.file[Ne]});if(N.length){var A=N.map(function(F){return Ae(F.file)}),w=(0,ne.Z)(M);A.forEach(function(F){w=je(F,w)}),A.forEach(function(F,te){var re=F;if(N[te].parsedFile)F.status="uploading";else{var Ce=F.originFileObj,U;try{U=new File([Ce],Ce.name,{type:Ce.type})}catch(It){U=new Blob([Ce],{type:Ce.type}),U.name=Ce.name,U.lastModifiedDate=new Date,U.lastModified=new Date().getTime()}U.uid=F.uid,re=U}ce(re,w)})}},H=function(k,N,A){try{typeof k=="string"&&(k=JSON.parse(k))}catch(te){}if(Ye(N,M)){var w=Ae(N);w.status="done",w.percent=100,w.response=k,w.xhr=A;var F=je(w,M);ce(w,F)}},K=function(k,N){if(Ye(N,M)){var A=Ae(N);A.status="uploading",A.percent=k.percent;var w=je(A,M);ce(A,w,k)}},le=function(k,N,A){if(Ye(A,M)){var w=Ae(A);w.error=k,w.response=N,w.status="error";var F=je(w,M);ce(w,F)}},De=function(k){var N;Promise.resolve(typeof l=="function"?l(k):l).then(function(A){var w;if(A!==!1){var F=nr(k,M);F&&(N=(0,g.Z)((0,g.Z)({},k),{status:"removed"}),M==null||M.forEach(function(te){var re=N.uid!==void 0?"uid":"name";te[re]===N[re]&&!Object.isFrozen(te)&&(te.status="removed")}),(w=ge.current)===null||w===void 0||w.abort(N),ce(N,F))}})},Pe=function(k){Se(k.type),k.type==="drop"&&(h==null||h(k))};o.useImperativeHandle(n,function(){return{onBatchStart:b,onSuccess:H,onProgress:K,onError:le,fileList:M,upload:ge.current}});var Re=o.useContext($e.E_),xe=Re.getPrefixCls,Be=Re.direction,W=xe("upload",p),ue=(0,g.Z)((0,g.Z)({onBatchStart:b,onError:le,onProgress:K,onSuccess:H},e),{data:Q,multiple:he,action:G,accept:q,supportServerRender:_,prefixCls:W,disabled:se,beforeUpload:O,onChange:void 0});delete ue.className,delete ue.style,(!z||se)&&delete ue.id;var Y=function(k,N){return s?o.createElement(Ht.Z,{componentName:"Upload",defaultLocale:Vt.Z.Upload},function(A){var w=typeof s=="boolean"?{}:s,F=w.showRemoveIcon,te=w.showPreviewIcon,re=w.showDownloadIcon,Ce=w.removeIcon,U=w.previewIcon,It=w.downloadIcon;return o.createElement(Kr,{prefixCls:W,listType:d,items:M,previewFile:S,onPreview:v,onDownload:m,onRemove:De,showRemoveIcon:!se&&F,showPreviewIcon:te,showDownloadIcon:re,removeIcon:Ce,previewIcon:U,downloadIcon:It,iconRender:I,locale:(0,g.Z)((0,g.Z)({},A),P),isImageUrl:D,progress:x,appendAction:k,appendActionVisible:N,itemRender:X})}):k};if(j==="drag"){var ye,tn=$()(W,(ye={},(0,E.Z)(ye,"".concat(W,"-drag"),!0),(0,E.Z)(ye,"".concat(W,"-drag-uploading"),M.some(function(ee){return ee.status==="uploading"})),(0,E.Z)(ye,"".concat(W,"-drag-hover"),Ie==="dragover"),(0,E.Z)(ye,"".concat(W,"-disabled"),se),(0,E.Z)(ye,"".concat(W,"-rtl"),Be==="rtl"),ye),y);return o.createElement("span",null,o.createElement("div",{className:tn,onDrop:Pe,onDragOver:Pe,onDragLeave:Pe,style:ae},o.createElement(ct,(0,g.Z)({},ue,{ref:ge,className:"".concat(W,"-btn")}),o.createElement("div",{className:"".concat(W,"-drag-container")},z))),Y())}var rn=$()(W,(t={},(0,E.Z)(t,"".concat(W,"-select"),!0),(0,E.Z)(t,"".concat(W,"-select-").concat(d),!0),(0,E.Z)(t,"".concat(W,"-disabled"),se),(0,E.Z)(t,"".concat(W,"-rtl"),Be==="rtl"),t)),nn=function(k){return o.createElement("div",{className:rn,style:k},o.createElement(ct,(0,g.Z)({},ue,{ref:ge})))},bt=nn(z?void 0:{display:"none"});return d==="picture-card"?o.createElement("span",{className:$()("".concat(W,"-picture-card-wrapper"),y)},Y(bt,!!z)):o.createElement("span",{className:y},bt,Y())},Yr=o.forwardRef(Jr),Pt=Yr,Qr=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(n[t[a]]=r[t[a]]);return n},qr=o.forwardRef(function(r,e){var n=r.style,t=r.height,a=Qr(r,["style","height"]);return o.createElement(Pt,(0,g.Z)({ref:e},a,{type:"drag",style:(0,g.Z)((0,g.Z)({},n),{height:t})}))}),_r=qr,tt=Pt;tt.Dragger=_r,tt.LIST_IGNORE=Ne;var en=tt}}]);