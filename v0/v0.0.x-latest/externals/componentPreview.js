!function(){var e=e||50;window.addEventListener("DOMContentLoaded",(function(){var n={init:function(){var e=window.atob(component.replace('export default "data:text/x-handlebars-template;charset=utf-8;base64,',"").replace('"',""));n.componentClean=e.replace(/\.\/\?a=/g,""),document.querySelectorAll(".qld__model_field").forEach((function(e){e.addEventListener("change",(function(){n.updateHB(e.name,e.value)}),!1),e.addEventListener("keyup",(function(){n.updateHB(e.name,e.value)}),!1)}))},updateHB:QLD.utils.debounce((function(e,t){if(void 0!==componentModel.component.data.metadata[e].value){componentModel.component.data.metadata[e].value=t;var o=Handlebars.compile(n.componentClean)({component:componentModel.component,current:current,site:site,content:"Lorem Ipsum"}).replace(/\.\/\?a=/g,"");document.querySelector("#cp-tab--body.component_output").innerHTML=o,document.querySelector(".qld__example__html .component_output").innerText=o,renderCallback.length>0&&n.executeFunctionByName(renderCallback,window),QLD.code.init()}}),e),executeFunctionByName:function(e,n){for(var t=Array.prototype.slice.call(arguments,2),o=e.split("."),a=o.pop(),c=0;c<o.length;c++)n=n[o[c]];n[a].apply(n,t)}};"undefined"!=typeof component&&n.init()}))}();