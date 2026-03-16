<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Контакты");
$APPLICATION->SetPageProperty("TITLE", "Контакты | Web Project");
?>
<?$APPLICATION->IncludeComponent(
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
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>