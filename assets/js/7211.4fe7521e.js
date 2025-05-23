"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["7211"],{28803:function(t,e,r){r.r(e),r.d(e,{dyte_draft_attachment_view:function(){return n},dyte_emoji_picker:function(){return c},dyte_emoji_picker_button:function(){return l},dyte_file_picker_button:function(){return d},dyte_text_composer_view:function(){return h}});var i=r(84982);r(39415),r(79598),r(78410);var o=r(48724),a=r(83041);r(51943),r(94098),r(81479);let n=class{constructor(t){(0,i.r)(this,t),this.onDeleteAttachment=(0,i.c)(this,"deleteAttachment",7),this.fileReader=new FileReader,this.generatePreview=()=>{"image"===this.attachment.type?this.fileReader.readAsDataURL(this.attachment.file):"file"===this.attachment.type&&(this.filePreview=this.attachment.file.name)},this.onDeleteClickHandler=()=>{this.filePreview=null,this.onDeleteAttachment.emit()},this.iconPack=o.d,this.t=(0,a.u)(),this.attachment=null,this.filePreview=null}onAttachmentChange(){this.generatePreview()}connectedCallback(){this.fileReader.onload=t=>{"string"==typeof t.target.result&&(this.filePreview=t.target.result)}}componentWillLoad(){this.onAttachmentChange()}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"preview-overlay"},(0,i.h)("div",{class:"preview"},(0,i.h)("dyte-tooltip",{label:this.t("chat.cancel_upload")},(0,i.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:this.onDeleteClickHandler},(0,i.h)("dyte-icon",{icon:this.iconPack.dismiss}))),"image"===this.attachment.type?(0,i.h)("img",{class:"preview-image",src:this.filePreview}):(0,i.h)("div",{class:"preview-file"},(0,i.h)("span",null,this.filePreview)))))}static get watchers(){return{attachment:["onAttachmentChange"]}}};n.style=":host{display:flex;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-top-left-radius:var(--dyte-border-radius-md, 8px);border-top-right-radius:var(--dyte-border-radius-md, 8px)}.preview-overlay{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);background-color:inherit}.preview{position:absolute;top:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);max-width:-moz-fit-content;max-width:fit-content;max-height:var(--dyte-space-20, 80px)}.preview:hover dyte-tooltip{display:block}.preview dyte-tooltip{position:absolute;top:calc(var(--dyte-space-1, 4px) * -1);left:calc(var(--dyte-space-1, 4px) * -1);display:none;margin-left:calc(var(--dyte-space-1, 4px) * -1);margin-top:calc(var(--dyte-space-1, 4px) * -1)}.preview dyte-button{display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));border:1px solid rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview-image{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);-o-object-fit:cover;object-fit:cover;max-height:100%;max-width:100%;overflow:clip;border-radius:var(--dyte-border-radius-md, 8px)}.preview-file{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--dyte-border-radius-md, 8px);max-width:200px}";let s=async()=>(await fetch("https://cdn.dyte.in/assets/emojis-data.json")).json(),c=class{constructor(t){(0,i.r)(this,t),this.pickerClose=(0,i.c)(this,"pickerClose",7),this.emojiClicked=(0,i.c)(this,"dyteEmojiClicked",7),this.iconPack=o.d,this.t=(0,a.u)(),this.emojiList=void 0,this.filterVal="",this.filteredEmojis=[]}componentWillLoad(){s().then(t=>{this.emojiList=t,this.handleInputChange({value:""})})}handleInputChange(t){this.filterVal=t.value;let e=RegExp(`([^,]*?${this.filterVal}[^,]*):(\\d+)`,"g");this.filteredEmojis=Array.from(this.emojiList.search.matchAll(e)).map(t=>({name:t[1],emoji:this.emojiList.emojis[t[2]]}))}handleEmojiClick(t){this.emojiClicked.emit(t)}mapEmojiList(){var t;return(null===(t=this.emojiList)||void 0===t?void 0:t.length)>0?(0,i.h)("div",{id:"loader"},(0,i.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t})):(0,i.h)("div",{id:"emoji-grid",class:"scrollbar max-w-40"},this.filteredEmojis.map(t=>(0,i.h)("dyte-button",{iconPack:this.iconPack,t:this.t,key:`emoji-button-${t.name}`,class:"emoji",variant:"ghost",kind:"icon",title:t.name,onClick:()=>this.handleEmojiClick(t.emoji)},t.emoji)))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:"close-parent"},(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",class:"close",onClick:()=>{var t;return null===(t=this.pickerClose)||void 0===t?void 0:t.emit()},"aria-label":this.t("close")},(0,i.h)("dyte-icon",{icon:this.iconPack.dismiss}))),(0,i.h)("div",{class:"emoji-parent"},(0,i.h)("input",{value:this.filterVal,onInput:t=>this.handleInputChange(t.target),placeholder:this.t("search")}),this.mapEmojiList()))}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.emoji-parent{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-64, 256px);max-width:640px;flex-direction:column;padding:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-0, 0px);width:auto;min-width:var(--dyte-space-20, 80px);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.close-parent{display:flex;flex:1 1 0%;justify-content:flex-end;padding:var(--dyte-space-0, 0px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#emoji-grid{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-x:hidden;overflow-y:scroll;height:100%;grid-auto-rows:minmax(min-content, max-content)}#loader{display:flex;height:100%;width:100%;align-items:center;justify-content:center}input{display:block;height:var(--dyte-space-8, 32px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:14px;border-width:var(--dyte-border-width-none, 0);border-style:solid;border-style:none;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-ring-opacity));--tw-ring-opacity:0.3}.emoji{height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);font-size:20px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";let l=class{constructor(t){(0,i.r)(this,t),this.iconPack=o.d,this.t=(0,a.u)(),this.isActive=void 0}render(){let t={iconPack:this.iconPack,t:this.t};return(0,i.h)("dyte-tooltip",Object.assign({label:this.t("chat.send_emoji")},t),(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",class:{active:this.isActive},title:this.t("chat.send_emoji"),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.emoji_multiple})))}};l.style=":host{}";let d=class{constructor(t){(0,i.r)(this,t),this.onFileChange=(0,i.c)(this,"fileChange",7),this.uploadFile=()=>{let t=document.createElement("input");t.type="file",this.filter&&(t.accept=this.filter),t.onchange=t=>{let{validity:e,files:[r]}=t.target;e.valid&&this.onFileChange.emit(r)},t.click()},this.filter=void 0,this.label=void 0,this.icon="attach",this.iconPack=o.d,this.t=(0,a.u)()}render(){let t={iconPack:this.iconPack,t:this.t},e=this.label||this.t("chat.send_file"),r=this.iconPack[this.icon];return(0,i.h)("dyte-tooltip",Object.assign({label:e},t),(0,i.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:()=>this.uploadFile(),title:e,iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:r})))}};d.style=":host{}";let h=class{constructor(t){(0,i.r)(this,t),this.onTextChange=(0,i.c)(this,"textChange",7),this.onInputHandler=()=>{let t=this.$textArea.value.trim();this.maybeResize(t),this.onTextChange.emit(t)},this.maybeResize=t=>{let e=[...t.matchAll(/\n/g)].length;this.$textArea.style.height=`${Math.min(200,60+20*e)}px`},this.disabled=!1,this.placeholder=void 0,this.value=void 0,this.maxLength=void 0,this.keyDownHandler=()=>{}}componentDidLoad(){this.maxLength&&(this.$textArea.maxLength=this.maxLength);let t=this.$textArea.value.trim();""!==t&&this.maybeResize(t)}async setText(t,e=!1){this.$textArea.value=t,this.maybeResize(t),e&&this.$textArea.focus(),this.onTextChange.emit(t)}render(){return(0,i.h)("div",{class:"chat-input",part:"chat-input-container"},(0,i.h)("textarea",{ref:t=>this.$textArea=t,placeholder:this.placeholder,disabled:this.disabled,onInput:this.onInputHandler,onKeyDown:this.keyDownHandler,part:"chat-input",value:this.value}))}};h.style=".chat-input {\n\n  position: relative;\n\n  z-index: 10;\n\n  box-sizing: border-box;\n\n  display: flex;\n\n  flex-direction: column;\n\n  border-top-left-radius: var(--dyte-border-radius-md, 8px);\n\n  border-top-right-radius: var(--dyte-border-radius-md, 8px)\n}\n\n  .chat-input textarea {\n\n  --tw-bg-opacity: 1;\n\n  background-color: rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));\n\n  box-sizing: border-box;\n\n  padding: var(--dyte-space-3, 12px);\n\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255))\n}\n\n  .chat-input textarea::-moz-placeholder {\n\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255))\n}\n\n  .chat-input textarea::placeholder {\n\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255))\n}\n\n  .chat-input textarea {\n\n  font-family: var(--dyte-font-family, sans-serif);\n\n  outline: 2px solid transparent;\n\n  outline-offset: 2px;\n\n  resize: none;\n\n  overflow-y: auto;\n\n  border-width: var(--dyte-border-width-none, 0);\n\n  border-style: none;\n\n  min-height: 60px;\n\n  font-size: 14px\n}\n\n@container chatcontainer (height < 360px) {\n  textarea {\n\n    height: 30px !important;\n\n    min-height: 30px !important\n  }\n}\n"}}]);