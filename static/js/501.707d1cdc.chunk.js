"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[501],{1714:function(s,e,a){a.r(e),a.d(e,{default:function(){return x}});a(2791);var i=a(2807),n={dialogs:"Dialogs_dialogs__oe96H",dialogsItems:"Dialogs_dialogsItems__zeEWD",dialog:"Dialogs_dialog__htSTl",active:"Dialogs_active__t8cjl",messages:"Dialogs_messages__Cg2l+",message:"Dialogs_message__ZEWo0",messageItem2:"Dialogs_messageItem2__x-tZs",dialogImg:"Dialogs_dialogImg__y4Xpm"},t=a(1087),o=a.p+"static/media/avatar.102284fc266ea4ecf05b.jpg",r=a(184),l=function(s){var e="/dialogs/"+s.id;return(0,r.jsxs)("div",{className:n.dialog+" "+n.active,children:[(0,r.jsx)("div",{className:n.dialogImg,children:(0,r.jsx)("img",{src:o,alt:""})}),(0,r.jsx)(t.OL,{to:e,children:s.name})]})},g=function(s){return(0,r.jsx)("div",{className:n.message,children:s.message})},d=a(6139),c=a(704),m=a(5304),u=a(9086),f=(0,m.D)(50),h=(0,c.Z)({form:"dialogAddMessageForm"})((function(s){return(0,r.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,r.jsxs)(d.Z,{name:"newMessageBody",component:u.gx,placeholder:"Enter your message",children:[" validate=",[m.C,f]," "]}),(0,r.jsx)("button",{children:"Send"})]})})),_=function(s){var e=s.dialogsPage,a=e.dialogsData.map((function(s){return(0,r.jsx)(l,{name:s.name,id:s.id},s.id)})),i=e.messagesData.map((function(s){return(0,r.jsx)(g,{message:s.message},s.id)})),t=e.messages.map((function(s){return(0,r.jsx)(g,{message:s.message},s.id)}));return(0,r.jsxs)("div",{className:n.dialogs,children:[(0,r.jsx)("div",{className:n.dialogsItems,children:a}),(0,r.jsxs)("div",{className:n.messages,children:[(0,r.jsx)("div",{className:n.messageItem,children:i}),(0,r.jsx)("div",{className:n.messageItem2,children:t})]}),(0,r.jsx)(h,{onSubmit:function(e){s.onSendMessageClick(e.newMessageBody)}})]})},j=a(8687),p=a(1103),x=(0,a(7781).qC)((0,j.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{onSendMessageClick:function(e){s((0,i.U)(e))}}})),p.D)(_)},1103:function(s,e,a){a.d(e,{D:function(){return u}});var i=a(8683),n=a(5671),t=a(3144),o=a(136),r=a(516),l=a(7689),g=a(2791),d=a(8687),c=a(184),m=function(s){return{isAuth:s.auth.isAuth}},u=function(s){var e=function(e){(0,o.Z)(g,e);var a=(0,r.Z)(g);function g(){return(0,n.Z)(this,g),a.apply(this,arguments)}return(0,t.Z)(g,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(s,(0,i.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),g}(g.Component);return(0,d.$j)(m)(e)}}}]);
//# sourceMappingURL=501.707d1cdc.chunk.js.map