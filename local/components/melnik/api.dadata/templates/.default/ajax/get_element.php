<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

if (!CModule::IncludeModule("iblock")) {
    die(json_encode(['error' => 'Модуль инфоблоков не найден']));
}

$iblock_id = 15; // ID инфоблока

$myViewElements = CIBlockElement::GetList(
    array("ID" => "DESC"), // Сортировка по убыванию, чтобы новые были сверху
    array("IBLOCK_ID" => $iblock_id, "ACTIVE" => "Y"),
    false,
    false,
    array(
        'ID',
        'NAME',
        "PROPERTY_INN",
        "PROPERTY_OGRN",
        "PROPERTY_ADDRESS"
    )
);

$items = [];
while ($arFields = $myViewElements->GetNext()) {
    $items[] = [
        'ID' => $arFields['ID'],
        'NAME' => $arFields['NAME'],
        'INN' => $arFields['PROPERTY_INN_VALUE'],
        'OGRN' => $arFields['PROPERTY_OGRN_VALUE'],
        'ADDRESS' => $arFields['PROPERTY_ADDRESS_VALUE']
    ];
}

echo json_encode(['items' => $items]);
