
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
;; /* /bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js?17624317292527*/
; /* /bitrix/components/bitrix/socialnetwork.log.ex/templates/.default/script.min.js?17624317292044*/

//# sourceMappingURL=page_ef78073fed16fae13b6ca75e2c4cd07d.map.js