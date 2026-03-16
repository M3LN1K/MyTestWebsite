<?php

// пример файла .left.menu_ext.php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

global $APPLICATION;

$aMenuLinksExt = $APPLICATION->IncludeComponent(
    "bitrix:menu.sections",
    "",
    array(
        "ID" => $_REQUEST["ELEMENT_ID"],
        "IBLOCK_TYPE" => "apidadata",
        "IBLOCK_ID" => "15",
        "SECTION_URL" => "/apidadata/index.php?SECTION_ID=#SECTION_ID#",
        "CACHE_TIME" => "3600"
    )
);

$aMenuLinks = array_merge($aMenuLinks, $aMenuLinksExt);
