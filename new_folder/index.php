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

<?
// Создал вывод списка элементов из инфоблока на странице
//if (CModule::IncludeModule("iblock")):
//    $iblock_id = 15; // ID инфоблока
//    // Получаю элементы
//    $myViewElements = CIBlockElement::GetList (
//    // Сортировка элементов
//            Array(
//                    "ID" => "ASC"
//            ),
//            // Указываю нужный инфоблок
//            Array(
//                    "IBLOCK_ID" =>
//                            $iblock_id
//            ),
//            false,
//            false,
//            // Перечисляю все свойства элементов, для вывода
//            Array(
//                    'ID',
//                    'NAME',
//                    "ACTIVE" => "Y",
//                    "PROPERTY_INN",
//                    "PROPERTY_OGRN",
//                    "PROPERTY_ADDRESS"
//            )
//    );
//    while($arFields = $myViewElements->GetNext())
//    {
//
//
//        //Вывожу элемент со всеми свойствами + верстка
//
//        echo "<h1> Наименование: ".$arFields['NAME']."</h1><br>";
//        echo "<h3> ИНН: ".$arFields["PROPERTY_INN_VALUE"]."</h3><br>";
//        echo "<h4> ОГРН: ".$arFields["PROPERTY_OGRN_VALUE"]."</h4><br>";
//        echo "<h5> АДРЕС: ".$arFields["PROPERTY_ADDRESS_VALUE"]."</h5><br>";
//
//    }
//endif;

?>

<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
