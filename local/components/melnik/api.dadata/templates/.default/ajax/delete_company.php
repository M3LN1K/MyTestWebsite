<?php
// Файл обработки данных из DADATA. обработчик запросов от JavaScript.
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

// Проверка подключенли инфоблок
if(!\Bitrix\Main\Loader::includeModule('iblock')){
    die("Модуль не найден");
}


$iblockId = (int)($_POST['iblock_id'] ?? 0);
$inn = trim($_POST['INN'] ?? '');


$arFilter = [
        'IBLOCK_ID' => $iblockId,
        'PROPERTY_INN' => $inn,
];

$res = CIBlockElement::GetList([], $arFilter, false, false, ['ID']);
$el = $res->Fetch();
if ($el){
    if (CIBlockElement::Delete((int)$el['ID'])){
        echo json_encode([
            "success" => true,
            "message" => "Компания удалена"
        ]);
    }else{
        echo json_encode([
            "success" => false,
            "message" => "Ошибка при удалении компании"
        ]);
    }
}else{
    echo json_encode([
        "success" => false,
        "message" => "Компания с таким ИНН не найдена"
    ]);
}