
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/components/bitrix/desktop/script.min.js?176242819911184";s:6:"source";s:43:"/bitrix/components/bitrix/desktop/script.js";s:3:"min";s:47:"/bitrix/components/bitrix/desktop/script.min.js";s:3:"map";s:47:"/bitrix/components/bitrix/desktop/script.map.js";}"*/
var allGagdgetHolders=[];function getGadgetHolder(e){return allGagdgetHolders[e]}function BXGadget(gadgetHolderID,allGadgets){var _this=this;BX.addCustomEvent("onAjaxFailure",(function(e){if(e=="auth"){top.location=top.location.href}}));_this.gadgetHolderID=gadgetHolderID;_this.allGadgets=allGadgets;allGagdgetHolders[_this.gadgetHolderID]=_this;_this.menuItems=[];if(!BX.Type.isUndefined(window.arGDGroups)){for(var gr_id in window.arGDGroups){if(window.arGDGroups.hasOwnProperty(gr_id)){var items=[];for(var _gid in window.arGDGroups[gr_id]["GADGETS"]){if(window.arGDGroups[gr_id]["GADGETS"].hasOwnProperty(_gid)){var gid=window.arGDGroups[gr_id]["GADGETS"][_gid];for(var i in _this.allGadgets){if(_this.allGadgets[i]["ID"].toUpperCase()==gid.toUpperCase()){_this.allGadgets[i]["ONCLICK"]="getGadgetHolder('"+_this.gadgetHolderID+"').Add('"+_this.allGadgets[i]["ID"]+"')";items[items.length]=_this.allGadgets[i];break}}}}}_this.menuItems[gr_id]={ID:gr_id,TEXT:'<div style="text-align: left;"><b>'+window.arGDGroups[gr_id]["NAME"]+"</b><br>"+window.arGDGroups[gr_id]["DESCRIPTION"]+"</div>",MENU:items}}}_this.gdList=Array();_this.gdCols=Array();_this.__GDList=function(){_this.gdList=Array();_this.gdCols=Array();var e=document.getElementById("GDHolder_"+_this.gadgetHolderID).rows[0].cells;var t,i,s,a;for(a=0;a<e.length;a++){if(e[a].id.substring(0,1)=="s"){i=Array();t=e[a].childNodes;for(s in t){if(t.hasOwnProperty(s)){if(!t[s])continue;if(t[s].tagName&&(t[s].tagName.toUpperCase()=="TABLE"||t[s].tagName.toUpperCase()=="DIV")&&t[s].id.substring(0,1)=="t"){i[i.length]=t[s]}}}_this.gdList[_this.gdCols.length]=i;e[a].realPos=jsUtils.GetRealPos(e[a]);_this.gdCols[_this.gdCols.length]=e[a]}}};_this.gdDrag=false;_this.mousePos={x:0,y:0};_this.zind=0;_this.tmpDiv=false;_this.DragStart=function(e,t){if(t){if(t.srcElement&&t.srcElement.tagName.toLowerCase()=="a")return false;if(t.originalTarget&&t.originalTarget.tagName.toLowerCase()=="a")return false}_this.__GDList();var i=BX("t"+e);var s=jsUtils.GetRealPos(i);var a=BX("d"+e);a.style.display="block";a.width=i.offsetWidth+"px";a.style.height=i.offsetHeight+"px";i.style.position="absolute";i.style.width=a.offsetWidth+"px";i.style.height=a.offsetHeight+"px";i.style.border="1px solid #777777";_this.zind=i.style.zIndex;i.style.zIndex="10000";i.style.left=s["left"]+20+"px";i.style.top=s["top"]+"px";i.style.MozOpacity=.6;i.style.opacity=.6;i.style.filter="gray() alpha(opacity=60)";_this.gdDrag=e;_this.tmpDiv=document.createElement("DIV");_this.tmpDiv.style.display="none";_this.tmpDiv.innerHTML="";i.parentNode.insertBefore(_this.tmpDiv,i);document.body.appendChild(i);BX.ZIndexManager.register(i);_this.mousePos.x=t.clientX+document.body.scrollLeft;_this.mousePos.y=t.clientY+document.body.scrollTop;return false};_this.onMouseMove=function(e){if(_this.gdDrag===false)return;var t=document.getElementById("t"+_this.gdDrag);var i=e.clientX+document.body.scrollLeft;var s=e.clientY+document.body.scrollTop;t.style.left=parseInt(t.style.left)+i-_this.mousePos.x+"px";t.style.top=parseInt(t.style.top)+s-_this.mousePos.y+"px";var a=jsUtils.GetRealPos(t),d,r,n,o=false,l;var g=a.left+(a.right-a.left)/2,p=a.top+(a.bottom-a.top)/2;for(r=0;r<_this.gdCols.length;r++){d=_this.gdCols[r].realPos;if(d.left<=g&&d.right>=g){for(n in _this.gdList[r]){if(_this.gdList[r].hasOwnProperty(n)){if(_this.gdList[r][n].id==t.id)l=jsUtils.GetRealPos(document.getElementById("d"+_this.gdDrag));else l=jsUtils.GetRealPos(_this.gdList[r][n]);if(p<l.bottom){o=_this.gdList[r][n];_this.tmpDiv=document.createElement("DIV");_this.tmpDiv.style.display="none";_this.tmpDiv.innerHTML="";if(_this.gdList[r][n].id==t.id)document.getElementById("d"+_this.gdDrag).parentNode.insertBefore(_this.tmpDiv,document.getElementById("d"+_this.gdDrag));else o.parentNode.insertBefore(_this.tmpDiv,o);break}}}if(!o){o="last"}break}}if(o){var h=document.getElementById("d"+_this.gdDrag);h.parentNode.removeChild(h);if(o=="last")_this.gdCols[r].appendChild(h);else _this.tmpDiv.parentNode.insertBefore(h,_this.tmpDiv)}_this.mousePos.x=i;_this.mousePos.y=s};_this.onMouseUp=function(e){if(_this.gdDrag===false)return;var t=BX("t"+_this.gdDrag);t.style.MozOpacity=1;t.style.opacity=1;t.style.filter="";t.style.position="static";t.style.border="0px";t.style.width="";t.style.height="";t.style.zIndex=_this.zind;var i=BX("d"+_this.gdDrag);i.style.display="none";BX.ZIndexManager.unregister(t);t.parentNode.removeChild(t);i.parentNode.insertBefore(t,i);_this.gdDrag=false;if(!_this.sendWait){_this.sendWait=true;setTimeout("getGadgetHolder('"+_this.gadgetHolderID+"').SendUpdatedInfo();",1e3)}};_this.GetPosString=function(){var e=document.getElementById("GDHolder_"+_this.gadgetHolderID).rows[0].cells;var t,i,s;var a="",d=-1,r=0;for(s=0;s<e.length;s++){if(e[s].id.substring(0,1)=="s"){d++;r=0;t=e[s].childNodes;for(i in t){if(t.hasOwnProperty(i)){if(!t[i])continue;if(t[i].tagName&&(t[i].tagName.toUpperCase()=="TABLE"||t[i].tagName.toUpperCase()=="DIV")&&t[i].id.substring(0,1)=="t"){a=a+"&POS["+d+"]["+r+"]="+encodeURIComponent(t[i].id.substring(1))+(t[i].className.indexOf(" gdhided")>0?"*H":"");r++}}}}}return a};_this.GetPos=function(){var e=document.getElementById("GDHolder_"+_this.gadgetHolderID).rows[0].cells;var t,i,s;var a=[],d=-1,r=0;for(s=0;s<e.length;s++){if(e[s].id.substring(0,1)=="s"){d++;r=0;t=e[s].childNodes;for(i in t){if(t.hasOwnProperty(i)){if(!t[i])continue;if(t[i].tagName&&(t[i].tagName.toUpperCase()=="TABLE"||t[i].tagName.toUpperCase()=="DIV")&&t[i].id.substring(0,1)=="t"){if(typeof a[d]=="undefined"){a[d]=[]}a[d][r]=t[i].id.substring(1)+(t[i].className.indexOf(" gdhided")>0?"*H":"");r++}}}}}return a};_this.SendUpdatedInfo=function(e){e=e||"update_position";if(!!_this.sendUpdate||_this.gdDrag!==false){setTimeout("getGadgetHolder('"+_this.gadgetHolderID+"').SendUpdatedInfo('"+e+"');",500);return}_this.sendUpdate=true;_this.sendWait=false;BX.ajax({url:updateURL,method:"POST",dataType:"html",data:{sessid:BX.bitrix_sessid(),gd_ajax:_this.gadgetHolderID,gd_ajax_action:e,POS:_this.GetPos()},onsuccess:function(t){_this.sendUpdate=false;if(e=="clear_settings"){window.location=window.location}},onfailure:function(e){_this.sendUpdate=false;alert(langGDError1)}})};_this.Add=function(e){var t=document.getElementById("GDHolderForm_"+_this.gadgetHolderID);t["gid"].value=e;t["action"].value="add";t.submit()};_this.UpdSettings=function(e){var t=document.getElementById("GDHolderForm_"+_this.gadgetHolderID);t["gid"].value=e;t["action"].value="update";function i(e,i){var s;if(typeof i=="object"||i instanceof Array){for(var a in i){if(i.hasOwnProperty(a)){s=document.createElement("INPUT");s.type="hidden";s.name="settings["+e+"][]";s.value=i[a];t.appendChild(s)}}}else{s=document.createElement("INPUT");s.type="hidden";s.name="settings["+e+"]";s.value=i;t.appendChild(s)}}var s=document.getElementById("dset"+e);var a,d="";for(var r=0;r<s._inputs.length;r++){a=document.getElementById(e+"_"+s._inputs[r]);if(a){if(a.tagName.toUpperCase()=="SELECT"&&a.multiple){var n=[];for(var o=0;o<a.options.length;o++)if(a.options[o].selected)n.push(a.options[o].value);i(s._inputs[r],n)}else if(a.tagName.toUpperCase()=="INPUT"&&a.type.toUpperCase()=="CHECKBOX")i(s._inputs[r],a.checked?"Y":"N");else i(s._inputs[r],a.value)}}t.submit()};_this.SetForAll=function(){langGDConfirm=langGDConfirm1;if(arguments[0]){if(arguments[0]=="SU")langGDConfirm=langGDConfirmUser;if(arguments[0]=="SG")langGDConfirm=langGDConfirmGroup}if(!confirm(langGDConfirm))return;_this.SendUpdatedInfo("save_default")};_this.ClearUserSettings=function(){_this.SendUpdatedInfo("clear_settings")};_this.ClearUserSettingsConfirm=function(){if(!confirm(langGDClearConfirm))return;_this.SendUpdatedInfo("clear_settings")};_this.Delete=function(e){var t=document.getElementById("t"+e);if(t)t.parentNode.removeChild(t);var i=document.getElementById("d"+e);if(i)i.parentNode.removeChild(i);if(!_this.sendWait){_this.sendWait=true;setTimeout("getGadgetHolder('"+_this.gadgetHolderID+"').SendUpdatedInfo();",500)}return false};_this.Hide=function(e,t){var i=document.getElementById("t"+e);if(!i)return;if(i.className.indexOf(" gdhided")>0)i.className="data-table-gadget";else i.className="data-table-gadget gdhided";if(!_this.sendWait){_this.sendWait=true;setTimeout("getGadgetHolder('"+_this.gadgetHolderID+"').SendUpdatedInfo();",500)}return false};_this.CloseSettingsForm=function(e){var t=document.getElementById("dset"+e);t.style.display="none"};BXGadget.prototype.ShowSettings=function(id,t){var dS=document.getElementById("dset"+id);var is_selected="";t=t||"get_settings";_this=this;if(dS.style.display!="none"){dS.style.display="none";return}BX.ajax({url:updateURL,method:"POST",dataType:"html",data:{sessid:BX.bitrix_sessid(),gd_ajax:_this.gadgetHolderID,gid:id,gd_ajax_action:t},onsuccess:function(data){var before=(new Date).getTime();var dSet=document.getElementById("dset"+id);dSet.innerHTML="";dSet._inputs=[];try{eval("var gdObject = "+data)}catch(e){return}var param,param_id;var oEl;for(param_id in gdObject){if(gdObject.hasOwnProperty(param_id)){param=gdObject[param_id];var str="";var input_id=id+"_"+param_id;param["TYPE"]=param["TYPE"]||"STRING";if(!param["VALUE"]&&param["DEFAULT"]!="undefined")param["VALUE"]=param["DEFAULT"];if(param["TYPE"]=="STRING"){str=param["NAME"]+':<br><input type="text" id="'+input_id+'" size="40" value="'+jsUtils.htmlspecialchars(param["VALUE"])+'"><br>'}else if(param["TYPE"]=="LIST"){var aR=[];for(var vid in param["VALUES"]){if(param["VALUES"].hasOwnProperty(vid)){if(param["MULTIPLE"]=="Y"){is_selected="";if(param["VALUE"]instanceof Array){for(var k=0;k<param["VALUE"].length;k++){if(param["VALUE"][k]==vid){is_selected=" selected";break}}}else is_selected=param["VALUE"]==vid?" selected":""}else is_selected=param["VALUE"]==vid?" selected":"";aR.push('<option value="'+vid+'" '+is_selected+">"+param["VALUES"][vid]+"</option>")}}str=param["NAME"]+':<br><select style="width:100%" id="'+input_id+'" '+(param["MULTIPLE"]=="Y"?'multiple="multiple"':"")+">"+aR.join("")+"</select>"}else if(param["TYPE"]=="CHECKBOX"){str=param["NAME"]+': <input type="checkbox" id="'+input_id+'" value="Y" '+(param["VALUE"]=="Y"?" checked":"")+"><br>"}oEl=document.createElement("DIV");oEl.className="gdsettrow";oEl.innerHTML=str;dSet.appendChild(oEl);dSet._inputs[dSet._inputs.length]=param_id}}oEl=document.createElement("DIV");oEl.className="gdsettrow";oEl.innerHTML='<input type="button" value="OK" onclick="getGadgetHolder(\''+_this.gadgetHolderID+"').UpdSettings('"+id+'\');"> <input type="button" value="'+langGDCancel+'" onclick="getGadgetHolder(\''+_this.gadgetHolderID+"').CloseSettingsForm('"+id+"');\">";dSet.appendChild(oEl);dSet.style.display="block"},onfailure:function(e){alert(langGDError2)}});return false};BXGadget.prototype.ShowAddGDMenu=function(e){this.menu=new PopupMenu("gadgets_float_menu");this.menu.Create(1e3);if(this.menu.IsVisible())return;this.menu.SetItems(this.menuItems);this.menu.BuildItems();var t=jsUtils.GetRealPos(e);t["bottom"]+=1;this.menu.PopupShow(t)};jsUtils.addEvent(document.body,"mousemove",_this.onMouseMove);jsUtils.addEvent(document.body,"mouseup",_this.onMouseUp)}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js?17624317292527";s:6:"source";s:78:"/bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var waitDiv = null;
var waitPopup = null;
var waitTimeout = null;
var waitTime = 500;

function __SASSetAdmin()
{
	__SASShowWait();
	BX.ajax({
		url: '/bitrix/components/bitrix/socialnetwork.admin.set/ajax.php',
		method: 'POST',
		dataType: 'json',
		data: {'ACTION': 'SET', 'sessid': BX.bitrix_sessid(), 'site': BX.util.urlencode(BX.message('SASSiteId'))},
		onsuccess: function(data) { __SASProcessAJAXResponse(data); }
	});
}

function __SASProcessAJAXResponse(data)
{
	if (data["SUCCESS"] != "undefined" && data["SUCCESS"] == "Y")
	{
		BX.reload();
		return false;
	}
	else if (data["ERROR"] != "undefined" && data["ERROR"].length > 0)
	{
		if (data["ERROR"].indexOf("SESSION_ERROR", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorSessionWrong'));
			BX.reload();
		}
		else if (data["ERROR"].indexOf("CURRENT_USER_NOT_ADMIN", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorNotAdmin'));
			return false;
		}
		else if (data["ERROR"].indexOf("CURRENT_USER_NOT_AUTH", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorCurrentUserNotAuthorized'));
			return false;
		}
		else if (data["ERROR"].indexOf("SONET_MODULE_NOT_INSTALLED", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorModuleNotInstalled'));
			return false;
		}
		else
		{
			__SASShowError(data["ERROR"]);
			return false;		
		}
	}
}
				
function __SASShowError(errorText) 
{
	__SASCloseWait();

	var errorPopup = new BX.PopupWindow('sas-error' + Math.random(), window, {
		autoHide: true,
		lightShadow: false,
		zIndex: 2,
		content: BX.create('DIV', {props: {'className': 'sonet-adminset-error-text-block'}, html: errorText}),
		closeByEsc: true,
		closeIcon: true
	});
	errorPopup.show();

}

function __SASShowWait(timeout)
{
	if (timeout !== 0)
	{
		return (waitTimeout = setTimeout(function(){
			__SASShowWait(0)
		}, 50));
	}

	if (!waitPopup)
	{
		waitPopup = new BX.PopupWindow('sas_wait', window, {
			autoHide: true,
			lightShadow: true,
			zIndex: 2,
			content: BX.create('DIV', {
				props: {
					className: 'sonet-adminset-wait-cont'
				},
				children: [
					BX.create('DIV', {
						props: {
							className: 'sonet-adminset-wait-icon'
						}
					}),
					BX.create('DIV', {
						props: {
							className: 'sonet-adminset-wait-text'
						},
						html: BX.message('SASWaitTitle')
					})
				]
			})
		});
	}
	else
		waitPopup.setBindElement(window);

	waitPopup.show();
}

function __SASCloseWait()
{
	if (waitTimeout)
	{
		clearTimeout(waitTimeout);
		waitTimeout = null;
	}

	if (waitPopup)
		waitPopup.close();
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/components/bitrix/socialnetwork.log.ex/templates/.default/script.min.js?17624317292044";s:6:"source";s:75:"/bitrix/components/bitrix/socialnetwork.log.ex/templates/.default/script.js";s:3:"min";s:79:"/bitrix/components/bitrix/socialnetwork.log.ex/templates/.default/script.min.js";s:3:"map";s:79:"/bitrix/components/bitrix/socialnetwork.log.ex/templates/.default/script.map.js";}"*/
function __logGetNextPageLinkEntities(e,i){if(!!window.__logGetNextPageFormName&&!!e&&!!i&&!!window["UC"]&&!!window["UC"][window.__logGetNextPageFormName]&&!!window["UC"][window.__logGetNextPageFormName].linkEntity){window["UC"][window.__logGetNextPageFormName].linkEntity(e);for(var t in i){if(!!t&&i.hasOwnProperty(t)&&!!i[t]){window["UC"][window.__logGetNextPageFormName].entitiesCorrespondence[t]=i[t]}}}}function __logChangeFavorites(e,i,t,n,o){BX.Livefeed.FeedInstance.changeFavorites({logId:e,node:i,newState:t,fromMenu:!!n,event:o})}BitrixLF=function(){this.cmdPressed=null;this.tagEntryIdList=[];this.inlineTagNodeList=[];if(window.top!==window&&window.top.BX.Tasks&&window.BX.Tasks&&window.BX.Tasks.CommentActionController){window.top.BX.Tasks.CommentActionController=window.BX.Tasks.CommentActionController}if(BX.Tasks&&BX.Tasks.CommentActionController){void BX.Tasks.CommentActionController.init()}};BitrixLF.prototype.init=function(e){this.cmdPressed=false;if(BX.Livefeed&&BX.Livefeed.InformerInstance){BX.Livefeed.InformerInstance.lockCounterAnimation=false}BX.addCustomEvent("onFrameDataProcessed",(function(){if(BX.Livefeed&&BX.Livefeed.InformerInstance){BX.Livefeed.InformerInstance.lockCounterAnimation=false}}));if(BX.Livefeed&&BX.Livefeed.PageInstance){BX.Livefeed.PageInstance.init();if(BX.type.isPlainObject(e)){BX.Livefeed.PageInstance.firstPageLastTS=!BX.type.isUndefined(e.firstPageLastTS)?e.firstPageLastTS:0;BX.Livefeed.PageInstance.firstPageLastId=!BX.type.isUndefined(e.firstPageLastId)?e.firstPageLastId:0;BX.Livefeed.PageInstance.useBXMainFilter=!BX.type.isUndefined(e.useBXMainFilter)?e.useBXMainFilter:"N";if(BX.type.isNotEmptyString(e.blogCommentFormUID)){BX.Livefeed.PageInstance.blogCommentFormUID=e.blogCommentFormUID}}}};BitrixLF.prototype.LazyLoadCheckVisibility=function(e){return BX.Livefeed.MoreButton.lazyLoadCheckVisibility(e)};BitrixLF.prototype.createTask=function(e){BX.Livefeed.TaskCreator.create(e)};if(typeof oLF=="undefined"){oLF=new BitrixLF;window.oLF=oLF}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:98:"/bitrix/components/bitrix/socialnetwork.log.entry/templates/.default/scripts.min.js?17624317299338";s:6:"source";s:79:"/bitrix/components/bitrix/socialnetwork.log.entry/templates/.default/scripts.js";s:3:"min";s:83:"/bitrix/components/bitrix/socialnetwork.log.entry/templates/.default/scripts.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/socialnetwork.log.entry/templates/.default/scripts.map.js";}"*/
window["__logCommentsListRedefine"]=function(e,t,n,a){if(window["UC"]&&!!window["UC"][e]){BX.addCustomEvent(window["UC"][e],"OnUCListWasBuilt",(function(t,n,s){if(BX(s)&&s.hasChildNodes){var i=s.firstChild,o;do{if(BX(i)&&i["getAttribute"]){o=i.getAttribute("id").replace("record-"+e+"-","").replace("-cover","");BX.onCustomEvent(window,"OnUCAddEntitiesCorrespondence",[e+"-"+o,[a,top["arLogCom"+a+o]]])}}while(i=i.nextSibling)}}))}if(!!window.mplCheckForQuote)BX.bind(BX(t),"mouseup",(function(t){mplCheckForQuote(t,this,e,n)}))};window["__logBuildRating"]=function(e,t,n){var a="";n=!!n?n:Math.floor(Math.random()*1e5)+1;if(BX.message("sonetLShowRating")=="Y"&&!!e["RATING_TYPE_ID"]>0&&e["RATING_ENTITY_ID"]>0&&(BX.message("sonetLRatingType")=="like"&&!!window["RatingLike"]||BX.message("sonetLRatingType")=="standart_text"&&!!window["Rating"])){if(BX.message("sonetLRatingType")=="like"){var s=e["RATING_USER_VOTE_VALUE"]>0?" bx-you-like":"",i=e["RATING_USER_VOTE_VALUE"]>0?BX.message("sonetLTextLikeN"):BX.message("sonetLTextLikeY"),o=null;if(!!t["ALLOW_VOTE"]&&!!t["ALLOW_VOTE"]["RESULT"])o=BX.create("span",{props:{className:"bx-ilike-text"},html:i});a=BX.create("span",{attrs:{id:"sonet-rating-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n},props:{className:"sonet-log-comment-like rating_vote_text"},children:[BX.create("span",{props:{className:"ilike-light"},children:[BX.create("span",{props:{id:"bx-ilike-button-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n,className:"bx-ilike-button"},children:[BX.create("span",{props:{className:"bx-ilike-right-wrap"+s},children:[BX.create("span",{props:{className:"bx-ilike-right"},html:e["RATING_TOTAL_POSITIVE_VOTES"]})]}),BX.create("span",{props:{className:"bx-ilike-left-wrap"},children:[o]})]}),BX.create("span",{props:{id:"bx-ilike-popup-cont-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n,className:"bx-ilike-wrap-block"},style:{display:"none"},children:[BX.create("span",{props:{className:"bx-ilike-popup"},children:[BX.create("span",{props:{className:"bx-ilike-wait"}})]})]})]})]})}else if(BX.message("sonetLRatingType")=="standart_text"){a=BX.create("span",{attrs:{id:"sonet-rating-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n},props:{className:"sonet-log-comment-like rating_vote_text"},children:[BX.create("span",{props:{className:"bx-rating"+(!t["ALLOW_VOTE"]["RESULT"]?" bx-rating-disabled":"")+(e["RATING_USER_VOTE_VALUE"]!=0?" bx-rating-active":""),id:"bx-rating-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n,title:!t["ALLOW_VOTE"]["RESULT"]?t["ERROR_MSG"]:""},children:[BX.create("span",{props:{className:"bx-rating-absolute"},children:[BX.create("span",{props:{className:"bx-rating-question"},html:!t["ALLOW_VOTE"]["RESULT"]?BX.message("sonetLTextDenied"):BX.message("sonetLTextAvailable")}),BX.create("span",{props:{className:"bx-rating-yes "+(e["RATING_USER_VOTE_VALUE"]>0?"  bx-rating-yes-active":""),title:e["RATING_USER_VOTE_VALUE"]>0?BX.message("sonetLTextCancel"):BX.message("sonetLTextPlus")},children:[BX.create("a",{props:{className:"bx-rating-yes-count",href:"#like"},html:""+parseInt(e["RATING_TOTAL_POSITIVE_VOTES"])}),BX.create("a",{props:{className:"bx-rating-yes-text",href:"#like"},html:BX.message("sonetLTextRatingY")})]}),BX.create("span",{props:{className:"bx-rating-separator"},html:"/"}),BX.create("span",{props:{className:"bx-rating-no "+(e["RATING_USER_VOTE_VALUE"]<0?"  bx-rating-no-active":""),title:e["RATING_USER_VOTE_VALUE"]<0?BX.message("sonetLTextCancel"):BX.message("sonetLTextMinus")},children:[BX.create("a",{props:{className:"bx-rating-no-count",href:"#dislike"},html:""+parseInt(e["RATING_TOTAL_NEGATIVE_VOTES"])}),BX.create("a",{props:{className:"bx-rating-no-text",href:"#dislike"},html:BX.message("sonetLTextRatingN")})]})]})]}),BX.create("span",{props:{id:"bx-rating-popup-cont-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n+"-plus"},style:{display:"none"},children:[BX.create("span",{props:{className:"bx-ilike-popup  bx-rating-popup"},children:[BX.create("span",{props:{className:"bx-ilike-wait"}})]})]}),BX.create("span",{props:{id:"bx-rating-popup-cont-"+e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n+"-minus"},style:{display:"none"},children:[BX.create("span",{props:{className:"bx-ilike-popup  bx-rating-popup"},children:[BX.create("span",{props:{className:"bx-ilike-wait"}})]})]})]})}}if(!!a){a=BX.create("span",{children:[a]});a=a.innerHTML+'<script>window["#OBJ#"].Set("#ID#", "#RATING_TYPE_ID#", #RATING_ENTITY_ID#, "#ALLOW_VOTE#", BX.message("sonetLCurrentUserID"), #TEMPLATE#, "light", BX.message("sonetLPathToUser"));<\/script>'.replace("#OBJ#",BX.message("sonetLRatingType")=="like"?"RatingLike":"Rating").replace("#ID#",e["RATING_TYPE_ID"]+"-"+e["RATING_ENTITY_ID"]+"-"+n).replace("#RATING_TYPE_ID#",e["RATING_TYPE_ID"]).replace("#RATING_ENTITY_ID#",e["RATING_ENTITY_ID"]).replace("#ALLOW_VOTE#",!!t["ALLOW_VOTE"]&&!!t["ALLOW_VOTE"]["RESULT"]?"Y":"N").replace("#TEMPLATE#",BX.message("sonetLRatingType")=="like"?'{LIKE_Y:BX.message("sonetLTextLikeN"),LIKE_N:BX.message("sonetLTextLikeY"),LIKE_D:BX.message("sonetLTextLikeD")}':'{PLUS:BX.message("sonetLTextPlus"),MINUS:BX.message("sonetLTextMinus"),CANCEL:BX.message("sonetLTextCancel")}')}return a};window["__logShowCommentForm"]=function(e){if(!!window["UC"][e])window["UC"][e].reply()};function __logShowHiddenDestination(e,t,n){BX.ajax.runAction("socialnetwork.api.livefeed.logentry.getHiddenDestinations",{data:{params:{logId:e,createdById:t,pathToUser:BX.message("sonetLPathToUser"),pathToWorkgroup:BX.message("sonetLPathToGroup"),pathToDepartment:BX.message("sonetLPathToDepartment"),nameTemplate:BX.message("sonetLNameTemplate"),showLogin:BX.message("sonetLShowLogin"),destinationLimit:BX.message("sonetLDestinationLimit")}}}).then((function(e){var t=e.data.destinationList;if(!BX.type.isNotEmptyObject(t)){return}if(BX(n)){var a=n.parentNode;a.removeChild(n);var s="";for(var i in t){if(!t.hasOwnProperty(i)){continue}if(BX.type.isNotEmptyString(t[i]["TITLE"])){a.appendChild(BX.create("SPAN",{html:", "}));if(BX.type.isNotEmptyString(t[i]["CRM_PREFIX"])){a.appendChild(BX.create("SPAN",{props:{className:"feed-add-post-destination-prefix"},html:t[i]["CRM_PREFIX"]+":&nbsp;"}))}if(BX.type.isNotEmptyString(t[i]["URL"])){a.appendChild(BX.create("A",{props:{className:"feed-add-post-destination-new"+(BX.type.isNotEmptyString(t[i]["IS_EXTRANET"])&&t[i]["IS_EXTRANET"]=="Y"?" feed-post-user-name-extranet":""),href:t[i]["URL"]},html:t[i]["TITLE"]}))}else{a.appendChild(BX.create("SPAN",{props:{className:"feed-add-post-destination-new"+(BX.type.isNotEmptyString(t[i]["IS_EXTRANET"])&&t[i]["IS_EXTRANET"]=="Y"?" feed-post-user-name-extranet":"")},html:t[i]["TITLE"]}))}}}if(typeof e.data["hiddenDestinationsCount"]!="undefined"&&parseInt(e.data["hiddenDestinationsCount"])>0){e.data["hiddenDestinationsCount"]=parseInt(e.data["hiddenDestinationsCount"]);var o=e.data["hiddenDestinationsCount"]%100>10&&e.data["hiddenDestinationsCount"]%100<20?5:e.data["hiddenDestinationsCount"]%10;a.appendChild(BX.create("SPAN",{html:"&nbsp;"+BX.message("sonetLDestinationHidden"+o).replace("#COUNT#",e.data["hiddenDestinationsCount"])}))}}}),(function(e){}))}function __logSetFollow(e){return BX.Livefeed.FeedInstance.changeFollow({logId:e})}function __logRefreshEntry(e){var t=e.node!==undefined?BX(e.node):false;var n=e.logId!==undefined?parseInt(e.logId):0;if(!t||n<=0||BX.message("sonetLEPath")===undefined){return}BX.ajax({url:BX.message("sonetLEPath").replace("#log_id#",n),method:"POST",dataType:"json",data:{log_id:n,action:"get_entry"},onsuccess:function(e){if(e["ENTRY_HTML"]!==undefined){BX.cleanNode(t);t.innerHTML=e["ENTRY_HTML"];var n=BX.processHTML(t.innerHTML,true);var a=n.SCRIPT;BX.ajax.processScripts(a,true)}},onfailure:function(e){}});return false}window.__logEditComment=function(e,t,n){BX.ajax.runAction("socialnetwork.api.livefeed.comment.getsource",{data:{params:{postId:n,commentId:t}}}).then((function(t){var a=t.data;var s={messageBBCode:a.message,messageFields:{arFiles:BX.type.isNotEmptyObject(a.UF.UF_SONET_COM_FILE)?a.UF.UF_SONET_COM_FILE.VALUE:[]}};if(BX.type.isNotEmptyObject(a.UF.UF_SONET_COM_DOC)&&BX.type.isNotEmptyString(a.UF.UF_SONET_COM_DOC.USER_TYPE_ID)){if(a.UF.UF_SONET_COM_DOC.USER_TYPE_ID==="webdav_element"){s.messageFields.arDocs=a.UF.UF_SONET_COM_DOC.VALUE}else if(a.UF.UF_SONET_COM_DOC.USER_TYPE_ID==="disk_file"){s.messageFields.arDFiles=a.UF.UF_SONET_COM_DOC.VALUE}}window.UC[window.SLEC.formKey].entitiesCorrespondence[e+"-"+a.sourceId]=[n,a.id];BX.onCustomEvent(window,"OnUCAfterRecordEdit",[e,a.sourceId,s,"EDIT"])}),(function(){}))};function __logTaskAnalytics(e,t){const n={tool:"tasks",category:"task_operations",event:e,type:"task",c_section:"feed",c_element:t};BX.UI.Analytics.sendData(n)}(function(){BX.SocialnetworkLogEntry={};BX.SocialnetworkLogEntry.registerViewAreaList=function(e){if(typeof e=="undefined"||typeof e.containerId=="undefined"||typeof e.className=="undefined"){return}if(BX(e.containerId)){var t=BX.findChildren(BX(e.containerId),{tag:"div",className:e.className},true),n=null;for(var a=0,s=t.length;a<s;a++){if(t[a].id.length>0){n=null;if(BX.type.isNotEmptyString(e.fullContentClassName)){n=BX.findChild(t[a],{className:e.fullContentClassName})}BX.UserContentView.registerViewArea(t[a].id,n?n:null)}}}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/socialnetwork.blog.post.edit/templates/.default/script.js?176544696188918";s:6:"source";s:83:"/bitrix/components/bitrix/socialnetwork.blog.post.edit/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* eslint-disable */
this.BX = this.BX || {};
this.BX.Socialnetwork = this.BX.Socialnetwork || {};
(function (exports,main_popup,ui_entitySelector,main_date,main_core,main_core_events,ai_picker,ui_uploader_core) {
	'use strict';

	var AjaxProcessor = /*#__PURE__*/function () {
	  function AjaxProcessor() {
	    babelHelpers.classCallCheck(this, AjaxProcessor);
	    babelHelpers.defineProperty(this, "htmlWasInserted", false);
	    babelHelpers.defineProperty(this, "scriptsLoaded", false);
	  }
	  babelHelpers.createClass(AjaxProcessor, [{
	    key: "processCSS",
	    value: function processCSS(block, callback) {
	      if (main_core.Type.isArray(block.CSS) && block.CSS.length > 0) {
	        BX.load(block.CSS, callback);
	      } else {
	        callback();
	      }
	    }
	  }, {
	    key: "processExternalJS",
	    value: function processExternalJS(block, callback) {
	      if (main_core.Type.isArray(block.JS) && block.JS.length > 0) {
	        BX.load(block.JS, callback);
	      } else {
	        callback();
	      }
	    }
	  }, {
	    key: "processAjaxBlockInsertHTML",
	    value: function processAjaxBlockInsertHTML(block, container, callbackExternal) {
	      container.appendChild(BX.create('DIV', {
	        html: block.CONTENT
	      }));
	      this.htmlWasInserted = true;
	      if (this.scriptsLoaded) {
	        this.processInlineJS(block, callbackExternal);
	      }
	    }
	  }, {
	    key: "processInlineJS",
	    value: function processInlineJS(block, callbackExternal) {
	      this.scriptsLoaded = true;
	      if (this.htmlWasInserted) {
	        BX.ajax.processRequestData(block.CONTENT, {
	          scriptsRunFirst: false,
	          dataType: 'HTML'
	        });
	        callbackExternal();
	      }
	    }
	  }]);
	  return AjaxProcessor;
	}();

	var PostForm = /*#__PURE__*/function () {
	  babelHelpers.createClass(PostForm, null, [{
	    key: "setInstance",
	    value: function setInstance(instance) {
	      PostForm.instance = instance;
	    }
	  }, {
	    key: "getInstance",
	    value: function getInstance() {
	      return PostForm.instance;
	    }
	  }]);
	  function PostForm(params) {
	    babelHelpers.classCallCheck(this, PostForm);
	    babelHelpers.defineProperty(this, "lazyLoad", null);
	    babelHelpers.defineProperty(this, "ajaxUrl", '');
	    babelHelpers.defineProperty(this, "inited", false);
	    babelHelpers.defineProperty(this, "loaded", false);
	    babelHelpers.defineProperty(this, "container", null);
	    babelHelpers.defineProperty(this, "containerMicro", null);
	    babelHelpers.defineProperty(this, "containerMicroInner", null);
	    babelHelpers.defineProperty(this, "clickDisabled", false);
	    babelHelpers.defineProperty(this, "lastWait", []);
	    babelHelpers.defineProperty(this, "animationStartHeight", 0);
	    babelHelpers.defineProperty(this, "initedEditorsList", []);
	    babelHelpers.defineProperty(this, "options", {});
	    this.init(params);
	    PostForm.setInstance(this);
	  }
	  babelHelpers.createClass(PostForm, [{
	    key: "setOption",
	    value: function setOption(key, value) {
	      if (!main_core.Type.isStringFilled(key)) {
	        return;
	      }
	      this.options[key] = value;
	    }
	  }, {
	    key: "onShow",
	    value: function onShow() {
	      if (!main_core.Type.isStringFilled(this.options.startVideoRecorder) || this.options.startVideoRecorder !== 'Y') {
	        return;
	      }
	      setTimeout(function () {
	        var editorForm = document.getElementById('divoPostFormLHE_blogPostForm');
	        if (!editorForm) {
	          return;
	        }
	        main_core_events.EventEmitter.emit(editorForm, 'OnShowLHE', new main_core_events.BaseEvent({
	          compatData: ['justShow']
	        }));
	        BX.VideoRecorder.start('blogPostForm', 'post');
	      }, 500);
	    }
	  }, {
	    key: "onSliderClose",
	    value: function onSliderClose() {
	      var sliderInstance = BX.SidePanel.Instance.getTopSlider();
	      if (!sliderInstance) {
	        return;
	      }
	      BX.SidePanel.Instance.postMessageAll(window, 'SidePanel.Wrapper:onClose', {
	        sliderData: sliderInstance.getData()
	      });
	    }
	  }, {
	    key: "init",
	    value: function init(params) {
	      var _this = this;
	      if (this.inited !== true) {
	        this.inited = true;
	        this.lazyLoad = !main_core.Type.isUndefined(params.lazyLoad) ? !!params.lazyLoad : false;
	        this.ajaxUrl = main_core.Type.isStringFilled(params.ajaxUrl) ? params.ajaxUrl : '';
	        this.container = main_core.Type.isDomNode(params.container) ? params.container : null;
	        this.containerMicro = main_core.Type.isDomNode(params.containerMicro) ? params.containerMicro : null;
	        this.containerMicroInner = main_core.Type.isDomNode(params.containerMicroInner) ? params.containerMicroInner : null;
	        this.successPostId = !main_core.Type.isUndefined(params.successPostId) && parseInt(params.successPostId) > 0 ? parseInt(params.successPostId) : 0;

	        //region dnd
	        if (this.containerMicro) {
	          this.containerMicro.setAttribute('dropzone', 'copy f:*\/*');
	          var timerListenEnter = 0;
	          var stopListenEnter = function stopListenEnter(event) {
	            if (timerListenEnter > 0) {
	              clearTimeout(timerListenEnter);
	              timerListenEnter = 0;
	            }
	            event.stopPropagation();
	            event.preventDefault();
	          };
	          var fireDragEnter = function fireDragEnter(event) {
	            stopListenEnter(event);
	            _this.containerMicro.click();
	          };
	          var startListenEnter = function startListenEnter(event) {
	            if (timerListenEnter <= 0) {
	              timerListenEnter = setTimeout(function () {
	                fireDragEnter(event);
	              }, 3000);
	            }
	            event.stopPropagation();
	            event.preventDefault();
	          };
	          this.containerMicro.addEventListener('dragover', startListenEnter);
	          this.containerMicro.addEventListener('dragenter', startListenEnter);
	          this.containerMicro.addEventListener('dragleave', stopListenEnter);
	          this.containerMicro.addEventListener('dragexit', stopListenEnter);
	          this.containerMicro.addEventListener('drop', stopListenEnter);
	        }
	        //region
	      }

	      var sliderInstance = BX.SidePanel.Instance.getTopSlider();
	      if (sliderInstance) {
	        if (this.successPostId > 0) {
	          BX.SidePanel.Instance.postMessage(window, 'Socialnetwork.PostForm:onAdd', {
	            originatorSliderId: sliderInstance.getData().get('sliderId'),
	            successPostId: this.successPostId
	          });
	          BX.SidePanel.Instance.close();
	        } else if (!sliderInstance.getData().get('initialized')) {
	          main_core_events.EventEmitter.subscribe(sliderInstance, 'BX.Socialnetwork.SidePanel.Slider:onClose', this.onSliderClose);
	          sliderInstance.getData().set('initialized', true);
	        }
	      }
	    }
	  }, {
	    key: "get",
	    value: function get(params) {
	      var _this2 = this;
	      if (this.clickDisabled) {
	        return;
	      }
	      if (this.lazyLoad && !this.loaded) {
	        this.clickDisabled = true;
	        this.animationStartHeight = this.containerMicro.offsetHeight;
	        if (main_core.Type.isStringFilled(params.loaderType) && params.loaderType === 'tab') {
	          this.showWaitTab();
	        } else {
	          this.containerMicroInner.style.display = 'none';
	          this.showWait(this.containerMicro);
	        }
	        main_core.ajax({
	          method: 'POST',
	          dataType: 'json',
	          url: this.ajaxUrl,
	          data: {
	            action: 'SBPE_get_full_form',
	            sessid: main_core.Loc.getMessage('bitrix_sessid')
	          },
	          onsuccess: function onsuccess(result) {
	            _this2.loaded = true;
	            _this2.clickDisabled = false;
	            _this2.closeWait();
	            if (result.success) {
	              _this2.processAjaxBlock(result.PROPS, params.callback);
	            }
	          },
	          onfailure: function onfailure() {
	            _this2.clickDisabled = false;
	            _this2.closeWait();
	            _this2.containerMicroInner.style.display = 'block';
	          }
	        });
	      } else if (main_core.Type.isFunction(params.callback)) {
	        params.callback();
	      }
	    }
	  }, {
	    key: "processAjaxBlock",
	    value: function processAjaxBlock(block, callbackExternal) {
	      var _this3 = this;
	      if (!block) {
	        return;
	      }
	      var processor = new AjaxProcessor();
	      processor.processCSS(block, function () {
	        processor.processAjaxBlockInsertHTML(block, _this3.container, callbackExternal);
	      });
	      processor.processExternalJS(block, function () {
	        processor.processInlineJS(block, callbackExternal);
	      });
	    }
	  }, {
	    key: "showWait",
	    value: function showWait(node) {
	      var _this4 = this;
	      var waiterNode = node.bxmsg = document.body.appendChild(main_core.Dom.create('DIV', {
	        props: {
	          id: "wait_".concat(node.id),
	          className: 'feed-add-post-loader-cont'
	        },
	        html: '<svg class="feed-add-post-loader" viewBox="25 25 50 50"><circle class="feed-add-post-loader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"></circle><circle class="feed-add-post-loader-inner-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"></circle></svg>'
	      }));
	      setTimeout(function () {
	        _this4.adjustWait(node);
	      }, 10);
	      this.lastWait.push(waiterNode);
	      return waiterNode;
	    }
	  }, {
	    key: "showWaitTab",
	    value: function showWaitTab() {
	      if (!BX('feed-add-post-more-icon') || !BX('feed-add-post-more-icon-waiter')) {
	        return;
	      }
	      BX('feed-add-post-more-icon').style.display = 'none';
	      BX('feed-add-post-more-icon-waiter').style.display = 'block';
	    }
	  }, {
	    key: "closeWait",
	    value: function closeWait() {
	      var waiterNode = this.containerMicro.bxmsg;
	      if (waiterNode && waiterNode.parentNode) {
	        for (var i = 0, len = this.lastWait.length; i < len; i++) {
	          if (waiterNode === this.lastWait[i]) {
	            this.lastWait = BX.util.deleteFromArray(this.lastWait, i);
	            break;
	          }
	        }
	        waiterNode.parentNode.removeChild(waiterNode);
	        if (this.containerMicro) {
	          this.containerMicro.bxmsg = null;
	        }
	        main_core.Dom.clean(waiterNode);
	        main_core.Dom.remove(waiterNode);
	      }
	      if (BX('feed-add-post-more-icon') && BX('feed-add-post-more-icon-waiter') && BX('feed-add-post-more-icon').style.display === 'none') {
	        BX('feed-add-post-more-icon').style.display = 'block';
	        BX('feed-add-post-more-icon-waiter').style.display = 'none';
	      }
	    }
	  }, {
	    key: "adjustWait",
	    value: function adjustWait(node) {
	      if (!node.bxmsg) {
	        return;
	      }
	      var nodePosition = BX.pos(node);
	      var topDelta = nodePosition.top + 15;
	      if (topDelta < BX.GetDocElement().scrollTop) {
	        topDelta = BX.GetDocElement().scrollTop + 5;
	      }
	      node.bxmsg.style.top = "".concat(topDelta + 5, "px");
	      if (node === BX.GetDocElement()) {
	        node.bxmsg.style.right = '5px';
	      } else {
	        node.bxmsg.style.left = "".concat(nodePosition.left + parseInt((nodePosition.width - node.bxmsg.offsetWidth) / 2), "px");
	      }
	    }
	  }, {
	    key: "tasksTaskEvent",
	    value: function tasksTaskEvent(taskId) {
	      if (!main_core.Reflection.getClass('BX.UI.Notification.Center')) {
	        return;
	      }
	      var taskLink = main_core.Loc.getMessage('PATH_TO_USER_TASKS_TASK').replace('#user_id#', main_core.Loc.getMessage('USER_ID')).replace('#task_id#', taskId).replace('#action#', 'view');
	      window.top.BX.UI.Notification.Center.notify({
	        content: main_core.Loc.getMessage('BLOG_POST_EDIT_T_CREATE_TASK_SUCCESS_TITLE'),
	        actions: [{
	          title: main_core.Loc.getMessage('BLOG_POST_EDIT_T_CREATE_TASK_BUTTON_TITLE'),
	          events: {
	            click: function click(event, balloon, action) {
	              balloon.close();
	              window.top.BX.SidePanel.Instance.open(taskLink);
	            }
	          }
	        }]
	      });
	    }
	  }]);
	  return PostForm;
	}();
	babelHelpers.defineProperty(PostForm, "instance", null);

	function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
	function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
	function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
	var _handleCreateListInSlider = /*#__PURE__*/new WeakSet();
	var PostFormTabs = /*#__PURE__*/function (_EventEmitter) {
	  babelHelpers.inherits(PostFormTabs, _EventEmitter);
	  babelHelpers.createClass(PostFormTabs, null, [{
	    key: "setInstance",
	    value: function setInstance(instance) {
	      PostFormTabs.instance = instance;
	    }
	  }, {
	    key: "getInstance",
	    value: function getInstance() {
	      if (PostFormTabs.instance === null) {
	        new PostFormTabs();
	      }
	      return PostFormTabs.instance;
	    }
	  }]);
	  function PostFormTabs() {
	    var _this;
	    babelHelpers.classCallCheck(this, PostFormTabs);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PostFormTabs).call(this));
	    _classPrivateMethodInitSpec(babelHelpers.assertThisInitialized(_this), _handleCreateListInSlider);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "inited", false);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "tabs", {});
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "bodies", {});
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "active", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "animation", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "animationStartHeight", 0);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "previousTab", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "menu", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "listsMenu", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "menuItems", []);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "lastWait", []);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "clickDisabled", false);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "tabContainer", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "arrow", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "config", {
	      id: {
	        message: 'message',
	        task: 'tasks',
	        calendar: 'calendar',
	        file: 'file',
	        gratitude: 'grat',
	        important: 'important',
	        vote: 'vote',
	        more: 'more',
	        listItem: 'lists'
	      }
	    });
	    _this.setEventNamespace('BX.Socialnetwork.Livefeed.Post.Form.Tabs');
	    _this.init();
	    _this.emit('onInitialized', {
	      tabsInstance: babelHelpers.assertThisInitialized(_this)
	    });
	    PostFormTabs.setInstance(babelHelpers.assertThisInitialized(_this));
	    window.SBPETabs = babelHelpers.assertThisInitialized(_this);
	    return _this;
	  }
	  babelHelpers.createClass(PostFormTabs, [{
	    key: "init",
	    value: function init() {
	      var _this2 = this;
	      this.tabContainer = document.getElementById('feed-add-post-form-tab');
	      this.arrow = document.getElementById('feed-add-post-form-tab-arrow');
	      this.tabs = {};
	      this.bodies = {};
	      var tabsList = this.tabContainer && this.tabContainer.querySelectorAll('span.feed-add-post-form-link');
	      if (tabsList) {
	        for (var i = 0; i < tabsList.length; i++) {
	          var id = tabsList[i].getAttribute('id').replace('feed-add-post-form-tab-', '');
	          var limited = tabsList[i].getAttribute('limited');
	          this.tabs[id] = tabsList[i];
	          if (this.tabs[id].style.display === 'none') {
	            this.menuItems.push({
	              tabId: id,
	              text: tabsList[i].getAttribute('data-name'),
	              className: "menu-popup-no-icon feed-add-post-form-".concat(id, " feed-add-post-form-").concat(id, "-more"),
	              onclick: this.createOnClick(id, tabsList[i].getAttribute('data-name'), tabsList[i].getAttribute('data-onclick'), tabsList[i].getAttribute('data-limited') === 'Y')
	            });
	            this.tabs[id] = this.tabs[id].parentNode;
	          }
	          this.bodies[id] = document.getElementById("feed-add-post-content-".concat(id));
	        }
	      }
	      if (!!this.tabs[this.config.id.file]) {
	        this.bodies[this.config.id.file] = [this.bodies[this.config.id.message]];
	      }
	      if (!!this.tabs[this.config.id.calendar]) {
	        this.bodies[this.config.id.calendar] = [this.bodies[this.config.id.calendar]];
	      }
	      if (!!this.tabs[this.config.id.vote]) {
	        this.bodies[this.config.id.vote] = [this.bodies[this.config.id.message], this.bodies[this.config.id.vote]];
	      }
	      if (!!this.tabs[this.config.id.more]) {
	        this.bodies[this.config.id.more] = null;
	      }
	      if (!!this.tabs[this.config.id.important]) {
	        this.bodies[this.config.id.important] = [this.bodies[this.config.id.message], this.bodies[this.config.id.important]];
	      }
	      if (!!this.tabs[this.config.id.gratitude]) {
	        this.bodies[this.config.id.gratitude] = [this.bodies[this.config.id.message], this.bodies[this.config.id.gratitude]];
	      }
	      if (!!this.tabs[this.config.id.listItem]) {
	        this.bodies[this.config.id.listItem] = [this.bodies[this.config.id.listItem]];
	      }
	      if (!!this.tabs[this.config.id.task]) {
	        this.bodies[this.config.id.task] = [this.bodies[this.config.id.task]];
	      }
	      for (var ii in this.bodies) {
	        if (this.bodies.hasOwnProperty(ii) && main_core.Type.isDomNode(this.bodies[ii])) {
	          this.bodies[ii] = [this.bodies[ii]];
	        }
	      }
	      this.inited = true;
	      this.previousTab = false;
	      var uploadFileNode = document.getElementById('bx-b-uploadfile-blogPostForm');
	      if (uploadFileNode) {
	        uploadFileNode.setAttribute('bx-press', 'pressOut');
	        main_core.Event.bind(uploadFileNode, 'mousedown', function () {
	          uploadFileNode.setAttribute("bx-press", uploadFileNode.getAttribute("bx-press") == "pressOut" ? "pressOn" : "pressOut");
	        });
	      }
	      var form = document.getElementById('blogPostForm');
	      if (!form) {
	        return;
	      }
	      if (!form.changePostFormTab) {
	        form.appendChild(main_core.Dom.create('INPUT', {
	          props: {
	            type: 'hidden',
	            name: 'changePostFormTab',
	            value: ''
	          }
	        }));
	      }
	      this.subscribe('changePostFormTab', function (event) {
	        var _event$getData = event.getData(),
	          type = _event$getData.type;
	        if (type === _this2.config.id.more) {
	          return;
	        }
	        form.changePostFormTab.value = type;
	        if (form['UF_BLOG_POST_IMPRTNT']) {
	          form['UF_BLOG_POST_IMPRTNT'].value = type === _this2.config.id.important ? '1' : '0';
	        }
	      });
	    }
	  }, {
	    key: "createOnClick",
	    value: function createOnClick(id, name, onclick, limited) {
	      var _this3 = this;
	      return function () {
	        var btn = document.getElementById('feed-add-post-form-link-more');
	        var btnText = document.getElementById('feed-add-post-form-link-text');
	        if (!limited) {
	          btnText.innerHTML = name;
	          if (id !== _this3.config.id.listItem) {
	            btn.className = "feed-add-post-form-link feed-add-post-form-link-more feed-add-post-form-link-active feed-add-post-form-".concat(id, "-link");
	            _this3.changePostFormTab(id, false);
	          } else {
	            btn.className = "feed-add-post-form-link feed-add-post-form-link-more feed-add-post-form-".concat(id, "-link");
	          }
	        }
	        if (main_core.Type.isStringFilled(onclick)) {
	          BX.evalGlobal(onclick);
	        }
	        _this3.menu.popupWindow.close();
	      };
	    }
	  }, {
	    key: "changePostFormTab",
	    value: function changePostFormTab(type, iblock) {
	      if (this.clickDisabled) {
	        return false;
	      }
	      return this.setActive(type, iblock);
	    }
	  }, {
	    key: "setActive",
	    value: function setActive(type, iblock) {
	      var _this4 = this;
	      if (main_core.Type.isNull(type) || this.active === type && type !== this.config.id.listItem) {
	        return this.active;
	      } else if (!this.tabs[type]) {
	        return false;
	      }
	      var needAnimation = type !== this.config.id.task || this.isTaskTabLoaded();
	      if (needAnimation) {
	        this.startAnimation();
	      }
	      for (var ii in this.tabs) {
	        if (this.tabs.hasOwnProperty(ii) && ii !== type) {
	          this.tabs[ii].classList.remove('feed-add-post-form-link-active');
	          if (this.bodies[ii] == null || this.bodies[type] == null) {
	            continue;
	          }
	          for (var jj = 0; jj < this.bodies[ii].length; jj++) {
	            if (this.bodies[type][jj] != this.bodies[ii][jj]) {
	              main_core.Dom.adjust(this.bodies[ii][jj], {
	                style: {
	                  display: 'none'
	                }
	              });
	            }
	          }
	        }
	      }
	      if (!!this.tabs[type]) {
	        this.active = type;
	        var tabPosTab = BX.pos(this.tabs[type], true);
	        this.arrow.style.display = 'block';
	        this.arrow.style.top = "".concat(tabPosTab.bottom, "px");
	        var leftStart = parseInt(this.arrow.style.left) || 0;
	        var widthStart = parseInt(this.arrow.style.width) || 0;
	        new BX.easing({
	          duration: 200,
	          start: {
	            left: leftStart,
	            width: widthStart
	          },
	          finish: {
	            left: tabPosTab.left,
	            width: tabPosTab.width
	          },
	          transition: BX.easing.makeEaseInOut(BX.easing.transitions.quart),
	          step: function step(state) {
	            _this4.arrow.style.left = "".concat(state.left, "px");
	            _this4.arrow.style.width = "".concat(state.width, "px");
	          },
	          complete: function complete() {
	            _this4.arrow.style.display = 'none';
	            _this4.tabs[type].classList.add('feed-add-post-form-link-active');
	          }
	        }).animate();
	        if (this.previousTab === this.config.id.file || type === this.config.id.file) {
	          var hasValuesFile = false;
	          var hasValuesDocs = false;
	          var messageBody = document.getElementById('divoPostFormLHE_blogPostForm');
	          if (!!messageBody && !!messageBody.childNodes && messageBody.childNodes.length > 0) {
	            for (var _ii in messageBody.childNodes) {
	              if (!messageBody.childNodes.hasOwnProperty(_ii)) {
	                continue;
	              }
	              var node = messageBody.childNodes[_ii];
	              if (node.className === 'file-selectdialog') {
	                var nodeFile = node;
	                var values1 = nodeFile.querySelector('.file-placeholder-tbody');
	                var values2 = nodeFile.querySelector('.feed-add-photo-block');
	                if (values1.rows > 0 || !!values2 && values2.length > 1) {
	                  hasValuesFile = true;
	                }
	              } else if (main_core.Type.isStringFilled(node.className) && (node.className.indexOf('wduf-selectdialog') >= 0 || node.className.indexOf('diskuf-selectdialog') >= 0) || main_core.Type.isStringFilled(node.id) && node.id.indexOf('disk-uf-file-container') >= 0) {
	                var UserFieldControl = BX.Reflection.getClass('BX.Disk.Uploader.UserFieldControl');
	                if (UserFieldControl === null) {
	                  var nodeDocs = node;
	                  var webdavValues = nodeDocs.querySelectorAll('.wd-inline-file');
	                  hasValuesDocs = !!webdavValues && webdavValues.length > 0;
	                } else {
	                  var userFieldControl = UserFieldControl.getById('blogPostForm');
	                  if (userFieldControl) {
	                    var uploader = userFieldControl.getUploader();
	                    hasValuesDocs = uploader.getFiles().length > 0;
	                  }
	                }
	              } else if (main_core.Type.isDomNode(node) && node.classList && !node.classList.contains('urlpreview') && !node.classList.contains('feed-add-post-strings-blocks')) {
	                main_core.Dom.adjust(node, {
	                  style: {
	                    display: type === this.config.id.file ? 'none' : ''
	                  }
	                });
	              }
	            }
	            if (type === this.config.id.file) {
	              if (!!window['PlEditorblogPostForm'] && !window['PlEditorblogPostForm'].SBPEBinded) {
	                window['PlEditorblogPostForm'].SBPEBinded = true;
	                main_core_events.EventEmitter.subscribe(window["PlEditorblogPostForm"].eventNode, 'onUploadsHasBeenChanged', function (event) {
	                  var wdObj = event.getData()[1];
	                  if (wdObj.dialogName === 'AttachFileDialog' && wdObj.urlUpload.indexOf('&dropped=Y') < 0) {
	                    wdObj.urlUpload = wdObj.agent.uploadFileUrl = wdObj.urlUpload.replace('&random_folder=Y', '&dropped=Y');
	                  }
	                  document.getElementById('bx-b-uploadfile-blogPostForm').setAttribute('bx-press', 'pressOn');
	                  if (_this4.active !== _this4.config.id.file) {
	                    _this4.changePostFormTab(_this4.config.id.message);
	                  }
	                });
	              }
	              window['PlEditorblogPostForm'].controllerInit('show');
	              messageBody.classList.add('feed-add-post-form', 'feed-add-post-edit-form', 'feed-add-post-edit-form-file');
	            } else {
	              messageBody.classList.remove('feed-add-post-form', 'feed-add-post-edit-form', 'feed-add-post-edit-form-file');
	              if (!hasValuesFile && !hasValuesDocs && document.getElementById('bx-b-uploadfile-blogPostForm').getAttribute('bx-press') === 'pressOut' && !!window['PlEditorblogPostForm']) {
	                window['PlEditorblogPostForm'].controllerInit('hide');
	              }
	            }
	          }
	        }
	        var editorForm = document.getElementById('divoPostFormLHE_blogPostForm');
	        if (editorForm && editorForm.style.display === 'none') {
	          main_core_events.EventEmitter.emit(editorForm, 'OnShowLHE', new main_core_events.BaseEvent({
	            compatData: ['justShow']
	          }));
	        }
	        if (type === this.config.id.listItem) {
	          main_core_events.EventEmitter.emit('onDisplayClaimLiveFeed', new main_core_events.BaseEvent({
	            compatData: [iblock]
	          }));
	        }
	        this.previousTab = type;
	        if (!!this.bodies[type]) {
	          for (var _jj = 0; _jj < this.bodies[type].length; _jj++) {
	            if (!!this.bodies[type][_jj]) {
	              main_core.Dom.adjust(this.bodies[type][_jj], {
	                style: {
	                  display: 'block'
	                }
	              });
	            }
	          }
	        }
	      }
	      if (needAnimation) {
	        this.endAnimation();
	      }
	      if (type !== this.config.id.listItem) {
	        this.restoreMoreMenu();
	      }
	      this.emit('changePostFormTab', {
	        type: type
	      });
	      return this.active;
	    }
	  }, {
	    key: "isTaskTabLoaded",
	    value: function isTaskTabLoaded() {
	      var contentContainer = document.getElementById('feed-add-post-content-tasks-container');
	      return contentContainer && contentContainer.children.length;
	    }
	  }, {
	    key: "collapse",
	    value: function collapse() {
	      this.active = null;
	      var postEditSlider = false;
	      var currentSlider = window !== top.window ? BX.SidePanel.Instance.getSliderByWindow(window) : null;
	      if (window !== top.window)
	        // slider
	        {
	          if (currentSlider && currentSlider.url.match(/\/user\/(\d+)\/blog\/edit\//)) {
	            postEditSlider = true;
	          }
	        }
	      if (!postEditSlider) {
	        this.changePostFormTab("message");
	        var formInstance = PostForm.getInstance();
	        if (formInstance && main_core.Type.isDomNode(formInstance.containerMicroInner)) {
	          formInstance.containerMicroInner.style.display = 'block';
	        }
	        this.startAnimation();
	      }
	      var editorForm = document.getElementById('divoPostFormLHE_blogPostForm');
	      if (editorForm) {
	        main_core_events.EventEmitter.emit(editorForm, 'OnShowLHE', new main_core_events.BaseEvent({
	          compatData: [false]
	        }));
	      }
	      main_core_events.EventEmitter.emit('onExtAutoSaveReset_blogPostForm', new main_core_events.BaseEvent({
	        compatData: []
	      }));
	      if (!postEditSlider) {
	        this.endAnimation();
	      } else {
	        if (currentSlider) {
	          main_core_events.EventEmitter.emit(window.top, 'SidePanel.Slider:onClose', new main_core_events.BaseEvent({
	            compatData: [currentSlider.getEvent('onClose')]
	          }));
	        }
	        BX.SidePanel.Instance.close();
	      }
	    }
	  }, {
	    key: "startAnimation",
	    value: function startAnimation() {
	      if (this.animation) {
	        this.animation.stop();
	      }
	      var container = document.getElementById('microblog-form');
	      if (!container) {
	        return;
	      }
	      if (PostForm.getInstance().animationStartHeight > 0) {
	        this.animationStartHeight = PostForm.getInstance().animationStartHeight;
	        PostForm.getInstance().animationStartHeight = 0;
	      } else {
	        this.animationStartHeight = container.parentNode.offsetHeight;
	      }
	      container.parentNode.style.height = "".concat(this.animationStartHeight, "px");
	      container.parentNode.style.overflowY = 'hidden';
	      container.parentNode.style.position = 'relative';
	      container.style.opacity = 0;
	    }
	  }, {
	    key: "endAnimation",
	    value: function endAnimation() {
	      var _this5 = this;
	      var container = document.getElementById('microblog-form');
	      if (!container) {
	        return;
	      }
	      this.animation = new BX.easing({
	        duration: 500,
	        start: {
	          height: this.animationStartHeight,
	          opacity: 0
	        },
	        finish: {
	          height: container.offsetHeight + container.offsetTop,
	          opacity: 100
	        },
	        transition: BX.easing.makeEaseOut(BX.easing.transitions.quart),
	        step: function step(state) {
	          container.parentNode.style.height = "".concat(state.height, "px");
	          container.style.opacity = state.opacity / 100;
	        },
	        complete: function complete() {
	          container.style.cssText = '';
	          container.parentNode.style.cssText = '';
	          _this5.animation = null;
	        }
	      });
	      this.animation.animate();
	    }
	  }, {
	    key: "showMoreMenu",
	    value: function showMoreMenu() {
	      if (!this.menu) {
	        this.menu = main_popup.MenuManager.create('feed-add-post-form-popup', document.getElementById('feed-add-post-form-link-text'), this.menuItems, {
	          className: 'feed-add-post-form-popup',
	          closeByEsc: true,
	          offsetTop: 5,
	          offsetLeft: 3,
	          angle: true
	        });
	      }
	      this.menu.popupWindow.show();
	    }
	  }, {
	    key: "restoreMoreMenu",
	    value: function restoreMoreMenu() {
	      var itemCnt = this.menuItems.length;
	      if (itemCnt < 1) {
	        return;
	      }
	      for (var i = 0; i < itemCnt; i++) {
	        if (this.active === this.menuItems[i]['tabId']) {
	          return;
	        }
	      }
	      var btn = document.getElementById('feed-add-post-form-link-more');
	      var btnText = document.getElementById('feed-add-post-form-link-text');
	      btn.className = 'feed-add-post-form-link feed-add-post-form-link-more';
	      btnText.innerHTML = main_core.Loc.getMessage('SBPE_MORE');
	    }
	  }, {
	    key: "getTaskForm",
	    value: function getTaskForm() {
	      var _this6 = this;
	      var tabContainer = document.getElementById('feed-add-post-form-tab-tasks') && document.getElementById('feed-add-post-form-tab-tasks').style.display !== 'none' ? document.getElementById('feed-add-post-form-tab-tasks') : document.getElementById('feed-add-post-form-link-more');
	      var content = document.getElementById('feed-add-post-content-tasks');
	      var contentContainer = document.getElementById('feed-add-post-content-tasks-container');
	      if (contentContainer && contentContainer.innerHTML.length <= 0 && !this.clickDisabled) {
	        this.clickDisabled = true;
	        PostForm.getInstance().showWait(contentContainer);
	        this.startAnimation();
	        var componentParameters = {
	          GROUP_ID: main_core.Loc.getMessage('TASK_SOCNET_GROUP_ID'),
	          PATH_TO_USER_TASKS: main_core.Loc.getMessage('PATH_TO_USER_TASKS'),
	          PATH_TO_USER_TASKS_TASK: main_core.Loc.getMessage('PATH_TO_USER_TASKS_TASK'),
	          PATH_TO_GROUP_TASKS: main_core.Loc.getMessage('PATH_TO_GROUP_TASKS'),
	          PATH_TO_GROUP_TASKS_TASK: main_core.Loc.getMessage('PATH_TO_GROUP_TASKS_TASK'),
	          PATH_TO_USER_PROFILE: main_core.Loc.getMessage('PATH_TO_USER_PROFILE'),
	          PATH_TO_GROUP: main_core.Loc.getMessage('PATH_TO_GROUP'),
	          PATH_TO_USER_TASKS_PROJECTS_OVERVIEW: main_core.Loc.getMessage('PATH_TO_USER_TASKS_PROJECTS_OVERVIEW'),
	          PATH_TO_USER_TASKS_TEMPLATES: main_core.Loc.getMessage('PATH_TO_USER_TASKS_TEMPLATES'),
	          PATH_TO_USER_TEMPLATES_TEMPLATE: main_core.Loc.getMessage('PATH_TO_USER_TEMPLATES_TEMPLATE'),
	          ENABLE_FOOTER: 'N',
	          TEMPLATE_CONTROLLER_ID: 'livefeed_task_form',
	          ENABLE_FORM: 'N',
	          BACKURL: main_core.Loc.getMessage('TASK_SUBMIT_BACKURL')
	        };
	        main_core.ajax.runComponentAction('bitrix:tasks.task', 'uiEdit', {
	          mode: 'class',
	          data: {
	            parameters: {
	              COMPONENT_PARAMETERS: componentParameters
	            }
	          },
	          analytics: {
	            tool: 'tasks',
	            category: 'task_operations',
	            event: 'click_create',
	            type: 'task',
	            c_section: 'feed',
	            c_element: 'create_button'
	          }
	        }).then(function (response) {
	          main_core.Runtime.html(contentContainer, response.data.html).then(function () {
	            _this6.clickDisabled = false;
	            _this6.closeWait(contentContainer);
	            _this6.endAnimation();
	            main_core_events.EventEmitter.emit(document.getElementById('divlivefeed_task_form'), 'OnShowLHE', new main_core_events.BaseEvent({
	              compatData: ['justShow']
	            }));
	          });
	          main_core.Dom.adjust(content, {
	            style: {
	              display: 'block'
	            }
	          });
	        }, function (response) {
	          _this6.clickDisabled = false;
	          _this6.closeWait(contentContainer);
	          _this6.endAnimation();
	          if (response.errors && response.errors.length) {
	            var errors = [];
	            response.errors.forEach(function (error) {
	              errors.push(error.message);
	            });
	            throw new Error(errors.join(' '));
	          }
	        });
	      } else {
	        this.startAnimation();
	        this.endAnimation();
	      }
	    }
	  }, {
	    key: "closeWait",
	    value: function closeWait(node) {
	      var waiterNode = node.bxmsg;
	      if (waiterNode && waiterNode.parentNode) {
	        for (var i = 0, len = this.lastWait.length; i < len; i++) {
	          if (waiterNode === this.lastWait[i]) {
	            this.lastWait = BX.util.deleteFromArray(this.lastWait, i);
	            break;
	          }
	        }
	        waiterNode.parentNode.removeChild(waiterNode);
	        if (node) {
	          node.bxmsg = null;
	        }
	        main_core.Dom.clean(waiterNode);
	        main_core.Dom.remove(waiterNode);
	      }
	    }
	  }, {
	    key: "getLists",
	    value: function getLists() {
	      var _this7 = this;
	      var tabContainer = document.getElementById('feed-add-post-form-tab-lists') && document.getElementById('feed-add-post-form-tab-lists').style.display !== 'none' ? document.getElementById('feed-add-post-form-tab-lists') : document.getElementById('feed-add-post-form-link-more');
	      var tabs = tabContainer.querySelectorAll('span.feed-add-post-form-link-lists');
	      var tabsDefault = tabContainer.querySelectorAll('span.feed-add-post-form-link-lists-default');
	      var menuItemsListsDefault = [];
	      var menuItemsLists = [];
	      var canOpenInSlider = false;
	      if (tabs.length > 0) {
	        menuItemsLists = this.getMenuItems(tabs, canOpenInSlider ? _classPrivateMethodGet(this, _handleCreateListInSlider, _handleCreateListInSlider2).bind(this) : this.createOnclickLists);
	        menuItemsListsDefault = this.getMenuItemsDefault(tabsDefault);
	        menuItemsLists = menuItemsLists.concat(menuItemsListsDefault);
	        this.showMoreMenuLists(menuItemsLists);
	      } else {
	        var siteId = null;
	        if (document.getElementById('bx-lists-select-site-id')) {
	          siteId = document.getElementById('bx-lists-select-site-id').value;
	        }
	        main_core.ajax({
	          method: 'POST',
	          dataType: 'json',
	          url: '/bitrix/components/bitrix/socialnetwork.blog.post.edit/post.ajax.php',
	          data: {
	            bitrix_processes: 1,
	            siteId: siteId,
	            sessid: main_core.Loc.getMessage('bitrix_sessid')
	          },
	          onsuccess: function onsuccess(result) {
	            if (result.success) {
	              canOpenInSlider = main_core.Text.toBoolean(result.canOpenInSlider);
	              for (var k in result.lists) {
	                if (!result.lists.hasOwnProperty(k)) {
	                  continue;
	                }
	                tabContainer.appendChild(main_core.Dom.create('span', {
	                  attrs: {
	                    'data-name': result.lists[k].NAME,
	                    'data-picture': result.lists[k].PICTURE,
	                    'data-description': result.lists[k].DESCRIPTION,
	                    'data-picture-small': result.lists[k].PICTURE_SMALL,
	                    'data-code': result.lists[k].CODE,
	                    iblockId: result.lists[k].ID,
	                    iblockTypeId: result.lists[k].IBLOCK_TYPE_ID
	                  },
	                  props: {
	                    className: 'feed-add-post-form-link-lists',
	                    id: 'feed-add-post-form-tab-lists'
	                  },
	                  style: {
	                    display: 'none'
	                  }
	                }));
	              }
	              tabs = tabContainer.querySelectorAll('span.feed-add-post-form-link-lists');
	              menuItemsLists = _this7.getMenuItems(tabs, canOpenInSlider ? _classPrivateMethodGet(_this7, _handleCreateListInSlider, _handleCreateListInSlider2).bind(_this7) : _this7.createOnclickLists);
	              if (!tabsDefault.length) {
	                for (var _k in result.permissions) {
	                  if (!result.permissions.hasOwnProperty(_k)) {
	                    continue;
	                  }
	                  var onclick = void 0;
	                  if (_k === 'new') {
	                    onclick = "document.location.href = \"".concat(document.getElementById('bx-lists-lists-page').value, "0/edit/\"");
	                  } else if (_k === 'market') {
	                    if (result.admin && document.getElementById('bx-lists-lists-page')) {
	                      onclick = "document.location.href = \"".concat(document.getElementById('bx-lists-lists-page').value, "?bp_catalog=y\"");
	                    } else {
	                      if (document.getElementById('bx-lists-random-string')) {
	                        onclick = "BX.Lists[\"LiveFeedClass_".concat(BX('bx-lists-random-string').value, "\"].errorPopup(\"").concat(main_core.Loc.getMessage('LISTS_CATALOG_PROCESSES_ACCESS_DENIED'), "\");");
	                      }
	                    }
	                  } else if (_k === 'settings') {
	                    onclick = "document.location.href = \"".concat(BX('bx-lists-lists-page').value, "\"");
	                  }
	                  tabContainer.appendChild(main_core.Dom.create('span', {
	                    attrs: {
	                      'data-name': result.permissions[_k],
	                      'data-picture-small': '',
	                      'data-key': _k,
	                      'data-onclick': onclick
	                    },
	                    props: {
	                      className: 'feed-add-post-form-link-lists-default',
	                      id: 'feed-add-post-form-tab-lists'
	                    },
	                    style: {
	                      display: 'none'
	                    }
	                  }));
	                }
	                tabsDefault = tabContainer.querySelectorAll('span.feed-add-post-form-link-lists-default');
	              }
	              menuItemsListsDefault = _this7.getMenuItemsDefault(tabsDefault);
	              menuItemsLists = menuItemsLists.concat(menuItemsListsDefault);
	              _this7.showMoreMenuLists(menuItemsLists);
	            } else {
	              tabContainer.appendChild(main_core.Dom.create('span', {
	                attrs: {
	                  'data-name': result.error,
	                  'data-picture-small': ''
	                },
	                props: {
	                  className: 'feed-add-post-form-link-lists-default',
	                  id: 'feed-add-post-form-tab-lists'
	                },
	                style: {
	                  display: 'none'
	                }
	              }));
	              tabs = tabContainer.querySelectorAll('span.feed-add-post-form-link-lists-default');
	              menuItemsLists = _this7.getMenuItems(tabs, false);
	              _this7.showMoreMenuLists(menuItemsLists);
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: "clickStartWorkflowButton",
	    value: function clickStartWorkflowButton() {
	      var _this8 = this;
	      main_core.Runtime.loadExtension('bizproc.router').then(function (_ref) {
	        var Router = _ref.Router;
	        if (main_core.Type.isFunction(Router.openUserProcessesStart)) {
	          var options = {
	            requestMethod: 'get',
	            requestParams: {
	              apply_filter: 'Y',
	              LIVEFEED_PRESET: 'show_livefeed'
	            },
	            events: {
	              onCloseStart: function onCloseStart() {
	                if (BX.Livefeed && BX.Livefeed.PageInstance) {
	                  BX.Livefeed.PageInstance.refresh();
	                } else {
	                  window.location.reload();
	                }
	              }
	            }
	          };
	          Router.openUserProcessesStart(options);
	        } else {
	          _this8.getLists(); // TODO delete in future version
	        }
	      })["catch"](function (e) {
	        return console.error(e);
	      });
	    }
	  }, {
	    key: "getMenuItems",
	    value: function getMenuItems(tabs, createOnclickLists) {
	      var menuItemsLists = [];
	      for (var i = 0; i < tabs.length; i++) {
	        var id = tabs[i].getAttribute('id').replace('feed-add-post-form-tab-', '');
	        if (createOnclickLists) {
	          menuItemsLists.push({
	            tabId: id,
	            text: BX.util.htmlspecialchars(tabs[i].getAttribute('data-name')),
	            className: "feed-add-post-form-".concat(id, " feed-add-post-form-").concat(id, "-item"),
	            onclick: createOnclickLists(id, [tabs[i].getAttribute('iblockId'), tabs[i].getAttribute('data-name'), tabs[i].getAttribute('data-description'), tabs[i].getAttribute('data-picture'), tabs[i].getAttribute('data-code'), tabs[i].getAttribute('iblockTypeId')])
	          });
	        } else {
	          menuItemsLists.push({
	            tabId: id,
	            text: tabs[i].getAttribute('data-name'),
	            className: "feed-add-post-form-".concat(id),
	            onclick: ''
	          });
	        }
	      }
	      return menuItemsLists;
	    }
	  }, {
	    key: "getMenuItemsDefault",
	    value: function getMenuItemsDefault(tabs) {
	      var menuItemsLists = [];
	      for (var i = 0; i < tabs.length; i++) {
	        menuItemsLists.push({
	          text: BX.util.htmlspecialchars(tabs[i].getAttribute('data-name')),
	          className: "feed-add-post-form-lists-default-".concat(tabs[i].getAttribute('data-key')),
	          onclick: tabs[i].getAttribute('data-onclick')
	        });
	      }
	      return menuItemsLists;
	    }
	  }, {
	    key: "showMoreMenuLists",
	    value: function showMoreMenuLists(menuItemsLists) {
	      var menuBindElement = document.getElementById('feed-add-post-form-tab-lists').style.display !== 'none' ? document.getElementById('feed-add-post-form-tab-lists') : document.getElementById('feed-add-post-form-link-more');
	      this.listsMenu = main_popup.MenuManager.create('lists', menuBindElement, menuItemsLists, {
	        closeByEsc: true,
	        offsetTop: 5,
	        offsetLeft: 12,
	        angle: true
	      });
	      var spanIcon = document.getElementById('popup-window-content-menu-popup-lists').querySelectorAll('span.menu-popup-item-icon');
	      var spanDataPicture = menuBindElement.querySelectorAll('span.feed-add-post-form-link-lists');
	      var spanDataPictureDefault = menuBindElement.querySelectorAll('span.feed-add-post-form-link-lists-default');
	      spanDataPicture = Array.from(spanDataPicture).concat(Array.from(spanDataPictureDefault));
	      for (var i = 0; i < spanIcon.length; i++) {
	        if (!spanDataPicture[i].getAttribute('data-picture-small')) {
	          continue;
	        }
	        spanIcon[i].innerHTML = spanDataPicture[i].getAttribute('data-picture-small');
	      }
	      if (!this.listsMenu.popupWindow.isShown()) {
	        main_core.Runtime.loadExtension('ui.analytics').then(function (_ref2) {
	          var sendData = _ref2.sendData;
	          sendData({
	            tool: 'automation',
	            category: 'bizproc_operations',
	            event: 'drawer_open',
	            c_section: 'feed',
	            c_element: 'button'
	          });
	        })["catch"](function () {});
	      }
	      this.listsMenu.popupWindow.show();
	    }
	  }, {
	    key: "createOnclickLists",
	    value: function createOnclickLists(id, iblock) {
	      return function () {
	        PostFormTabs.getInstance().changePostFormTab(id, iblock);
	        PostFormTabs.getInstance().listsMenu.popupWindow.close();
	        PostFormTabs.getInstance().menu.popupWindow.close();
	      };
	    }
	  }]);
	  return PostFormTabs;
	}(main_core_events.EventEmitter);
	function _handleCreateListInSlider2(id, iblock) {
	  var _this9 = this;
	  return function () {
	    main_core.Runtime.loadExtension('lists.element.creation-guide').then(function (_ref3) {
	      var CreationGuide = _ref3.CreationGuide;
	      if (CreationGuide) {
	        PostFormTabs.getInstance().listsMenu.popupWindow.close();
	        PostFormTabs.getInstance().menu.popupWindow.close();
	        CreationGuide.open({
	          iBlockTypeId: iblock[5],
	          iBlockId: main_core.Text.toInteger(iblock[0]),
	          analyticsSection: 'feed',
	          analyticsP1: iblock[1],
	          onClose: function onClose() {
	            if (BX.Livefeed && BX.Livefeed.PageInstance) {
	              BX.Livefeed.PageInstance.refresh();
	            } else {
	              window.location.reload();
	            }
	          }
	        });
	        return;
	      }
	      _this9.createOnclickLists(id, iblock)();
	    })["catch"](function () {
	      _this9.createOnclickLists(id, iblock)();
	    });
	  };
	}
	babelHelpers.defineProperty(PostFormTabs, "instance", null);

	var PostFormDateEnd = /*#__PURE__*/function () {
	  function PostFormDateEnd() {
	    babelHelpers.classCallCheck(this, PostFormDateEnd);
	    babelHelpers.defineProperty(this, "isInitialized", false);
	    babelHelpers.defineProperty(this, "popupShowingPeriods", null);
	    babelHelpers.defineProperty(this, "menuItems", []);
	    babelHelpers.defineProperty(this, "customDateStyleModifier", 'feed-add-post-expire-date-customize');
	    babelHelpers.defineProperty(this, "customDatePopupOptionClass", 'js-custom-date-end');
	    babelHelpers.defineProperty(this, "postExpireDateBlock", null);
	    babelHelpers.defineProperty(this, "formUfInputDateCustom", null);
	    babelHelpers.defineProperty(this, "formDateDuration", null);
	    babelHelpers.defineProperty(this, "formDateTimeEditing", null);
	    babelHelpers.defineProperty(this, "popupTrigger", null);
	    babelHelpers.defineProperty(this, "customDateSelectedTitle", null);
	    babelHelpers.defineProperty(this, "selectors", {
	      postExpireDateBlock: '.js-post-expire-date-block',
	      postEndTime: '.js-form-post-end-time',
	      postEditingEndTime: '.js-form-editing-post-end-time',
	      postEndPeriod: '.js-form-post-end-period',
	      popupTrigger: '.js-important-till-popup-trigger',
	      customDateFinal: '.js-date-post-showing-custom',
	      durationOptionsContainer: '.js-post-showing-duration-options-container',
	      durationOption: '.js-post-showing-duration-option'
	    });
	    this.init();
	  }
	  babelHelpers.createClass(PostFormDateEnd, [{
	    key: "init",
	    value: function init() {
	      if (this.isInitialized) {
	        return;
	      }
	      this.addEventHandlers();
	      if (!this.formDateTimeEditing.value) {
	        this.customDateSelectedTitle.innerText = this.getCurrentDate();
	      }
	      this.isInitialized = true;
	    }
	  }, {
	    key: "addEventHandlers",
	    value: function addEventHandlers() {
	      var _this = this;
	      this.postExpireDateBlock = document.querySelector(this.selectors.postExpireDateBlock);
	      this.formUfInputDateCustom = document.querySelector(this.selectors.postEndTime);
	      this.formDateDuration = document.querySelector(this.selectors.postEndPeriod);
	      this.formDateTimeEditing = document.querySelector(this.selectors.postEditingEndTime);
	      this.popupTrigger = document.querySelector(this.selectors.popupTrigger);
	      if (this.popupTrigger) {
	        this.popupTrigger.addEventListener('click', function () {
	          _this.showPostEndPeriodsPopup();
	        });
	      }
	      this.customDateSelectedTitle = document.querySelector(this.selectors.customDateFinal);
	      if (this.customDateSelectedTitle) {
	        this.customDateSelectedTitle.addEventListener('click', function () {
	          var curDate = new Date();
	          var curTimestamp = Math.round(curDate / 1000) - curDate.getTimezoneOffset() * 60;
	          if (_this.formDateTimeEditing.value) {
	            curDate = BX.parseDate(_this.formDateTimeEditing.value);
	            curTimestamp = BX.date.convertToUTC(curDate);
	          }
	          BX.calendar({
	            node: _this.customDateSelectedTitle,
	            form: 'blogPostForm',
	            value: curTimestamp,
	            bTime: false,
	            callback: function callback() {
	              return true;
	            },
	            callback_after: _this.onEndDateSet.bind(_this)
	          });
	        });
	      }
	    }
	  }, {
	    key: "showPostEndPeriodsPopup",
	    value: function showPostEndPeriodsPopup() {
	      if (!this.popupShowingPeriods) {
	        this.createPopupShowingPeriods();
	      }
	      this.popupShowingPeriods.popupWindow.show();
	    }
	  }, {
	    key: "createPopupShowingPeriods",
	    value: function createPopupShowingPeriods() {
	      if (this.menuItems.length <= 0) {
	        this.menuItems = this.createPopupItems();
	      }
	      this.popupShowingPeriods = main_popup.MenuManager.create('feed-add-post-form-popup42', document.getElementById('js-post-expire-date-wrapper'), this.menuItems, {
	        className: "feed-add-post-expire-date-options",
	        closeByEsc: true,
	        angle: true
	      });
	    }
	  }, {
	    key: "createPopupItems",
	    value: function createPopupItems() {
	      var _this2 = this;
	      var menuPostDurationItems = [];
	      var selectOptions = document.querySelector(this.selectors.durationOptionsContainer).querySelectorAll(this.selectors.durationOption);
	      if (!selectOptions) {
	        return menuPostDurationItems;
	      }
	      selectOptions.forEach(function (element) {
	        menuPostDurationItems.push({
	          onclick: _this2.onPopupItemClick.bind(_this2),
	          dataset: {
	            value: element.getAttribute('data-value'),
	            "class": element.getAttribute('data-class')
	          },
	          text: element.getAttribute('data-text'),
	          className: "menu-popup-item menu-popup-no-icon ".concat(element.getAttribute('data-class'))
	        });
	      });
	      return menuPostDurationItems;
	    }
	  }, {
	    key: "onPopupItemClick",
	    value: function onPopupItemClick(event) {
	      var element = event.currentTarget;
	      if (element.getAttribute('data-class') === this.customDatePopupOptionClass) {
	        this.postExpireDateBlock.classList.add(this.customDateStyleModifier);
	        if (this.formDateTimeEditing.value) {
	          this.formUfInputDateCustom.value = this.formDateTimeEditing.value;
	          this.customDateSelectedTitle.innerText = this.formDateTimeEditing.value;
	        } else {
	          this.formUfInputDateCustom.value = this.getCurrentDate();
	        }
	      } else {
	        this.postExpireDateBlock.classList.remove(this.customDateStyleModifier);
	        this.formUfInputDateCustom.value = null;
	      }
	      this.popupTrigger.innerText = element.innerText.toLowerCase();
	      this.formDateDuration.value = element.getAttribute('data-value').toUpperCase();
	      this.popupShowingPeriods.popupWindow.close();
	    }
	  }, {
	    key: "onEndDateSet",
	    value: function onEndDateSet(value) {
	      if (!value) {
	        return;
	      }
	      this.formDateTimeEditing.value = this.getFormattedDate(value);
	      this.formUfInputDateCustom.value = this.getFormattedDate(value);
	      this.customDateSelectedTitle.innerText = this.getFormattedDate(value);
	    }
	  }, {
	    key: "getFormattedDate",
	    value: function getFormattedDate(value) {
	      return BX.date.format(BX.date.convertBitrixFormat(main_core.Loc.getMessage('FORMAT_DATE')), value);
	    }
	  }, {
	    key: "getCurrentDate",
	    value: function getCurrentDate() {
	      return this.getFormattedDate(new Date());
	    }
	  }]);
	  return PostFormDateEnd;
	}();

	var PostFormGratSelector = /*#__PURE__*/function (_EventEmitter) {
	  babelHelpers.inherits(PostFormGratSelector, _EventEmitter);
	  babelHelpers.createClass(PostFormGratSelector, null, [{
	    key: "setInstance",
	    value: function setInstance(instance) {
	      PostFormGratSelector.instance = instance;
	    }
	  }, {
	    key: "getInstance",
	    value: function getInstance() {
	      return PostFormGratSelector.instance;
	    }
	  }]);
	  function PostFormGratSelector(params) {
	    var _this;
	    babelHelpers.classCallCheck(this, PostFormGratSelector);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PostFormGratSelector).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "popupWindow", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "sendEvent", true);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "gratsContentElement", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "itemSelectedImageItem", {});
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "itemSelectedInput", {});
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "gratsList", {});
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "selector", null);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "config", {
	      fields: {
	        employeesValue: {
	          name: 'GRAT_DEST_DATA'
	        }
	      }
	    });
	    _this.init(params);
	    PostFormGratSelector.setInstance(babelHelpers.assertThisInitialized(_this));
	    return _this;
	  }
	  babelHelpers.createClass(PostFormGratSelector, [{
	    key: "init",
	    value: function init(params) {
	      var _this2 = this;
	      if (!params.name) {
	        params.name = 'lm';
	      }
	      this.itemSelectedImageItem[params.name] = params.itemSelectedImageItem;
	      this.itemSelectedInput[params.name] = params.itemSelectedInput;
	      this.gratsList[params.name] = params.gratsList;
	      this.itemSelectedImageItem[params.name].addEventListener('click', function (e) {
	        _this2.openDialog(params.name);
	        e.preventDefault();
	      });
	      this.createEntitySelector(params.entitySelectorParams);
	    }
	  }, {
	    key: "openDialog",
	    value: function openDialog(name) {
	      var _this3 = this;
	      if (!name) {
	        name = 'lm';
	      }
	      if (this.popupWindow != null) {
	        this.popupWindow.close();
	        return false;
	      }
	      var gratItems = [];
	      for (var i = 0; i < this.gratsList[name].length; i++) {
	        gratItems[gratItems.length] = main_core.Dom.create('span', {
	          props: {
	            className: "feed-add-grat-box ".concat(this.gratsList[name][i].style)
	          },
	          attrs: {
	            'data-title': this.gratsList[name][i].title,
	            'data-code': this.gratsList[name][i].code,
	            'data-style': this.gratsList[name][i].style
	          },
	          events: {
	            click: function click(e) {
	              var node = e.currentTarget;
	              _this3.selectItem(name, node.getAttribute('data-code'), node.getAttribute('data-style'), node.getAttribute('data-title'));
	              e.preventDefault();
	            }
	          }
	        });
	      }
	      var gratRows = [];
	      var rownum = 1;
	      for (var _i = 0; _i < gratItems.length; _i++) {
	        if (_i >= gratItems.length / 2) {
	          rownum = 2;
	        }
	        if (main_core.Type.isNil(gratRows[rownum])) {
	          gratRows[rownum] = main_core.Dom.create('div', {
	            props: {
	              className: 'feed-add-grat-list-row'
	            }
	          });
	        }
	        gratRows[rownum].appendChild(gratItems[_i]);
	      }
	      this.gratsContentElement = main_core.Dom.create('div', {
	        children: [main_core.Dom.create('div', {
	          props: {
	            className: 'feed-add-grat-list-title'
	          },
	          html: main_core.Loc.getMessage('BLOG_GRAT_POPUP_TITLE')
	        }), main_core.Dom.create('div', {
	          props: {
	            className: 'feed-add-grat-list'
	          },
	          children: gratRows
	        })]
	      });
	      this.popupWindow = new main_popup.Popup('BXSocNetGratSelector', document.getElementById('feed-add-post-grat-type-selected'), {
	        autoHide: true,
	        offsetLeft: 25,
	        bindOptions: {
	          forceBindPosition: true
	        },
	        closeByEsc: true,
	        closeIcon: {
	          top: '5px',
	          right: '10px'
	        },
	        events: {
	          onPopupClose: function onPopupClose() {
	            _this3.popupWindow.destroy();
	          },
	          onPopupDestroy: function onPopupDestroy() {
	            _this3.popupWindow = null;
	          }
	        },
	        content: this.gratsContentElement,
	        angle: {
	          position: 'bottom',
	          offset: 20
	        },
	        lightShadow: true
	      });
	      this.popupWindow.setAngle({});
	      this.popupWindow.show();
	      return true;
	    }
	  }, {
	    key: "selectItem",
	    value: function selectItem(name, code, style, title) {
	      var gratSpan = this.itemSelectedImageItem[name].querySelector('span');
	      if (gratSpan) {
	        gratSpan.className = "feed-add-grat-box ".concat(style);
	      }
	      this.itemSelectedImageItem[name].title = title;
	      this.itemSelectedInput[name].value = code;
	      this.popupWindow.close();
	    }
	  }, {
	    key: "createEntitySelector",
	    value: function createEntitySelector(params) {
	      var _this4 = this;
	      this.selector = new ui_entitySelector.TagSelector({
	        id: params.id,
	        dialogOptions: {
	          id: params.id,
	          context: 'GRATITUDE',
	          preselectedItems: main_core.Type.isArray(params.preselectedItems) ? params.preselectedItems : [],
	          events: {
	            'Item:onSelect': function ItemOnSelect(event) {
	              _this4.recalcValue(event.getTarget().getSelectedItems(), params.inputNodeId);
	            },
	            'Item:onDeselect': function ItemOnDeselect(event) {
	              _this4.recalcValue(event.getTarget().getSelectedItems(), params.inputNodeId);
	            }
	          },
	          entities: [{
	            id: 'user',
	            options: {
	              emailUsers: false,
	              inviteEmployeeLink: false,
	              intranetUsersOnly: true
	            }
	          }, {
	            id: 'department',
	            options: {
	              selectMode: 'usersOnly'
	            }
	          }]
	        },
	        addButtonCaption: main_core.Loc.getMessage('BLOG_GRATMEDAL_1'),
	        addButtonCaptionMore: main_core.Loc.getMessage('BLOG_GRATMEDAL_1')
	      });
	      this.selector.renderTo(document.getElementById(params.tagNodeId));
	      this.selector.subscribe('onContainerClick', function () {
	        _this4.emit('Selector::onContainerClick');
	      });
	    }
	  }, {
	    key: "recalcValue",
	    value: function recalcValue(selectedItems, inputNodeId) {
	      if (!main_core.Type.isArray(selectedItems) || !document.getElementById(inputNodeId)) {
	        return;
	      }
	      var result = [];
	      selectedItems.forEach(function (item) {
	        result.push([item.entityId, item.id]);
	      });
	      document.getElementById(inputNodeId).value = JSON.stringify(result);
	    }
	  }]);
	  return PostFormGratSelector;
	}(main_core_events.EventEmitter);
	babelHelpers.defineProperty(PostFormGratSelector, "instance", null);

	var PostFormEditor = /*#__PURE__*/function (_EventEmitter) {
	  babelHelpers.inherits(PostFormEditor, _EventEmitter);
	  babelHelpers.createClass(PostFormEditor, null, [{
	    key: "setInstance",
	    value: function setInstance(id, instance) {
	      PostFormEditor.instance[id] = instance;
	    }
	  }, {
	    key: "getInstance",
	    value: function getInstance(id) {
	      return PostFormEditor.instance[id];
	    }
	  }]);
	  function PostFormEditor(formID, params) {
	    var _this;
	    babelHelpers.classCallCheck(this, PostFormEditor);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PostFormEditor).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "disabled", false);
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "formId", '');
	    _this.init(formID, params);
	    PostFormEditor.setInstance(formID, babelHelpers.assertThisInitialized(_this));
	    window['setBlogPostFormSubmitted'] = _this.setBlogPostFormSubmitted.bind(babelHelpers.assertThisInitialized(_this));
	    window['submitBlogPostForm'] = _this.submitBlogPostForm.bind(babelHelpers.assertThisInitialized(_this));
	    return _this;
	  }
	  babelHelpers.createClass(PostFormEditor, [{
	    key: "init",
	    value: function init(formID, params) {
	      var _this2 = this;
	      this.disabled = false;
	      this.formId = formID;
	      this.formParams = {
	        editorID: params.editorID,
	        showTitle: !!params.showTitle,
	        submitted: false,
	        text: params.text,
	        autoSave: params.autoSave,
	        handler: LHEPostForm && LHEPostForm.getHandler(params.editorID),
	        editor: LHEPostForm && LHEPostForm.getEditor(params.editorID),
	        restoreAutosave: !!params.restoreAutosave,
	        createdFromEmail: !!params.createdFromEmail
	      };
	      var currentUri = new main_core.Uri(location.toString());
	      var getTextFromHash = currentUri.getQueryParam('getTextFromHash') === 'Y';
	      if (!main_core.Type.isStringFilled(this.formParams.text) && getTextFromHash) {
	        this.formParams.textFromHash = decodeURIComponent(currentUri.getFragment());
	        history.replaceState(null, null, ' ');
	      }
	      main_core_events.EventEmitter.subscribe('onInitialized', function (event) {
	        var _event$getData = event.getData(),
	          _event$getData2 = babelHelpers.slicedToArray(_event$getData, 2),
	          obj = _event$getData2[0],
	          form = _event$getData2[1];
	        _this2.onHandlerInited(obj, form);
	      });
	      if (this.formParams.handler) {
	        this.onHandlerInited(this.formParams.handler, formID);
	      }
	      main_core_events.EventEmitter.subscribe('OnEditorInitedAfter', function (event) {
	        var _event$getData3 = event.getData(),
	          _event$getData4 = babelHelpers.slicedToArray(_event$getData3, 1),
	          editor = _event$getData4[0];
	        _this2.onEditorInited(editor);
	      });
	      if (this.formParams.editor) {
	        this.onEditorInited(this.formParams.editor);
	      }
	      main_core_events.EventEmitter.subscribe('onSocNetLogMoveBody', function (event) {
	        var _event$getData5 = event.getData(),
	          _event$getData6 = babelHelpers.slicedToArray(_event$getData5, 1),
	          p = _event$getData6[0];
	        if (p === 'sonet_log_microblog_container') {
	          _this2.reinit();
	        }
	      });
	      main_core.Event.ready(function () {
	        if (main_core.Browser.isIE() && document.getElementById('POST_TITLE')) {
	          var showTitlePlaceholderBlur = function showTitlePlaceholderBlur() {
	            var node = document.getElementById('POST_TITLE');
	            if (!node || node.value === node.getAttribute('placeholder')) {
	              node.value = node.getAttribute('placeholder');
	              node.classList.remove('feed-add-post-inp-active');
	            }
	          };
	          main_core.Event.bind(document.getElementById('POST_TITLE'), 'blur', showTitlePlaceholderBlur);
	          showTitlePlaceholderBlur();
	          document.getElementById('POST_TITLE').__onchange = function (e) {
	            var node = document.getElementById('POST_TITLE');
	            if (node.value === node.getAttribute('placeholder')) {
	              node.value = '';
	            }
	            if (node.className.indexOf('feed-add-post-inp-active') < 0) {
	              node.classList.add('feed-add-post-inp-active');
	            }
	          };
	          main_core.Event.bind(document.getElementById('POST_TITLE'), 'click', document.getElementById('POST_TITLE').__onchange);
	          main_core.Event.bind(document.getElementById('POST_TITLE'), 'keydown', document.getElementById('POST_TITLE').__onchange);
	          main_core.Event.bind(document.getElementById('POST_TITLE').form, 'submit', function () {
	            var node = document.getElementById('POST_TITLE');
	            if (node.value === node.getAttribute('placeholder')) {
	              node.value = '';
	            }
	          });
	        }
	        if (params.activeTab !== '') {
	          PostFormTabs.getInstance().changePostFormTab(params.activeTab);
	        }
	        PostFormTabs.getInstance().subscribe('changePostFormTab', _this2.checkHideAlert.bind(_this2));
	        if (PostFormGratSelector.getInstance()) {
	          PostFormGratSelector.getInstance().subscribe('Selector::onContainerClick', _this2.hideAlert.bind(_this2));
	        }
	      });
	    }
	  }, {
	    key: "showPanelTitle",
	    value: function showPanelTitle(show, saveChanges) {
	      show = show === true || show === false ? show : document.getElementById('blog-title').style.display && document.getElementById('blog-title').style.display === 'none';
	      saveChanges = saveChanges !== false;
	      var showTitleValue = this.formParams.showTitle;
	      var node = document.getElementById("lhe_button_title_".concat(this.formId));
	      var nodeBlock = document.getElementById("feed-add-post-block".concat(this.formId));
	      var stv = document.getElementById('show_title') || {};
	      if (show) {
	        BX.show(document.getElementById('blog-title'));
	        if (document.getElementById('POST_TITLE')) {
	          document.getElementById('POST_TITLE').focus();
	        }
	        this.formParams.showTitle = true;
	        stv.value = 'Y';
	        if (node) {
	          node.classList.add('feed-add-post-form-btn-active');
	        }
	        if (nodeBlock) {
	          nodeBlock.classList.add('blog-post-edit-open');
	        }
	      } else {
	        BX.hide(document.getElementById('blog-title'));
	        this.formParams.showTitle = false;
	        stv.value = "N";
	        if (node) {
	          node.classList.remove('feed-add-post-form-btn-active');
	        }
	      }
	      if (saveChanges) {
	        BX.userOptions.save('socialnetwork', 'postEdit', 'showTitle', this.formParams.showTitle ? 'Y' : 'N');
	      } else {
	        this.formParams.showTitle = showTitleValue;
	      }
	    }
	  }, {
	    key: "setBlogPostFormSubmitted",
	    value: function setBlogPostFormSubmitted(value) {
	      if (document.getElementById('blog-submit-button-save')) {
	        if (value) {
	          document.getElementById('blog-submit-button-save').classList.add('ui-btn-clock');
	        } else {
	          document.getElementById('blog-submit-button-save').classList.remove('ui-btn-clock');
	        }
	      }
	      this.formParams.submitted = value;
	      this.disabled = value;
	    }
	  }, {
	    key: "submitBlogPostForm",
	    value: function submitBlogPostForm(editor, value) {
	      var _this3 = this;
	      if (this.disabled) {
	        return;
	      }
	      if (!main_core.Type.isObject(editor)) {
	        value = editor;
	        editor = LHEPostForm.getEditor(this.formParams.editorID);
	      }
	      if (editor && editor.id === this.formParams.editorID) {
	        if (this.formParams.submitted) {
	          return false;
	        }
	        editor.SaveContent();
	        if (!value) {
	          value = 'save';
	        }
	        if (document.getElementById('blog-title').style.display === 'none') {
	          document.getElementById('POST_TITLE').value = '';
	        }
	        var submitButton = this.getSubmitButton({
	          buttonType: value
	        });
	        if (submitButton) {
	          submitButton.classList.add('ui-btn-clock');
	          this.disabled = true;
	          window.addEventListener('beforeunload', function (event) {
	            // is called on every sumbit, with or without dialog
	            setTimeout(function () {
	              BX.removeClass(submitButton, 'ui-btn-clock');
	              _this3.disabled = false;
	              _this3.formParams.submitted = false;
	            }, 3000); // timeout needed to process a form on a back-end
	          });
	        }

	        var actionUrl = '';
	        var activeTab = PostFormTabs.getInstance().active;
	        if (main_core.Type.isStringFilled(activeTab)) {
	          actionUrl = document.getElementById(this.formId).action;
	          main_core.Uri.removeParam(actionUrl, ['b24statTab']);
	          main_core.Uri.addParam(actionUrl, {
	            b24statTab: activeTab
	          });
	          document.getElementById(this.formId).action = actionUrl;
	        }
	        if ([PostFormTabs.getInstance().config.id.message, PostFormTabs.getInstance().config.id.file, PostFormTabs.getInstance().config.id.gratitude, PostFormTabs.getInstance().config.id.important, PostFormTabs.getInstance().config.id.vote].includes(activeTab)) {
	          if (!this.checkDestinationValue({
	            buttonType: value
	          })) {
	            return;
	          }
	        }
	        if (activeTab === PostFormTabs.getInstance().config.id.gratitude && PostFormGratSelector.getInstance()) {
	          if (!this.checkEmployeesValue({
	            buttonType: value
	          })) {
	            return;
	          }
	        }
	        setTimeout(function () {
	          BX.submit(document.getElementById(_this3.formId), value);
	          _this3.formParams.submitted = true;
	        }, 100);
	      }
	    }
	  }, {
	    key: "checkDestinationValue",
	    value: function checkDestinationValue(_ref) {
	      var buttonType = _ref.buttonType;
	      if (main_core.Type.isUndefined(MPFEntitySelector)) {
	        return true;
	      }
	      var tagSelector = new MPFEntitySelector({
	        id: "oPostFormLHE_".concat(this.formId)
	      });
	      if (!tagSelector || !main_core.Type.isArray(tagSelector.tags) || tagSelector.tags.length > 0) {
	        return true;
	      }
	      this.enableSubmitButton({
	        buttonType: buttonType
	      });
	      this.showBottomAlert({
	        text: main_core.Loc.getMessage('BLOG_POST_EDIT_T_GRAT_ERROR_NO_DESTINATION')
	      });
	      tagSelector.subscribeOnce('onContainerClick', this.hideAlert);
	      return false;
	    }
	  }, {
	    key: "checkEmployeesValue",
	    value: function checkEmployeesValue(_ref2) {
	      var buttonType = _ref2.buttonType;
	      var employeesValueNode = document.getElementById(this.formId).elements[PostFormGratSelector.getInstance().config.fields.employeesValue.name];
	      if (employeesValueNode && main_core.Type.isStringFilled(employeesValueNode.value) && employeesValueNode.value !== '[]') {
	        return true;
	      }
	      this.enableSubmitButton({
	        buttonType: buttonType
	      });
	      this.showBottomAlert({
	        text: main_core.Loc.getMessage('BLOG_POST_EDIT_T_GRAT_ERROR_NO_EMPLOYEES')
	      });
	      return false;
	    }
	  }, {
	    key: "checkHideAlert",
	    value: function checkHideAlert(event) {
	      var _event$getData7 = event.getData(),
	        type = _event$getData7.type;
	      if (type === PostFormTabs.getInstance().config.id.gratitude) {
	        return;
	      }
	      this.hideAlert();
	    }
	  }, {
	    key: "hideAlert",
	    value: function hideAlert() {
	      var alertNode = document.getElementById('feed-add-post-bottom-alertblogPostForm');
	      if (!alertNode) {
	        return;
	      }
	      main_core.Dom.clean(alertNode);
	    }
	  }, {
	    key: "enableSubmitButton",
	    value: function enableSubmitButton(_ref3) {
	      var buttonType = _ref3.buttonType;
	      var submitButton = this.getSubmitButton({
	        buttonType: buttonType
	      });
	      if (submitButton) {
	        submitButton.classList.remove('ui-btn-clock');
	        this.disabled = false;
	      }
	    }
	  }, {
	    key: "getSubmitButton",
	    value: function getSubmitButton(_ref4) {
	      var buttonType = _ref4.buttonType;
	      var result = null;
	      if (buttonType === 'save' && document.getElementById('blog-submit-button-save')) {
	        result = document.getElementById('blog-submit-button-save');
	      } else if (buttonType === 'draft' && document.getElementById('blog-submit-button-draft')) {
	        result = document.getElementById('blog-submit-button-draft');
	      }
	      return result;
	    }
	  }, {
	    key: "showBottomAlert",
	    value: function showBottomAlert(params) {
	      if (!main_core.Type.isPlainObject(params) || !main_core.Type.isStringFilled(params.text)) {
	        return;
	      }
	      var alertNode = document.getElementById('feed-add-post-bottom-alertblogPostForm');
	      if (alertNode) {
	        main_core.Dom.clean(alertNode);
	        alertNode.appendChild(main_core.Dom.create('div', {
	          props: {
	            className: 'ui-alert ui-alert-danger'
	          },
	          children: [main_core.Dom.create('span', {
	            props: {
	              className: 'ui-alert-message'
	            },
	            text: params.text
	          })]
	        }));
	      }
	    }
	  }, {
	    key: "onHandlerInited",
	    value: function onHandlerInited(obj, form) {
	      if (form !== this.formId) {
	        return;
	      }
	      this.formParams.handler = obj;
	      main_core_events.EventEmitter.subscribe(obj.eventNode, 'OnControlClick', function () {
	        PostFormTabs.getInstance().changePostFormTab(PostFormTabs.getInstance().config.id.message);
	      });
	      main_core_events.EventEmitter.subscribe(obj.eventNode, 'OnAfterShowLHE', this.OnAfterShowLHE.bind(this));
	      main_core_events.EventEmitter.subscribe(obj.eventNode, 'OnAfterHideLHE', this.OnAfterHideLHE.bind(this));
	      if (obj.eventNode.style.display == 'none') {
	        this.OnAfterHideLHE();
	      } else {
	        this.OnAfterShowLHE();
	      }
	    }
	  }, {
	    key: "OnAfterShowLHE",
	    value: function OnAfterShowLHE() {
	      var div = [document.getElementById('feed-add-post-form-notice-blockblogPostForm'), document.getElementById('feed-add-buttons-blockblogPostForm'), document.getElementById('feed-add-post-bottom-alertblogPostForm'), document.getElementById('feed-add-post-content-message-add-ins')];
	      for (var ii = 0; ii < div.length; ii++) {
	        if (!div[ii]) {
	          continue;
	        }
	        div[ii].classList.remove('feed-post-form-block-hidden');
	      }
	      if (this.formParams.showTitle) {
	        this.showPanelTitle(true, false);
	      }
	    }
	  }, {
	    key: "OnAfterHideLHE",
	    value: function OnAfterHideLHE() {
	      var div = [document.getElementById('feed-add-post-form-notice-blockblogPostForm'), document.getElementById('feed-add-buttons-blockblogPostForm'), document.getElementById('feed-add-post-bottom-alertblogPostForm'), document.getElementById('feed-add-post-content-message-add-ins')];
	      for (var ii = 0; ii < div.length; ii++) {
	        if (!div[ii]) {
	          continue;
	        }
	        div[ii].classList.add('feed-post-form-block-hidden');
	      }
	      if (this.formParams.showTitle) {
	        this.showPanelTitle(false, false);
	      }
	    }
	  }, {
	    key: "onEditorInited",
	    value: function onEditorInited(editor) {
	      var _this4 = this;
	      if (PostForm.getInstance().initedEditorsList.includes(editor.id)) {
	        return;
	      }
	      if (editor.id !== this.formParams.editorID) {
	        return;
	      }
	      this.formParams.editor = editor;
	      if (this.formParams.autoSave !== 'N') {
	        new PostFormAutoSave(this.formParams.autoSave, this.formParams.restoreAutosave);
	      }
	      var f = window[editor.id + 'Files'];
	      var handler = LHEPostForm.getHandler(editor.id);
	      var node = null;
	      var controller = null;
	      for (var id in handler.controllers) {
	        if (!handler.controllers.hasOwnProperty(id)) {
	          continue;
	        }
	        if (handler.controllers[id].parser && handler.controllers[id].parser.bxTag === 'postimage') {
	          controller = handler.controllers[id];
	          break;
	        }
	      }
	      var closure2 = function closure2(a, b, c) {
	        return function () {
				if (controller) {
				  controller.deleteFile(b, {});
				  main_core.Dom.remove(document.getElementById("wd-doc".concat(b)));
				  main_core.ajax({
					method: 'GET',
					url: c
				  });
				} else {
				  main_core.Dom.remove(document.getElementById("wd-doc".concat(b)));
				  main_core.ajax({
					  method: 'GET',
					  url: c
				  });
				}
			};
	      };
	      for (var intId in f) {
	        if (!f.hasOwnProperty(intId)) {
	          continue;
	        }
	        if (controller) {
	          controller.addFile(f[intId]);
	        }
	        node = document.getElementById("wd-doc".concat(intId)).querySelector('.feed-add-post-del-but');
	        if (node) {
				console.log(handler);
	          main_core.Event.bind(node, 'click', closure2(handler, intId, f[intId].del_url));
	          node.style.cursor = "pointer";
	        }
	      }
	      PostForm.getInstance().initedEditorsList.push(editor.id);
	      main_core_events.EventEmitter.subscribe(editor, 'OnSetViewAfter', function () {
	        if (_this4.formParams.createdFromEmail) {
	          if (editor.GetContent() === '') {
	            editor.SetContent("".concat(main_core.Loc.getMessage('CREATED_ON_THE_BASIC_OF_THE_MESSAGE')));
	          }
	          editor.Focus(true);
	        }
	        if (main_core.Type.isStringFilled(_this4.formParams.textFromHash)) {
	          _this4.formParams.text = _this4.formParams.textFromHash;
	          editor.action.Exec('insertHTML', _this4.formParams.textFromHash);
	        }
	      });
	    }
	  }, {
	    key: "reinit",
	    value: function reinit() {
	      if (!this.formParams.editorID) {
	        return;
	      }
	      if (main_core.Type.isFunction(this.formParams.editor)) {
	        this.formParams.editor(this.formParams.text);
	      } else {
	        setTimeout(this.reinit, 50);
	      }
	    }
	  }]);
	  return PostFormEditor;
	}(main_core_events.EventEmitter);
	babelHelpers.defineProperty(PostFormEditor, "instance", {});

	var PostFormAutoSave = /*#__PURE__*/function () {
	  function PostFormAutoSave(autoSaveRestoreMethod, initRestore) {
	    babelHelpers.classCallCheck(this, PostFormAutoSave);
	    this.init(autoSaveRestoreMethod, initRestore);
	  }
	  babelHelpers.createClass(PostFormAutoSave, [{
	    key: "init",
	    value: function init(autoSaveRestoreMethod, initRestore) {
	      var _this = this;
	      var formId = 'blogPostForm';
	      var form = document.getElementById(formId);
	      var titleID = 'POST_TITLE';
	      var title = document.getElementById(titleID);
	      var tags = form.TAGS;
	      if (!form) {
	        return;
	      }
	      initRestore = !main_core.Type.isUndefined(initRestore) ? !!initRestore : true;
	      main_core_events.EventEmitter.subscribe(form, 'onAutoSavePrepare', function (event) {
	        var _event$getData = event.getData(),
	          _event$getData2 = babelHelpers.slicedToArray(_event$getData, 2),
	          ob = _event$getData2[0],
	          handler = _event$getData2[1];
	        ob.DISABLE_STANDARD_NOTIFY = true;
	        var _ob = ob;
	        setTimeout(function () {
	          _this.bindLHEEvents(_ob);
	        }, 100);
	      });
	      main_core_events.EventEmitter.subscribe(form, 'onAutoSave', function (event) {
	        var _event$getData3 = event.getData(),
	          _event$getData4 = babelHelpers.slicedToArray(_event$getData3, 2),
	          ob = _event$getData4[0],
	          formData = _event$getData4[1];
	        formData.TAGS = tags.value;
	        delete formData.POST_MESSAGE;
	      });
	      if (autoSaveRestoreMethod == 'Y') {
	        main_core_events.EventEmitter.subscribe(form, 'onAutoSaveRestoreFound', function (event) {
	          var _event$getData5 = event.getData(),
	            _event$getData6 = babelHelpers.slicedToArray(_event$getData5, 2),
	            ob = _event$getData6[0],
	            data = _event$getData6[1];
	          var text = data["text".concat(formId)];
	          text = main_core.Type.isStringFilled(text) ? text.trim() : '';
	          var title = data[titleID];
	          title = main_core.Type.isStringFilled(title) ? title.trim() : '';
	          if (!main_core.Type.isStringFilled(text) && !main_core.Type.isStringFilled(title)) {
	            return;
	          }
	          ob.Restore();
	        });
	      } else {
	        main_core_events.EventEmitter.subscribe(form, 'onAutoSaveRestoreFound', function (event) {
	          var _event$getData7 = event.getData(),
	            _event$getData8 = babelHelpers.slicedToArray(_event$getData7, 2),
	            ob = _event$getData8[0],
	            data = _event$getData8[1];
	          var text = data["text".concat(formId)];
	          text = main_core.Type.isStringFilled(text) ? text.trim() : '';
	          var title = data[titleID];
	          title = main_core.Type.isStringFilled(title) ? title.trim() : '';
	          if (!main_core.Type.isStringFilled(text) && !main_core.Type.isStringFilled(title)) {
	            return;
	          }
	          var messageBody = document.getElementById('microoPostFormLHE_blogPostForm');
	          var textNode = main_core.Dom.create('DIV', {
	            attrs: {
	              className: 'feed-add-successfully'
	            },
	            children: [main_core.Dom.create('SPAN', {
	              attrs: {
	                className: 'feed-add-info-icon'
	              }
	            }), main_core.Dom.create('A', {
	              attrs: {
	                className: 'feed-add-info-text',
	                href: '#'
	              },
	              events: {
	                click: function click() {
	                  ob.Restore();
	                  textNode.parentNode.removeChild(textNode);
	                  return false;
	                }
	              },
	              text: main_core.Loc.getMessage('BLOG_POST_AUTOSAVE2')
	            })]
	          });
	          if (messageBody) {
	            messageBody.parentNode.insertBefore(textNode, messageBody);
	          }
	        });
	      }
	      if (initRestore) {
	        main_core_events.EventEmitter.subscribe(form, 'onAutoSaveRestore', function (event) {
	          var _event$getData9 = event.getData(),
	            _event$getData10 = babelHelpers.slicedToArray(_event$getData9, 2),
	            ob = _event$getData10[0],
	            data = _event$getData10[1];
	          title.value = data[titleID];
	          if (main_core.Type.isStringFilled(data[titleID]) && data[titleID] !== title.getAttribute('placeholder')) {
	            if (document.getElementById('divoPostFormLHE_blogPostForm').style.display !== 'none') {
	              PostFormEditor.getInstance(formId).showPanelTitle(true);
	            } else {
	              window.bShowTitle = true;
	            }
	            if (main_core.Type.isFunction(title.__onchange)) {
	              title.__onchange();
	            }
	          }
	          var formTags = window["BXPostFormTags_".concat(formId)];
	          if (data.TAGS.length > 0 && formTags) {
	            var _tags = formTags.addTag(data.TAGS);
	            if (_tags.length > 0) {
	              BX.show(formTags.tagsArea);
	            }
	          }
	          main_core_events.EventEmitter.emit('onAutoSaveRestoreDestination', new main_core_events.BaseEvent({
	            compatData: [{
	              formId: formId,
	              data: data
	            }]
	          }));
	          _this.bindLHEEvents(ob);
	        });
	      }
	    }
	  }, {
	    key: "bindLHEEvents",
	    value: function bindLHEEvents(_ob) {
	      var form = document.getElementById('blogPostForm');
	      var title = document.getElementById('POST_TITLE');
	      var tags = form.TAGS;
	      main_core.Event.bind(title, 'keydown', _ob.Init.bind(_ob));
	      main_core.Event.bind(tags, 'keydown', _ob.Init.bind(_ob));
	    }
	  }]);
	  return PostFormAutoSave;
	}();

	exports.PostForm = PostForm;
	exports.PostFormTabs = PostFormTabs;
	exports.PostFormDateEnd = PostFormDateEnd;
	exports.PostFormGratSelector = PostFormGratSelector;
	exports.PostFormAutoSave = PostFormAutoSave;
	exports.PostFormEditor = PostFormEditor;

}((this.BX.Socialnetwork.Livefeed = this.BX.Socialnetwork.Livefeed || {}),BX.Main,BX.UI.EntitySelector,BX.Main,BX,BX.Event,BX.AI,BX.UI.Uploader));
//# sourceMappingURL=script.js.map

/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/components/bitrix/main.post.form/templates/.default/script.min.js?176242819973565";s:6:"source";s:69:"/bitrix/components/bitrix/main.post.form/templates/.default/script.js";s:3:"min";s:73:"/bitrix/components/bitrix/main.post.form/templates/.default/script.min.js";s:3:"map";s:73:"/bitrix/components/bitrix/main.post.form/templates/.default/script.map.js";}"*/
(function(){if(window["LHEPostForm"]){return}this.BX=this.BX||{};(function(e,t,i,n,r){"use strict";var a=function(){function e(t,i){babelHelpers.classCallCheck(this,e);babelHelpers.defineProperty(this,"id","SomeParser");babelHelpers.defineProperty(this,"buttonParams",{name:"Some parser name",iconClassName:"some-parser-class",disabledForTextarea:false,src:"/icon.png",toolbarSort:205,compact:false});this.editor=t;this.htmlEditor=i;this.handler=this.handler.bind(this)}babelHelpers.createClass(e,[{key:"handler",value:function e(){}},{key:"parse",value:function e(t){return t}},{key:"unparse",value:function e(t,i){return""}},{key:"hasButton",value:function e(){return this.buttonParams!==null}},{key:"getButton",value:function e(){if(this.buttonParams===null){return null}return{id:this.id,name:this.buttonParams.name,iconClassName:this.buttonParams.iconClassName,disabledForTextarea:this.buttonParams.disabledForTextarea,src:this.buttonParams.src,toolbarSort:this.buttonParams.toolbarSort,compact:this.buttonParams.compact===true,handler:this.handler}}},{key:"getParser",value:function e(){var t=this;return{name:this.id,obj:{Parse:function e(i,n){return t.parse(n)},UnParse:this.unparse.bind(this)}}}}]);return e}();var o=function(e){babelHelpers.inherits(t,e);function t(){var e;var i;babelHelpers.classCallCheck(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++){a[o]=arguments[o]}i=babelHelpers.possibleConstructorReturn(this,(e=babelHelpers.getPrototypeOf(t)).call.apply(e,[this].concat(a)));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i),"id","spoiler");babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i),"buttonParams",{name:r.Loc.getMessage("MPF_SPOILER"),iconClassName:"spoiler",disabledForTextarea:false,src:r.Loc.getMessage("MPF_TEMPLATE_FOLDER")+"/images/lhespoiler.svg",toolbarSort:205});return i}babelHelpers.createClass(t,[{key:"handler",value:function e(){var t;if(!this.htmlEditor.bbCode||!this.htmlEditor.synchro.IsFocusedOnTextarea()){t=this.htmlEditor.action.actions.formatBlock.exec("formatBlock","blockquote","bx-spoiler",false,{bxTagParams:{tag:"spoiler"}})}else{t=this.htmlEditor.action.actions.formatBbCode.exec("quote",{tag:"SPOILER"})}return t}},{key:"parse",value:function e(t,i){if(/\[spoiler(([^\]])*)\]/gi.test(t)){t=t.replace(/[\x01-\x02]/gi,"").replace(/\[spoiler([^\]]*)\]/gi,"\x01$1\x01").replace(/\[\/spoiler]/gi,"\x02");var n=/(?:\x01([^\x01]*)\x01)([^\x01-\x02]+)\x02/gi;while(t.match(n)){t=t.replace(n,function(e,t,i){t=t.replace(/^(="|='|=)/gi,"").replace(/("|')?$/gi,"");return'<blockquote class="bx-spoiler" id="'.concat(this.htmlEditor.SetBxTag(false,{tag:"spoiler"}),'" title="').concat(t,'">').concat(i,"</blockquote>")}.bind(this))}}t=t.replace(/\001([^\001]*)\001/gi,"[spoiler$1]").replace(/\002/gi,"[/spoiler]");return t}},{key:"unparse",value:function e(t,i){var n="";for(var r=0;r<i.node.childNodes.length;r++){n+=this.htmlEditor.bbParser.GetNodeHtml(i.node.childNodes[r])}n=n.trim();if(n!==""){return"[SPOILER"+(i.node.hasAttribute("title")?"="+i.node.getAttribute("title"):"")+"]"+n+"[/SPOILER]"}return""}}]);return t}(a);var s=function(e){babelHelpers.inherits(i,e);function i(e,n){var r;babelHelpers.classCallCheck(this,i);r=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(i).call(this,e,n));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"id","postuser");babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"buttonParams",null);t.EventEmitter.subscribe(n,"OnIframeKeydown",(function(e){var t=babelHelpers.slicedToArray(e.compatData,1),i=t[0];if(window.onKeyDownHandler){window.onKeyDownHandler(i,n,n.formID)}}));t.EventEmitter.subscribe(n,"OnIframeKeyup",(function(e){var t=babelHelpers.slicedToArray(e.compatData,1),i=t[0];if(window.onKeyUpHandler){window.onKeyUpHandler(i,n,n.formID)}}));t.EventEmitter.subscribe(n,"OnIframeClick",(function(){if(window["BXfpdStopMent"+n.formID]){window["BXfpdStopMent"+n.formID]()}}));t.EventEmitter.subscribe(n,"OnTextareaKeyup",(function(e){var t=babelHelpers.slicedToArray(e.compatData,1),i=t[0];if(n.textareaView&&n.textareaView.GetCursorPosition&&window.onTextareaKeyUpHandler){window.onTextareaKeyUpHandler(i,n,n.formID)}}));t.EventEmitter.subscribe(n,"OnTextareaKeydown",(function(e){var t=babelHelpers.slicedToArray(e.compatData,1),i=t[0];if(n.textareaView&&n.textareaView.GetCursorPosition&&window.onTextareaKeyDownHandler){window.onTextareaKeyDownHandler(i,n,n.formID)}}));return r}babelHelpers.createClass(i,[{key:"parse",value:function e(t,i){var n=this;t=t.replace(/\[USER\s*=\s*(\d+)\](.*?)\[\/USER\]/gi,(function(e,t,i){i=i.trim();if(i===""){return""}var r=n.htmlEditor.SetBxTag(false,{tag:n.id,userId:t,userName:i});return'<span id="'.concat(r,'" class="bxhtmled-metion">').concat(i,"</span>")})).replace(/\[PROJECT\s*=\s*(\d+)\](.*?)\[\/PROJECT\]/gi,(function(e,t,i){i=i.trim();if(i===""){return""}var r=n.htmlEditor.SetBxTag(false,{tag:n.id,projectId:t,projectName:i});return'<span id="'.concat(r,'" class="bxhtmled-metion">').concat(i,"</span>")})).replace(/\[DEPARTMENT\s*=\s*(\d+)\](.*?)\[\/DEPARTMENT\]/gi,(function(e,t,i){i=i.trim();if(i===""){return""}var r=n.htmlEditor.SetBxTag(false,{tag:n.id,departmentId:t,departmentName:i});return'<span id="'.concat(r,'" class="bxhtmled-metion">').concat(i,"</span>")}));return t}},{key:"unparse",value:function e(t,i){var n=this;var a="";i.node.childNodes.forEach((function(e){a+=n.htmlEditor.bbParser.GetNodeHtml(e)}));a=String(a).trim();var o="";if(r.Type.isStringFilled(a)){if(!r.Type.isUndefined(t.userId)){o="[USER=".concat(t.userId,"]").concat(a,"[/USER]")}else if(!r.Type.isUndefined(t.projectId)){o="[PROJECT=".concat(t.projectId,"]").concat(a,"[/PROJECT]")}else if(!r.Type.isUndefined(t.departmentId)){o="[DEPARTMENT=".concat(t.departmentId,"]").concat(a,"[/DEPARTMENT]")}}return o}}]);return i}(a);var l=function(){function e(i,n,r){babelHelpers.classCallCheck(this,e);babelHelpers.defineProperty(this,"actionPool",[]);this.cid=i;this.container=n;this.editor=r;t.EventEmitter.subscribe(r.getEventObject(),"onShowControllers",(function(e){var i=e.data;t.EventEmitter.emit(n.parentNode,"BFileDLoadFormController",new t.BaseEvent({compatData:[i]}))}));t.EventEmitter.subscribe(r.getEventObject(),"onCollectControllers",(function(e){e.data[i]={values:[]}}))}babelHelpers.createClass(e,[{key:"exec",value:function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(t){this.actionPool.push(t)}if(this.isReady){try{var i;while((i=this.actionPool.shift())&&i){i.apply(this)}}catch(e){console.log("error in attachments controllers: ",e)}}}},{key:"getId",value:function e(){return this.cid}},{key:"getFieldName",value:function e(){return null}},{key:"reinitFrom",value:function e(t){var i=this;this.exec((function(){if(!i.getFieldName()){return}i.container.querySelector('inptut[name="'.concat(i.getFieldName(),'"]')).forEach((function(e){e.parentNode.removeChild(e)}))}))}},{key:"isReady",get:function e(){return true}}]);return e}();var d=function(e){babelHelpers.inherits(i,e);function i(e,n,r){var a;babelHelpers.classCallCheck(this,i);a=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(i).call(this,e,n,r));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"diskUfUploader",null);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"diskUfHandler",null);var o=function e(i){a.diskUfUploader=i;a.exec();var n=function e(i){t.EventEmitter.emit(r.getEventObject(),"onUploadsHasBeenChanged",i)};t.EventEmitter.subscribe(a.diskUfUploader,"onFileIsInited",n);t.EventEmitter.subscribe(a.diskUfUploader,"ChangeFileInput",n)};if(BX.UploaderManager.getById(e)){o(BX.UploaderManager.getById(e))}t.EventEmitter.subscribeOnce(n.parentNode,"DiskDLoadFormControllerInit",(function(t){var i=babelHelpers.slicedToArray(t.compatData,1),n=i[0];a.diskUfHandler=n;if(e===n.CID&&!a.diskUfUploader){o(n.agent)}}));t.EventEmitter.subscribe(r.getEventObject(),"onShowControllers",(function(e){var i=e.data;t.EventEmitter.emit(n.parentNode,"DiskLoadFormController",new t.BaseEvent({compatData:[i]}))}));return a}babelHelpers.createClass(i,[{key:"getFieldName",value:function e(){if(this.diskUfHandler){return this.diskUfHandler.params.controlName}return null}},{key:"reinitFrom",value:function e(t){var i=this;this.exec((function(){if(!i.getFieldName()){return}Array.from(i.container.querySelectorAll('inptut[name="'.concat(i.getFieldName(),'"]'))).forEach((function(e){e.parentNode.removeChild(e)}));var e=null;for(var n in t){if(t.hasOwnProperty(n)&&t[n]&&t[n]["USER_TYPE_ID"]==="disk_file"&&t[n]["FIELD_NAME"]===i.getFieldName()){e=t[n]["VALUE"]}}if(e){var r={};e.forEach((function(e){var t=document.querySelector("#disk-attach-"+e);if(t.tagName!=="A"){t=t.querySelector("img")}if(t){r["E"+e]={type:"file",id:e,name:t.getAttribute("data-bx-title")||t.getAttribute("data-title"),size:t.getAttribute("data-bx-size")||"",sizeInt:t.getAttribute("data-bx-size")||"",width:t.getAttribute("data-bx-width"),height:t.getAttribute("data-bx-height"),storage:"disk",previewUrl:t.tagName==="A"?"":t.getAttribute("data-bx-src")||t.getAttribute("data-src"),fileId:t.getAttribute("bx-attach-file-id")};if(t.hasAttribute("bx-attach-xml-id"))r["E"+e]["xmlId"]=t.getAttribute("bx-attach-xml-id");if(t.hasAttribute("bx-attach-file-type"))r["E"+e]["fileType"]=t.getAttribute("bx-attach-file-type")}}));i.diskUfHandler.selectFile({},{},r)}}))}},{key:"isReady",get:function e(){return!!this.diskUfUploader}}]);return i}(l);var c;var u=function(e){babelHelpers.inherits(i,e);function i(e,n){var a;babelHelpers.classCallCheck(this,i);a=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(i).call(this,e,n));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"id","uploadfile");babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"buttonParams",null);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"regexp",/\[FILE ID=((?:\s|\S)*?)?\]/gi);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"values",new Map);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a),"controllers",new Map);a.checkButtonsDebounced=r.Runtime.debounce(a.checkButtons,500,babelHelpers.assertThisInitialized(a));a.init();t.EventEmitter.subscribe(e.getEditor(),"OnContentChanged",a.checkButtons.bind(babelHelpers.assertThisInitialized(a)));t.EventEmitter.subscribe(e.getEventObject(),"onReinitializeBefore",(function(e){var t=babelHelpers.slicedToArray(e.data,2),i=t[0],n=t[1];a.reinit(i,n)}));return a}babelHelpers.createClass(i,[{key:"init",value:function e(){var i=this;Array.from(this.editor.getContainer().querySelectorAll(".file-selectdialog")).forEach((function(e,n){var r=e.id.replace("file-selectdialog-","");var a=i.controllers.get(r);if(!a){a=new l(r,e,i.editor);t.EventEmitter.subscribe(e.parentNode,"OnFileUploadSuccess",(function(t){var n=babelHelpers.slicedToArray(t.data,2),a=n[0].element_id,o=n[1],s=o.id,l=o.doc_prefix,d=o.CID;if(r===s){var c=document.querySelector("#"+i.editor.getFormId())?document.querySelector("#"+i.editor.getFormId()).querySelector("#upload-cid"):null;if(c){c.value=d}var u=i.parseFile(e.querySelector("#"+l+a)),f=babelHelpers.slicedToArray(u,2),p=f[0],h=f[1];i.values.set(p,h)}}));t.EventEmitter.subscribe(e.parentNode,"OnFileUploadRemove",(function(e){var t=babelHelpers.slicedToArray(e.compatData,2),n=t[0],a=t[1].id;if(r===a&&i.values.has(n)){i.values["delete"](n);i.deleteFile([n])}}));if(n===0){t.EventEmitter.subscribe(i.editor.getEventObject(),"onFilesHaveCaught",(function(e){e.stopImmediatePropagation();if(window["BfileFD"+r]){window["BfileFD"+r].agent.UploadDroppedFiles(babelHelpers.toConsumableArray(e.getData()))}}))}}if(e.querySelector("table.files-list")){Array.from(e.querySelector("table.files-list").querySelectorAll("tr")).forEach((function(e){var t=i.parseFile(e),n=babelHelpers.slicedToArray(t,2),r=n[0],a=n[1];i.values.set(r,a)}))}}))}},{key:"parseFile",value:function e(t){var i=this;var n=t.id.replace("wd-doc","");var a={id:n,name:t.querySelector('[data-role="name"]')?t.querySelector('[data-role="name"]').innerHTML:t.querySelector("span.f-wrap").innerHTML,node:t,buttonNode:t.querySelector('[data-role="button-insert"]'),image:{src:null,lowsrc:null,width:null,height:null}};var o=function e(){i.insertFile(n,t)};var s=t.querySelector(".f-wrap");if(s){s.addEventListener("click",o);s.style.cursor="pointer";s.title=r.Loc.getMessage("MPF_FILE")}var l=t.querySelector("img");if(l){l.addEventListener("click",o);l.title=r.Loc.getMessage("MPF_FILE");l.style.cursor="pointer";a.image.lowsrc=l.lowsrc||l.src;a.image.src=l.rel||l.src;a.image.width=l.getAttribute("data-bx-full-width");a.image.height=l.getAttribute("data-bx-full-height")}if(t instanceof HTMLTableRowElement&&t.querySelector(".files-info")){if(!a.buttonNode){a.buttonNode=r.Tag.render(c||(c=babelHelpers.taggedTemplateLiteral(['\n<span type="button" onclick="','" data-role="button-insert" class="insert-btn">\n\t<span data-role="insert-btn" class="insert-btn-text">','</span>\n\t<span data-role="in-text-btn" class="insert-btn-text">',"</span>\n</span>"])),o,r.Loc.getMessage("MPF_FILE_INSERT_IN_TEXT"),r.Loc.getMessage("MPF_FILE_IN_TEXT"));t.querySelector(".files-info").appendChild(a.buttonNode);this.checkButtonsDebounced()}}return[n,a]}},{key:"buildHTML",value:function e(t,i){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var r=this.htmlEditor.SetBxTag(false,{tag:this.id,fileId:t});var a='<span data-bx-file-id="'.concat(t,'" id="').concat(r,'" style="color: #2067B0; border-bottom: 1px dashed #2067B0; margin:0 2px;">').concat(i.name,"</span>");if(i.image.src){var o=[];if(n){o.push('style="width:'.concat(n.width,"px;height:").concat(n.height,'px;"'))}else if(i.image.width&&i.image.height){o.push('style="width:'.concat(i.image.width,"px;height:").concat(i.image.height,'px;" '));o.push("onload=\"this.style.width='auto';this.style.height='auto';\"")}a='<img style="max-width: 90%;"  data-bx-file-id="'.concat(t,'" id="').concat(r,'" src="').concat(i.image.src,'" lowsrc="').concat(i.image.lowsrc,'" ').concat(o.join(" "),"/>")}return a}},{key:"buildText",value:function e(t,i){return"[FILE ID=".concat(t).concat(i||"","]")}},{key:"insertFile",value:function e(i,n){var r=this.values.get(String(i));if(r){t.EventEmitter.emit(this.editor.getEventObject(),"OnInsertContent",[this.buildText(i),this.buildHTML(i,r)])}}},{key:"deleteFile",value:function e(t){var i=this.htmlEditor.GetContent();if(this.htmlEditor.GetViewMode()==="wysiwyg"){var n=this.htmlEditor.GetIframeDoc();for(var r in this.htmlEditor.bxTags){if(this.htmlEditor.bxTags.hasOwnProperty(r)&&babelHelpers["typeof"](this.htmlEditor.bxTags[r])==="object"&&this.htmlEditor.bxTags[r]["tag"]===this.id&&t.indexOf(String(this.htmlEditor.bxTags[r]["fileId"]))>=0&&n.getElementById(r)){var a=n.getElementById(r);a.parentNode.removeChild(a)}}this.htmlEditor.SaveContent()}else{var o=i.replace(this.regexp,(function(e,i){return t.indexOf(i)>=0?"":e}));this.htmlEditor.SetContent(o);this.htmlEditor.Focus()}}},{key:"checkButtons",value:function e(t){var i=t?t.compatData[0]:this.htmlEditor.GetContent();var n=babelHelpers.toConsumableArray(i.matchAll(this.regexp)).map((function(e){var t=babelHelpers.slicedToArray(e,2),i=t[0],n=t[1];return n}));this.values.forEach((function(e,t){if(!e.buttonNode){return}var i=n.indexOf(t)>=0;if(i===true&&e.buttonNode.className!=="insert-text"){e.buttonNode.className="insert-text";e.buttonNode.querySelector('[data-role="insert-btn"]').style.display="none";e.buttonNode.querySelector('[data-role="in-text-btn"]').style.display=""}else if(i!==true&&e.buttonNode.className!=="insert-btn"){e.buttonNode.className="insert-btn";e.buttonNode.querySelector('[data-role="insert-btn"]').style.display="";e.buttonNode.querySelector('[data-role="in-text-btn"]').style.display="none"}}))}},{key:"reinit",value:function e(t,i){this.values.forEach((function(e,t){if(e.node&&e.node.parentNode){e.node.parentNode.removeChild(e.node)}}));this.values.clear();this.controllers.forEach((function(e){e.reinitFrom(i)}))}},{key:"parse",value:function e(t){if(!this.regexp.test(t)){return t}t=t.replace(this.regexp,function(e,t,i,n){if(this.values.has(t)){return this.buildHTML(t,this.values.get(t),i>0&&n>0?{width:i,height:n}:null)}return e}.bind(this));return t}},{key:"unparse",value:function e(t,i){var n=i.node;var r=parseInt(n.hasAttribute("width")?n.getAttribute("width"):0);var a=parseInt(n.hasAttribute("height")?n.getAttribute("height"):0);var o="";if(r>0&&a>0){o=" WIDTH="+r+" HEIGHT="+a}var s=n.getAttribute("data-bx-file-id");return this.buildText(s,o)}}]);return i}(a);var f=function(e){babelHelpers.inherits(i,e);function i(e,n){var r;babelHelpers.classCallCheck(this,i);r=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(i).call(this,e,n));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"id","uploadimage");babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"buttonParams",null);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"regexp",/\[IMAGE ID=((?:\s|\S)*?)?\]/gi);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"values",new Map);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r),"controllers",new Map);r.init();console.log("PostImage: ");t.EventEmitter.subscribe(e.getEventObject(),"onReinitializeBefore",(function(e){var t=babelHelpers.slicedToArray(e.data,2),i=t[0],n=t[1];r.reinit(i,n)}));return r}babelHelpers.createClass(i,[{key:"init",value:function e(){var i=this;Array.from(this.editor.getContainer().querySelectorAll(".file-selectdialog")).forEach((function(e){var n=e.id.replace("file-selectdialog-","");var r=i.controllers.get(n);if(!r){r=new l(n,e,i.editor);t.EventEmitter.subscribe(e.parentNode,"OnFileUploadSuccess",(function(t){var r=babelHelpers.slicedToArray(t.data,2),a=r[0].element_id,o=r[1],s=o.id,l=o.doc_prefix,d=o.CID;if(n===s){var c=document.querySelector("#"+i.editor.getFormId())?document.querySelector("#"+i.editor.getFormId()).querySelector("#upload-cid"):null;if(c){c.value=d}var u=i.parseFile(e.querySelector("#"+l+a)),f=babelHelpers.slicedToArray(u,2),p=f[0],h=f[1];i.values.set(p,h)}}));t.EventEmitter.subscribe(e.parentNode,"OnFileUploadRemove",(function(e){var t=babelHelpers.slicedToArray(e.compatData,2),r=t[0],a=t[1].id;if(n===a&&i.values.has(r)){i.values["delete"](r)}}))}if(e.querySelector("table.files-list")){Array.from(e.querySelector("table.files-list").querySelectorAll("tr")).forEach((function(e){var t=i.parseFile(e),n=babelHelpers.slicedToArray(t,2),r=n[0],a=n[1];i.values.set(r,a)}))}}))}},{key:"parseFile",value:function e(t){var i=t.id.replace("wd-doc","");var n={id:i,name:t.querySelector('[data-role="name"]')?t.querySelector('[data-role="name"]').innerHTML:t.querySelector("span.f-wrap").innerHTML,node:t,image:{src:null,lowsrc:null,width:null,height:null}};return[i,n]}},{key:"reinit",value:function e(t,i){this.values.forEach((function(e,t){if(e.node&&e.node.parentNode){e.node.parentNode.removeChild(e.node)}}));this.values.clear();this.controllers.forEach((function(e){e.reinitFrom(i)}))}},{key:"parse",value:function e(t){return t}},{key:"unparse",value:function e(t,i){var n=i.node;return""}}]);return i}(a);var p;var h=function(e){babelHelpers.inherits(i,e);function i(){var e;var t;babelHelpers.classCallCheck(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++){r[a]=arguments[a]}t=babelHelpers.possibleConstructorReturn(this,(e=babelHelpers.getPrototypeOf(i)).call.apply(e,[this].concat(r)));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t),"id","diskfile");babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t),"regexp",/\[(?:DOCUMENT ID|DISK FILE ID)=([n0-9]+)\]/gi);return t}babelHelpers.createClass(i,[{key:"init",value:function e(){var i=this;Array.from(this.editor.getContainer().querySelectorAll(".diskuf-selectdialog")).forEach((function(e,n){var r=e.id.replace("diskuf-selectdialog-","");var a=i.controllers.get(r);if(!a){a=new d(r,e,i.editor);i.controllers.set(r,a);t.EventEmitter.subscribe(e.parentNode,"OnFileUploadSuccess",(function(t){var n=babelHelpers.slicedToArray(t.data,3),r=n[0].element_id,o=n[1].CID,s=n[2];if(a.getId()!==o||i.values.has(r)){return}var l=i.parseFile(e.querySelector("#disk-edit-attach"+r)),d=babelHelpers.slicedToArray(l,3),c=d[0],u=d[1],f=d[2];i.values.set(c,f);if(c!==u){i.values.set(u,f)}if(s&&s["insertImageAfterUpload"]&&f.image.src){i.insertFile(c,f.node)}}));t.EventEmitter.subscribe(e.parentNode,"OnFileUploadRemove",(function(e){var t=babelHelpers.slicedToArray(e.compatData,2),n=t[0],r=t[1].CID;if(a.getId()===r&&i.values.has(n)){var o=i.values.get(n);i.values["delete"](o.id);i.values["delete"](o.fileId);i.deleteFile([o.id,o.fileId])}}));t.EventEmitter.subscribe(e.parentNode,"OnFileUploadFailed",(function(e){var t=babelHelpers.slicedToArray(e.compatData,3),n=t[0],r=t[1].CID,o=t[2];if(a.getId()===r&&o&&o["referrerToEditor"]){BX.onCustomEvent(o["referrerToEditor"],"OnImageDataUriCaughtFailed",[]);BX.onCustomEvent(i.editor,"OnImageDataUriCaughtFailed",[o["referrerToEditor"]])}}));if(n===0){b(i,a,e,i.editor);m(i,a,e,i.editor);t.EventEmitter.subscribe(i.editor.getEventObject(),"onFilesHaveCaught",(function(e){e.stopImmediatePropagation();a.diskUfUploader.onChange(babelHelpers.toConsumableArray(e.getData()))}))}}if(e.querySelector("table.files-list")){Array.from(e.querySelector("table.files-list").querySelectorAll("tr")).forEach((function(e){var t=i.parseFile(e),n=babelHelpers.slicedToArray(t,3),r=n[0],a=n[1],o=n[2];i.values.set(r,o);if(r!==a){i.values.set(a,o)}}))}}))}},{key:"parseFile",value:function e(t){var i=this;var n=String(t.id.replace("disk-edit-attach",""));var a={id:n,name:t.querySelector('[data-role="name"]')?t.querySelector('[data-role="name"]').innerHTML:t.querySelector("span.f-wrap").innerHTML,fileId:t.getAttribute("bx-attach-file-id"),node:t,buttonNode:t.querySelector('[data-role="button-insert"]'),image:{src:null,lowsrc:null,width:null,height:null}};var o=t.querySelector(".f-wrap");var s=function e(){i.insertFile(n,t)};if(o){o.addEventListener("click",s);o.style.cursor="pointer";o.title=r.Loc.getMessage("MPF_FILE")}var l=t.querySelector("img.files-preview");if(l&&(l.src.indexOf("bitrix/tools/disk/uf.php")>=0||l.src.indexOf("/disk/showFile/")>=0)){l.addEventListener("click",s);l.title=r.Loc.getMessage("MPF_FILE");l.style.cursor="pointer";a.image.lowsrc=l.lowsrc||l.src;a.image.src=(l.rel||l.getAttribute("data-bx-src")||l.src).replace(/&(width|height)=\d+/gi,"");var d=function e(){a.image.width=l.getAttribute("data-bx-full-width");a.image.height=l.getAttribute("data-bx-full-height")};l.addEventListener("load",d);if(l.complete){d()}}if(t instanceof HTMLTableRowElement&&!a.buttonNode){a.buttonNode=r.Tag.render(p||(p=babelHelpers.taggedTemplateLiteral(['\n<span class="insert-btn" data-role="button-insert" onclick="','">\n\t<span data-role="insert-btn" class="insert-btn-text">','</span>\n\t<span data-role="in-text-btn" class="insert-btn-text" style="display: none;">',"</span>\n</span>"])),s,r.Loc.getMessage("MPF_FILE_INSERT_IN_TEXT"),r.Loc.getMessage("MPF_FILE_IN_TEXT"));setTimeout((function(){if(t.querySelector(".files-info")){t.querySelector(".files-info").appendChild(a.buttonNode);i.checkButtonsDebounced()}}))}return[n,a.fileId,a]}},{key:"buildText",value:function e(t,i){return"[DISK FILE ID=".concat(t).concat(i||"","]")}}]);return i}(u);function b(e,i,n,r){t.EventEmitter.subscribe(r.getEventObject(),"OnVideoHasCaught",(function(r){var a=r.getData();var o=function i(r){var o=babelHelpers.slicedToArray(r.data,3),s=o[0].element_id;babelHelpers.objectDestructuringEmpty(o[1]);var l=o[2];if(a===l&&e.values.has(s)){t.EventEmitter.unsubscribe(n.parentNode,"OnFileUploadSuccess",i);e.insertFile(s,e.values.get(s).node)}};t.EventEmitter.subscribe(n.parentNode,"OnFileUploadSuccess",o);i.exec((function(){i.diskUfUploader.onChange([a])}));r.stopImmediatePropagation()}))}function m(e,i,n,r){t.EventEmitter.subscribe(r.getEventObject(),"OnImageHasCaught",(function(r){r.stopImmediatePropagation();var a=r.getData();return new Promise((function(o,s){var l=function i(r){var s=babelHelpers.slicedToArray(r.data,3),l=s[0].element_id;babelHelpers.objectDestructuringEmpty(s[1]);var c=s[2];if(a===c&&e.values.has(l)){t.EventEmitter.unsubscribe(n.parentNode,"OnFileUploadSuccess",i);t.EventEmitter.unsubscribe(n.parentNode,"OnFileUploadFailed",d);var u=e.values.get(l);var f=e.buildHTML(l,u);o({image:u.image,html:f})}};var d=function e(i){var r=babelHelpers.slicedToArray(i.data,3),o=r[0];babelHelpers.objectDestructuringEmpty(r[1]);var d=r[2];if(a===d){t.EventEmitter.unsubscribe(n.parentNode,"OnFileUploadSuccess",l);t.EventEmitter.unsubscribe(n.parentNode,"OnFileUploadFailed",e);s()}};t.EventEmitter.subscribe(n.parentNode,"OnFileUploadSuccess",l);t.EventEmitter.subscribe(n.parentNode,"OnFileUploadFailed",d);i.exec((function(){i.diskUfUploader.onChange([r.getData()])}))}))}))}var v=function(e){babelHelpers.inherits(t,e);function t(){var e;var i;babelHelpers.classCallCheck(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++){r[a]=arguments[a]}i=babelHelpers.possibleConstructorReturn(this,(e=babelHelpers.getPrototypeOf(t)).call.apply(e,[this].concat(r)));babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i),"id","ai-image-generator");babelHelpers.defineProperty(babelHelpers.assertThisInitialized(i),"buttonParams",{name:"AI image generator",iconClassName:"feed-add-post-editor-btn-ai-image",disabledForTextarea:false,toolbarSort:398,compact:true});return i}babelHelpers.createClass(t,[{key:"handler",value:function e(){var t=this;if(!this.editor.isImageCopilotEnabledBySettings()){top.BX.UI.InfoHelper.show("limit_copilot_off");return}r.Runtime.loadExtension("ai.picker").then((function(){var e=new BX.AI.Picker({moduleId:"main",contextId:"image_"+r.Loc.getMessage("USER_ID"),analyticLabel:"main_post_form_comments_ai_image",saveImages:false,history:true,onSelect:function e(i){fetch(i).then((function(e){return e.blob()})).then((function(e){BX.onCustomEvent(window,"onAddVideoMessage",[e,t.editor.getFormId()])}))}});e.setLangSpace(BX.AI.Picker.LangSpace.image);e.image()}))}},{key:"parse",value:function e(t,i){return t}},{key:"unparse",value:function e(t,i){return""}}]);return t}(a);function g(e,t,i){if(e==="Spoiler"){return new o(t,i)}if(e==="MentionUser"){return new s(t,i)}if(e==="UploadImage"){return new f(t,i)}if(e==="UploadFile"){return new u(t,i)}if(e==="AIImage"){return new v(t,i)}if(babelHelpers["typeof"](e)==="object"&&e["disk_file"]){return new h(t,i)}return null}function E(e,t){if(!t){return}BX.addCustomEvent(t,"onAutoSavePrepare",(function(t){t.FORM.setAttribute("bx-lhe-autosave-prepared","Y");setTimeout((function(){BX.addCustomEvent(e,"OnContentChanged",(function(e){t["mpfTextContent"]=e;t.Init()}))}),1500)}));BX.addCustomEvent(t,"onAutoSave",(function(e,t){if(BX.type.isNotEmptyString(e["mpfTextContent"]))t["text"]=e["mpfTextContent"]}));BX.addCustomEvent(t,"onAutoSaveRestore",(function(t,i){if(i["text"]&&/[^\s]+/gi.test(i["text"])){e.CheckAndReInit(i["text"])}}));if(t.hasAttribute("bx-lhe-autosave-prepared")&&t.BXAUTOSAVE){t.removeAttribute("bx-lhe-autosave-prepared");setTimeout(t.BXAUTOSAVE.Prepare,100)}}function y(e,t,i){var n=false;if(i.showPanelEditor!==true&&i.showPanelEditor!==false){i.showPanelEditor=!t.toolbar.IsShown();n=true}e.exec((function(){var n=e.getContainer().querySelector('[data-bx-role="button-show-panel-editor"]');if(i.showPanelEditor){t.dom.toolbarCont.style.opacity="inherit";t.toolbar.Show();if(n){n.classList.add("feed-add-post-form-btn-active")}}else{t.toolbar.Hide();if(n){n.classList.remove("feed-add-post-form-btn-active")}}}));if(n!==false){BX.userOptions.save("main.post.form","postEdit","showBBCode",i.showPanelEditor?"Y":"N")}}function w(e,t){if(!(t.urlPreviewId&&window["BXUrlPreview"]&&BX(t.urlPreviewId))){return}var i=new BXUrlPreview(BX(t.urlPreviewId));var n=function e(t){i.attachUrlPreview({url:t})};var r=function e(t,n,r,a){if(n==="createLink"&&BX.type.isPlainObject(a)&&a.hasOwnProperty("href")){i.attachUrlPreview({url:a.href})}};BX.addCustomEvent(e,"OnAfterUrlConvert",n);BX.addCustomEvent(e,"OnAfterLinkInserted",n);BX.addCustomEvent(e,"OnBeforeCommandExec",r);BX.addCustomEvent(e,"OnReinitialize",(function(e,t){i.detachUrlPreview();var n;for(var r in t){if(t.hasOwnProperty(r)&&t[r].hasOwnProperty("USER_TYPE_ID")&&t[r]["USER_TYPE_ID"]==="url_preview"){n=t[r]["VALUE"];break}}if(n){i.attachUrlPreview({id:n})}}))}function B(e,t){e.exec((function(){t.contextMenu.items["postimage"]=t.contextMenu.items["postdocument"]=t.contextMenu.items["postfile"]=[{TEXT:r.Loc.getMessage("BXEdDelFromText"),bbMode:true,ACTION:function e(){var i=t.contextMenu.GetTargetItem("postimage");if(!i)i=t.contextMenu.GetTargetItem("postdocument");if(!i)i=t.contextMenu.GetTargetItem("postfile");if(i&&i.element){t.selection.RemoveNode(i.element)}t.contextMenu.Hide()}}];if(t.toolbar.controls&&t.toolbar.controls.FontSelector){t.toolbar.controls.FontSelector.SetWidth(45)}}))}function I(e){var i=document.querySelector("#lhe_button_submit_"+e.getFormId());if(i){i.addEventListener("click",(function(i){t.EventEmitter.emit(e.getEventObject(),"OnButtonClick",["submit"]);i.preventDefault();i.stopPropagation()}))}var n=document.querySelector("#lhe_button_cancel_"+e.getFormId());if(n){n.addEventListener("click",(function(i){t.EventEmitter.emit(e.getEventObject(),"OnButtonClick",["cancel"]);i.preventDefault();i.stopPropagation()}))}}function S(e,i){var n=e.getContainer().querySelector('[data-bx-role="toolbar"]');if(n.querySelector('[data-id="file"]')){var r=n.querySelector('[data-id="file"]');if(r){r.addEventListener("click",(function(){t.EventEmitter.emit(e.getEventObject(),"onShowControllers",r.hasAttribute("data-bx-button-status")?"hide":"show")}));t.EventEmitter.subscribe(e.getEventObject(),"onShowControllers",(function(e){var t=e.data;if(t.toString()==="show"){r.setAttribute("data-bx-button-status","active")}else{r.removeAttribute("data-bx-button-status")}}));r.setAttribute("data-bx-files-count",0);t.EventEmitter.subscribe(e.getEventObject(),"onShowControllers:File:Increment",(function(e){var t=e.data;var i=t>0?t:1;var n=Math.max(parseInt(r.getAttribute("data-bx-files-count")||0)+i,0);if(n>0){if(!r["counterObject"]){r["counterObject"]=new BX.UI.Counter({value:n,color:BX.UI.Counter.Color.GRAY,animate:true});var a=r.querySelector("span");a.appendChild(r["counterObject"].getContainer())}else{r["counterObject"].update(n)}}r.setAttribute("data-bx-files-count",n)}));t.EventEmitter.subscribe(e.getEventObject(),"onShowControllers:File:Decrement",(function(e){var t=e.data;var i=t>0?t:1;var n=Math.max(parseInt(r.getAttribute("data-bx-files-count")||0)-i,0);r.setAttribute("data-bx-files-count",n);if(r["counterObject"]){r["counterObject"].update(n)}}))}}if(n.querySelector('[data-id="search-tag"]')){window["BXPostFormTags_"+e.getFormId()]=new BXPostFormTags(e.getFormId(),n.querySelector('[data-id="search-tag"]'))}if(n.querySelector('[data-id="create-link"]')){n.querySelector('[data-id="create-link"]').addEventListener("click",(function(e){i.toolbar.controls.InsertLink.OnClick(e)}))}if(n.querySelector('[data-id="video"]')){n.querySelector('[data-id="video"]').addEventListener("click",(function(e){i.toolbar.controls.InsertVideo.OnClick(e)}))}if(n.querySelector('[data-id="quote"]')){var a=n.querySelector('[data-id="quote"]');a.setAttribute("data-bx-type","action");a.setAttribute("data-bx-action","quote");a.addEventListener("mousedown",(function(e){i.toolbar.controls.Quote.OnMouseDown.apply(i.toolbar.controls.Quote,[e]);i.CheckCommand(a)}))}if(e.getContainer().querySelector('[data-bx-role="button-show-panel-editor"]')){e.getContainer().querySelector('[data-bx-role="button-show-panel-editor"]').addEventListener("click",(function(){e.showPanelEditor()}))}var o=n.querySelector('[data-id="copilot"]');if(o){o.addEventListener("click",(function(){if(!e.isTextCopilotEnabledBySettings()){top.BX.UI.InfoHelper.show("limit_copilot_off");return}e.showCopilot()}))}}var C;var T;function P(e,t){if(!T){T=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){T.unobserve(e.target);var t=e.target.observedCallback;delete e.target.observedCallback;setTimeout(t)}}))}),{threshold:0})}e.observedCallback=t;T.observe(e)}var O=0;var x=function(){function e(t,i){babelHelpers.classCallCheck(this,e);this.container=i.querySelector('[data-bx-role="toolbar"]');this.adjustMorePosition=this.adjustMorePosition.bind(this);this.moreItem=i.querySelector('[data-bx-role="toolbar-item-more"]');this.moreItem.addEventListener("click",this.showSubmenu.bind(this));P(this.container,this.adjustMorePosition);window.addEventListener("resize",this.adjustMorePosition)}babelHelpers.createClass(e,[{key:"insertAfter",value:function e(t,i){if(!r.Type.isElementNode(t["BODY"])&&!r.Type.isStringFilled(t["BODY"])){return}var n=r.Tag.render(C||(C=babelHelpers.taggedTemplateLiteral(['<div class="main-post-form-toolbar-button" data-bx-role="toolbar-item"></div>'])));if(r.Type.isElementNode(t["BODY"])){n.appendChild(t["BODY"])}else{n.innerHTML=t["BODY"]}if(t["ID"]){n.setAttribute("data-id",t["ID"])}if(i!==null){var a=false;var o=null;Array.from(this.container.querySelectorAll('[data-bx-role="toolbar-item"]')).forEach((function(e){if(a===true&&o===null){o=e}else if(a===false&&e&&e.dataset&&e.dataset.id===i){a=true}}));if(o){o.parentNode.insertBefore(n,o)}}if(!n.parentNode){this.container.appendChild(n)}this.adjustMorePosition()}},{key:"getItems",value:function e(){return Array.from(this.container.querySelectorAll('[data-bx-role="toolbar-item"]'))}},{key:"getVisibleItems",value:function e(){var t=this;var i=[];Array.from(this.container.querySelectorAll('[data-bx-role="toolbar-item"]')).forEach((function(e){if(e.offsetTop>t.container.clientHeight/2){i.push(e)}}));return i}},{key:"getHiddenItems",value:function e(){var t=[];Array.from(this.container.querySelectorAll('[data-bx-role="toolbar-item"]')).forEach((function(e){if(e.offsetTop>0){t.push(e)}}));return t}},{key:"adjustMorePosition",value:function e(){var t=this.getVisibleItems().length;if(t<=0||t>=this.getItems().length){this.moreItem.style.display="none"}else{this.moreItem.style.display=""}}},{key:"getPopup",value:function e(){var t=this;if(!this.popup){this.popup=n.PopupManager.create({id:"main_post_form_toolbar_"+O++,className:"main-post-form-toolbar-popup",cacheable:false,content:this.getPopupContainer(),closeByEsc:true,autoHide:true,angle:true,bindElement:this.moreItem,offsetTop:-5,offsetLeft:5,events:{onClose:function e(){Array.from(t.getPopupContainer().querySelectorAll('[data-bx-role="toolbar-item"]')).forEach((function(e){t.container.appendChild(e)}));delete t.popup}}})}return this.popup}},{key:"getPopupContainer",value:function e(){if(!this.popupContainer){this.popupContainer=document.createElement("DIV")}return this.popupContainer}},{key:"showSubmenu",value:function e(){var t=this;var i=this.getHiddenItems();if(i.length<=0){return}i.forEach((function(e){t.getPopupContainer().appendChild(e)}));this.getPopup().show()}}]);return e}();var k=function(){function e(){babelHelpers.classCallCheck(this,e)}babelHelpers.createClass(e,null,[{key:"showPopup",value:function e(t){var i=n.PopupManager.getPopupById(this.getPopupId());if(!i){i=new n.Popup(this.getPopupId(),null,{content:this.getTasksLimitPopupContent(),lightShadow:false,offsetLeft:20,autoHide:false,angle:{position:"bottom"},closeByEsc:false,closeIcon:true})}i.setBindElement(t.bindPosition);i.show()}},{key:"getPopupId",value:function e(){return"bx-post-mention-tasks-limit-popup"}},{key:"getTasksLimitPopupContent",value:function e(){return r.Dom.create("DIV",{style:{width:"400px",padding:"10px"},children:[r.Dom.create("SPAN",{html:r.Loc.getMessage("MPF_MENTION_TASKS_LIMIT").replace("#A_BEGIN#",'<a href="javascript:void(0);" onclick="BX.Main.PostFormTasksLimit.onClickTasksLimitPopupSlider(this);">').replace("#A_END#","</a>")})]})}},{key:"onClickTasksLimitPopupSlider",value:function e(t){var i=this;BX.Runtime.loadExtension("ui.info-helper").then((function(e){var n=e.FeaturePromotersRegistry;if(n){n.getPromoter({code:"limit_tasks_observers_participants",bindElement:t}).show()}else{i.hidePopup();BX.UI.InfoHelper.show("limit_tasks_observers_participants",{isLimit:true,limitAnalyticsLabels:{module:"tasks",source:"postForm",subject:"auditor"}})}}))}},{key:"hidePopup",value:function e(){var t=n.PopupManager.getPopupById(this.getPopupId());if(t){t.close()}}}]);return e}();function X(e,t,i){A(e,t);H(i,"get");return F(e,i)}function H(e,t){if(e===undefined){throw new TypeError("attempted to "+t+" private static field before its declaration")}}function A(e,t){if(e!==t){throw new TypeError("Private static access of wrong provenance")}}function F(e,t){if(t.get){return t.get.call(e)}return t.value}var D=function(){function e(i,n){var a=this;babelHelpers.classCallCheck(this,e);babelHelpers.defineProperty(this,"jobs",new Map);babelHelpers.defineProperty(this,"editorParams",{height:100,ctrlEnterHandler:null,parsers:null,showPanelEditor:false,lazyLoad:true,urlPreviewId:null,tasksLimitExceeded:false});babelHelpers.defineProperty(this,"actionQueue",[]);this.id=i["id"];this.name=i["name"];this.formId=i["formId"];this.eventNode=i.eventNode||document.querySelector("#div"+(this.name||this.id));this.eventNode.dataset.bxHtmlEditable="Y";this.formEntityType=null;e.repo.set(this.getId(),this);if(!r.Type.isArray(n.parsers)&&r.Type.isPlainObject(n.parsers)){n.parsers=Object.values(n.parsers)}this.setEditorParams(n);this.bindEvents(window["BXHtmlEditor"]?window["BXHtmlEditor"].Get(this.getId()):null);this.toolbar=new x(this.getEventObject(),this.getContainer());this.inited=true;if(this.name!==null){window[this.name]=this}BX.onCustomEvent(this,"onInitialized",[this,this.getFormId()]);t.EventEmitter.subscribe(this.getEventObject(),"OnFileUploadSuccess",(function(e){var t=e.compatData;BX.onCustomEvent(a.getEventObject(),"onFileIsAdded",t)}));t.EventEmitter.subscribe(this.getEventObject(),"onBusy",(function(e){var i=e.data;if(a.jobs.size<=0){t.EventEmitter.emit(a.getEventObject(),"onLHEIsBusy")}a.jobs.set(i,(a.jobs.get(i)||0)+1)}));t.EventEmitter.subscribe(this.getEventObject(),"onReady",(function(e){var i=e.data;if(a.jobs.size<=0||!a.jobs.has(i)){return}var n=a.jobs.get(i);if(n<=1){a.jobs["delete"](i);if(a.jobs.size<=0){t.EventEmitter.emit(a.getEventObject(),"onLHEIsReady")}}else{a.jobs.set(i,--n)}}))}babelHelpers.createClass(e,[{key:"setEditorParams",value:function e(t){this.editorParams=Object.assign(this.editorParams,t)}},{key:"bindEvents",value:function e(){var i=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;this.events={};[["OnEditorInitedBefore",this.OnEditorInitedBefore.bind(this)],["OnCreateIframeAfter",this.OnCreateIframeAfter.bind(this)],["OnEditorInitedAfter",this.OnEditorInitedAfter.bind(this)]].forEach((function(e){var t=babelHelpers.slicedToArray(e,2),r=t[0],a=t[1];if(!n){i.events[r]=function(e){if(e.id===i.getId()){
//!it important to use deprecated eventEmitter
BX.removeCustomEvent(r,i.events[r]);delete i.events[r];a(e)}};
//!it important to use deprecated eventEmitter
BX.addCustomEvent(r,i.events[r])}else{a(n)}}));t.EventEmitter.subscribe(this.getEventObject(),"OnShowLHE",this.OnShowLHE.bind(this));t.EventEmitter.subscribe(this.getEventObject(),"OnButtonClick",this.OnButtonClick.bind(this));t.EventEmitter.subscribe(this.getEventObject(),"OnParserRegister",(function(e){var t=e.data;i.addParser(t)}));t.EventEmitter.subscribe(this.getEventObject(),"OnGetHTMLEditor",(function(e){var t=e.data;t.htmlEditor=i.getEditor()}));t.EventEmitter.subscribe(this.getEventObject(),"OnInsertContent",(function(e){var t=babelHelpers.slicedToArray(e.data,2),n=t[0],r=t[1];i.insertContent(n,r)}));t.EventEmitter.subscribe(this.getEventObject(),"OnAddButton",(function(e){var t=babelHelpers.slicedToArray(e.data,2),n=t[0],r=t[1];i.getToolbar().insertAfter(n,r)}));I(this)}},{key:"getId",value:function e(){return this.id}},{key:"setEditor",value:function i(n){var a=this;if(this.htmlEditor===n){return}this.htmlEditor=n;n.formID=this.getFormId();t.EventEmitter.subscribe(n,"OnCtrlEnter",(function(){n.SaveContent();if(r.Type.isFunction(a.editorParams.ctrlEnterHandler)){a.editorParams.ctrlEnterHandler()}else if(r.Type.isStringFilled(a.editorParams.ctrlEnterHandler)&&window[a.editorParams.ctrlEnterHandler]){window[a.editorParams.ctrlEnterHandler]()}else if(document.forms[a.getFormId()]){BX.submit(document.forms[a.getFormId()])}}));this.editorParams["height"]=n.config["height"];console.groupCollapsed("main.post.form: parsers: ",this.getId());this.editorParams.parsers.forEach((function(e){var t=g(e,a,n);if(t){console.groupCollapsed(e);console.log(t);if(t.hasButton()){n.AddButton(t.getButton())}n.AddParser(t.getParser());console.groupEnd(e)}}));console.groupEnd("main.post.form: parsers: ",this.getId());t.EventEmitter.subscribe(n,"OnImageDataUriHandle",(function(e){var i=babelHelpers.slicedToArray(e.compatData,2),r=i[0],o=i[1];var s=BX.UploaderUtils.dataURLToBlob(o.src);if(s&&s.size>0&&s.type.indexOf("image/")===0){t.EventEmitter.emit(a.getEventObject(),"onShowControllers","show");s.name=s.name||o.title||"image."+s.type.substr(6);s.referrerToEditor=o;t.EventEmitter.emit(a.getEventObject(),"OnImageHasCaught",new t.BaseEvent({data:s})).forEach((function(e){e.then((function(e){var i=e.image,r=e.html;t.EventEmitter.emit(n,"OnImageDataUriCaughtUploaded",new t.BaseEvent({compatData:[o,i,{replacement:r}]}))}))["catch"]((function(){t.EventEmitter.emit(n,"OnImageDataUriCaughtFailed",new t.BaseEvent({compatData:[o]}))}))}))}}));t.EventEmitter.subscribe(t.EventEmitter.GLOBAL_TARGET,"onAddVideoMessage",(function(e){var i=babelHelpers.slicedToArray(e.compatData,2),n=i[0],r=i[1];if(!r||a.getFormId()!==r){return}t.EventEmitter.emit(a.getEventObject(),"onShowControllers","show");t.EventEmitter.emit(a.getEventObject(),"OnVideoHasCaught",new t.BaseEvent({data:n}))}));if(this.editorParams.isDnDEnabled){(function(){var i=BX("micro"+(a.name||a.id));var n=false;var r=0;var o=function e(t){t.preventDefault();t.stopPropagation();if(r>0){clearTimeout(r);r=0}if(n===true){return}var o=t&&t["dataTransfer"]&&t["dataTransfer"]["types"]&&t["dataTransfer"]["types"].indexOf("Files")>=0;if(o){n=true;a.getContainer().classList.add("feed-add-post-dnd-over");if(i){i.classList.add("feed-add-post-micro-dnd-ready")}}return true};var s=function e(t){t.preventDefault();t.stopPropagation();if(r>0){clearTimeout(r)}r=setTimeout((function(){n=false;a.getContainer().classList.remove("feed-add-post-dnd-over");if(i){i.classList.remove("feed-add-post-micro-dnd-ready")}}),100);return false};var l=function e(i){s(i);if(i&&i["dataTransfer"]&&i["dataTransfer"]["types"]&&i["dataTransfer"]["types"].indexOf("Files")>=0&&i["dataTransfer"]["files"]&&i["dataTransfer"]["files"].length>0){t.EventEmitter.emit(a.getEventObject(),"OnShowLHE",new t.BaseEvent({compatData:["justShow",{onShowControllers:"show"}]}));t.EventEmitter.emit(a.getEventObject(),"onFilesHaveCaught",new t.BaseEvent({data:i["dataTransfer"]["files"]}));t.EventEmitter.emit(a.getEventObject(),"onFilesHaveDropped",{event:i})}return false};a.getContainer().addEventListener("dragover",o);a.getContainer().addEventListener("dragenter",o);a.getContainer().addEventListener("dragleave",s);a.getContainer().addEventListener("dragexit",s);a.getContainer().addEventListener("drop",l);a.getContainer().setAttribute("dropzone","copy f:*/*");if(!document.body.hasAttribute("dropzone")){document.body.setAttribute("dropzone","copy f:*/*");document.body.addEventListener("dragover",(function(e){e.preventDefault();e.stopPropagation();return true}));document.body.addEventListener("drop",function(i){i.preventDefault();i.stopPropagation();if(i&&i["dataTransfer"]&&i["dataTransfer"]["types"]&&i["dataTransfer"]["types"].indexOf("Files")>=0&&i["dataTransfer"]["files"]&&i["dataTransfer"]["files"].length>0){var n;var r;var a=X(this.constructor,e,N).keys();while((r=a.next())&&r.done!==true&&r.value){n=r.value}if(n){t.EventEmitter.emit(n.getEventObject(),"OnShowLHE",new t.BaseEvent({compatData:["justShow",{onShowControllers:"show"}]}));t.EventEmitter.emit(n.getEventObject(),"onFilesHaveCaught",new t.BaseEvent({data:i["dataTransfer"]["files"]}));t.EventEmitter.emit(n.getEventObject(),"onFilesHaveDropped",{event:i})}}return false}.bind(a))}if(i){i.addEventListener("dragenter",(function(e){o(e);t.EventEmitter.emit(a.getEventObject(),"OnShowLHE",new t.BaseEvent({compatData:["justShow",{onShowControllers:"show"}]}))}))}t.EventEmitter.subscribe(a.getEditor(),"OnIframeDrop",(function(e){var t=babelHelpers.slicedToArray(e.data,1),i=t[0];return l(i)}));t.EventEmitter.subscribe(a.getEditor(),"OnIframeDragOver",(function(e){var t=babelHelpers.slicedToArray(e.data,1),i=t[0];return o(i)}));t.EventEmitter.subscribe(a.getEditor(),"OnIframeDragLeave",(function(e){var t=babelHelpers.slicedToArray(e.data,1),i=t[0];return s(i)}))})()}t.EventEmitter.subscribe(n,"OnInsertContent",(function(e){var t=babelHelpers.slicedToArray(e.data,2),i=t[0],n=t[1];a.insertContent(i,n)}));y(this,n,this.editorParams);w(n,this.editorParams);B(this,n);E(n,BX(this.getFormId()));S(this,n);t.EventEmitter.subscribe(this.getEventObject(),"OnAfterShowLHE",(function(){a.getEditor().AllowBeforeUnloadHandler()}));t.EventEmitter.subscribe(this.getEventObject(),"OnAfterHideLHE",(function(){k.hidePopup();a.getEditor().DenyBeforeUnloadHandler()}));t.EventEmitter.subscribe(n,"OnIframeClick",(function(){var e=new MouseEvent("click",{bubbles:true,cancelable:true,view:window});n.iframeView.container.dispatchEvent(e)}))}},{key:"getEditor",value:function e(){return this.htmlEditor}},{key:"getFormId",value:function e(){return this.formId}},{key:"getEventObject",value:function e(){return this.eventNode}},{key:"getContainer",value:function e(){return this.eventNode}},{key:"getToolbar",value:function e(){return this.toolbar}},{key:"OnEditorInitedBefore",value:function e(t){this.setEditor(t)}},{key:"OnCreateIframeAfter",value:function e(){if(this.editorIsLoaded!==true){this.editorIsLoaded=true;this.exec();t.EventEmitter.emit(this,"OnEditorIsLoaded",[])}}},{key:"OnEditorInitedAfter",value:function e(i){if(!this.editorParams.lazyLoad){t.EventEmitter.emit(this.getEventObject(),"OnShowLHE",new t.BaseEvent({compatData:["justShow",i,false]}))}if(i.sandbox&&i.sandbox.inited){this.OnCreateIframeAfter()}}},{key:"addParser",value:function e(t){var i=this;this.exec((function(){t.init(i.getEditor());i.getEditor().AddParser({name:t.id,obj:{Parse:function e(i,n){return t.parse(n)},UnParse:t.unparse}});if(!i["addParserAfterDebounced"]){i.addParserAfterDebounced=r.Runtime.debounce((function(){var e=i.getEditor().GetContent();if(/&#9[13];/gi.test(e)){i.getEditor().SetContent(e.replace(/&#91;/gi,"[").replace(/&#93;/gi,"]"),true)}}),100)}i.addParserAfterDebounced()}))}},{key:"insertContent",value:function e(t){var i=this;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;this.exec((function(){var e=i.getEditor().GetViewMode();if(e==="wysiwyg"){var r=i.getEditor().selection.GetRange();i.getEditor().InsertHtml(n||t,r);setTimeout(i.getEditor().AutoResizeSceleton.bind(i.getEditor()),500);setTimeout(i.getEditor().AutoResizeSceleton.bind(i.getEditor()),1e3)}else{i.getEditor().textareaView.Focus();if(!i.getEditor().bbCode){var a=i.getEditor().GetIframeDoc();var o=a.createElement("DIV");o.style.display="none";o.innerHTML=t;a.body.appendChild(o);t=i.getEditor().Parse(t,true,false);o.parentNode.removeChild(o)}i.getEditor().textareaView.WrapWith("","",t)}}))}},{key:"reinit",value:function e(i,n){var a=this;var o="hide";if(r.Type.isPlainObject(n)&&Object.values(n).length){Object.values(n).forEach((function(e){if(e&&e["VALUE"]){o="show"}}))}t.EventEmitter.emitAsync(this.getEventObject(),"onReinitializeBeforeAsync",[i,n]).then((function(){t.EventEmitter.emit(a.getEventObject(),"onShowControllers",o);t.EventEmitter.emit(a.getEventObject(),"onReinitializeBefore",[i,n]);a.getEditor().CheckAndReInit(r.Type.isString(i)?i:"");BX.onCustomEvent(a.getEditor(),"onReinitialize",[a,i,n]);if(a.editorParams["height"]){a.oEditor.SetConfigHeight(a.editorParams["height"]);a.oEditor.ResizeSceleton()}}))}},{key:"OnShowLHE",value:function i(n){var a=this;var o=n.data,s=n.compatData;var l=o||s,d=babelHelpers.slicedToArray(l,3),c=d[0],u=d[1],f=d[2];if(!this.getEditor()&&window["BXHtmlEditor"]){window["BXHtmlEditor"].Get(this.getId()).Init()}c=c===false||c==="hide"||c==="justShow"?c:true;var p=BX("micro"+(this.name||this.id));if(p){p.style.display=c===true||c==="justShow"?"none":"block"}if(c==="hide"){X(this.constructor,e,N)["delete"](this);t.EventEmitter.emit(this.getEventObject(),"OnBeforeHideLHE");if(this.getContainer().style.display==="none"){t.EventEmitter.emit(this.getEventObject(),"OnAfterHideLHE");t.EventEmitter.emit(this.getEventObject(),"onShowControllers","hide")}else{new BX["easing"]({duration:200,start:{opacity:100,height:this.getContainer().scrollHeight},finish:{opacity:0,height:20},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function e(t){a.getContainer().style.height=t.height+"px";a.getContainer().style.opacity=t.opacity/100},complete:function e(){a.getContainer().style.cssText="";a.getContainer().style.display="none";t.EventEmitter.emit(a.getEventObject(),"OnAfterHideLHE");t.EventEmitter.emit(a.getEventObject(),"onShowControllers","hide")}}).animate()}}else if(c){X(this.constructor,e,N).set(this);this.formEntityType=r.Type.isArray(f)&&r.Type.isStringFilled(f[0])&&f[0].match(/^TASK_(\d+)$/i)?"task":null;if(u&&r.Type.isPlainObject(u)){if(u["onShowControllers"]){t.EventEmitter.emit(this.getEventObject(),"onShowControllers",u["onShowControllers"])}}t.EventEmitter.emit(this.getEventObject(),"OnBeforeShowLHE");if(c==="justShow"||this.getContainer().style.display==="block"){this.getContainer().style.display="block";t.EventEmitter.emit(this.getEventObject(),"OnAfterShowLHE");if(u!==false){this.getEditor().Focus()}}else{r.Dom.adjust(this.getContainer(),{style:{display:"block",overflow:"hidden",height:"20px",opacity:.1}});new BX["easing"]({duration:200,start:{opacity:10,height:20},finish:{opacity:100,height:this.getContainer().scrollHeight},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function e(t){a.getContainer().style.height=t.height+"px";a.getContainer().style.opacity=t.opacity/100},complete:function e(){t.EventEmitter.emit(a.getEventObject(),"OnAfterShowLHE");a.getEditor().Focus();a.getContainer().style.cssText=""}}).animate()}}else{X(this.constructor,e,N)["delete"](this);t.EventEmitter.emit(this.getEventObject(),"OnBeforeHideLHE");t.EventEmitter.emit(this.getEventObject(),"onShowControllers","hide");this.getContainer().style.display="none";t.EventEmitter.emit(this.getEventObject(),"OnAfterHideLHE")}}},{key:"OnButtonClick",value:function e(i){var n=babelHelpers.slicedToArray(i.data,1),r=n[0];if(r!=="cancel"){var a={result:true};t.EventEmitter.emit(this.getEventObject(),"OnClickBeforeSubmit",new t.BaseEvent({compatData:[this,a]}));if(a["result"]!==false){t.EventEmitter.emit(this.getEventObject(),"OnClickSubmit",new t.BaseEvent({compatData:[this]}))}}else{t.EventEmitter.emit(this.getEventObject(),"OnClickCancel",new t.BaseEvent({compatData:[this]}));t.EventEmitter.emit(this.getEventObject(),"OnShowLHE",new t.BaseEvent({compatData:["hide"]}))}}},{key:"exec",value:function e(t,i){if(typeof t=="function"){this.actionQueue.push([t,i])}if(this.editorIsLoaded===true){var n;while((n=this.actionQueue.shift())&&n){n[0].apply(this,n[1])}}}},{key:"showPanelEditor",value:function e(){y(this,this.getEditor(),{})}},{key:"getContent",value:function e(){return this.oEditor?this.oEditor.GetContent():""}},{key:"setContent",value:function e(t){if(this.getEditor()){this.getEditor().SetContent(t)}}},{key:"controllerInit",value:function e(i){t.EventEmitter.emit(this.getEventObject(),"onShowControllers",i==="hide"?"hide":"show")}},{key:"showCopilot",value:function e(){this.getEditor().SetView("wysiwyg");this.getEditor().ShowCopilotAtTheBottom()}},{key:"isTextCopilotEnabledBySettings",value:function e(){var t=this.getEditor().config.isCopilotTextEnabledBySettings;return r.Type.isNil(t)||t}},{key:"isImageCopilotEnabledBySettings",value:function e(){var t=this.getEditor().config.isCopilotImageEnabledBySettings;return r.Type.isNil(t)||t}},{key:"isReady",get:function e(){return this.editorIsLoaded}},{key:"oEditor",get:function e(){return this.getEditor()}},{key:"oEditorId",get:function e(){return this.getId()}},{key:"formID",get:function e(){return this.getFormId()}},{key:"params",get:function e(){return{formID:this.getFormId()}}},{key:"controllers",get:function e(){var i=new t.BaseEvent;var n={};i.setData(n);t.EventEmitter.emit(this.getEventObject(),"onCollectControllers",i);var a={};Object.keys(n).forEach((function(e){a[e]=Object.assign({},n[e]);a[e]["values"]={};if(r.Type.isArray(n[e]["values"])){n[e]["values"].forEach((function(t){a[e]["values"][t]={id:t}}))}else if(r.Type.isPlainObject(n[e]["values"])){a[e]["values"]=Object.assign({},n[e]["values"])}}));return a}},{key:"arFiles",get:function e(){var i=new t.BaseEvent;var n={};i.setData(n);t.EventEmitter.emit(this.getEventObject(),"onCollectControllers",i);var r={};Object.keys(n).forEach((function(e){if(n[e]["values"]){n[e]["values"].forEach((function(t){r[t]=[e]}))}}));return r}}]);return e}();babelHelpers.defineProperty(D,"repo",new Map);var N={writable:true,value:new Map};window["LHEPostForm"]={getEditor:function e(t){return window["BXHtmlEditor"]?window["BXHtmlEditor"].Get(babelHelpers["typeof"](t)=="object"?t.id:t):null},getHandler:function e(t){var i=r.Type.isStringFilled(t)?t:t.id;return D.repo.get(i)},getHandlerByFormId:function e(t){var i=null;D.repo.forEach((function(e){if(e.getFormId()===t){i=e}}));return i},reinitData:function e(t,i,n){var a={};if(!r.Type.isPlainObject(n)){n={}}Object.entries(n).forEach((function(e){var t=babelHelpers.slicedToArray(e,2),i=t[0],n=t[1];if(r.Type.isPlainObject(n)&&n["USER_TYPE_ID"]&&n["VALUE"]&&Object.values(n["VALUE"]).length>0){a[i]=n}}));var o=this.getHandler(t);if(o&&(o.isReady||r.Type.isStringFilled(i)||Object.values(a).length>0)){o.exec(o.reinit,[i,a])}return false},reinitDataBefore:function e(i){var n=D.repo.get(i);if(n&&n.getEventObject()){t.EventEmitter.emit(n.getEventObject(),"onReinitializeBefore",[n])}}};e.PostForm=D;e.PostFormTasksLimit=k})(this.BX.Main=this.BX.Main||{},BX.Event,BX,BX.Main,BX);(function(){if(window["BXPostFormTags"])return;var e={selector:{},mentionParams:{}};window.BXPostFormTags=function(e,t){this.popup=null;this.formID=e;this.buttonID=t;this.sharpButton=null;this.addNewLink=null;this.tagsArea=null;this.hiddenField=null;this.popupContent=null;BX.ready(BX.proxy(this.init,this))};window.BXPostFormTags.prototype.init=function(){this.sharpButton=BX(this.buttonID);this.addNewLink=BX("post-tags-add-new-"+this.formID);this.tagsArea=BX("post-tags-block-"+this.formID);this.tagsContainer=BX("post-tags-container-"+this.formID);this.hiddenField=BX("post-tags-hidden-"+this.formID);this.popupContent=BX("post-tags-popup-content-"+this.formID);this.popupInput=BX.findChild(this.popupContent,{tag:"input"});var e=BX.findChildren(this.tagsContainer,{className:"feed-add-post-del-but"},true);for(var t=0,i=e.length;t<i;t++){BX.bind(e[t],"click",BX.proxy(this.onTagDelete,{obj:this,tagBox:e[t].parentNode,tagValue:e[t].parentNode.getAttribute("data-tag")}))}BX.bind(this.sharpButton,"click",BX.proxy(this.onButtonClick,this));BX.bind(this.addNewLink,"click",BX.proxy(this.onAddNewClick,this))};window.BXPostFormTags.prototype.onTagDelete=function(){BX.remove(this.tagBox);this.obj.hiddenField.value=this.obj.hiddenField.value.replace(this.tagValue+",","").replace("  "," ")};window.BXPostFormTags.prototype.show=function(){if(this.popup===null){this.popup=new BX.PopupWindow("bx-post-tag-popup",this.addNewLink,{content:this.popupContent,lightShadow:false,offsetTop:8,offsetLeft:10,autoHide:true,angle:true,closeByEsc:true,zIndex:-840,buttons:[new BX.PopupWindowButton({text:BX.message("TAG_ADD"),events:{click:BX.proxy(this.onTagAdd,this)}})]});BX.bind(this.popupInput,"keydown",BX.proxy(this.onKeyPress,this));BX.bind(this.popupInput,"keyup",BX.proxy(this.onKeyPress,this))}this.popup.show();BX.focus(this.popupInput)};window.BXPostFormTags.prototype.addTag=function(e){var t=BX.type.isNotEmptyString(e)?e.split(","):this.popupInput.value.split(",");var i=[];for(var n=0;n<t.length;n++){var r=BX.util.trim(t[n]);if(r.length>0){var a=this.hiddenField.value.split(",");if(!BX.util.in_array(r,a)){var o;var s=BX.create("span",{children:[o=BX.create("span",{attrs:{class:"feed-add-post-del-but"}})],attrs:{class:"feed-add-post-tags"}});s.insertBefore(document.createTextNode(r),o);this.tagsContainer.insertBefore(s,this.addNewLink);BX.bind(o,"click",BX.proxy(this.onTagDelete,{obj:this,tagBox:s,tagValue:r}));this.hiddenField.value+=r+",";i.push(r)}}}return i};window.BXPostFormTags.prototype.onTagAdd=function(){this.addTag();this.popupInput.value="";this.popup.close()};window.BXPostFormTags.prototype.onAddNewClick=function(e){e=e||window.event;this.show();BX.PreventDefault(e)};window.BXPostFormTags.prototype.onButtonClick=function(e){e=e||window.event;BX.show(this.tagsArea);this.show();BX.PreventDefault(e)};window.BXPostFormTags.prototype.onKeyPress=function(e){e=e||window.event;var t=e.keyCode?e.keyCode:e.which?e.which:null;if(t==13){setTimeout(BX.proxy(this.onTagAdd,this),0)}};window.BXPostFormImportant=function(e,t,i){if(i){this.formID=e;this.buttonID=t;this.inputName=i;this.fireButton=null;this.activeBlock=null;this.hiddenField=null;BX.ready(BX.proxy(this.init,this))}return false};window.BXPostFormImportant.prototype.init=function(){this.fireButton=BX(this.buttonID);this.activeBlock=BX(this.buttonID+"-active");var e=BX(this.formID);if(e){this.hiddenField=e[this.inputName];if(this.hiddenField&&this.hiddenField.value==1){this.showActive()}}BX.bind(this.fireButton,"click",BX.proxy((function(e){e=e||window.event;this.showActive();BX.PreventDefault(e)}),this));BX.bind(this.activeBlock,"click",BX.proxy((function(e){e=e||window.event;this.hideActive();BX.PreventDefault(e)}),this))};window.BXPostFormImportant.prototype.showActive=function(e){BX.hide(this.fireButton);BX.show(this.activeBlock,"inline-block");if(this.hiddenField){this.hiddenField.value=1}return false};window.BXPostFormImportant.prototype.hideActive=function(e){BX.hide(this.activeBlock);BX.show(this.fireButton,"inline-block");if(this.hiddenField){this.hiddenField.value=0}return false};var t=null;window.MPFbuttonShowWait=function(e){if(e&&!BX.type.isElementNode(e)){e=null}e=e||this;e=e?e.tagName=="A"?e:e.parentNode:e;if(e){BX.addClass(e,"ui-btn-clock");t=e;BX.defer((function(){e.disabled=true}))()}};var i={listen:false,plus:false,text:"",bSearch:false,node:null,mode:null};BX.addCustomEvent(window,"onInitialized",(function(e){if(e&&e.eventNode){BX.onCustomEvent(e.eventNode,"OnClickCancel",(function(){i.node=null}))}}));BX.addCustomEvent(window,"BX.MPF.MentionSelector:open",(function(t){var i=BX.Type.isStringFilled(t.formId)?t.formId:"";if(!BX.Type.isStringFilled(i)||BX.Type.isUndefined(e.mentionParams[i])){return}var n=BX.Type.isDomNode(t.bindNode)?t.bindNode:null;var r=BX.type.isNotEmptyObject(t.bindPosition)?t.bindPosition:null;var a=window.MPFgetSelectorId("bx-mention-"+i+"-id")+(n?"-withsearch":"");var o=BX.UI.EntitySelector.Dialog.getById(a);if(!o){window.MPFcreateSelectorDialog({formId:i,selectorId:a,enableSearch:!!n,params:e.mentionParams[i]});o=BX.UI.EntitySelector.Dialog.getById(a)}if(!o){return}o.deselectAll();o.search("");o.show();var s={};if(BX.Type.isDomNode(n)){o.focusSearch();o.popup.setBindElement(n);s.position="top"}else if(BX.type.isNotEmptyObject(r)){r.top-=5;o.popup.setBindElement(r)}o.popup.adjustPosition(s)}));window.onKeyDownHandler=function(e,t,r){var a=e.keyCode;if(!window["BXfpdStopMent"+r]){return true}var o=window.MPFgetSelectorId("bx-mention-"+r+"-id");if(a===t.KEY_CODES["backspace"]&&i.node){var s=BX.util.trim(t.util.GetTextContent(i.node));if(s==="+"||s==="@"||i.mode=="button"&&s.length==1){window["BXfpdStopMent"+r]()}else if(i.mode=="button"&&s.length==1){window["BXfpdStopMent"+r]()}}if(BX.util.in_array(a,[107,187])||(e.shiftKey||e.modifiers>3)&&BX.util.in_array(a,[50,43,61])||e.altKey&&BX.util.in_array(a,[76])||e.altKey&&e.ctrlKey&&BX.util.in_array(a,[81])&&e.key==="@"||e.altKey&&BX.util.in_array(a,[71,81])&&e.key==="@"||e.altKey&&BX.util.in_array(a,[50])&&e.key==="@"||BX.Type.isFunction(e.getModifierState)&&!!e.getModifierState("AltGraph")&&BX.util.in_array(a,[81,50,48])&&!BX.Type.isUndefined(e.key)&&e.key==="@"||BX.util.in_array(a,[192])&&e.key==="@"){setTimeout((function(){var e=t.selection.GetRange();var a=t.GetIframeDoc();var s=e?e.endContainer.textContent:"";var l=s?s.slice(e.endOffset-1,e.endOffset):"";var d=s?s.slice(e.endOffset-2,e.endOffset-1):"";if((l=="@"||l=="+")&&(!d||BX.util.in_array(d,["+","@",",","("])||d.length==1&&BX.util.trim(d)==="")){i.listen=true;i.listenFlag=true;i.text="";i.leaveContent=true;i.mode="plus";e.setStart(e.endContainer,e.endOffset-1);e.setEnd(e.endContainer,e.endOffset);t.selection.SetSelection(e);i.node=BX.create("SPAN",{props:{id:"bx-mention-node"}},a);t.selection.Surround(i.node,e);e.setStart(i.node,1);e.setEnd(i.node,1);t.selection.SetSelection(e);if(BX.Type.isStringFilled(o)){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{formId:r,bindPosition:n(i.node,t)}])}}}),10)}if(i.listen){var l=null;var d=BX.Type.isStringFilled(o)?BX.UI.EntitySelector.Dialog.getById(o):null;if(d&&d.getActiveTab()){l=d.getActiveTab().getId()}var c=null;switch(a){case t.KEY_CODES.enter:c="Enter";break;case 9:c="Tab";break;case t.KEY_CODES.up:c="ArrowUp";break;case t.KEY_CODES.down:c="ArrowDown";break;case t.KEY_CODES.left:if(l==="departments"){c="ArrowLeft"}break;case t.KEY_CODES.right:if(l==="departments"){c="ArrowRight"}break}if(c){var u=new KeyboardEvent("keydown",{key:c,keyCode:a,bubbles:true,cancelable:true,view:window});if(!document.dispatchEvent(u)){t.iframeKeyDownPreventDefault=true;e.stopPropagation();e.preventDefault()}}}if(!i.listen&&i.listenFlag&&a===t.KEY_CODES["enter"]){var f=t.selection.GetRange();if(f.collapsed){var p=f.endContainer;var h=t.GetIframeDoc();if(p){if(p.className!=="bxhtmled-metion"){p=BX.findParent(p,(function(e){return e.className=="bxhtmled-metion"}),h.body)}if(p&&p.className=="bxhtmled-metion"){t.selection.SetAfter(p)}}}}};window.onKeyUpHandler=function(e,t,n){var r=e.keyCode;var a;var o;if(!window["BXfpdStopMent"+n]){return true}if(i.listen===true){if(r==t.KEY_CODES.escape){var s=new KeyboardEvent("keyup",{key:"Escape",keyCode:r,bubbles:true,cancelable:true,view:window});if(!document.dispatchEvent(s)){e.stopPropagation();e.preventDefault()}window["BXfpdStopMent"+n]()}else if(r!==t.KEY_CODES.enter&&r!==t.KEY_CODES.left&&r!==t.KEY_CODES.right&&r!==t.KEY_CODES.up&&r!==t.KEY_CODES.down){if(BX(i.node)){o=BX.util.trim(t.util.GetTextContent(i.node));var l=o;o=o.replace(/^[\+@]*/,"");i.bSearch=BX.Type.isStringFilled(o);var d=window.MPFgetSelectorId("bx-mention-"+n+"-id");var c=BX.UI.EntitySelector.Dialog.getById(d);if(BX.Type.isStringFilled(o)&&c){c.search(o)}if(i.leaveContent&&i._lastText){if(l===""){window["BXfpdStopMent"+n]()}else if(l!==""&&o===""){i.bSearch=false;if(c){c.search("")}}}i.lastText=o;i._lastText=l}else{window["BXfpdStopMent"+n]()}}}else{if(!e.shiftKey&&(r===t.KEY_CODES["space"]||r===t.KEY_CODES["escape"]||r===188||r===190)){a=t.selection.GetRange();if(a.collapsed){var u=a.endContainer;var f=t.GetIframeDoc();if(u){if(u.className!=="bxhtmled-metion"){u=BX.findParent(u,(function(e){return e.className=="bxhtmled-metion"}),f.body)}if(u&&u.className=="bxhtmled-metion"){o=t.util.GetTextContent(u);var p=o.match(/[\s\.\,]$/);if(p||r===t.KEY_CODES["escape"]){u.innerHTML=o.replace(/[\s\.\,]$/,"");var h=BX.create("SPAN",{html:p||t.INVISIBLE_SPACE},f);t.util.InsertAfter(h,u);t.selection.SetAfter(h)}}}}}}};window.onTextareaKeyDownHandler=function(e,t,n){var r=e.keyCode;if(i.listen&&r==t.KEY_CODES.enter){t.textareaKeyDownPreventDefault=true;e.stopPropagation();e.preventDefault()}};window.onTextareaKeyUpHandler=function(e,t,n){var r=null;var a="";var o=e.keyCode;var s=window.MPFgetSelectorId("bx-mention-"+n+"-id");if(i.listen===true){if(o==27){window["BXfpdStopMent"+n]()}else if(o!==13){a=t.textareaView.GetValue(false);r=t.textareaView.GetCursorPosition();var l="";var d="";if(a.indexOf("+")!==-1||a.indexOf("@")!==-1){var c=a.substr(0,r);var u=Math.max(c.lastIndexOf("+"),c.lastIndexOf("@"));if(u>=0){l=c.substr(u);d=l;l=l.replace(/^[\+@]*/,"");i.bSearch=BX.Type.isStringFilled(l);var f=BX.UI.EntitySelector.Dialog.getById(s);if(BX.Type.isStringFilled(l)&&f){f.search(l)}}}if(i._lastText){if(d===""){window["BXfpdStopMent"+n]()}else if(d!==""&&l===""){i.bSearch=false;if(f){f.search("")}}}i.lastText=l;i._lastText=d}}else{if(o==16){var p=this;this.shiftPressed=true;if(this.shiftTimeout){this.shiftTimeout=clearTimeout(this.shiftTimeout)}this.shiftTimeout=setTimeout((function(){p.shiftPressed=false}),100)}if(o==107||(e.shiftKey||e.modifiers>3||this.shiftPressed)&&BX.util.in_array(o,[187,50,107,43,61])){r=t.textareaView.element.selectionStart;if(r>0){a=t.textareaView.element.value;var h=a.substr(r-1,1);if(h&&(h==="+"||h==="@")){i.listen=true;i.listenFlag=true;i.text="";i.textarea=true;i.bSearch=false;i.mode="plus";BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{formId:n,bindPosition:BX.pos(document.getElementById("bx-b-mention-"+n))}])}}}}};var n=function(e,t){var i=BX.pos(e);var n=BX.pos(t.dom.areaCont);var r=BX.GetWindowScrollPos(t.GetIframeDoc());var a=n.top+i.bottom-r.scrollTop+2;var o=n.left+i.right-r.scrollLeft;return{top:a,left:o}};window.BxInsertMention=function(e){var t=e.item;var r=e.type;var a=e.formID;var o=e.editorId;var s=e.bNeedComa;var l=LHEPostForm.getEditor(o);var d;if((r==="user"||r==="project"||r==="department")&&t&&t.entityId>0&&l){if(l.GetViewMode()=="wysiwyg"){var c=l.GetIframeDoc();var u=l.selection.GetRange();var f=BX.create("SPAN",{props:{className:"bxhtmled-metion"},text:BX.util.htmlspecialcharsback(t.name)},c);d=BX.create("SPAN",{html:s?",&nbsp;":"&nbsp;"},c);var p={tag:"postuser",params:{value:t.entityId}};switch(r){case"project":p.projectId=t.entityId;p.projectName=t.name;break;case"department":p.departmentId=t.entityId;p.departmentName=t.name;break;default:p.userId=t.entityId;p.userName=t.name}l.SetBxTag(f,p);if(BX(i.node)&&i.node.parentNode){l.util.ReplaceNode(i.node,f)}else{l.selection.InsertNode(f,u)}if(f&&f.parentNode){var h=BX.findParent(f,{className:"bxhtmled-metion"},c.body);if(h){l.util.InsertAfter(f,h)}}if(f&&f.parentNode){l.util.InsertAfter(d,f);l.selection.SetAfter(d)}}else if(l.GetViewMode()=="code"&&l.bbCode){l.textareaView.Focus();var b=l.textareaView.GetValue(false);var m=l.textareaView.GetCursorPosition();var v=b.substr(0,m);var g=Math.max(v.lastIndexOf("+"),v.lastIndexOf("@"));if(g>=0&&m>g){l.textareaView.SetValue(b.substr(0,g)+b.substr(m));l.textareaView.element.setSelectionRange(g,g)}var E="";switch(r){case"user":E="USER";break;case"project":E="PROJECT";break;case"department":E="DEPARTMENT";break;default:}l.textareaView.WrapWith(false,false,"["+E+"="+t.entityId+"]"+t.name+"[/"+E+"]"+(s?", ":" "))}if(e.fireAddEvent===true){BX.onCustomEvent(window,"onMentionAdd",[t,r])}if(window["BXfpdStopMent"+a]){window["BXfpdStopMent"+a]()}i["text"]="";if(l.GetViewMode()=="wysiwyg"){l.Focus();l.selection.SetAfter(d)}var y=LHEPostForm.getHandler(o);if(y&&y.formEntityType==="task"&&y.editorParams.tasksLimitExceeded){BX.Main.PostFormTasksLimit.showPopup({bindPosition:n(i.node,l)})}}};window.MPFgetSelectorId=function(e){var t=false;var i=BX(e);if(!i){return t}t=i.getAttribute("data-bx-selector-id");return t};window.MPFcreateSelectorDialog=function(e){new BX.UI.EntitySelector.Dialog({targetNode:"mpf-mention-"+e.formId,id:e.selectorId,context:"MENTION",multiple:false,enableSearch:e.enableSearch,clearSearchOnSelect:true,hideOnSelect:true,hideByEsc:true,entities:e.params.entities,height:300,width:400,compactView:true,events:{onShow:function(){window.BXfpdOnDialogOpen()},onHide:function(){window.BXfpdOnDialogClose({editorId:e.params.editorId})},"Item:onSelect":function(t){var i=t.getData().item;if(i){window["BXfpdSelectCallbackMent"+e.formId]({item:{name:i.getTitle(),entityId:i.getId(),entityType:i.getEntityType()},entityType:i.getEntityId()})}}}})};window.MPFMentionInit=function(t,n){e.mentionParams[t]=n;if(n.initDestination===true){BX.addCustomEvent("onAutoSaveRestoreDestination",(function(e){if(BX.type.isNotEmptyObject(e)&&BX.type.isNotEmptyObject(e.data)&&BX.type.isNotEmptyString(e.data.DEST_DATA)&&BX.type.isNotEmptyString(e.formId)&&e.formId==t&&BX.UI.EntitySelector){var i=JSON.parse(e.data.DEST_DATA);if(!Array.isArray(i)){return}var n=BX.UI.EntitySelector.Dialog.getById("oPostFormLHE_blogPostForm");if(!BX.type.isNotEmptyObject(n)){return}n.preselectedItems=i;n.setPreselectedItems(i)}}));BX.addCustomEvent(window,"onMentionAdd",(function(e,t){var i=BX.UI.EntitySelector.Dialog.getById("oPostFormLHE_blogPostForm");if(!BX.type.isNotEmptyObject(i)){return}var n="";if(t==="user"){if(e.isExtranet==="Y"){n="extranet"}else if(e.isEmail==="Y"){n="email"}else{n="employee"}}else if(t==="project"){if(e.isExtranet==="Y"){n="extranet"}}if(e.entityType!=="collaber"){i.addItem({avatar:e.avatar,customData:{email:BX.Type.isStringFilled(e.email)?e.email:""},entityId:t,entityType:n,id:e.entityId,title:e.name}).select()}}))}window["BXfpdSelectCallbackMent"+t]=function(e){window.BxInsertMention({item:e.item,type:e.entityType.toLowerCase(),formID:t,editorId:n.editorId,fireAddEvent:n.initDestination})};window["BXfpdStopMent"+t]=function(){var e=window.MPFgetSelectorId("bx-mention-"+t+"-id");var i=BX.UI.EntitySelector.Dialog.getById(e);if(i){i.hide()}};if(BX(t)){BX.addCustomEvent(BX(t),"OnUCFormAfterShow",(function(e){if(!BX.type.isNotEmptyObject(e)||!BX.type.isArray(e.id)||!BX.Type.isStringFilled(e.id[0])){return}var t=new RegExp("EVENT_(\\d+)","i");if(!t.test(e.id[0])){return}}))}var r=LHEPostForm.getHandlerByFormId(t);if(r){r.exec()}BX.ready((function(){var e=BX("bx-b-mention-"+t);BX.bind(e,"click",(function(r){if(i.listen!==true){var a=LHEPostForm.getEditor(n.editorId);var o=a.GetIframeDoc();if(a.GetViewMode()=="wysiwyg"&&o){i.listen=true;i.listenFlag=true;i.text="";i.leaveContent=false;i.mode="button";var s=a.selection.GetRange();if(BX(i.node)){BX.remove(BX(i.node))}a.InsertHtml('<span id="bx-mention-node">'+a.INVISIBLE_SPACE+"</span>",s);setTimeout((function(){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{formId:t,bindNode:e}]);i.node=o.getElementById("bx-mention-node");if(i.node){s.setStart(i.node,0);if(i.node.firstChild&&i.node.firstChild.nodeType==3&&i.node.firstChild.nodeValue.length>0){s.setEnd(i.node,1)}else{s.setEnd(i.node,0)}a.selection.SetSelection(s)}a.Focus()}),100)}else if(a.GetViewMode()=="code"){i.listen=true;i.listenFlag=true;i.text="";i.leaveContent=false;i.mode="button";setTimeout((function(){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{formId:t,bindNode:e}])}),100)}BX.onCustomEvent(e,"mentionClick")}}))}))};window.BXfpdOnDialogOpen=function(){i.listen=true;i.listenFlag=true};window.BXfpdOnDialogClose=function(e){i.listen=false;setTimeout((function(){i.listenFlag=false;if(!i.listen){var t=LHEPostForm.getEditor(e.editorId);if(t){t.Focus()}}}),100)};MPFEntitySelector=function(t){this.selector=null;this.inputNode=null;this.messages={};if(!BX.Type.isStringFilled(t.id)){return null}if(e.selector[t.id]){return e.selector[t.id]}e.selector[t.id]=this.init(t)};MPFEntitySelector.prototype.init=function(e){if(!BX.type.isPlainObject(e)){e={}}if(!BX.Type.isStringFilled(e.id)||!BX.Type.isStringFilled(e.tagNodeId)||!BX(e.tagNodeId)){return null}if(BX.Type.isStringFilled(e.inputNodeId)&&BX(e.inputNodeId)){this.inputNode=BX(e.inputNodeId)}if(BX.type.isNotEmptyObject(e.messages)){this.messages=e.messages}this.selector=new BX.UI.EntitySelector.TagSelector({id:e.id,dialogOptions:{id:e.id,context:BX.Type.isStringFilled(e.context)?e.context:null,preselectedItems:BX.type.isArray(e.preselectedItems)?e.preselectedItems:[],events:{"Item:onSelect":function(){this.recalcValue(this.selector.getDialog().getSelectedItems())}.bind(this),"Item:onDeselect":function(){this.recalcValue(this.selector.getDialog().getSelectedItems())}.bind(this)},entities:[{id:"meta-user",options:{"all-users":{title:this.messages.allUsersTitle,allowView:BX.type.isBoolean(e.allowToAll)&&e.allowToAll}}},{id:"user",options:{collabers:BX.type.isBoolean(e.collabers)?e.collabers:true,emailUsers:BX.type.isBoolean(e.allowSearchEmailUsers)?e.allowSearchEmailUsers:false,inviteGuestLink:BX.type.isBoolean(e.allowSearchEmailUsers)?e.allowSearchEmailUsers:false,myEmailUsers:true,footerInviteIntranetOnly:true}},{id:"project",options:{features:{blog:["premoderate_post","moderate_post","write_post","full_post"]},"!type":["collab"]}},{id:"department",options:{selectMode:"usersAndDepartments",allowFlatDepartments:false}}]},addButtonCaption:BX.message("BX_FPD_LINK_1"),addButtonCaptionMore:BX.message("BX_FPD_LINK_2")});this.selector.renderTo(document.getElementById(e.tagNodeId));return this.selector};MPFEntitySelector.prototype.recalcValue=function(e){if(!BX.type.isArray(e)||!this.inputNode){return}var t=[];e.forEach((function(e){t.push([e.entityId,e.id])}));this.inputNode.value=JSON.stringify(t)};window.MPFEntitySelector=MPFEntitySelector})()})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.min.js?176242819915242";s:6:"source";s:73:"/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.js";s:3:"min";s:77:"/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.min.js";s:3:"map";s:77:"/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.map.js";}"*/
(function(){if(window.BlogBFileDialog)return;window.BlogBFileDialogUniqueID=[];window.BlogBFileDialog=function(e){this.dialogName="AttachmentsDialog";this.agent=false;this.uploadFileUrl=e.upload_path;this.id=!!e["id"]?e["id"]:this.getID();this.controlID=e["id"];this.enabled=true;this.controller=!!e.controller?e.controller:null;this.fileInput=e.fileInput;e.hAttachEvents=BX.delegate(this.InitAgent,this);this.msg=e.msg;this.dropAutoUpload=e.dropAutoUpload;this.CID=e.CID;this.multiple=!!e.multiple;e.caller=this;e.classes={uploaderParent:"file-uploader",uploader:"file-fileUploader",tpl_simple:"file-simple",tpl_extended:"file-extended",selector:"file-selector",selector_active:"file-selector-active"};e.doc_prefix="wd-doc";e.placeholder=BX.findChild(this.controller,{className:"file-placeholder-tbody"},true);this.doc_prefix=e.doc_prefix;this.values=e["values"]||[];if(!!BX.FileUploadAgent){this.agent=new BX.FileUploadAgent(e);BX.addCustomEvent(this,"ShowUploadedFile",BX.delegate(this.ShowUploadedFile,this));BX.addCustomEvent(this,"StopUpload",this.StopUpload.bind(this));BX.onCustomEvent(BX(this.controller.parentNode),"BFileDLoadFormControllerInit",[this])}else{BX.debug("/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.js: BX.FileUploadAgent is not defined."+" You need to load /bitrix/js/main/file_upload_agent.js")}};window.BlogBFileDialog.prototype.getID=function(){return""+(new Date).getTime()};window.BlogBFileDialog.prototype.InitAgent=function(e){if(this.controller){e.placeholder=BX.findChild(this.controller,{className:"file-placeholder-tbody"},true)}};window.BlogBFileDialog.prototype.ShowUploadedFile=function(e){this.agent=e;var i=e.uploadResult;if(i&&i.element_id>0){var t=this.CreateFileRow(i);if(!!e.inputName&&e.inputName.length>0){var o=BX.create("INPUT",{props:{id:"file-doc"+i.element_id,type:"hidden",name:e.inputName+(this.multiple?"[]":""),value:i.element_id}});t.appendChild(o)}this.values.push(t);e._clearPlace();if(this.controller&&this.controller.parentNode){const e=(this.controller.closest("form")||this.controller.parentNode).querySelector("#upload-cid");if(e){e.value=this.CID}BX.onCustomEvent(this.controller.parentNode,"OnFileUploadSuccess",[i,this])}}else{var l=i&&i["error"]?i["error"]:this.msg.upload_error;e.ShowUploadError(l);if(this.controller&&this.controller.parentNode)BX.onCustomEvent(this.controller.parentNode,"OnFileUploadFail")}};window.BlogBFileDialog.prototype.CreateFileRow=function(e){var t=e;var o="file";if(!!t.element_content_type&&t.element_content_type.indexOf("image/")==0&&!!t.element_image&&t.element_image.length>0&&!!t.element_thumbnail&&t.element_thumbnail.length>0){o="image"}var l=BX.clone(BX("file-"+o+"-template"));BX.template(l,BX.delegate((function(e){this.tplFileRow(e,t)}),this));if(o=="image"){var n=null;for(i=0;i<l.children.length;i++){n=l.children[i];if(n.nodeType==1)break}n.setAttribute("id",this.doc_prefix+e.element_id);var a=BX.findChild(n,{className:"feed-add-post-del-but"},true);BX.bind(a,"click",BX.delegate((function(){var e=a;var i=e.parentNode;this.agent.StopUpload(i);BX.cleanNode(i,true)}),this));this.agent.AddNodeToPlaceholder(n);l=n}else{l.setAttribute("id",this.doc_prefix+e.element_id);this.agent.AddRowToPlaceholder(l);l=this.agent.placeholder.querySelector("#"+this.doc_prefix+e.element_id)}return l};window.BlogBFileDialog.prototype.GetUploadDialog=function(e){return new BlogBFileDialogUploader(this,e)};window.BlogBFileDialog.prototype.tplFileRow=function(e,i){for(id in e){if(!e.hasOwnProperty(id))continue;var t=e[id];if(id=="image"&&!!i.element_image&&i.element_image.length>0&&!!i.element_thumbnail&&i.element_thumbnail.length>0){t.setAttribute("src",i.element_image);t.setAttribute("rel",i.element_thumbnail)}else{if(!!i["element_"+id])t.innerHTML=i["element_"+id]}}};window.BlogBFileDialog.prototype._addUrlParam=function(e,i){if(!e)return null;if(e.indexOf(i)==-1)e+=(e.indexOf("?")==-1?"?":"&")+i;return e};window.BlogBFileDialog.prototype.LoadDialogs=function(e){if(!!this.agent)this.agent.LoadDialogs(e);else{var i=e;setTimeout(BX.delegate((function(){this.LoadDialogs(i)}),this),100)}};window.BlogBFileDialog.prototype.StopUpload=function(e,i){this.agent=e;var t=0;var o=new RegExp(this.doc_prefix+"(\\d+)");if(o.test(i.id)){var l=i.id.match(o);t=l[1]}if(this.controller&&this.controller.parentNode){BX.onCustomEvent(this.controller.parentNode,"OnFileUploadRemove",[t,this])}var n={fileID:t,sessid:BX.bitrix_sessid(),cid:this.CID,controlID:this.controlID,mfi_mode:"delete"};BX.ajax({method:"POST",dataType:"html",url:this.uploadFileUrl,processData:false,data:BX.ajax.prepareData(n),onsuccess:function(){}})};window.BlogBFileDialogDispatcher=function(e){this.id=this.getID();this.controller=e;BX.loadScript("/bitrix/js/main/core/core_dd.js",BX.delegate((function(){if(BX.type.isElementNode(this.controller)&&this.controller.parentNode&&this.controller.parentNode.parentNode){var e=this.controller.parentNode.parentNode;this.dropbox=new BX.DD.dropFiles(e);if(this.dropbox&&this.dropbox.supported()&&BX.ajax.FormData.isSupported()){this.hExpandUploader=BX.proxy(this.ExpandUploader,this);BX.addCustomEvent(this.dropbox,"dragEnter",this.hExpandUploader);BX.addCustomEvent(e,"UnbindDndDispatcher",BX.delegate(this.Unbind,this))}}}),this))};window.BlogBFileDialogDispatcher.prototype.getID=function(){return""+(new Date).getTime()};window.BlogBFileDialogDispatcher.prototype.ExpandUploader=function(){BX.onCustomEvent(BX(this.controller.parentNode),"BFileDLoadFormController",["show"])};window.BlogBFileDialogDispatcher.prototype.Unbind=function(){BX.removeCustomEvent(this.dropbox,"dragEnter",this.hExpandUploader)};window.BlogBFileDialogUploader=function(e,i){this.WDUploaded=false;this.WDUploadInProgress=false;this.documentExists=false;this.fileDropped=false;this.caller=e;this.agent=i;this.parentID=this.agent.id;this.id=this.caller.getID();this.msg=e.msg;this.dropAutoUpload=e.dropAutoUpload;this.uploadFileUrl=e.uploadFileUrl;this.CID=e.CID;this.controlID=e.controlID;this.CreateElements();this.fileInput=!!i.fileInput?i.fileInput:BX.type.isDomNode(i.fileInputID)?i.fileInputID:BX(e.fileInput);if(BX.type.isDomNode(this.fileInput)){this.fileInput.name="mfi_files[]"}this.fileList=this.__form;BX.loadScript("/bitrix/js/main/core/core_dd.js",BX.delegate((function(){var e=new BX.DD.dropFiles;if(e&&e.supported()&&BX.ajax.FormData.isSupported()){this.dropbox=e}this.agent.BindUploadEvents(this)}),this))};window.BlogBFileDialogUploader.prototype.CreateElements=function(){var e;do{e=Math.floor(Math.random()*99999)}while(BX("iframe-"+e));var i="iframe-"+this.id;var t=BX.create("IFRAME",{props:{name:i,id:i},style:{display:"none"}});document.body.appendChild(t);this.iframeUpload=t;var o=BX.create("FORM",{props:{id:"form-"+e,method:"POST",action:this.uploadFileUrl,enctype:"multipart/form-data",encoding:"multipart/form-data",target:i},style:{display:"none"},children:[BX.create("INPUT",{props:{type:"hidden",name:"sessid",value:BX.bitrix_sessid()}}),BX.create("INPUT",{props:{type:"hidden",name:"uniqueID",value:e}}),BX.create("INPUT",{props:{type:"hidden",name:"cid",value:this.CID}}),BX.create("INPUT",{props:{type:"hidden",name:"controlID",value:!!this.controlID?this.controlID:""}}),BX.create("INPUT",{props:{type:"hidden",name:"mfi_mode",value:"upload"}})]});document.body.appendChild(o);this.__form=o;window["FILE_UPLOADER_CALLBACK_"+e]=BX.proxy(this.Callback,this)};window.BlogBFileDialogUploader.prototype.GetUploadFileName=function(){var e="";if(this.fileInput&&this.fileInput.value.length>0){var e=this.fileInput.value;if(e.indexOf("\\")>-1)e=e.substr(e.lastIndexOf("\\")+1)}else{var i=this.fileList;if(i.file)e=i.file.fileName||i.file.name}return e};window.BlogBFileDialogUploader.prototype.Callback=function(e,i){if(BX.type.isArray(e)){e.forEach(function(e){var i={success:true,storage:"bfile",element_id:e.fileID,element_name:e.fileName,element_size:e.fileSize,element_url:e.fileURL,element_content_type:e.content_type||e.fileContentType,element_image:e.img_thumb_src||e.fileSrc,element_thumbnail:e.img_source_src||e.fileSrc};if(!!i.element_image)i.element_image=i.element_image.replace(/\/([^\/]+)$/,(function(e,i){return"/"+BX.util.urlencode(i)}));if(!!i.element_thumbnail)i.element_thumbnail=i.element_thumbnail.replace(/\/([^\/]+)$/,(function(e,i){return"/"+BX.util.urlencode(i)}));if(e["error"]||e["status"]==="error"){i["error"]=e["error"]||e["message"]}BX.onCustomEvent(this,"uploadFinish",[i])}.bind(this))}else{BX.onCustomEvent(this,"uploadFinish",[{success:false,messages:BX.type.isNotEmptyString(e)?e:this.msg.upload_error}])}window["FILE_UPLOADER_CALLBACK_"+i]=BX.DoNothing;BX.cleanNode(BX("iframe-"+i),true);BX.cleanNode(BX("form-"+i),true);this.agent.uploadDialog=null};window.BlogBFileDialogUploader.prototype.UploadResponse=function(e,i){this.WDUploadInProgress=false;BX.unbind(window,"beforeunload",BX.proxy(this.UploadLeave,this));if(!i||i.length<=0){this.onError()}};window.BlogBFileDialogUploader.prototype.UploadResponseIframe=function(e,i){this.WDUploadInProgress=false;BX.unbind(window,"beforeunload",BX.proxy(this.UploadLeave,this))};window.BlogBFileDialogUploader.prototype.UploadLeave=function(e){var e=e||window.event;var i="";if(this.WDUploadInProgress)i=this.msg.UploadInterrupt;else if(!this.WDUploaded&&this.fileInput&&this.fileInput.value.length>0)i=this.msg.UploadNotDone;if(i!=""){if(e)e.returnValue=i;return i}return};window.BlogBFileDialogUploader.prototype.UpdateListFiles=function(e){if(this&&e){if(e.length<1)return;var i=this.fileList;i.file=e[0];this.WDUploadInProgress=true;this.fileDropped=true;this.CallSubmit()}};window.BlogBFileDialogUploader.prototype.GetInputData=function(e){var i=[];var t={};i=i.concat(BX.findChildren(e,{tag:"input"},true),BX.findChildren(e,{tag:"textarea"},true),BX.findChildren(e,{tag:"select"},true));for(var o=0;o<i.length;o++){var l=i[o];if(!l||l.disabled||l.name.length<1)continue;switch(l.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":case"select-one":t[l.name]=l.value;break;case"radio":if(l.checked)t[l.name]=l.value;break;case"checkbox":t[l.name]=l.checked?"Y":"N";break;case"select-multiple":var n=l.options.length;if(n>0)t[l.name]=new Array;for(j=0;j<n;j++)if(l.options[j].selected)t[l.name].push(l.options[j].value);break;default:break}}return t};window.BlogBFileDialogUploader.prototype.SetFileInput=function(e){if(!!this.__form.mfi_save)return;if(this.fileInput&&this.fileInput!=e)BX.remove(this.fileInput);this.__form.appendChild(e);this.fileInput=e};window.BlogBFileDialogUploader.prototype.CallSubmit=function(){if(!!this.__form.mfi_save)return;BX.onCustomEvent(this,"uploadStart",[this]);BX.bind(window,"beforeunload",BX.proxy(this.UploadLeave,this));BX.bind(this.iframeUpload,"load",BX.delegate(this.UploadResponseIframe,this));if(this.dropbox){this.onProgress(.15);if(this.fileInput&&this.fileInput.files.length>0){var e=this.fileList;e.file=this.fileInput.files[0]}var t=this.GetInputData(this.__form);this.fileNodes=[this.fileList];for(i in this.fileNodes){if(this.fileNodes[i].file){var o=new BX.ajax.FormData;for(item in this.fileNodes[i].data){o.append(item,this.fileNodes[i].data[item])}if(!!Object&&!!Object.keys){var l=Object.keys(t);for(var n in l){var a=l[n];var r=t[a];o.append(a,r)}}else{for(item in t){o.append(item,t[item])}}o.append("mfi_files[]",this.fileNodes[i].file);o.send(this.uploadFileUrl,BX.delegate((function(e){this.UploadResponse(null,e)}),this),BX.delegate(this.onProgress,this))}}}else{this.onProgress(.15);this.WDUploadInProgress=true;var s=this.__form.id;BX.submit(this.__form,"mfi_save","Y")}};window.BlogBFileDialogUploader.prototype.onProgress=function(e){if(isNaN(e))return;BX.onCustomEvent(this,"progress",[e])};window.BlogBFileDialogUploader.prototype.onError=function(){BX.onCustomEvent(this,"uploadFinish",[{success:false,messages:this.msg.upload_error}])};top.BlogBFileDialog=window.BlogBFileDialog;top.BlogBFileDialogUploader=window.BlogBFileDialogUploader;top.BlogBFileDialogDispatcher=window.BlogBFileDialogDispatcher;window.MFIDD=function(e){BX.loadCSS("/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/style.css");var i=e["status"]==="show"?"show":e["status"]==="hide"?"hide":"switch";if(i=="switch")i=e["controller"].style.display!="none"?"hide":"show";var t=function(i){if(i=="show"){BX.fx.show(e["controller"],"fade",{time:.2});if(e["switcher"]&&e["switcher"].style.display!="none")BX.fx.hide(e["switcher"],"fade",{time:.1});if(!!window["BfileUnbindDispatcher"+e["uid"]])window["BfileUnbindDispatcher"+e["uid"]]()}else if(e["controller"].style.display!=="none"){BX.fx.hide(e["controller"],"fade",{time:.2})}};if(!e["controller"].loaded){e["controller"].loaded=true;var o=new BX.DD.dropFiles,l=o&&o.supported()&&BX.ajax.FormData.isSupported()?"extended":"simple";top["BfileFD"+e["uid"]]=window["BfileFD"+e["uid"]]=new BlogBFileDialog({mode:l,CID:e["CID"],id:e["id"],upload_path:e["upload_path"],multiple:e["multiple"],controller:e["controller"],inputName:e["inputName"],fileInput:"file-fileUploader-"+e["uid"],fileInputName:"mfi_files[]",values:BX.findChildren(BX("file-selectdialog-"+e["uid"]),{className:"file-inline-file"},true),msg:{loading:BX.message("loading"),file_exists:BX.message("file_exists"),upload_error:BX.message("upload_error"),access_denied:BX.message("access_denied")}});t(i);window["BfileFD"+e["uid"]].LoadDialogs("DropInterface");BX.onCustomEvent("BFileDSelectFileDialogLoaded",[window["BfileFD"+e["uid"]]])}else t(i)};window.BlogBFileJustDialog=function(e){this.dialogName="AttachmentsDialog";this.agent=false;this.id=!!e["id"]?e["id"]:this.getID();this.controlID=e["id"];this.enabled=true;this.uploadFileUrl=e.upload_path;this.controller=!!e.controller?e.controller:null;this.CID=e.CID;e.caller=this;e.doc_prefix="wd-doc";e._mkFileInput=BX.DoNothing;e.mode="extended";e.classes={tpl_simple:"file-simple",tpl_extended:"file-extended"};this.doc_prefix=e.doc_prefix;if(!!BX.FileUploadAgent){this.agent=new BX.FileUploadAgent(e);BX.addCustomEvent(this,"StopUpload",BX.delegate(this.StopUpload,this));BX.onCustomEvent(BX(this.controller.parentNode),"BFileDLoadFormControllerInit",[this])}else{BX.debug("/bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.js: BX.FileUploadAgent is not defined."+" You need to load /bitrix/js/main/file_upload_agent.js")}};window.BlogBFileJustDialog.prototype.StopUpload=function(e,i){this.agent=e;id=false;mID=i.id.match(new RegExp(this.doc_prefix+"(\\d+)"));if(!!mID){id=mID[1]}if(this.controller&&this.controller.parentNode)BX.onCustomEvent(this.controller.parentNode,"OnFileUploadRemove",[id,this]);var t={fileID:id,sessid:BX.bitrix_sessid(),cid:this.CID,controlID:this.controlID,mfi_mode:"delete"};BX.ajax.post(this.uploadFileUrl,t)};window.MFIS=function(e){if(!e["controller"].loaded){e["controller"].loaded=true;top["BfileFD"+e["uid"]]=window["BfileFD"+e["uid"]]=new BlogBFileJustDialog({CID:e["CID"],id:e["id"],upload_path:e["upload_path"],controller:e["controller"],values:BX.findChildren(BX("file-selectdialog-"+e["uid"]),{className:"file-inline-file"},true)});BX.fx.show(e["controller"],"fade",{time:.2});BX.onCustomEvent("BFileDSelectFileDialogLoaded",[window["BfileFD"+e["uid"]]])}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/components/bitrix/system.field.edit/script.min.js?1762428199814";s:6:"source";s:53:"/bitrix/components/bitrix/system.field.edit/script.js";s:3:"min";s:57:"/bitrix/components/bitrix/system.field.edit/script.min.js";s:3:"map";s:57:"/bitrix/components/bitrix/system.field.edit/script.map.js";}"*/
function addElement(e,n){if(document.getElementById("main_"+e)){var d=document.getElementById("main_"+e).getElementsByTagName("div");if(d&&d.length>0&&d[0]){var t=d[0].parentNode;t.appendChild(d[d.length-1].cloneNode(true))}}}function addElementFile(e,n){var d=document.getElementById("main_"+e);var t=document.getElementById("main_add_"+e);if(d&&t){t=t.cloneNode(true);t.id="";t.style.display="";d.appendChild(t)}}function addElementDate(e,n){var d=document.getElementById("date_container_"+n);var t=document.getElementById("hidden_"+n).innerHTML;if(d&&t){var a=e[n].fieldName;var i=e[n].index;t=t.replace(/[#]FIELD_NAME[#]/g,a+"["+i+"]");t=t.replace(/[\%]23FIELD_NAME[\%]23/g,escape(a+"["+i+"]"));var l=d.appendChild(document.createElement("DIV"));l.innerHTML+=t;e[n].index++}}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/components/bitrix/search.tags.input/templates/.default/script.min.js?17624282378379";s:6:"source";s:72:"/bitrix/components/bitrix/search.tags.input/templates/.default/script.js";s:3:"min";s:76:"/bitrix/components/bitrix/search.tags.input/templates/.default/script.min.js";s:3:"map";s:76:"/bitrix/components/bitrix/search.tags.input/templates/.default/script.map.js";}"*/
var Errors={result_unval:"Error in result",result_empty:"Empty result"};function JsTc(oHandler,sParams,sParser){var t=this;t.oObj=typeof oHandler=="object"?oHandler:document.getElementById("TAGS");t.sParams=sParams;if(sParser){t.sExp=new RegExp("["+sParser+"]+","i")}else{t.sExp=new RegExp(",")}t.oLast={str:false,arr:false};t.oThis={str:false,arr:false};t.oEl={start:false,end:false};t.oUnfinedWords={};t.bReady=true;t.eFocus=true;t.aDiv=null;t.oDiv=null;t.oActive=null;t.oPointer=[];t.oPointer_default=[];t.oPointer_this="input_field";t.oObj.onblur=function(){t.eFocus=false};t.oObj.onfocus=function(){if(!t.eFocus){t.eFocus=true;setTimeout((function(){t.CheckModif("focus")}),500)}};t.oLast["arr"]=t.oObj.value.split(t.sExp);t.oLast["str"]=t.oLast["arr"].join(":");setTimeout((function(){t.CheckModif("this")}),500);this.CheckModif=function(e){var o=false;var r=0;var n=false;var s="";var i={};if(!t.eFocus){return}if(t.bReady&&t.oObj.value.length>0){t.oThis["arr"]=t.oObj.value.split(t.sExp);t.oThis["str"]=t.oThis["arr"].join(":");if(t.oThis["str"]&&t.oThis["str"]!=t.oLast["str"]){i["position"]=TCJsUtils.getCursorPosition(t.oObj);if(i["position"]["end"]>0&&!t.sExp.test(t.oObj.value.substr(i["position"]["end"]-1,1))){i["arr"]=t.oObj.value.substr(0,i["position"]["end"]).split(t.sExp);o=t.oThis["arr"][i["arr"].length-1];t.oEl["start"]=i["position"]["end"]-i["arr"][i["arr"].length-1].length;t.oEl["end"]=t.oEl["start"]+o.length;t.oEl["content"]=o;t.oLast["arr"]=t.oThis["arr"];t.oLast["str"]=t.oThis["str"]}}if(o){for(r=2;r<=o.length;r++){s=o.substr(0,r);if(t.oUnfinedWords[s]=="!fined"){n=true;break}}if(!n){t.Send(o)}}}setTimeout((function(){t.CheckModif("this")}),500)};t.Send=function(sSearch){if(!sSearch){return}var oError=[];t.bReady=false;if(BX("wait_container")){BX("wait_container").innerHTML=BX.message("JS_CORE_LOADING");BX.show(BX("wait_container"))}BX.ajax.post("/bitrix/components/bitrix/search.tags.input/search.php",{search:sSearch,params:t.sParams},(function(data){var result={};t.bReady=true;try{eval("result = "+data+";")}catch(t){oError["result_unval"]=t}if(TCJsUtils.empty(result)){oError["result_empty"]=Errors["result_empty"]}try{if(TCJsUtils.empty(oError)&&typeof result=="object"){if(!(result.length==1&&result[0]["NAME"]==t.oEl["content"])){t.Show(result);return}}else{t.oUnfinedWords[t.oEl["content"]]="!fined"}}catch(t){oError["unknown_error"]=t}if(BX("wait_container")){BX.hide(BX("wait_container"))}}))};t.Show=function(e){t.Destroy();t.oDiv=document.body.appendChild(document.createElement("DIV"));t.oDiv.id=t.oObj.id+"_div";t.oDiv.className="search-popup";t.oDiv.style.position="absolute";t.aDiv=t.Print(e);var o=TCJsUtils.GetRealPos(t.oObj);t.oDiv.style.width=parseInt(o["width"],10)+"px";TCJsUtils.show(t.oDiv,o["left"],o["bottom"]);TCJsUtils.addEvent(document,"click",t.CheckMouse);TCJsUtils.addEvent(document,"keydown",t.CheckKeyword)};t.Print=function(e){var o=null;var r=[];var n=[];var s=0;var i=null;var a=null;var l=t.oDiv.id;for(var c in e){if(e.hasOwnProperty(c)){o=e[c];n=[];n["ID"]=o["ID"]&&o["ID"].length>0?o["ID"]:s++;n["GID"]=l+"_"+n["ID"];n["NAME"]=TCJsUtils.htmlspecialcharsEx(o["NAME"]);n["~NAME"]=o["NAME"];n["CNT"]=o["CNT"];r[n["GID"]]=n;t.oPointer.push(n["GID"]);i=t.oDiv.appendChild(document.createElement("DIV"));i.id=n["GID"];i.name=l+"_div";i.className="search-popup-row";i.onmouseover=function(){t.Init();this.className="search-popup-row-active"};i.onmouseout=function(){t.Init();this.className="search-popup-row"};i.onclick=function(e){t.oActive=this.id;t.Replace();t.Destroy();BX.PreventDefault(e)};a=i.appendChild(document.createElement("DIV"));a.id=i.id+"_NAME";a.className="search-popup-el search-popup-el-cnt";a.innerHTML=n["CNT"];a=i.appendChild(document.createElement("DIV"));a.id=i.id+"_NAME";a.className="search-popup-el search-popup-el-name";a.innerHTML=n["NAME"]}}t.oPointer.push("input_field");t.oPointer_default=t.oPointer;return r};t.Destroy=function(){try{TCJsUtils.hide(t.oDiv);t.oDiv.parentNode.removeChild(t.oDiv)}catch{}t.aDiv=[];t.oPointer=[];t.oPointer_default=[];t.oPointer_this="input_field";t.bReady=true;t.eFocus=true;t.oActive=null;TCJsUtils.removeEvent(document,"click",t.CheckMouse);TCJsUtils.removeEvent(document,"keydown",t.CheckKeyword)};t.Replace=function(){if(typeof t.oActive=="string"){var e=t.aDiv[t.oActive];var o="";if(typeof e=="object"){var r=document.createElement("textarea");r.innerHTML=e["~NAME"];o=r.value}var n=t.oEl["start"];while(n<t.oObj.value.length&&t.oObj.value.substring(n,n+1)==" "){n++}t.oObj.value=t.oObj.value.substring(0,n)+o+t.oObj.value.substr(t.oEl["end"]);TCJsUtils.setCursorPosition(t.oObj,n+o.length)}};t.Init=function(){t.oActive=false;t.oPointer=t.oPointer_default;t.Clear();t.oPointer_this="input_pointer"};t.Clear=function(){var e=t.oDiv.getElementsByTagName("div");if(e.length>0&&typeof e=="object"){for(var o in e){if(e.hasOwnProperty(o)){var r=e[o];if(r&&typeof r=="object"&&r.name==t.oDiv.id+"_div"){r.className="search-popup-row"}}}}};t.CheckMouse=function(){t.Replace();t.Destroy()};t.CheckKeyword=function(e){var o=e||window.event;var r=null;var n=null;if(o.keyCode>37&&o.keyCode<41||o.keyCode==13){t.Clear();switch(o.keyCode){case 38:r=t.oPointer.pop();if(t.oPointer_this==r){t.oPointer.unshift(r);r=t.oPointer.pop()}if(r!="input_field"){t.oActive=r;n=document.getElementById(r);if(typeof n=="object"){n.className="search-popup-row-active"}}t.oPointer.unshift(r);break;case 40:r=t.oPointer.shift();if(t.oPointer_this==r){t.oPointer.push(r);r=t.oPointer.shift()}if(r!="input_field"){t.oActive=r;n=document.getElementById(r);if(typeof n=="object"){n.className="search-popup-row-active"}}t.oPointer.push(r);break;case 39:t.Replace();t.Destroy();break;case 13:t.Replace();t.Destroy();if(TCJsUtils.IsIE()){o.returnValue=false;o.cancelBubble=true}else{o.preventDefault();o.stopPropagation()}break;default:break}t.oPointer_this=r}else{t.Destroy()}}}var TCJsUtils={arEvents:[],addEvent:function(t,e,o){if(t.attachEvent){t.attachEvent("on"+e,o)}else if(t.addEventListener){t.addEventListener(e,o,false)}else{t["on"+e]=o}this.arEvents[this.arEvents.length]={element:t,event:e,fn:o}},removeEvent:function(t,e,o){if(t.detachEvent){t.detachEvent("on"+e,o)}else if(t.removeEventListener){t.removeEventListener(e,o,false)}else{t["on"+e]=null}},getCursorPosition:function(t){var e={start:0,end:0};if(!t||typeof t!="object"){return e}try{if(document.selection!=null&&t.selectionStart==null){t.focus();var o=document.selection.createRange();var r=o.parentElement();var n=o.getBookmark();var s=t.value;var i=t.value;var a="__"+Math.random()+"__";while(s.indexOf(a)!=-1){a="__"+Math.random()+"__"}if(!r||r==null||r.type!="textarea"&&r.type!="text"){return e}o.text=a+o.text+a;s=t.value;e["start"]=s.indexOf(a);s=s.replace(a,"");e["end"]=s.indexOf(a);t.value=i;o.moveToBookmark(n);o.select();return e}return{start:t.selectionStart,end:t.selectionEnd}}catch{return e}},setCursorPosition:function(t,e){if(typeof t!="object"){return false}t.focus();try{if(document.selection!=null&&t.selectionStart==null){var o=document.selection.createRange();o.select()}else{t.selectionStart=e;t.selectionEnd=e}return true}catch{return false}},empty:function(t){if(t){for(var e in t){if(t.hasOwnProperty(e)){return false}}}return true},show:function(t,e,o){if(typeof t!="object"){return}var r=parseInt(t.style.zIndex,10);if(r<=0||isNaN(r)){r=2200}t.style.zIndex=r;t.style.left=e+"px";t.style.top=o+"px"},hide:function(t){if(t){t.style.display="none"}},GetRealPos:function(t){if(!t||!t.offsetParent){return false}var e={};var o=t.offsetParent;e["left"]=t.offsetLeft;e["top"]=t.offsetTop;while(o&&o.tagName!="BODY"){e["left"]+=o.offsetLeft;e["top"]+=o.offsetTop;o=o.offsetParent}e["right"]=e["left"]+t.offsetWidth;e["bottom"]=e["top"]+t.offsetHeight;e["width"]=t.offsetWidth;e["height"]=t.offsetHeight;return e},IsIE:function(){return document.attachEvent&&!TCJsUtils.IsOpera()},IsOpera:function(){return navigator.userAgent.toLowerCase().indexOf("opera")!=-1},htmlspecialcharsEx:function(t){return t.replaceAll("&amp;","&amp;amp;").replaceAll("&lt;","&amp;lt;").replaceAll("&gt;","&amp;gt;").replaceAll("&quot;","&amp;quot;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")},htmlspecialcharsback:function(t){return t.replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;;",'"').replaceAll("&amp;","&")}};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:84:"/bitrix/components/bitrix/voting.uf/templates/.default/script.min.js?176242825111246";s:6:"source";s:64:"/bitrix/components/bitrix/voting.uf/templates/.default/script.js";s:3:"min";s:68:"/bitrix/components/bitrix/voting.uf/templates/.default/script.min.js";s:3:"map";s:68:"/bitrix/components/bitrix/voting.uf/templates/.default/script.map.js";}"*/
(function(t){var e=t.BX;if(e["Vote"])return;var i=t.BXMobileApp?e.message("SITE_DIR")+"mobile/?mobile_action=vote":"/bitrix/tools/vote/uf.php";e.Vote=function(){var a=function(i,s){this.node=i;this.form=e.findChild(this.node,{tagName:"FORM"},true);this.id=s["id"];this.voteId=s["voteId"];this.params=s;var a,o,r;this.errorNode=e.findChild(this.node,{attribute:{"data-bx-vote-role":"error"}},true);for(var n in this.buttons){if(this.buttons.hasOwnProperty(n)){a=e.findChild(this.node,{attribute:{"data-bx-vote-button":n}},true);if(a&&e.type.isFunction(this[n])){this[n]=e.delegate(this[n],this);this.buttons[n]=a;e.bind(a,"click",this[n])}}}a=e.findChildren(this.node,{tagName:"TR"},true);while(a&&(o=a.pop())&&o&&o.hasAttribute("data-bx-vote-answer")){r=e.findChild(o,{tagName:"A",attribute:{"data-bx-vote-result":"counter"}},true);if(r){if(t.BXMobileApp){e.bind(o,"click",e.proxy(this.checkMobileUsers,this))}else{e.bind(r,"click",e.proxy(this.checkUsers,this));e.adjust(r,{attrs:{"data-bx-vote-answer":o.getAttribute("data-bx-vote-answer")}})}}}this.onPullEvent=e.delegate((function(t,i){if(t=="voting"&&!!i&&i["VOTE_ID"]==this.voteId&&e(this.node)){this.adjustResults(i)}}),this);if(t.BXMobileApp){app.onCustomEvent("onPullExtendWatch",{id:"VOTE_"+this.voteId});e.addCustomEvent("onPull-vote",this.onPullEvent)}else if(e["PULL"]){e.PULL.extendWatch("VOTE_"+this.voteId);e.addCustomEvent("onPullEvent-vote",this.onPullEvent)}};a.prototype={buttons:{showVoteForm:null,showResults:null,actVoting:null,stopOrResume:null,exportXls:null},params:{},url:i,showVoteForm:function(t){if(this.node.getAttribute("data-bx-vote-lamp")=="green"){var i=e.proxy((function(t){if(t&&t.data&&t.data.event)this.adjustBallot(t.data.attach,t.data.event);this.node.setAttribute("data-bx-vote-form","shown")}),this),s=e.proxy((function(t){this.node.setAttribute("data-bx-vote-form","shown")}),this);this.send({action:"getBallot"},t.target,i,s)}e.eventCancelBubble(t);return e.PreventDefault(t)},showResults:function(t){this.node.setAttribute("data-bx-vote-result",this.node.getAttribute("data-bx-vote-result")=="shown"?"hidden":"shown");e.eventCancelBubble(t);return e.PreventDefault(t)},stopOrResume:function(t){this.send({action:this.node.getAttribute("data-bx-vote-lamp")=="red"?"resume":"stop"},t.target,e.proxy((function(t){if(t["action"]=="stop"){this.node.setAttribute("data-bx-vote-result","shown");this.node.setAttribute("data-bx-vote-form","hidden");this.node.setAttribute("data-bx-vote-lamp","red")}else{if(this.node.getAttribute("data-bx-vote-status")!=="voted")this.node.setAttribute("data-bx-vote-form","shown");this.node.setAttribute("data-bx-vote-lamp","green")}if(t["data"]&&t["data"]["attach"])this.adjustResults(t["data"]["attach"])}),this));e.eventCancelBubble(t);return e.PreventDefault(t)},exportXls:function(t){e.eventCancelBubble(t);top.location.href=e.util.add_url_param(this.url,{action:"exportXls",attachId:this.id,sessid:e.bitrix_sessid()});return e.PreventDefault(t)},actVoting:function(t){var i=e.ajax.prepareForm(this.form).data;i["action"]="vote";this.send(i,t.target,e.proxy((function(t){this.node.setAttribute("data-bx-vote-form","hidden");this.node.setAttribute("data-bx-vote-result","shown");this.adjustResults(t.data.attach)}),this),e.proxy((function(){this.node.setAttribute("data-bx-vote-form","shown")}),this));e.eventCancelBubble(t);return e.PreventDefault(t)},send:function(t,i,s,a){e.addClass(i,"ui-btn-clock");t["sessid"]=e.bitrix_sessid();t["attachId"]=this.id;e.ajax({method:"POST",url:e.util.add_url_param(this.url,{action:t["action"],attachId:this.id}),data:t,dataType:"json",onsuccess:e.proxy((function(t){e.removeClass(i,"ui-btn-clock");if(t.status=="success"){this.showError(null);if(e.type.isFunction(s))s.apply(this,arguments)}else{if(t.status=="error"&&t["errors"])this.showError(t["errors"]);if(e.type.isFunction(a))a.apply(this,arguments)}}),this),onfailure:e.proxy((function(){e.removeClass(i,"ui-btn-clock");if(e.type.isFunction(a))a.apply(this,arguments)}),this)})},adjustBallot:function(t,i){var s,a,o,r,n,u,l,h,p,d=t["QUESTIONS"],c=i["ballot"],f=i["extras"];for(s in d){if(d.hasOwnProperty(s)){l=d[s];o=[l["FIELD_NAME"],l["FIELD_NAME"]+"[]"];p=c[s]||{};while(r=o.shift()){if(this.form.elements[r]){u=e(this.form.elements[r])?[this.form.elements[r]]:this.form.elements[r];for(r=0;r<u.length;r++){if(p[u[r].value]){u[r].checked="checked"}else{delete u[r].checked}}}}for(a in d[s]["ANSWERS"]){if(d[s]["ANSWERS"].hasOwnProperty(a)){h=d[s]["ANSWERS"][a];if(h["FIELD_TYPE"]>=4){if(this.form.elements[h["MESSAGE_FIELD_NAME"]])this.form.elements[h["MESSAGE_FIELD_NAME"]].value=c[s]&&c[s][a]&&c[s][a]["MESSAGE"]?c[s][a]["MESSAGE"]:"";else this.form.elements[h["FIELD_NAME"]].value=c[s]&&c[s][a]&&c[s][a]["MESSAGE"]?c[s][a]["MESSAGE"]:""}}}}}for(r in f){if(f.hasOwnProperty(r)&&(s=e(this.form.elements[String(t["FIELD_NAME"]).replace("#ENTITY_ID#",r)]))){if(s.value==f[r])s.checked=true;else delete s.checked}}},adjustResults:function(t){var i=t["QUESTIONS"];e.onCustomEvent(this.node,"OnBeforeChangeData");var s,a,o,r,n,u;for(r in i){if(i.hasOwnProperty(r)){s=e.findChild(this.node,{attr:{id:"question"+r}},true);if(s){for(o in i[r]["ANSWERS"]){if(i[r]["ANSWERS"].hasOwnProperty(o)){a=e.findChild(s,{attr:{"data-bx-vote-answer":o}},true);if(!!a){n=parseInt(i[r]["ANSWERS"][o]["PERCENT"]);n=isNaN(n)?0:n;u=e.findChild(a,{attribute:{"data-bx-vote-result":"counter"}},true);e.adjust(u,{html:i[r]["ANSWERS"][o]["COUNTER"]+""});delete u["VOTED_USER_OBJ"];e.adjust(e.findChild(a,{tagName:"SPAN",attribute:{"data-bx-vote-result":"percent"}},true),{html:n+"%"});e.adjust(e.findChild(a,{tagName:"DIV",attribute:{"data-bx-vote-result":"bar"}},true),{style:{width:n+"%"}})}}}}}}u=e.findChild(this.node,{tagName:"DIV",attribute:{"data-bx-vote-result":"counter"}},true);e.adjust(u,{html:t["COUNTER"]+""});e.onCustomEvent(this.controller,"OnAfterChangeData")},checkUsers:function(t){var i=t?e(t.currentTarget):null;if(i.hasAttribute("data-bx-vote-answer")){if(!i["VOTED_USER_OBJ"]){i.VOTED_USER_OBJ=new s(i.getAttribute("data-bx-vote-answer"),i,{nameTemplate:this.params["nameTemplate"],urlTemplate:this.params["urlTemplate"],attachId:this.id})}i.VOTED_USER_OBJ.click()}},checkMobileUsers:function(t){if(this.node&&this.node.getAttribute("data-bx-vote-form")!=="shown"){var i=e.proxy_context,s=e.findChild(i,{tagName:"A",attribute:{"data-bx-vote-result":"counter"}},true);if(s&&parseInt(s.innerHTML)>0){e.PreventDefault(t);app.openBXTable({url:e.util.add_url_param(this.url,{action:"getMobileVoted",attachId:this.id,answerId:i.getAttribute("data-bx-vote-answer"),sessid:e.bitrix_sessid()}),TABLE_SETTINGS:{markmode:false,cache:false}});return false}}return true},showError:function(t){var i="";if(e.type.isArray(t)){var s=[];for(var a=0;a<t.length;a++){s.push(t[a]["message"])}s=s.join("<br />");i=s===""?"Unknown error":s;this.errorNode.innerHTML=i;this.node.setAttribute("data-bx-vote-error","shown")}else{this.errorNode.innerHTML="";this.node.setAttribute("data-bx-vote-error","hidden")}}};return a}();var s=function(){var t=function(t,e,i){this.id=["vote",t,(new Date).getTime()].join("-");this.answerId=t;this.node=e;this.status="ready";this.iNumPage=0;this.urlTemplate=i["urlTemplate"];this.nameTemplate=i["nameTemplate"];this.attachId=i["attachId"];this.data=[];this.queue=[];this.popup=null;this.popupScrollCheck=this.popupScrollCheck.bind(this)};t.prototype={url:i,click:function(){var t=parseInt(this.node.innerHTML);if(t>0){this.showPopup().then((()=>{if(this.data.length>0){this.buildVoters(this.data)}}))}},buildVoters:function(t){var i=this.popup?this.popup.getPopupContainer():null;if(i===null){return}var s=i.querySelector(".bx-ilike-popup");i.querySelector(".bx-ilike-wrap-block").removeAttribute("style");var a=false;t.forEach((t=>{var i=e.util.htmlspecialchars(t["ID"]);var o=e.util.htmlspecialchars(t["FULL_NAME"]);var r=e.type.isNotEmptyString(t["PHOTO_SRC"])?encodeURI(e.util.htmlspecialchars(t["PHOTO_SRC"])):null;var n=e.type.isNotEmptyString(t["TYPE"])?e.util.htmlspecialchars(t["TYPE"]):null;var u=["a",this.answerId,"u",i].join("");if(s.querySelector("a#"+u)===null){var l=['<span class="bx-ilike-popup-avatar-new">','<img src="',r??"/bitrix/images/main/blank.gif",'" class="bx-ilike-popup-avatar-img',r?"":" bx-ilike-popup-avatar-img-default",'" />','<span class="bx-ilike-popup-avatar-status-icon"></span>',"</span>",'<span class="bx-ilike-popup-name-new">',o,"</span>"].join("");s.appendChild(e.create(t["ID"]!=="HIDDEN"&&this.urlTemplate?"A":"SPAN",{attrs:{id:u},props:{href:this.urlTemplate.replace(/#(USER_ID|ID)#/i,i),target:"_blank",className:"bx-ilike-popup-img"+(n?" bx-ilike-popup-img-"+n:"")},html:l}))}a=true}));if(a){this.popup.adjustPosition({forceBindPosition:true});this.popupScrollCheck({currentTarget:s})}},makeError:function(t){var i=this.popup?this.popup.getPopupContainer():null;if(i===null){return}var s=(t||[{message:e.message("VOTE_ERROR_DEFAULT")}]).map((t=>t.message)).join("");i.innerHTML='<div class="bx-vote-popup-error-block">'+s+"</div>";this.popup.adjustPosition({forceBindPosition:true})},showPopup:function(){return new Promise((t=>{var e=this.getPopup();e.show();e.setAngle({position:"bottom"});e.adjustPosition({forceBindPosition:true});t(e)}))},getPopup:function(){if(this.popup){return this.popup}this.popup=new e.PopupWindow("bx-vote-popup-cont-"+this.id,this.node,{lightShadow:true,offsetTop:-2,offsetLeft:3,autoHide:true,closeByEsc:true,cacheable:false,bindOptions:{position:"top"},content:['<span class="bx-ilike-wrap-block" style="display: none;">'+'<span class="bx-ilike-popup"><span class="bx-ilike-bottom_scroll"></span></span>'+"</span>",'<span class="bx-ilike-wait"></span>'].join(""),events:{onFirstShow:()=>{this.send();e.bind(this.popup.contentContainer.querySelector(".bx-ilike-popup"),"scroll",this.popupScrollCheck)},onClose:()=>{this.popup=null}}});return this.popup},popupScrollCheck:function(){var t=this.popup?this.popup.contentContainer:null;if(t===null){return}var e=t.querySelector(".bx-ilike-popup");if(e.scrollTop>(e.scrollHeight-e.offsetHeight)/1.5||t.offsetHeight>e.offsetHeight){this.send()}},send:function(){if(this.status!=="ready"){if(this.status==="busy"){this.queue.push(this.send.bind(this))}else if(this.status==="done"){this.finalize()}return}this.status="busy";e.ajax({url:e.util.add_url_param(this.url,{action:"getVoted",attachId:this.attachId,answerId:this.answerId}),method:"POST",dataType:"json",data:{iNumPage:++this.iNumPage,nameTemplate:this.nameTemplate,sessid:e.bitrix_sessid()},onsuccess:function(t){if(t&&t.status==="success"){t=t.data;this.buildVoters(t.items);this.data=this.data.concat(t.items);if(t["statusPage"]==="done"||t.items.length<=0){this.status="done";this.finalize()}else{this.status="ready";var e=this.queue.shift();if(e){e.call(this)}}}else{this.status="error";this.makeError(t.errors);this.finalize()}}.bind(this),onfailure:function(){this.status="error";this.makeError();this.finalize()}.bind(this)})},finalize:function(){this.queue=[];var t=this.popup?this.popup.getPopupContainer():null;if(t===null){return}t.querySelector(".bx-ilike-wait").style.display="none";e.unbind(t.querySelector(".bx-ilike-popup"),"scroll",this.popupScrollCheck)}};return t}()})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/components/bitrix/voting.vote.edit/templates/.default/script.min.js?176242825112569";s:6:"source";s:71:"/bitrix/components/bitrix/voting.vote.edit/templates/.default/script.js";s:3:"min";s:75:"/bitrix/components/bitrix/voting.vote.edit/templates/.default/script.min.js";s:3:"map";s:75:"/bitrix/components/bitrix/voting.vote.edit/templates/.default/script.map.js";}"*/
(function(){if(window.BVoteConstructor)return;BX.addCustomEvent("onClickMulti",(function(t){var e=BX.findChildren(t.parentNode.previousSibling,{attribute:{"data-bx-answer-field":"field-type"}},true);for(var i=0;i<e.length;i++){e[i].value=t.checked?"1":"0"}}));var t=function(t){this.map=new Map;this.maxSort=0;this.currentId=0;t=t||{};this.maxCount=parseInt(t["maxCount"]||0);this.onEntityHasBeenDeleted=this.onEntityHasBeenDeleted.bind(this)};t.prototype={set:function(t,e){this.map.set(t,e);BX.addCustomEvent(e,"onEntityHasBeenDeleted",this.onEntityHasBeenDeleted);this.maxSort=Math.max(this.maxSort,e.getSort());this.currentId++},get:function(t){return this.map.get(t)},keys:function(){return this.map.keys()},delete:function(t){return this.map.delete(t)},onEntityHasBeenDeleted:function(t,e,i){this.delete(t);if(this.maxSort===parseInt(e)){var s=0;this.map.forEach((function(t){s=Math.max(s,parseInt(t.getSort()))}));this.maxSort=s}},getNextId:function(){return this.currentId},getMaxSort:function(){return this.maxSort},canAdd:function(){return!(this.maxCount>0&&this.maxCount<=this.map.size)}};var e=function(t,i){this.id=[i["groupId"]||"vote",t.getAttribute("data-bx-number").toString()];this.eventObject=i["eventObject"];this.nodes={main:t,sort:null};this.delete=this.delete.bind(this);this.__sortDD=this.__sortDD.bind(this);this.onbxdragstart=this.onbxdragstart.bind(this);this.onbxdragstop=this.onbxdragstop.bind(this);this.onbxdrag=this.onbxdrag.bind(this);this.onbxdraghout=this.onbxdraghout.bind(this);this.onbxdestdraghover=this.onbxdestdraghover.bind(this);this.onbxdestdraghout=this.onbxdestdraghout.bind(this);this.onbxdestdragfinish=this.onbxdestdragfinish.bind(this);BX.addCustomEvent(this.eventObject,"onEntityHasBeenSorted",this.__sortDD);this.init(i);e.repo.set(this.id,this)};e.repo=new Map;e.getByFullId=function(t){return e.repo.get(t)};e.deleteByFullId=function(t){return e.repo.delete(t)};e.prototype={init:function(t){},bind:function(t){var e,i,s;if(BX(t)){e=BX.findChildren(t,{attribute:"data-bx-action"},true);if(t.hasAttribute("data-bx-action")){e.unshift(t)}}else{e=BX.findChildren(this.nodes.main,{attribute:"data-bx-action"},true)}for(i=0;i<e.length;i++){if(!e[i].hasAttribute("data-bx-bo und")){s="__"+e[i].getAttribute("data-bx-action");if(typeof this[s]==="function"){e[i].setAttribute("data-bx-bound","Y");BX.bind(e[i],"click",this[s].bind(this))}}}this.nodes.main["entityId"]=this.getFullId()},initDD:function(){if(window["jsDD"]&&!this.nodes.main.hasAttribute("data-bx-drag-sensitive")){var t=BX.findChildren(this.nodes.main,{attribute:"data-bx-action"},true),e;for(e=0;e<t.length;e++){if(t[e].getAttribute("data-bx-action")==="sortDD"&&!t[e].hasAttribute("data-bx-bound-dd")&&t[e].getAttribute("data-bx-bound")==="Y"){BX.unbindAll(t[e],"click");this.nodes.dd=t[e];this.nodes.dd.setAttribute("data-bx-bound-dd","Y");this.nodes.dd["entityId"]=this.getFullId();BX.addClass(this.nodes.dd,"bx-drag-draggable");this.nodes.main.hasAttribute("data-bx-drag-sensitive","Y");BX.addClass(this.nodes.main,"bx-drag-drag-sensitive");window.jsDD.registerObject(this.nodes.dd);this.nodes.dd.onbxdragstart=this.onbxdragstart;this.nodes.dd.onbxdragstop=this.onbxdragstop;this.nodes.dd.onbxdrag=this.onbxdrag;this.nodes.dd.onbxdraghout=this.onbxdraghout;window.jsDD.registerDest(this.nodes.main);this.nodes.main.onbxdestdraghover=this.onbxdestdraghover;this.nodes.main.onbxdestdraghout=this.onbxdestdraghout;this.nodes.main.onbxdestdragfinish=this.onbxdestdragfinish;var i=BX.findChild(this.nodes.main,{tagName:"INPUT",props:{type:"text"}},true,true);for(e=0;e<=i.length;e++){BX.bind(i[e],"mousedown",BX.eventCancelBubble)}}}}},getSort:function(){if(!this.__sort)this.__sort=parseInt(this.nodes["sort"].value);return this.__sort},setSort:function(t){this.__sort=this.nodes["sort"].value=parseInt(t)},__sortDD:function(t,e,i,s){if(BX.type.isInteger(t)&&i.getGroupId()===this.getGroupId()){if(this===i){this.setSort(e)}else if(t>e){if(e<=this.getSort()&&this.getSort()<=t){this.setSort(this.getSort()+10)}}else if(t<e){if(t<this.getSort()&&this.getSort()<=e){this.setSort(this.getSort()-10)}}}},__sortDown:function(){if(this.nodes.main.nextSibling&&this.nodes.main.nextSibling["entityId"]){var t=e.getByFullId(this.nodes.main.nextSibling["entityId"]);this.nodes.main.parentNode.insertBefore(this.nodes.main.nextSibling,this.nodes.main);BX.onCustomEvent(this.eventObject,"onEntityHasBeenSorted",[this.getSort(),t.getSort(),this,t])}},__sortUp:function(){if(this.nodes.main.previousSibling&&this.nodes.main.previousSibling["entityId"]){var t=e.getByFullId(this.nodes.main.previousSibling["entityId"]);this.nodes.main.parentNode.insertBefore(this.nodes.main,this.nodes.main.previousSibling);BX.onCustomEvent(this.eventObject,"onEntityHasBeenSorted",[this.getSort(),t.getSort(),this,t])}},getFullId:function(t){return t===true?this.id.join("_"):this.id},getId:function(){return this.id[1]},getGroupId:function(){return this.id[0]},delete:function(){var t=[],i,s=this.getSort();for(i in this.nodes){if(this.nodes.hasOwnProperty(i)){t.push(i)}}for(i=0;i<=t.length;i++){if(this.nodes.hasOwnProperty(t[i])){this.nodes[t[i]]=null;delete this.nodes[t[i]]}}e.deleteByFullId(this.getFullId());BX.onCustomEvent(this,"onEntityHasBeenDeleted",[this.getFullId(),s,this])},onbxdragstart:function(){var t=BX.create("DIV",{attrs:{className:"bx-drag-object"},style:{position:"absolute",zIndex:10,width:this.nodes.main.parentNode.clientWidth+"px"},html:this.nodes.main.outerHTML.replace(new RegExp(this.nodes.main.getAttribute("id"),"gi"),"DragCopy")});this.nodes.drag=t;this.nodes.dd["entitySort"]=this.getSort();this.dragPos={main:BX.pos(this.nodes.main),parent:BX.pos(this.nodes.main.parentNode)};document.body.appendChild(this.nodes.drag);BX.addClass(this.nodes.main,"bx-drag-source");t=null},onbxdragstop:function(){if(this.dragPos){BX.removeClass(this.nodes.main,"bx-drag-source");this.nodes.drag.parentNode.removeChild(this.nodes.drag);this.nodes.drag=null;delete this.nodes.drag;delete this.dragPos}return true},onbxdrag:function(t,e){if(this.nodes.drag){if(this.dragPos){if(!this.dragPos.main.deltaX)this.dragPos.main.deltaX=this.dragPos.main.left-t;if(!this.dragPos.main.deltaY)this.dragPos.main.deltaY=this.dragPos.main.top-e;t+=this.dragPos.main.deltaX;e+=this.dragPos.main.deltaY;e=Math.min(Math.max(e,this.dragPos.parent.top),this.dragPos.parent.bottom)}this.nodes.drag.style.left=t+"px";this.nodes.drag.style.top=e+"px"}},onbxdraghout:function(){},onbxdestdraghover:function(t){if(this.nodes.dd!==t){var e=parseInt(t["entitySort"]);if(this.getSort()<e)BX.addClass(this.nodes.main,"bx-drag-over-up");else BX.addClass(this.nodes.main,"bx-drag-over-down")}},onbxdestdraghout:function(){BX.removeClass(this.nodes.main,"bx-drag-over-up");BX.removeClass(this.nodes.main,"bx-drag-over-down")},onbxdestdragfinish:function(t){BX.removeClass(this.nodes.main,"bx-drag-over-up");BX.removeClass(this.nodes.main,"bx-drag-over-down");if(this.nodes.dd!==t){var i=e.getByFullId(t["entityId"]);if(i.getGroupId()===this.getGroupId()){var s=parseInt(t["entitySort"]);if(this.getSort()<s){this.nodes.main.parentNode.insertBefore(i.nodes.main,this.nodes.main);BX.onCustomEvent(this.eventObject,"onEntityHasBeenSorted",[i.getSort(),this.getSort(),i,this])}else{if(this.nodes.main.nextSibling)this.nodes.main.parentNode.insertBefore(i.nodes.main,this.nodes.main.nextSibling);else this.nodes.main.parentNode.appendChild(i.nodes.main);BX.onCustomEvent(this.eventObject,"onEntityHasBeenSorted",[i.getSort(),this.getSort(),i,this])}}}}};var i=function(e,s){this.answers=new t({maxCount:s["maxAnswersCount"]});this.visibleId=0;i.superclass.constructor.apply(this,arguments);this.nodes.sort=BX.findChild(this.nodes["main"],{attribute:{"data-bx-question-field":"C_SORT"}},true)};BX.extend(i,e);i.prototype.init=function(t){this.nodes.answerList=BX.findChild(this.nodes.main,{attribute:{"data-bx-role":"answer-list"}},true);var e=BX.findChild(this.nodes.answerList,{tagName:"LI",attribute:{"data-bx-role":"answer"}},false,true),i,n;for(i=0;i<e.length;i++){n=new s(e[i],{eventObject:t["eventObject"],groupId:this.getId()});this.answers.set(n.getId(),n);this.visibleId++}this.bind();this.initDD();this.addAnswer=this.addAnswer.bind(this);this.toggleAddNode=this.toggleAddNode.bind(this);this.toggleAddNode(null,null);BX.addCustomEvent(this.eventObject,"onAnswerHasBeenAdded",this.toggleAddNode);BX.addCustomEvent(this.eventObject,"onAnswerHasBeenDeleted",this.toggleAddNode)};i.prototype.toggleAddNode=function(t,e){if(e===null||e.getGroupId()===this.getId()){var i=BX.findChild(this.nodes["main"],{attribute:{"data-bx-action":"adda"}},true,true),s;for(s=0;s<i.length;s++){BX.unbind(i[s],"focus",this.addAnswer)}if(this.answers.canAdd()){BX.bind(i[i.length-1],"focus",this.addAnswer)}}};i.prototype.addAnswer=function(){var t=this.answers.getNextId(),e={"#Q#":this.getId(),"#A#":t,"#A_FIELD_TYPE#":BX("multi_"+this.getId())&&BX("multi_"+this.getId()).checked?"1":"0","#A_VALUE#":"","#A_C_SORT#":this.answers.getMaxSort()+10,"#A_PH#":++this.visibleId},i=BX.message("VOTE_TEMPLATE_ANSWER"),n;for(n in e){if(e.hasOwnProperty(n)){i=i.replace(new RegExp(n,"gi"),e[n])}}var d=BX.create("DIV",{html:i}).firstChild;this.nodes.answerList.appendChild(d);var o=new s(d,{eventObject:this.eventObject,groupId:this.getId()});this.bind(d);this.initDD(d);this.answers.set(o.getId(),o);BX.onCustomEvent(this.eventObject,"onAnswerHasBeenAdded",[o.getFullId(),o])};i.prototype.__delq=function(){var t=BX.findChild(this.nodes.main,{attribute:{"data-bx-question-field":"MESSAGE"}},true);if(!t||t.value===""||confirm(BX.message("VVE_QUESTION_DELETE"))){var e=this.answers.keys(),i=e.next();t=this.nodes.main;while(!i.done){this.answers.get(i.value).delete();i=e.next()}this.delete();t.parentNode.removeChild(t);BX.onCustomEvent(this.eventObject,"onQuestionHasBeenDeleted",[this.getFullId(),this])}};var s=function(t,e){s.superclass.constructor.apply(this,arguments);this.nodes.sort=BX.findChild(this.nodes["main"],{attribute:{"data-bx-answer-field":"C_SORT"}},true)};BX.extend(s,e);s.prototype.init=function(t){this.bind();this.initDD(this.nodes.main)};s.prototype.__dela=function(t){var e=BX.findChild(this.nodes.main,{attribute:{"data-bx-answer-field":"MESSAGE"}},true),i;if(!e||e.value===""||confirm(BX.message("VVE_ANS_DELETE"))){e=this.nodes.main;this.delete();e.parentNode.removeChild(e);BX.onCustomEvent(this.eventObject,"onAnswerHasBeenDeleted",[this.getFullId(),this])}};top.BVoteConstructor=window.BVoteConstructor=function(e){this.controller=e.controller;this.questions=new t({maxCount:e["maxQ"]});this.nodes={questionList:BX.findChild(this.controller,{attribute:{"data-bx-role":"question-list"}},true),action:BX.findChild(this.controller,{attribute:{"data-bx-action":"addq"}},true)};this.toggleAddNode=this.toggleAddNode.bind(this);this.visibleId=0;this.maxAnswersCount=e["maxA"];this.init(e)};window.BVoteConstructor.prototype.init=function(){var t=BX.findChild(this.controller,{tagName:"LI",attribute:{"data-bx-role":"question"}},true,true),e,s;for(e=0;e<t.length;e++){s=new i(t[e],{eventObject:this,maxAnswersCount:this.maxAnswersCount});this.questions.set(s.getId(),s)}this.toggleAddNode();BX.addCustomEvent(this,"onQuestionHasBeenAdded",this.toggleAddNode);BX.addCustomEvent(this,"onQuestionHasBeenDeleted",this.toggleAddNode);BX.bind(this.nodes.action,"click",this.addq.bind(this))};window.BVoteConstructor.prototype.toggleAddNode=function(){if(!this.questions.canAdd()){this.nodes.action.style.display="none"}else if(this.nodes.action.style.display==="none"){delete this.nodes.action.style.display}};window.BVoteConstructor.prototype.addq=function(t){BX.PreventDefault(t);if(this.questions.canAdd()){var e=BX.message("VOTE_TEMPLATE_ANSWER").replace(/#A#/gi,0).replace(/#A_PH#/gi,1).replace(/#A_FIELD_TYPE#/gi,"0").replace(/#A_C_SORT#/gi,"10").replace(/#A_VALUE#/gi,"")+BX.message("VOTE_TEMPLATE_ANSWER").replace(/#A#/gi,1).replace(/#A_PH#/gi,2).replace(/#A_FIELD_TYPE#/gi,"0").replace(/#A_C_SORT#/gi,"20").replace(/#A_VALUE#/gi,"");e=BX.create("DIV",{html:BX.message("VOTE_TEMPLATE_QUESTION").replace(/#ANSWERS#/gi,e).replace(/#Q#/gi,this.questions.getNextId()).replace(/#Q_C_SORT#/gi,this.questions.getMaxSort()+10).replace(/#Q_PH#/gi,++this.visibleId).replace(/#Q_VALUE#/gi,"").replace(/#Q_MULTY#/gi,"")});var s=new i(e.firstChild,{eventObject:this,maxAnswersCount:this.maxAnswersCount});s.visibleId=2;this.questions.set(s.getId(),s);this.nodes.questionList.appendChild(e.firstChild);BX.onCustomEvent(this,"onQuestionHasBeenAdded",[s.getFullId(),s])}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/socialnetwork.log.filter/templates/.default/script.min.js?176243172911034";s:6:"source";s:79:"/bitrix/components/bitrix/socialnetwork.log.filter/templates/.default/script.js";s:3:"min";s:83:"/bitrix/components/bitrix/socialnetwork.log.filter/templates/.default/script.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/socialnetwork.log.filter/templates/.default/script.map.js";}"*/
__logOnDateChange=function(e){var t=false,n=false,i=false,a=false;if(e.value=="interval")t=n=i=true;else if(e.value=="before")n=true;else if(e.value=="after"||e.value=="exact")t=true;else if(e.value=="days")a=true;BX("flt_date_from_span").style.display=t?"":"none";BX("flt_date_to_span").style.display=n?"":"none";BX("flt_date_hellip_span").style.display=i?"":"none";BX("flt_date_day_span").style.display=a?"inline-block":"none";BX("flt_date_day_text_span").style.display=a?"inline-block":"none"};function __logOnReload(e){if(BX("menu-popup-lenta-sort-popup")){var t=BX.findChildren(BX("menu-popup-lenta-sort-popup"),{className:"lenta-sort-item"},true);if(!BX.hasClass(t[0],"lenta-sort-item-selected")){for(var n=0;n<t.length;n++){if(n==0)BX.addClass(t[n],"lenta-sort-item-selected");else if(n!=t.length-1)BX.removeClass(t[n],"lenta-sort-item-selected")}}}if(BX("lenta-sort-button")){var i=BX.findChild(BX("lenta-sort-button"),{className:"lenta-sort-button-text-internal"},true,false);if(i)i.innerHTML=BX.message("sonetLFAllMessages")}var a=BX("sonet_log_counter_preset",true);if(a){if(parseInt(e)>0){a.style.display="inline-block";a.innerHTML=e}else{a.innerHTML="";a.style.display="none"}}}BitrixLFFilter=function(){this.id=null;this.filterPopup=false;this.currentName=null;this.obInputName={};this.obSearchInput={};this.obInputContainerName={};this.obContainerInput={};this.popupMenu=null;this.menuItems=[];this.actualSearchString="";this.minSearchStringLength=2};BitrixLFFilter.prototype.initLentaMenu=function(e){if(typeof e.menuItems!="undefined"){this.menuItems=e.menuItems}};BitrixLFFilter.prototype.showLentaMenu=function(e){var t=typeof e.short!="undefined"&&e.short,n=typeof e.bindElement!="undefined"?BX(e.bindElement):null;if(!n){return false}if(typeof e.siteTemplateId=="undefined"||e.siteTemplateId!="bitrix24"){BX.addClass(n,"lenta-sort-button-active")}const i=BX.util.array_merge(!t?BX.util.array_merge(this.menuItems.preset,this.menuItems.filter):[],this.menuItems.actions);if(!BX.Type.isArrayFilled(i)){return false}this.popupMenu=BX.PopupMenu.create("lenta-sort-popup",n,i,{offsetTop:e.siteTemplateId=="bitrix24"?-5:2,offsetLeft:e.siteTemplateId=="bitrix24"?17:43,angle:true,events:{onPopupClose:function(){if(typeof e.siteTemplateId!="undefined"||e.siteTemplateId!="bitrix24"){BX.removeClass(n,"lenta-sort-button-active")}}}});this.popupMenu.show();return false};BitrixLFFilter.prototype.initFilter=function(e){var t=typeof e!="undefined"&&typeof e.version!="undefined"?parseInt(e.version):0;var n=typeof e!="undefined"&&typeof e.filterId!="undefined"?e.filterId:"LIVEFEED";this.id=n;if(t>=2){if(typeof e!="undefined"&&typeof e.minSearchStringLength!="undefined"&&parseInt(e.minSearchStringLength)>0){this.minSearchStringLength=parseInt(e.minSearchStringLength)}var i=BX.Main.filterManager.getById(n);if(i&&(i.getSearch().getSquares().length>0||i.getSearch().getSearchString().length>0)){var a=BX.findParent(BX(n+"_filter_container"),{className:"pagetitle-wrap"});if(a){BX.addClass(a,"pagetitle-wrap-filter-opened")}}BX.addCustomEvent("BX.Livefeed:refresh",BX.delegate((function(){var e=BX.Main.filterManager.getById(n);if(e){e.getPreset().resetPreset(true);e.getSearch().clearForm()}}),this));BX.addCustomEvent("BX.Main.Filter:beforeApply",BX.delegate((function(e,t,i,a){if(e!=n||this.actualSearchString.length>0&&this.actualSearchString.length<this.minSearchStringLength){return}BX.onCustomEvent(window,"BX.Livefeed.Filter:beforeApply",[t,a])}),this));BX.addCustomEvent("BX.Main.Filter:apply",BX.delegate((function(e,t,i,a,o){if(e!=n||this.actualSearchString.length>0&&this.actualSearchString.length<this.minSearchStringLength){return}BX.onCustomEvent(window,"BX.Livefeed.Filter:apply",[t,a,o])}),this));BX.addCustomEvent("BX.Filter.Search:input",BX.delegate((function(e,t){if(e==n){this.actualSearchString=typeof t!="undefined"?BX.util.trim(t):"";if(this.actualSearchString.length>0&&this.actualSearchString.length>=this.minSearchStringLength){BX.onCustomEvent(window,"BX.Livefeed.Filter:searchInput",[t])}}}),this));BX.addCustomEvent("BX.Main.Filter:blur",BX.delegate((function(e){if(e.getParam("FILTER_ID")==n&&e.getSearch().getSquares().length<=0&&e.getSearch().getSearchString().length<=0){var t=BX.findParent(BX(n+"_filter_container"),{className:"pagetitle-wrap"});if(t){BX.removeClass(t,"pagetitle-wrap-filter-opened")}}})));if(BX(this.id+"_filter_container")){var o=BX.delegate((function(e){var t=BX.findParent(e.target,{className:"pagetitle-wrap"});if(t&&!BX.hasClass(t,"pagetitle-wrap-filter-opened")){BX.addClass(t,"pagetitle-wrap-filter-opened")}}),this);BX.bind(BX(this.id+"_search_container"),"click",o)}}else{__logOnDateChange(document.forms["log_filter"].flt_date_datesel);BX("flt_date_from_span").onclick=function(){BX.calendar({node:this,field:BX("flt_date_from"),bTime:false})};BX("flt_date_to_span").onclick=function(){BX.calendar({node:this,field:BX("flt_date_to"),bTime:false})}}};BitrixLFFilter.prototype.initDestination=function(e){this.obInputName[e.name]=e.inputName;this.obSearchInput[e.name]=BX(e.inputName);this.obInputContainerName[e.name]=e.inputContainerName;this.obContainerInput[e.name]=BX(e.inputContainerName);if(typeof e.items!="undefined"&&typeof e.items.department!="undefined"){if(typeof e.items.extranetRoot!="undefined"){for(var t in e.items.extranetRoot){if(e.items.extranetRoot.hasOwnProperty(t)){e.items.department[t]=e.items.extranetRoot[t]}}}if(!e.items.departmentRelation){e.items.departmentRelation=BX.SocNetLogDestination.buildDepartmentRelation(e.items.department)}}BX.SocNetLogDestination.init({name:e.name,pathToAjax:typeof e.pathToAjax!="undefined"?e.pathToAjax:false,searchInput:this.obSearchInput[e.name],extranetUser:!!e.extranetUser,departmentSelectDisable:!!e.departmentSelectDisable,bindMainPopup:{node:e.bindNode,offsetTop:"5px",offsetLeft:"15px"},bindSearchPopup:{node:e.bindNode,offsetTop:"5px",offsetLeft:"15px"},callback:{select:BX.proxy(this.onSelectDestination,{name:e.name,containerInput:BX(e.inputContainerName),inputContainerName:e.inputContainerName,inputName:e.inputName,searchInput:BX(e.inputName),resultFieldName:e.resultFieldName}),unSelect:BX.proxy(this.onUnSelectDestination,{name:e.name,inputContainerName:e.inputContainerName,inputName:e.inputName,searchInput:BX(e.inputName)})},items:e.items,itemsLast:e.itemsLast,itemsSelected:e.itemsSelected,itemsSelectedUndeleted:typeof e.itemsSelectedUndeleted!="undefined"?e.itemsSelectedUndeleted:{},isCrmFeed:false,useClientDatabase:true,destSort:e.destSort,allowAddUser:false,allowSearchEmailUsers:!e.extranetUser,userNameTemplate:e.userNameTemplate});BX.bind(this.obSearchInput[e.name],"click",(function(t){oLFFilter.currentName=e.name;BX.SocNetLogDestination.openDialog(e.name);return BX.PreventDefault(t)}));BX.bind(this.obSearchInput[e.name],"keyup",BX.delegate(BX.SocNetLogDestination.BXfpSearch,{formName:e.name,inputName:oLFFilter.obInputName[e.name]}));BX.bind(this.obSearchInput[e.name],"keydown",BX.delegate(BX.SocNetLogDestination.BXfpSearchBefore,{formName:e.name,inputName:oLFFilter.obInputName[e.name]}))};BitrixLFFilter.prototype.clearInput=function(){if(this.obContainerInput[this.currentName]){var e=BX.findChildren(this.obContainerInput[this.currentName],{className:"feed-add-post-destination"},false);for(var t=0;t<e.length;t++){BX.SocNetLogDestination.deleteItem(e[t].attributes["data-id"].value,e[t].attributes["data-type"].value,this.currentName)}}};BitrixLFFilter.prototype.onSelectDestination=function(e,t,n,i){oLFFilter.clearInput();BX.SocNetLogDestination.BXfpSelectCallback({formName:this.name,item:e,type:t,search:n,bUndeleted:i,containerInput:this.containerInput,valueInput:this.searchInput,varName:this.resultFieldName});this.searchInput.style.display="none";if(this.name=="feed-filter-created-by"&&BX("flt_comments_cont")){BX("flt_comments_cont").style.display="block"}BX.SocNetLogDestination.closeDialog();BX.SocNetLogDestination.closeSearch()};BitrixLFFilter.prototype.onUnSelectDestination=function(e){var t=BX.findChildren(BX(this.inputContainerName),{attribute:{"data-id":""+e.id+""}},true);if(t!==null){for(var n=0;n<t.length;n++){BX.remove(t[n])}}BX(this.inputName).value="";this.searchInput.style.display="inline-block";if(this.name=="feed-filter-created-by"&&BX("flt_comments_cont")){BX("flt_comments_cont").style.display="none"}};BitrixLFFilter.prototype.ShowFilterPopup=function(e){if(!oLFFilter.filterPopup){BX.ajax.get(BX.message("sonetLFAjaxPath"),(function(t){BX.closeWait(e);oLFFilter.filterPopup=new BX.PopupWindow("bx_log_filter_popup",e,{closeIcon:false,offsetTop:5,autoHide:true,zIndex:-100,className:"sonet-log-filter-popup-window",events:{onPopupClose:function(){if(!BX.hasClass(this.bindElement,"pagetitle-menu-filter-set"))BX.removeClass(this.bindElement,"pagetitle-menu-filter-selected")},onPopupShow:function(){BX.addClass(this.bindElement,"pagetitle-menu-filter-selected")}}});var n=BX.create("DIV",{html:BX.util.trim(t)});oLFFilter.filterPopup.setContent(n.firstChild);oLFFilter.filterPopup.show()}))}else{oLFFilter.filterPopup.show()}};BitrixLFFilter.prototype.__SLFShowInfoPopup=function(e){var t=[BX.create("BUTTON",{props:{className:"ui-btn ui-btn-md ui-btn-success"},text:BX.message("sonetLFDialogRead"),events:{click:function(){BX.ajax({method:"POST",dataType:"json",url:BX.message("ajaxControllerURL"),data:{sessid:BX.bitrix_sessid(),popupType:e.type,closePopup:"Y"},onsuccess:function(t){if(typeof t!="undefined"&&typeof t.SUCCESS!="undefined"&&t.SUCCESS=="Y"){a.close();if(e.reload){top.location=top.location.href}}}})}}})];if(BX.type.isArray(e.buttonsAdd)){var n=0;for(var i=0;i<e.buttonsAdd.length;i++){n=e.buttonsAdd[i];t.push(BX.create("BUTTON",{props:{className:"ui-btn ui-btn-md ui-btn-"+n.type},text:n.title,events:{click:n.click}}))}}var a=new BX.PopupWindow(e.name,e.bindObj,{closeByEsc:false,closeIcon:false,autoHide:false,overlay:true,events:{},width:700,buttons:[],zIndex:0,content:BX.create("DIV",{children:[BX.create("DIV",{props:{className:"bx-slf-popup-title"},text:e.title}),BX.create("DIV",{props:{className:"bx-slf-popup-content"},children:[BX.create("DIV",{props:{className:"bx-slf-popup-cont-title"},html:e.description1}),BX.create("DIV",{props:{className:"bx-slf-popup-descript"},children:[BX.type.isNotEmptyString(e.description2)?BX.create("DIV",{html:e.description2}):null,BX.type.isPlainObject(e.descriptionImage)&&BX.type.isNotEmptyString(e.descriptionImage.src)?BX.create("IMG",{props:{className:"bx-slf-popup-descript-img"},attrs:{src:e.descriptionImage.src,width:e.descriptionImage.width,height:e.descriptionImage.height}}):null]})]}),BX.create("DIV",{props:{className:"popup-window-buttons"},children:t})]})});a.show();return a};BitrixLFFilter.prototype.onClickMenuItem=function(e){if(typeof e.menuItem!="undefined"){BX.toggleClass(e.menuItem,"lenta-sort-item-selected")}this.popupMenu.close();if(typeof e.href!="undefined"){top.location.href=e.href}};BitrixLFFilter.prototype.closeHint=function(e){};oLFFilter=new BitrixLFFilter;window.oLFFilter=oLFFilter;
/* End */
;
; /* Start:"a:4:{s:4:"full";s:98:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/script.min.js?176243172927356";s:6:"source";s:78:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/script.js";s:3:"min";s:82:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/script.min.js";s:3:"map";s:82:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/script.map.js";}"*/
function showHiddenDestination(t,e){BX.hide(e);BX("blog-destination-hidden-"+t).style.display="inline"}function showMenuLinkInput(t,e){var i="post-menu-"+t+"-link",o=BX(i+"-text"),s=BX(i+"-icon-done");if(BX.clipboard.isCopySupported()){if(o&&o.getAttribute("data-block-click")=="Y"){return}BX.clipboard.copy(e);if(o&&s){s.style.display="inline-block";BX.removeClass(BX(i+"-icon-animate"),"post-menu-link-icon-animate");BX.adjust(o,{attrs:{"data-block-click":"Y"}});setTimeout((function(){BX.addClass(BX(i+"-icon-animate"),"post-menu-link-icon-animate")}),1);setTimeout((function(){BX.adjust(o,{attrs:{"data-block-click":"N"}})}),500)}return}var n=BX.proxy_context,a=parseInt(!!n.getAttribute("bx-height")?n.getAttribute("bx-height"):n.offsetHeight);if(n.getAttribute("bx-status")!="shown"){n.setAttribute("bx-status","shown");if(!BX(i)&&!!BX(i+"-text")){var r=BX(i+"-text"),p=BX.pos(r),l=BX.pos(r.parentNode);pos3=BX.pos(BX.findParent(r,{className:"menu-popup-item"},true));p["height"]=l["height"]-1;BX.adjust(n,{attrs:{"bx-height":n.offsetHeight},style:{overflow:"hidden",display:"block"},children:[BX.create("BR"),BX.create("DIV",{attrs:{id:i},children:[BX.create("SPAN",{attrs:{className:"menu-popup-item-left"}}),BX.create("SPAN",{attrs:{className:"menu-popup-item-icon"}}),BX.create("SPAN",{attrs:{className:"menu-popup-item-text"},children:[BX.create("INPUT",{attrs:{id:i+"-input",type:"text",value:e},style:{height:p["height"]+"px",width:pos3["width"]-21+"px"},events:{click:function(t){this.select();BX.PreventDefault(t)}}})]})]}),BX.create("SPAN",{className:"menu-popup-item-right"})]})}new BX.fx({time:.2,step:.05,type:"linear",start:a,finish:a*2,callback:BX.delegate((function(t){this.style.height=t+"px"}),n)}).start();BX.fx.show(BX(i),.2);BX(i+"-input").select()}else{n.setAttribute("bx-status","hidden");new BX.fx({time:.2,step:.05,type:"linear",start:n.offsetHeight,finish:a,callback:BX.delegate((function(t){this.style.height=t+"px"}),n)}).start();BX.fx.hide(BX(i),.2)}}function deleteBlogPost(t){var e=BX("blg-post-"+t);if(BX.findChild(e,{attr:{id:"form_c_del"}},true,false)){BX.hide(BX("form_c_del"));BX(e.parentNode.parentNode).appendChild(BX("form_c_del"))}BX.ajax.runAction("socialnetwork.api.livefeed.blogpost.delete",{data:{id:t}}).then(function(){BX.Livefeed.FeedInstance.deleteSuccess(document.getElementById("blg-post-"+t))}.bind(this),function(t){BX.findChild(e,{className:"feed-post-cont-wrap"},true,false).insertBefore(BX.create("span",{children:[BX.create("div",{props:{className:"feed-add-error"},children:[BX.create("span",{props:{className:"feed-add-info-icon"}}),BX.create("span",{props:{className:"feed-add-info-text"},html:t.errors[0].message})]})]}),BX.findChild(e,{className:"feed-user-avatar"},true,false))}.bind(this));return false}var waitPopupBlogImage=null;function blogShowImagePopup(t){if(!waitPopupBlogImage){waitPopupBlogImage=new BX.PopupWindow("blogwaitPopupBlogImage",window,{autoHide:true,lightShadow:false,zIndex:2,content:BX.create("IMG",{props:{src:t,id:"blgimgppp"}}),closeByEsc:true,closeIcon:true})}else{BX("blgimgppp").src="/bitrix/images/1.gif";BX("blgimgppp").src=t}waitPopupBlogImage.setOffset({offsetTop:0,offsetLeft:0});setTimeout((function(){waitPopupBlogImage.adjustPosition()}),100);waitPopupBlogImage.show()}function __blogPostSetFollow(t){return BX.Livefeed.FeedInstance.changeFollow({logId:t})}(function(){if(!!BX.SBPostMenu)return false;BX.SBPostMenu=function(t){};BX.SBPostMenu.showMenu=function(params){if(typeof params=="undefined"||typeof params.event==="undefined"){return false}var bindNode=params.event.currentTarget;if(!BX.type.isDomNode(bindNode)){return false}var menuNode=params.menuNode;if(!BX.type.isDomNode(menuNode)){return false}var postId=parseInt(menuNode.getAttribute("data-bx-post-id"));if(postId<=0){return false}const context=params.context?params.context:"";const sonetGroupId=params.sonetGroupId?parseInt(params.sonetGroupId,10):0;BX.PopupMenu.destroy("blog-post-"+postId);var isPublicPage=menuNode.getAttribute("data-bx-public-page");isPublicPage=isPublicPage==="Y";var isTasksAvailable=menuNode.getAttribute("data-bx-tasks-available");isTasksAvailable=isTasksAvailable==="Y";var isGroupReadOnly=menuNode.getAttribute("data-bx-group-read-only");isGroupReadOnly=isGroupReadOnly==="Y";var items=menuNode.getAttribute("data-bx-items");try{items=JSON.parse(items);if(!BX.type.isPlainObject(items)){items={}}}catch(t){items={}}var pathToPost=menuNode.getAttribute("data-bx-path-to-post");var urlToEdit=menuNode.getAttribute("data-bx-path-to-edit");var urlToHide=menuNode.getAttribute("data-bx-path-to-hide");var urlToDelete=menuNode.getAttribute("data-bx-path-to-delete");var urlToPub=menuNode.getAttribute("data-bx-path-to-pub");var voteId=parseInt(menuNode.getAttribute("data-bx-vote-id"));var postType=menuNode.getAttribute("data-bx-post-type");var serverName=menuNode.getAttribute("data-bx-server-name");if(BX.type.isNotEmptyString(urlToHide)){urlToHide=BX.util.remove_url_param(urlToHide,["b24statAction"]);urlToHide=BX.util.add_url_param(urlToHide,{b24statAction:"hidePost"})}if(isPublicPage){return false}var menuWaiterPopup=new BX.PopupWindow("blog-post-"+postId+"-waiter",bindNode,{offsetLeft:-14,offsetTop:4,lightShadow:false,angle:{position:"top",offset:50},content:BX.create("SPAN",{props:{className:"bx-ilike-wait"}})});setTimeout((function(){if(menuWaiterPopup){menuWaiterPopup.show()}}),300);BX.ajax.runAction("socialnetwork.api.livefeed.blogpost.getData",{data:{params:{postId:postId,public:isPublicPage?"Y":"N",mobile:"N",groupReadOnly:isGroupReadOnly?"Y":"N",pathToPost:pathToPost,voteId:voteId,checkModeration:"Y"}}}).then((function(response){var postData=response.data;if(postData.perms<="D"&&items.length<=0){menuWaiterPopup.destroy();return false}var menuItems=[];if(!BX.util.in_array(postType,["DRAFT","MODERATION"])){if(parseInt(BX.message("USER_ID"))>0&&parseInt(postData.logId)>0){var isPinned=parseInt(postData.logPinnedUserId)>0;menuItems.push({text:BX.message(isPinned?"SONET_EXT_LIVEFEED_MENU_TITLE_PINNED_Y":"SONET_EXT_LIVEFEED_MENU_TITLE_PINNED_N"),onclick:function(t){BX.Livefeed.PinnedPanelInstance.changePinned({logId:parseInt(postData.logId),newState:isPinned?"N":"Y",event:t,node:bindNode});this.popupWindow.close();return t.preventDefault()}})}if(postData.isGroupReadOnly!="Y"&&parseInt(BX.message("USER_ID"))>0&&parseInt(postData.logId)>0){var isFavorites=parseInt(postData.logFavoritesUserId)>0;menuItems.push({text:BX.message(isFavorites?"SONET_EXT_LIVEFEED_MENU_TITLE_FAVORITES_Y":"SONET_EXT_LIVEFEED_MENU_TITLE_FAVORITES_N"),onclick:function(t){__logChangeFavorites(parseInt(postData.logId),"log_entry_favorites_"+parseInt(postData.logId),isFavorites?"N":"Y",true,t);return false}})}menuItems.push({text:BX.message("BLOG_HREF"),href:postData.urlToPost,class:"feed-entry-popup-menu-link",target:"_top"});menuItems.push({html:'<span id="post-menu-'+postData.logId+'-link-text">'+BX.message("BLOG_LINK")+"</span>"+'<span id="post-menu-'+postData.logId+'-link-icon-animate" class="post-menu-link-icon-wrap">'+'<span class="post-menu-link-icon" id="post-menu-'+postData.logId+'-link-icon-done" style="display: none;">'+"</span>"+"</span>",onclick:function(t){showMenuLinkInput(parseInt(postData.logId),serverName+postData.urlToPost);return false},class:"feed-entry-popup-menu-link"});if(parseInt(BX.message("USER_ID"))>0&&postData.isGroupReadOnly!="Y"&&postData.isShareForbidden!="Y"){menuItems.push({text:BX.message("BLOG_SHARE"),onclick:function(){showSharing(postId,parseInt(postData.authorId));this.popupWindow.close()}})}}if(postData.perms>="W"||postData.perms>="P"&&postData.authorId==BX.message("USER_ID")){var editParams={text:BX.message("BLOG_BLOG_BLOG_EDIT")};if(context==="spaces"){editParams.onclick=function(t,e){e.getMenuWindow()?.getPopupWindow()?.close();BX.Livefeed.Post.editSpacesPost(postId,sonetGroupId)}}else if(BX.type.isNotEmptyString(postData.backgroundCode)){editParams.onclick=function(){BX.Livefeed.Post.showBackgroundWarning({urlToEdit:urlToEdit,menuPopupWindow:this.popupWindow})}}else{editParams.href=urlToEdit;editParams.target="_top"}menuItems.push(editParams)}if(!BX.util.in_array(postType,["DRAFT","MODERATION"])&&context!=="spaces"){if(postData.perms>="T"){menuItems.push({text:BX.message("BLOG_MES_HIDE"),onclick:function(){if(confirm(BX.message("BLOG_MES_HIDE_POST_CONFIRM"))){window.location=urlToHide;this.popupWindow.close()}}})}if(isTasksAvailable&&postData.perms>"D"){menuItems.push({text:BX.message("BLOG_POST_CREATE_TASK"),onclick:function(t){BX.Livefeed.TaskCreator.create({entityType:"BLOG_POST",entityId:postId});this.popupWindow.close();return t.preventDefault()}})}if(typeof BX.Landing!=="undefined"){if(typeof BX.Landing.UI.Note.Menu.getMenuItem!=="undefined"){menuItems.push(BX.Landing.UI.Note.Menu.getMenuItem("blog",postId))}}if(postData.urlToVoteExport.length>0){menuItems.push({text:BX.message("BLOG_POST_VOTE_EXPORT"),href:postData.urlToVoteExport,target:"_top"})}}if(postType=="DRAFT"&&postData.allowModerate=="Y"&&BX.type.isNotEmptyString(urlToPub)&&context!=="spaces"){menuItems.push({text:BX.message("BLOG_POST_MOD_PUB"),href:urlToPub,target:"_top"})}if(postData.perms>="W"){menuItems.push({text:BX.message("BLOG_BLOG_BLOG_DELETE"),onclick:function(){if(confirm(BX.message("BLOG_MES_DELETE_POST_CONFIRM"))){if(urlToDelete.length>0&&context!=="spaces"){window.location=urlToDelete.replace("#del_post_id#",postId)}else{window.deleteBlogPost(postId)}this.popupWindow.close()}}})}var onclickHandler=null,menuItem=null,item=null;for(var key in items){if(items.hasOwnProperty(key)){item=items[key];menuItem={};if(typeof item.text_php!="undefined"){menuItem.text=item.text_php}if(typeof item.onclick!="undefined"){eval("onclickHandler = "+item.onclick);menuItem.onclick=onclickHandler}else if(typeof item.href!="undefined"){menuItem.href=item.href}menuItems.push(menuItem)}}menuWaiterPopup.destroy();BX.PopupMenu.show("blog-post-"+postId,bindNode,menuItems,{offsetLeft:-14,offsetTop:4,lightShadow:false,angle:{position:"top",offset:50},events:{}});return false}),(function(t){menuWaiterPopup.destroy();return false}))}})();(function(){if(!!window.SBPImpPost)return false;window.SBPImpPost=function(t){if(t.getAttribute("sbpimppost")=="Y")return false;this.CID="sbpimppost"+(new Date).getTime();this.busy=false;this.node=t;this.btn=t.parentNode;this.block=t.parentNode.parentNode;this.postId=t.getAttribute("bx-blog-post-id");t.setAttribute("sbpimppost","Y");BX.onCustomEvent(this.node,"onInit",[this]);if(this.postId>0)this.onclick();return false};window.SBPImpPost.prototype.onclick=function(){this.sendData()};window.SBPImpPost.prototype.showClick=function(){var t=this.btn.offsetWidth,e=BX.message("BLOG_ALREADY_READ"),i=BX.create("span",{props:{className:"have-read-text-block"},html:"<i></i>"+e+'<span class="feed-imp-post-footer-comma">,</span>'});this.block.style.minWidth=this.btn.offsetWidth-27+"px";var o=new BX.easing({duration:250,start:{width:t},finish:{width:1},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:BX.delegate((function(t){this.btn.style.width=t.width+"px"}),this),complete:BX.delegate((function(){this.btn.innerHTML="";this.btn.appendChild(i);var t=i.scrollWidth+31;var e=new BX.easing({duration:300,start:{width_2:0},finish:{width_2:t},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:BX.delegate((function(t){this.btn.style.width=t.width_2+"px"}),this)});e.animate()}),this)});o.animate()};window.SBPImpPost.prototype.wait=function(t){t=t=="show"?"show":"hide";if(t=="show"){this.node.disabled=true;BX.addClass(this.node,"ui-btn-clock")}else{BX.removeClass(this.node,"ui-btn-clock")}};window.SBPImpPost.prototype.sendData=function(){if(this.busy)return false;this.busy=true;window["node"]=this.node;window["obj"]=this;this.wait("show");var t={options:[{post_id:this.postId,name:"BLOG_POST_IMPRTNT",value:"Y"}],sessid:BX.bitrix_sessid()};BX.onCustomEvent(this.node,"onSend",[t]);BX.ajax.runAction("socialnetwork.api.livefeed.blogpost.important.vote",{data:{params:{POST_ID:this.postId}}}).then(function(e){if(!BX.type.isNotEmptyString(e.data.success)||e.data.success!="Y"){return false}this.busy=false;this.wait("hide");this.showClick();BX.onCustomEvent("onImportantPostRead",[this.postId,this.CID]);BX.ajax.runAction("socialnetwork.api.livefeed.blogpost.important.getUsers",{data:{params:{POST_ID:this.postId,NAME:"BLOG_POST_IMPRTNT",VALUE:"Y",PAGE_NUMBER:t.iNumPage,PATH_TO_USER:t.PATH_TO_USER,NAME_TEMPLATE:t.NAME_TEMPLATE}}}).then(function(t){var e=t.data;BX.onCustomEvent(this.node,"onUserVote",[e])}.bind(this),function(t){}.bind(this))}.bind(this),function(t){this.busy=false;this.wait("hide")}.bind(this))};top.SBPImpPostCounter=function(t,e,i){this.parentNode=t;this.node=BX.findChild(t,{tagName:"A"});if(!this.node)return false;BX.addCustomEvent(this.node,"onUserVote",BX.delegate((function(t){this.change(t)}),this));this.parentNode.SBPImpPostCounter=this;this.node.setAttribute("status","ready");this.node.setAttribute("inumpage",0);this.postId=e;this.popup=null;this.data=[];BX.bind(t,"click",BX.proxy((function(){this.get()}),this));BX.bind(t,"mouseover",BX.proxy((function(t){this.init(t)}),this));BX.bind(t,"mouseout",BX.proxy((function(t){this.init(t)}),this));this.pathToUser=i["pathToUser"];this.nameTemplate=i["nameTemplate"];this.onPullEvent=BX.delegate((function(t,e){if(t=="read"&&!!e&&e["POST_ID"]==this.postId){if(!!e["data"]){this.change(e["data"]);if(this.popup!=null){this.popup.isNew=true}}}}),this);BX.addCustomEvent("onPullEvent-socialnetwork",this.onPullEvent)};top.SBPImpPostCounter.prototype.click=function(t){t.uController=this;BX.addCustomEvent(t.node,"onUserVote",BX.proxy(this.change,this));BX.addCustomEvent(t.node,"onSend",BX.proxy((function(t){t["PATH_TO_USER"]=this.pathToUser;t["NAME_TEMPLATE"]=this.nameTemplate;t["iNumPage"]=0;t["ID"]=this.postId;t["post_id"]=this.postId;t["name"]="BLOG_POST_IMPRTNT";t["value"]="Y";t["return"]="users"}),this));this.btnObj=t};top.SBPImpPostCounter.prototype.change=function(t){if(!!t&&!!t.items){var e=false;this.data=[];for(var i in t.items){if(t.items.hasOwnProperty(i)){this.data.push(t.items[i])}}if(t["StatusPage"]=="done"){this.node.setAttribute("inumpage","done")}else this.node.setAttribute("inumpage",1);BX.adjust(this.parentNode,{style:{display:"flex"}})}else{this.node.setAttribute("inumpage","done");BX.hide(this.parentNode)}this.node.firstChild.innerHTML=t["RecordCount"]};top.SBPImpPostCounter.prototype.init=function(t){if(!!this.node.timeoutOver){clearTimeout(this.node.timeoutOver);this.node.timeoutOver=false}if(t.type=="mouseover"){if(!this.node.mouseoverFunc){this.node.mouseoverFunc=BX.delegate((function(){this.get();if(this.popup){BX.bind(this.popup.popupContainer,"mouseout",BX.proxy((function(){this.popup.timeoutOut=setTimeout(BX.proxy((function(){if(!!this.popup){this.popup.close()}}),this),400)}),this));BX.bind(this.popup.popupContainer,"mouseover",BX.proxy((function(){if(this.popup.timeoutOut)clearTimeout(this.popup.timeoutOut)}),this))}}),this)}this.node.timeoutOver=setTimeout(this.node.mouseoverFunc,400)}};top.SBPImpPostCounter.prototype.get=function(){if(this.node.getAttribute("inumpage")!="done")this.node.setAttribute("inumpage",parseInt(this.node.getAttribute("inumpage"))+1);this.show();if(this.data.length>0){this.make(this.node.getAttribute("inumpage")!="done")}if(this.node.getAttribute("inumpage")!="done"){this.node.setAttribute("status","busy");BX.ajax.runAction("socialnetwork.api.livefeed.blogpost.important.getUsers",{data:{params:{POST_ID:this.postId,NAME:"BLOG_POST_IMPRTNT",VALUE:"Y",PAGE_NUMBER:this.node.getAttribute("inumpage"),PATH_TO_USER:this.pathToUser,NAME_TEMPLATE:this.nameTemplate}}}).then(function(t){var e=t.data;if(BX.type.isNotEmptyObject(e.items)){for(var i in e.items){if(e.items.hasOwnProperty(i)){this.data.push(e.items[i])}}if(e.StatusPage=="done"){this.node.setAttribute("inumpage","done")}this.make(this.node.getAttribute("inumpage")!="done")}else{this.node.setAttribute("inumpage","done")}this.node.firstChild.innerHTML=e["RecordCount"];this.node.setAttribute("status","ready")}.bind(this),function(t){if(!!this.popup){this.popup.close()}this.node.setAttribute("status","ready")}.bind(this))}};top.SBPImpPostCounter.prototype.show=function(){if(this.popup==null){this.popup=new BX.PopupWindow("bx-vote-popup-cont-"+this.postId,this.node,{lightShadow:true,offsetTop:-2,offsetLeft:3,autoHide:true,closeByEsc:true,bindOptions:{position:"top"},events:{onPopupClose:function(){this.destroy()},onPopupDestroy:BX.proxy((function(){this.popup=null}),this)},content:BX.create("SPAN",{props:{className:"bx-ilike-wait"}})});this.popup.isNew=true;this.popup.show()}this.popup.setAngle({position:"bottom"});this.popup.bindOptions.forceBindPosition=true;this.popup.adjustPosition();this.popup.bindOptions.forceBindPosition=false};top.SBPImpPostCounter.prototype.make=function(t){if(!this.popup)return true;t=t!==false;var e=this.popup&&this.popup.contentContainer?this.popup.contentContainer:BX("popup-window-content-bx-vote-popup-cont-"+this.postId),i=false,o=false,s=this.data;if(this.popup.isNew){i=BX.create("SPAN",{props:{className:"bx-ilike-popup"},children:[BX.create("SPAN",{props:{className:"bx-ilike-bottom_scroll"}})]});o=BX.create("SPAN",{props:{className:"bx-ilike-wrap-block"},children:[i]})}else{i=BX.findChild(this.popup.contentContainer,{className:"bx-ilike-popup"},true)}if(!!i){var n=null;for(var a in s){if(s.hasOwnProperty(a)){if(!BX.findChild(i,{tag:"A",attr:{id:"u"+s[a]["ID"]}},true)){if(s[a]["PHOTO_SRC"].length>0){n=BX.create("IMG",{attrs:{src:encodeURI(s[a]["PHOTO_SRC"])},props:{className:"bx-ilike-popup-avatar-img"}})}else{n=BX.create("IMG",{attrs:{src:"/bitrix/images/main/blank.gif"},props:{className:"bx-ilike-popup-avatar-img bx-ilike-popup-avatar-img-default"}})}i.appendChild(BX.create("A",{attrs:{id:"u"+s[a]["ID"]},props:{href:s[a]["URL"].length>0?s[a]["URL"]:"#",target:"_blank",className:"bx-ilike-popup-img"+(!!s[a]["TYPE"]?" bx-ilike-popup-img-"+s[a]["TYPE"]:"")},text:"",children:[BX.create("SPAN",{props:{className:"bx-ilike-popup-avatar-new"},children:[n,BX.create("SPAN",{props:{className:"bx-ilike-popup-avatar-status-icon"}})]}),BX.create("SPAN",{props:{className:"bx-ilike-popup-name-new"},html:s[a]["FULL_NAME"]})],events:{click:s[a]["URL"].length>0?function(t){return true}:function(t){BX.PreventDefault(t)}}}))}}}if(t){BX.bind(i,"scroll",BX.proxy(this.popupScrollCheck,this))}}if(this.popup.isNew){this.popup.isNew=false;if(!!e){try{e.removeChild(e.firstChild)}catch(t){}e.appendChild(o)}}if(this.popup!=null){this.popup.bindOptions.forceBindPosition=true;this.popup.adjustPosition();this.popup.bindOptions.forceBindPosition=false}};top.SBPImpPostCounter.prototype.popupScrollCheck=function(){var t=BX.proxy_context;if(t.scrollTop>(t.scrollHeight-t.offsetHeight)/1.5){this.get();BX.unbindAll(t)}};window.entitySelectorRepo={}})(window);window.showSharing=function(t,e){BX("sharePostId").value=t;BX("shareUserId").value=e;var i=BX("blogShare").getAttribute("bx-selector-id");if(!BX.type.isNotEmptyString(i)){return}if(!window["postDest"+t]){return}var o="entity-selector-"+i;var s="entity-selector-data-"+i;BX.clean(o);window.entitySelectorRepo[t]=new SBPEntitySelector({id:i+t,context:"BLOG_POST",tagNodeId:o,inputNodeId:s,preselectedItems:window["postDest"+t],allowSearchEmailUsers:window.oSBPostManager&&!!window.oSBPostManager.allowSearchEmailUsers,allowToAll:window.oSBPostManager&&!!window.oSBPostManager.allowToAll});if(document.getElementById(s)){document.getElementById(s).value=JSON.stringify(window["postDest"+t])}var n=BX("destination-sharing");if(BX("blg-post-destcont-"+t)){BX("blg-post-destcont-"+t).appendChild(n)}n.style.height=0;n.style.opacity=0;n.style.overflow="hidden";n.style.display="inline-block";new BX.easing({duration:500,start:{opacity:0,height:0},finish:{opacity:100,height:n.scrollHeight-40},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){n.style.height=t.height+"px";n.style.opacity=t.opacity/100},complete:function(){n.style.cssText=""}}).animate()};window.closeSharing=function(){var t=BX("destination-sharing");if(BX("sharePostSubmitButton")){BX.removeClass(BX("sharePostSubmitButton"),"ui-btn-clock")}new BX.easing({duration:500,start:{opacity:100,height:t.scrollHeight-40},finish:{opacity:0,height:0},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(e){t.style.height=e.height+"px";t.style.opacity=e.opacity/100},complete:function(){BX.hide(t)}}).animate()};window.sharingPost=function(){var t=BX("sharePostId").value;var e=BX("blogShare");if(BX("sharePostSubmitButton")){BX.addClass(BX("sharePostSubmitButton"),"ui-btn-clock")}var i=0,o="",s=null,n=null,a=null,r={postId:t,pathToUser:oSBPostManager.pathToUser,pathToPost:oSBPostManager.pathToPost,readOnly:oSBPostManager.readOnly};for(i=0;i<e.elements.length;i++){var p=e.elements[i];if(p.disabled){continue}o=p.name;n=false;s=/^(.*)\[(.*)\]$/.exec(o);if(s){o=s[1];n=true;a=BX.type.isNotEmptyString(s[2])?s[2]:false}switch(p.type.toLowerCase()){case"text":case"hidden":if(n){if(typeof r[o]==="undefined"){r[o]=a?{}:[]}if(BX.type.isArray(r[o])){r[o].push(p.value)}else if(a){r[o][a]=p.value}}else{r[o]=p.value}break;default:break}}var l=renderSharingPost(t,r.DEST_DATA);BX.ajax.runAction("socialnetwork.api.livefeed.blogpost.share",{data:{params:r,MODE:"RECORD",ENTITY_XML_ID:"BLOG_"+t,AJAX_POST:"Y"},analyticsLabel:{b24statAction:"sharePost"}}).then((function(e){if(!BX.type.isNotEmptyObject(e)||!BX.type.isNotEmptyString(e.status)||e.status!="success"){hideRenderedSharingNodes(l);if(!BX.type.isNotEmptyString(e.status)&&e.status=="error"&&!!BX.type.isNotEmptyString(e.errorMessage)){sharingPostError({postId:t,errorMessage:e.errorMessage})}}else{var i=e;BX.onCustomEvent(window,"OnUCAfterRecordAdd",["BLOG_"+t,e,i])}}),(function(e){sharingPostError({postId:t,errorMessage:e.errors[0].message});hideRenderedSharingNodes(l)}));closeSharing()};window.sharingPostError=function(t){var e=new BX.PopupWindow("error_popup",BX("blg-post-inform-"+t.postId),{lightShadow:true,offsetTop:-10,offsetLeft:100,autoHide:true,closeByEsc:true,closeIcon:{right:"5px",top:"5px"},draggable:{restrict:true},contentColor:"white",contentNoPaddings:true,bindOptions:{position:"bottom"},content:BX.create("DIV",{props:{className:"feed-create-task-popup-content"},children:[BX.create("DIV",{props:{className:"feed-create-task-popup-description"},text:t.errorMessage})]})});e.show()};window.renderSharingPost=function(t,e){if(!BX.type.isNotEmptyString(e)){return}var i=[];try{e=JSON.parse(e);if(!BX.type.isArray(e)){e=[]}}catch(t){e=[]}if(e.length<=0||!window.entitySelectorRepo[t]||!window.entitySelectorRepo[t].selector){return}var o=window.entitySelectorRepo[t].selector;var s=null;var n=document.getElementById("blog-destination-hidden-"+t);if(!n){var a=document.getElementById("blg-post-img-"+t).querySelectorAll(".feed-add-post-destination-new");if(a){s=a[a.length-1]}}e.forEach((function(e){var a=false;window["postDest"+t].forEach((function(t){if(a){return}a=t[0]==e[0]&&t[1]==e[1]}));if(a){return}var r=o.getTag({id:e[1],entityId:e[0]});var p="feed-add-post-destination-new";if(r.getEntityType()==="email"){p+=" feed-add-post-destination-new-email"}else if(r.getEntityType()==="extranet"){p+=" feed-add-post-destination-new-extranet"}var l=r.getLink();var d="post_"+t+"_dest_"+r.getEntityId()+"_"+r.getId();i.push(d);var u=null;if(BX.type.isNotEmptyString(l)){u=BX.create("a",{props:{className:p},attrs:{href:l,"bx-tooltip-user-id":r.getEntityId()==="user"?r.getId():""},text:r.getTitle()})}else{u=BX.create("span",{props:{className:p},text:r.getTitle()})}u=BX.create("span",{attrs:{id:d},children:[BX.create("span",{html:", "}),u]});if(n){n.appendChild(u)}else if(s){s.parentNode.insertBefore(u,s.nextSibling)}}));window["postDest"+t]=BX.clone(e);return i};window.hideRenderedSharingNodes=function(t){var e=false;for(i=0;i<t.length;i++){e=t[i];if(BX(e)){BX.cleanNode(BX(e),true)}}};(function(){if(!!BX.SBPostManager)return false;BX.SBPostManager=function(){this.inited=false;this.tagLinkPattern="";this.readOnly="N";this.pathToUser="";this.pathToPost="";this.allowToAll=false};BX.SBPostManager.prototype.init=function(t){this.tagLinkPattern=BX.type.isNotEmptyString(t.tagLinkPattern)?t.tagLinkPattern:"";this.inited=true;this.readOnly=BX.type.isNotEmptyString(t.readOnly)&&t.readOnly=="Y"?"Y":"N";this.pathToUser=BX.type.isNotEmptyString(t.pathToUser)?t.pathToUser:"";this.pathToPost=BX.type.isNotEmptyString(t.pathToPost)?t.pathToPost:"";this.allowToAll=BX.type.isBoolean(t.allowToAll)?t.allowToAll:false;this.currentScrollPosition=0;BX.Event.bind(document,"fullscreenchange",this.handleFullScreenChange.bind(this));BX.Event.bind(document,"scroll",this.handleScrollChange.bind(this))};BX.SBPostManager.prototype.handleFullScreenChange=function(){if(!this.getFullScreenElement()){window.scrollTo(0,this.currentScrollPosition)}};BX.SBPostManager.prototype.handleScrollChange=function(){if(!this.getFullScreenElement()){this.currentScrollPosition=window.scrollY}};BX.SBPostManager.prototype.getFullScreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||null};BX.SBPostManager.prototype.clickTag=function(t){var e=false;if(BX.type.isNotEmptyString(t)&&BX.type.isNotEmptyString(this.tagLinkPattern)){top.location.href=this.tagLinkPattern.replace("#tag#",BX.util.urlencode(t));e=true}return e}})();if(typeof oSBPostManager=="undefined"){oSBPostManager=new BX.SBPostManager;window.oSBPostManager=oSBPostManager}(function(){SBPEntitySelector=function(t){this.selector=null;this.inputNode=null;if(!BX.type.isNotEmptyString(t.id)){return null}this.init(t)};SBPEntitySelector.prototype.init=function(t){if(!BX.type.isPlainObject(t)){t={}}if(!BX.type.isNotEmptyString(t.id)||!BX.type.isNotEmptyString(t.tagNodeId)||!BX(t.tagNodeId)){return null}if(BX.type.isNotEmptyString(t.inputNodeId)&&BX(t.inputNodeId)){this.inputNode=BX(t.inputNodeId)}var e=BX.type.isArray(t.preselectedItems)?t.preselectedItems:[];this.selector=new BX.UI.EntitySelector.TagSelector({id:t.id,dialogOptions:{id:t.id,context:BX.type.isNotEmptyString(t.context)?t.context:null,preselectedItems:e,undeselectedItems:e,events:{"Item:onSelect":function(){this.recalcValue(this.selector.getDialog().getSelectedItems())}.bind(this),"Item:onDeselect":function(){this.recalcValue(this.selector.getDialog().getSelectedItems())}.bind(this)},entities:[{id:"meta-user",options:{"all-users":{allowView:BX.type.isBoolean(t.allowToAll)&&t.allowToAll}}},{id:"user",options:{emailUsers:BX.type.isBoolean(t.allowSearchEmailUsers)?t.allowSearchEmailUsers:false,myEmailUsers:true}},{id:"project",options:{features:{blog:["premoderate_post","moderate_post","write_post","full_post"]}}},{id:"department",options:{selectMode:"usersAndDepartments",allowFlatDepartments:false}}]},addButtonCaption:BX.message("BX_FPD_SHARE_LINK_1"),addButtonCaptionMore:BX.message("BX_FPD_SHARE_LINK_2")});this.selector.renderTo(document.getElementById(t.tagNodeId));return this.selector};SBPEntitySelector.prototype.recalcValue=function(t){if(!BX.type.isArray(t)||!this.inputNode){return}var e=[];t.forEach((function(t){e.push([t.entityId,t.id])}));this.inputNode.value=JSON.stringify(e)};window.SBPEntitySelector=SBPEntitySelector})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:96:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/index.min.js?17624317296754";s:6:"source";s:77:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/index.js";s:3:"min";s:81:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/index.min.js";s:3:"map";s:81:"/bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/index.map.js";}"*/
this.BX=this.BX||{};this.BX.Socialnetwork=this.BX.Socialnetwork||{};this.BX.Socialnetwork.Blog=this.BX.Socialnetwork.Blog||{};(function(e,s,t){"use strict";let a=e=>e,i;var l=babelHelpers.classPrivateFieldLooseKey("params");var o=babelHelpers.classPrivateFieldLooseKey("layout");var r=babelHelpers.classPrivateFieldLooseKey("copilotLoaded");var n=babelHelpers.classPrivateFieldLooseKey("copilotContextMenu");var b=babelHelpers.classPrivateFieldLooseKey("copilotShown");var c=babelHelpers.classPrivateFieldLooseKey("adjustAnimation");var d=babelHelpers.classPrivateFieldLooseKey("render");var v=babelHelpers.classPrivateFieldLooseKey("createCopilot");var p=babelHelpers.classPrivateFieldLooseKey("bindEvents");var P=babelHelpers.classPrivateFieldLooseKey("startAdjustAnimation");var h=babelHelpers.classPrivateFieldLooseKey("onButtonMouseDown");var B=babelHelpers.classPrivateFieldLooseKey("onButtonClick");var L=babelHelpers.classPrivateFieldLooseKey("show");var u=babelHelpers.classPrivateFieldLooseKey("getBindElement");var H=babelHelpers.classPrivateFieldLooseKey("hide");var F=babelHelpers.classPrivateFieldLooseKey("copyIntoComment");var f=babelHelpers.classPrivateFieldLooseKey("copyIntoNewPost");class m{constructor(e){Object.defineProperty(this,f,{value:K});Object.defineProperty(this,F,{value:C});Object.defineProperty(this,H,{value:_});Object.defineProperty(this,u,{value:j});Object.defineProperty(this,L,{value:E});Object.defineProperty(this,B,{value:T});Object.defineProperty(this,h,{value:I});Object.defineProperty(this,P,{value:w});Object.defineProperty(this,p,{value:g});Object.defineProperty(this,v,{value:O});Object.defineProperty(this,d,{value:y});Object.defineProperty(this,l,{writable:true,value:void 0});Object.defineProperty(this,o,{writable:true,value:void 0});Object.defineProperty(this,r,{writable:true,value:void 0});Object.defineProperty(this,n,{writable:true,value:void 0});Object.defineProperty(this,b,{writable:true,value:void 0});Object.defineProperty(this,c,{writable:true,value:void 0});babelHelpers.classPrivateFieldLooseBase(this,l)[l]=e;babelHelpers.classPrivateFieldLooseBase(this,o)[o]={};if(babelHelpers.classPrivateFieldLooseBase(this,l)[l].enabledBySettings){void babelHelpers.classPrivateFieldLooseBase(this,v)[v]()}s.Dom.append(babelHelpers.classPrivateFieldLooseBase(this,d)[d](),babelHelpers.classPrivateFieldLooseBase(this,l)[l].container)}}function y(){babelHelpers.classPrivateFieldLooseBase(this,o)[o].button=s.Tag.render(i||(i=a`
			<span class="feed-inform-item feed-inform-comments feed-copilot-readonly">
				<a>${0}</a>
			</span>
		`),s.Loc.getMessage("BLOG_POST_BUTTON_COPILOT"));s.Event.bind(babelHelpers.classPrivateFieldLooseBase(this,o)[o].button,"mousedown",babelHelpers.classPrivateFieldLooseBase(this,h)[h].bind(this));s.Event.bind(babelHelpers.classPrivateFieldLooseBase(this,o)[o].button,"click",babelHelpers.classPrivateFieldLooseBase(this,B)[B].bind(this));return babelHelpers.classPrivateFieldLooseBase(this,o)[o].button}async function O(){const{CopilotContextMenu:e}=await s.Runtime.loadExtension("ai.copilot");const t={moduleId:babelHelpers.classPrivateFieldLooseBase(this,l)[l].copilotParams.moduleId,contextId:babelHelpers.classPrivateFieldLooseBase(this,l)[l].copilotParams.contextId,category:babelHelpers.classPrivateFieldLooseBase(this,l)[l].copilotParams.category,bindElement:babelHelpers.classPrivateFieldLooseBase(this,u)[u](),angle:true,extraResultMenuItems:[{code:"insert-into-comment",text:s.Loc.getMessage("BLOG_POST_BUTTON_COPILOT_COPY_INTO_COMMENT"),command:()=>{const e=babelHelpers.classPrivateFieldLooseBase(this,n)[n].getResultText();babelHelpers.classPrivateFieldLooseBase(this,n)[n].hide();babelHelpers.classPrivateFieldLooseBase(this,F)[F](e)}},{code:"insert-into-new-post",text:s.Loc.getMessage("BLOG_POST_BUTTON_COPILOT_COPY_INTO_NEW_POST"),command:()=>{const e=babelHelpers.classPrivateFieldLooseBase(this,n)[n].getResultText();babelHelpers.classPrivateFieldLooseBase(this,n)[n].hide();babelHelpers.classPrivateFieldLooseBase(this,f)[f](e)}}]};babelHelpers.classPrivateFieldLooseBase(this,n)[n]=new e(t);babelHelpers.classPrivateFieldLooseBase(this,p)[p]();try{await babelHelpers.classPrivateFieldLooseBase(this,n)[n].init();babelHelpers.classPrivateFieldLooseBase(this,r)[r]=true}catch(e){console.error("Failed to init copilot",e)}}function g(){t.EventEmitter.subscribe("onPullEvent-unicomments",babelHelpers.classPrivateFieldLooseBase(this,P)[P].bind(this))}function w(){var e;(e=babelHelpers.classPrivateFieldLooseBase(this,c)[c])==null?void 0:e.stop();babelHelpers.classPrivateFieldLooseBase(this,c)[c]=new BX.easing({duration:1e3,start:{},finish:{},transition:BX.easing.makeEaseOut(BX.easing.transitions.linear),step:()=>{if(babelHelpers.classPrivateFieldLooseBase(this,n)[n].isShown()){babelHelpers.classPrivateFieldLooseBase(this,n)[n].adjustPosition()}},complete:()=>{babelHelpers.classPrivateFieldLooseBase(this,c)[c]=null}});babelHelpers.classPrivateFieldLooseBase(this,c)[c].animate()}function I(){var e;if(!babelHelpers.classPrivateFieldLooseBase(this,l)[l].enabledBySettings){return}babelHelpers.classPrivateFieldLooseBase(this,b)[b]=(e=babelHelpers.classPrivateFieldLooseBase(this,n)[n])==null?void 0:e.isShown()}function T(){if(!babelHelpers.classPrivateFieldLooseBase(this,l)[l].enabledBySettings){BX.UI.InfoHelper.show("limit_copilot_off");return}if(babelHelpers.classPrivateFieldLooseBase(this,b)[b]){babelHelpers.classPrivateFieldLooseBase(this,H)[H]()}else{babelHelpers.classPrivateFieldLooseBase(this,L)[L]()}}function E(){if(babelHelpers.classPrivateFieldLooseBase(this,r)[r]){babelHelpers.classPrivateFieldLooseBase(this,n)[n].setContext(babelHelpers.classPrivateFieldLooseBase(this,l)[l].blogText);babelHelpers.classPrivateFieldLooseBase(this,n)[n].show({bindElement:babelHelpers.classPrivateFieldLooseBase(this,u)[u]()})}}function j(){return babelHelpers.classPrivateFieldLooseBase(this,o)[o].button}function _(){babelHelpers.classPrivateFieldLooseBase(this,n)[n].hide()}function C(e){var s;const t=FCList.getInstance({ENTITY_XML_ID:babelHelpers.classPrivateFieldLooseBase(this,l)[l].blogId});const a=t.form;const i=LHEPostForm.getHandlerByFormId(t.form.formId);if((s=i.oEditor)!=null&&s.IsShown()){i.oEditor.action.Exec("insertHTML",e)}const o=()=>{i.oEditor.action.Exec("insertHTML",e);BX.removeCustomEvent(i.oEditor,"OnAfterIframeInit",o)};i.exec((()=>{BX.addCustomEvent(i.oEditor,"OnAfterIframeInit",o)}));a.show(t)}function K(e){const t=s.Uri.addParam(babelHelpers.classPrivateFieldLooseBase(this,l)[l].pathToPostCreate,{getTextFromHash:"Y"});location.href=`${t}#${encodeURIComponent(e)}`}e.BlogCopilotReadonly=m})(this.BX.Socialnetwork.Blog.Post=this.BX.Socialnetwork.Blog.Post||{},BX,BX.Event);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/components/bitrix/socialnetwork.blog.post.comment/templates/.default/script.min.js?17624317292929";s:6:"source";s:86:"/bitrix/components/bitrix/socialnetwork.blog.post.comment/templates/.default/script.js";s:3:"min";s:90:"/bitrix/components/bitrix/socialnetwork.blog.post.comment/templates/.default/script.min.js";s:3:"map";s:90:"/bitrix/components/bitrix/socialnetwork.blog.post.comment/templates/.default/script.map.js";}"*/
(function(){if(!!window.__blogEditComment)return;window.checkForQuote=function(t,e,o,i,n){if(window.mplCheckForQuote)mplCheckForQuote(t,e,o,i,n)};window.__blogLinkEntity=function(t,e){if(!!window["UC"]&&!!window["UC"][e]){var o=window["UC"][e].eventNode;if(BX(o)&&!o.hasOwnProperty("__blogLinkEntity")){o["__blogLinkEntity"]=true;BX.addCustomEvent(o,"OnUCFormBeforeShow",(function(e){var o=e&&e.id&&e.id[0]?e.id[0]:null;if(o&&t[o]){BX.show(BX("blg-comment-"+t[i][1]))}}))}for(var i in t){if(t.hasOwnProperty(i)){var n=document.getElementById("blog-post-addc-add-"+t[i][1]);if(n){n.addEventListener("click",window["UC"][i].reply.bind(window["UC"][i],n,"comment_button"))}}}}};window.__blogEditComment=function(t,e){var o={messageBBCode:top["text"+t],messageFields:{arImages:top["arComFiles"+t],arDocs:top["arComDocs"+t],arFiles:top["arComFilesUf"+t],arDFiles:top["arComDFiles"+t],UrlPreview:top["UrlPreview"+t]}};BX.onCustomEvent(window,"OnUCAfterRecordEdit",["BLOG_"+e,t,o,"EDIT"])};window.__blogOnUCFormAfterShow=function(t,e,o){o=BX.type.isNotEmptyObject(o)&&BX.type.isNotEmptyObject(o.UF)?o.UF:{};BX.onCustomEvent(window,"OnBeforeSocialnetworkCommentShowedUp",["socialnetwork_blog"]);var i={ENTITY_XML_ID:t.currentEntity.ENTITY_XML_ID,ENTITY_TYPE:t.currentEntity.ENTITY_XML_ID.split("_")[0],ENTITY_ID:t.currentEntity.ENTITY_XML_ID.split("_")[1],parentId:t.id[1],comment_post_id:t.currentEntity.ENTITY_XML_ID.split("_")[1],edit_id:t.id[1],act:t.id[1]>0?"edit":"add"};for(var n in i){if(!t.form[n]){t.form.appendChild(BX.create("INPUT",{attrs:{name:n,type:"hidden"}}))}t.form[n].value=i[n]}var r=BX("captcha");if(!!r){BX.ajax.getCaptcha((function(t){BX("captcha_word").value="";BX("captcha_code").value=t["captcha_sid"];BX("captcha").src="/bitrix/tools/captcha.php?captcha_code="+t["captcha_sid"];BX("captcha").style.display=""}))}LHEPostForm.reinitData(SBPC.editorId,e,o)};window.__blogOnUCFormSubmit=function(t,e){e["decode"]="Y"};window.__blogOnUCAfterRecordAdd=function(t,e){if(e.errorMessage&&e.errorMessage.length>0){return}if(BX("blg-post-inform-"+t.substr(5))){var o=BX.findChild(BX("blg-post-inform-"+t.substr(5)),{tag:"span",className:"feed-inform-follow"},true);if(o){var i=o.getAttribute("data-follow")=="Y"?"Y":"N";if(i=="N"){BX.findChild(o,{tagName:"a"}).innerHTML=BX.message("sonetBPFollowY");o.setAttribute("data-follow","Y")}}}};BX.SocialnetworkBlogPostComment={};BX.SocialnetworkBlogPostComment.registerViewAreaList=function(t){if(typeof t=="undefined"||typeof t.containerId=="undefined"||typeof t.className=="undefined"){return}if(BX(t.containerId)){var e=BX.findChildren(BX(t.containerId),{tag:"div",className:t.className},true),o=null;for(var i=0,n=e.length;i<n;i++){if(e[i].id.length>0){o=null;if(BX.type.isNotEmptyString(t.fullContentClassName)){o=BX.findChild(e[i],{className:t.fullContentClassName})}BX.UserContentView.registerViewArea(e[i].id,o?o:null)}}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/components/bitrix/main.post.list/templates/.default/script.min.js?176242819960559";s:6:"source";s:69:"/bitrix/components/bitrix/main.post.list/templates/.default/script.js";s:3:"min";s:73:"/bitrix/components/bitrix/main.post.list/templates/.default/script.min.js";s:3:"map";s:73:"/bitrix/components/bitrix/main.post.list/templates/.default/script.map.js";}"*/
(function(){window["UC"]=window["UC"]||{};if(window["FCList"]){return}var quoteData=null,repo={listById:new Map,listByXmlId:new Map};window.FCList=function(t,e){this.author=t.author;this.exemplarId=t["EXEMPLAR_ID"];this.ENTITY_XML_ID=t["ENTITY_XML_ID"];this.template=t["template"];this.scope="web";this.node={main:t["mainNode"],navigation:t["navigationNode"],navigationLoader:t["navigationNodeLoader"],history:t["nodeForOldMessages"],newComments:t["nodeForNewMessages"],formHolder:t["nodeFormHolder"],writersBlock:BX.findChild(t["nodeFormHolder"],{attrs:{id:["record",this.getXmlId(),"writers-block"].join("-")}},true),writers:BX.findChild(t["nodeFormHolder"],{attrs:{id:["record",this.getXmlId(),"writers"].join("-")}},true)};this.ajax=t["ajax"]||null;this.eventNode=this.node.main;this.form=BX.type.isNotEmptyString(t["FORM_ID"])?UCForm.bindFormToEntity(t["FORM_ID"],this):null;this.order=t["order"];this.mid=parseInt(t["mid"]);this.operationIds=[];this.canCheckVisibleComments=true;this.status="ready";this.msg=this.node.navigation?this.node.navigation.innerHTML:"";this.params=e||{};this.rights=t["rights"];this.DATE_TIME_FORMAT=this.params["DATE_TIME_FORMAT"]||null;this.unreadComments=new Map;this.comments=new Map;this.blankComments=new Map;this.blankCommentsForAjax=new Map;this.bindEvents=[];this.registerNewComment=this.registerNewComment.bind(this);this.registerBlankComment=this.registerBlankComment.bind(this);this.privateEvents={onShowActions:function(t,e){fcShowActions(this.node.main,e,t)}.bind(this),OnUCCommentIsInDOM:this.registerNewComment,OnUCBlankCommentIsInDOM:this.registerBlankComment,onExpandComment:fcCommentExpand};this.windowEvents={OnUCCommentWasPulled:function(t,e,i){if(this.getXmlId()!==i["ENTITY_XML_ID"]||this.isOwnOperationId(i["OPERATION_ID"])){return}this.setOperationId(i["OPERATION_ID"]);this.add(t,e,null,null,{live:true});if(this.params["NOTIFY_TAG"]&&this.params["NOTIFY_TEXT"]){window["UC"]["Informer"].check(t,e,this.params["NOTIFY_TAG"],this.params["NOTIFY_TEXT"])}}.bind(this),OnUCommentWasDeleted:function(t,e,i){if(this.getXmlId()!==i["ENTITY_XML_ID"]||this.isOwnOperationId(i["OPERATION_ID"])||!this.getCommentNode(e[1])){return}this.setOperationId(i["OPERATION_ID"]);BX.hide(this.getCommentNode(e[1]));this.comments.delete(e[1])}.bind(this),OnUCommentWasHidden:function(t,e,i){if(this.getXmlId()!==i["ENTITY_XML_ID"]||this.isOwnOperationId(i["OPERATION_ID"])||!this.getCommentNode(e[1])){return}this.setOperationId(i["OPERATION_ID"]);if(this.rights["MODERATE"]==="Y"||this.rights["MODERATE"]==="ALL"||Number(i["USER_ID"])===Number(BX.message("USER_ID"))){var n=BX.findChild(this.getCommentNode(e[1]),{tagName:"DIV",className:"feed-com-block"});if(BX(n)){BX.addClass(n,"feed-com-block-hidden");BX.removeClass(n,"feed-com-block-approved")}}else{BX.hide(this.getCommentNode(e[1]))}}.bind(this),OnUCUserIsWriting:function(e,i){if(i.sent===true){return}if(this.form!==null&&this!==e){return}if(this.form===null&&e!==this.ENTITY_XML_ID){return}i.sent=true;BX.ajax({url:this.url.activity,method:"POST",data:{AJAX_POST:"Y",ENTITY_XML_ID:this.ENTITY_XML_ID,COMMENT_EXEMPLAR_ID:this.exemplarId,MODE:"PUSH&PULL",sessid:BX.bitrix_sessid(),sign:t["sign"],PATH_TO_USER:this.params["PATH_TO_USER"],AVATAR_SIZE:this.params["AVATAR_SIZE"],NAME_TEMPLATE:this.params["NAME_TEMPLATE"],SHOW_LOGIN:this.params["SHOW_LOGIN"]}})}.bind(this),OnUCAfterRecordAdd:function(t,e){if(this.ENTITY_XML_ID===e["messageId"][0]){this.add(e["messageId"],e,true,"simple")}}.bind(this),OnUCFormSubmit:BX.delegate((function(t,e,i,n){if(!i||this.form===null&&t!==this.getXmlId()||this.form!==null&&i.currentEntity!==this){return}n["EXEMPLAR_ID"]=this.exemplarId;n["OPERATION_ID"]=this.getOperationId()}),this),OnUCFormResponse:function(t,e,i){},OnUCFormBeforeShow:function(t){var e=0;if(this.form===null&&t.id[0]===this.getXmlId()){e=t.id[1]}else if(this.form!==null&&t.currentEntity===this){e=t.currentEntity.messageId}else{return}if(e<=0){BX.addClass(this.node.formHolder,"feed-com-add-box-outer-form-shown")}if(BX(this.node.writersBlock)){var i=BX("lhe_buttons_"+t.form.id);if(!i||i.style.display==="none"){i=t.form}if(!this.node.writersBlockPointer){this.node.writersBlockPointer=BX.create("DIV",{style:{display:"none"}});this.node.writersBlock.parentNode.insertBefore(this.node.writersBlockPointer,this.node.writersBlock)}i.appendChild(this.node.writersBlock)}}.bind(this),OnUCFormAfterShow:function(t){if(t.id[0]!==this.getXmlId()){return}var e=BX.findParent(this.node.main,{className:"feed-comments-block"});if(e){BX.addClass(e,"feed-comments-block-editor-shown")}}.bind(this),OnUCFormBeforeHide:function(t){if(this.form===null&&(!t.id||t.id[0]!==this.getXmlId())||this.form!==null&&t.currentEntity!==this){return}var e=BX.findParent(this.node.main,{className:"feed-comments-block"});if(e){BX.removeClass(e,"feed-comments-block-editor-shown")}}.bind(this),OnUCFormAfterHide:function(t){if(this.form===null&&(!t.id||t.id[0]!==this.getXmlId())||this.form!==null&&t.currentEntity!==this){return}BX.removeClass(this.node.formHolder,"feed-com-add-box-outer-form-shown");BX.focus(this.node.formHolder.firstChild);if(this.node.writersBlock&&this.node.writersBlockPointer){this.node.writersBlockPointer.parentNode.insertBefore(this.node.writersBlock,this.node.writersBlockPointer)}}.bind(this),OnUCUsersAreWriting:function(t,e,i,n,s){if(this.getXmlId()===t){this.addWriter(e,i,n,s)}}.bind(this),OnUCCommentRecalculate:function(t){if(this.getXmlId()!==t){return}var e;var i=BX.findChild(this.node.main,{attrs:{"bx-mpl-xml-id":this.ENTITY_XML_ID}},false,true);for(e=0;e<i.length;e++){this.recalcMoreButtonComment(i[e].getAttribute("bx-mpl-entity-id"))}}.bind(this),"BX.BXUrlPreview.onImageLoaded":function(t){if(!BX.type.isPlainObject(t)||!BX.type.isDomNode(t.imageNode)){return}var e=BX.findParent(t.imageNode,{className:"feed-com-block-cover"});if(BX.type.isDomNode(e)){this.recalcMoreButtonComment(e.getAttribute("bx-mpl-entity-id"))}}.bind(this)};if(this.params["NOTIFY_TAG"]&&this.params["NOTIFY_TEXT"]&&window["UC"]["Informer"]){window["UC"]["InformerTags"][this.params["NOTIFY_TAG"]]=window["UC"]["InformerTags"][this.params["NOTIFY_TAG"]]||[]}else{this.params["NOTIFY_TAG"]=null;this.params["NOTIFY_TEXT"]=null}this.initialize();this.checkHash();this.registerComments();BX.onCustomEvent(this.eventNode,"OnUCInitialized",[this.exemplarId]);BX.addCustomEvent(this.eventNode,"OnUCInitialized",this.destroy.bind(this));this.windowEvents["OnUCInitialized"]=this.checkAndDestroy.bind(this);BX.Event.EventEmitter.incrementMaxListeners("OnUCInitialized");BX.addCustomEvent(window,"OnUCInitialized",this.windowEvents["OnUCInitialized"]);BX.ready(function(){setTimeout(function(){BX.onCustomEvent(window,"OnUCHasBeenInitialized",[this.ENTITY_XML_ID,this])}.bind(this),100)}.bind(this));repo.listById.set(this.exemplarId,this);repo.listByXmlId.set(this.getXmlId(),this);return this};window.FCList.prototype={getId:function(){return this.exemplarId},getXmlId:function(){return this.ENTITY_XML_ID},getOperationId:function(){var t=BX.util.getRandomString(20);this.operationIds.push(t);return t},setOperationId:function(t){if(BX.type.isNotEmptyString(t)){this.operationIds.push(t)}},isOwnOperationId:function(t){for(var e=0;e<this.operationIds.length;e++){if(this.operationIds[e]===t){return true}}return false},initialize:function(){this.checkVisibleComments=this.checkVisibleComments.bind(this);this.recalcMoreButtonComment=this.recalcMoreButtonComment.bind(this);this.sendCommentAsBlank=this.sendCommentAsBlank.bind(this);BX.Event.EventEmitter.incrementMaxListeners(scrSpy,"onRead");BX.addCustomEvent(scrSpy,"onRead",this.checkVisibleComments);scrSpy.watchNode(this.node.main);this.initNavigationEvents();this.initPostFormActivity();for(var t=0;t<this.bindEvents.length;t++){BX.bind(this.bindEvents[t][0],this.bindEvents[t][1],this.bindEvents[t][2])}for(t in this.privateEvents){if(this.privateEvents.hasOwnProperty(t)){BX.Event.EventEmitter.incrementMaxListeners(this.eventNode,t);BX.addCustomEvent(this.eventNode,t,this.privateEvents[t])}}if(!BX.type.isBoolean(this.params["USE_LIVE"])||this.params["USE_LIVE"]){for(t in this.windowEvents){if(this.windowEvents.hasOwnProperty(t)){BX.Event.EventEmitter.incrementMaxListeners(t);BX.addCustomEvent(window,t,this.windowEvents[t])}}}if(BX.DD&&!this.node.main.hasAttribute("dropzone")){new BX.DD.dropFiles(this.node.main)}},initNavigationEvents:function(){if(!BX(this.node.navigation)){return}this.bindEvents.unshift([this.node.navigation,"click",function(t){BX.eventCancelBubble(t);t.preventDefault();this.getPagenavigation();return false}.bind(this)])},initPostFormActivity:function(){this.privateEvents["onAct"]=this.act.bind(this);if(this.params["SHOW_POST_FORM"]!=="Y"){return}this.privateEvents["onReply"]=this.reply.bind(this);this.privateEvents["onQuote"]=this.quote.bind(this);this.hideWriter=this.hideWriter.bind(this);this.quoteShow=this.quoteShow.bind(this);this.bindEvents.unshift([this.eventNode,"mouseup",this.privateEvents["onQuote"]]);var t=0;var e=function(e){if(e&&e.currentTarget.contains(e.relatedTarget)){return}if(t>0){clearTimeout(t);t=0}}.bind(this);var i=function(){e();this.reply.apply(this,arguments)}.bind(this);var n=function(){if(t<=0){t=setTimeout(i,200)}}.bind(this);this.bindEvents.unshift([this.node.main,"dragover",n]);this.bindEvents.unshift([this.node.main,"dragenter",n]);this.bindEvents.unshift([this.node.main,"dragleave",e]);this.bindEvents.unshift([this.node.main,"dragexit",e]);this.bindEvents.unshift([this.node.main,"drop",e])},url:{activity:"/bitrix/components/bitrix/main.post.list/activity.php"},destroy:function(){BX.removeCustomEvent(scrSpy,"onRead",this.checkVisibleComments);var t,e;while((e=this.bindEvents.pop())&&e){BX.unbindAll(e[0]);delete e[0];delete e[2]}for(t in this.privateEvents){if(this.privateEvents.hasOwnProperty(t)){BX.removeCustomEvent(this.eventNode,t,this.privateEvents[t]);BX.Event.EventEmitter.decrementMaxListeners(this.eventNode,t);this.privateEvents[t]=null}}this.privateEvents=null;for(t in this.windowEvents){if(this.windowEvents.hasOwnProperty(t)){BX.removeCustomEvent(window,t,this.windowEvents[t]);this.windowEvents[t]=null;BX.Event.EventEmitter.decrementMaxListeners(t)}}this.windowEvents=null;for(t in this.node){if(this.node.hasOwnProperty(t)){this.node[t]=null}}this.unreadComments.clear();this.comments.clear();BX.onCustomEvent(window,"OnUCHasBeenDestroyed",[this.ENTITY_XML_ID,this]);repo.listById.delete(this.exemplarId);if(repo.listByXmlId.get(this.ENTITY_XML_ID)===this){repo.listByXmlId.delete(this.ENTITY_XML_ID)}},checkAndDestroy:function(t){if(this.exemplarId===t||!document.body.contains(this.eventNode)){this.destroy()}},quotePopup:null,quoteCheck:function(){var t="";var e;var i=null;if(window.getSelection){e=window.getSelection();t=e.toString()}else if(document.selection){e=document.selection;t=e.createRange().text}if(t!==""){var n=BX.findParent(e.focusNode,{tagName:"DIV",className:"feed-com-block-cover"},this.node.main);var s=BX.findParent(e.anchorNode,{tagName:"DIV",className:"feed-com-block-cover"},this.node.main);if(n!==s||BX(n)&&!n.hasAttribute("id")){t=""}else if(BX(n)){var o=BX(n.getAttribute("id").replace(/\-cover$/,"-actions-reply"));if(o){i={id:parseInt(o.getAttribute("bx-mpl-author-id")),name:o.getAttribute("bx-mpl-author-name"),gender:o.getAttribute("bx-mpl-author-gender")}}}}if(t===""){if(this.quotePopup){this.quotePopup.hide()}return false}return{text:t,author:i}},quoteShow:function(t,e){e=e||this.quoteCheck()||{};if(!BX.type.isNotEmptyString(e["text"])){return}quoteData=e;if(this.quotePopup==null){this.__quoteShowClick=function(){if(this.form){BX.onCustomEvent(this.form,"onQuote",[this,e["author"],e["text"]])}else{BX.onCustomEvent(window,"OnUCQuote",[this.ENTITY_XML_ID,e["author"],e["text"],true])}}.bind(this);this.__quoteShowHide=function(){quoteData=null;BX.removeCustomEvent(this.quotePopup,"onQuote",this.__quoteShowClick);BX.removeCustomEvent(this.quotePopup,"onHide",this.__quoteShowHide);this.quotePopup=null}.bind(this);this.quotePopup=new MPLQuote;BX.addCustomEvent(this.quotePopup,"onQuote",this.__quoteShowClick);BX.addCustomEvent(this.quotePopup,"onHide",this.__quoteShowHide)}this.quotePopup.show(t,e)},displayPagenavigation:function(t,e){var i;var n=0;var s;var o=this.node.history;t=t=="hide"?"hide":"show";if(t=="hide"){i=parseInt(this.node.history.offsetHeight);s=i/2e3;s=s<.3?.3:s>.5?.5:s;o.style.overflow="hidden";new BX["easing"]({duration:s*1e3,start:{height:i,opacity:100},finish:{height:n,opacity:0},transition:BX.easing.makeEaseOut(BX.easing.transitions.quart),step:function(t){o.style.maxHeight=t.height+"px";o.style.opacity=t.opacity/100},complete:BX.proxy((function(){o.style.cssText="";o.style.display="none";BX.onCustomEvent(this,"OnUCListWasHidden",[this,[],o])}),this)}).animate()}else{i=parseInt(e||20);o.style.display="block";o.style.overflow="hidden";o.style.maxHeight=i;n=parseInt(this.node.history.offsetHeight);s=(n-i)/(2e3-i);s=s<.3?.3:s>.8?.8:s;new BX["easing"]({duration:s*1e3,start:{height:i,opacity:i>0?100:0},finish:{height:n,opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quart),step:function(t){o.style.maxHeight=t.height+"px";o.style.opacity=t.opacity/100},complete:BX.proxy((function(){o.style.cssText="";o.style.maxHeight="none";BX.onCustomEvent(this,"OnUCListWasShown",[this,[],o])}),this)}).animate()}},getPagenavigation:function(){if(this.status=="done"){if(this.node.navigation.getAttribute("bx-visibility-status")=="visible"){this.displayPagenavigation("hide");BX.adjust(this.node.navigation,{attrs:{"bx-visibility-status":"none"},html:this.msg})}else{this.displayPagenavigation("show");BX.adjust(this.node.navigation,{attrs:{"bx-visibility-status":"visible"},html:BX.message("BLOG_C_HIDE")})}}else if(this.status=="ready"){this.sendPagenavigation()}return false},sendPagenavigation:function(){this.status="busy";BX.addClass(this.node.navigation,"feed-com-all-hover");var t={AJAX_POST:"Y",ENTITY_XML_ID:this.ENTITY_XML_ID,EXEMPLAR_ID:this.exemplarId,MODE:"LIST",FILTER:this.order=="ASC"?{">ID":this.mid}:{"<ID":this.mid},sessid:BX.bitrix_sessid()},e=BX.util.htmlspecialcharsback(this.node.navigation.getAttribute("href"));e=e.indexOf("#")!==-1?e.substr(0,e.indexOf("#")):e;var i={url:e,data:t};BX.onCustomEvent(this,"OnUCListHasToBeEnlarged",[this,i]);e=i.url;t=i.data;t.scope=this.scope;var n=this.buildPagenavigation.bind(this);var s=this.completePagenavigation.bind(this);if(this.ajax["navigateComment"]===true){e=e.indexOf("?")>=0?e.substr(e.indexOf("?")+1):"";e.split("&").forEach((function(e){var i=e.split("=");t[i[0]]=i[1]}));BX.ajax.runComponentAction(this.ajax.componentName,"navigateComment",{mode:"class",data:t,signedParameters:this.ajax.params}).then(n,s)}else{BX.adjust(this.node.navigationLoader,{style:{display:"flex"}});BX.ajax({url:e+(e.indexOf("?")!==-1?"&":"?")+BX.ajax.prepareData(t),method:"GET",dataType:"json",data:"",onsuccess:n,onfailure:s})}},buildPagenavigation:function(t){if(t["status"]!=="success"){return this.completePagenavigation()}this.status="ready";this.wait("hide");BX.adjust(this.node.navigationLoader,{style:{display:"none"}});BX.removeClass(this.node.navigation,"feed-com-all-hover");var e=BX.processHTML(t["messageList"],false);var i=this.node.history.offsetHeight;var n=BX.create("DIV",{html:e.HTML});if(this.order==="ASC"||!this.node.history.firstChild){this.node.history.appendChild(n)}else{this.node.history.insertBefore(n,this.node.history.firstChild)}BX.onCustomEvent(window,"OnUCFeedChanged",[[this.ENTITY_XML_ID,this.mid]]);this.displayPagenavigation("show",i);if(BX.type.isNotEmptyString(t["navigation"])){var s=BX.create("DIV",{html:t["navigation"]}).firstChild;BX.adjust(this.node.navigation,{attrs:{href:s.getAttribute("href"),"bx-mpl-comments-count":s.getAttribute("bx-mpl-comments-count")},html:s.innerHTML})}else{BX.adjust(this.node.navigation,{attrs:{href:"#","bx-visibility-status":"visible","bx-mpl-comments-count":0},html:BX.message("BLOG_C_HIDE"),events:{click:function(t){BX.eventCancelBubble(t);t.preventDefault();return false}}});this.status="done"}var o=0;var a=function(){o++;if(o>100){return}if(n.childNodes.length<=0){setTimeout(a,500);return}BX.ajax.processScripts(e.SCRIPT);BX.onCustomEvent(this,"OnUCListWasBuilt",[this,t,n])}.bind(this);setTimeout(a,500)},completePagenavigation:function(){this.status="done";BX.removeClass(this.node.navigation,"feed-com-all-hover");this.wait("hide");BX.adjust(this.node.navigationLoader,{style:{display:"none"}})},getCommentsCount:function(){var t=0;if(BX(this.node.navigation)){t=Number(this.node.navigation.getAttribute("bx-mpl-comments-count"))}return this.comments.size+t},wait:function(t){t=t==="show"?"show":"hide";return t},quote:function(t,e){if(t.hasOwnProperty("UCDone")){return}t["UCDone"]=true;setTimeout(this.quoteShow,50,t,e)},reply:function(t,e="add_comment_field"){var i={id:undefined,name:undefined};if(BX.type.isElementNode(t)){i.id=t.getAttribute("bx-mpl-author-id");i.name=t.getAttribute("bx-mpl-author-name")}else if(BX.type.isPlainObject(t)){i.id=t.id;i.name=t.name}if(this.form){if(this.form.handler&&this.form.handler.htmlEditor&&this.form.handler.htmlEditor.IsVisible()&&!t){return}BX.onCustomEvent(this.form,"onReply",[this,i,e])}else{var n={caught:false};BX.onCustomEvent(window,"OnUCReply",[this.ENTITY_XML_ID,i.id,i.name,true,n])}},getPlaceholder:function(t){if(!this.node["placeholderFor"+t]||!document.body.contains(this.node["placeholderFor"+t])){this.node["placeholderFor"+t]=BX.findChild(this.node.main,{attrs:{id:["record",this.getXmlId(),t,"placeholder"].join("-")}},true)}return this.node["placeholderFor"+t]},addWriter:function(t,e,i,n){if(!this.node.writersBlock||!this.node.writers){return}t=t>0?t:0;if(t<=0){return}var s=["writer",this.exemplarId,t].join("-");var o=BX(s);var a=setTimeout(this.hideWriter,n>0?n:40500,t);if(o){clearTimeout(o.getAttribute("bx-check-timeout"))}else{o=BX.create("DIV",{attrs:{id:s,className:"feed-com-avatar ui-icon ui-icon-common-user ",title:e},children:[i&&i.length>0?BX.create("I",{style:{background:"url('"+i+"')",backgroundSize:"cover"}}):null]});this.node.writers.appendChild(o)}o.setAttribute("bx-check-timeout",a+"");BX.show(this.node.writersBlock);if(this.objAnswering&&this.objAnswering.name!=="show"){this.objAnswering.stop()}if(!this.objAnswering||this.objAnswering.name!=="show"){this.node.writersBlock.style.display="inline-block";this.objAnswering=new BX["easing"]({duration:500,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quart),step:function(t){this.node.writersBlock.style.opacity=t.opacity/100}.bind(this)});this.objAnswering.name="show";this.objAnswering.animate()}},hideWriter:function(t){if(!this.node.writers||!this.node.writersBlock){return}var e=["writer",this.exemplarId,t].join("-");var i=BX(e);if(this.node.writers.childNodes.length>1){new BX["easing"]({duration:500,start:{opacity:100},finish:{opacity:0},transition:BX["easing"].makeEaseOut(BX["easing"].transitions.quart),step:function(t){if(i)i.style.opacity=t.opacity/100},complete:function(){if(i&&i.parentNode){i.parentNode.removeChild(i)}}.bind(this)}).animate()}else{if(this.objAnswering&&this.objAnswering.name!=="hide"){this.objAnswering.stop()}if(!this.objAnswering||this.objAnswering.name!=="hide"){this.objAnswering=new BX["easing"]({duration:500,start:{opacity:100},finish:{opacity:0},transition:BX["easing"].makeEaseOut(BX.easing.transitions.quart),step:function(t){this.node.writersBlock.style.opacity=t.opacity/100}.bind(this),complete:function(){this.node.writersBlock.style.display="none";if(i&&i.parentNode){i.parentNode.removeChild(i)}}.bind(this)});this.objAnswering.name="hide";this.objAnswering.animate()}}},getCommentNode:function(t){if(!this.node[t]||!document.body.contains(this.node[t])){this.node[t]=BX.findChild(this.node.main,{attrs:{id:["record",this.getXmlId(),t,"cover"].join("-")}},true)}return this.node[t]},add:function(t,e,i,n,s){if(!t||!t[1]||!BX.type.isPlainObject(e)){return false}var o=e["AUTHOR"]||(e["messageFields"]?e["messageFields"]["AUTHOR"]:null);if(o){this.hideWriter(o["ID"])}var a=this.getCommentNode(t[1]);if(!a&&t[1]<this.mid){return false}var r=t.join("-");var d=e.message||window.fcParseTemplate({messageFields:e.messageFields},{EXEMPLAR_ID:this.exemplarId,RIGHTS:this.rights,DATE_TIME_FORMAT:this.DATE_TIME_FORMAT,VIEW_URL:this.params.VIEW_URL,EDIT_URL:this.params.EDIT_URL,MODERATE_URL:this.params.MODERATE_URL,DELETE_URL:this.params.DELETE_URL,AUTHOR_URL:this.params.AUTHOR_URL,AUTHOR_URL_PARAMS:this.params.AUTHOR_URL_PARAMS,NAME_TEMPLATE:this.params.NAME_TEMPLATE,SHOW_LOGIN:this.params.SHOW_LOGIN,CLASSNAME:BX.type.isPlainObject(s)&&s.live?"feed-com-block-live":""},this.getTemplate());let l=document.getElementsByClassName("diskuf-files-entity").length;if(l===0){BX.load(["/bitrix/js/disk/css/legacy_uf_common.css"])}var h=BX.processHTML(d,false);var m;var c=this.node.newComments;var u=["MODERATE","EDIT","DELETE"];var p=false;var E=0;for(var f in u){if(u.hasOwnProperty(f)&&this.rights[u[f]]==="OWNLAST"){p=true;break}}if(p){m=c.lastChild&&BX.hasClass(c.lastChild,"feed-com-block-cover")?[c.lastChild]:[];var T;var B;if(this.addCheckPreviousNodes!==true){m=BX.findChildren(this.node.main,{tagName:"DIV",className:"feed-com-block-cover"},false)||[];m.concat(BX.findChildren(c,{tagName:"DIV",className:"feed-com-block-cover"},false)||[]);this.addCheckPreviousNodes=true}while((T=m.pop())&&T){B=BX.findChild(T,{attrs:{id:T.id.replace("-cover","-actions")}},true);if(B){if(this.rights["EDIT"]==="OWNLAST"){B.setAttribute("bx-mpl-edit-show","N")}if(this.rights["MODERATE"]==="OWNLAST"){B.setAttribute("bx-mpl-moderate-show","N")}if(this.rights["DELETE"]==="OWNLAST"){B.setAttribute("bx-mpl-delete-show","N")}}}}var X=false;if(!a){a=BX.create("DIV",{attrs:{id:"record-"+r+"-cover",className:"feed-com-block-cover","bx-mpl-xml-id":this.getXmlId(),"bx-mpl-entity-id":t[1],"bx-mpl-read-status":Number(o["ID"])!==Number(BX.message("USER_ID"))?"new":"old","bx-mpl-block":"main"},style:{opacity:0,height:0,overflow:"hidden",marginBottom:0},html:h.HTML});c.appendChild(a);X=true}else{var I=BX.create("DIV",{attrs:{id:"record-"+r+"-cover",className:"feed-com-block-cover"},style:{display:"none"},html:h.HTML});var g=a;var A=BX.findChild(g,{tag:"div",className:"feed-com-text-inner"},true);var v=A&&A.classList.contains("feed-com-text-inner-expanded");if(v){A=BX.findChild(I,{tag:"div",className:"feed-com-text-inner"},true);if(A){A.classList.add("feed-com-text-inner-expanded")}}a.parentNode.insertBefore(I,a);a.removeAttribute("id");E=a.scrollHeight;BX.hide(a);BX.show(I);a=I;this.node[t[1]]=a;setTimeout((function(){BX.remove(g)}),1e3)}const _=e.messageFields;const b=_?.AUTHOR;const w=a.querySelector(".post-comment-author");if(w&&this.author.AUTHOR_TYPE){BX.Dom.addClass(w,`feed-com-name-${this.author.AUTHOR_TYPE}`)}BX?.MPL?.UIAvatar?.({node:a,user:{name:b.FULL_NAME,image:b.AVATAR,type:b.TYPE}});if(n!=="simple"&&BX.Type.isUndefined(window.BXMobileApp)&&!(window.top===window&&BX.getClass("BX.SidePanel.Instance")&&BX.SidePanel.Instance.isOpen())&&!(BX.type.isNotEmptyObject(BXRL)&&BX.type.isNotEmptyObject(BXRL.render)&&BX.type.isDomNode(BXRL.render.reactionsPopup)&&!BXRL.render.reactionsPopup.classList.contains("feed-post-emoji-popup-invisible"))){var C=BX.pos(a);var O=BX.GetWindowScrollPos();var R=BX.GetWindowInnerSize();new BX["easing"]({duration:1e3,start:{opacity:X?0:100,height:E},finish:{opacity:100,height:a.scrollHeight+10},transition:BX.easing.makeEaseOut(BX.easing.transitions.quart),step:function(t){a.style.height=t.height+"px";a.style.opacity=t.opacity/100;if(O.scrollTop>0&&C.top<O.scrollTop+R.innerHeight){window.scrollTo(0,O.scrollTop+t.height)}},complete:function(){a.style.cssText="";BX.onCustomEvent(this,"OnUCRecordWasShown",[this.ENTITY_XML_ID,r,a])}.bind(this)}).animate()}else{new BX["easing"]({duration:500,start:{opacity:X?0:100,height:E},finish:{opacity:100,height:a.scrollHeight+10},transition:BX.easing.makeEaseOut(BX.easing.transitions.cubic),step:function(t){a.style.height=t.height+"px";a.style.opacity=t.opacity/100},complete:BX.proxy((function(){a.style.cssText="";BX.onCustomEvent(this,"OnUCRecordWasShown",[this.ENTITY_XML_ID,r,a])}),this)}).animate()}var y=0,N=function(){if(100<++y){return}if(this.getCommentNode(t[1]).childNodes.length>0){BX.ajax.processScripts(h.SCRIPT);if(this.params["BIND_VIEWER"]==="Y"&&BX["viewElementBind"]){BX.viewElementBind(this.getCommentNode(t[1]),{},(function(t){return BX.type.isElementNode(t)&&(t.getAttribute("data-bx-viewer")||t.getAttribute("data-bx-image"))}))}}else{setTimeout(N,500)}BX.onCustomEvent(window,"OnUCRecordHasDrawn",[this.ENTITY_XML_ID,t,_||e]);BX.onCustomEvent(window,"OnUCCommentWasAdded",[this.ENTITY_XML_ID,t,_||e]);BX.onCustomEvent(window,"OnUCFeedChanged",[t])}.bind(this);setTimeout(N,500);return true},act:function(url,id,act){if(this.ajax["processComment"]!==true&&BX.type.isNotEmptyString(url)&&url.substr(0,1)!=="/"){try{eval(url);return false}catch(t){}if(BX.type.isFunction(url)){url(this,id,act);return false}}this.showWait(id);id=parseInt(id);var data={sessid:BX.bitrix_sessid(),MODE:"RECORD",NOREDIRECT:"Y",AJAX_POST:"Y",FILTER:{ID:id},ACTION:act==="EDIT"?"GET":act,ID:id,ENTITY_XML_ID:this.ENTITY_XML_ID,OPERATION_ID:this.getOperationId(),EXEMPLAR_ID:this.exemplarId,scope:this.scope};url=url.indexOf("#")!==-1?url.substr(0,url.indexOf("#")):url;var onsuccess=function(t){this.closeWait(id);if(t["status"]==="error"){this.showError(id,t["message"]||"Unknown error.");return}var e=this.getCommentNode(id);if(e){if(act==="DELETE"){BX.hide(e);this.comments.delete(id.toString());BX.onCustomEvent(window,"OnUCommentWasDeleted",[this.ENTITY_XML_ID,[this.ENTITY_XML_ID,id],t])}else if(act!=="EDIT"&&!!t["message"]){var i=BX.processHTML(t["message"],false);e.innerHTML=i.HTML;var n=0,s=function(){n++;if(n<100){if(e.childNodes.length>0)BX.ajax.processScripts(i.SCRIPT);else BX.defer(s)()}};BX.defer(s)();t["okMessage"]=""}}if(this.form!==null){BX.onCustomEvent(this.form,"onEdit",[this,id,t,act])}else{BX.onCustomEvent(window,"OnUCAfterRecordEdit",[this.ENTITY_XML_ID,id,t,act])}BX.onCustomEvent(window,"OnUCFeedChanged",[id])}.bind(this);var onfailure=function(t){this.closeWait(id);var e=t;if(BX.type.isNotEmptyObject(t)){if(BX.type.isArray(t.errors)&&BX.type.isNotEmptyString(t.errors[0].message)){e=t.errors[0].message}else if(BX.type.isNotEmptyObject(t.data)&&BX.type.isNotEmptyString(t.data.message)){e=t.data.message}}this.showError(id,e)}.bind(this);if(this.ajax["processComment"]===true){BX.ajax.runComponentAction(this.ajax.componentName,"processComment",{mode:"class",data:data,signedParameters:this.ajax.params}).then(onsuccess,onfailure)}else{BX.ajax({method:"GET",url:url+(url.indexOf("?")!==-1?"&":"?")+BX.ajax.prepareData(data),data:"",dataType:"json",onsuccess:onsuccess,onfailure:onfailure})}},showError:function(t,e){if(this.errorWindow){this.errorWindow.close()}this.errorWindow=new BX.PopupWindow("bx-comments-error",null,{autoHide:false,zIndex:200,overlay:{opacity:50,backgroundColor:"#000000"},buttons:[new BX.PopupWindowButton({text:BX.message("MPL_CLOSE"),events:{click:BX.delegate((function(){if(this.errorWindow)this.errorWindow.close()}),this)}})],closeByEsc:true,titleBar:{content:BX.create("span",{props:{className:"popup-window-titlebar-text feed-error-title"},html:'<div class="feed-error-icon"></div>'+BX.message("MPL_ERROR_OCCURRED")})},closeIcon:true,contentColor:"white",content:'<div class="feed-error-block">'+e+"</div>"});this.errorWindow.show()},checkHash:function(){if(repo["hashHasBeenFound"]===true){return}var t=/%23com(\d+)/gi.exec(location.href);var e=parseInt(location.hash&&location.hash.indexOf("#com")>=0?location.hash.replace("#com",""):t?t[1]:0);if(e>0){var i=BX.findChild(this.node.main,{attrs:{id:"record-"+[this.ENTITY_XML_ID,e].join("-")+"-cover"}},true,false);if(i){var n=BX.findParent(i,{attrs:{"data-bx-role":"collapsed-block"}},this.node.main);if(n){var s=n.querySelector("input[type=checkbox]");if(!s.checked){s.click(true)}}repo["hashHasBeenFound"]=true;var o=BX.pos(i);window.scrollTo(0,o["top"]);var a=BX.findChild(i,{className:"feed-com-main-content"},true,false);BX.removeClass(a,"feed-com-block-pointer-to-new feed-com-block-new");BX.addClass(a,"feed-com-block-pointer")}}},registerComments:function(){var t;var e=BX.findChild(this.node.main,{tag:"DIV",attrs:{"bx-mpl-block":"main","bx-mpl-xml-id":this.ENTITY_XML_ID}},true,true);for(t=0;t<e.length;t++){if(e[t].getAttribute("bx-mpl-blank-status")==="blank"){this.blankComments.set(e[t].getAttribute("bx-mpl-entity-id"),e[t]);scrSpy.set([this.getXmlId(),e[t].getAttribute("bx-mpl-entity-id")].join("-"))}else{if(e[t].getAttribute("bx-mpl-read-status")==="new"){this.unreadComments.set(e[t].getAttribute("bx-mpl-entity-id"),e[t]);scrSpy.set([this.getXmlId(),e[t].getAttribute("bx-mpl-entity-id")].join("-"))}this.recalcMoreButtonComment(e[t].getAttribute("bx-mpl-entity-id"));this.comments.set(e[t].getAttribute("bx-mpl-entity-id"),[])}}},registerBlankComment:function(t,e){if(e!==true){setTimeout(this.registerBlankComment,1e3,t,true);return}var i=this.getCommentNode(t);if(!i||this.comments.has(t)||this.blankComments.has(t)){return}this.blankComments.set(t,i);scrSpy.set([this.getXmlId(),t].join("-"))},registerNewComment:function(t,e){if(e!==true){setTimeout(this.registerNewComment,1e3,t,true);return}var i=this.getCommentNode(t);if(!i||this.comments.has(t)){return}this.comments.set(t,[]);if(i.getAttribute("bx-mpl-read-status")==="new"){scrSpy.set([this.getXmlId(),t].join("-"),i);this.unreadComments.set(t,i)}this.recalcMoreButtonComment(t)},recalcMoreButtonComment:function(t){var e=this.getCommentNode(t);if(!BX(e)){return}var i=e.bodyBlock||BX.findChild(e,{attrs:{"bx-mpl-block":"body"}},true);if(!i){return}e.bodyBlock=i;var n=e.textBlock||BX.findChild(i,{attrs:{"bx-mpl-block":"text"}},true);if(!n){return}e.textBlock=n;var s=e.moreButtonBlock||BX.findChild(e,{attrs:{"bx-mpl-block":"more-button"}},true);e.moreButtonBlock=s;var o=BX.pos(i);var a=BX.pos(n);if(o.height>=a.height){s.style.display="none"}else if(s.style.display!=="block"){s.style.display="block"}var r=null;var d=BX.findChildren(i,{attr:{"data-bx-onload":"Y"}},true);var l=function(){this.recalcMoreButtonComment(t)}.bind(this);if(BX.type.isArray(d)){for(r=0;r<d.length;r++){d[r].addEventListener("load",l);d[r].setAttribute("data-bx-onload","N")}}var h=i.querySelectorAll("video");for(r=0;r<h.length;r++){h[r].addEventListener("loadedmetadata",l)}if(!e.hasOwnProperty("__boundOnForumSpoilerToggle")){e.__boundOnForumSpoilerToggle=true;BX.addCustomEvent(e,"onForumSpoilerToggle",l)}},checkVisibleComments:function(t){if(!this.canCheckVisibleComments){return}var e=this.getVisibleCommentIds(this.unreadComments,t);var i;while(i=e.shift()){this.markCommentAsRead(i)}window.fclistdebug=true;e=this.getVisibleCommentIds(this.blankComments,t);while(i=e.shift()){this.markCommentAsBlank(i)}},getVisibleCommentIds:function(t,e){var i=[];if(t.size<=0){return i}var n=BX.pos(this.node.main);if(n.top>e.bottom||n.bottom<e.top||n.top===0&&n.bottom===0){return i}var s=t.keys();var o=s.next();var a;while(o.done!==true){a=t.get(o.value);if(a.offsetWidth||a.offsetHeight||a.getClientRects().length){n=a.pos||BX.pos(a);a.pos=n;if(e.top<=n.top&&n.top<=e.bottom&&a.offsetParent!==null){i.push(o.value)}}o=s.next()}return i},markCommentAsRead:function(t){if(!this.unreadComments.has(t)){return}var e=this.unreadComments.get(t);e.setAttribute("bx-mpl-read-status","old");this.unreadComments.delete(t);scrSpy.unset([this.getXmlId(),t].join("-"));if(this.node.newComments.contains(e)){this.sendCommentAsRead(t)}BX.removeClass(e,"comment-new-answer");if(this.__checkNodeCorner!==true){this.__checkNodeCorner=true;var i=BX.findChild(this.node.main,{className:"feed-com-corner"});if(i){BX.addClass(i,"feed-post-block-corner-fade")}}var n=BX.findChild(e,{className:"feed-com-main-content"},true,false);if(n){BX.removeClass(n,"feed-com-block-pointer-to-new feed-com-block-new");BX.addClass(n,"feed-com-block-read")}var s=BX.findChild(e,{className:"feed-com-block"},true);BX.onCustomEvent(window,"OnUCCommentWasRead",[this.getXmlId(),[this.getXmlId(),t],{live:s&&s.classList.contains("feed-com-block-live"),new:!n||!n.classList.contains("feed-com-block-old")}])},sendCommentAsRead:function(t){if(this.ajax["readComment"]!==true){return}if(!this.sendCommentAsReadData){this.sendCommentAsReadData={mid:0,timeoutId:0,func:function(){BX.unbind(window,"beforeunload",this.sendCommentAsReadData.func);BX.removeCustomEvent(window,"onHidePageBefore",this.sendCommentAsReadData.func);this.sendCommentAsReadData.timeoutId=0;BX.ajax.runComponentAction(this.ajax.componentName,"readComment",{mode:"class",data:{ID:this.sendCommentAsReadData.mid},signedParameters:this.ajax.params})}.bind(this)}}if(this.sendCommentAsReadData.mid>t){return}this.sendCommentAsReadData.mid=t;if(this.sendCommentAsReadData.timeoutId<=0){BX.bind(window,"beforeunload",this.sendCommentAsReadData.func);BX.addCustomEvent(window,"onHidePageBefore",this.sendCommentAsReadData.func);this.sendCommentAsReadData.timeoutId=setTimeout(this.sendCommentAsReadData.func,6e3)}},markCommentAsBlank:function(t){if(!this.blankComments.has(t)){return}var e=this.blankComments.get(t);var i=e.parentNode;if(i&&!i.bxwaiter){fcShowWait(i)}this.blankComments.delete(t);scrSpy.unset([this.getXmlId(),t].join("-"));this.blankCommentsForAjax.set(t,e);setTimeout(this.sendCommentAsBlank,1e3)},sendCommentAsBlank:function(){if(this.ajax["getComment"]!==true||this.blankCommentsForAjax.size<=0){return}var t=Array.from(this.blankCommentsForAjax.keys());var e=new Map(this.blankCommentsForAjax);this.blankCommentsForAjax.clear();var i=function(t){e.forEach(function(e,i){fcCloseWait(e.parentNode);var n=t["messageList"][i];if(!n){e.parentNode.removeChild(e)}else{var s=BX.processHTML(n["message"],false);e.innerHTML=s.HTML;var o=function(t){if(e.childNodes.length>0){BX.ajax.processScripts(s.SCRIPT)}else if(t<100){setTimeout(o,500,t+1)}};o(0)}}.bind(this))}.bind(this);BX.ajax.runComponentAction(this.ajax.componentName,"getComment",{mode:"class",data:{sessid:BX.bitrix_sessid(),MODE:"RECORDS",NOREDIRECT:"Y",AJAX_POST:"Y",FILTER:{ID:t},ACTION:"GET",ID:t,ENTITY_XML_ID:this.ENTITY_XML_ID,OPERATION_ID:this.getOperationId(),EXEMPLAR_ID:this.exemplarId,scope:this.scope},signedParameters:this.ajax.params}).then(i,i)},getTemplate:function(){return this.template},showWait:function(t){fcShowWait(BX("record-"+this.ENTITY_XML_ID+"-"+t+"-actions"))},closeWait:function(t){fcCloseWait(BX("record-"+this.ENTITY_XML_ID+"-"+t+"-actions")||null)}};window.FCList.getQuoteData=function(){return quoteData};window.FCList.getInstance=function(t,e){if(!repo.listByXmlId.has(t["ENTITY_XML_ID"])&&e!==undefined){new window.FCList(t,e)}return repo.listByXmlId.get(t["ENTITY_XML_ID"])};var lastWaitElement=null;var fcShowWait=function(t){if(t&&!BX.type.isElementNode(t)){t=null}t=t||this;if(BX.type.isElementNode(t)){BX.defer((function(){t.disabled=true}))();var e=BX.findParent(t,BX.is_relative);t.bxwaiter=(e||document.body).appendChild(BX.create("DIV",{props:{className:"feed-com-loader"},style:{position:"absolute"}}));lastWaitElement=t;return t.bxwaiter}return true};var fcCloseWait=function(t){if(t&&!BX.type.isElementNode(t)){t=null}t=t||lastWaitElement||this;if(BX.type.isElementNode(t)){if(t.bxwaiter&&t.bxwaiter.parentNode){t.bxwaiter.parentNode.removeChild(t.bxwaiter);delete t.bxwaiter}t.disabled=false;if(lastWaitElement==t)lastWaitElement=null}};var fcShowActions=function(t,e,i){var n=[];var s=BX.util.getRandomString(20);if(i.getAttribute("bx-mpl-view-show")=="Y"){n.push({text:BX.message("MPL_MES_HREF"),href:i.getAttribute("bx-mpl-view-url").replace(/\\#(.+)$/gi,"")+"#com"+e,target:"_top"});n.push({html:'<span id="record-popup-'+s+'-link-text">'+BX.message("B_B_MS_LINK")+"</span>"+'<span id="record-popup-'+s+'-link-icon-animate" class="comment-menu-link-icon-wrap">'+'<span class="comment-menu-link-icon" id="record-popup-'+s+'-link-icon-done" style="display: none;">'+"</span>"+"</span>",onclick:function(){var t="record-popup-"+s+"-link",n=i.getAttribute("bx-mpl-view-url").replace(/#(.+)$/gi,"")+"#com"+e,o=BX(t+"-text"),a=BX(t+"-icon-done");n=(n.indexOf("http")<0?location.protocol+"//"+location.host:"")+n;if(BX.clipboard.isCopySupported()){if(o&&o.getAttribute("data-block-click")=="Y"){return}BX.clipboard.copy(n);if(o&&a){a.style.display="inline-block";BX.removeClass(BX(t+"-icon-animate"),"comment-menu-link-icon-animate");BX.adjust(BX(t+"-text"),{attrs:{"data-block-click":"Y"}});setTimeout((function(){BX.addClass(BX(t+"-icon-animate"),"comment-menu-link-icon-animate")}),1);setTimeout((function(){BX.adjust(BX(t+"-text"),{attrs:{"data-block-click":"N"}})}),500)}return}var r=BX.proxy_context;var d=parseInt(!!r.getAttribute("bx-height")?r.getAttribute("bx-height"):r.offsetHeight);if(r.getAttribute("bx-status")!="shown"){r.setAttribute("bx-status","shown");if(!BX(t)&&!!BX(t+"-text")){var l=BX(t+"-text"),h=BX.pos(l),m=BX.pos(l.parentNode),c=BX.findChildren(l.parentNode.parentNode.parentNode,{className:"menu-popup-item-text"},true);h["height"]=m["height"]-1;if(c){var u=0,p;for(var E=0;E<c.length;E++){p=BX.pos(c[E]);u=Math.max(u,p["width"])}m["width"]=u}BX.adjust(r,{attrs:{"bx-height":r.offsetHeight},style:{overflow:"hidden",display:"block"},children:[BX.create("BR"),BX.create("DIV",{attrs:{id:t},children:[BX.create("SPAN",{attrs:{className:"menu-popup-item-left"}}),BX.create("SPAN",{attrs:{className:"menu-popup-item-icon"}}),BX.create("SPAN",{attrs:{className:"menu-popup-item-text"},children:[BX.create("INPUT",{attrs:{id:t+"-input",type:"text",value:n},style:{height:m["height"]+"px",width:m["width"]+"px"},events:{click:function(t){this.select();t.preventDefault()}}})]})]}),BX.create("SPAN",{className:"menu-popup-item-right"})]})}new BX["fx"]({time:.2,step:.05,type:"linear",start:d,finish:d*2,callback:BX.delegate((function(t){this.style.height=t+"px"}),r)}).start();BX.fx.show(BX(t),.2);BX(t+"-input").select()}else{r.setAttribute("bx-status","hidden");new BX["fx"]({time:.2,step:.05,type:"linear",start:r.offsetHeight,finish:d,callback:BX.delegate((function(t){this.style.height=t+"px"}),r)}).start();BX.fx.hide(BX(t),.2)}}})}if(i.getAttribute("bx-mpl-edit-show")=="Y"){n.push({text:BX.message("BPC_MES_EDIT"),onclick:function(){BX.onCustomEvent(t,"onAct",[i.getAttribute("bx-mpl-edit-url"),e,"EDIT"]);this.popupWindow.close();return false}})}if(i.getAttribute("bx-mpl-moderate-show")=="Y"){var o=i.getAttribute("bx-mpl-moderate-approved")=="hidden";n.push({text:o?BX.message("BPC_MES_SHOW"):BX.message("BPC_MES_HIDE"),onclick:function(){var n=i.getAttribute("bx-mpl-moderate-url").replace("#action#",o?"show":"hide").replace("#ACTION#",o?"SHOW":"HIDE");if(BX.type.isNotEmptyString(n)){n=BX.util.add_url_param(n,{b24statAction:o?"showComment":"hideComment"})}BX.onCustomEvent(t,"onAct",[n,e,o?"SHOW":"HIDE"]);this.popupWindow.close()}})}if(i.getAttribute("bx-mpl-delete-show")=="Y"){n.push({text:BX.message("BPC_MES_DELETE"),onclick:function(){if(window.confirm(BX.message("BPC_MES_DELETE_POST_CONFIRM"))){BX.onCustomEvent(t,"onAct",[i.getAttribute("bx-mpl-delete-url"),e,"DELETE"])}this.popupWindow.close();return false}})}var a=i.getAttribute("bx-mpl-post-entity-xml-id");if(i.getAttribute("bx-mpl-edit-show")=="Y"&&BX.Tasks&&BX.Tasks.ResultAction&&a.indexOf("TASK_")===0&&BX.Tasks.ResultAction.getInstance().canCreateResult(+/\d+/.exec(a))){var r=+/\d+/.exec(a);var d=BX.Tasks.ResultManager.getInstance().getResult(r);if(d&&d.context==="task"&&d.canUnsetAsResult&&d.canUnsetAsResult(parseInt(e,10))){n.push({text:BX.message("BPC_MES_DELETE_TASK_RESULT"),onclick:function(){BX.Tasks.ResultAction.getInstance().deleteFromComment(e);this.popupWindow.close();return false}})}else if(d&&d.context==="task"&&d.canSetAsResult&&d.canSetAsResult(parseInt(e,10))){n.push({text:BX.message("BPC_MES_CREATE_TASK_RESULT"),onclick:function(){BX.Tasks.ResultAction.getInstance().createFromComment(e);this.popupWindow.close();return false}})}}if(i.getAttribute("bx-mpl-createtask-show")==="Y"&&!BX.type.isUndefined(BX.Livefeed)){var l=i.getAttribute("bx-mpl-comment-entity-type");var h=i.getAttribute("bx-mpl-post-entity-type");n.push({text:BX.message("BPC_MES_CREATE_TASK"),onclick:function(){BX.Livefeed.TaskCreator.create({postEntityType:BX.type.isNotEmptyString(h)?h:"BLOG_POST",entityType:BX.type.isNotEmptyString(l)?l:"BLOG_COMMENT",entityId:e});this.popupWindow.close();return false}})}if(i.getAttribute("bx-mpl-createsubtask-show")==="Y"&&!BX.type.isUndefined(BX.Livefeed)){var m=i.getAttribute("bx-mpl-post-entity-xml-id");var c=m.match(/^TASK_(\d+)$/i);if(c){n.push({text:BX.message("BPC_MES_CREATE_SUBTASK"),onclick:function(){BX.Livefeed.TaskCreator.create({postEntityType:h,entityType:l,entityId:e,parentTaskId:parseInt(c[1])});this.popupWindow.close();return false}})}}if(n.length>0){for(var u in n){if(n.hasOwnProperty(u)){n[u]["className"]="blog-comment-popup-menu"}}var p={offsetLeft:-18,offsetTop:2,lightShadow:false,angle:{position:"top",offset:50},events:{onPopupClose:function(){this.destroy();BX.PopupMenu.Data["action-"+s]=null}}};BX.onCustomEvent("OnUCCommentActionsShown",[t,e,n,p]);BX.PopupMenu.show("action-"+s,i,n,p)}};var fcCommentExpand=function(t){BX.UI.Animations.expand({moreButtonNode:t,type:"comment",classBlock:"feed-com-block",classOuter:"feed-com-text-inner",classInner:"feed-com-text-inner-inner",heightLimit:200,callback:function(t){BX.onCustomEvent(window,"OnUCRecordWasExpanded",[t]);t.classList.add("feed-com-text-inner-expanded");var e=t.getAttribute("bx-content-view-xml-id");if(BX.type.isNotEmptyString(e)){BX.onCustomEvent(window,"OnUCFeedChanged",[e.split("-")])}}})};window.fcParseTemplate=function(t,e,i){e=e||{};e.RIGHTS=e.RIGHTS||{};for(var n=0,s=["MODERATE","EDIT","DELETE"];n<s.length;n++){e.RIGHTS[s[n]]=BX.util.in_array(e.RIGHTS[s[n]],["Y","ALL","OWN","OWNLAST"])?e.RIGHTS[s[n]]:"N"}e.DATE_TIME_FORMAT=e.DATE_TIME_FORMAT?e.DATE_TIME_FORMAT:"d F Y G:i";e.TIME_FORMAT=e.DATE_TIME_FORMAT&&e.DATE_TIME_FORMAT.includes("a")?"g:i a":"G:i";e.VIEW_URL=e.VIEW_URL||"";e.EDIT_URL=e.EDIT_URL||"";e.MODERATE_URL=e.MODERATE_URL||"";e.DELETE_URL=e.DELETE_URL||"";e.AUTHOR_URL=e.AUTHOR_URL||"";e.NAME_TEMPLATE=e.NAME_TEMPLATE||"";e.SHOW_LOGIN=e.SHOW_LOGIN||"";var o=t&&t.messageFields?t.messageFields:t;var a={ID:"",FULL_ID:"",CONTENT_ID:"",ENTITY_XML_ID:"",EXEMPLAR_ID:"",NEW:"old",APPROVED:"Y",DATE:"",TEXT:"",CLASSNAME:"",VIEW_URL:"",VIEW_SHOW:"N",EDIT_URL:"",EDIT_SHOW:"N",MODERATE_URL:"",MODERATE_SHOW:"N",DELETE_URL:"",DELETE_SHOW:"N",CREATETASK_SHOW:"N",BEFORE_HEADER:"",BEFORE_ACTIONS:"",AFTER_ACTIONS:"",AFTER_HEADER:"",BEFORE:"",AFTER:"",BEFORE_RECORD:"",AFTER_RECORD:"",AUTHOR_ID:"",AUTHOR_AVATAR_IS:"N",AUTHOR_AVATAR:"",AUTHOR_URL:"",AUTHOR_NAME:"",AUTHOR_EXTRANET_STYLE:"",SHOW_POST_FORM:"Y",SHOW_MENU:"Y",VOTE_ID:"",AUTHOR_TOOLTIP_PARAMS:"","background:url('') no-repeat center;":"",LIKE_REACT:"",RATING_NONEMPTY_CLASS:"",MOBILE_HINTS:""};if(!!o&&!!t["messageFields"]){o["AUTHOR"]=!!o["AUTHOR"]?o["AUTHOR"]:{};var r=parseInt(o["POST_TIMESTAMP"])+parseInt(BX.message("USER_TZ_OFFSET"))+parseInt(BX.message("SERVER_TZ_OFFSET"));var d=[["today",e["TIME_FORMAT"]],["yesterday",e["TIME_FORMAT"].indexOf("yesterday")<0?"yesterday, "+e["TIME_FORMAT"]:e["TIME_FORMAT"]],["",e["DATE_TIME_FORMAT"]]];var l="";if(!BX.Type.isUndefined(o["AUTHOR"]["TYPE"])){if(o["AUTHOR"]["TYPE"]==="EMAIL"){l=" feed-com-name-email"}else if(o["AUTHOR"]["TYPE"]==="EXTRANET"){l=" feed-com-name-extranet"}else if(o["AUTHOR"]["TYPE"]==="COLLABER"){l=" feed-com-name-collaber"}}else if(o["AUTHOR"]["IS_EXTRANET"]=="Y"){l=" feed-com-name-extranet"}var h=o["POST_MESSAGE_TEXT"].replace(/\001/gi,"").replace(/#/gi,"\x01");o.AUX_LIVE_PARAMS=BX.type.isPlainObject(o.AUX_LIVE_PARAMS)?o.AUX_LIVE_PARAMS:{};if(!!o.AUX&&(BX.util.in_array(o.AUX,["createentity","createtask","fileversion"])||o.AUX==="TASKINFO"&&BX.type.isNotEmptyObject(o.AUX_LIVE_PARAMS))){h=BX.CommentAux.getLiveText(o.AUX,o.AUX_LIVE_PARAMS)}a={ID:o["ID"],FULL_ID:o["FULL_ID"].join("-"),CONTENT_ID:o["RATING"]&&o["RATING"]["ENTITY_TYPE_ID"]&&o["RATING"]["ENTITY_ID"]?o["RATING"]["ENTITY_TYPE_ID"]+"-"+o["RATING"]["ENTITY_ID"]:"",ENTITY_XML_ID:o["ENTITY_XML_ID"],EXEMPLAR_ID:e["EXEMPLAR_ID"],NEW:o["NEW"]=="Y"?"new":"old",APPROVED:o["APPROVED"]!="Y"?"hidden":"approved",DATE:BX.date.format(d,r,parseInt(Date.now()/1e3)+parseInt(BX.message("USER_TZ_OFFSET"))+parseInt(BX.message("SERVER_TZ_OFFSET")),true),TEXT:h,CLASSNAME:(o["CLASSNAME"]?" "+o["CLASSNAME"]:"")+(BX.type.isNotEmptyString(e["CLASSNAME"])?" "+e["CLASSNAME"]:""),VIEW_URL:e["VIEW_URL"].replace("#ID#",o["ID"]).replace("#id#",o["ID"]),VIEW_SHOW:e["VIEW_URL"]!==""?"Y":"N",EDIT_URL:e["EDIT_URL"].replace("#ID#",o["ID"]).replace("#id#",o["ID"]),EDIT_SHOW:(!o.AUX||o.AUX.length<=0)&&(e["RIGHTS"]["EDIT"]=="Y"||e["RIGHTS"]["EDIT"]=="ALL"||e["RIGHTS"]["EDIT"]=="OWN"&&BX.message("USER_ID")==o["AUTHOR"]["ID"])?"Y":"N",MODERATE_URL:e["MODERATE_URL"].replace("#ID#",o["ID"]).replace("#id#",o["ID"]),MODERATE_SHOW:e["RIGHTS"]["MODERATE"]=="Y"||e["RIGHTS"]["MODERATE"]=="ALL"||e["RIGHTS"]["MODERATE"]=="OWN"&&BX.message("USER_ID")==o["AUTHOR"]["ID"]?"Y":"N",DELETE_URL:e["DELETE_URL"].replace("#ID#",o["ID"]).replace("#id#",o["ID"]),DELETE_SHOW:(!o["CAN_DELETE"]||o["CAN_DELETE"]==="Y")&&(e["RIGHTS"]["DELETE"]=="Y"||e["RIGHTS"]["DELETE"]=="ALL"||e["RIGHTS"]["DELETE"]=="OWN"&&BX.message("USER_ID")==o["AUTHOR"]["ID"]?"Y":"N"),CREATETASK_SHOW:(!o.AUX||o.AUX.length<=0)&&e["RIGHTS"]["CREATETASK"]=="Y"?"Y":"N",CREATESUBTASK_SHOW:(!o.AUX||o.AUX.length<=0)&&BX.type.isNotEmptyString(e.RIGHTS.CREATESUBTASK)&&e.RIGHTS.CREATESUBTASK==="Y"?"Y":"N",BEFORE_HEADER:o["BEFORE_HEADER"],BEFORE_ACTIONS:o["BEFORE_ACTIONS"],AFTER_ACTIONS:o["AFTER_ACTIONS"],AFTER_HEADER:o["AFTER_HEADER"],BEFORE:o["BEFORE"],AFTER:o["AFTER"],BEFORE_RECORD:o["BEFORE_RECORD"],AFTER_RECORD:o["AFTER_RECORD"],AUTHOR_ID:o["AUTHOR"]["ID"],AUTHOR_AVATAR_IS:!!o["AUTHOR"]["AVATAR"]?"Y":"N",AUTHOR_AVATAR:!!o["AUTHOR"]["AVATAR"]?encodeURI(o["AUTHOR"]["AVATAR"]):"/bitrix/images/1.gif",AUTHOR_AVATAR_BG:!!o["AUTHOR"]["AVATAR"]?"background-image:url('"+encodeURI(o["AUTHOR"]["AVATAR"])+"')":"",AUTHOR_URL:e["AUTHOR_URL"].replace("#ID#",o["ID"]).replace("#id#",o["ID"]).replace("#USER_ID#",o["AUTHOR"]["ID"]).replace("#user_id#",o["AUTHOR"]["ID"])+(!BX.Type.isUndefined(o["AUTHOR"]["EXTERNAL_AUTH_ID"])&&o["AUTHOR"]["EXTERNAL_AUTH_ID"]==="email"&&!BX.Type.isUndefined(e["AUTHOR_URL_PARAMS"])?(e["AUTHOR_URL"].indexOf("?")>=0?"&":"?")+"entityType="+e["AUTHOR_URL_PARAMS"]["entityType"]+"&entityId="+e["AUTHOR_URL_PARAMS"]["entityId"]:""),AUTHOR_TYPE:o["AUTHOR"]["TYPE"],AUTHOR_NAME:BX.formatName(o["AUTHOR"],e["NAME_TEMPLATE"],e["SHOW_LOGIN"]),AUTHOR_EXTRANET_STYLE:l,VOTE_ID:o["RATING"]&&o["RATING"]["VOTE_ID"]?o["RATING"]["VOTE_ID"]:"",AUTHOR_PERSONAL_GENDER:BX.type.isNotEmptyString(o["AUTHOR"]["PERSONAL_GENDER"])?o["AUTHOR"]["PERSONAL_GENDER"]:"",AUTHOR_TOOLTIP_PARAMS:!BX.Type.isUndefined(o["AUTHOR_TOOLTIP_PARAMS"])?o["AUTHOR_TOOLTIP_PARAMS"]:"{}","background:url('') no-repeat center;":"",LIKE_REACT:!!o["LIKE_REACT"]?o["LIKE_REACT"]:"",RATING_NONEMPTY_CLASS:o["RATING"]&&o["RATING"]["TOTAL_VOTES"]?"comment-block-rating-nonempty":"",POST_ENTITY_TYPE:!!e["POST_CONTENT_TYPE_ID"]?e["POST_CONTENT_TYPE_ID"]:"",COMMENT_ENTITY_TYPE:!!e["COMMENT_CONTENT_TYPE_ID"]?e["COMMENT_CONTENT_TYPE_ID"]:"",MOBILE_HINTS:""}}else{for(n in a){if(a.hasOwnProperty(n)){a[n]=!!t[n]?t[n]:a[n]}}}for(n in a){if(a.hasOwnProperty(n)){a[n]=!!a[n]?a[n]:""}}a["SHOW_POST_FORM"]=BX("record-"+a["ENTITY_XML_ID"]+"-0-placeholder")?"Y":"N";for(var m in a){if(a.hasOwnProperty(m)){i=i.replace(new RegExp("#"+m+"#","g"),function(){return a[this]}.bind(m))}}return i.replace("background:url('') no-repeat center;","").replace(/\001/gi,"#")};window["fcPull"]=function(t,e){BX.ajax({url:"/bitrix/components/bitrix/main.post.list/templates/.default/component_epilog.php",method:"POST",data:{AJAX_POST:"Y",ENTITY_XML_ID:t,MODE:"PUSH&PULL",sessid:BX.bitrix_sessid(),DATA:e}})};var MPLQuote=function(){this.closeByEsc=true;this.autoHide=true;this.autoHideTimeout=5e3;this.checkEsc=this.checkEsc.bind(this);this.hide=this.hide.bind(this)};MPLQuote.prototype={show:function(t,e){if(window.getSelection().toString()===""){return}this.render(t,e);if(this.closeByEsc&&this.closeByEscBound!==true){this.closeByEscBound=true;BX.bind(document,"keyup",this.checkEsc)}if(this.autoHide&&this.autoHideBound!==true){this.autoHideBound=true;setTimeout(function(){BX.bind(document,"click",this.hide)}.bind(this),10)}if(this.autoHideTimeoutPointer>0){clearTimeout(this.autoHideTimeoutPointer);this.autoHideTimeoutPointer=0}if(this.autoHideTimeout>0&&this.autoHideTimeoutBound!==true){this.autoHideTimeoutBound=true;this.autoHideTimeoutPointer=setTimeout(this.hide,this.autoHideTimeout)}},render:function(t,e){if(this.wrap){BX.ZIndexManager.unregister(this.wrap);this.wrap.remove()}const i=e?.options?.copilotParams;this.wrap=i?this.renderQuoteWithCopilot(i):this.renderQuote();document.body.appendChild(this.wrap);BX.ZIndexManager.register(this.wrap);const n=this.getPosition(this.wrap,t);BX.adjust(this.wrap,{style:{top:`${n.y}px`,left:`${n.x}px`,display:"block"}});BX.addClass(this.wrap,"mpl-quote-block-show");BX.ZIndexManager.bringToFront(this.wrap)},renderQuote:function(){const t=BX.Tag.render`
				<a class="mpl-quote-block" href="#" style="display: none;"></a>
			`;t.addEventListener("click",this.fire.bind(this));return t},renderQuoteWithCopilot:function(t){const e=BX.Tag.render`
				<div class="mpl-quote-block-quote">
					<div class="ui-icon-set --quote"></div>
				</div>
			`;e.addEventListener("click",this.fire.bind(this));const i=BX.Tag.render`
				<div class="mpl-quote-block-copilot">
					<div class="ui-icon-set --copilot-ai"></div>
					<div class="mpl-quote-block-copilot-text">${BX.message("MPL_QUOTE_COPILOT")}</div>
				</div>
			`;i.addEventListener("click",this.onCopilotButtonClickHandler.bind(this,t));const n=BX.Tag.render`
				<a class="mpl-quote-block mpl-quote-block-with-copilot" href="#" style="display: none;">
					<div class="mpl-quote-block-with-copilot-container">
						${e}
						<div class="mpl-quote-block-separator"></div>
						${i}
					</div>
				</a>
			`;n.addEventListener("click",this.emptyClick.bind(this));return n},onCopilotButtonClickHandler:function(t,e){this.emptyClick(e);this.getCopilot(t).then((t=>{this.showCopilot(t)}))},showCopilot:function(t){const e=window.getSelection();const i=e.toString();const n=e.getRangeAt(0);const s=n.cloneRange();let o=true;const a=()=>{if(o&&window.getSelection().toString()!==i){window.getSelection().removeAllRanges();window.getSelection().addRange(s)}};const r=()=>new BX.easing({duration:1e3,start:{},finish:{},transition:BX.easing.makeEaseOut(BX.easing.transitions.linear),step:()=>{if(t.isShown()){t.adjust({position:this.getBindElement(s)})}}}).animate();document.addEventListener("mouseup",a);document.addEventListener("mousedown",a);BX.Event.EventEmitter.subscribe("onPullEvent-unicomments",r);const d=()=>{o=false;window.getSelection().removeAllRanges();document.removeEventListener("mouseup",a);document.removeEventListener("mousedown",a);BX.Event.EventEmitter.unsubscribe("onPullEvent-unicomments",r);BX.Event.EventEmitter.unsubscribe("AI.Copilot:hide",d);BX.Event.EventEmitter.unsubscribe("AI.Copilot.Menu:open",a)};BX.Event.EventEmitter.subscribe("AI.Copilot:hide",d);BX.Event.EventEmitter.subscribe("AI.Copilot.Menu:open",a);t.setContext(i);t.show({bindElement:this.getBindElement(s)})},getBindElement:function(t){const e=t.getBoundingClientRect();return{top:e.bottom+window.scrollY+10,left:e.x+window.scrollX}},getCopilot:async function(t){const e=JSON.stringify(t);MPLQuote.copilots??={};if(MPLQuote.copilots[e]){return MPLQuote.copilots[e]}const{Copilot:i}=await BX.Runtime.loadExtension("ai.copilot");MPLQuote.copilots[e]=new i({readonly:true,autoHide:true,...t});return new Promise((t=>{MPLQuote.copilots[e].subscribe("finish-init",(()=>t(MPLQuote.copilots[e])));MPLQuote.copilots[e].init()}))},emptyClick:function(t){t.preventDefault();this.cancelBubble(t);this.wrap.style.display="none"},fire:function(t){t.preventDefault();if(!this.isShown()){return}if(t&&!(BX.getEventButton(t)&BX.MSLEFT)){return}this.cancelBubble(t);this.wrap.style.display="none";BX.onCustomEvent(this,"onQuote",[t,this]);setTimeout(this.hide,50);return false},hide:function(){BX.unbind(document,"keyup",this.checkEsc);this.closeByEscBound=false;BX.unbind(document,"click",this.hide);this.autoHideBound=false;if(this.autoHideTimeoutPointer>0){clearTimeout(this.autoHideTimeoutPointer)}this.autoHideTimeoutPointer=0;this.autoHideTimeoutBound=false;BX.onCustomEvent(this,"onHide",[this]);BX.remove(this.wrap)},getPosition:function(t,e){var i;if(e.pageX==null){var n=document.documentElement,s=document.body;var o=e.clientX+(n&&n.scrollLeft||s&&s.scrollLeft||0)-(n.clientLeft||0);var a=e.clientY+(n&&n.scrollTop||s&&s.scrollTop||0)-(n.clientTop||0);i={x:o,y:a}}else{i={x:e.pageX,y:e.pageY}}return{x:i.x+5,y:i.y-16}},isShown:function(){return this.wrap.style.display==="block"},cancelBubble:function(t){if(!t){t=window.event}if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}},checkEsc:function(t){t=t||window.event;if(t.keyCode==27){this.hide(t)}}};var checkEntitiesActuality=function(t){var e=repo.listById.values();var i=e.next();while(i.done!==true){if(i.value.getXmlId()===t&&!document.body.contains(i.value.node.main)){BX.onCustomEvent(window,"OnUCInitialized",[i.value.getId()])}i=e.next()}};var getActiveEntitiesByXmlId=function(t){checkEntitiesActuality(t);var e=repo.listById.values();var i=e.next();var n=new Map;while(i.done!==true){if(i.value.getXmlId()===t){n.set(i.value.getId(),i.value)}i=e.next()}return n};window.mplCheckForQuote=function(t,e,i,n,s=null){t=document.all?window.event:t;var o="",a,r=null;if(window.getSelection){a=window.getSelection();o=a.toString()}else if(document.selection){a=document.selection;o=a.createRange().text}if(o.length<=0){return}var d=BX.findParent(a.focusNode,{tagName:e.tagName,className:e.className},e),l=BX.findParent(a.anchorNode,{tagName:e.tagName,className:e.className},e);if(d!==l||d!==e){return}var h=getActiveEntitiesByXmlId(i);if(h.size<=0){return}if(n&&BX(n,true)){var m=BX(n,true);if(m&&m.hasAttribute("bx-post-author-id")){r={id:parseInt(m.getAttribute("bx-post-author-id")),gender:m.getAttribute("bx-post-author-gender"),name:m.innerHTML}}}var c=null;if(e.__boundXmlCheckQuote===true){c=repo.listById.get(e.__boundXmlEntityId)||null}if(c===null){e.__boundXmlCheckQuote=true;var u=e;while(u){h.forEach((function(t,e){if(c===null&&u.contains(t.node.main)){c=t;return true}}));if(c!==null){break}u=u.parentNode}if(c===null){c=h.values().next().value}e.__boundXmlEntityId=c.getId();BX.addCustomEvent(window,"OnUCHasBeenDestroyed",(function(t,i){if(i.getId()===e.__boundXmlEntityId){delete e.__boundXmlEntityId;delete e.__boundXmlCheckQuote}}))}if(c!==null){BX.onCustomEvent(c.eventNode,"onQuote",[t,{text:o,author:r,options:s}])}};window.mplReplaceUserPath=function(t){if(!BX.Type.isStringFilled(t)){return""}if(BX("MPL_IS_EXTRANET_SITE")==="Y"){t=t.replace("/company/personal/user/","/extranet/contacts/personal/user/")}else{t=t.replace("/extranet/contacts/personal/user/","/company/personal/user/")}t=t.replace(new RegExp("[\\w/]*/mobile/users/\\?user_id=(\\d+)","igm"),BX("MPL_IS_EXTRANET_SITE")=="Y"?"/extranet/contacts/personal/user/$1/":"/company/personal/user/$1/");return t};BX.addCustomEvent(window,"BX.Livefeed:recalculateComments",(function(t){if(!BX.type.isPlainObject(t)||!BX.type.isDomNode(t.rootNode)){return}var e=t.rootNode.querySelectorAll(".feed-comments-block");var i=null;for(var n=0;n<e.length;n++){i=e[n].getAttribute("data-bx-comments-entity-xml-id");if(BX.type.isNotEmptyString(i)){BX.onCustomEvent(window,"OnUCCommentRecalculate",[i])}}}));BX.addCustomEvent(window,"BX.Forum.Spoiler:toggle",(function(t){if(!t.node){return}var e=BX.findParent(t.node,{attrs:{"bx-mpl-block":"main"}});if(e){BX.onCustomEvent(e,"onForumSpoilerToggle",[e.getAttribute("bx-mpl-entity-id")])}}));var ScreenSpy=function(){this.timeoutSec=2e3;this.check=this.check.bind(this);this.change=this.change.bind(this);this.scroll=this.scroll.bind(this);this.nodes=new Map;this.timeout=0;this.ready=true;this.window=BX.GetWindowInnerSize();this.screen={top:this.window.scrollTop,bottom:this.window.scrollTop+this.window.innerHeight};this.watchDimensionNodes=new WeakMap};ScreenSpy.prototype={watchNode:function(t){if(!this.watchDimensionNodes.has(t)){this.watchDimensionNodes.set(t,false);BX.bind(t,"click",this.check)}},set:function(t,e){this.nodes.set(t,e);this.start()},unset:function(t){this.nodes.delete(t);if(this.nodes.size<=0){this.stop()}},start:function(){if(this.ready!==true){return}this.ready=false;BX.bind(window,"resize",this.change);BX.bind(window,"scroll",this.scroll);this.scroll()},stop:function(){if(this.timeout>0){clearTimeout(this.timeout)}this.timeout=0;BX.unbind(window,"resize",this.change);BX.unbind(window,"scroll",this.scroll);this.ready=true},check:function(){this.timeout=0;var t=BX.GetWindowScrollPos();if(this.screen.bottom>t.scrollTop){var e={top:t.scrollTop,bottom:this.screen.bottom};BX.onCustomEvent(this,"onRead",[e])}if(this.screen.top!==t.scrollTop){this.scroll()}},change:function(){this.window=BX.GetWindowInnerSize()},scroll:function(){if(this.timeout<=0){var t=BX.GetWindowScrollPos();this.screen={top:t.scrollTop,bottom:t.scrollTop+this.window.innerHeight};this.timeout=setTimeout(this.check,this.timeoutSec)}}};var scrSpy=new ScreenSpy;BX.ready((function(){BX.addCustomEvent(window,"onPullEvent-unicomments",(function(t,e){if(e["AUX"]&&!BX.util.in_array(e["AUX"].toLowerCase(),BX.CommentAux.getLiveTypesList())||getActiveEntitiesByXmlId(e["ENTITY_XML_ID"]).size<=0){return}if(t==="comment"){if(e["NEED_REQUEST"]==="Y"){if(e["URL"]["LINK"].indexOf("#GROUPS_PATH#")>=0&&!!BX.message("MPL_WORKGROUPS_PATH")){e["URL"]["LINK"]=e["URL"]["LINK"].replace("#GROUPS_PATH#",BX.message("MPL_WORKGROUPS_PATH"))}var i=BX.ajax.prepareData({AJAX_POST:"Y",ENTITY_XML_ID:e["ENTITY_XML_ID"],MODE:"RECORD",FILTER:{ID:e["ID"]},sessid:BX.bitrix_sessid()});var n=e["URL"]["LINK"];n=n.indexOf("#")!==-1?n.substr(0,n.indexOf("#")):n;BX.ajax({url:n+(n.indexOf("?")!==-1?"&":"?")+i,method:"GET",dataType:"json",data:"",onsuccess:function(t){BX.onCustomEvent(window,"OnUCCommentWasPulled",[[e["ENTITY_XML_ID"],e["ID"]],t,e])}})}else if(e["ACTION"]==="DELETE"){BX.onCustomEvent(window,"OnUCommentWasDeleted",[e["ENTITY_XML_ID"],[e["ENTITY_XML_ID"],e["ID"]],e]);BX.onCustomEvent(window,"OnUCFeedChanged",[e["ID"]])}else if(e["ACTION"]==="HIDE"){BX.onCustomEvent(window,"OnUCommentWasHidden",[e["ENTITY_XML_ID"],[e["ENTITY_XML_ID"],e["ID"]],e]);BX.onCustomEvent(window,"OnUCFeedChanged",[e["ID"]])}else{if(e["ACTION"]==="REPLY"){e["NEW"]=!e["AUTHOR"]||e["AUTHOR"]["ID"]!=BX.message("USER_ID")?"Y":"N"}BX.onCustomEvent(window,"OnUCCommentWasPulled",[[e["ENTITY_XML_ID"],e["ID"]],{messageFields:e},e])}}else if(t==="answer"&&Number(e["USER_ID"])!==Number(BX.message("USER_ID"))){BX.onCustomEvent(window,"OnUCUsersAreWriting",[e["ENTITY_XML_ID"],e["USER_ID"],e["NAME"],e["AVATAR"]])}}));BX.addCustomEvent(window,"OnUCUserReply",(function(t,e,i){var n=getActiveEntitiesByXmlId(t);if(n.size<=0){return}n.values().next().value.reply({id:e,name:i})}))}));BX.onCustomEvent("main.post.list/default",[]);class MobileButton{constructor(t){const{containerId:e}=t;const i=document.getElementById(`${e}`);if(!i){return}const n=Array.from(i.querySelectorAll(".feed__mobile_btn"));this.onButtonClickHandler=this.handleButtonClick.bind(this);n.forEach((t=>{t.addEventListener("click",this.onButtonClickHandler)}))}handleButtonClick(t){const e=new BX.PopupWindow({bindElement:t,content:BX.Tag.render`
					<div class="feed__mobile__popup_content">
						<div class="feed__mobile__popup_content__text">${BX.message("MPL_MOBILE_HINTS")}</div>
						<span onclick="${this.handleLinkClick.bind(this)}" class="feed__mobile__popup_content__link">${BX.message("MPL_MOBILE_HINTS_DETAILS")}</span>
					</div>`,bindOptions:{position:"top"},darkMode:true,autoHide:true,closeByEsc:true,animation:"fading"});e.show()}handleLinkClick(t){BX.Runtime.loadExtension("ui.qrauthorization").then((t=>{const{QrAuthorization:e}=t;const i=new e({title:{text:BX.message("MPL_MOBILE_POPUP_TITLE"),size:"sm"},bottomText:{text:BX.message("MPL_MOBILE_POPUP_BOTTOM_TEXT"),size:"sm"},popupParam:{overlay:true}});i.show()}))}}BX.namespace("BX.Main.PostList");BX.Main.PostList.MobileButton=MobileButton})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form.min.js?176242819912332";s:6:"source";s:79:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form.js";s:3:"min";s:83:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form.map.js";}"*/
(function(){window["UC"]=window["UC"]||{};if(!!window["FCForm"])return;window.FCForm=function(e){this.url="";this.lhe="";this.entitiesId={};this.form=BX(e["formId"]);this.handler=window.LHEPostForm.getHandler(e["editorId"]);this.editorName=e["editorName"];this.editorId=e["editorId"];this.windowEvents={OnUCUnlinkForm:BX.delegate(function(e){if(!!e&&!!this.entitiesId[e]){var t={},i=true;for(var s in this.entitiesId){if(this.entitiesId.hasOwnProperty(s)&&s!=e){i=false;t[s]=this.entitiesId[s]}}this.entitiesId=t;if(i&&!!this.windowEvents){for(s in this.windowEvents){if(this.windowEvents.hasOwnProperty(s)&&s)BX.removeCustomEvent(window,s,this.windowEvents[s])}this.windowEventsSet=false}}},this),OnUCQuote:BX.delegate(function(e,t,i){if(!this.entitiesId[e]||!this._checkTextSafety([e,0])){return}this.show([e,0]);var s=0;var n=function(){s++;if(s>10){return}if(!this.handler.oEditor||!this.handler.oEditor.action){return setTimeout(n,10)}if(!this.handler.oEditor.toolbar.controls.Quote){return}if(!t&&!i){return this.handler.oEditor.action.Exec("quote")}var e="";if(t){e=t.gender?BX.message("MPL_HAVE_WRITTEN_"+t.gender):BX.message("MPL_HAVE_WRITTEN");if(this.handler.oEditor.GetViewMode()==="wysiwyg"){if(t.id>0){t='<span id="'+this.handler.oEditor.SetBxTag(false,{tag:"postuser",userId:t.id,userName:t.name})+'" class="bxhtmled-metion">'+t.name.replace(/</gi,"&lt;").replace(/>/gi,"&gt;")+"</span>"}else{t="<span>"+t.name.replace(/</gi,"&lt;").replace(/>/gi,"&gt;")+"</span>"}e=t+e+"<br/>"}else if(this.handler.oEditor.bbCode){if(t.id>0){t="[USER="+t.id+"]"+t.name+"[/USER]"}else{t=t.name}e=t!==""?t+e+"\n":""}}if(this.handler.oEditor.action.actions.quote.setExternalSelectionFromRange){this.handler.oEditor.action.actions.quote.setExternalSelectionFromRange();var o=this.handler.oEditor.action.actions.quote.getExternalSelection();if(o===""&&i!==""){o=i}o=e+o;if(BX.type.isNotEmptyString(o)){this.handler.oEditor.action.actions.quote.setExternalSelection(o)}}else{this.handler.oEditor.action.actions.quote.setExternalSelection(i)}this.handler.oEditor.action.Exec("quote")}.bind(this);this.handler.exec(n)},this),OnUCReply:function(e,t,i,s,n){if(!this.entitiesId[e]||!this._checkTextSafety([e,0])||n.caught===true){return false}n.caught=true;this.show([e,0]);if(t>0){this.handler.exec(window.BxInsertMention,[{item:{entityId:t,name:i},type:"user",formID:this.form.id,editorId:this.editorId,bNeedComa:true,insertHtml:true}])}}.bind(this),OnUCAfterRecordEdit:BX.delegate(function(e,t,i,s){if(!!this.entitiesId[e]){if(s==="EDIT"){this.show([e,t],i["messageBBCode"],i["messageFields"]);this.editing=true}else{this.hide(true);if(!!i["errorMessage"]){this.id=[e,t];this.showError(i["errorMessage"])}else if(!!i["okMessage"]){this.id=[e,t];this.showNote(i["okMessage"]);this.id=null}}}},this)};this.linkEntity(e["entitiesId"]);BX.remove(BX("micro"+e["editorName"]));BX.remove(BX("micro"+e["editorId"]));this.eventNode=this.handler.eventNode;if(this.eventNode){BX.addCustomEvent(this.eventNode,"OnBeforeHideLHE",BX.delegate(function(){BX.removeClass(document.documentElement,"bx-ios-fix-frame-focus");if(top&&top["document"])BX.removeClass(top["document"]["documentElement"],"bx-ios-fix-frame-focus");if(!!this.id&&!!BX("uc-writing-"+this.form.id+"-"+this.id[0]+"-area")){BX.hide(BX("uc-writing-"+this.form.id+"-"+this.id[0]+"-area"))}},this));BX.addCustomEvent(this.eventNode,"OnAfterHideLHE",BX.delegate(function(){var e=this._getPlacehoder();if(e){BX.hide(e)}e=this._getSwitcher();if(e){BX.show(e);BX.focus(e.firstChild)}this.__content_length=0;if(!!this.id){BX.onCustomEvent(this.eventNode,"OnUCFormAfterHide",[this])}clearTimeout(this._checkWriteTimeout);this._checkWriteTimeout=0;this.clear();BX.onCustomEvent(window,"OnUCFeedChanged",[this.id])},this));BX.addCustomEvent(this.eventNode,"OnBeforeShowLHE",BX.delegate(function(){if(BX.browser.IsIOS()&&BX.browser.IsMobile()){BX.addClass(window["document"]["documentElement"],"bx-ios-fix-frame-focus");if(top&&top["document"])BX.addClass(top["document"]["documentElement"],"bx-ios-fix-frame-focus")}var e=this._getPlacehoder();if(e){BX.removeClass(e,"feed-com-add-box-no-form");BX.removeClass(e,"feed-com-add-box-header");BX.show(e)}e=this._getSwitcher();if(e){BX.hide(e)}if(!!this.id&&!!BX("uc-writing-"+this.form.id+"-"+this.id[0]+"-area")){BX.hide(BX("uc-writing-"+this.form.id+"-"+this.id[0]+"-area"))}},this));BX.addCustomEvent(this.eventNode,"OnAfterShowLHE",function(e,t){this._checkWrite(e,t);BX.onCustomEvent(window,"OnUCFeedChanged",[this.id])}.bind(this));BX.addCustomEvent(this.eventNode,"OnClickSubmit",BX.delegate(this.submit,this));BX.addCustomEvent(this.eventNode,"OnClickCancel",BX.delegate(this.cancel,this));BX.onCustomEvent(this.eventNode,"OnUCFormInit",[this])}this.id=null;this.jsCommentId=null;BX.addCustomEvent(window,"OnImageDataUriHandle",BX.delegate(this.showWait,this));BX.addCustomEvent(window,"OnImageDataUriCaughtUploaded",BX.delegate(this.closeWait,this));BX.addCustomEvent(window,"OnImageDataUriCaughtFailed",BX.delegate(this.closeWait,this))};window.FCForm.prototype={linkEntity:function(e){if(!!e){for(var t in e){if(e.hasOwnProperty(t)){BX.onCustomEvent(window,"OnUCUnlinkForm",[t]);this.entitiesId[t]=e[t]}}}if(!this.windowEventsSet&&!!this.entitiesId){BX.addCustomEvent(window,"OnUCUnlinkForm",this.windowEvents.OnUCUnlinkForm);BX.addCustomEvent(window,"OnUCReply",BX.debounce(this.windowEvents.OnUCReply,10));BX.addCustomEvent(window,"OnUCQuote",BX.debounce(this.windowEvents.OnUCQuote,10));BX.addCustomEvent(window,"OnUCAfterRecordEdit",this.windowEvents.OnUCAfterRecordEdit);this.windowEventsSet=true}},_checkTextSafety:function(e){if(this.id&&this.id.join("-")!==e.join("-")&&this.handler.editorIsLoaded&&this.handler.oEditor.IsContentChanged()){return window.confirm(BX.message("MPL_SAFE_EDIT"))}return true},_checkWrite:function(){if(this.handler.editorIsLoaded&&this._checkWriteTimeout!==false){this.__content_length=this.__content_length>0?this.__content_length:0;var e=this.handler.oEditor.GetContent(),t=2e3;if(e.length>=4&&this.__content_length!=e.length&&!!this.id){BX.onCustomEvent(window,"OnUCUserIsWriting",[this.id[0],{sent:false}]);t=3e4}this._checkWriteTimeout=setTimeout(this._checkWrite.bind(this),t);this.__content_length=e.length}},_getPlacehoder:function(e){e=!!e?e:this.id;return!!e?BX("record-"+e.join("-")+"-placeholder"):null},_getSwitcher:function(e){e=!!e?e:this.id;return!!e?BX("record-"+e[0]+"-switcher"):null},hide:function(e){if(this.eventNode.style.display!="none"){BX.onCustomEvent(this.eventNode,"OnShowLHE",[e===true?false:"hide"])}if(e){document.body.appendChild(this.form)}},clear:function(){this.editing=false;var e=this._getPlacehoder();if(!!e)BX.hide(e);this.clearNotification(e,"feed-add-error");BX.onCustomEvent(this.eventNode,"OnUCFormClear",[this]);var t=BX.findChild(this.form,{className:"wduf-placeholder-tbody"},true,false);if(t!==null&&typeof t!="undefined")BX.cleanNode(t,false);t=BX.findChild(this.form,{className:"wduf-selectdialog"},true,false);if(t!==null&&typeof t!="undefined")BX.hide(t);t=BX.findChild(this.form,{className:"file-placeholder-tbody"},true,false);if(t!==null&&typeof t!="undefined")BX.cleanNode(t,false);this.id=null;this.jsCommentId=null},show:function(e,t,i){if(this.id&&!!e&&this.id.join("-")==e.join("-")){var s=this._getPlacehoder(e);this.handler.oEditor.Focus();setTimeout(function(){var e=BX.pos(s);var t=BX.GetWindowSize(document);if(t.scrollTop>e.top){s.scrollIntoView()}else if(t.scrollTop+t.innerHeight<e.top){s.scrollIntoView(false)}},100);return true}else{this.hide(true)}this.id=e;this.jsCommentId=BX.util.getRandomString(20);var n=this._getPlacehoder();BX.removeClass(n,"feed-com-add-box-no-form");BX.removeClass(n,"feed-com-add-box-header");n.appendChild(this.form);BX.onCustomEvent(this.eventNode,"OnUCFormBeforeShow",[this,t,i]);BX.onCustomEvent(this.eventNode,"OnShowLHE",["show",null,this.id]);BX.onCustomEvent(this.eventNode,"OnUCFormAfterShow",[this,t,i]);return true},submit:function(){if(this.busy===true)return"busy";var e=this.handler.editorIsLoaded?this.handler.oEditor.GetContent():"";if(!e){this.showError(BX.message("JERROR_NO_MESSAGE"));return false}this.showWait();this.busy=true;var t={};window.convertFormToArray(this.form,t);t["REVIEW_TEXT"]=e;t["NOREDIRECT"]="Y";t["MODE"]="RECORD";t["AJAX_POST"]="Y";t["id"]=this.id;if(this.jsCommentId!==null)t["COMMENT_EXEMPLAR_ID"]=this.jsCommentId;t["SITE_ID"]=BX.message("SITE_ID");t["LANGUAGE_ID"]=BX.message("LANGUAGE_ID");t["ACTION"]="ADD";if(this.editing===true){t["REVIEW_ACTION"]="EDIT";t["FILTER"]={ID:this.id[1]};t["ACTION"]="EDIT";t["ID"]=this.id[1]}BX.onCustomEvent(this.eventNode,"OnUCFormSubmit",[this,t]);BX.onCustomEvent(window,"OnUCFormSubmit",[this.id[0],this.id[1],this,t]);var i=this.form.action;i=BX.util.remove_url_param(i,["b24statAction"]);i=BX.util.add_url_param(i,{b24statAction:this.id[1]>0?"editComment":"addComment"});this.form.action=i;BX.ajax({method:"POST",url:this.form.action,data:t,dataType:"json",onsuccess:BX.proxy(function(e){this.closeWait();var t=e,i=this.id[0];BX.onCustomEvent(this.eventNode,"OnUCFormResponse",[this,e]);if(!!this.OnUCFormResponseData)e=this.OnUCFormResponseData;if(!!e){if(e["errorMessage"]){this.showError(e["errorMessage"])}else if(e["status"]=="error"){this.showError(BX.type.isNotEmptyString(e["message"])?e["message"]:"")}else{BX.onCustomEvent(window,"OnUCAfterRecordAdd",[this.id[0],e,t]);this.hide(true)}}this.busy=false;BX.onCustomEvent(window,"OnUCFormResponse",[i,e["messageId"],this,e])},this),onfailure:BX.delegate(function(){this.closeWait();this.busy=false;BX.onCustomEvent(window,"OnUCFormResponse",[this.id[0],this.id[1],this,[]])},this)})},cancel:function(){},clearNotification:function(e,t){var i=BX.findChildren(e,{tagName:"DIV",className:t},true);if(!!i){var s=i.pop();do{BX.remove(s);BX.remove(s)}while((s=i.pop())&&!!s)}},showError:function(e){if(!e)return;var t=this._getPlacehoder();this.clearNotification(t,"feed-add-error");BX.addClass(t,!t.firstChild?"feed-com-add-box-no-form":"feed-com-add-box-header");t.insertBefore(BX.create("div",{attrs:{class:"feed-add-error"},html:'<span class="feed-add-info-text"><span class="feed-add-info-icon"></span>'+"<b>"+BX.message("FC_ERROR")+"</b><br />"+e+"</span>"}),t.firstChild);BX.show(t)},showNote:function(e){if(!e)return;var t=this._getPlacehoder();this.clearNotification(t,"feed-add-error");this.clearNotification(t,"feed-add-successfully");BX.addClass(t,!t.firstChild?"feed-com-add-box-no-form":"feed-com-add-box-header");t.insertBefore(BX.create("div",{attrs:{class:"feed-add-successfully"},html:'<span class="feed-add-info-text"><span class="feed-add-info-icon"></span>'+e+"</span>"}),t.firstChild);BX.addClass(t,"comment-deleted");BX.show(t)},showWait:function(){var e=BX("lhe_button_submit_"+this.form.id);this.busy=true;if(!!e){BX.addClass(e,"ui-btn-clock");BX.defer(function(){e.disabled=true})()}},closeWait:function(){var e=BX("lhe_button_submit_"+this.form.id);this.busy=false;if(!!e){e.disabled=false;BX.removeClass(e,"ui-btn-clock")}}};window.convertFormToArray=function(e,t){t=!!t?t:[];if(!!e){var i,s=[],n=e.elements.length;for(i=0;i<n;i++){var o=e.elements[i];if(o.disabled)continue;switch(o.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":case"select-one":s.push({name:o.name,value:o.value});break;case"radio":case"checkbox":if(o.checked)s.push({name:o.name,value:o.value});break;case"select-multiple":for(var d=0;d<o.options.length;d++){if(o.options[d].selected)s.push({name:o.name,value:o.options[d].value})}break;default:break}}var r=t;i=0;while(i<s.length){var a=s[i].name.indexOf("[");if(a==-1){r[s[i].name]=s[i].value;r=t;i++}else{var h=s[i].name.substring(0,a);var l=s[i].name.substring(a+1);if(!r[h])r[h]=[];var c=l.indexOf("]");if(c==-1){r=t;i++}else if(c===0){r=r[h];s[i].name=""+r.length}else{r=r[h];s[i].name=l.substring(0,c)+l.substring(c+1)}}}}return t};window["fRefreshCaptcha"]=function(e){var t=null,i=BX.findChild(e,{attr:{name:"captcha_code"}},true),s=BX.findChild(e,{attr:{name:"captcha_word"}},true),n=BX.findChild(e,{className:"comments-reply-field-captcha-image"},true);if(n)t=BX.findChild(n,{tag:"img"});if(i&&s&&t){s.value="";BX.ajax.getCaptcha(function(e){i.value=e["captcha_sid"];t.src="/bitrix/tools/captcha.php?captcha_code="+e["captcha_sid"]})}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:100:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form2.min.js?176242819915514";s:6:"source";s:80:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form2.js";s:3:"min";s:84:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form2.min.js";s:3:"map";s:84:"/bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form2.map.js";}"*/
(function(){if(!!window.UCForm){return}var t={};window.UCForm=function(t){this.formId=t;this.form=BX(this.formId);this.entities=new Map;this.xmls=new Map;if(t===""){}else{this.initialize()}this.startCheckWriting=this.startCheckWriting.bind(this);this.id=null;this.currentEntity=null;this.onSubmitSuccess=this.onSubmitSuccess.bind(this);this.onSubmitFailed=this.onSubmitFailed.bind(this)};window.UCForm.prototype={initialize:function(){this.bindWindowEvents();this.bindPrivateEvents();this.analyticsLabel={};this.__bindLHEEvents=function(t,e){if(e===this.formId){this.handler=t;this.bindLHEEvents()}}.bind(this);BX.addCustomEvent(window,"onInitialized",this.__bindLHEEvents);if(this.getLHE())this.bindLHEEvents();BX.onCustomEvent(this.form,"OnUCFormInit",[this])},bindWindowEvents:function(){this.windowEvents={OnImageDataUriHandle:this.showWait.bind(this),OnImageDataUriCaughtUploaded:this.closeWait.bind(this),OnImageDataUriCaughtFailed:this.closeWait.bind(this)};for(var t in this.windowEvents){if(this.windowEvents.hasOwnProperty(t)){BX.addCustomEvent(window,t,this.windowEvents[t])}}},unbindWindowEvents:function(){for(var t in this.windowEvents){if(this.windowEvents.hasOwnProperty(t)){BX.removeCustomEvent(window,t,this.windowEvents[t])}}},bindPrivateEvents:function(){this.privateEvents={onQuote:this.onQuote.bind(this),onReply:this.onReply.bind(this),onEdit:this.onEdit.bind(this)};for(var t in this.privateEvents){if(this.privateEvents.hasOwnProperty(t)){BX.addCustomEvent(this,t,this.privateEvents[t])}}},bindLHEEvents:function(){if(!this.getLHE()){return}this.getLHE().exec(function(){BX.removeAllCustomEvents(this.getLHE().oEditor,"OnCtrlEnter");BX.addCustomEvent(this.getLHE().oEditor,"OnCtrlEnter",function(){this.getLHE().oEditor.SaveContent();BX.onCustomEvent(t,"OnButtonClick",["submit"])}.bind(this))}.bind(this));var t=this.getLHEEventNode();BX.addCustomEvent(t,"OnBeforeHideLHE",function(){BX.removeClass(document.documentElement,"bx-ios-fix-frame-focus");if(top&&top["document"]){BX.removeClass(top["document"]["documentElement"],"bx-ios-fix-frame-focus")}BX.onCustomEvent(this.form,"OnUCFormBeforeHide",[this,this.currentEntity])}.bind(this));BX.addCustomEvent(t,"OnAfterHideLHE",function(){if(this.currentEntity!==null){var t=this.currentEntity.getPlaceholder(this.currentEntity.messageId);if(t)BX.hide(t)}BX.onCustomEvent(this.form,"OnUCFormAfterHide",[this,this.currentEntity]);this.stopCheckWriting();this.clear();BX.onCustomEvent(window,"OnUCFeedChanged",[this.id])}.bind(this));BX.addCustomEvent(t,"OnBeforeShowLHE",function(){if(BX.browser.IsIOS()&&BX.browser.IsMobile()){BX.addClass(window["document"]["documentElement"],"bx-ios-fix-frame-focus");if(top&&top["document"])BX.addClass(top["document"]["documentElement"],"bx-ios-fix-frame-focus")}}.bind(this));BX.addCustomEvent(t,"OnAfterShowLHE",function(){this.startCheckWriting();BX.onCustomEvent(window,"OnUCFeedChanged",[this.id])}.bind(this));BX.addCustomEvent(t,"OnClickSubmit",this.submit.bind(this));BX.addCustomEvent(t,"OnClickCancel",this.cancel.bind(this));BX.removeCustomEvent(window,"onInitialized",this.__bindLHEEvents);delete this.__bindLHEEvents},getLHE:function(){if(!this.handler){this.handler=LHEPostForm.getHandlerByFormId(this.formId)}return this.handler},getLHEEventNode:function(){if(!this.handlerEventNode&&this.getLHE()){this.handlerEventNode=this.getLHE().eventNode}return this.handlerEventNode},bindEntity:function(t){if(this.entities.has(t.getId())){BX.onCustomEvent(this.form,"onUnbindEntity",[t]);this.entities.delete(t.getId())}this.entities.set(t.getId(),t);this.xmls.set(t.getXmlId(),t)},onInitEditorFrame:function(t){this.getLHE().exec(function(){BX.addCustomEvent(this.getLHE().oEditor,"OnAfterIframeInit",(()=>{t();BX.removeAllCustomEvents(this.getLHE().oEditor,"OnAfterIframeInit")}))}.bind(this))},onQuote:function(t,e,i,n,s){if(this.isFormOccupied(t)){return}const o=()=>{var t=BX.util.htmlspecialchars(i);if(!this.getLHE().oEditor.toolbar.controls.Quote){BX.DoNothing()}else if(!e&&!i){this.getLHE().oEditor.action.Exec("quote")}else{i=t;const n=e&&e.gender?BX.message("MPL_HAVE_WRITTEN_"+e.gender):BX.message("MPL_HAVE_WRITTEN");if(this.getLHE().oEditor.GetViewMode()==="wysiwyg"){i=i.replace(/\n/g,"<br/>");if(e){if(e.id>0){e='<span id="'+this.getLHE().oEditor.SetBxTag(false,{tag:"postuser",userId:e.id,userName:e.name})+'" class="bxhtmled-metion">'+e.name.replace(/</gi,"&lt;").replace(/>/gi,"&gt;")+"</span>"}else{e="<span>"+e.name.replace(/</gi,"&lt;").replace(/>/gi,"&gt;")+"</span>"}e=e!==""?n.replace("#AUTHOR_NAME#",e)+"<br/>":"";i=e+i}}else if(this.getLHE().oEditor.bbCode){if(e){if(e.id>0){e="[USER="+e.id+"]"+e.name+"[/USER]"}else{e=e.name}e=e!==""?n.replace("#AUTHOR_NAME#",e)+"\n":"";i=e+i}}if(this.getLHE().oEditor.action.actions.quote.setExternalSelectionFromRange){this.getLHE().oEditor.action.actions.quote.setExternalSelectionFromRange();let i=this.getLHE().oEditor.action.actions.quote.getExternalSelection();let n=BX.create("DIV",{html:i});let s=n.querySelector(".feed-post-emoji-container");if(s){n.removeChild(s);i=n.innerHTML}if(i===""&&t!==""){i=t}i=(BX.type.isNotEmptyString(e)?e:"")+i;if(BX.type.isNotEmptyString(i))this.getLHE().oEditor.action.actions.quote.setExternalSelection(i)}else{this.getLHE().oEditor.action.actions.quote.setExternalSelection(i)}this.getLHE().oEditor.action.Exec("quote")}};const r=this.currentEntity&&parseInt(this.currentEntity.messageId,10);this.analyticsLabel.context="quote";if(this.currentEntity&&!r){this.show(t);o()}else{this.show(t);this.onInitEditorFrame(o)}},onReply:function(t,e,i=""){if(this.isFormOccupied(t)){return}this.analyticsLabel.context=i;if(this.currentEntity){this.show(t);this.insertMention(e)}else{this.show(t);this.onInitEditorFrame(this.insertMention.bind(this,e))}},onEdit:function(t,e,i,n){if(n==="EDIT"){this.show(t,e,i["messageBBCode"],i["messageFields"]);return}this.hide(true);this.setCurrentEntity(t,e);if(i["errorMessage"]){this.showError(i["errorMessage"])}else if(i["okMessage"]){this.showNote(i["okMessage"]);this.nullCurrentEntity()}},isFormOccupied:function(t){if(this.currentEntity!==null&&this.currentEntity!==t&&this.isFormChanged()){return!window.confirm(BX.message("MPL_SAFE_EDIT"))}return false},isFormChanged:function(){if(this.getLHE()&&this.getLHE().editorIsLoaded&&this.getLHE().oEditor.IsContentChanged()){return true}return false},insertMention:function(t){if(t.id>0){this.getLHE().exec(window.BxInsertMention,[{item:{entityId:t.id,name:t.name},type:"user",formID:this.formId,editorId:this.getLHE().oEditorId,bNeedComa:true,insertHtml:true}])}},startCheckWriting:function(){if(!this.getLHE().editorIsLoaded||this._checkWriteTimeout===false){return}this.__content_length=this.__content_length>0?this.__content_length:0;var t=this.getLHE().oEditor.GetContent(),e=2e3;if(t.length>=4&&this.__content_length!==t.length&&this.id){BX.onCustomEvent(this.form,"OnUCUserIsWriting",[this.currentEntity,{sent:false}]);e=3e4}this._checkWriteTimeout=setTimeout(this.startCheckWriting,e);this.__content_length=t.length},stopCheckWriting:function(){clearTimeout(this._checkWriteTimeout);this._checkWriteTimeout=false;this.__content_length=0},setCurrentEntity:function(t,e){this.currentEntity=t;this.currentEntity.messageId=e;this.currentEntity.operationId=BX.util.getRandomString(20);this.id=[this.currentEntity.getXmlId(),e]},nullCurrentEntity:function(){delete this.currentEntity.messageId;this.currentEntity=null;this.id=null},hide:function(t){if(this.getLHEEventNode()&&this.getLHEEventNode().style.display!=="none"){BX.onCustomEvent(this.getLHEEventNode(),"OnShowLHE",[t===true?false:"hide"])}if(t){document.body.appendChild(this.form)}},clear:function(){var t=this.currentEntity?this.currentEntity.getPlaceholder(this.currentEntity.messageId):null;if(t){BX.hide(t);this.clearNotification(t,"feed-add-error")}BX.onCustomEvent(this.form,"OnUCFormClear",[this]);var e=BX.findChild(this.form,{className:"wduf-placeholder-tbody"},true,false);if(e!==null&&typeof e!="undefined")BX.cleanNode(e,false);e=BX.findChild(this.form,{className:"wduf-selectdialog"},true,false);if(e!==null&&typeof e!="undefined")BX.hide(e);e=BX.findChild(this.form,{className:"file-placeholder-tbody"},true,false);if(e!==null&&typeof e!="undefined")BX.cleanNode(e,false);this.nullCurrentEntity()},show:function(t,e,i,n){e=parseInt(e>0?e:0);var s=t.getPlaceholder(e);if(this.currentEntity===t&&this.currentEntity.messageId===e){this.getLHE().oEditor.Focus();setTimeout(function(){if(!this.isElementCompletelyVisibleOnScreen(s)){s.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}.bind(this),100);return true}if(this.getLHEEventNode()&&this.getLHEEventNode().style.display!=="none"&&BX.Dom.getPosition(s).y>BX.Dom.getPosition(this.getLHEEventNode()).y){window.scrollTo(window.scrollX,window.scrollY-this.getLHEEventNode().offsetHeight+10)}this.hide(true);this.setCurrentEntity(t,e);BX.removeClass(s,"feed-com-add-box-no-form");BX.removeClass(s,"feed-com-add-box-header");s.appendChild(this.form);BX.onCustomEvent(this.form,"OnUCFormBeforeShow",[this,i,n]);BX.show(s);BX.onCustomEvent(this.getLHEEventNode(),"OnShowLHE",["show",null,this.id]);BX.onCustomEvent(this.form,"OnUCFormAfterShow",[this,i,n]);return true},isElementCompletelyVisibleOnScreen:function(t){var e=BX.LazyLoad.getElementCoords(t);var i=window.pageYOffset||document.documentElement.scrollTop;var n=i+document.documentElement.clientHeight;e.bottom=e.top+t.offsetHeight;return e.top>i&&e.top<n&&e.bottom<n&&e.bottom>i},onSubmitSuccess:function(t){this.closeWait();var e=t,i=this.id[0];BX.onCustomEvent(this.form,"OnUCFormResponse",[this,t]);if(!!this.OnUCFormResponseData)t=this.OnUCFormResponseData;if(!!t){if(t["errorMessage"]){this.showError(t["errorMessage"])}else if(t["status"]=="error"){this.showError(BX.type.isNotEmptyString(t["message"])?t["message"]:"")}else{BX.onCustomEvent(this.form,"OnUCAfterRecordAdd",[this.id[0],t,e]);this.hide(true)}}this.busy=false;BX.onCustomEvent(window,"OnUCFormResponse",[i,t["messageId"],this,t])},onSubmitFailed:function(t){this.closeWait();if(BX.type.isPlainObject(t)){var e="Unknown error.";if(BX.type.isPlainObject(t["data"])&&BX.type.isPlainObject(t["data"]["ajaxRejectData"])&&BX.type.isNotEmptyString(t["data"]["ajaxRejectData"]["message"])){e=t["data"]["ajaxRejectData"]["message"]}else if(BX.type.isArray(t["errors"])){e=t["errors"].map((function(t){return t.message})).join("<br >")}this.showError(e)}this.busy=false;BX.onCustomEvent(window,"OnUCFormResponse",[this.id[0],this.id[1],this,[]])},submit:function(){if(this.busy===true){return"busy"}var t=this.getLHE().editorIsLoaded?this.getLHE().oEditor.GetContent():"";if(!t){this.showError(BX.message("JERROR_NO_MESSAGE"));return false}this.showWait();this.busy=true;const e=window.location.href;if(e.includes("/stream/")){this.analyticsLabel.section="feed"}else if(e.includes("/workgroups/")){this.analyticsLabel.section="project"}var i={};convertFormToArray(this.form,i);i["REVIEW_TEXT"]=t;i["NOREDIRECT"]="Y";i["MODE"]="RECORD";i["AJAX_POST"]="Y";i["id"]=this.id;i["SITE_ID"]=BX.message("SITE_ID");i["LANGUAGE_ID"]=BX.message("LANGUAGE_ID");i["ACTION"]="ADD";i["ANALYTICS_LABEL"]=this.analyticsLabel;if(this.currentEntity!==null&&this.currentEntity.messageId>0){i["REVIEW_ACTION"]="EDIT";i["FILTER"]={ID:this.id[1]};i["ACTION"]="EDIT";i["ID"]=this.id[1]}BX.onCustomEvent(this.form,"OnUCFormSubmit",[this,i]);BX.onCustomEvent(window,"OnUCFormSubmit",[this.id[0],this.id[1],this,i]);if(this.currentEntity!==null&&this.currentEntity.ajax["processComment"]===true){BX.ajax.runComponentAction(this.currentEntity.ajax.componentName,"processComment",{mode:"class",data:i,signedParameters:this.currentEntity.ajax.params}).then(this.onSubmitSuccess,this.onSubmitFailed)}else{var n=this.form.action;n=BX.util.remove_url_param(n,["b24statAction"]);n=BX.util.add_url_param(n,{b24statAction:this.id[1]>0?"editComment":"addComment"});this.form.action=n;BX.ajax({method:"POST",url:this.form.action,data:i,dataType:"json",onsuccess:this.onSubmitSuccess,onfailure:this.onSubmitFailed})}return false},cancel:function(){},clearNotification:function(t,e){var i=BX.findChildren(t,{tagName:"DIV",className:e},true);if(i){var n=i.pop();do{BX.remove(n)}while((n=i.pop())&&!!n)}},showError:function(t){if(!t||this.currentEntity===null)return;var e=this.currentEntity.getPlaceholder(this.currentEntity.messageId);this.clearNotification(e,"feed-add-error");BX.addClass(e,!e.firstChild?"feed-com-add-box-no-form":"feed-com-add-box-header");e.insertBefore(BX.create("div",{attrs:{class:"feed-add-error"},html:'<span class="feed-add-info-text">'+'<span class="feed-add-info-text-top">'+'<span class="feed-add-info-icon">'+'<div class="ui-icon-set --warning" style="--ui-icon-set__icon-size: 30px; --ui-icon-set__icon-color: var(--ui-color-palette-red-80);"></div>'+"</span>"+'<span class="feed-add-info-text-title">'+BX.message("FC_ERROR")+"</span>"+"</span>"+'<span class="feed-add-info-text-message">'+t+"</span>"+"</span>"}),e.firstChild);BX.show(e)},showNote:function(t){if(!t||this.currentEntity===null)return;var e=this.currentEntity.getPlaceholder(this.currentEntity.messageId);this.clearNotification(e,"feed-add-error");this.clearNotification(e,"feed-add-successfully");BX.addClass(e,!e.firstChild?"feed-com-add-box-no-form":"feed-com-add-box-header");e.insertBefore(BX.create("div",{attrs:{class:"feed-add-successfully"},html:'<span class="feed-add-info-text">'+'<span class="feed-add-info-text-top">'+'<span class="feed-add-info-icon">'+'<div class="ui-icon-set --info-circle" style="--ui-icon-set__icon-size: 30px; --ui-icon-set__icon-color: var(--ui-color-palette-green-90);"></div>'+"</span>"+'<span class="feed-add-info-text-message">'+t+"</span>"+"</span>"+"</span>"}),e.firstChild);BX.addClass(e,"comment-deleted");BX.show(e)},showWait:function(){var t=BX("lhe_button_submit_"+this.form.id);this.busy=true;if(!!t){BX.addClass(t,"ui-btn-clock");BX.defer((function(){t.disabled=true}))()}},closeWait:function(){var t=BX("lhe_button_submit_"+this.form.id);this.busy=false;if(!!t){t.disabled=false;BX.removeClass(t,"ui-btn-clock")}}};window.UCForm.bindFormToEntity=function(e,i){var n=t[e]||new UCForm(e);n.bindEntity(i);t[e]=n;return n};window.convertFormToArray=function(t,e){e=!!e?e:[];if(!!t){var i,n=[],s=t.elements.length;for(i=0;i<s;i++){var o=t.elements[i];if(o.disabled)continue;switch(o.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":case"select-one":n.push({name:o.name,value:o.value});break;case"radio":case"checkbox":if(o.checked)n.push({name:o.name,value:o.value});break;case"select-multiple":for(var r=0;r<o.options.length;r++){if(o.options[r].selected)n.push({name:o.name,value:o.options[r].value})}break;default:break}}var a=e;i=0;while(i<n.length){var d=n[i].name.indexOf("[");if(d==-1){a[n[i].name]=n[i].value;a=e;i++}else{var h=n[i].name.substring(0,d);var c=n[i].name.substring(d+1);if(!a[h])a[h]=[];var l=c.indexOf("]");if(l==-1){a=e;i++}else if(l===0){a=a[h];n[i].name=""+a.length}else{a=a[h];n[i].name=c.substring(0,l)+c.substring(l+1)}}}}return e};window["fRefreshCaptcha"]=function(t){var e=null,i=BX.findChild(t,{attr:{name:"captcha_code"}},true),n=BX.findChild(t,{attr:{name:"captcha_word"}},true),s=BX.findChild(t,{className:"comments-reply-field-captcha-image"},true);if(s)e=BX.findChild(s,{tag:"img"});if(i&&n&&e){n.value="";BX.ajax.getCaptcha((function(t){i.value=t["captcha_sid"];e.src="/bitrix/tools/captcha.php?captcha_code="+t["captcha_sid"]}))}}})();
/* End */
;; /* /bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js?17624317292527*/
; /* /bitrix/components/bitrix/socialnetwork.log.ex/templates/.default/script.min.js?17624317292044*/
; /* /bitrix/components/bitrix/socialnetwork.log.entry/templates/.default/scripts.min.js?17624317299338*/
; /* /bitrix/components/bitrix/socialnetwork.blog.post.edit/templates/.default/script.js?176544696188918*/
; /* /bitrix/components/bitrix/main.post.form/templates/.default/script.min.js?176242819973565*/
; /* /bitrix/components/bitrix/main.file.input/templates/drag_n_drop/script.min.js?176242819915242*/
; /* /bitrix/components/bitrix/system.field.edit/script.min.js?1762428199814*/
; /* /bitrix/components/bitrix/search.tags.input/templates/.default/script.min.js?17624282378379*/
; /* /bitrix/components/bitrix/voting.uf/templates/.default/script.min.js?176242825111246*/
; /* /bitrix/components/bitrix/voting.vote.edit/templates/.default/script.min.js?176242825112569*/
; /* /bitrix/components/bitrix/socialnetwork.log.filter/templates/.default/script.min.js?176243172911034*/
; /* /bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/script.min.js?176243172927356*/
; /* /bitrix/components/bitrix/socialnetwork.blog.post/templates/.default/index.min.js?17624317296754*/
; /* /bitrix/components/bitrix/socialnetwork.blog.post.comment/templates/.default/script.min.js?17624317292929*/
; /* /bitrix/components/bitrix/main.post.list/templates/.default/script.min.js?176242819960559*/
; /* /bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form.min.js?176242819912332*/
; /* /bitrix/components/bitrix/main.post.list/templates/.default/scripts_for_form2.min.js?176242819915514*/
; /* /bitrix/components/bitrix/desktop/script.min.js?176242819911184*/

//# sourceMappingURL=page_live_feed_v2.map.js