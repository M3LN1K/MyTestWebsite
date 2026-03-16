<?php
// Файл обработки данных из DADATA. обработчик запросов от JavaScript.
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

// Проверка подключенли инфоблок
if(!\Bitrix\Main\Loader::includeModule('iblock')){
    die("Модуль не найден");
}

// Указываю данные в переменные
$iblockId = (int)($_POST['iblock_id'] ?? 0);
$inn = trim($_POST['INN'] ?? '');

$el = new CIBlockElement;
$arFields = [
    'IBLOCK_ID' => $iblockId,
    'PROPERTY_INN' => $inn,
    'CHECK_PERMISSIONS' =>'N'
];

$rsElements = CIBlock::GetList([], $arFields, false,false,['ID', 'NAME']);

if ($arElement = $rsElements->Fetch()){
    echo json_encode([
        'exists' => true,
        'element_id' => $arElement['ID'],
        'name' => $arElement['NAME']
    ]);
}else{
    echo json_encode([
        'exists' => false,
    ]);
}