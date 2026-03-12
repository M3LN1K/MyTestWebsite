<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Новая папка ");
$APPLICATION->SetPageProperty("keywords", "Новая папка ");
$APPLICATION->SetPageProperty("description", "Новая папка ");
use Bitrix\Main\Page\Asset;
// Задаем свойство страницы
// Задаем тайтл странице
$APPLICATION->SetPageProperty("TITLE", " Новая папка | We project");
Asset::getInstance()->addCss(SITE_TEMPLATE_PATH.'/assets/css/custom.css');
Asset::getInstance()->addCss(SITE_TEMPLATE_PATH.'/assets/css/style.css');


?>
<?= $APPLICATION -> IncludeComponent(
    "melnik:api.dadata",
    ".default",
    array(
        "DADATA_API_KEY" => "184f3fc305f5e7790c8708bd879e58877174078b",

    )
); ?>
<br>
<br>
<br>

<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
