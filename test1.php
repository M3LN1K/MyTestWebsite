<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("keywords", "Тест1");
$APPLICATION->SetPageProperty("description", "Тест1");
$APPLICATION->SetTitle("Тест1");
$APPLICATION->SetPageProperty("TITLE", "Тест1 | We project");
?><?$APPLICATION->IncludeComponent(
	"local:main.feedback",
	"ContactsPageForm",
	Array(
		"EMAIL_TO" => "whynot-2@yandex.ru",
		"EVENT_MESSAGE_ID" => array("7"),
		"OK_TEXT" => "Все работает, чееел",
		"REQUIRED_FIELDS" => array("NAME","EMAIL","PHONE"),
		"USE_CAPTCHA" => "N",
        "AJAX_MODE" => "Y",
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>